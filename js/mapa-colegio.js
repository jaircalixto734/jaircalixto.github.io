/* =============================================
   MAPA-COLEGIO.JS
   Lógica para el mapa interactivo del colegio
   Muestra la ubicación de los árboles en un mapa SVG
   ============================================= */

// Datos de ejemplo para los puntos de árboles en el mapa
// En producción, esto debería venir de una base de datos o archivo JSON
const treeLocations = [
    {
        id: 1,
        nombre: 'Merecure',
        nombreCientifico: 'Moquilea pyrifolia',
        categoria: 'nativo',
        imagen: './imagenes/merecure1.jpeg',
        descripcion: 'Especie emblemática de la cuenca del Orinoco, proveedora de sombra y frutos dulces en la sabana.',
        ubicacion: 'Zona Norte - Cerca a la entrada principal',
        x: 25, // Posición X en porcentaje (0-100)
        y: 30  // Posición Y en porcentaje (0-100)
    },
    {
        id: 2,
        nombre: 'Jambolán',
        nombreCientifico: 'Syzygium cumini',
        categoria: 'frutal',
        imagen: './imagenes/Jambolán.jpeg',
        descripcion: 'Especie exótica introducida desde la India, famosa por sus frutos que tiñen la lengua.',
        ubicacion: 'Zona Central - Patio principal',
        x: 50,
        y: 45
    },
    {
        id: 3,
        nombre: 'Palo Cruz',
        nombreCientifico: 'Brownea ariza',
        categoria: 'ornamental',
        imagen: './imagenes/Palo_Cruz.jpeg',
        descripcion: 'Árbol nativo de extraordinario valor ornamental con flores escarlatas.',
        ubicacion: 'Zona Este - Jardín botánico',
        x: 75,
        y: 35
    },
    {
        id: 4,
        nombre: 'Almendro',
        nombreCientifico: 'Terminalia catappa',
        categoria: 'maderable',
        imagen: './imagenes/almendro1.jpeg',
        descripcion: 'Árbol de sombra clave en la llanura. Sus hojas purifican el agua.',
        ubicacion: 'Zona Sur - Campo deportivo',
        x: 45,
        y: 70
    },
    {
        id: 5,
        nombre: 'Pomarrosa',
        nombreCientifico: 'Syzygium jambos',
        categoria: 'frutal',
        imagen: './imagenes/pomarrosa1.jpeg',
        descripcion: 'Famosa por sus flores en forma de pompones y sus frutos con aroma a rosas.',
        ubicacion: 'Zona Oeste - Área de descanso',
        x: 20,
        y: 55
    },
    {
        id: 6,
        nombre: 'Palma Areca',
        nombreCientifico: 'Dypsis lutescens',
        categoria: 'ornamental',
        imagen: './imagenes/areca1.jpeg',
        descripcion: 'Elegante palmera multicaule conocida como "Palma Bambú".',
        ubicacion: 'Zona Norte - Entrada administrativa',
        x: 35,
        y: 25
    },
    {
        id: 7,
        nombre: 'Caracaro',
        nombreCientifico: 'Enterolobium cyclocarpum',
        categoria: 'nativo',
        imagen: './imagenes/caracaro1.jpeg',
        descripcion: 'El gigante de las sabanas. Sus frutos en forma de oreja son vitales para el ecosistema.',
        ubicacion: 'Zona Noreste - Límite del colegio',
        x: 80,
        y: 20
    },
    {
        id: 8,
        nombre: 'Mango',
        nombreCientifico: 'Mangifera indica',
        categoria: 'frutal',
        imagen: './imagenes/mango1.jpeg',
        descripcion: 'El rey de las frutas tropicales. Su sombra densa es parte esencial del patio.',
        ubicacion: 'Zona Central - Cerca a classrooms',
        x: 55,
        y: 50
    }
];

// Variables globales
let currentFilter = 'todos';
let selectedTree = null;

// Elementos del DOM
const campusMap = document.getElementById('campusMap');
const mapSidebar = document.getElementById('mapSidebar');
const closeSidebarBtn = document.getElementById('closeSidebar');
const sidebarContent = document.getElementById('sidebarContent');
const pointsGrid = document.getElementById('pointsGrid');
const searchInput = document.getElementById('searchTreeInput');
const filterButtons = document.querySelectorAll('.filter-btn[data-filter]');

// Inicializar el mapa cuando cargue el documento
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    renderPointsGrid();
    updateStats();
    setupEventListeners();
});

