/* =============================================
   MAPA-COLEGIO.JS  ·  IE Jesús Bernal Pinzón
   Mapa interactivo del campus con la ubicación
   real de los 172 árboles del inventario.
   Las coordenadas (x, y) están en porcentajes
   sobre la imagen aérea ./imagenes/mapa-campus.jpg
   ============================================= */

/* ---------- 1. CATÁLOGO DE ESPECIES ---------- */
/* El color de cada especie es el mismo de la leyenda
   del levantamiento de campo (mapa de puntos).       */
const JBP_ESPECIES = {
    merecure: {
        nombre: 'Merecure', nombreCientifico: 'Moquilea pyrifolia', categoria: 'nativo',
        color: '#FF7F27', imagen: './imagenes/merecure1.jpeg', ficha: 'merecure',
        descripcion: 'Especie emblemática de la cuenca del Orinoco, proveedora de sombra y frutos dulces en la sabana.'
    },
    pomarrosa: {
        nombre: 'Pomarrosa', nombreCientifico: 'Syzygium jambos', categoria: 'frutal',
        color: '#ED1C24', imagen: './imagenes/pomarrosa1.jpeg', ficha: 'pomarrosa',
        descripcion: 'Famosa por sus flores en forma de pompones y sus frutos con aroma a rosas. Un tesoro exótico naturalizado en el llano.'
    },
    oiti: {
        nombre: 'Oití', nombreCientifico: 'Licania tomentosa', categoria: 'ornamental',
        color: '#A349A4', imagen: './imagenes/oiti1.jpeg', ficha: 'oiti',
        descripcion: 'Su copa densa y redondeada proporciona una sombra excelente, ideal para parques y andenes.'
    },
    limoncillo: {
        nombre: 'Limoncillo', nombreCientifico: 'Swinglea glutinosa', categoria: 'frutal',
        color: '#B5E61D', imagen: './imagenes/limoncillo1.jpeg', ficha: 'limoncillo',
        descripcion: 'Única especie del género Swinglea en todo el mundo. En Colombia se ha naturalizado como especie frutal.'
    },
    noni: {
        nombre: 'Noni', nombreCientifico: 'Morinda citrifolia', categoria: 'frutal',
        color: '#7092BE', imagen: './imagenes/noni1.jpeg', ficha: 'noni',
        descripcion: 'Conocido por su fuerte olor y ampliamente cultivado por sus supuestas propiedades medicinales.'
    },
    palma_coco: {
        nombre: 'Palma de Coco', nombreCientifico: 'Cocos nucifera', categoria: 'frutal',
        color: '#B97A57', imagen: './imagenes/coco1.jpeg', ficha: 'palma-de-coco',
        descripcion: 'Palma mundialmente conocida por su fruto, el agua de coco y su valor paisajístico inconfundible.'
    },
    palo_cruz: {
        nombre: 'Palo Cruz', nombreCientifico: 'Brownea ariza', categoria: 'nativo',
        color: '#880015', imagen: './imagenes/Palo_Cruz.jpeg', ficha: 'palo-cruz',
        descripcion: 'Árbol nativo de extraordinario valor ornamental, famoso por sus cabezuelas de flores escarlatas que nacen directo del tronco.'
    },
    guayaba: {
        nombre: 'Guayaba', nombreCientifico: 'Psidium guajava L.', categoria: 'frutal',
        color: '#00A2E8', imagen: './imagenes/guayaba1.jpeg', ficha: 'guayaba',
        descripcion: 'Árbol nativo del Neotrópico, famoso por sus frutos ricos en vitamina C. Corteza exfoliante característica.'
    },
    saman: {
        nombre: 'Samán', nombreCientifico: 'Samanea saman', categoria: 'maderable',
        color: '#22B14C', imagen: './imagenes/saman9.jpeg', ficha: 'saman',
        descripcion: 'El gigante protector del llano; su inmensa copa da refugio y sus hojas "duermen" de noche.'
    },
    gualanday: {
        nombre: 'Gualanday', nombreCientifico: 'Jacaranda obtusifolia', categoria: 'ornamental',
        color: '#39107B', imagen: './imagenes/gualanday1.jpeg', ficha: 'gualanday',
        descripcion: 'Pinta el paisaje de la Orinoquía con su espectacular floración azul-violácea durante la sequía.'
    },
    mango: {
        nombre: 'Mango', nombreCientifico: 'Mangifera indica', categoria: 'frutal',
        color: '#FFFFFF', imagen: './imagenes/mango1.jpeg', ficha: 'mango',
        descripcion: 'El rey de las frutas tropicales. Su sombra densa y sus frutos dulces son parte esencial de la identidad de los patios en Maní.'
    },
    caracaro: {
        nombre: 'Caracaro', nombreCientifico: 'Enterolobium cyclocarpum', categoria: 'nativo',
        color: '#FFF200', imagen: './imagenes/caracaro1.jpeg', ficha: 'caracaro',
        descripcion: 'El gigante de las sabanas. Sus frutos en forma de oreja y su capacidad de fijar nitrógeno lo hacen vital para el ecosistema llanero.'
    },
     palma_real: {
        nombre: 'Palma Real', nombreCientifico: 'Roystonea regia', categoria: 'ornamental',
        color: '#404144', imagen: './imagenes/real6.jpeg', ficha: 'palma-real',
        descripcion: 'Conocido por su fuerte olor y ampliamente cultivado por sus supuestas propiedades medicinales.'
        }
};

