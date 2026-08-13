/**
 * ============================================================
 *  SILVAIN AI · Chatbot Mejorado
 *  Conectado a Vercel Proxy (/api/chat) + Inventario Forestal JBP
 *  Mejoras:
 *   · Renderizado Markdown + resaltado de código
 *   · Efecto máquina de escribir (simulación de streaming)
 *   · Acciones por mensaje (copiar, regenerar, leer en voz alta, feedback)
 *   · Historial de conversaciones (localStorage, multi-sesión)
 *   · Sidebar con búsqueda
 *   · Detener generación (AbortController)
 *   · Voz a texto (Web Speech API)
 *   · Preguntas de seguimiento sugeridas
 *   · Auto-resize del textarea, atajos de teclado
 *   · Exportar conversación (.md / .txt)
 *   · Scroll inteligente + indicador "ir al final"
 *   · Categorías de prompts rápidos
 *  Mantiene: arquitectura del proxy, formato de history, RAG de inventario.
 * ============================================================ */

/* ============================================================
   1. ESTADO GLOBAL
   ============================================================ */
let chatForm, chatInput, chatBox, welcomeScreen;
let chatHistory = [];          // [{role, parts:[{text}]}]  ← formato Gemini
let currentMessages = [];      // [{id, role, text, ts}]    ← para UI/localStorage
let currentConvId = null;
let conversations = [];        // [{id, title, messages, createdAt, updatedAt}]
let isGenerating = false;
let abortController = null;
let readAloudMode = false;
let typingTimers = [];
let lastUserText = "";

/* Mapeo inverso: role → clase CSS */
const ROLE_CLASS = { user: "user-row", bot: "bot-row" };

/* ============================================================
   2. SISTEMA DE CONTEXTO (RAG) — SIN CAMBIOS FUNCIONALES
   ============================================================ */
