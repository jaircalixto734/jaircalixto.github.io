/* =============================================
   FICHA-INTERACTIVA.JS v3 — COMPLETO
   Motor de interactividad para ficha-arbol
   =============================================
   - Reading Progress Bar + Shimmer
   - Scroll Reveal (IntersectionObserver)
   - Typing Effect (seguro, sin insertBefore)
   - Animated Counters (carbono/viajes)
   - Hero Leaf Particles (Canvas, solo desktop)
   - Side Navigation Dots (scroll-aware)
   - 3D Tilt Cards (metric cards)
   - Confetti Effect
   - Gallery Navigation (arrows + keyboard + indicator)
   - Quiz Enhanced (progress bar, scoreboard, result, confetti)
   - Notification System (animated toasts)
   - Smooth Mode Transition (fade out/in)
   - Micro-interactions (shine, pop, pulse)
   ============================================= */

(function() {
    'use strict';

    // =============================================
    // 0. TYPING STATE
    // =============================================
    let _typingAbort = false;

    // =============================================
    // 1. READING PROGRESS BAR + SHIMMER
    // =============================================
    function initProgressBar() {
        let bar = document.getElementById('readingProgress');
        if (!bar) {
            bar = document.createElement('div');
            bar.id = 'readingProgress';
            bar.innerHTML = '<div id="readingProgressFill"></div><div class="progress-shimmer"></div>';
            document.body.prepend(bar);
        }
        const fill = document.getElementById('readingProgressFill');
        if (!fill) return;

        window.addEventListener('scroll', function() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            fill.style.width = Math.min(progress, 100) + '%';
        }, { passive: true });
    }

    // =============================================
    // 2. SCROLL REVEAL
    // =============================================
    function initScrollReveal() {
        const elements = document.querySelectorAll('.reveal-up:not(.revealed)');
        if (!elements.length) return;

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.06,
            rootMargin: '0px 0px -30px 0px'
        });

        elements.forEach(function(el) { observer.observe(el); });
    }

    // =============================================
    // 3. TYPING EFFECT (seguro — sin insertBefore)
    // =============================================
    function stripHTML(html) {
        var tmp = document.createElement('div');
        tmp.innerHTML = html;
        return (tmp.textContent || tmp.innerText || '');
    }

    function startTypingEffect(containerId, htmlText, baseSpeed) {
        // Abort previous typing
        _typingAbort = true;
        var myAbort = false;
        // Small delay so previous abort takes effect
        setTimeout(function() { _typingAbort = false; }, 30);

        var container = document.getElementById(containerId);
        if (!container || !htmlText) return;

        var plainText = stripHTML(htmlText);
        if (!plainText.trim()) return;

        baseSpeed = baseSpeed || 15;

        // Setup: text span + cursor
        container.innerHTML = '';
        var textSpan = document.createElement('span');
        textSpan.className = 'typing-text-content';
        var cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        cursor.innerHTML = '&#9612;';
        container.appendChild(textSpan);
        container.appendChild(cursor);

        var index = 0;

        function typeChar() {
            if (myAbort || _typingAbort) return;
            if (index < plainText.length) {
                textSpan.textContent += plainText.charAt(index);
                index++;

                var ch = plainText.charAt(index - 1);
                var delay = baseSpeed;
                if ('.!?'.indexOf(ch) !== -1) delay = baseSpeed * 7;
                else if (',;:'.indexOf(ch) !== -1) delay = baseSpeed * 4;
                else if (ch === '\u2014' || ch === '-') delay = baseSpeed * 3;
                else if (ch === ' ') delay = baseSpeed * 0.5;

                // Scroll to keep cursor visible (subtle, no jump)
                if (index % 10 === 0) {
                    var rect = container.getBoundingClientRect();
                    if (rect.bottom > window.innerHeight - 50 || rect.top < 100) {
                        // Only adjust if user hasn't scrolled away
                        // Don't force scroll
                    }
                }

                setTimeout(typeChar, delay);
            } else {
                // Typing complete — swap to full HTML
                cursor.remove();
                container.innerHTML = htmlText;
                container.style.opacity = '0';
                container.style.transform = 'translateY(5px)';
                container.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                requestAnimationFrame(function() {
                    container.style.opacity = '1';
                    container.style.transform = 'translateY(0)';
                });
            }
        }

        // Start typing after a brief pause
        setTimeout(typeChar, 300);
    }

    function initTypingEffect() {
        var container = document.getElementById('fichaMensajeIA');
        if (!container) return;

        var fullHTML = container.innerHTML;
        if (!fullHTML || fullHTML.indexOf('Cargando') !== -1 || fullHTML.indexOf('analizando') !== -1) return;

        // Save message for re-use
        container.setAttribute('data-full-message', fullHTML);

        var observer = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting) {
                observer.unobserve(container);
                var msg = container.getAttribute('data-full-message');
                if (msg) startTypingEffect('fichaMensajeIA', msg, 15);
            }
        }, { threshold: 0.2 });

        observer.observe(container);
    }

    // =============================================
    // 4. ANIMATED COUNTERS
    // =============================================
    function initCounters() {
        var carbonoEl = document.getElementById('fichaCarbono');
        var viajesEl = document.getElementById('fichaViajes');

        if (carbonoEl && !carbonoEl.hasAttribute('data-target')) {
            var val = parseFloat(carbonoEl.textContent);
            if (!isNaN(val) && val > 0) carbonoEl.setAttribute('data-target', val);
        }
        if (viajesEl && !viajesEl.hasAttribute('data-target')) {
            var val2 = parseFloat(viajesEl.textContent);
            if (!isNaN(val2) && val2 > 0) viajesEl.setAttribute('data-target', val2);
        }

        var counters = document.querySelectorAll('[data-target]');
        if (!counters.length) return;

        // Reset for re-animation on mode switch
        counters.forEach(function(c) {
            c.textContent = '0';
            c.removeAttribute('data-animated');
        });

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
                    entry.target.setAttribute('data-animated', 'true');
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(function(c) { observer.observe(c); });
    }

    function animateCounter(element) {
        var target = parseFloat(element.getAttribute('data-target'));
        if (isNaN(target)) return;

        var isDecimal = target % 1 !== 0;
        var duration = 1800;
        var startTime = performance.now();

        function update(currentTime) {
            var elapsed = currentTime - startTime;
            var progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = eased * target;
            element.textContent = isDecimal ? current.toFixed(1) : Math.round(current);

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = isDecimal ? target.toFixed(1) : target;
            }
        }

        requestAnimationFrame(update);
    }

    // =============================================
    // 5. HERO LEAF PARTICLES (Canvas, solo hero)
    // =============================================
    function initParticles() {
        if (window.innerWidth < 768) return;

        var hero = document.getElementById('fichaImagen');
        if (!hero) return;

        hero.style.position = 'relative';
        hero.style.overflow = 'hidden';

        var canvas = document.createElement('canvas');
        canvas.id = 'particleCanvas';
        hero.appendChild(canvas);

        var ctx = canvas.getContext('2d');
        if (!ctx) return;

        var particles = [];
        var maxParticles = 18;
        var leafColors = [
            'rgba(129,182,34,0.6)',
            'rgba(163,217,119,0.5)',
            'rgba(92,133,21,0.5)',
            'rgba(212,255,128,0.4)',
            'rgba(46,204,113,0.35)'
        ];

        function resize() {
            canvas.width = hero.offsetWidth;
            canvas.height = hero.offsetHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        function createParticle() {
            return {
                x: Math.random() * canvas.width,
                y: -10,
                size: Math.random() * 7 + 3,
                speedY: Math.random() * 0.6 + 0.2,
                speedX: Math.random() * 0.5 - 0.25,
                rotation: Math.random() * 360,
                rotationSpeed: Math.random() * 2 - 1,
                opacity: Math.random() * 0.4 + 0.15,
                color: leafColors[Math.floor(Math.random() * leafColors.length)],
                wobble: Math.random() * Math.PI * 2,
                wobbleSpeed: Math.random() * 0.02 + 0.008,
                wobbleAmp: Math.random() * 0.5 + 0.2
            };
        }

        function drawLeaf(p) {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.moveTo(0, -p.size);
            ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.4, p.size * 0.8, p.size * 0.4, 0, p.size);
            ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.4, -p.size * 0.8, -p.size * 0.4, 0, -p.size);
            ctx.fill();
            // Leaf vein
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 0.5;
            ctx.globalAlpha = p.opacity * 0.5;
            ctx.beginPath();
            ctx.moveTo(0, -p.size * 0.8);
            ctx.lineTo(0, p.size * 0.8);
            ctx.stroke();
            ctx.restore();
        }

        function update() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (particles.length < maxParticles && Math.random() < 0.025) {
                particles.push(createParticle());
            }

            for (var i = particles.length - 1; i >= 0; i--) {
                var p = particles[i];
                p.wobble += p.wobbleSpeed;
                p.x += p.speedX + Math.sin(p.wobble) * p.wobbleAmp;
                p.y += p.speedY;
                p.rotation += p.rotationSpeed;

                if (p.y > canvas.height * 0.7) p.opacity *= 0.98;

                drawLeaf(p);

                if (p.y > canvas.height + 20 || p.opacity < 0.01) {
                    particles.splice(i, 1);
                }
            }

            requestAnimationFrame(update);
        }

        update();
    }

    // =============================================
    // 6. SIDE NAVIGATION DOTS
    // =============================================
    function initSideNav() {
        // Remove existing if re-init
        var existingNav = document.getElementById('sideNavDots');
        if (existingNav) existingNav.remove();

        var sectionMap = [
            { id: 'fichaImagen', label: 'Inicio' },
            { id: 'fichaMensajeIA', label: 'Silvain' },
            { id: 'galeriaArbol', label: 'Galeria' }
        ];

        var modules = document.querySelectorAll('.dossier-module');
        var moduleLabels = ['Taxonomia', 'Biometria', 'Morfologia', 'Fauna'];
        modules.forEach(function(mod, i) {
            if (!mod.id) mod.id = 'moduloNav' + i;
            sectionMap.push({ id: mod.id, label: moduleLabels[i] || ('Mod ' + (i + 1)) });
        });

        var quizEl = document.querySelector('.quiz-premium-container') || document.querySelector('.quiz-pro-box');
        if (quizEl && !quizEl.id) quizEl.id = 'quizSection';
        if (quizEl) sectionMap.push({ id: quizEl.id, label: 'Quiz' });

        var validSections = sectionMap.filter(function(s) { return document.getElementById(s.id); });
        if (validSections.length < 3) return;

        var nav = document.createElement('nav');
        nav.className = 'side-nav-dots';
        nav.id = 'sideNavDots';

        validSections.forEach(function(s) {
            var a = document.createElement('a');
            a.href = '#' + s.id;
            a.className = 'nav-dot';
            a.setAttribute('data-section', s.id);
            a.title = s.label;
            a.innerHTML = '<span class="dot-label">' + s.label + '</span>';
            nav.appendChild(a);
        });

        document.body.appendChild(nav);

        var dots = nav.querySelectorAll('.nav-dot');

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var id = entry.target.id;
                    dots.forEach(function(d) { d.classList.remove('active'); });
                    var active = nav.querySelector('.nav-dot[data-section="' + id + '"]');
                    if (active) active.classList.add('active');
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '-10% 0px -10% 0px'
        });

        validSections.forEach(function(s) {
            var el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        dots.forEach(function(dot) {
            dot.addEventListener('click', function(e) {
                e.preventDefault();
                var sectionId = dot.getAttribute('data-section');
                var section = document.getElementById(sectionId);
                if (section) {
                    var top = section.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: top, behavior: 'smooth' });
                }
            });
        });
    }

    // =============================================
    // 7. 3D TILT CARDS
    // =============================================
    function initTiltCards() {
        if (window.innerWidth < 768) return; // No tilt on mobile

        var cards = document.querySelectorAll('.metric-card');
        if (!cards.length) return;

        cards.forEach(function(card) {
            card.classList.add('tilt-card');

            card.addEventListener('mousemove', function(e) {
                var rect = card.getBoundingClientRect();
                var x = e.clientX - rect.left;
                var y = e.clientY - rect.top;
                var centerX = rect.width / 2;
                var centerY = rect.height / 2;
                var rotateX = ((y - centerY) / centerY) * -8;
                var rotateY = ((x - centerX) / centerX) * 8;

                card.style.transform = 'perspective(600px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-3px)';
            });

            card.addEventListener('mouseleave', function() {
                card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0)';
                card.style.transition = 'transform 0.5s ease';
                setTimeout(function() { card.style.transition = ''; }, 500);
            });

            card.addEventListener('mouseenter', function() {
                card.style.transition = 'transform 0.1s ease';
            });
        });
    }

    // =============================================
    // 8. CONFETTI
    // =============================================
    function launchConfetti() {
        var canvas = document.getElementById('confettiCanvas');
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.id = 'confettiCanvas';
            document.body.appendChild(canvas);
        }
        var ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var colors = ['#81b622', '#f1c40f', '#2ecc71', '#e74c3c', '#3498db', '#9b59b6', '#e67e22', '#1abc9c'];
        var pieces = [];
        for (var i = 0; i < 150; i++) {
            pieces.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                w: Math.random() * 10 + 5,
                h: Math.random() * 6 + 3,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
                rotSpeed: Math.random() * 12 - 6,
                speedY: Math.random() * 3 + 2,
                speedX: Math.random() * 4 - 2,
                opacity: 1
            });
        }

        var frame = 0;
        var maxFrames = 160;
        function animate() {
            frame++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pieces.forEach(function(p) {
                p.x += p.speedX;
                p.y += p.speedY;
                p.rotation += p.rotSpeed;
                p.speedY += 0.04;
                if (frame > maxFrames - 40) p.opacity = Math.max(0, p.opacity - 0.025);
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            });
            if (frame < maxFrames) requestAnimationFrame(animate);
            else ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        animate();
    }

    // =============================================
    // 9. GALLERY NAVIGATION (arrows + keyboard + indicator)
    // =============================================
    function initGalleryNav() {
        var container = document.getElementById('galeriaArbol');
        if (!container) return;
        var items = container.querySelectorAll('.gallery-item');
        if (items.length < 2) return;

        // Remove existing nav if re-init
        var existingWrapper = container.parentElement.querySelector('.gallery-nav-wrapper');
        if (existingWrapper) existingWrapper.remove();

        var currentIdx = 0;

        // Create wrapper
        var wrapper = document.createElement('div');
        wrapper.className = 'gallery-nav-wrapper';

        // Left arrow
        var leftArrow = document.createElement('button');
        leftArrow.className = 'gallery-arrow gallery-arrow-left';
        leftArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
        leftArrow.setAttribute('aria-label', 'Anterior');

        // Right arrow
        var rightArrow = document.createElement('button');
        rightArrow.className = 'gallery-arrow gallery-arrow-right';
        rightArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
        rightArrow.setAttribute('aria-label', 'Siguiente');

        // Indicator
        var indicator = document.createElement('div');
        indicator.className = 'gallery-indicator';
        indicator.textContent = '1 / ' + items.length;

        function scrollToIndex(idx) {
            if (idx < 0) idx = items.length - 1;
            if (idx >= items.length) idx = 0;
            currentIdx = idx;
            items[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            indicator.textContent = (idx + 1) + ' / ' + items.length;
        }

        leftArrow.addEventListener('click', function() { scrollToIndex(currentIdx - 1); });
        rightArrow.addEventListener('click', function() { scrollToIndex(currentIdx + 1); });

        // Keyboard navigation
        function onKey(e) {
            // Only if gallery is somewhat visible
            var rect = container.getBoundingClientRect();
            if (rect.top > window.innerHeight || rect.bottom < 0) return;

            if (e.key === 'ArrowLeft') { e.preventDefault(); scrollToIndex(currentIdx - 1); }
            if (e.key === 'ArrowRight') { e.preventDefault(); scrollToIndex(currentIdx + 1); }
        }
        document.addEventListener('keydown', onKey);

        // Update indicator on scroll
        container.addEventListener('scroll', function() {
            var scrollLeft = container.scrollLeft;
            var closest = 0;
            var minDist = Infinity;
            items.forEach(function(item, i) {
                var dist = Math.abs(item.offsetLeft - scrollLeft);
                if (dist < minDist) { minDist = dist; closest = i; }
            });
            currentIdx = closest;
            indicator.textContent = (closest + 1) + ' / ' + items.length;
        });

        wrapper.appendChild(leftArrow);
        wrapper.appendChild(indicator);
        wrapper.appendChild(rightArrow);

        container.parentElement.insertBefore(wrapper, container.nextSibling);
    }

    // =============================================
    // 10. QUIZ ENHANCED (progress bar, scoreboard, result, confetti)
    // =============================================
    function initQuizEnhanced() {
        var quizContainer = document.querySelector('.quiz-premium-container');
        if (!quizContainer) return;

        var cards = quizContainer.querySelectorAll('.quiz-card-pro');
        if (!cards.length) return;

        var totalQ = cards.length;
        var answered = 0;
        var correct = 0;

        // Remove existing enhancements if re-init
        var existingBar = quizContainer.querySelector('.quiz-progress-bar');
        if (existingBar) existingBar.remove();
        var existingScore = quizContainer.querySelector('.quiz-scoreboard');
        if (existingScore) existingScore.remove();
        var existingResult = quizContainer.querySelector('.quiz-result-banner');
        if (existingResult) existingResult.remove();

        // Progress bar
        var progressBar = document.createElement('div');
        progressBar.className = 'quiz-progress-bar';
        progressBar.innerHTML = '<div class="quiz-progress-fill" style="width:0%"></div>' +
            '<span class="quiz-progress-text">0 / ' + totalQ + ' respondidas</span>';

        // Scoreboard
        var scoreboard = document.createElement('div');
        scoreboard.className = 'quiz-scoreboard';
        scoreboard.innerHTML = '<span class="quiz-score-icon"><i class="fas fa-star"></i></span>' +
            '<span class="quiz-score-text">Puntuacion: <strong>0</strong> / ' + totalQ + '</span>';

        var titleEl = quizContainer.querySelector('.quiz-title-pro');
if (titleEl) {
    titleEl.appendChild(scoreboard);
}

// Insertar la barra de progreso de forma segura
if (cards[0].parentElement === quizContainer) {
    quizContainer.insertBefore(progressBar, cards[0]);
} else {
    // Si las cards están anidadas, insertar antes del padre del primer card
    var firstCardParent = cards[0].parentElement;
    if (firstCardParent && firstCardParent.parentElement === quizContainer) {
        quizContainer.insertBefore(progressBar, firstCardParent);
    } else {
        // Fallback: insertar al final del contenedor
        quizContainer.appendChild(progressBar);
    }
}

        var progressFill = progressBar.querySelector('.quiz-progress-fill');
        var progressText = progressBar.querySelector('.quiz-progress-text');
        var scoreStrong = scoreboard.querySelector('strong');

        function updateProgress() {
            var pct = Math.round((answered / totalQ) * 100);
            progressFill.style.width = pct + '%';
            progressText.textContent = answered + ' / ' + totalQ + ' respondidas';
            scoreStrong.textContent = correct;

            if (answered === totalQ) {
                showResult();
            }
        }

        function showResult() {
            var pct = Math.round((correct / totalQ) * 100);
            var banner = document.createElement('div');
            banner.className = 'quiz-result-banner ' + (pct >= 70 ? 'quiz-result-great' : 'quiz-result-keep');

            var icon = pct >= 70 ? 'fa-trophy' : 'fa-book-reader';
            var msg = pct >= 70
                ? 'Excelente! Has dominado el conocimiento sobre este arbol. Puntuacion: ' + correct + '/' + totalQ + ' (' + pct + '%)'
                : 'Sigue aprendiendo. Puntuacion: ' + correct + '/' + totalQ + ' (' + pct + '%). Revisa el dossier e intenta de nuevo.';

            banner.innerHTML = '<i class="fas ' + icon + '"></i><div><strong>' + (pct >= 70 ? 'Resultado Sobresaliente' : 'Sigue Practicando') + '</strong><p>' + msg + '</p></div>';

            quizContainer.appendChild(banner);

            // Trigger confetti if 70%+
            if (pct >= 70 && window.launchConfetti) {
                setTimeout(function() { window.launchConfetti(); }, 400);
            }
        }

        // Observe feedback elements to track answers via MutationObserver
        // (works with the existing resolverQuizPremium onclick handlers)
        cards.forEach(function(card, qIdx) {
            var fb = document.getElementById('fb-q' + qIdx);
            if (!fb) return;

            var observer = new MutationObserver(function() {
                if (fb.innerHTML && !card.getAttribute('data-scored')) {
                    card.setAttribute('data-scored', 'true');
                    answered++;
                    // Check if answer was correct by looking at feedback content
                    if (fb.innerHTML.indexOf('check-circle') !== -1) {
                        correct++;
                    }
                    updateProgress();
                    observer.disconnect();
                }
            });
            observer.observe(fb, { childList: true, subtree: true, attributes: true });
        });
    }

    // =============================================
    // 11. NOTIFICATION SYSTEM (animated toasts)
    // =============================================
    function showNotification(message, type) {
        type = type || 'info';

        var container = document.getElementById('notificationContainer');
        if (!container) {
            container = document.createElement('div');
            container.id = 'notificationContainer';
            document.body.appendChild(container);
        }

        var icons = {
            info: 'fa-info-circle',
            success: 'fa-check-circle',
            warning: 'fa-exclamation-triangle',
            error: 'fa-times-circle'
        };

        var toast = document.createElement('div');
        toast.className = 'notification-toast notification-' + type;
        toast.innerHTML = '<i class="fas ' + (icons[type] || icons.info) + '"></i><span>' + message + '</span>';

        var closeBtn = document.createElement('button');
        closeBtn.className = 'notification-close';
        closeBtn.innerHTML = '<i class="fas fa-times"></i>';
        closeBtn.addEventListener('click', function() {
            toast.classList.add('notification-exit');
            setTimeout(function() { if (toast.parentElement) toast.remove(); }, 400);
        });

        toast.appendChild(closeBtn);

        container.appendChild(toast);

        // Trigger animation
        requestAnimationFrame(function() {
            toast.classList.add('notification-visible');
        });

        // Auto-dismiss
        setTimeout(function() {
            if (toast.parentElement) {
                toast.classList.add('notification-exit');
                setTimeout(function() { if (toast.parentElement) toast.remove(); }, 400);
            }
        }, 4500);
    }

    // =============================================
    // 12. SMOOTH MODE TRANSITION
    // =============================================
    function transitionMode(callback) {
        var layout = document.querySelector('.premium-layout');
        if (!layout) { if (callback) callback(); return; }

        layout.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        layout.style.opacity = '0';
        layout.style.transform = 'translateY(10px)';

        setTimeout(function() {
            if (callback) callback();

            requestAnimationFrame(function() {
                layout.style.opacity = '1';
                layout.style.transform = 'translateY(0)';

                setTimeout(function() {
                    layout.style.transition = '';
                }, 350);
            });
        }, 350);
    }

    // =============================================
    // 13. MICRO-INTERACTIONS
    // =============================================
    function initMicroInteractions() {
        // Shine effect on buttons
        var buttons = document.querySelectorAll('#btnCientifica, #btnEducativa, .btn-audio-pro, .theme-toggle-btn');
        buttons.forEach(function(btn) {
            btn.classList.add('btn-shine');
        });

        // Pop effect on tags/badges
        var badges = document.querySelectorAll('.badge-estado, .badge-tipo');
        badges.forEach(function(badge) {
            badge.classList.add('tag-pop');
        });

        // Pulse on audio button
        var audioBtn = document.getElementById('btnAudio');
        if (audioBtn) {
            audioBtn.classList.add('pulse-hint');
            audioBtn.addEventListener('click', function() {
                audioBtn.classList.remove('pulse-hint');
            });
        }

        // Hover shine on metric cards (desktop only)
        if (window.innerWidth >= 768) {
            var metricCards = document.querySelectorAll('.metric-card');
            metricCards.forEach(function(card) {
                card.classList.add('card-shine');
            });
        }
    }

    // =============================================
    // EXPOSE TO WINDOW
    // =============================================
    window.initScrollReveal = initScrollReveal;
    window.initCounters = initCounters;
    window.initTypingEffect = initTypingEffect;
    window.startTypingEffect = startTypingEffect;
    window.initSideNav = initSideNav;
    window.initTiltCards = initTiltCards;
    window.launchConfetti = launchConfetti;
    window.initGalleryNav = initGalleryNav;
    window.initQuizEnhanced = initQuizEnhanced;
    window.showNotification = showNotification;
    window.transitionMode = transitionMode;
    window.initMicroInteractions = initMicroInteractions;

    // =============================================
    // INITIALIZE
    // =============================================
    function init() {
        initProgressBar();
        initScrollReveal();
        initTypingEffect();
        initCounters();
        initParticles();
        initSideNav();
        initTiltCards();
        initGalleryNav();
        initQuizEnhanced();
        initMicroInteractions();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        setTimeout(init, 120);
    }

})();