/* Abreviaturas para el código de cada punto (ej. JBP-MER-01) */
const JBP_PREFIJOS = {
    merecure: 'MER', pomarrosa: 'POM', oiti: 'OIT', limoncillo: 'LIM',
    noni: 'NON', palma_coco: 'COC', palo_cruz: 'PCZ', guayaba: 'GUA',
    saman: 'SAM', gualanday: 'GUL', mango: 'MAN', caracaro: 'CAR', palma_real: 'REA'
};

/* ---------- 2. PUNTOS GEORREFERENCIADOS ---------- */
/* [especie, x%, y%] medidos sobre el plano aéreo del campus.
   Levantamiento de campo digitalizado: 172 individuos.      */
const JBP_PUNTOS = [
  ['merecure', 65.91, 11.75],
  ['merecure', 67.83, 13.28],
  ['merecure', 69.5, 14.17],
  ['merecure', 70.12, 15.68],
  ['merecure', 71.13, 16.38],
  ['merecure', 63.8, 16.63],
  ['merecure', 72.3, 17.68],
  ['merecure', 62.47, 18.82],
  ['merecure', 61.22, 20.58],
  ['merecure', 59.88, 22.56],
  ['merecure', 58.89, 24.41],
  ['merecure', 58.0, 26.07],
  ['merecure', 56.32, 28.83],
  ['merecure', 54.96, 30.96],
  ['merecure', 54.23, 32.88],
  ['merecure', 53.34, 33.78],
  ['merecure', 43.91, 33.84],
  ['merecure', 39.45, 34.62],
  ['merecure', 41.91, 34.75],
  ['merecure', 52.73, 35.25],
  ['merecure', 47.04, 36.27],
  ['merecure', 38.34, 37.05],
  ['merecure', 52.43, 37.49],
  ['merecure', 51.09, 37.52],
  ['merecure', 47.15, 39.02],
  ['merecure', 50.85, 39.3],
  ['merecure', 38.64, 39.62],
  ['merecure', 50.04, 40.55],
  ['merecure', 48.71, 43.14],
  ['merecure', 37.65, 43.29],
  ['merecure', 39.1, 44.52],
  ['merecure', 40.54, 48.17],
  ['merecure', 35.97, 49.08],
  ['merecure', 39.73, 49.43],
  ['merecure', 38.8, 50.86],
  ['merecure', 36.52, 50.87],
  ['merecure', 34.76, 51.53],
  ['merecure', 38.19, 52.47],
  ['merecure', 33.0, 53.35],
  ['merecure', 37.32, 53.81],
  ['merecure', 32.03, 54.22],
  ['merecure', 32.84, 55.65],
  ['merecure', 31.43, 55.92],
  ['merecure', 51.96, 56.86],
  ['merecure', 50.85, 59.0],
  ['merecure', 31.72, 60.06],
  ['merecure', 49.51, 61.27],
  ['merecure', 30.39, 62.18],
  ['merecure', 48.49, 62.97],
  ['merecure', 28.82, 64.2],
  ['merecure', 47.27, 64.79],
  ['merecure', 27.61, 66.62],
  ['merecure', 26.27, 68.76],
  ['merecure', 26.71, 71.51],
  ['merecure', 39.99, 72.1],
  ['merecure', 37.2, 74.98],
  ['merecure', 41.02, 76.2],
  ['pomarrosa', 80.35, 7.79],
  ['pomarrosa', 78.32, 8.24],
  ['pomarrosa', 81.43, 10.33],
  ['pomarrosa', 76.21, 10.52],
  ['pomarrosa', 84.69, 11.43],
  ['pomarrosa', 74.64, 11.44],
  ['pomarrosa', 82.26, 11.63],
  ['pomarrosa', 83.12, 13.39],
  ['pomarrosa', 86.04, 13.43],
  ['pomarrosa', 74.29, 14.05],
  ['pomarrosa', 86.92, 15.24],
  ['pomarrosa', 73.53, 15.99],
  ['pomarrosa', 84.61, 16.35],
  ['pomarrosa', 85.03, 18.43],
  ['pomarrosa', 88.16, 18.5],
  ['pomarrosa', 86.17, 20.3],
  ['pomarrosa', 88.85, 20.44],
  ['pomarrosa', 87.15, 21.8],
  ['pomarrosa', 89.94, 21.96],
  ['pomarrosa', 87.8, 23.75],
  ['pomarrosa', 65.84, 32.63],
  ['pomarrosa', 68.28, 34.95],
  ['pomarrosa', 85.26, 35.23],
  ['pomarrosa', 70.39, 36.28],
  ['pomarrosa', 86.37, 37.81],
  ['pomarrosa', 73.86, 38.41],
  ['pomarrosa', 87.26, 39.94],
  ['pomarrosa', 52.94, 40.4],
  ['pomarrosa', 72.98, 40.73],
  ['pomarrosa', 62.12, 41.45],
  ['pomarrosa', 55.09, 42.69],
  ['pomarrosa', 71.84, 43.01],
  ['pomarrosa', 61.13, 44.38],
  ['pomarrosa', 70.96, 45.3],
  ['pomarrosa', 57.99, 45.41],
  ['pomarrosa', 69.62, 48.18],
  ['pomarrosa', 48.02, 49.07],
  ['pomarrosa', 68.06, 50.9],
  ['pomarrosa', 44.5, 68.64],
  ['oiti', 83.02, 19.68],
  ['oiti', 81.56, 21.04],
  ['oiti', 67.83, 24.54],
  ['oiti', 70.61, 26.7],
  ['oiti', 61.35, 28.21],
  ['oiti', 30.05, 52.73],
  ['oiti', 23.0, 54.27],
  ['oiti', 27.6, 59.15],
  ['oiti', 70.29, 64.81],
  ['oiti', 65.6, 65.53],
  ['oiti', 81.55, 66.46],
  ['oiti', 76.18, 67.09],
  ['oiti', 74.32, 67.56],
  ['oiti', 78.35, 67.82],
  ['oiti', 54.3, 67.84],
  ['oiti', 79.88, 67.95],
  ['oiti', 69.27, 68.29],
  ['oiti', 86.16, 75.17],
  ['oiti', 80.66, 79.44],
  ['oiti', 77.54, 80.05],
  ['oiti', 83.12, 80.18],
  ['oiti', 74.31, 80.36],
  ['oiti', 86.83, 81.58],
  ['oiti', 89.6, 83.43],
  ['limoncillo', 77.66, 18.77],
  ['limoncillo', 76.32, 19.83],
  ['limoncillo', 78.33, 20.28],
  ['limoncillo', 75.19, 21.21],
  ['limoncillo', 79.31, 21.64],
  ['limoncillo', 74.13, 22.36],
  ['limoncillo', 73.08, 23.19],
  ['limoncillo', 80.12, 23.5],
  ['limoncillo', 73.85, 24.68],
  ['limoncillo', 80.79, 25.28],
  ['limoncillo', 74.72, 26.65],
  ['limoncillo', 75.68, 27.5],
  ['limoncillo', 76.52, 28.97],
  ['limoncillo', 82.12, 29.12],
  ['limoncillo', 83.57, 31.88],
  ['limoncillo', 81.68, 44.21],
  ['limoncillo', 80.44, 45.58],
  ['limoncillo', 81.78, 46.18],
  ['limoncillo', 82.14, 48.18],
  ['limoncillo', 82.01, 56.41],
  ['noni', 60.91, 35.65],
  ['palma_real', 61.44, 64.99],
  ['palma_real', 56.53, 69.79],
  ['palma_real', 54.6, 71.97],
  ['palma_real', 52.85, 74.68],
  ['palma_real', 47.39, 76.51],
  ['palma_real', 51.3, 76.52],
  ['palma_real', 49.72, 78.5],
  ['palma_real', 48.16, 82.32],
  ['palma_real', 92.09, 92.28],
  ['palma_coco', 94.07, 52.13],
  ['palma_coco', 79.31, 65.26],
  ['palma_coco', 82.81, 66.46],
  ['palma_coco', 77.19, 82.16],
  ['palma_coco', 83.03, 82.49],
  ['palma_coco', 72.85, 82.93],
  ['palma_coco', 87.39, 84.15],
  ['palma_coco', 96.09, 93.45],
  ['palo_cruz', 63.91, 30.79],
  ['palo_cruz', 78.86, 53.95],
  ['palo_cruz', 32.28, 83.72],
  ['palo_cruz', 44.6, 84.13],
  ['guayaba', 28.96, 51.38],
  ['guayaba', 29.95, 78.35],
  ['guayaba', 96.87, 80.48],
  ['saman', 17.53, 56.23],
  ['saman', 53.42, 62.83],
  ['gualanday', 49.52, 72.73],
  ['mango', 23.46, 88.28],
  ['caracaro', 31.84, 93.14],
];