// Inicializar el mapa SVG
function initMap() {
    // Crear el contenedor del mapa SVG
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.background = '#f0f4f0';
    
    // Agregar fondo del mapa (silueta del colegio)
    const background = document.createElementNS(svgNS, 'rect');
    background.setAttribute('width', '100');
    background.setAttribute('height', '100');
    background.setAttribute('fill', '#e8f5e9');
    svg.appendChild(background);
    
    // Agregar grid de referencia
    const gridGroup = document.createElementNS(svgNS, 'g');
    for (let i = 0; i <= 10; i++) {
        // Líneas verticales
        const vLine = document.createElementNS(svgNS, 'line');
        vLine.setAttribute('x1', i * 10);
        vLine.setAttribute('y1', 0);
        vLine.setAttribute('x2', i * 10);
        vLine.setAttribute('y2', 100);
        vLine.setAttribute('stroke', '#c8e6c9');
        vLine.setAttribute('stroke-width', '0.3');
        gridGroup.appendChild(vLine);
        
        // Líneas horizontales
        const hLine = document.createElementNS(svgNS, 'line');
        hLine.setAttribute('x1', 0);
        hLine.setAttribute('y1', i * 10);
        hLine.setAttribute('x2', 100);
        hLine.setAttribute('y2', i * 10);
        hLine.setAttribute('stroke', '#c8e6c9');
        hLine.setAttribute('stroke-width', '0.3');
        gridGroup.appendChild(hLine);
    }
    svg.appendChild(gridGroup);
    
    // Agregar zonas del colegio (rectángulos representativos)
    const zones = [
        { x: 10, y: 10, w: 30, h: 20, label: 'Entrada', color: '#dcedc8' },
        { x: 50, y: 10, w: 40, h: 25, label: 'Aulas', color: '#c5e1a5' },
        { x: 10, y: 40, w: 25, h: 30, label: 'Administración', color: '#aed581' },
        { x: 45, y: 45, w: 45, h: 30, label: 'Patio Central', color: '#fff' },
        { x: 10, y: 75, w: 80, h: 20, label: 'Campo Deportivo', color: '#81c784' }
    ];
    
    zones.forEach(zone => {
        const rect = document.createElementNS(svgNS, 'rect');
        rect.setAttribute('x', zone.x);
        rect.setAttribute('y', zone.y);
        rect.setAttribute('width', zone.w);
        rect.setAttribute('height', zone.h);
        rect.setAttribute('fill', zone.color);
        rect.setAttribute('stroke', '#689f38');
        rect.setAttribute('stroke-width', '0.5');
        rect.setAttribute('rx', '2');
        svg.appendChild(rect);
        
        const text = document.createElementNS(svgNS, 'text');
        text.setAttribute('x', zone.x + zone.w / 2);
        text.setAttribute('y', zone.y + zone.h / 2);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'middle');
        text.setAttribute('font-size', '3');
        text.setAttribute('fill', '#33691e');
        text.setAttribute('font-weight', 'bold');
        text.textContent = zone.label;
        svg.appendChild(text);
    });
    
    // Agregar puntos de los árboles
    treeLocations.forEach(tree => {
        const pointGroup = createTreePoint(tree, svgNS);
        svg.appendChild(pointGroup);
    });
    
    // Limpiar placeholder y agregar SVG
    campusMap.innerHTML = '';
    campusMap.appendChild(svg);
}

// Crear un punto de árbol en el mapa
function createTreePoint(tree, svgNS) {
    const group = document.createElementNS(svgNS, 'g');
    group.setAttribute('transform', `translate(${tree.x}, ${tree.y})`);
    group.style.cursor = 'pointer';
    
    // Círculo exterior (halo)
    const halo = document.createElementNS(svgNS, 'circle');
    halo.setAttribute('r', '4');
    halo.setAttribute('fill', getCategoryColor(tree.categoria) + '40'); // 40 = 25% opacity
    halo.setAttribute('class', 'tree-halo');
    group.appendChild(halo);
    
    // Círculo principal
    const circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('r', '2.5');
    circle.setAttribute('fill', getCategoryColor(tree.categoria));
    circle.setAttribute('stroke', '#fff');
    circle.setAttribute('stroke-width', '0.5');
    circle.setAttribute('class', 'tree-point');
    circle.setAttribute('data-id', tree.id);
    group.appendChild(circle);
    
    // Icono de hoja pequeño
    const icon = document.createElementNS(svgNS, 'text');
    icon.setAttribute('text-anchor', 'middle');
    icon.setAttribute('dominant-baseline', 'central');
    icon.setAttribute('font-size', '2');
    icon.setAttribute('fill', '#fff');
    icon.textContent = '🌳';
    group.appendChild(icon);
    
    // Evento click
    group.addEventListener('click', () => selectTree(tree));
    
    // Animación de pulso
    animatePulse(halo);
    
    return group;
}

