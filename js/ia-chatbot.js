/**
 * Configuración del Chatbot Silvain AI
 * Versión corregida - Modelo Gemini 3.1 Flash Lite
 */

// ✅ Tu API Key oficial de Google (la que empieza con AQ.Ab8RN...)
const GEMINI_API_KEY = "";

// ✅ MODELO CORREGIDO: Usar gemini-3.1-flash-lite (el que aparece en tu lista)
const MODEL_NAME = 'gemini-3.1-flash-lite';

// Elementos del DOM
let chatForm, chatInput, chatBox, welcomeScreen;
let geminiClient = null;
let activeChatSession = null;

/**
 * Carga el SDK oficial de Google Generative AI
 */
async function loadGeminiSDK() {
    if (geminiClient) return true;
    
    try {
        // Importar el SDK OFICIAL desde CDN
        const { GoogleGenerativeAI } = await import('https://esm.run/@google/generative-ai');
        
        geminiClient = new GoogleGenerativeAI(GEMINI_API_KEY);
        console.log('✅ SDK de Google Generative AI cargado exitosamente');
        console.log(`🤖 Usando modelo: ${MODEL_NAME}`);
        return true;
    } catch (error) {
        console.error('❌ Error cargando SDK de Gemini:', error);
        return false;
    }
}

/**
 * Inicializa el chatbot cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', async () => {
    chatForm = document.getElementById('chatForm');
    chatInput = document.getElementById('userInput');
    chatBox = document.getElementById('chatWindow');
    welcomeScreen = document.getElementById('welcomeScreen');

    if (chatForm && chatInput && chatBox) {
        const sdkLoaded = await loadGeminiSDK();
        
        if (sdkLoaded) {
            try {
                // Crear el modelo con configuración
                const model = geminiClient.getGenerativeModel({
                    model: MODEL_NAME,
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 500
                    }
                });

                // Crear sesión de chat con historial
                activeChatSession = model.startChat({
                    history: [
                        {
                            role: "user",
                            parts: [{ text: "Hola, soy un estudiante del colegio Jesús Bernal Pinzón" }]
                        },
                        {
                            role: "model",
                            parts: [{ text: "¡Hola! 👋 Soy Silvain AI, tu tutor botánico. Estoy aquí para ayudarte a conocer los árboles de nuestro colegio y aprender sobre cómo nos ayudan a combatir el cambio climático. ¿Qué te gustaría saber? 🌳" }]
                        }
                    ]
                });

                console.log('🤖 Silvain AI inicializado correctamente con Gemini 3.1 Flash Lite');
            } catch (chatError) {
                console.error('❌ Error creando la sesión de chat:', chatError);
            }

            chatForm.addEventListener('submit', handleSendMessage);
        } else {
            console.warn('⚠️ El chatbot funcionará en modo limitado');
            chatForm.addEventListener('submit', handleSendMessage);
        }
    } else {
        console.error('❌ No se encontraron los elementos del chat en el DOM');
    }
});

/**
 * Función para establecer preguntas rápidas
 */
function setQuickQuestion(text) {
    if (chatInput) {
        chatInput.value = text;
        handleSendMessage(new Event('submit'));
    }
}

/**
 * Añade un mensaje al chat
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
 * Obtiene la respuesta de la IA
 */
async function getAIResponse(prompt) {
    if (!GEMINI_API_KEY || GEMINI_API_KEY.length < 10) {
        return "⚠️ ¡Hola! Necesitas configurar tu API Key de Google AI Studio.";
    }

    try {
        if (activeChatSession) {
            console.log('📡 Enviando pregunta a Gemini 3.1 Flash Lite...');
            
            // Enviar mensaje y esperar respuesta
            const result = await activeChatSession.sendMessage(prompt);
            const response = await result.response;
            const text = response.text();
            
            console.log('✅ Respuesta recibida correctamente');
            return text;
        } else {
            throw new Error("La sesión de chat no está inicializada");
        }
    } catch (error) {
        console.error('❌ Error con Gemini:', error);
        
        // Mensajes de error más específicos
        if (error.message.includes('404')) {
            return "⚠️ Error: El modelo de IA no se encontró. Verifica que estés usando 'gemini-3.1-flash-lite'";
        } else if (error.message.includes('401')) {
            return "⚠️ La API Key no es válida o expiró.";
        } else if (error.message.includes('429')) {
            return "⏳ Demasiadas solicitudes. Espera un momento e intenta de nuevo.";
        } else {
            return `😕 Oops, algo salió mal:\n${error.message}\n\nIntenta de nuevo en unos segundos.`;
        }
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
    
    // Mostrar mensaje del usuario
    appendMessage('user', text);
    chatInput.value = '';
    
    // Mostrar indicador de carga
    const typingIndicator = showTypingIndicator();
    
    try {
        // Obtener respuesta de la IA
        const aiResponse = await getAIResponse(text);
        
        // Remover indicador y mostrar respuesta
        if (typingIndicator) typingIndicator.remove();
        appendMessage('bot', aiResponse);
        
    } catch (error) {
        console.error('Error en handleSendMessage:', error);
        if (typingIndicator) typingIndicator.remove();
        appendMessage('bot', '❌ Ocurrió un error inesperado. Revisa la consola para más detalles.');
    }
}

// Hacer disponible globalmente
window.setQuickQuestion = setQuickQuestion;