/* ---------- 3. ZONAS DEL CAMPUS ---------- */
/* La primera zona cuya condición coincida define el punto. */
const JBP_ZONAS = [
    { id: 'norte',     nombre: 'Zona Norte · Auditorio y bloques de aulas',      test: (x, y) => y < 32 },
    { id: 'occidente', nombre: 'Zona Occidente · Arboleda y bloques antiguos',   test: (x, y) => y >= 32 && x < 30 },
    { id: 'centro',    nombre: 'Zona Centro · Plaza principal',                  test: (x, y) => y >= 32 && y < 62 && x >= 30 && x < 58 },
    { id: 'oriente',   nombre: 'Zona Oriente · Bloque administrativo y labs.',   test: (x, y) => y >= 32 && y < 62 && x >= 58 },
    { id: 'sur',       nombre: 'Zona Sur · Coliseo, patios y huerta',            test: (x, y) => y >= 62 && x >= 30 }
];

function zonaDePunto(x, y) {
    const z = JBP_ZONAS.find(z => z.test(x, y));
    return z ? z : { id: 'general', nombre: 'Campus general' };
}

/* ---------- 4. CONSTRUCCIÓN DE LA LISTA COMPLETA ---------- */
const JBP_ARBOLES = (function () {
    const contadores = {};
    return JBP_PUNTOS.map(function (p, i) {
        const sp = JBP_ESPECIES[p[0]];
        contadores[p[0]] = (contadores[p[0]] || 0) + 1;
        const zona = zonaDePunto(p[1], p[2]);
        return {
            id: i + 1,
            codigo: 'JBP-' + JBP_PREFIJOS[p[0]] + '-' + String(contadores[p[0]]).padStart(2, '0'),
            especie: p[0],
            nombre: sp.nombre,
            nombreCientifico: sp.nombreCientifico,
            categoria: sp.categoria,
            color: sp.color,
            imagen: sp.imagen,
            ficha: sp.ficha,
            descripcion: sp.descripcion,
            zona: zona.nombre,
            zonaId: zona.id,
            x: p[1],
            y: p[2]
        };
    });
})();

