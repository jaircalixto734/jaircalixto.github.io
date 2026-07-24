/* =============================================
   GAMIFICACIÓN - LÓGICA DE MEDALLAS Y PROGRESO
   Sistema de recompensas por escaneo QR de árboles
   ============================================= */

// Configuración principal
const GAMIFICATION_CONFIG = {
    storageKey: 'silvain_medals',
    totalTrees: 28, // Total de árboles en el inventario (se actualiza dinámicamente abajo)
    showPanelDelay: 1500, // Tiempo antes de mostrar el panel (ms)
    autoHidePanel: false, // Si true, el panel se oculta automáticamente después de un tiempo
    autoHideDelay: 8000, // Tiempo antes de ocultar automáticamente (ms)
};

// Lista completa de árboles del inventario
const ARBOLES_INVENTARIO = [
    'merecure', 'jambolan', 'palo-cruz', 'almendro', 'pomarrosa', 
    'palma_areca', 'caracaro', 'mango', 'maiz_tostado', 'palma-de-coco',
    'trompillo', 'guacimo', 'gualanday', 'oiti', 'noni',
    'palma-real', 'saman', 'flor-morado', 'mamoncillo', 'guayaba',
    'limoncillo', 'palma africana', 'adelfa amarilla', 'cica', 'vanarena',
    'leucaena', 'guama', 'araguaney'
];

// Total de árboles en el inventario (calculado dinámicamente)
GAMIFICATION_CONFIG.totalTrees = ARBOLES_INVENTARIO.length;

// Estado actual de la gamificación
let gameState = {
    medals: [], // Medallas desbloqueadas (nombres de árboles)
    lastScan: null, // Último árbol escaneado
    scanCount: 0 // Total de escaneos únicos
};

// Inicializar el sistema de gamificación
function initGamification() {
    // Cargar estado desde localStorage
    loadGameState();
    
    // Verificar si es acceso por QR
    const urlParams = new URLSearchParams(window.location.search);
    const arbolParam = urlParams.get('arbol');
    
    if (arbolParam && arbolParam.endsWith('-qrcode')) {
        // Es un acceso por QR - procesar medalla
        const arbolNombre = arbolParam.replace('-qrcode', '');
        processQRScan(arbolNombre);
    }
}

// Cargar estado del juego desde localStorage
function loadGameState() {
    try {
        const saved = localStorage.getItem(GAMIFICATION_CONFIG.storageKey);
        if (saved) {
            gameState = JSON.parse(saved);
            console.log('🎮 Estado cargado:', gameState);
        }
    } catch (error) {
        console.error('❌ Error cargando estado:', error);
        gameState = { medals: [], lastScan: null, scanCount: 0 };
    }
}

// Guardar estado del juego en localStorage
function saveGameState() {
    try {
        localStorage.setItem(GAMIFICATION_CONFIG.storageKey, JSON.stringify(gameState));
        console.log('💾 Estado guardado:', gameState);
    } catch (error) {
        console.error('❌ Error guardando estado:', error);
    }
}

// Procesar escaneo QR
function processQRScan(arbolNombre) {
    console.log('📱 Procesando QR:', arbolNombre);
    
    // Validar que el árbol existe en el inventario
    if (!ARBOLES_INVENTARIO.includes(arbolNombre)) {
        console.warn('⚠️ Árbol no encontrado en inventario:', arbolNombre);
        return;
    }
    
    // Verificar si ya tenía la medalla
    const isNewMedal = !gameState.medals.includes(arbolNombre);
    
    if (isNewMedal) {
        // Nueva medalla desbloqueada!
        gameState.medals.push(arbolNombre);
        gameState.lastScan = arbolNombre;
        gameState.scanCount = gameState.medals.length;
        
        // Guardar progreso
        saveGameState();
        
        // Mostrar animación de logro
        setTimeout(() => {
            showAchievementModal(arbolNombre);
        }, 1000);
        
        // Mostrar panel de gamificación
        setTimeout(() => {
            showGamificationPanel(arbolNombre, true);
        }, GAMIFICATION_CONFIG.showPanelDelay);
        
        console.log('🏆 ¡Nueva medalla desbloqueada!', arbolNombre);
    } else {
        // Ya tenía la medalla - solo mostrar panel
        gameState.lastScan = arbolNombre;
        
        setTimeout(() => {
            showGamificationPanel(arbolNombre, false);
        }, GAMIFICATION_CONFIG.showPanelDelay);
        
        console.log('🔄 Medalla ya obtenida:', arbolNombre);
    }
}