// Obtener color según categoría
function getCategoryColor(categoria) {
    const colors = {
        nativo: '#2d5a27',
        frutal: '#ff6b35',
        ornamental: '#9b59b6',
        maderable: '#3498db'
    };
    return colors[categoria] || '#2d5a27';
}

// Animación de pulso para los puntos
function animatePulse(element) {
    let scale = 1;
    let growing = true;
    
    function pulse() {
        if (growing) {
            scale += 0.02;
            if (scale >= 1.5) growing = false;
        } else {
            scale -= 0.02;
            if (scale <= 1) growing = true;
        }
        
        element.setAttribute('transform', `scale(${scale})`);
        requestAnimationFrame(pulse);
    }
    
    pulse();
}

// Seleccionar un árbol
function selectTree(tree) {
    selectedTree = tree;
    
    const content = `
        <div class="tree-point-detail">
            <img src="${tree.imagen}" alt="${tree.nombre}" onerror="this.src='./imagenes/logojbp1.png'">
            <h4>${tree.nombre}</h4>
            <p class="scientific-name">${tree.nombreCientifico}</p>
            <div class="tree-meta">
                <span class="meta-tag"><i class="fas fa-tag"></i> ${capitalizeFirst(tree.categoria)}</span>
                <span class="meta-tag"><i class="fas fa-map-marker-alt"></i> ${tree.ubicacion}</span>
            </div>
            <p>${tree.descripcion}</p>
            <a href="ficha-arbol.html?arbol=${tree.nombre.toLowerCase().replace(' ', '_')}" class="btn-view-ficha">
                <i class="fas fa-file-alt"></i> Ver Ficha Completa
            </a>
        </div>
    `;
    
    sidebarContent.innerHTML = content;
    mapSidebar.classList.add('active');
    
    // Scroll to sidebar on mobile
    if (window.innerWidth < 1024) {
        mapSidebar.scrollIntoView({ behavior: 'smooth' });
    }
}

// Renderizar la grilla de puntos
function renderPointsGrid(trees = treeLocations) {
    pointsGrid.innerHTML = '';
    
    trees.forEach(tree => {
        const card = document.createElement('div');
        card.className = 'point-card';
        card.innerHTML = `
            <div class="point-card-image">
                <img src="${tree.imagen}" alt="${tree.nombre}" loading="lazy" onerror="this.src='./imagenes/logojbp1.png'">
                <span class="point-category-badge ${tree.categoria}">${capitalizeFirst(tree.categoria)}</span>
            </div>
            <div class="point-card-info">
                <h4>${tree.nombre}</h4>
                <p class="scientific-name">${tree.nombreCientifico}</p>
                <div class="location-tag">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${tree.ubicacion}</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            selectTree(tree);
            // Scroll al mapa
            document.getElementById('mapa-interactivo').scrollIntoView({ behavior: 'smooth' });
        });
        
        pointsGrid.appendChild(card);
    });
}

// Actualizar estadísticas
function updateStats() {
    const total = treeLocations.length;
    const natives = treeLocations.filter(t => t.categoria === 'nativo').length;
    const fruits = treeLocations.filter(t => t.categoria === 'frutal').length;
    const zones = 5; // Número de zonas definidas
    
    animateNumber('totalTrees', total, '');
    animateNumber('nativeTrees', natives, '');
    animateNumber('fruitTrees', fruits, '');
    animateNumber('coverageArea', zones, '');
}

// Animar números
function animateNumber(elementId, target, suffix) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 30);
}

// Configurar event listeners
function setupEventListeners() {
    // Close sidebar
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', () => {
            mapSidebar.classList.remove('active');
            selectedTree = null;
        });
    }
    
    // Filtros
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover active de todos
            filterButtons.forEach(b => b.classList.remove('active'));
            // Agregar active al actual
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            currentFilter = filter;
            
            // Filtrar árboles
            if (filter === 'todos') {
                renderPointsGrid(treeLocations);
            } else {
                const filtered = treeLocations.filter(t => t.categoria === filter);
                renderPointsGrid(filtered);
            }
        });
    });
    
    // Buscador
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                renderPointsGrid(treeLocations);
                return;
            }
            
            const filtered = treeLocations.filter(t => 
                t.nombre.toLowerCase().includes(searchTerm) ||
                t.nombreCientifico.toLowerCase().includes(searchTerm) ||
                t.ubicacion.toLowerCase().includes(searchTerm)
            );
            
            renderPointsGrid(filtered);
        });
    }
}

// Capitalizar primera letra
function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Exportar funciones para uso externo si es necesario
window.mapaColegio = {
    selectTree,
    renderPointsGrid,
    treeLocations
};