function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function limpiarHTML(html) {
  if (!html) return "";
  return String(html)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function construirResumenInventario() {
  if (typeof baseDatosArboles === "undefined") return "";
  const arboles = Object.values(baseDatosArboles);
  const totalCarbono = arboles.reduce((s, a) => s + (a.carbono || 0), 0);
  const nativas = arboles.filter(a => !a.exotica).length;
  const lineas = arboles.map(a =>
    `- ${a.nombre} (${a.cientifico}) | ${a.familia} | ${a.exotica ? "Exótica" : "Nativa"} | ${a.carbono || 0} kg CO₂`
  );
  return `INVENTARIO FORESTAL JBP (Maní, Casanare): ${arboles.length} especies (${nativas} nativas). Carbono total estimado: ${totalCarbono.toFixed(1)} kg CO₂.\n${lineas.join("\n")}`;
}

function buscarEspeciesEnConsulta(consulta) {
  if (typeof baseDatosArboles === "undefined") return [];
  const texto = normalizarTexto(consulta);
  const palabras = texto.split(/[^a-zñ]+/).filter(p => p.length >= 3);
  const coincidencias = [];

  for (const a of Object.values(baseDatosArboles)) {
    const alias = [a.nombre, ...(a.nombresLocales || []), a.cientifico]
      .filter(Boolean)
      .map(normalizarTexto);

    if (alias.some(al => texto.includes(al))) {
      coincidencias.push({ arbol: a, score: 2 });
      continue;
    }
    const score = alias.reduce((s, al) => s + (palabras.includes(al) ? 1 : 0), 0);
    if (score > 0) coincidencias.push({ arbol: a, score });
  }

  return coincidencias
    .sort((x, y) => y.score - x.score)
    .slice(0, 2)
    .map(c => c.arbol);
}

function camposRelevantes(consulta) {
  const t = normalizarTexto(consulta);
  const grupos = [
    { k: ["morfologia"], claves: ["hoja", "flor", "fruto", "corteza", "raiz", "tronco", "madera", "morfologia", "altura", "porte", "follaje", "semilla", "forma", "color", "como es", "identificar", "caracteristica"] },
    { k: ["usos"], claves: ["uso", "sirve", "medicinal", "comestible", "aliment", "carpinteria", "aprovech", "beneficio", "para que"] },
    { k: ["fauna"], claves: ["animal", "fauna", "ave", "insecto", "polinizador", "abeja", "mariposa", "murcielago", "mamifero", "quien come"] },
    { k: ["distribucion"], claves: ["origen", "donde crece", "distribucion", "habitat", "nativa", "exotica", "de donde", "endemica", "invasora"] },
    { k: ["alometria", "densidad", "fraccion"], claves: ["carbono", "biomasa", "alometria", "co2", "captura", "secuestro", "densidad", "calcul", "cuanto almacen"] },
    { k: ["calendarioTexto"], claves: ["fenologia", "florece", "floracion", "fructifica", "calendario", "epoca", "mes", "cuando"] },
  ];
  const campos = new Set();
  grupos.forEach(g => {
    if (g.claves.some(c => t.includes(c))) g.k.forEach(k => campos.add(k));
  });
  if (campos.size === 0) {
    ["distribucion", "morfologia", "usos"].forEach(k => campos.add(k));
  }
  return campos;
}

function extraerFicha(a, campos) {
  let txt = `=== FICHA: ${a.nombre} (${a.cientifico}) ===\n`;
  txt += `Familia: ${a.familia} | ${a.exotica ? "EXÓTICA" : "NATIVA"} | Estado: ${a.estado}\n`;
  txt += `Origen: ${a.origen}\n`;
  txt += `Carbono estimado: ${a.carbono || 0} kg CO₂ | Viajes: ${a.viajes || 0}\n`;
  if (a.nombresLocales?.length) txt += `Nombres comunes: ${a.nombresLocales.join(", ")}\n`;

  if (campos.has("distribucion")) txt += `\nDISTRIBUCIÓN:\n${limpiarHTML(a.distribucion).slice(0, 1500)}\n`;
  if (campos.has("morfologia")) txt += `\nMORFOLOGÍA:\n${limpiarHTML(a.morfologia).slice(0, 1500)}\n`;
  if (campos.has("usos")) txt += `\nUSOS:\n${limpiarHTML(a.usos).slice(0, 1000)}\n`;
  if (campos.has("fauna")) txt += `\nFAUNA ASOCIADA:\n${limpiarHTML(a.fauna).slice(0, 800)}\n`;
  if (campos.has("alometria")) {
    txt += `\nBIOMASA Y CARBONO:\nDensidad madera: ${a.densidad}\nFracción carbono: ${a.fraccion}\n${limpiarHTML(a.alometria).slice(0, 900)}\n`;
  }
  if (campos.has("densidad")) txt += `\nDensidad madera: ${a.densidad}\n`;
  if (campos.has("fraccion")) txt += `\nFracción carbono: ${a.fraccion}\n`;
  if (campos.has("calendarioTexto") && Array.isArray(a.calendario)) {
    txt += `\nCALENDARIO FENOLÓGICO: ${a.calendario.map(c => `${c.mes}: ${c.fase}`).join(" | ")}\n`;
  }
  return txt;
}

function construirContexto(consulta) {
  if (typeof baseDatosArboles === "undefined") {
    return "\n\n[⚠️ baseDatosArboles no está cargado]";
  }
  const especies = buscarEspeciesEnConsulta(consulta);
  let contexto = `\n\n[INVENTARIO FORESTAL JBP - DATOS OFICIALES DEL PROYECTO]\n${construirResumenInventario()}\n`;

  if (especies.length > 0) {
    const campos = camposRelevantes(consulta);
    contexto += "\n[DATOS DETALLADOS DE LA(S) ESPECIE(S) CONSULTADA(S) - BASATE AQUÍ]:\n";
    especies.forEach(a => { contexto += extraerFicha(a, campos) + "\n"; });
  }

  contexto += "\n[INSTRUCCIÓN: Responde basándote PRIMERO en los datos del inventario de arriba. Si la respuesta no está ahí, dilo con honestidad en lugar de inventar. Mantén el tono de Silvain AI: cercano, educativo y con datos verificables.]";
  return contexto;
}

/* ============================================================
   3. UTILIDADES UI
   ============================================================ */
function $(id) { return document.getElementById(id); }
function $$(sel, ctx = document) { return ctx.querySelectorAll(sel); }

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatTime(ts) {
  const d = new Date(ts);
  return d.toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" });
}

function formatRelative(ts) {
  const diff = Date.now() - ts;
  const min = Math.floor(diff / 60000);
  if (min < 1) return "ahora";
  if (min < 60) return `hace ${min} min`;
  const h = Math.floor(min / 60);
  if (h < 24) return `hace ${h} h`;
  const d = Math.floor(h / 24);
  if (d < 7) return `hace ${d} d`;
  return new Date(ts).toLocaleDateString("es-CO", { day: "numeric", month: "short" });
}

function toast(message, type = "info") {
  const container = $("toastContainer");
  if (!container) return;
  const t = document.createElement("div");
  t.className = `ai-toast ai-toast-${type}`;
  const icon = { info: "fa-info-circle", success: "fa-check-circle", error: "fa-exclamation-circle", warn: "fa-triangle-exclamation" }[type] || "fa-info-circle";
  t.innerHTML = `<i class="fas ${icon}"></i><span>${escapeHtml(message)}</span>`;
  container.appendChild(t);
  setTimeout(() => t.classList.add("show"), 10);
  setTimeout(() => {
    t.classList.remove("show");
    setTimeout(() => t.remove(), 300);
  }, 3500);
}

function setStatus(state, text) {
  const dot = $("statusDot");
  const txt = $("statusText");
  if (!dot || !txt) return;
  dot.className = "ai-status-dot ai-status-" + state;
  txt.textContent = text;
}

/* ============================================================
   4. MARKDOWN RENDERING (con fallback)
   ============================================================ */
let markdownReady = false;

async function loadMarkdownLibs() {
  if (markdownReady || window.marked) {
    markdownReady = true;
    return;
  }
  try {
    await Promise.all([
      loadScript("https://cdn.jsdelivr.net/npm/marked@12.0.0/marked.min.js"),
      loadScript("https://cdn.jsdelivr.net/npm/dompurify@3.0.11/dist/purify.min.js")
    ]);
    if (window.marked) {
      marked.setOptions({
        breaks: true,
        gfm: true,
        headerIds: false,
        mangle: false
      });
    }
    markdownReady = true;
  } catch (e) {
    console.warn("⚠️ No se pudieron cargar libs de Markdown. Usando fallback.", e);
    markdownReady = false;
  }
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.defer = true;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

/** Convierte texto Markdown a HTML seguro. Fallback simple si no hay lib. */
function renderMarkdown(text) {
  if (!text) return "";
  if (markdownReady && window.marked && window.DOMPurify) {
    try {
      const raw = marked.parse(text);
      return DOMPurify.sanitize(raw, {
        ALLOWED_TAGS: ["h1","h2","h3","h4","h5","h6","p","br","hr","strong","em","b","i","u","s","del","ins","mark","small","sub","sup","ul","ol","li","blockquote","code","pre","a","table","thead","tbody","tr","th","td","div","span","img","abbr","details","summary"],
        ALLOWED_ATTR: ["href","src","alt","title","target","rel","class","colspan","rowspan","width","height"]
      });
    } catch (e) {
      console.warn("Error renderizando Markdown:", e);
    }
  }
  // Fallback: escapar HTML + convertir saltos de línea y bloques de código simples
  return fallbackMarkdown(text);
}

function fallbackMarkdown(text) {
  let html = escapeHtml(text);
  // Bloques de código ```...```
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) =>
    `<pre class="code-block"><code>${code.replace(/\n$/, "")}</code></pre>`);
  // Código inline `...`
  html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
  // Negrita **texto**
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  // Cursiva *texto* o _texto_
  html = html.replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, "$1<em>$2</em>");
  html = html.replace(/_([^_]+)_/g, "<em>$1</em>");
  // Encabezados
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");
  // Listas
  html = html.replace(/^\s*[\-\*] (.+)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>");
  // Enlaces [texto](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  // Saltos de línea
  html = html.replace(/\n/g, "<br>");
  // Limpiar <br> después de etiquetas de bloque
  html = html.replace(/(<\/(?:h1|h2|h3|ul|pre|li)>)<br>/g, "$1");
  return html;
}

/** Añade botones de copia a los bloques de código tras renderizar Markdown */
function enhanceCodeBlocks(container) {
  container.querySelectorAll("pre.code-block, pre > code").forEach(pre => {
    const block = pre.closest("pre");
    if (!block || block.querySelector(".code-copy-btn")) return;
    block.style.position = "relative";
    const btn = document.createElement("button");
    btn.className = "code-copy-btn";
    btn.innerHTML = '<i class="fas fa-copy"></i> Copiar';
    btn.addEventListener("click", () => {
      const code = block.querySelector("code")?.innerText || block.innerText;
      navigator.clipboard.writeText(code).then(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Copiado';
        setTimeout(() => (btn.innerHTML = '<i class="fas fa-copy"></i> Copiar'), 1500);
      });
    });
    block.appendChild(btn);
  });
}

/* ============================================================
   5. PERSISTENCIA (localStorage)
   ============================================================ */
const STORAGE_KEY = "silvain_conversations_v1";
const SETTINGS_KEY = "silvain_settings_v1";

