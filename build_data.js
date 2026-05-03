const fs = require('fs');
const path = require('path');

const dossiers = [
    { id: 'merecure', file: 'Info árboles/Dossier_Merecure.html', thumb1: './imagenes/colegio1.jpeg', thumb2: './imagenes/colegio2.jpeg', idJBP: '#JBP-02', tipo: 'Nativo' },
    { id: 'jambolan', file: 'Info árboles/Dossier Syzygium Cumini (Jambolán).html', thumb1: './imagenes/foto2.jpeg', thumb2: './imagenes/colegio1.jpeg', idJBP: '#JBP-06', tipo: 'Frutal / Exótico' },
    { id: 'palo-cruz', file: 'Info árboles/Dossier Brownea ariza (Palo Cruz).html', thumb1: './imagenes/colegio2.jpeg', thumb2: './imagenes/colegio1.jpeg', idJBP: '#JBP-07', tipo: 'Nativo / Ornamental' },
    { id: 'almendro', file: 'Info árboles/Terminalia catappa L (Almendro).html', thumb1: './imagenes/colegio1.jpeg', thumb2: './imagenes/colegio2.jpeg', idJBP: '#JBP-08', tipo: 'Introducido / Sombra' }
];

let arbolesData = {};

function extractSection(html, regex, defaultVal = '') {
    const match = html.match(regex);
    return match ? match[1].trim() : defaultVal;
}

for (const d of dossiers) {
    const filePath = path.join(__dirname, d.file);
    if (!fs.existsSync(filePath)) {
        console.warn('File not found:', filePath);
        continue;
    }
    
    const html = fs.readFileSync(filePath, 'utf8');
    
    // Extract Title (h1) and Subtitle (h2)
    const titulo = extractSection(html, /<h1>(.*?)<\/h1>/is);
    const cientifico = extractSection(html, /<h2>(.*?)<\/h2>/is);
    
    // Extract Silvain Voice (from .silvain-card p)
    let silvain = '';
    const silvainMatch = html.match(/<div[^>]*class="[^"]*silvain-card[^"]*"[^>]*>.*?<p>(.*?)<\/p>/is);
    if (silvainMatch) silvain = silvainMatch[1];
    else {
        // Almendro structure is slightly different: <h3>...</h3> <p>...</p>
        const silvainMatch2 = html.match(/<div[^>]*class="[^"]*silvain-card[^"]*"[^>]*>.*?<\/h3>\s*<p>(.*?)<\/p>/is);
        if (silvainMatch2) silvain = silvainMatch2[1];
    }
    
    // Extract Modulos 1, 2, 3, 4 bodies
    const mod1 = extractSection(html, /<section[^>]*id="mod1"[^>]*>.*?<div class="modulo-body">(.*?)<\/div>\s*<\/section>/is);
    const mod2 = extractSection(html, /<section[^>]*id="mod2"[^>]*>.*?<div class="modulo-body">(.*?)<\/div>\s*<\/section>/is);
    const mod3 = extractSection(html, /<section[^>]*id="mod3"[^>]*>.*?<div class="modulo-body">(.*?)<\/div>\s*<\/section>/is);
    const mod4 = extractSection(html, /<section[^>]*id="mod4"[^>]*>.*?<div class="modulo-body">(.*?)<\/div>\s*<\/section>/is);
    const mod5 = extractSection(html, /<section[^>]*id="mod5"[^>]*>.*?<div class="modulo-body">(.*?)<\/div>\s*<\/section>/is);

    arbolesData[d.id] = {
        idJBP: d.idJBP,
        tipo: d.tipo,
        nombre: titulo,
        cientifico: cientifico,
        silvain: silvain.replace(/<br\s*\/?>/gi, ' ').trim(), // remove brs for the quote
        imagenes: [d.thumb1, d.thumb2],
        mod1: mod1,
        mod2: mod2,
        mod3: mod3,
        mod4: mod4,
        mod5: mod5 // Referencias
    };
}

const jsContent = `// Archivo generado automáticamente
const arbolesData = ${JSON.stringify(arbolesData, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'js', 'datos_arboles.js'), jsContent, 'utf8');
console.log('js/datos_arboles.js generated successfully.');
