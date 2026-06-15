/**
 * Configuración del Chatbot Silvain AI
 * Conectado a Google Gemini API
 */

// CONFIGURACIÓN DE LA API KEY
// IMPORTANTE: En producción, considera usar variables de entorno o un backend proxy
const GEMINI_API_KEY = "AIzaSyA_2tw_v81LLUgR0HDDSO8Wl-MklV6QNTk";

// Modelos disponibles para intentar conexión
const MODELS = [
    "gemini-1.5-flash",
    "gemini-1.5-flash-latest",
    "gemini-1.5-pro-latest",
    "gemini-2.0-flash-exp",
    "gemini-1.5-flash-8b",
    "gemini-pro"
];

// Versiones de la API
const API_VERSIONS = ["v1beta", "v1"];

// Elementos del DOM
let chatForm, chatInput, chatBox, welcomeScreen;

/**
 * Inicializa el chatbot cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', () => {
    chatForm = document.getElementById('chatForm');
    chatInput = document.getElementById('userInput');
    chatBox = document.getElementById('chatWindow');
    welcomeScreen = document.getElementById('welcomeScreen');

    if (chatForm && chatInput && chatBox) {
        chatForm.addEventListener('submit', handleSendMessage);
        console.log('Silvain AI inicializado correctamente');
    } else {
        console.error('No se encontraron los elementos del chat en el DOM');
    }
});

/**
 * Función para establecer preguntas rápidas desde los botones sugeridos
 * @param {string} text - La pregunta sugerida
 */
function setQuickQuestion(text) {
    if (chatInput) {
        chatInput.value = text;
        handleSendMessage();
    }
}

/**
 * Añade un mensaje al chat (usuario o bot)
 * @param {string} role - 'user' o 'bot'
 * @param {string} text - El contenido del mensaje
 */
function appendMessage(role, text) {
    if (!chatBox || !welcomeScreen) return;
    
    welcomeScreen.style.display = 'none';
    
    const msgRow = document.createElement('div');
    msgRow.className = `chat-row ${role}-row`;

    const avatarIcon = role === 'bot' ? 'fa-robot' : 'fa-user';
    const avatarClass = role === 'bot' ? 'bot-avatar' : 'user-avatar';

    // Convertir saltos de línea en <br> para mejor formato
    const formattedText = text.replace(/\n/g, '<br>');

    msgRow.innerHTML = `
        <div class="avatar ${avatarClass}"><i class="fas ${avatarIcon}"></i></div>
        <div class="msg-content">${formattedText}</div>
    `;

    chatBox.appendChild(msgRow);
    chatBox.scrollTop = chatBox.scrollHeight;
    return msgRow;
}

/**
 * Muestra el indicador de "escribiendo..." mientras la IA responde
 */
function showTypingIndicator() {
    if (!chatBox) return null;
    
    const indicator = document.createElement('div');
    indicator.className = 'chat-row bot-row typing-row';
    indicator.innerHTML = `
        <div class="avatar bot-avatar"><i class="fas fa-robot"></i></div>
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
 * Obtiene la respuesta de la IA usando Gemini API
 * Intenta con múltiples modelos y versiones hasta encontrar uno disponible
 * @param {string} prompt - La pregunta del usuario
 * @returns {Promise<string>} - La respuesta de la IA
 */
async function getAIResponse(prompt) {
    // Validar que la API Key esté configurada
    if (!GEMINI_API_KEY || GEMINI_API_KEY.includes("TU_API_KEY") || GEMINI_API_KEY.length < 10) {
        return "⚠️ ¡Hola! Configura tu API Key de Gemini en el archivo js/ia-chatbot.js para empezar. Consíguela gratis en https://aistudio.google.com/";
    }

    // Contexto del sistema para Silvain AI
    const systemContext = `Actúa como Silvain AI, un tutor botánico experto en inventarios forestales y recursos naturales. 
    Trabajas para la I.E. Jesús Bernal Pinzón en Maní. 
    Tus respuestas deben ser:
    - Breves y concisas (máximo 150 palabras)
    - Educativas y amigables
    - Enfocadas en botánica, ecología, servicios ecosistémicos y conservación
    - En español
    
    Pregunta del usuario:`;

    // Intentar con diferentes combinaciones de modelos y versiones
    for (const version of API_VERSIONS) {
        for (const modelName of MODELS) {
            try {
                console.log(`🔄 Intentando con ${modelName} (API ${version})...`);
                
                const url = `https://generativelanguage.googleapis.com/${version}/models/${modelName}:generateContent?key=${GEMINI_API_KEY}`;

                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{ 
                                text: `${systemContext} ${prompt}` 
                            }]
                        }],
                        generationConfig: {
                            temperature: 0.7,
                            maxOutputTokens: 500
                        }
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    
                    if (data.candidates && data.candidates[0].content) {
                        console.log(`✅ Éxito con ${modelName}!`);
                        return data.candidates[0].content.parts[0].text;
                    } else if (data.promptFeedback && data.promptFeedback.blockReason) {
                        console.warn(`⚠️ Contenido bloqueado: ${data.promptFeedback.blockReason}`);
                        return "Lo siento, esa pregunta no puede ser respondida por políticas de seguridad.";
                    }
                } else {
                    const errorData = await response.json().catch(() => ({}));
                    console.warn(`❌ Falló ${modelName}:`, errorData.error?.message || response.status);
                }
            } catch (error) {
                console.error(`🔴 Error de red con ${modelName}:`, error.message);
                // Continuar con el siguiente modelo
            }
        }
    }

    // Si ningún modelo funcionó
    return "😕 Lo siento, no pude conectar con Gemini. Verifica:\n1. Que tu API Key sea correcta\n2. Que tengas activada la 'Generative Language API' en Google AI Studio\n3. Tu conexión a internet";
}

/**
 * Maneja el envío del formulario del chat
 * @param {Event} e - Evento de submit
 */
async function handleSendMessage(e) {
    if (e) e.preventDefault();
    
    if (!chatInput || !chatForm) return;
    
    const text = chatInput.value.trim();
    if (!text) return;

    // 1. Mostrar mensaje del usuario
    appendMessage('user', text);
    chatInput.value = '';

    // 2. Mostrar indicador de carga
    const typingIndicator = showTypingIndicator();

    try {
        // 3. Obtener respuesta de la IA
        const aiResponse = await getAIResponse(text);

        // 4. Quitar indicador y mostrar respuesta
        if (typingIndicator) typingIndicator.remove();
        appendMessage('bot', aiResponse);
    } catch (error) {
        console.error('Error en handleSendMessage:', error);
        if (typingIndicator) typingIndicator.remove();
        appendMessage('bot', '❌ Ocurrió un error al procesar tu pregunta. Inténtalo de nuevo.');
    }
}

// Exportar funciones para uso global (necesario para los botones de preguntas rápidas)
window.setQuickQuestion = setQuickQuestion;