function loadConversations() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    conversations = raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn("Error leyendo conversaciones:", e);
    conversations = [];
  }
}

function saveConversations() {
  try {
    // Mantener máximo 50 conversaciones para no llenar el almacenamiento
    if (conversations.length > 50) conversations = conversations.slice(0, 50);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
  } catch (e) {
    console.warn("Error guardando conversaciones:", e);
    if (e.name === "QuotaExceededError") {
      // Recortar y reintentar
      conversations = conversations.slice(0, 20);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations)); } catch (_) {}
      toast("Almacenamiento lleno: se conservan solo las 20 conversaciones más recientes.", "warn");
    }
  }
}

function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveSettings(s) {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); } catch {}
}

function genId() {
  return "c_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 7);
}

function createConversation() {
  const conv = {
    id: genId(),
    title: "Nueva conversación",
    messages: [],
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
  conversations.unshift(conv);
  saveConversations();
  return conv;
}

function getConversation(id) {
  return conversations.find(c => c.id === id);
}

function deleteConversation(id) {
  conversations = conversations.filter(c => c.id !== id);
  saveConversations();
}

function updateConversationTitle(conv, userText) {
  if (conv.title === "Nueva conversación") {
    conv.title = userText.slice(0, 40) + (userText.length > 40 ? "…" : "");
    conv.updatedAt = Date.now();
    saveConversations();
  }
}

function persistCurrentMessages() {
  if (!currentConvId) return;
  const conv = getConversation(currentConvId);
  if (conv) {
    conv.messages = currentMessages;
    conv.updatedAt = Date.now();
    saveConversations();
  }
}

/* ============================================================
   6. RENDER DEL SIDEBAR
   ============================================================ */
function renderConversationList(filter = "") {
  const list = $("convList");
  if (!list) return;
  list.innerHTML = "";

  const filtered = conversations.filter(c =>
    !filter ||
    c.title.toLowerCase().includes(filter.toLowerCase()) ||
    c.messages.some(m => m.text.toLowerCase().includes(filter.toLowerCase()))
  );

  if (filtered.length === 0) {
    list.innerHTML = `<div class="ai-empty-state">
      <i class="fas fa-comments"></i>
      <p>${filter ? "Sin resultados para tu búsqueda." : "Aún no tienes conversaciones guardadas.<br>¡Empieza a chatear con Silvain AI!"}</p>
    </div>`;
    return;
  }

  filtered.forEach(c => {
    const item = document.createElement("div");
    item.className = "ai-conv-item" + (c.id === currentConvId ? " active" : "");
    const lastMsg = c.messages[c.messages.length - 1];
    const preview = lastMsg
      ? (lastMsg.role === "user" ? "Tú: " : "Silvain: ") + lastMsg.text.replace(/[#*`>\-]/g, "").slice(0, 50)
      : "Sin mensajes aún";
    item.innerHTML = `
      <div class="ai-conv-info">
        <div class="ai-conv-title">${escapeHtml(c.title)}</div>
        <div class="ai-conv-preview">${escapeHtml(preview)}${lastMsg ? "…" : ""}</div>
        <div class="ai-conv-meta">${formatRelative(c.updatedAt)} · ${c.messages.length} msgs</div>
      </div>
      <button class="ai-conv-delete" title="Eliminar" aria-label="Eliminar conversación">
        <i class="fas fa-trash"></i>
      </button>
    `;
    item.addEventListener("click", (e) => {
      if (e.target.closest(".ai-conv-delete")) return;
      loadConversation(c.id);
    });
    item.querySelector(".ai-conv-delete").addEventListener("click", (e) => {
      e.stopPropagation();
      confirmDelete(c.id);
    });
    list.appendChild(item);
  });
}

function confirmDelete(id) {
  const conv = getConversation(id);
  if (!conv) return;
  // Eliminación directa con opción a deshacer
  const idx = conversations.findIndex(c => c.id === id);
  const backup = conversations[idx];
  deleteConversation(id);
  if (id === currentConvId) {
    startNewChat();
  }
  renderConversationList();
  toast("Conversación eliminada", "info");
}

/* ============================================================
   7. RENDER DE MENSAJES
   ============================================================ */
function clearMessageWindow() {
  if (!chatBox) return;
  // Conservar la pantalla de bienvenida
  const ws = $("welcomeScreen");
  if (ws) ws.remove();
  chatBox.innerHTML = "";
}

function showWelcomeScreen() {
  if (!chatBox) return;
  chatBox.innerHTML = "";
  // Recrear pantalla de bienvenida (ya está en el HTML original, pero la limpiamos al cambiar de conversación)
  const ws = document.createElement("div");
  ws.className = "ai-welcome-screen";
  ws.id = "welcomeScreen";
  ws.innerHTML = `
    <div class="ai-logo-large">
      <img src="./imagenes/logoAI.jpeg" alt="Silvain AI Logo" loading="lazy">
    </div>
    <h2>Hola, soy <span class="ai-brand">Silvain AI</span></h2>
    <p>Tu tutor ambiental del Jardín Botánico JBP. Pregúntame sobre los árboles del colegio, sus servicios ecosistémicos, captura de carbono y mucho más.</p>
    <div class="ai-prompt-categories">
      <button class="ai-cat-tab active" data-cat="all"><i class="fas fa-grip"></i> Todos</button>
      <button class="ai-cat-tab" data-cat="arboles"><i class="fas fa-tree"></i> Árboles</button>
      <button class="ai-cat-tab" data-cat="carbono"><i class="fas fa-cloud"></i> Carbono</button>
      <button class="ai-cat-tab" data-cat="ecosistema"><i class="fas fa-mountain"></i> Ecosistema</button>
      <button class="ai-cat-tab" data-cat="identificar"><i class="fas fa-search-location"></i> Identificar</button>
    </div>
    <div class="ai-suggestions" id="suggestionsGrid"></div>
    <div class="ai-capabilities">
      <div class="ai-cap"><i class="fas fa-database"></i> Conoce el inventario forestal completo</div>
      <div class="ai-cap"><i class="fas fa-language"></i> Habla español colombiano natural</div>
      <div class="ai-cap"><i class="fas fa-microphone"></i> Puedes hablarle en voz</div>
      <div class="ai-cap"><i class="fas fa-file-export"></i> Exporta tus conversaciones</div>
    </div>
  `;
  chatBox.appendChild(ws);
  welcomeScreen = ws;
  setupPromptCategories();
  renderSuggestions("all");
}

function appendMessage(role, text, opts = {}) {
  if (!chatBox) return null;
  if (welcomeScreen) welcomeScreen.style.display = "none";

  const id = "m_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 6);
  const ts = opts.ts || Date.now();
  const msgRow = document.createElement("div");
  msgRow.className = `chat-row ${ROLE_CLASS[role] || "bot-row"}`;
  msgRow.dataset.id = id;

  const avatarIcon = role === "bot" ? "fa-robot" : "fa-user";
  const avatarClass = role === "bot" ? "bot-avatar" : "user-avatar";
  const avatarHtml = role === "bot"
    ? `<div class="avatar ${avatarClass}"><i class="fas ${avatarIcon}"></i></div>`
    : `<div class="avatar ${avatarClass}"><i class="fas ${avatarIcon}"></i></div>`;

  msgRow.innerHTML = `
    ${avatarHtml}
    <div class="msg-bubble">
      <div class="msg-content" data-role="${role}"></div>
      <div class="msg-meta">
        <span class="msg-time">${formatTime(ts)}</span>
        <div class="msg-actions"></div>
      </div>
    </div>
  `;
  chatBox.appendChild(msgRow);

  const contentEl = msgRow.querySelector(".msg-content");
  const actionsEl = msgRow.querySelector(".msg-actions");

  // Renderizar contenido
  if (role === "bot") {
    contentEl.innerHTML = renderMarkdown(text);
    enhanceCodeBlocks(contentEl);
  } else {
    contentEl.innerHTML = renderMarkdown(text);
  }

  // Acciones
  if (role === "bot") {
    addBotActions(actionsEl, id, text);
  } else {
    addUserActions(actionsEl, id, text);
  }

  // Guardar en estado
  const msgObj = { id, role, text, ts };
  if (opts.skipPersist !== true) {
    currentMessages.push(msgObj);
    persistCurrentMessages();
    updateMsgCount();
  }

  maybeAutoScroll();
  return msgRow;
}

function addBotActions(container, id, text) {
  const actions = [
    { icon: "fa-copy", title: "Copiar", onClick: () => {
      navigator.clipboard.writeText(text).then(() => toast("Respuesta copiada", "success"));
    }},
    { icon: "fa-volume-up", title: "Leer en voz alta", onClick: () => speakText(text) },
    { icon: "fa-rotate", title: "Regenerar", onClick: () => regenerateResponse(id) },
    { icon: "fa-thumbs-up", title: "Buena respuesta", onClick: (e) => {
      const btn = e.currentTarget;
      btn.classList.toggle("active");
      btn.querySelector("i").className = btn.classList.contains("active") ? "fas fa-thumbs-up" : "far fa-thumbs-up";
      toast("Gracias por tu feedback", "success");
    }},
    { icon: "fa-thumbs-down", title: "Mejorar respuesta", onClick: (e) => {
      const btn = e.currentTarget;
      btn.classList.toggle("active");
      btn.querySelector("i").className = btn.classList.contains("active") ? "fas fa-thumbs-down" : "far fa-thumbs-down";
      toast("Tomamos nota para mejorar", "info");
    }}
  ];
  actions.forEach(a => {
    const btn = document.createElement("button");
    btn.className = "msg-action-btn";
    btn.title = a.title;
    btn.setAttribute("aria-label", a.title);
    const iconClass = a.icon.startsWith("fa-thumbs") ? "far " + a.icon : "fas " + a.icon;
    btn.innerHTML = `<i class="${iconClass}"></i>`;
    btn.addEventListener("click", (e) => a.onClick(e));
    container.appendChild(btn);
  });
}

function addUserActions(container, id, text) {
  const actions = [
    { icon: "fa-copy", title: "Copiar", onClick: () => {
      navigator.clipboard.writeText(text).then(() => toast("Mensaje copiado", "success"));
    }},
    { icon: "fa-pen", title: "Editar y reenviar", onClick: () => editMessage(id, text) }
  ];
  actions.forEach(a => {
    const btn = document.createElement("button");
    btn.className = "msg-action-btn";
    btn.title = a.title;
    btn.setAttribute("aria-label", a.title);
    btn.innerHTML = `<i class="fas ${a.icon}"></i>`;
    btn.addEventListener("click", a.onClick);
    container.appendChild(btn);
  });
}

function editMessage(id, text) {
  if (!chatInput) return;
  // Eliminar este mensaje y la respuesta del bot siguiente, si existe
  const idx = currentMessages.findIndex(m => m.id === id);
  if (idx === -1) return;
  // Borrar del estado y del DOM los mensajes desde idx en adelante
  const idsToRemove = currentMessages.slice(idx).map(m => m.id);
  currentMessages = currentMessages.slice(0, idx);
  idsToRemove.forEach(mid => {
    const el = chatBox.querySelector(`[data-id="${mid}"]`);
    if (el) el.remove();
  });
  persistCurrentMessages();
  updateMsgCount();
  // Poner el texto en el input
  chatInput.value = text;
  autoResizeTextarea();
  chatInput.focus();
  // Sincronizar chatHistory (eliminar los mensajes eliminados del historial de Gemini)
  // Nota: chatHistory se reconstruye al enviar el próximo mensaje desde currentMessages
  toast("Edita tu mensaje y vuelve a enviar", "info");
}

/* ============================================================
   8. TYPING INDICATOR
   ============================================================ */
function showTypingIndicator() {
  if (!chatBox) return null;
  const indicator = document.createElement("div");
  indicator.className = "chat-row bot-row typing-row";
  indicator.id = "typingIndicator";
  indicator.innerHTML = `
    <div class="avatar bot-avatar"><i class="fas fa-robot"></i></div>
    <div class="msg-bubble">
      <div class="msg-content typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>
  `;
  chatBox.appendChild(indicator);
  maybeAutoScroll();
  return indicator;
}

function removeTypingIndicator() {
  const t = $("typingIndicator");
  if (t) t.remove();
}

/* ============================================================
   9. EFECTO MÁQUINA DE ESCRIBIR
   ============================================================ */
let currentTypewriter = null; // { contentEl, fullText, onDone }

function typewriterEffect(contentEl, fullText, onDone) {
  // Limpia timers previos por si acaso
  cancelTyping();

  const chars = Array.from(fullText);
  let i = 0;
  const chunkSize = Math.max(1, Math.floor(chars.length / 200)); // ~200 actualizaciones
  const interval = chars.length > 1500 ? 12 : (chars.length > 500 ? 18 : 25);

  // Primero mostrar texto escapado (modo "streaming")
  contentEl.innerHTML = "";
  const streamEl = document.createElement("span");
  streamEl.className = "typewriter-stream";
  contentEl.appendChild(streamEl);

  currentTypewriter = { contentEl, fullText, onDone, finished: false };

  function finish() {
    if (currentTypewriter) currentTypewriter.finished = true;
    contentEl.innerHTML = renderMarkdown(fullText);
    enhanceCodeBlocks(contentEl);
    typingTimers = [];
    const cb = currentTypewriter?.onDone;
    currentTypewriter = null;
    maybeAutoScroll();
    if (cb) cb();
  }

  function step() {
    if (i >= chars.length) {
      finish();
      return;
    }
    const next = chars.slice(i, i + chunkSize).join("");
    streamEl.textContent += next;
    i += chunkSize;
    maybeAutoScroll();
    typingTimers.push(setTimeout(step, interval));
  }
  step();
}

function cancelTyping() {
  typingTimers.forEach(t => clearTimeout(t));
  typingTimers = [];
  // Si había un typewriter activo, renderizar lo que ya se recibió como Markdown
  // y disparar el callback onDone para que el mensaje se persista.
  if (currentTypewriter && !currentTypewriter.finished) {
    const { contentEl, fullText, onDone } = currentTypewriter;
    currentTypewriter.finished = true;
    currentTypewriter = null;
    try {
      contentEl.innerHTML = renderMarkdown(fullText);
      enhanceCodeBlocks(contentEl);
    } catch (e) {
      console.warn("Error al renderizar texto parcial:", e);
    }
    if (onDone) onDone();
  } else {
    currentTypewriter = null;
  }
}

/* ============================================================
   10. SCROLL INTELIGENTE
   ============================================================ */
let userScrolledUp = false;

function setupSmartScroll() {
  if (!chatBox) return;
  chatBox.addEventListener("scroll", () => {
    const nearBottom = chatBox.scrollHeight - chatBox.scrollTop - chatBox.clientHeight < 80;
    userScrolledUp = !nearBottom;
    const btn = $("scrollBottomBtn");
    if (btn) btn.classList.toggle("show", userScrolledUp);
  });
}

function maybeAutoScroll() {
  if (!chatBox) return;
  if (!userScrolledUp) {
    requestAnimationFrame(() => {
      chatBox.scrollTop = chatBox.scrollHeight;
    });
  }
}

function scrollToBottom(force = false) {
  if (!chatBox) return;
  userScrolledUp = false;
  chatBox.scrollTop = chatBox.scrollHeight;
  const btn = $("scrollBottomBtn");
  if (btn) btn.classList.remove("show");
}

/* ============================================================
   11. VOZ (Web Speech API)
   ============================================================ */
let recognition = null;
let isListening = false;

function setupVoiceInput() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const voiceBtn = $("voiceBtn");
  if (!SR || !voiceBtn) {
    if (voiceBtn) voiceBtn.style.display = "none";
    return;
  }
  recognition = new SR();
  recognition.lang = "es-CO";
  recognition.continuous = false;
  recognition.interimResults = true;

  let finalText = "";
  recognition.onresult = (e) => {
    let interim = "";
    finalText = "";
    for (let i = 0; i < e.results.length; i++) {
      const tr = e.results[i];
      if (tr.isFinal) finalText += tr[0].transcript;
      else interim += tr[0].transcript;
    }
    if (chatInput) {
      chatInput.value = (finalText + interim).trim();
      autoResizeTextarea();
    }
  };
  recognition.onend = () => {
    isListening = false;
    voiceBtn.classList.remove("listening");
    voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
    setStatus("ready", "Listo");
  };
  recognition.onerror = (e) => {
    isListening = false;
    voiceBtn.classList.remove("listening");
    voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
    if (e.error === "not-allowed") {
      toast("Necesitas permitir el acceso al micrófono", "error");
    } else if (e.error !== "aborted") {
      toast("Error de reconocimiento de voz: " + e.error, "warn");
    }
    setStatus("ready", "Listo");
  };

  voiceBtn.addEventListener("click", () => {
    if (isListening) {
      recognition.stop();
    } else {
      try {
        finalText = "";
        if (chatInput) chatInput.value = "";
        recognition.start();
        isListening = true;
        voiceBtn.classList.add("listening");
        voiceBtn.innerHTML = '<i class="fas fa-circle"></i>';
        setStatus("listening", "Escuchando…");
      } catch (err) {
        toast("No se pudo iniciar el micrófono", "error");
      }
    }
  });
}

function speakText(text) {
  if (!("speechSynthesis" in window)) {
    toast("Tu navegador no soporta lectura en voz alta", "warn");
    return;
  }
  // Si ya está hablando, detener
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    return;
  }
  // Limpiar Markdown simple para una lectura más natural
  const clean = text
    .replace(/```[\s\S]*?```/g, " (bloque de código) ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/[*_#>|]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  const utter = new SpeechSynthesisUtterance(clean);
  utter.lang = "es-ES";
  utter.rate = 1;
  utter.pitch = 1;
  // Buscar voz en español si está disponible
  const voices = window.speechSynthesis.getVoices();
  const esVoice = voices.find(v => v.lang.startsWith("es"));
  if (esVoice) utter.voice = esVoice;
  window.speechSynthesis.speak(utter);
  toast("Leyendo en voz alta…", "info");
}

/* ============================================================
   12. LLAMADA AL PROXY (igual que antes, + AbortController)
   ============================================================ */
async function getAIResponse(prompt) {
  const contexto = construirContexto(prompt);
  const mensajeFinal = prompt + contexto;

  // Reconstruir chatHistory desde currentMessages para mantener sincronía
  // (esto permite que editar/regenerar/borrar mensajes funcione correctamente)
  chatHistory = currentMessages
    .filter(m => m.role === "user" || m.role === "bot")
    .map(m => ({
      role: m.role === "bot" ? "model" : "user",
      parts: [{ text: m.text }]
    }));

  // El mensaje actual (con contexto) se envía por separado al proxy
  abortController = new AbortController();

  try {
    setStatus("thinking", "Pensando…");
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: abortController.signal,
      body: JSON.stringify({
        message: mensajeFinal,
        // Excluir el último mensaje (que es el usuario actual) para no duplicarlo
        history: chatHistory.slice(0, -1),
        contextoInventario: construirResumenInventario()
      })
    });

    if (!response.ok) {
      let errMsg = `Error ${response.status}`;
      try {
        const errorData = await response.json();
        errMsg = errorData.error || errMsg;
      } catch {}
      if (response.status === 500) return "⚠️ Error del servidor. La API Key podría no estar configurada en Vercel. Comunícate con el administrador del proyecto.";
      if (response.status === 429) return "⏳ Demasiadas solicitudes en poco tiempo. Espera unos segundos e inténtalo de nuevo.";
      return `😕 ${errMsg}`;
    }

    const data = await response.json();
    if (data.reply) {
      setStatus("ready", "Listo");
      return data.reply;
    }
    return "😕 No pude generar una respuesta. Intenta de nuevo.";
  } catch (error) {
    if (error.name === "AbortError") {
      return null; // El usuario canceló
    }
    console.error("❌ Error de red:", error);
    setStatus("error", "Sin conexión");
    return `😕 Error de conexión: ${error.message}\n\nVerifica tu conexión a internet e inténtalo nuevamente.`;
  } finally {
    abortController = null;
  }
}

