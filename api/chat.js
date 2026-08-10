/**
 * Proxy Serverless de Vercel para Google Gemini API
 * Este archivo oculta tu API Key del navegador y evita problemas de CORS.
 * Ubicación: /api/chat.js
 */

export default async function handler(req, res) {
  // 1. Solo aceptar peticiones POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido. Usa POST.' });
  }

  try {
    // 2. Extraer datos del body de la petición
    const { message, history = [], contextoInventario = '' } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Falta el mensaje del usuario.' });
    }

    // 3. Obtener la API Key desde las Variables de Entorno de Vercel
    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) {
      console.error('❌ GEMINI_API_KEY no está configurada en Vercel');
      return res.status(500).json({ 
        error: 'API Key no configurada en el servidor. Contacta al administrador.' 
      });
    }

    // 4. Construir el system prompt con el contexto del inventario
    const systemPrompt = `Eres Silvain AI, el tutor ambiental y mentor botánico del Jardín Botánico del colegio Jesús Bernal Pinzón (JBP) en Maní, Casanare. Tu misión es enseñar sobre nuestra biodiversidad arbórea, los servicios ecosistémicos del llano y el secuestro de carbono.

CONTEXTO DEL INVENTARIO:
${contextoInventario}

REGLAS DE ORO (INQUEBRANTABLES):
1. FIDELIDAD A LOS DATOS: Tu única fuente de verdad para los árboles del colegio es el inventario de arriba. Si te preguntan por un árbol, da su nombre científico, familia, origen (nativa/exótica) y el carbono que almacena.
2. HONESTIDAD RADICAL: Si te preguntan por una especie que NO está en la lista, o por un dato técnico que no tenemos registrado, dilo sin rodeos: "Ese árbol aún no hace parte de nuestro inventario" o "Ese dato específico todavía no lo hemos medido en campo". En esos casos, sugiere consultar al docente Edwin Ricaurte Avella o al equipo del proyecto.
3. TONO Y ESTILO: Habla como un mentor joven, apasionado por el llano y la ciencia. Sé claro, directo y cercano. Usa un español colombiano natural (puedes usar referencias al clima llanero o modismos suaves si viene al caso, pero sin forzar). Evita sonar como un robot o dar sermones morales.
4. FORMATO: Sé conciso (máximo 200 palabras por respuesta). Usa emojis de naturaleza (🌳🌿🍃) con moderación para darle vida al texto, pero no abuses de ellos.
5. CIFRAS: Cuando hables de carbono o biomasa, menciona los números exactos del inventario para que los estudiantes vean el impacto real de su colegio.`;

    // 5. Construir el historial de mensajes en formato Gemini
    const contents = [
      {
        role: "user",
        parts: [{ text: systemPrompt }]
      },
      {
        role: "model",
        parts: [{ text: "¡Hola! 👋 Soy Silvain AI, tu tutor botánico. Estoy aquí para ayudarte a conocer los árboles de nuestro colegio Jesús Bernal Pinzón y aprender sobre cómo nos ayudan a combatir el cambio climático. ¿Qué te gustaría saber? 🌳" }]
      },
      // Agregar el historial de conversación recibido del frontend
      ...history,
      // Agregar el mensaje actual del usuario
      { role: "user", parts: [{ text: message }] }
    ];

    // 6. Hacer la petición a Google Gemini API
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${API_KEY}`;

    const geminiResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 3072
        }
      })
    });

    // 7. Manejar errores de la API de Gemini
    if (!geminiResponse.ok) {
      const errorData = await geminiResponse.json();
      console.error('❌ Error de Gemini API:', errorData);
      return res.status(geminiResponse.status).json({ 
        error: errorData.error?.message || 'Error al conectar con la IA' 
      });
    }

    const data = await geminiResponse.json();

    // 8. Extraer la respuesta del bot
    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      const botReply = data.candidates[0].content.parts[0].text;
      return res.status(200).json({ reply: botReply });
    } else {
      return res.status(500).json({ error: 'La IA no generó una respuesta válida.' });
    }

  } catch (error) {
    console.error('❌ Error en el proxy:', error);
    return res.status(500).json({ 
      error: 'Error interno del servidor: ' + error.message 
    });
  }
}