// Mostrar panel de gamificación
function showGamificationPanel(lastMedal = null, isNew = false) {
    // Crear contenedor si no existe
    let container = document.getElementById('gamificationPanel');
    
    if (!container) {
        container = createGamificationPanel();
        document.body.appendChild(container);
    }
    
    // Actualizar contenido
    updateGamificationPanel(container, lastMedal, isNew);
    
    // Mostrar panel con animación
    setTimeout(() => {
        container.classList.add('visible');
    }, 100);
    
    // Auto-ocultar si está configurado
    if (GAMIFICATION_CONFIG.autoHide) {
        setTimeout(() => {
            hideGamificationPanel();
        }, GAMIFICATION_CONFIG.autoHideDelay);
    }
}

// Crear estructura HTML del panel
function createGamificationPanel() {
    const container = document.createElement('div');
    container.id = 'gamificationPanel';
    container.className = 'gamification-container';
    
    container.innerHTML = `
        <div class="gamification-header">
            <div class="gamification-title">
                <i class="fas fa-trophy"></i>
                <span>Mis Medallas</span>
            </div>
            <button class="gamification-close" onclick="hideGamificationPanel()" aria-label="Cerrar panel">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <div class="progress-section">
            <div class="progress-labels">
                <span class="progress-count">
                    <i class="fas fa-check-circle"></i> 
                    <span id="scannedCount">0</span> árboles escaneados
                </span>
                <span class="progress-total">
                    <span id="remainingCount">0</span> restantes
                </span>
            </div>
            <div class="progress-bar-container">
                <div class="progress-bar-fill" id="progressBar" style="width: 0%"></div>
            </div>
        </div>
        
        <div class="medal-section" id="newMedalSection" style="display: none;">
            <div class="medal-title">
                <i class="fas fa-star"></i>
                <span>¡Nueva Medalla Desbloqueada!</span>
            </div>
            <div class="medal-container">
                <div class="medal-ribbon"></div>
                <div class="medal-body">
                    <div class="medal-inner" id="medalIcon">
                        <i class="fas fa-tree"></i>
                    </div>
                </div>
            </div>
            <div class="medal-name" id="medalName">-</div>
            <div class="medal-congrats">¡Sigue explorando!</div>
        </div>
        
        <div class="medals-gallery-section">
            <div class="medals-gallery-title">
                <i class="fas fa-medal"></i>
                <span>Colección de Medallas</span>
            </div>
            <div class="medals-grid" id="medalsGrid">
                <!-- Se llena dinámicamente -->
            </div>
        </div>
    `;
    
    return container;
}

// Actualizar contenido del panel
function updateGamificationPanel(container, lastMedal = null, isNew = false) {
    // Actualizar contadores
    const scannedCount = gameState.medals.length;
    const remainingCount = GAMIFICATION_CONFIG.totalTrees - scannedCount;
    const progressPercent = (scannedCount / GAMIFICATION_CONFIG.totalTrees) * 100;
    
    document.getElementById('scannedCount').textContent = scannedCount;
    document.getElementById('remainingCount').textContent = remainingCount;
    document.getElementById('progressBar').style.width = `${progressPercent}%`;
    
    // Mostrar sección de nueva medalla si es nuevo desbloqueo
    const newMedalSection = document.getElementById('newMedalSection');
    if (isNew && lastMedal) {
        newMedalSection.style.display = 'block';
        document.getElementById('medalName').textContent = lastMedal.replace(/-/g, ' ').replace(/_/g, ' ');
        
        // Icono personalizado según tipo de árbol (se puede personalizar)
        const iconElement = document.getElementById('medalIcon');
        iconElement.innerHTML = getMedalIcon(lastMedal);
    } else {
        newMedalSection.style.display = 'none';
    }
    
    // Actualizar galería de medallas
    updateMedalsGallery();
}

