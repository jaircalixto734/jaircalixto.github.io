/**
 * ============================================================
 *  SILVAIN AI - CHATBOT PARA FICHA DE ÁRBOL
 *  Versión específica para fichas individuales
 *  
 *  Características:
 *  - Contexto limitado al árbol actual de la ficha
 *  - Integración con la API de Google Gemini vía proxy
 *  - UI tipo chat moderna y responsiva
 *  - Markdown rendering básico
 * ============================================================
 */

(function() {
    'use strict';

    /* ================= ESTADO GLOBAL ================= */
    let arbolActual = null;
    let chatHistory = [];
    let isGenerating = false;
    let currentConvId = null;

    /* Elementos del DOM */
    const bubbleBtn = document.getElementById('silvainFichaBubble');
    const modal = document.getElementById('silvainFichaModal');
    const closeBtn = document.getElementById('silvainFichaClose');
    const welcomeSection = document.getElementById('silvainFichaWelcome');
    const messagesContainer = document.getElementById('silvainFichaMessages');
    const inputWrapper = document.getElementById('silvainFichaInputWrapper');
    const inputField = document.getElementById('silvainFichaInput');
    const sendBtn = document.getElementById('silvainFichaSendBtn');
    const loadingIndicator = document.getElementById('silvainFichaLoading');
    const counterEl = document.getElementById('silvainFichaCounter');
    const startBtn = document.getElementById('silvainFichaStartBtn');
    const arbolNombreEl = document.getElementById('silvainFichaArbolNombre');

    /* ================= CONSTRUCCIÓN DE CONTEXTO ================= */
    function limpiarHTML(html) {
        if (!html) return "";
        return String(html)
            .replace(/<[^>]*>/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }

    function construirContextoArbol(arbol) {
        if (!arbol) return "";
        
        let contexto = `=== CONTEXTO DEL ÁRBOL ACTUAL (FICHA QUE ESTÁ VIENDO EL USUARIO) ===\n\n`;
        contexto += `INFORMACIÓN BÁSICA:\n`;
        contexto += `- Nombre común: ${arbol.nombre}\n`;
        contexto += `- Nombre científico: ${arbol.cientifico}\n`;
        contexto += `- Familia: ${arbol.familia}\n`;
        contexto += `- Origen: ${arbol.origen}\n`;
        contexto += `- Estado de conservación: ${arbol.estado}\n`;
        contexto += `- Tipo: ${arbol.exotica ? 'Exótica' : 'Nativa'}\n`;
        contexto += `- Carbono secuestrado: ${arbol.carbono || 0} kg CO₂\n`;
        contexto += `- Viajes equivalentes: ${arbol.viajes || 0}\n\n`;

        if (arbol.nombresLocales && arbol.nombresLocales.length > 0) {
            contexto += `NOMBRES LOCALES: ${arbol.nombresLocales.join(', ')}\n\n`;
        }

        contexto += `DISTRIBUCIÓN:\n${limpiarHTML(arbol.distribucion).slice(0, 1000)}\n\n`;
        contexto += `MORFOLOGÍA:\n${limpiarHTML(arbol.morfologia).slice(0, 1000)}\n\n`;
        
        if (arbol.usos) {
            contexto += `USOS ETNOBOTÁNICOS:\n${limpiarHTML(arbol.usos).slice(0, 800)}\n\n`;
        }
        
        if (arbol.fauna) {
            contexto += `FAUNA ASOCIADA:\n${limpiarHTML(arbol.fauna).slice(0, 600)}\n\n`;
        }

        contexto += `DATOS DE BIOMETRÍA:\n`;
        contexto += `- Densidad de madera: ${arbol.densidad || 'No disponible'}\n`;
        contexto += `- Fracción de carbono: ${arbol.fraccion || 'No disponible'}\n`;
        contexto += `Ecuación alométrica: ${limpiarHTML(arbol.alometria).slice(0, 500)}\n\n`;

        if (arbol.calendario && Array.isArray(arbol.calendario)) {
            contexto += `CALENDARIO FENOLÓGICO:\n`;
            contexto += arbol.calendario.map(c => `${c.mes}: ${c.fase}`).join(' | ') + '\n';
        }

        contexto += `\n=== INSTRUCCIONES PARA SILVAIN AI ===\n`;
        contexto += `Responde ÚNICAMENTE basándote en la información anterior de este árbol específico.\n`;
        contexto += `Si te preguntan algo que no está en estos datos, sé honesto y dilo claramente.\n`;
        contexto += `Mantén un tono educativo, cercano y apropiado para estudiantes.\n`;
        contexto += `Usa emojis con moderación (máximo 2-3 por respuesta).\n`;
        contexto += `Sé conciso pero informativo (máximo 150 palabras por respuesta).\n`;
        
        return contexto;
    }

    /* ================= FUNCIONES DE UI ================= */
    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function renderMarkdownSimple(text) {
        if (!text) return "";
        let html = escapeHtml(text);
        
        // Negrita **texto**
        html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
        // Cursiva *texto*
        html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
        // Saltos de línea
        html = html.replace(/\n/g, "<br>");
        
        return html;
    }

    function addMessage(text, role) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `silvain-ficha-message ${role}`;
        msgDiv.innerHTML = renderMarkdownSimple(text);
        messagesContainer.appendChild(msgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function updateCounter(length) {
        counterEl.textContent = `${length} / 500`;
        if (length > 500) {
            counterEl.style.color = '#e74c3c';
        } else {
            counterEl.style.color = 'var(--text-muted)';
        }
    }

    function setGenerating(state) {
        isGenerating = state;
        sendBtn.disabled = state;
        inputField.disabled = state;
        
        if (state) {
            loadingIndicator.style.display = 'block';
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        } else {
            loadingIndicator.style.display = 'none';
        }
    }

    /* ================= COMUNICACIÓN CON API ================= */
    async function sendMessageToAPI(userMessage) {
        try {
            const context = construirContextoArbol(arbolActual);
            
            const systemPrompt = `Eres Silvain AI, el tutor ambiental del colegio Jesús Bernal Pinzón. 
Estás ayudando a un estudiante que está viendo la ficha de un árbol específico.

${context}

REGLAS IMPORTANTES:
1. Responde SOLO con base en la información del árbol proporcionada arriba
2. Si no sabes algo, dilo honestamente
3. Sé educativo pero accesible
4. Usa máximo 150 palabras
5. Español colombiano natural`;

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: userMessage,
                    history: chatHistory.slice(-6), // Últimos 3 mensajes (ida y vuelta)
                    contextoInventario: systemPrompt
                })
            });

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            const data = await response.json();
            return data.reply || "Lo siento, hubo un error al procesar tu pregunta.";

        } catch (error) {
            console.error('Error enviando mensaje:', error);
            return "⚠️ Hubo un problema de conexión. Por favor verifica tu internet e inténtalo de nuevo.";
        }
    }

    /* ================= MANEJO DE EVENTOS ================= */
    async function handleSendMessage() {
        const userText = inputField.value.trim();
        if (!userText || isGenerating) return;

        if (userText.length > 500) {
            alert('El mensaje es muy largo. Máximo 500 caracteres.');
            return;
        }

        // Ocultar bienvenida y mostrar área de mensajes
        if (welcomeSection) welcomeSection.style.display = 'none';
        if (messagesContainer) messagesContainer.style.display = 'flex';
        if (inputWrapper) inputWrapper.style.display = 'block';

        // Agregar mensaje del usuario
        addMessage(userText, 'user');
        inputField.value = '';
        updateCounter(0);
        inputField.style.height = 'auto'; // Resetear altura del textarea

        // Guardar en historial
        chatHistory.push({ role: 'user', parts: [{ text: userText }] });

        // Enviar a API
        setGenerating(true);
        const botResponse = await sendMessageToAPI(userText);
        setGenerating(false);

        // Agregar respuesta del bot
        addMessage(botResponse, 'bot');
        chatHistory.push({ role: 'model', parts: [{ text: botResponse }] });
        
        // Asegurar que el input permanezca visible y enfocado
        if (inputWrapper) inputWrapper.style.display = 'block';
        setTimeout(() => inputField.focus(), 100);
    }

    function openModal() {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        setTimeout(() => inputField.focus(), 400);
    }

    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }

    function toggleModal() {
        if (modal.classList.contains('active')) {
            closeModal();
        } else {
            openModal();
        }
    }

    /* ================= AUTO-RESIZE TEXTAREA ================= */
    function autoResizeTextarea() {
        inputField.style.height = 'auto';
        inputField.style.height = Math.min(inputField.scrollHeight, 100) + 'px';
    }

    /* ================= INICIALIZACIÓN ================= */
    function init() {
        // Verificar si los datos del árbol están disponibles
        // Nota: arbolSeleccionado y baseDatosArboles son variables globales de ficha-arbol.html
        if (typeof window.arbolSeleccionado !== 'undefined' && typeof window.baseDatosArboles !== 'undefined') {
            arbolActual = window.baseDatosArboles[window.arbolSeleccionado];

            if (arbolActual) {
                // Actualizar nombre en el header del modal
                if (arbolNombreEl) {
                    arbolNombreEl.textContent = arbolActual.nombre;
                }

                console.log('✅ Silvain Ficha: Contexto cargado para', arbolActual.nombre);
            } else {
                console.warn('⚠️ Silvain Ficha: No se encontraron datos para el árbol:', window.arbolSeleccionado);
            }
        } else {
            console.warn('⚠️ Silvain Ficha: Esperando a que se carguen los datos del árbol...');
            // Reintentar después de un breve delay
            setTimeout(init, 100);
            return;
        }

        // Event Listeners
        if (bubbleBtn) {
            bubbleBtn.addEventListener('click', toggleModal);
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        if (startBtn) {
            startBtn.addEventListener('click', () => {
                welcomeSection.style.display = 'none';
                messagesContainer.style.display = 'flex';
                inputWrapper.style.display = 'block';
                inputField.focus();
            });
        }

        if (sendBtn) {
            sendBtn.addEventListener('click', handleSendMessage);
        }

        if (inputField) {
            inputField.addEventListener('input', () => {
                updateCounter(inputField.value.length);
                autoResizeTextarea();
            });

            inputField.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                }
            });
        }

        // Cerrar modal al hacer click fuera
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Cerrar con Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });

        console.log('✅ Silvain AI Ficha: Inicializado correctamente');
    }

    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