/* ============================================================
   13. ENVÍO DE MENSAJES
   ============================================================ */
async function handleSendMessage(e) {
  if (e) e.preventDefault();
  if (!chatInput) return;
  const text = chatInput.value.trim();
  if (!text || isGenerating) return;

  // Si no hay conversación activa, crear una
  if (!currentConvId) {
    const conv = createConversation();
    currentConvId = conv.id;
  }
  const conv = getConversation(currentConvId);
  if (conv) updateConversationTitle(conv, text);

  lastUserText = text;
  chatInput.value = "";
  autoResizeTextarea();
  updateCharCounter();
  setGenerating(true);

  // Mostrar mensaje del usuario
  appendMessage("user", text);

  // Mostrar indicador de escritura
  showTypingIndicator();

  // Solicitar respuesta
  const aiResponse = await getAIResponse(text);
  removeTypingIndicator();

  if (aiResponse === null) {
    // Generación cancelada durante la petición
    appendMessage("bot", "_Generación detenida por el usuario._");
    isGenerating = false;
    setGeneratingUI(false);
    renderConversationList();
  } else if (aiResponse) {
    // Crear burbuja vacía y animar con efecto máquina de escribir
    const row = appendMessage("bot", "", { skipPersist: true });
    if (row) {
      const contentEl = row.querySelector(".msg-content");
      // isGenerating se mantiene true durante el typewriter;
      // el estado se resetea en el callback onDone.
      setGeneratingUI(true);
      typewriterEffect(contentEl, aiResponse, () => {
        isGenerating = false;
        setGeneratingUI(false);
        // Guardar mensaje final
        currentMessages.push({ id: row.dataset.id, role: "bot", text: aiResponse, ts: Date.now() });
        persistCurrentMessages();
        updateMsgCount();
        // Sugerir preguntas de seguimiento
        renderFollowUps(aiResponse);
        // Leer en voz alta si está activado
        if (readAloudMode) speakText(aiResponse);
        renderConversationList();
      });
    } else {
      isGenerating = false;
      setGeneratingUI(false);
      renderConversationList();
    }
  } else {
    isGenerating = false;
    setGeneratingUI(false);
    renderConversationList();
  }
}

