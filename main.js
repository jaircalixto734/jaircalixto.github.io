/**
 * EcoDigital - Lógica Global
 * Proyecto Grado Once - IE Jesús Bernal Pinzón
 * Técnico en Conservación de Recursos Naturales
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initThemeToggle();
    createFireflies();
});

/**
 * Gestión del Menú Móvil
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-list');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            navLinks.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-links li a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('is-active');
                navLinks.classList.remove('active');
            });
        });
    }
}

/**
 * Gestión del Modo Noche (Tema)
 */
function initThemeToggle() {
    const themeBtn = document.getElementById('themeToggle');
    const body = document.body;

    if (!themeBtn) return;

    const themeIcon = themeBtn.querySelector('i');
    
    // Función para aplicar el tema
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('modo-noche');
            if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            body.classList.remove('modo-noche');
            if (themeIcon) themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    };

    // Revisa preferencia guardada o auto por hora
    const checkTheme = () => {
        const savedTheme = localStorage.getItem('ecoTheme');
        
        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            const currentHour = new Date().getHours();
            if (currentHour >= 18 || currentHour < 6) {
                applyTheme('dark');
            }
        }
    };

    // Evento de clic
    themeBtn.addEventListener('click', () => {
        const isDark = body.classList.toggle('modo-noche');
        const theme = isDark ? 'dark' : 'light';
        
        localStorage.setItem('ecoTheme', theme);
        
        if (themeIcon) {
            if (isDark) {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            } else {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            }
        }
    });

    checkTheme();
}

/**
 * Animación de Luciérnagas
 */
function createFireflies() {
    const fireflyCount = 15;
    const body = document.body;

    // Evitar duplicados si la función se llama varias veces
    if (document.querySelector('.firefly')) return;

    for (let i = 0; i < fireflyCount; i++) {
        const firefly = document.createElement('div');
        firefly.classList.add('firefly');
        
        // Posiciones y tiempos aleatorios
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 8 + Math.random() * 5;

        firefly.style.cssText = `
            left: ${left}vw;
            top: ${top}vh;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
        `;

        body.appendChild(firefly);
    }
}
