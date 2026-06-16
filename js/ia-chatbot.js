/**
 * Configuración del Chatbot Silvain AI
 * Conectado a Google Gemini API usando SDK oficial
 * Documentación: https://ai.google.dev/gemini-api/docs/get-started/tutorial?lang=javascript
 */

// CONFIGURACIÓN DE LA API KEY
const GEMINI_API_KEY = "AQ.Ab8RN6Jm7j1N38bkTkLfao2jdTpKn90mpAI-B0_7ueyP0nRCug";

// SOLUCIÓN: Usar el prefijo oficial estricto para evitar el error 404
const MODEL_NAME = 'gemini-3.1-flash-lite';

// Elementos del DOM
let chatForm, chatInput, chatBox, welcomeScreen;

// Instancia del cliente de Gemini y la sesión de chat activa
let geminiClient = null;
let activeChatSession = null; // Almacenará la sesión de chat persistente

/**
 * Carga el SDK de Google GenAI dinámicamente desde CDN
 */
async function loadGeminiSDK() {
    if (geminiClient) return true;

    try {
        // Importar el SDK desde CDN (ES Modules)
        const { GoogleGenAI } = await import('https://cdn.jsdelivr.net/npm/@google/genai@latest/+esm');

        geminiClient = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
        console.log('✅ SDK de Google GenAI cargado exitosamente');
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
            // Configurar las instrucciones del sistema para Silvain AI
            const systemInstruction = `Actúa como Silvain AI, un tutor botánico experto en inventarios forestales y recursos naturales.
            Trabajas para la I.E. Jesús Bernal Pinzón en Maní, Colombia.
            Tus respuestas deben ser:
            - Breves y concisas (máximo 150 palabras)
            - Educativas y amigables
            - Enfocadas en botánica, ecología, servicios ecosistémicos, conservación y árboles del inventario escolar
            - En español latino
            - Usa emojis relacionados con naturaleza cuando sea apropiado 🌳🌿🍃`;

            try {
                // SOLUCIÓN: Creamos la sesión de chat una sola vez aquí para mantener la memoria (multi-turno)
                activeChatSession = geminiClient.chats.create({
                    model: MODEL_NAME,
                    config: {
                        systemInstruction: systemInstruction,
                        temperature: 0.7
                    }
                });
                console.log('🤖 Silvain AI inicializado correctamente con Chat Multi-turno');
            } catch (chatError) {
                console.error('❌ Error creando la sesión de chat:', chatError);
            }

            chatForm.addEventListener('submit', handleSendMessage);
        } else {
            console.warn('⚠️ El chatbot funcionará en modo limitado sin el SDK');
            chatForm.addEventListener('submit', handleSendMessage);
        }
    } else {
        console.error('No se encontraron los elementos del chat en el DOM');
    }
});

/**
 * Función para establecer preguntas rápidas desde los botones sugeridos
 */
function setQuickQuestion(text) {
    if (chatInput) {
        chatInput.value = text;
        handleSendMessage();
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
        <div class="avatar ${avatarClass}"><i class="fas ${avatarIcon}"></i></div>
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
 * Obtiene la respuesta de la IA usando la sesión activa
 */
async function getAIResponse(prompt) {
    if (!GEMINI_API_KEY || GEMINI_API_KEY.length < 10) {
        return "⚠️ ¡Hola! Configura tu API Key de Gemini en el archivo js/ia-chatbot.js para empezar.";
    }

    try {
        // Si el SDK y la sesión de chat están listos
        if (activeChatSession) {
            console.log('📡 Enviando pregunta a Gemini (Sesión Activa)...');

            // Enviar el mensaje a través de la sesión existente (maneja el historial de forma automática)
            const response = await activeChatSession.sendMessage({ message: prompt });
            
            console.log('✅ Respuesta recibida correctamente');
            return response.text;
        } else {
            // Fallback: método tradicional por si falla el SDK
            console.log('⚠️ Usando método fallback (fetch directo)...');
            const fallbackInstruction = `Actúa como Silvain AI, un tutor botánico de la I.E. Jesús Bernal Pinzón en Maní, Colombia. Breve y amigable.`;
            const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: `${fallbackInstruction}\n\nPregunta: ${prompt}` }] }]
                })
            });

            if (response.ok) {
                const data = await response.json();
                return data.candidates[0].content.parts[0].text;
            } else {
                throw new Error(`HTTP ${response.status}`);
            }
        }
    } catch (error) {
        console.error('❌ Error obteniendo respuesta de Gemini:', error.message);
        return `😕 Ocurrió un error al conectar con Silvain AI:\n${error.message}\n\nPor favor intenta de nuevo.`;
    }
}

/**
 * Maneja el envío del formulario del chat
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
        appendMessage('bot', '❌ Ocurrió un error al procesar tu pregunta. Inténtalo de nuevo.');
    }
}

window.setQuickQuestion = setQuickQuestion;