function setGenerating(state) {
  isGenerating = state;
  setGeneratingUI(state);
}

function setGeneratingUI(state) {
  const sendBtn = $("sendBtn");
  const stopBtn = $("stopBtn");
  if (sendBtn) sendBtn.hidden = state;
  if (stopBtn) stopBtn.hidden = !state;
}

function stopGeneration() {
  if (abortController) {
    abortController.abort();
  }
  cancelTyping();
  isGenerating = false;
  setGeneratingUI(false);
  removeTypingIndicator();
  setStatus("ready", "Detenido");
  toast("Generación detenida", "info");
}

async function regenerateResponse(botMsgId) {
  // Encontrar el mensaje del usuario anterior al bot
  const idx = currentMessages.findIndex(m => m.id === botMsgId);
  if (idx === -1) return;
  // Buscar el mensaje del usuario previo
  let userIdx = idx - 1;
  while (userIdx >= 0 && currentMessages[userIdx].role !== "user") userIdx--;
  if (userIdx < 0) {
    toast("No hay mensaje previo para regenerar", "warn");
    return;
  }
  const userText = currentMessages[userIdx].text;
  // Eliminar el mensaje del bot y todos los posteriores
  const idsToRemove = currentMessages.slice(idx).map(m => m.id);
  currentMessages = currentMessages.slice(0, idx);
  idsToRemove.forEach(mid => {
    const el = chatBox.querySelector(`[data-id="${mid}"]`);
    if (el) el.remove();
  });
  persistCurrentMessages();
  updateMsgCount();

  // Solicitar nueva respuesta
  setGenerating(true);
  showTypingIndicator();
  const aiResponse = await getAIResponse(userText);
  removeTypingIndicator();
  if (aiResponse && aiResponse !== null) {
    const row = appendMessage("bot", "", { skipPersist: true });
    if (row) {
      const contentEl = row.querySelector(".msg-content");
      setGeneratingUI(true);
      typewriterEffect(contentEl, aiResponse, () => {
        isGenerating = false;
        setGeneratingUI(false);
        currentMessages.push({ id: row.dataset.id, role: "bot", text: aiResponse, ts: Date.now() });
        persistCurrentMessages();
        updateMsgCount();
        renderFollowUps(aiResponse);
        if (readAloudMode) speakText(aiResponse);
        renderConversationList();
      });
    } else {
      isGenerating = false;
      setGeneratingUI(false);
      renderConversationList();
    }
  } else {
    // Respuesta cancelada o vacía
    isGenerating = false;
    setGeneratingUI(false);
    renderConversationList();
  }
}