/* ---------- 5. ESTADO Y ELEMENTOS DEL DOM ---------- */
let filtroCategoria = 'todos';
let filtroEspecie = null;
let busquedaActual = '';
let arbolSeleccionado = null;

/* Estado del zoom / paneo */
const vista = { k: 1, tx: 0, ty: 0 };
let arrastrando = false, movido = false;
let inicioPointer = { x: 0, y: 0, tx: 0, ty: 0 };

const campusMap   = document.getElementById('campusMap');
const mapSidebar  = document.getElementById('mapSidebar');
const closeSidebarBtn = document.getElementById('closeSidebar');
const sidebarContent  = document.getElementById('sidebarContent');
const pointsGrid  = document.getElementById('pointsGrid');
const searchInput = document.getElementById('searchTreeInput');
const filterButtons = document.querySelectorAll('.filter-btn[data-filter]');
const legendBox   = document.getElementById('speciesLegend');

let mapViewport = null, mapCanvas = null, markersLayer = null, tooltip = null;
let markerEls = [];

/* ---------- 6. INICIALIZACIÓN ---------- */
document.addEventListener('DOMContentLoaded', function () {
    initMap();
    renderLeyenda();
    renderPointsGrid();
    updateStats();
    setupEventListeners();
    window.addEventListener('resize', ajustarAltoSidebar);
});

