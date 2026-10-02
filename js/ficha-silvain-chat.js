/**
============================================================
SILVAIN AI - CHATBOT PARA FICHA DE ÁRBOL
Versión corregida para ficha individual

Correcciones principales:
- Espera el DOM correctamente
- No se rompe si falta un elemento
- Hace scroll en el contenedor correcto
- Mejora la carga del árbol actual
- Mantiene el input visible y enfocado
============================================================
*/

(function () {
  'use strict';

  let arbolActual = null;
  let chatHistory = [];
  let isGenerating = false;

  const el = {};

  function $(id) {
    return document.getElementById(id);
  }

  function cacheDom() {
    el.bubble = $('silvainFichaBubble');
    el.modal = $('silvainFichaModal');
    el.close = $('silvainFichaClose');
    el.chatContainer = $('silvainFichaChatContainer');
    el.welcome = $('silvainFichaWelcome');
    el.messages = $('silvainFichaMessages');
    el.inputWrapper = $('silvainFichaInputWrapper');
    el.input = $('silvainFichaInput');
    el.send = $('silvainFichaSendBtn');
    el.loading = $('silvainFichaLoading');
    el.counter = $('silvainFichaCounter');
    el.start = $('silvainFichaStartBtn');
    el.arbolNombre = $('silvainFichaArbolNombre');
  }

  function loadArbol() {
    const params = new URLSearchParams(window.location.search);
    const urlId = params.get('arbol') || params.get('id');

    const db =
      window.baseDatosArboles ||
      window.arboles ||
      window.inventarioArboles ||
      null;

    const id = window.arbolSeleccionado || urlId;

    arbolActual =
      window.arbolActual ||
      window.datosArbolActual ||
      (db && id ? db[id] : null) ||
      null;

    if (arbolActual && arbolActual.nombre && el.arbolNombre) {
      el.arbolNombre.textContent = arbolActual.nombre;
    }
  }

  function scrollChatToBottom() {
    const scroller = el.chatContainer || el.messages;
    if (!scroller) return;
    scroller.scrollTop = scroller.scrollHeight;
  }

  function showChatArea() {
    if (el.welcome) el.welcome.style.display = 'none';
    if (el.messages) el.messages.style.display = 'flex';
    if (el.inputWrapper) el.inputWrapper.style.display = 'block';
    scrollChatToBottom();
  }

  function openModal() {
    if (!el.modal) return;

    loadArbol();

    el.modal.classList.add('active');
    el.modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('silvain-chat-open');

    setTimeout(function () {
      if (el.input) el.input.focus();
    }, 350);
  }

  function closeModal() {
    if (!el.modal) return;

    el.modal.classList.remove('active');
    el.modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('silvain-chat-open');
  }

  function toggleModal() {
    if (!el.modal) return;

    if (el.modal.classList.contains('active')) {
      closeModal();
    } else {
      openModal();
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderMarkdownSimple(text) {
    if (!text) return '';

    let html = escapeHtml(text);

    // Negrita
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

    // Cursiva
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    // Saltos de línea
    html = html.replace(/\n/g, '<br>');

    return html;
  }

  function addMessage(text, role) {
    if (!el.messages) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = 'silvain-ficha-message ' + role;
    msgDiv.innerHTML = renderMarkdownSimple(text);

    el.messages.appendChild(msgDiv);
    scrollChatToBottom();
  }

  function updateCounter(length) {
    if (!el.counter) return;

    el.counter.textContent = length + ' / 500';

    if (length > 500) {
      el.counter.style.color = '#e74c3c';
    } else {
      el.counter.style.color = '';
    }
  }

  function autoResizeTextarea() {
    if (!el.input) return;

    el.input.style.height = 'auto';
    el.input.style.height = Math.min(el.input.scrollHeight, 96) + 'px';
  }

  function setGenerating(state) {
    isGenerating = state;

    if (el.send) el.send.disabled = state;
    if (el.input) el.input.disabled = state;

    if (el.loading) {
      el.loading.style.display = state ? 'block' : 'none';
    }

    if (state) {
      scrollChatToBottom();
    }
  }

  function limpiarHTML(html) {
    if (!html) return '';

    return String(html)
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function construirContextoArbol(arbol) {
    if (!arbol) {
      return 'No tengo datos del árbol cargados en este momento.';
    }

    let contexto = '=== CONTEXTO DEL ÁRBOL ACTUAL ===\n\n';

    contexto += 'INFORMACIÓN BÁSICA:\n';
    contexto += '- Nombre común: ' + (arbol.nombre || '') + '\n';
    contexto += '- Nombre científico: ' + (arbol.cientifico || '') + '\n';
    contexto += '- Familia: ' + (arbol.familia || '') + '\n';
    contexto += '- Origen: ' + (arbol.origen || '') + '\n';
    contexto += '- Estado de conservación: ' + (arbol.estado || '') + '\n';
    contexto += '- Tipo: ' + (arbol.exotica ? 'Exótica' : 'Nativa') + '\n';
    contexto += '- Carbono secuestrado: ' + (arbol.carbono || 0) + ' kg CO₂\n';
    contexto += '- Viajes equivalentes: ' + (arbol.viajes || 0) + '\n\n';

    if (arbol.nombresLocales && arbol.nombresLocales.length > 0) {
      contexto += 'NOMBRES LOCALES: ' + arbol.nombresLocales.join(', ') + '\n\n';
    }

    contexto += 'DISTRIBUCIÓN:\n' + limpiarHTML(arbol.distribucion).slice(0, 1000) + '\n\n';
    contexto += 'MORFOLOGÍA:\n' + limpiarHTML(arbol.morfologia).slice(0, 1000) + '\n\n';

    if (arbol.usos) {
      contexto += 'USOS ETNOBOTÁNICOS:\n' + limpiarHTML(arbol.usos).slice(0, 800) + '\n\n';
    }

    if (arbol.fauna) {
      contexto += 'FAUNA ASOCIADA:\n' + limpiarHTML(arbol.fauna).slice(0, 600) + '\n\n';
    }

    contexto += 'DATOS DE BIOMETRÍA:\n';
    contexto += '- Densidad de madera: ' + (arbol.densidad || 'No disponible') + '\n';
    contexto += '- Fracción de carbono: ' + (arbol.fraccion || 'No disponible') + '\n';
    contexto += 'Ecuación alométrica: ' + limpiarHTML(arbol.alometria).slice(0, 500) + '\n\n';

    if (arbol.calendario && Array.isArray(arbol.calendario)) {
      contexto += 'CALENDARIO FENOLÓGICO:\n';
      contexto += arbol.calendario
        .map(function (c) {
          return c.mes + ': ' + c.fase;
        })
        .join(' | ');
      contexto += '\n';
    }

    contexto += '\n=== INSTRUCCIONES PARA SILVAIN AI ===\n';
    contexto += 'Responde únicamente basándote en la información anterior de este árbol específico.\n';
    contexto += 'Si te preguntan algo que no está en estos datos, dilo honestamente.\n';
    contexto += 'Mantén un tono educativo, cercano y apropiado para estudiantes.\n';
    contexto += 'Usa emojis con moderación, máximo 2 o 3 por respuesta.\n';
    contexto += 'Sé conciso pero informativo, máximo 150 palabras por respuesta.\n';

    return contexto;
  }

  async function sendMessageToAPI(userMessage) {
    try {
      const context = construirContextoArbol(arbolActual);

      const systemPrompt =
        'Eres Silvain AI, el tutor ambiental del colegio Jesús Bernal Pinzón.\n' +
        'Estás ayudando a un estudiante que está viendo la ficha de un árbol específico.\n\n' +
        context +
        '\n\nREGLAS IMPORTANTES:\n' +
        'Responde solo con base en la información del árbol proporcionada arriba.\n' +
        'Si no sabes algo, dilo honestamente.\n' +
        'Sé educativo pero accesible.\n' +
        'Usa máximo 150 palabras.\n' +
        'Español colombiano natural.';

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: userMessage,
          history: chatHistory.slice(-6),
          contextoInventario: systemPrompt
        })
      });

      if (!response.ok) {
        throw new Error('Error HTTP: ' + response.status);
      }

      const data = await response.json();

      return (
        data.reply ||
        data.message ||
        data.text ||
        'Lo siento, hubo un error al procesar tu pregunta.'
      );
    } catch (error) {
      console.error('Error enviando mensaje:', error);

      return '⚠️ Hubo un problema de conexión. Por favor verifica tu internet e inténtalo de nuevo.';
    }
  }

  async function handleSendMessage() {
    if (!el.input) return;

    const userText = el.input.value.trim();

    if (!userText || isGenerating) return;

    if (userText.length > 500) {
      updateCounter(userText.length);
      return;
    }

    showChatArea();

    addMessage(userText, 'user');

    el.input.value = '';
    updateCounter(0);
    el.input.style.height = 'auto';

    chatHistory.push({
      role: 'user',
      parts: [{ text: userText }]
    });

    setGenerating(true);

    const botResponse = await sendMessageToAPI(userText);

    setGenerating(false);

    addMessage(botResponse, 'bot');

    chatHistory.push({
      role: 'model',
      parts: [{ text: botResponse }]
    });

    setTimeout(function () {
      if (el.input) el.input.focus();
    }, 80);
  }

  function bindEvents() {
    if (el.bubble) {
      el.bubble.addEventListener('click', toggleModal);
    }

    if (el.close) {
      el.close.addEventListener('click', closeModal);
    }

    if (el.start) {
      el.start.addEventListener('click', function () {
        showChatArea();
        if (el.input) el.input.focus();
      });
    }

    if (el.send) {
      el.send.addEventListener('click', handleSendMessage);
    }

    if (el.input) {
      el.input.addEventListener('input', function () {
        updateCounter(el.input.value.length);
        autoResizeTextarea();
      });

      el.input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault();
          handleSendMessage();
        }
      });
    }

    if (el.modal) {
      el.modal.addEventListener('click', function (event) {
        if (event.target === el.modal) {
          closeModal();
        }
      });
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && el.modal && el.modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  function init() {
    cacheDom();

    if (!el.modal || !el.bubble) {
      console.warn('Silvain AI: no encontré la burbuja o el modal. Revisa los IDs del HTML.');
      return;
    }

    // Estado inicial
    if (el.loading) el.loading.style.display = 'none';
    if (el.messages) el.messages.style.display = 'none';
    if (el.inputWrapper) el.inputWrapper.style.display = 'none';

    loadArbol();
    bindEvents();

    // Por si los datos del árbol se cargan un poco después
    let tries = 0;
    const retry = setInterval(function () {
      loadArbol();
      tries += 1;

      if (arbolActual || tries > 20) {
        clearInterval(retry);
      }
    }, 350);

    console.log('✅ Silvain AI ficha: inicializado correctamente');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();