/**
 * Configuración del Chatbot Silvain AI
 * Conectado a Vercel Proxy (api/chat.js) + Inventario Forestal JBP
 * Incluye inyección de contexto (RAG simplificado) desde baseDatosArboles
 */

let chatForm, chatInput, chatBox, welcomeScreen;
let chatHistory = [];

/* ============================================================
   === SISTEMA DE CONTEXTO: Inventario Forestal JBP ===
   ============================================================ */

/** Normaliza texto: minúsculas y sin tildes, para comparar sin errores de acentos */
function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/** Limpia etiquetas HTML y espacios sobrantes de las fichas */
function limpiarHTML(html) {
  if (!html) return "";
  return String(html)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Resumen compacto de todo el inventario (~300 tokens) */
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

/** Busca qué especies menciona el usuario en su pregunta */
function buscarEspeciesEnConsulta(consulta) {
  if (typeof baseDatosArboles === "undefined") return [];
  const texto = normalizarTexto(consulta);
  const palabras = texto.split(/[^a-zñ]+/).filter(p => p.length >= 3);
  const coincidencias = [];

  for (const a of Object.values(baseDatosArboles)) {
    const alias = [a.nombre, ...(a.nombresLocales || []), a.cientifico]
      .filter(Boolean)
      .map(normalizarTexto);

    // Pase 1: el nombre o alias aparece dentro de la pregunta
    if (alias.some(al => texto.includes(al))) {
      coincidencias.push({ arbol: a, score: 2 });
      continue;
    }
    // Pase 2: alguna palabra suelta de la pregunta coincide con un alias
    const score = alias.reduce((s, al) => s + (palabras.includes(al) ? 1 : 0), 0);
    if (score > 0) coincidencias.push({ arbol: a, score });
  }

  return coincidencias
    .sort((x, y) => y.score - x.score)
    .slice(0, 2)   // máximo 2 especies por consulta
    .map(c => c.arbol);
}

/** Según el tema de la pregunta, elige qué campos de la ficha incluir */
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
    // Pregunta general sobre la especie: dar lo esencial
    ["distribucion", "morfologia", "usos"].forEach(k => campos.add(k));
  }
  return campos;
}

/** Ficha textual compacta y limpia de una especie (~1000-1500 tokens) */
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

/** Construye el contexto final a inyectar en el prompt */
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
   === CHATBOT (lógica original, adaptada) ===
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  chatForm = document.getElementById("chatForm");
  chatInput = document.getElementById("userInput");
  chatBox = document.getElementById("chatWindow");
  welcomeScreen = document.getElementById("welcomeScreen");

  if (chatForm && chatInput && chatBox) {
    chatHistory = [];
    chatForm.addEventListener("submit", handleSendMessage);
    console.log("✅ Silvain AI inicializado (modo Proxy Vercel + contexto JBP)");
    console.log("🌳 Inventario cargado:", typeof baseDatosArboles !== "undefined" ? "SÍ" : "NO");
  } else {
    console.error("❌ No se encontraron los elementos del chat en el DOM");
  }
});

function setQuickQuestion(text) {
  if (chatInput) {
    chatInput.value = text;
    handleSendMessage(new Event("submit"));
  }
}

function appendMessage(role, text) {
  if (!chatBox || !welcomeScreen) return;
  welcomeScreen.style.display = "none";
  const msgRow = document.createElement("div");
  msgRow.className = `chat-row ${role}-row`;
  const avatarIcon = role === "bot" ? "fa-robot" : "fa-user";
  const avatarClass = role === "bot" ? "bot-avatar" : "user-avatar";
  const formattedText = text.replace(/\n/g, "<br>");
  msgRow.innerHTML = `<div class="avatar ${avatarClass}"><i class="fas ${avatarIcon}"></i></div><div class="msg-content">${formattedText}</div>`;
  chatBox.appendChild(msgRow);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msgRow;
}

function showTypingIndicator() {
  if (!chatBox) return null;
  const indicator = document.createElement("div");
  indicator.className = "chat-row bot-row typing-row";
  indicator.innerHTML = `<div class="avatar bot-avatar"><i class="fas fa-robot"></i></div><div class="msg-content typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`;
  chatBox.appendChild(indicator);
  chatBox.scrollTop = chatBox.scrollHeight;
  return indicator;
}

async function getAIResponse(prompt) {
  // 👇 AQUÍ SE INYECTA EL CONTEXTO DEL INVENTARIO
  const contexto = construirContexto(prompt);
  const mensajeFinal = prompt + contexto;

  chatHistory.push({ role: "user", parts: [{ text: mensajeFinal }] });

  try {
    console.log("📡 Enviando petición al proxy de Vercel...");
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: mensajeFinal,
        history: chatHistory.slice(0, -1),
        contextoInventario: construirResumenInventario() // se mantiene por compatibilidad con tu proxy
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Error del proxy:", errorData);
      if (response.status === 500) return "⚠️ Error del servidor. La API Key podría no estar configurada en Vercel.";
      if (response.status === 429) return "⏳ Demasiadas solicitudes. Espera un momento.";
      return `😕 Error ${response.status}: ${errorData.error || "Desconocido"}`;
    }

    const data = await response.json();
    if (data.reply) {
      chatHistory.push({ role: "model", parts: [{ text: data.reply }] });
      console.log("✅ Respuesta recibida correctamente");
      return data.reply;
    }
    return "😕 No pude generar una respuesta. Intenta de nuevo.";
  } catch (error) {
    console.error("❌ Error de red:", error);
    return `😕 Error de conexión: ${error.message}\n\nVerifica tu conexión a internet.`;
  }
}

async function handleSendMessage(e) {
  if (e) e.preventDefault();
  if (!chatInput || !chatForm) return;
  const text = chatInput.value.trim();
  if (!text) return;

  appendMessage("user", text);
  chatInput.value = "";
  const typingIndicator = showTypingIndicator();

  try {
    const aiResponse = await getAIResponse(text);
    if (typingIndicator) typingIndicator.remove();
    appendMessage("bot", aiResponse);
  } catch (error) {
    console.error("Error en handleSendMessage:", error);
    if (typingIndicator) typingIndicator.remove();
    appendMessage("bot", "❌ Ocurrió un error inesperado.");
  }
}

window.setQuickQuestion = setQuickQuestion;