function initMap() {
    campusMap.innerHTML = '';

    /* Escenario */
    const stage = document.createElement('div');
    stage.className = 'map-stage';

    mapViewport = document.createElement('div');
    mapViewport.className = 'map-viewport';
    mapViewport.id = 'mapViewport';

    mapCanvas = document.createElement('div');
    mapCanvas.className = 'map-canvas';

    const img = document.createElement('img');
    img.className = 'map-img';
    img.src = './imagenes/mapa-campus.jpg';
    img.alt = 'Plano aéreo del campus de la IE Jesús Bernal Pinzón';
    img.draggable = false;
    mapCanvas.appendChild(img);

    markersLayer = document.createElement('div');
    markersLayer.className = 'map-markers';
    mapCanvas.appendChild(markersLayer);

    mapViewport.appendChild(mapCanvas);
    stage.appendChild(mapViewport);

    /* Controles de zoom */
    const zoom = document.createElement('div');
    zoom.className = 'map-zoom';
    zoom.innerHTML =
        '<button type="button" id="zoomIn"    title="Acercarse"  aria-label="Acercarse">+</button>' +
        '<button type="button" id="zoomOut"   title="Alejarse"   aria-label="Alejarse">−</button>' +
        '<button type="button" id="zoomReset" title="Restablecer vista" aria-label="Restablecer vista">⟲</button>';
    stage.appendChild(zoom);

    /* Tooltip flotante */
    tooltip = document.createElement('div');
    tooltip.className = 'map-tooltip';
    tooltip.setAttribute('role', 'tooltip');
    stage.appendChild(tooltip);

    /* Ayuda */
    const hint = document.createElement('div');
    hint.className = 'map-hint';
    hint.innerHTML = '<i class="fas fa-hand-pointer"></i> Haz clic en un punto para ver su ficha · Rueda del ratón para zoom · Arrastra para desplazarte';
    stage.appendChild(hint);

    campusMap.appendChild(stage);

    /* Marcadores */
    JBP_ARBOLES.forEach(function (tree) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'map-marker' + (tree.especie === 'mango' ? ' blanco' : '');
        btn.style.left = tree.x + '%';
        btn.style.top = tree.y + '%';
        btn.style.setProperty('--c', tree.color);
        btn.dataset.id = tree.id;
        btn.setAttribute('aria-label', tree.nombre + ' · ' + tree.codigo);
        btn.innerHTML = '<span class="dot"></span>';

        btn.addEventListener('click', function (ev) {
            ev.stopPropagation();
            if (movido) return;               /* fue un arrastre, no un clic */
            selectTree(tree);
        });
        btn.addEventListener('mouseenter', function () { mostrarTooltip(btn, tree); });
        btn.addEventListener('mouseleave', ocultarTooltip);
        btn.addEventListener('focus', function () { mostrarTooltip(btn, tree); });
        btn.addEventListener('blur', ocultarTooltip);

        markersLayer.appendChild(btn);
        markerEls.push({ el: btn, tree: tree });
    });

    /* --- Interacción: zoom y paneo --- */
    mapViewport.addEventListener('wheel', function (e) {
        e.preventDefault();
        const r = mapViewport.getBoundingClientRect();
        zoomEn(e.clientX - r.left, e.clientY - r.top, e.deltaY < 0 ? 1.25 : 1 / 1.25);
    }, { passive: false });

    mapViewport.addEventListener('dblclick', function (e) {
        const r = mapViewport.getBoundingClientRect();
        zoomEn(e.clientX - r.left, e.clientY - r.top, 1.7);
    });

    mapViewport.addEventListener('pointerdown', function (e) {
        if (e.button !== 0) return;
        arrastrando = true; movido = false;
        inicioPointer = { x: e.clientX, y: e.clientY, tx: vista.tx, ty: vista.ty };
        mapViewport.setPointerCapture(e.pointerId);
        mapViewport.classList.add('dragging');
    });

    mapViewport.addEventListener('pointermove', function (e) {
        if (!arrastrando) return;
        const dx = e.clientX - inicioPointer.x;
        const dy = e.clientY - inicioPointer.y;
        if (Math.abs(dx) > 4 || Math.abs(dy) > 4) movido = true;
        if (!movido) return;
        vista.tx = inicioPointer.tx + dx;
        vista.ty = inicioPointer.ty + dy;
        limitarVista();
        aplicarVista();
    });

    ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (evName) {
        mapViewport.addEventListener(evName, function () {
            arrastrando = false;
            mapViewport.classList.remove('dragging');
            setTimeout(function () { movido = false; }, 0);
        });
    });

    document.getElementById('zoomIn').addEventListener('click', function () {
        zoomEn(mapViewport.clientWidth / 2, mapViewport.clientHeight / 2, 1.4);
    });
    document.getElementById('zoomOut').addEventListener('click', function () {
        zoomEn(mapViewport.clientWidth / 2, mapViewport.clientHeight / 2, 1 / 1.4);
    });
    document.getElementById('zoomReset').addEventListener('click', function () {
        vista.k = 1; vista.tx = 0; vista.ty = 0;
        aplicarVista(true);
    });

    aplicarVista();
    ajustarAltoSidebar();
}