// Actualizar galería de medallas
function updateMedalsGallery() {
    const grid = document.getElementById('medalsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    // Crear medallas para todos los árboles del inventario
    ARBOLES_INVENTARIO.forEach(arbol => {
        const isUnlocked = gameState.medals.includes(arbol);
        const medalItem = document.createElement('div');
        medalItem.className = `medal-item ${isUnlocked ? 'unlocked' : 'locked'}`;
        medalItem.title = isUnlocked ? arbol : 'Bloqueado';
        
        const displayName = arbol.replace(/-/g, ' ').replace(/_/g, ' ');
        
        medalItem.innerHTML = `
            <div class="medal-icon">
                ${getMedalIcon(arbol)}
            </div>
            <div class="medal-item-name">${displayName}</div>
        `;
        
        grid.appendChild(medalItem);
    });
}

// Obtener icono para la medalla (personalizable)
function getMedalIcon(arbolNombre) {
    // Aquí puedes personalizar iconos según el tipo de árbol
    // Por ahora usamos un icono genérico de árbol
    // Más adelante puedes mapear iconos específicos
    
    // Ejemplo de personalización:
    const iconMap = {
        'merecure': '<i class="fas fa-tree"></i>',
        'jambolan': '<i class="fas fa-apple-alt"></i>',
        'palo-cruz': '<i class="fas fa-seedling"></i>',
        'almendro': '<i class="fas fa-tree"></i>',
        'palma_areca': '<i class="fas fa-leaf"></i>',
        'palma-de-coco': '<i class="fas fa-leaf"></i>',
        'palma-real': '<i class="fas fa-leaf"></i>',
        'mango': '<i class="fas fa-apple-alt"></i>',
        'guayaba': '<i class="fas fa-apple-alt"></i>',
        'pomarrosa': '<i class="fas fa-apple-alt"></i>',
    };
    
    return iconMap[arbolNombre] || '<i class="fas fa-tree"></i>';
}

// Ocultar panel de gamificación
function hideGamificationPanel() {
    const container = document.getElementById('gamificationPanel');
    if (container) {
        container.classList.remove('visible');
        setTimeout(() => {
            container.style.display = 'none';
        }, 600);
    }
}

// Mostrar modal de logro
function showAchievementModal(arbolNombre) {
    // Crear modal si no existe
    let modal = document.getElementById('achievementModal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'achievementModal';
        modal.className = 'achievement-modal';
        modal.innerHTML = `
            <div class="achievement-content">
                <div class="achievement-icon" id="achievementIcon">
                    <i class="fas fa-trophy"></i>
                </div>
                <div class="achievement-title">¡Logro Desbloqueado!</div>
                <div class="achievement-subtitle" id="achievementSubtitle">Medalla de Explorador</div>
                <div class="achievement-description" id="achievementDescription">
                    Has desbloqueado una nueva medalla en tu colección.
                </div>
                <button class="achievement-btn" onclick="closeAchievementModal()">
                    <i class="fas fa-check"></i> ¡Genial!
                </button>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    // Actualizar contenido
    const displayName = arbolNombre.replace(/-/g, ' ').replace(/_/g, ' ');
    document.getElementById('achievementSubtitle').textContent = `🌳 ${displayName}`;
    document.getElementById('achievementIcon').innerHTML = getMedalIcon(arbolNombre);
    document.getElementById('achievementDescription').textContent = 
        `¡Has escaneado el código QR del ${displayName} y ganado su medalla! ` +
        `Continúa explorando para completar tu colección de ${GAMIFICATION_CONFIG.totalTrees} árboles.`;
    
    // Mostrar modal
    setTimeout(() => {
        modal.classList.add('visible');
    }, 100);
    
    // Sonido de logro (opcional)
    playAchievementSound();
}

// Cerrar modal de logro
function closeAchievementModal() {
    const modal = document.getElementById('achievementModal');
    if (modal) {
        modal.classList.remove('visible');
    }
}

// Reproducir sonido de logro (opcional)
function playAchievementSound() {
    // Aquí puedes agregar un sonido de logro si lo deseas
    // Por ejemplo:
    // const audio = new Audio('/sonidos/achievement.mp3');
    // audio.play();
    console.log('🔔 Sonido de logro (opcional)');
}

// Resetear progreso (para testing)
function resetGamification() {
    if (confirm('¿Estás seguro de que quieres reiniciar todo tu progreso? Esta acción no se puede deshacer.')) {
        localStorage.removeItem(GAMIFICATION_CONFIG.storageKey);
        gameState = { medals: [], lastScan: null, scanCount: 0 };
        location.reload();
    }
}

// Exportar funciones para uso global
window.initGamification = initGamification;
window.hideGamificationPanel = hideGamificationPanel;
window.closeAchievementModal = closeAchievementModal;
window.resetGamification = resetGamification;

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGamification);
} else {
    initGamification();
}