/* ============================================================
   14. PREGUNTAS DE SEGUIMIENTO
   ============================================================ */
function renderFollowUps(botText) {
  // Generar preguntas de seguimiento basadas en el contenido de la respuesta
  const followUps = generateFollowUps(botText);
  if (followUps.length === 0) return;

  const container = document.createElement("div");
  container.className = "ai-followups";
  container.innerHTML = `<div class="ai-followups-label"><i class="fas fa-lightbulb"></i> Preguntas relacionadas:</div>`;
  const chipsWrap = document.createElement("div");
  chipsWrap.className = "ai-followups-chips";
  followUps.forEach(q => {
    const btn = document.createElement("button");
    btn.className = "ai-followup-chip";
    btn.textContent = q;
    btn.addEventListener("click", () => {
      chatInput.value = q;
      handleSendMessage(new Event("submit"));
    });
    chipsWrap.appendChild(btn);
  });
  container.appendChild(chipsWrap);
  chatBox.appendChild(container);
  maybeAutoScroll();
}

function generateFollowUps(text) {
  const t = text.toLowerCase();
  const followUps = [];
  // Detectar especie mencionada
  if (typeof baseDatosArboles !== "undefined") {
    for (const a of Object.values(baseDatosArboles)) {
      const nombre = a.nombre.toLowerCase();
      if (t.includes(nombre)) {
        followUps.push(`¿Para qué se usa el ${a.nombre}?`);
        followUps.push(`¿Qué fauna está asociada al ${a.nombre}?`);
        followUps.push(`¿Cuándo florece el ${a.nombre}?`);
        break;
      }
    }
  }
  // Detectar tema
  if (t.includes("carbono") || t.includes("biomasa") || t.includes("co₂")) {
    followUps.push("¿Cómo se calcula la biomasa de un árbol?");
    followUps.push("¿Qué especie almacena más carbono?");
  }
  if (t.includes("servicios ecosistémicos")) {
    followUps.push("¿Cuáles son los servicios culturales del jardín?");
  }
  if (t.includes("nativa") || t.includes("exótica")) {
    followUps.push("¿Cuántas especies nativas hay en el inventario?");
  }
  // Pregunta genérica si no se generó nada
  if (followUps.length === 0) {
    followUps.push("Dame más detalles sobre este tema.");
    followUps.push("¿Dónde puedo ver esto en el colegio?");
  }
  return followUps.slice(0, 3);
}