/* ---------- 7. MOTOR DE VISTA (zoom / paneo) ---------- */
function limitarVista() {
    const vw = mapViewport.clientWidth;
    const vh = mapViewport.clientHeight;
    vista.k = Math.min(6, Math.max(1, vista.k));
    vista.tx = Math.min(0, Math.max(vw * (1 - vista.k), vista.tx));
    vista.ty = Math.min(0, Math.max(vh * (1 - vista.k), vista.ty));
}

function aplicarVista(suave) {
    limitarVista();
    if (suave) {
        mapCanvas.classList.add('smooth');
        setTimeout(function () { mapCanvas.classList.remove('smooth'); }, 550);
    }
    mapCanvas.style.transform = 'translate(' + vista.tx + 'px,' + vista.ty + 'px) scale(' + vista.k + ')';
    /* Los marcadores conservan su tamaño real aunque el mapa haga zoom */
    mapCanvas.style.setProperty('--mk', (1 / vista.k).toFixed(4));
    /* En táctil: sin zoom la página scrolleable, con zoom el mapa toma el gesto */
    if (mapViewport) mapViewport.classList.toggle('zoomed', vista.k > 1.01);
}

function zoomEn(cx, cy, factor) {
    const k2 = Math.min(6, Math.max(1, vista.k * factor));
    if (k2 === vista.k) return;
    vista.tx = cx - (cx - vista.tx) * (k2 / vista.k);
    vista.ty = cy - (cy - vista.ty) * (k2 / vista.k);
    vista.k = k2;
    aplicarVista();
}

function centrarEn(x, y) {
    const vw = mapViewport.clientWidth;
    const vh = mapViewport.clientHeight;
    vista.tx = vw / 2 - (x / 100) * vw * vista.k;
    vista.ty = vh / 2 - (y / 100) * vh * vista.k;
    aplicarVista(true);
}

/* ---------- 8. TOOLTIP ---------- */
function mostrarTooltip(btn, tree) {
    if (!tooltip) return;
    tooltip.innerHTML = '<strong>' + tree.nombre + '</strong> · <em>' + tree.nombreCientifico + '</em><br>' +
        '<span class="tooltip-codigo">' + tree.codigo + ' · ' + tree.zona + '</span>';
    const stage = campusMap.querySelector('.map-stage');
    const rs = stage.getBoundingClientRect();
    const rb = btn.getBoundingClientRect();
    tooltip.style.left = (rb.left - rs.left + rb.width / 2) + 'px';
    tooltip.style.top = (rb.top - rs.top - 8) + 'px';
    tooltip.classList.add('visible');
}

function ocultarTooltip() {
    if (tooltip) tooltip.classList.remove('visible');
}

