/**
 * Configuración del Chatbot Silvain AI
 * Conectado a Vercel Proxy (api/chat.js) + Inventario Forestal JBP
 * La API Key está segura en las variables de entorno de Vercel
 */

// Elementos del DOM
let chatForm, chatInput, chatBox, welcomeScreen;
let chatHistory = []; // Historial de conversación (usuario y modelo)

/**
 * === FUNCIÓN: Construye el contexto del inventario forestal ===
 * Lee baseDatosArboles de datos_arboles.js y genera un resumen para la IA
 */
function construirContextoInventario() {
    if (typeof baseDatosArboles === 'undefined') {
        console.warn('⚠️ baseDatosArboles no está cargado. Verifica que datos_arboles.js se cargue antes.');
        return '';
    }

    const arboles = Object.values(baseDatosArboles);
    const totalCarbono = arboles.reduce((sum, a) => sum + (a.carbono || 0), 0);
    
    let contexto = `INVENTARIO FORESTAL I.E. JESÚS BERNAL PINZÓN (Maní, Casanare):
Total de especies registradas: ${arboles.length}
Carbono total almacenado (estimado): ${totalCarbono.toFixed(1)} kg CO₂

ESPECIES DISPONIBLES EN LA BASE DE DATOS:
`;
    
    arboles.forEach(a => {
        const tipo = a.exotica ? "Exótica" : "Nativa";
        contexto += `• ${a.nombre} (${a.cientifico}) | Familia: ${a.familia} | ${tipo} | Carbono: ${a.carbono || 0} kg CO₂\n`;
    });

    return contexto;
}

/**
 * === FUNCIÓN: Busca datos específicos si el usuario menciona un árbol ===
 * Inyecta información detallada del árbol consultado
 */
function buscarDatosEspecificos(prompt) {
    if (typeof baseDatosArboles === 'undefined') return '';
    
    const texto = prompt.toLowerCase();
    
    for (const a of Object.values(baseDatosArboles)) {
        const coincideNombre = texto.includes(a.nombre.toLowerCase());
        const coincideCientifico = texto.includes(a.cientifico.toLowerCase());
        const coincideLocal = a.nombresLocales && a.nombresLocales.some(n => texto.includes(n.toLowerCase()));
        
        if (coincideNombre || coincideCientifico || coincideLocal) {
            return `\n\n[📊 DATOS REALES DEL ÁRBOL CONSULTADO - USAR PARA RESPONDER]:
Especie: ${a.nombre}
Científico: ${a.cientifico}
Familia: ${a.familia}
Tipo: ${a.exotica ? 'Exótica' : 'Nativa'}
Carbono almacenado: ${a.carbono || 0} kg CO₂
Nombres locales: ${a.nombresLocales ? a.nombresLocales.join(', ') : 'N/A'}
⚠️ Responde basándote estrictamente en estos datos.`;
        }
    }
    return '';
}

/**
 * Inicializa el chatbot cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', () => {
    chatForm = document.getElementById('chatForm');
    chatInput = document.getElementById('userInput');
    chatBox = document.getElementById('chatWindow');
    welcomeScreen = document.getElementById('welcomeScreen');

    if (chatForm && chatInput && chatBox) {
        // Inicializar historial vacío (el system prompt se envía en cada petición al proxy)
        chatHistory = [];
        
        chatForm.addEventListener('submit', handleSendMessage);
        console.log('✅ Silvain AI inicializado (modo Proxy Vercel)');
        console.log('🌳 Inventario forestal cargado:', typeof baseDatosArboles !== 'undefined' ? 'SÍ' : 'NO');
    } else {
        console.error('❌ No se encontraron los elementos del chat en el DOM');
    }
});

/**
 * Función para establecer preguntas rápidas desde botones
 */
function setQuickQuestion(text) {
    if (chatInput) {
        chatInput.value = text;
        handleSendMessage(new Event('submit'));
    }
}

/**
 * Añade un mensaje al chat (usuario o bot)
 */
