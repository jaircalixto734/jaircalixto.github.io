/**
Configuración del Chatbot Silvain AI
Conectado a Groq API (Llama 3.3 70B)
*/

// ⚠️ REEMPLAZA ESTO CON TU API KEY REAL DE GROQ
const GROQ_API_KEY = "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";
const MODEL_NAME = 'llama-3.3-70b-versatile';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// Elementos del DOM
let chatForm, chatInput, chatBox, welcomeScreen;
let chatHistory = [];

/**
Inicializa el chatbot cuando el DOM está listo
*/
document.addEventListener('DOMContentLoaded', () => {
    chatForm = document.getElementById('chatForm');
    chatInput = document.getElementById('userInput');
    chatBox = document.getElementById('chatWindow');
    welcomeScreen = document.getElementById('welcomeScreen');

    if (chatForm && chatInput && chatBox) {
        // Inicializar historial con mensaje de sistema
        chatHistory = [
            {
                role: "system",
                content: "Eres Silvain AI, un tutor botánico experto en inventarios forestales y recursos naturales. Trabajas para la I.E. Jesús Bernal Pinzón en Maní, Casanare, Colombia. Tus respuestas deben ser: breves y concisas (máximo 150 palabras), educativas, amigables y motivadoras, enfocadas en botánica, ecología, servicios ecosistémicos y conservación. En español latino. Usa emojis de naturaleza cuando sea apropiado 🌳🌿🍃. Si no sabes algo, sé honesto pero sugiere dónde podrían buscar la información."
            },
            {
                role: "assistant",
                content: "¡Hola! 👋 Soy Silvain AI, tu tutor botánico. Estoy aquí para ayudarte a conocer los árboles de nuestro colegio Jesús Bernal Pinzón y aprender sobre cómo nos ayudan a combatir el cambio climático. ¿Qué te gustaría saber? 🌳"
            }
        ];

        chatForm.addEventListener('submit', handleSendMessage);
        console.log('✅ Silvain AI inicializado con Groq (Llama 3.3 70B)');
    } else {
        console.error('❌ No se encontraron los elementos del chat en el DOM');
    }
});

/**
Función para establecer preguntas rápidas
*/
function setQuickQuestion(text) {
    if (chatInput) {
        chatInput.value = text;
        handleSendMessage(new Event('submit'));
    }
}

/**
Añade un mensaje al chat
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
Muestra el indicador de "escribiendo..."
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
Obtiene la respuesta de la IA usando Groq API
*/
async function getAIResponse(prompt) {
    if (!GROQ_API_KEY || GROQ_API_KEY === "TU_API_KEY_DE_GROQ_AQUI") {
        return "⚠️ ¡Hola! Necesitas configurar tu API Key de Groq en el archivo ia-chatbot.js. Ve a https://console.groq.com/keys para obtener una.";
    }

    // Agregar mensaje del usuario al historial
    chatHistory.push({ role: "user", content: prompt });

    try {
        console.log('📡 Enviando petición a Groq...');
        
        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: MODEL_NAME,
                messages: chatHistory,
                temperature: 0.7,
                max_tokens: 500
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('❌ Error de la API:', errorData);
            
            if (response.status === 401) {
                return "⚠️ La API Key no es válida. Revisa tu clave de Groq.";
            } else if (response.status === 429) {
                return "⏳ Demasiadas solicitudes. Espera un momento.";
            } else {
                return `😕 Error ${response.status}: ${errorData.error?.message || 'Desconocido'}`;
            }
        }

        const data = await response.json();
        
        if (data.choices && data.choices[0] && data.choices[0].message) {
            const botReply = data.choices[0].message.content;
            
            // Agregar respuesta al historial para mantener contexto
            chatHistory.push({ role: "assistant", content: botReply });
            
            console.log('✅ Respuesta recibida correctamente');
            return botReply;
        } else {
            return "😕 No pude generar una respuesta. Intenta de nuevo.";
        }

    } catch (error) {
        console.error('❌ Error de red:', error);
        return `😕 Error de conexión: ${error.message}\n\nVerifica tu conexión a internet.`;
    }
}

/**
Maneja el envío del formulario
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