/* =============================================
CONTROLES DE TAMAÑO DE TEXTO
============================================= */
(function () {
  'use strict';

  var STORAGE_KEY = 'jbpFichaFontScale';
  var MIN = 0.85;
  var MAX = 1.45;
  var STEP = 0.1;
  var scale = 1;

  function clampScale(value) {
    value = Math.round(value * 100) / 100;
    return Math.min(MAX, Math.max(MIN, value));
  }

  function safeGetStoredScale() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function safeStoreScale(value) {
    try {
      localStorage.setItem(STORAGE_KEY, String(value));
    } catch (error) {
      // Si localStorage falla, la página sigue funcionando.
    }
  }

  function updateButtons() {
    var decreaseBtn = document.getElementById('fontDecrease');
    var increaseBtn = document.getElementById('fontIncrease');
    var resetBtn = document.getElementById('fontReset');

    if (decreaseBtn) {
      decreaseBtn.disabled = scale <= MIN + 0.001;
    }

    if (increaseBtn) {
      increaseBtn.disabled = scale >= MAX - 0.001;
    }

    if (resetBtn) {
      resetBtn.disabled = Math.abs(scale - 1) < 0.001;
    }
  }

  function announceScale() {
    var status = document.getElementById('fontSizeStatus');
    if (status) {
      status.textContent = 'Tamaño de letra: ' + Math.round(scale * 100) + '%';
    }
  }

  function applyScale() {
    // Variable CSS por si quieres usarla en futuros estilos.
    document.documentElement.style.setProperty('--user-font-scale', String(scale));

    // Cambio real del tamaño base. Funciona bien con estilos en rem.
    document.documentElement.style.fontSize = Math.round(scale * 100) + '%';

    safeStoreScale(scale);
    updateButtons();
    announceScale();
  }

  function initFontControls() {
    var stored = parseFloat(safeGetStoredScale());
    scale = isNaN(stored) ? 1 : clampScale(stored);

    applyScale();

    var decreaseBtn = document.getElementById('fontDecrease');
    var increaseBtn = document.getElementById('fontIncrease');
    var resetBtn = document.getElementById('fontReset');

    if (decreaseBtn) {
      decreaseBtn.addEventListener('click', function () {
        scale = clampScale(scale - STEP);
        applyScale();
      });
    }

    if (increaseBtn) {
      increaseBtn.addEventListener('click', function () {
        scale = clampScale(scale + STEP);
        applyScale();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        scale = 1;
        applyScale();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFontControls);
  } else {
    initFontControls();
  }
})();

/* =============================================
CORRECCIÓN POSICIÓN BOTÓN MODO NOCHE
============================================= */
(function () {
  'use strict';

  function fixThemeToggleButton() {
    var btn = document.querySelector('.theme-toggle-btn');
    if (!btn) return;

    // Si el botón no está directamente en el body, lo movemos.
    if (btn.parentElement !== document.body) {
      document.body.appendChild(btn);
    }

    // Refuerzo de posición por si algún estilo pisa el CSS.
    btn.style.position = 'fixed';
    btn.style.right = '25px';
    btn.style.bottom = '25px';
    btn.style.zIndex = '1200';
  }

  function initThemeToggleFix() {
    fixThemeToggleButton();

    // Por si el botón tarda un poco en existir.
    setTimeout(fixThemeToggleButton, 300);
    setTimeout(fixThemeToggleButton, 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggleFix);
  } else {
    initThemeToggleFix();
  }

  window.addEventListener('load', initThemeToggleFix);
})();