/* ---------- 9. SELECCIÓN Y SIDEBAR ---------- */
function selectTree(tree) {
    arbolSeleccionado = tree;

    markerEls.forEach(function (m) {
        m.el.classList.toggle('selected', m.tree.id === tree.id);
    });

    const img = document.createElement('img');
    img.alt = tree.nombre;
    img.src = tree.imagen;
    img.addEventListener('error', function () {
        img.src = placeholderEspecie(tree);
    });

    sidebarContent.innerHTML = '';
    const wrap = document.createElement('div');
    wrap.className = 'tree-point-detail';
    wrap.appendChild(img);

    const tit = document.createElement('h4');
    tit.textContent = tree.nombre + '  (' + tree.codigo + ')';
    wrap.appendChild(tit);

    const sci = document.createElement('p');
    sci.className = 'scientific-name';
    sci.textContent = tree.nombreCientifico;
    wrap.appendChild(sci);

    const meta = document.createElement('div');
    meta.className = 'tree-meta';
    meta.innerHTML =
        '<span class="meta-tag"><i class="fas fa-tag"></i> ' + capitalizeFirst(tree.categoria) + '</span>' +
        '<span class="meta-tag"><i class="fas fa-map-marker-alt"></i> ' + tree.zona + '</span>' +
        '<span class="meta-tag meta-color" style="--c:' + tree.color + '"><i class="fas fa-circle"></i> ' + tree.nombre + '</span>';
    wrap.appendChild(meta);

    const desc = document.createElement('p');
    desc.textContent = tree.descripcion;
    wrap.appendChild(desc);

    const link = document.createElement('a');
    link.className = 'btn-view-ficha';
    link.href = 'ficha-arbol.html?arbol=' + tree.ficha;
    link.innerHTML = '<i class="fas fa-file-alt"></i> Ver Ficha Completa';
    wrap.appendChild(link);

    sidebarContent.appendChild(wrap);
    mapSidebar.classList.add('active');

    /* Centrar el mapa en el punto (solo si el mapa ya es visible) */
    if (mapViewport && mapViewport.clientWidth > 0) centrarEn(tree.x, tree.y);

    if (window.innerWidth < 1024) {
        mapSidebar.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

/* Imagen de respaldo si la foto de la especie no existe */
function placeholderEspecie(tree) {
    const fondo = tree.especie === 'mango' ? '#f4f4f4' : tree.color;
    const texto = tree.especie === 'mango' ? '#555555' : '#ffffff';
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">' +
        '<rect width="400" height="300" fill="' + fondo + '"/>' +
        '<circle cx="200" cy="128" r="58" fill="rgba(255,255,255,0.25)"/>' +
        '<text x="200" y="150" font-family="Arial, sans-serif" font-size="64" font-weight="bold" fill="' + texto + '" text-anchor="middle">' + tree.nombre.charAt(0) + '</text>' +
        '<text x="200" y="238" font-family="Arial, sans-serif" font-size="26" fill="' + texto + '" text-anchor="middle">' + tree.nombre + '</text>' +
        '</svg>';
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

/* ---------- 10. LEYENDA DE ESPECIES ---------- */
function renderLeyenda() {
    if (!legendBox) return;
    legendBox.innerHTML = '';
    Object.keys(JBP_ESPECIES).forEach(function (key) {
        const sp = JBP_ESPECIES[key];
        const total = JBP_ARBOLES.filter(function (t) { return t.especie === key; }).length;
        const item = document.createElement('button');
        item.type = 'button';
        item.className = 'legend-item' + (key === 'mango' ? ' blanco' : '');
        item.dataset.especie = key;
        item.title = 'Mostrar solo ' + sp.nombre;
        item.innerHTML =
            '<span class="legend-dot" style="background:' + sp.color + '"></span>' +
            '<span class="legend-name">' + sp.nombre + '</span>' +
            '<span class="legend-count">' + total + '</span>';
        item.addEventListener('click', function () {
            filtroEspecie = (filtroEspecie === key) ? null : key;
            legendBox.querySelectorAll('.legend-item').forEach(function (b) {
                b.classList.toggle('active', b.dataset.especie === filtroEspecie);
            });
            aplicarFiltros();
        });
        legendBox.appendChild(item);
    });
}

/* ---------- 11. FILTROS Y BÚSQUEDA ---------- */
function categoriaDeFiltro(filtro) {
    const mapa = { nativos: 'nativo', frutales: 'frutal', ornamentales: 'ornamental', maderables: 'maderable' };
    return mapa[filtro] || null;
}

function puntoVisible(tree) {
    const cat = categoriaDeFiltro(filtroCategoria);
    if (cat && tree.categoria !== cat) return false;
    if (filtroEspecie && tree.especie !== filtroEspecie) return false;
    if (busquedaActual) {
        const q = busquedaActual;
        const pajar = (tree.nombre + ' ' + tree.nombreCientifico + ' ' + tree.zona + ' ' + tree.codigo).toLowerCase();
        if (pajar.indexOf(q) === -1) return false;
    }
    return true;
}

function aplicarFiltros() {
    markerEls.forEach(function (m) {
        m.el.classList.toggle('oculto', !puntoVisible(m.tree));
    });
    renderPointsGrid(JBP_ARBOLES.filter(puntoVisible));
}

/* ---------- 12. GRILLA DE PUNTOS ---------- */
function renderPointsGrid(arboles) {
    if (!pointsGrid) return;
    const lista = arboles || JBP_ARBOLES;
    pointsGrid.innerHTML = '';

    if (lista.length === 0) {
        pointsGrid.innerHTML = '<p class="points-empty"><i class="fas fa-search"></i> Ningún árbol coincide con la búsqueda o el filtro seleccionado.</p>';
        return;
    }

    lista.forEach(function (tree) {
        const card = document.createElement('div');
        card.className = 'point-card';
        card.setAttribute('role', 'button');
        card.tabIndex = 0;

        const dot = document.createElement('span');
        dot.className = 'point-dot' + (tree.especie === 'mango' ? ' blanco' : '');
        dot.style.background = tree.color;

        const info = document.createElement('div');
        info.className = 'point-card-info';
        info.innerHTML =
            '<h4>' + tree.nombre + ' <small>' + tree.codigo + '</small></h4>' +
            '<p class="scientific-name">' + tree.nombreCientifico + '</p>' +
            '<div class="location-tag"><i class="fas fa-map-marker-alt"></i><span>' + tree.zona + '</span></div>';

        card.appendChild(dot);
        card.appendChild(info);

        function abrir() {
            selectTree(tree);
            document.getElementById('mapa-interactivo').scrollIntoView({ behavior: 'smooth' });
        }
        card.addEventListener('click', abrir);
        card.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(); }
        });

        pointsGrid.appendChild(card);
    });
}