/* ============================================================
   15. PREGUNTAS RÁPIDAS / SUGERENCIAS POR CATEGORÍA
   ============================================================ */
const PROMPT_CATEGORIES = {
  all: [
    { cat: "arboles", q: "¿Cómo se calcula la biomasa de un árbol?", icon: "fa-tree" },
    { cat: "arboles", q: "Dime características del Flor Amarillo", icon: "fa-leaf" },
    { cat: "carbono", q: "Explícame el secuestro de carbono", icon: "fa-cloud" },
    { cat: "ecosistema", q: "¿Qué son los servicios ecosistémicos?", icon: "fa-mountain" },
    { cat: "identificar", q: "¿Cómo identifico un samán por su corteza?", icon: "fa-search-location" },
    { cat: "arboles", q: "¿Qué especies nativas hay en el inventario?", icon: "fa-seedling" },
    { cat: "carbono", q: "¿Qué árbol almacena más carbono?", icon: "fa-chart-bar" },
    { cat: "ecosistema", q: "¿Qué fauna asociada tiene el palo cruz?", icon: "fa-dove" }
  ],
  arboles: [
    { q: "Dime características del Flor Amarillo", icon: "fa-leaf" },
    { q: "¿Qué especies nativas hay en el inventario?", icon: "fa-seedling" },
    { q: "¿Cómo identifico un guamo por su corteza?", icon: "fa-tree" },
    { q: "¿Cuándo florece el gualanday?", icon: "fa-calendar" },
    { q: "¿Qué árbol es exótico en el colegio?", icon: "fa-globe" },
    { q: "Háblame del Almendro y sus usos", icon: "fa-circle-info" }
  ],
  carbono: [
    { q: "¿Cómo se calcula la biomasa de un árbol?", icon: "fa-calculator" },
    { q: "Explícame el secuestro de carbono", icon: "fa-cloud" },
    { q: "¿Qué árbol almacena más carbono?", icon: "fa-chart-bar" },
    { q: "¿Qué es la densidad de la madera?", icon: "fa-cube" },
    { q: "¿Cuánto CO₂ capturar los árboles del colegio?", icon: "fa-leaf" }
  ],
  ecosistema: [
    { q: "¿Qué son los servicios ecosistémicos?", icon: "fa-mountain" },
    { q: "¿Qué fauna asociada tiene el caracaro?", icon: "fa-dove" },
    { q: "¿Qué son los servicios culturales?", icon: "fa-palette" },
    { q: "¿Cómo los árboles regulan el clima?", icon: "fa-temperature-half" },
    { q: "¿Qué es la polinización y por qué importa?", icon: "fa-bug" }
  ],
  identificar: [
    { q: "¿Cómo identifico un trompillo por su corteza?", icon: "fa-search-location" },
    { q: "¿Qué árbol tiene hojas compuestas?", icon: "fa-leaf" },
    { q: "¿Cómo identifico al merecure?", icon: "fa-circle-question" },
    { q: "¿Qué árbol tiene flor amarilla llamativa?", icon: "fa-sun" },
    { q: "¿Cómo reconocer un árbol por su fruto?", icon: "fa-apple-whole" }
  ]
};

function renderSuggestions(cat = "all") {
  const grid = $("suggestionsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const items = PROMPT_CATEGORIES[cat] || PROMPT_CATEGORIES.all;
  items.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "suggestion-chip";
    btn.innerHTML = `<i class="fas ${item.icon}"></i> <span>${escapeHtml(item.q)}</span>`;
    btn.addEventListener("click", () => setQuickQuestion(item.q));
    grid.appendChild(btn);
  });
}

function setupPromptCategories() {
  document.querySelectorAll(".ai-cat-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".ai-cat-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderSuggestions(tab.dataset.cat);
    });
  });
}

/* ============================================================
   16. GESTIÓN DE CONVERSACIONES
   ============================================================ */
function startNewChat() {
  currentConvId = null;
  currentMessages = [];
  chatHistory = [];
  showWelcomeScreen();
  updateMsgCount();
  updateCurrentTitle();
  renderConversationList();
  if (chatInput) chatInput.focus();
}

function loadConversation(id) {
  const conv = getConversation(id);
  if (!conv) return;
  currentConvId = id;
  currentMessages = Array.isArray(conv.messages) ? [...conv.messages] : [];
  chatHistory = currentMessages.map(m => ({
    role: m.role === "bot" ? "model" : "user",
    parts: [{ text: m.text }]
  }));

  // Limpiar y mostrar mensajes
  if (!chatBox) return;
  chatBox.innerHTML = "";
  welcomeScreen = null;
  conv.messages.forEach(m => {
    appendMessage(m.role, m.text, { ts: m.ts, skipPersist: true });
  });
  updateMsgCount();
  updateCurrentTitle(conv.title);
  renderConversationList();
  closeSidebarOnMobile();
  scrollToBottom();
}

function clearCurrentChat() {
  if (currentMessages.length === 0) {
    toast("La conversación ya está vacía", "info");
    return;
  }
  if (!confirm("¿Limpiar la conversación actual? Esta acción no se puede deshacer.")) return;
  currentMessages = [];
  chatHistory = [];
  if (currentConvId) {
    const conv = getConversation(currentConvId);
    if (conv) {
      conv.messages = [];
      conv.title = "Nueva conversación";
      conv.updatedAt = Date.now();
      saveConversations();
    }
  }
  showWelcomeScreen();
  updateMsgCount();
  renderConversationList();
  toast("Conversación limpiada", "success");
}

