document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initThemeToggle();
    createFireflies();
    initRevealAnimations();
});

/**
 * Gestión del Menú Móvil
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-list');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle('is-active');
            navLinks.classList.toggle('active');
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                menuToggle.classList.remove('is-active');
                navLinks.classList.remove('active');
            }
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

    if (!themeBtn) {
        console.warn('Botón de tema no encontrado');
        return;
    }

    const themeIcon = themeBtn.querySelector('i');
    
    // Función para aplicar el tema
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('modo-noche');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        } else {
            body.classList.remove('modo-noche');
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }
    };

    // Revisa preferencia guardada
    const savedTheme = localStorage.getItem('ecoTheme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Auto por hora (Opcional)
        const hour = new Date().getHours();
        if (hour >= 19 || hour <= 6) applyTheme('dark');
    }

    // Evento de clic
    themeBtn.addEventListener('click', () => {
        const isDark = body.classList.toggle('modo-noche');
        const theme = isDark ? 'dark' : 'light';
        localStorage.setItem('ecoTheme', theme);
        applyTheme(theme);
        
        // Pequeña animación extra al icono
        if (themeIcon) {
            themeIcon.style.transform = 'scale(0) rotate(180deg)';
            setTimeout(() => {
                themeIcon.style.transform = 'scale(1) rotate(0deg)';
            }, 250);
        }
    });
}

/**
 * Animación de Revelado al hacer Scroll (Intersection Observer)
 */
function initRevealAnimations() {
    // Añadir clase reveal a elementos comunes
    const selectors = '.card, .tree-card, .tarjeta-persona, .info-section h2, .goals-section h2, .calc-grid, .ai-workspace';
    document.querySelectorAll(selectors).forEach((el, index) => {
        el.classList.add('reveal');
        // Añadir retrasos escalonados si son hermanos
        if (el.parentElement.children.length > 1) {
            el.classList.add(`reveal-delay-${(index % 4) + 1}`);
        }
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/**
 * Animación de Luciérnagas (Optimizado)
 */
function createFireflies() {
    const fireflyCount = 12;
    const body = document.body;

    if (document.querySelector('.firefly')) return;

    for (let i = 0; i < fireflyCount; i++) {
        const firefly = document.createElement('div');
        firefly.classList.add('firefly');
        
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 15 + Math.random() * 10;

        firefly.style.cssText = `
            left: ${left}vw;
            top: ${top}vh;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
            pointer-events: none;
        `;

        body.appendChild(firefly);
    }
}