function appendMessage(role, text) {
    if (!chatBox || !welcomeScreen) return;
    welcomeScreen.style.display = 'none';
    
    const msgRow = document.createElement('div');
    msgRow.className = `chat-row ${role}-row`;
    const avatarIcon = role === 'bot' ? 'fa-robot' : 'fa-user';
    const avatarClass = role === 'bot' ? 'bot-avatar' : 'user-avatar';
    const formattedText = text.replace(/\n/g, '<br>');
    
    msgRow.innerHTML = `
        <div class="avatar ${avatarClass}">
            <i class="fas ${avatarIcon}"></i>
        </div>
        <div class="msg-content">${formattedText}</div>
    `;
    
    chatBox.appendChild(msgRow);
    chatBox.scrollTop = chatBox.scrollHeight;
    return msgRow;
}

/**
 * Muestra el indicador de "escribiendo..."
 */
function showTypingIndicator() {
    if (!chatBox) return null;
    const indicator = document.createElement('div');
    indicator.className = 'chat-row bot-row typing-row';
    indicator.innerHTML = `
        <div class="avatar bot-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="msg-content typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    chatBox.appendChild(indicator);
    chatBox.scrollTop = chatBox.scrollHeight;
    return indicator;
}

/**
 * Obtiene la respuesta de la IA a través del proxy de Vercel
 */
async function getAIResponse(prompt) {
    // 1. Inyectar contexto dinámico si se menciona un árbol específico
    const datosExtra = buscarDatosEspecificos(prompt);
    const mensajeFinal = datosExtra ? prompt + datosExtra : prompt;
    const contextoInventario = construirContextoInventario();

    // 2. Agregar mensaje del usuario al historial local
    chatHistory.push({ role: "user", parts: [{ text: mensajeFinal }] });

    try {
        console.log('📡 Enviando petición al proxy de Vercel...');
        
        // 3. Llamar a nuestro proxy en /api/chat
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: mensajeFinal,
                history: chatHistory.slice(0, -1), // Enviar historial sin el último mensaje (el proxy lo agrega)
                contextoInventario: contextoInventario
            })
        });

        // 4. Manejar errores HTTP
        if (!response.ok) {
            const errorData = await response.json();
            console.error('❌ Error del proxy:', errorData);
            
            if (response.status === 500) {
                return "⚠️ Error del servidor. La API Key podría no estar configurada en Vercel.";
            } else if (response.status === 429) {
                return "⏳ Demasiadas solicitudes. Espera un momento.";
            } else {
                return `😕 Error ${response.status}: ${errorData.error || 'Desconocido'}`;
            }
        }

        // 5. Extraer la respuesta
        const data = await response.json();
        
        if (data.reply) {
            // Agregar respuesta al historial
            chatHistory.push({ role: "model", parts: [{ text: data.reply }] });
            console.log('✅ Respuesta recibida correctamente');
            return data.reply;
        } else {
            return "😕 No pude generar una respuesta. Intenta de nuevo.";
        }

    } catch (error) {
        console.error('❌ Error de red:', error);
        return `😕 Error de conexión: ${error.message}\n\nVerifica tu conexión a internet.`;
    }
}

/**
 * Maneja el envío del formulario
 */
async function handleSendMessage(e) {
    if (e) e.preventDefault();
    if (!chatInput || !chatForm) return;
    
    const text = chatInput.value.trim();
    if (!text) return;

    appendMessage('user', text);
    chatInput.value = '';
    
    const typingIndicator = showTypingIndicator();
    
    try {
        const aiResponse = await getAIResponse(text);
        if (typingIndicator) typingIndicator.remove();
        appendMessage('bot', aiResponse);
    } catch (error) {
        console.error('Error en handleSendMessage:', error);
        if (typingIndicator) typingIndicator.remove();
        appendMessage('bot', '❌ Ocurrió un error inesperado.');
    }
}

// Hacer disponible globalmente
window.setQuickQuestion = setQuickQuestion;