function exportConversation() {
  if (currentMessages.length === 0) {
    toast("No hay mensajes para exportar", "warn");
    return;
  }
  const conv = getConversation(currentConvId);
  const title = conv ? conv.title : "Silvain AI - Conversación";
  const date = new Date().toLocaleString("es-CO");

  let md = `# ${title}\n\n`;
  md += `> Exportado desde Silvain AI · ${date}\n\n---\n\n`;
  currentMessages.forEach(m => {
    const who = m.role === "user" ? "🧑 Estudiante" : "🌳 Silvain AI";
    const time = formatTime(m.ts);
    md += `### ${who} · _${time}_\n\n${m.text}\n\n---\n\n`;
  });

  const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `silvain-${title.replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-").toLowerCase().slice(0, 40)}-${Date.now()}.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast("Conversación exportada como Markdown", "success");
}

/* ============================================================
   17. SIDEBAR (móvil/desktop)
   ============================================================ */
function toggleSidebar() {
  const sb = $("aiSidebar");
  const ov = $("sidebarOverlay");
  if (!sb) return;
  sb.classList.toggle("open");
  if (ov) ov.classList.toggle("show");
}

function closeSidebarOnMobile() {
  if (window.innerWidth <= 900) {
    const sb = $("aiSidebar");
    const ov = $("sidebarOverlay");
    if (sb) sb.classList.remove("open");
    if (ov) ov.classList.remove("show");
  }
}

/* ============================================================
   18. TEXTAREA Y ATAJOS DE TECLADO
   ============================================================ */
function autoResizeTextarea() {
  if (!chatInput) return;
  chatInput.style.height = "auto";
  chatInput.style.height = Math.min(chatInput.scrollHeight, 200) + "px";
}

function updateCharCounter() {
  const counter = $("charCounter");
  if (!counter || !chatInput) return;
  const len = chatInput.value.length;
  counter.textContent = `${len} / 2000`;
  counter.classList.toggle("over", len > 2000);
  // Limitar
  if (len > 2000) {
    chatInput.value = chatInput.value.slice(0, 2000);
    counter.textContent = "2000 / 2000";
  }
}

function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    // Ctrl+K / Cmd+K → nueva conversación
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      startNewChat();
    }
    // Escape → detener generación
    if (e.key === "Escape" && isGenerating) {
      stopGeneration();
    }
    // Ctrl+B / Cmd+B → toggle sidebar
    if ((e.ctrlKey || e.metaKey) && e.key === "b") {
      e.preventDefault();
      toggleSidebar();
    }
  });

  if (chatInput) {
    chatInput.addEventListener("keydown", (e) => {
      // Enter → enviar; Shift+Enter → salto de línea
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage(new Event("submit"));
      }
    });
    chatInput.addEventListener("input", () => {
      autoResizeTextarea();
      updateCharCounter();
    });
  }
}

/* ============================================================
   19. ACTUALIZACIONES DE UI
   ============================================================ */
function updateMsgCount() {
  const el = $("msgCount");
  if (el) el.textContent = currentMessages.length;
}

function updateCurrentTitle(title) {
  const el = $("currentTitle");
  if (!el) return;
  const span = el.querySelector("span");
  if (span) span.textContent = title || "Silvain AI";
}

/* ============================================================
   20. INICIALIZACIÓN
   ============================================================ */
document.addEventListener("DOMContentLoaded", async () => {
  chatForm = null; // No usamos form, usamos textarea + button
  chatInput = document.getElementById("userInput");
  chatBox = document.getElementById("chatWindow");
  welcomeScreen = document.getElementById("welcomeScreen");

  // Cargar conversaciones
  loadConversations();

  // Cargar librerías de Markdown en paralelo
  loadMarkdownLibs();

  // Setup UI
  setupPromptCategories();
  renderSuggestions("all");
  setupSmartScroll();
  setupVoiceInput();
  setupKeyboardShortcuts();
  renderConversationList();

  // Contador de especies
  if (typeof baseDatosArboles !== "undefined") {
    const count = Object.keys(baseDatosArboles).length;
    const tc = document.getElementById("treeCount");
    if (tc) tc.textContent = count;
  }

  // Botones
  const sendBtn = document.getElementById("sendBtn");
  if (sendBtn) sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleSendMessage();
  });

  const stopBtn = document.getElementById("stopBtn");
  if (stopBtn) stopBtn.addEventListener("click", stopGeneration);

  const newChatBtn = document.getElementById("newChatBtn");
  if (newChatBtn) newChatBtn.addEventListener("click", startNewChat);

  const clearBtn = document.getElementById("clearChatBtn");
  if (clearBtn) clearBtn.addEventListener("click", clearCurrentChat);

  const exportBtn = document.getElementById("exportBtn");
  if (exportBtn) exportBtn.addEventListener("click", exportConversation);

  const sidebarToggle = document.getElementById("sidebarToggle");
  if (sidebarToggle) sidebarToggle.addEventListener("click", toggleSidebar);

  const sidebarClose = document.getElementById("sidebarClose");
  if (sidebarClose) sidebarClose.addEventListener("click", toggleSidebar);

  const overlay = document.getElementById("sidebarOverlay");
  if (overlay) overlay.addEventListener("click", toggleSidebar);

  const convSearch = document.getElementById("convSearch");
  if (convSearch) convSearch.addEventListener("input", (e) => renderConversationList(e.target.value));

  const scrollBtn = document.getElementById("scrollBottomBtn");
  if (scrollBtn) scrollBtn.addEventListener("click", () => scrollToBottom(true));

  const readAloudBtn = document.getElementById("readAloudToggleBtn");
  if (readAloudBtn) readAloudBtn.addEventListener("click", () => {
    readAloudMode = !readAloudMode;
    readAloudBtn.classList.toggle("active", readAloudMode);
    readAloudBtn.setAttribute("aria-pressed", String(readAloudMode));
    toast(readAloudMode ? "Lectura en voz alta activada" : "Lectura en voz alta desactivada", "info");
    if (readAloudMode) saveSettings({ ...loadSettings(), readAloud: true });
    else saveSettings({ ...loadSettings(), readAloud: false });
  });

  // Restaurar preferencia de lectura
  const settings = loadSettings();
  if (settings.readAloud && readAloudBtn) {
    readAloudMode = true;
    readAloudBtn.classList.add("active");
    readAloudBtn.setAttribute("aria-pressed", "true");
  }

  // Auto-focus
  if (chatInput) chatInput.focus();
  autoResizeTextarea();
  updateCharCounter();

  // Precargar voces de TTS
  if ("speechSynthesis" in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }

  console.log("✅ Silvain AI inicializado (modo Proxy Vercel + contexto JBP + mejoras)");
  console.log("🌳 Inventario cargado:", typeof baseDatosArboles !== "undefined" ? "SÍ" : "NO");
});

/* ============================================================
   21. API PÚBLICA
   ============================================================ */
function setQuickQuestion(text) {
  if (chatInput) {
    chatInput.value = text;
    autoResizeTextarea();
    updateCharCounter();
    handleSendMessage(new Event("submit"));
  }
}

window.setQuickQuestion = setQuickQuestion;
window.startNewChat = startNewChat;
window.toggleSidebar = toggleSidebar;