/* ---------- 13. ESTADÍSTICAS ---------- */
function updateStats() {
    const total = JBP_ARBOLES.length;
    const nativos = JBP_ARBOLES.filter(function (t) { return t.categoria === 'nativo'; }).length;
    const frutales = JBP_ARBOLES.filter(function (t) { return t.categoria === 'frutal'; }).length;
    const zonas = new Set(JBP_ARBOLES.map(function (t) { return t.zonaId; })).size;

    animateNumber('totalTrees', total, '');
    animateNumber('nativeTrees', nativos, '');
    animateNumber('fruitTrees', frutales, '');
    animateNumber('coverageArea', zonas, '');
}

function animateNumber(elementId, target, suffix) {
    const element = document.getElementById(elementId);
    if (!element) return;
    let current = 0;
    const increment = Math.max(1, target / 60);
    const timer = setInterval(function () {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 25);
}

/* ---------- 14. EVENTOS GLOBALES ---------- */
function setupEventListeners() {
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', function () {
            mapSidebar.classList.remove('active');
            arbolSeleccionado = null;
            markerEls.forEach(function (m) { m.el.classList.remove('selected'); });
        });
    }

    filterButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            filterButtons.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');
            filtroCategoria = btn.getAttribute('data-filter');
            aplicarFiltros();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            busquedaActual = e.target.value.toLowerCase().trim();
            aplicarFiltros();
        });
    }
}

/* El panel lateral iguala su alto al del mapa en escritorio */
function ajustarAltoSidebar() {
    if (!mapSidebar || !mapViewport) return;
    if (window.innerWidth >= 1024) {
        mapSidebar.style.maxHeight = mapViewport.clientHeight + 'px';
    } else {
        mapSidebar.style.maxHeight = 'none';
    }
}

/* ---------- 15. UTILIDADES ---------- */
function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/* API pública (para otros scripts del sitio) */
window.mapaColegio = {
    arboles: JBP_ARBOLES,
    especies: JBP_ESPECIES,
    selectTree: selectTree,
    renderPointsGrid: renderPointsGrid,
    centrarEn: centrarEn
};
