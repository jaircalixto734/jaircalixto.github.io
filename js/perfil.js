/* =============================================
   SILVAIN · PERFIL DEL GUARDIÁN
   Sistema de XP, Rangos, Eco-Misiones y Certificado Digital
   Todo el progreso se guarda en localStorage (sin servidores)
   ============================================= */

(function () {
    'use strict';

    var STORAGE_KEY = 'silvain_medals'; // Compatible con js/gamificacion.js

    // ---------- Configuración de XP ----------
    var XP_SCAN = 100;      // +100 XP por cada árbol escaneado (nueva medalla)
    var XP_QUIZ_PASSED = 50; // +50 XP al aprobar (>=70%) el quiz de una ficha

    // ---------- Rangos ("Evolución del Guardián") ----------
    var RANGOS = [
        { nombre: 'Semilla Curiosa', icono: 'fa-seedling', min: 0, max: 399, color: '#8bc34a' },
        { nombre: 'Explorador del Bosque', icono: 'fa-hiking', min: 400, max: 899, color: '#26a69a' },
        { nombre: 'Guardián del Carbono', icono: 'fa-shield-alt', min: 900, max: 1399, color: '#ffb300' },
        { nombre: 'Maestro Botánico JBP', icono: 'fa-crown', min: 1400, max: Infinity, color: '#ab47bc' }
    ];

    // ---------- Estado ----------
    var state = {
        medals: [],        // Árboles escaneados (los que ya tenían medalla)
        lastScan: null,
        scanCount: 0,
        xp: 0,             // Experiencia total
        quizzesPassed: [], // Fichas cuyo quiz fue aprobado (>=70%)
        missions: {},      // id -> true completadas
        profile: { nombre: '', fechaInicio: null }
    };

    function loadState() {
        try {
            var saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                var parsed = JSON.parse(saved);
                state.medals = parsed.medals || [];
                state.lastScan = parsed.lastScan || null;
                state.scanCount = typeof parsed.scanCount === 'number' ? parsed.scanCount : state.medals.length;
                state.xp = typeof parsed.xp === 'number' ? parsed.xp : state.medals.length * XP_SCAN;
                state.quizzesPassed = parsed.quizzesPassed || [];
                state.missions = parsed.missions || {};
                state.profile = parsed.profile || { nombre: '', fechaInicio: null };
            }
        } catch (e) {
            console.warn('⚠️ perfil: estado ilegible, usando valores por defecto', e);
        }
        if (!state.profile.fechaInicio) {
            state.profile.fechaInicio = new Date().toISOString();
        }
    }

    function saveState() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (e) {
            console.error('❌ perfil: no se pudo guardar', e);
        }
    }

    // ---------- API global para gamificacion.js / fichas ----------
    window.SILVAIN_PERFIL = {
        getState: function () { return state; },
        save: saveState,

        addXP: function (cantidad) {
            state.xp = Math.max(0, (state.xp || 0) + cantidad);
            saveState();
        },

        registerQuizPass: function (arbolId) {
            if (!arbolId) return false;
            if (state.quizzesPassed.indexOf(arbolId) !== -1) return false; // ya contado
            state.quizzesPassed.push(arbolId);
            state.xp += XP_QUIZ_PASSED;
            saveState();
            return true; // primera vez => XP otorgada
        },

        getRango: function (xp) {
            xp = (typeof xp === 'number') ? xp : state.xp;
            for (var i = RANGOS.length - 1; i >= 0; i--) {
                if (xp >= RANGOS[i].min) return RANGOS[i];
            }
            return RANGOS[0];
        },

        getMisionInfo: function (id) {
            ensureMissionsBuilt();
            for (var i = 0; i < MISIONES.length; i++) {
                if (MISIONES[i].id === id) return MISIONES[i];
            }
            return null;
        },

        getTodasMisiones: function () {
            ensureMissionsBuilt();
            return MISIONES;
        },

        getTodosRangos: function () { return RANGOS; },

        constants: { XP_SCAN: XP_SCAN, XP_QUIZ_PASSED: XP_QUIZ_PASSED }
    };

    // ---------- Datos de los árboles (para misiones dinámicas) ----------
    var DB = null;
    function getDB() {
        if (DB) return DB;
        if (typeof baseDatosArboles !== 'undefined') DB = baseDatosArboles;
        return DB;
    }

    function esNativo(id) {
        var db = getDB();
        if (db && db[id]) {
            if (typeof db[id].exotica === 'boolean') return !db[id].exotica;
            return /nativ/i.test(db[id].tipo || '');
        }
        return NATIVOS_FALLBACK.indexOf(id) !== -1;
    }

    function dapDe(id) {
        var db = getDB();
        if (db && db[id] && db[id].datosColegio) return db[id].datosColegio.dapPromedio || 0;
        return DAP_FALLBACK[id] || 0;
    }

    function nombreDe(id) {
        var db = getDB();
        if (db && db[id] && db[id].nombre) return db[id].nombre;
        return (id || '').replace(/[-_]/g, ' ');
    }

    // Respaldo si la página no cargó datos_arboles.js
    var NATIVOS_FALLBACK = ['merecure', 'palo-cruz', 'guacimo', 'gualanday', 'saman', 'trompillo',
        'caracaro', 'maiz_tostado', 'guayaba', 'flor-morado', 'mamoncillo', 'guama', 'araguaney'];
    var DAP_FALLBACK = { 'merecure': 32.54, 'palo-cruz': 28.64, 'guacimo': 22.35, 'gualanday': 41.06, 'saman': 68.91,
        'trompillo': 51.24, 'caracaro': 113, 'guayaba': 10.45, 'flor-morado': 33.1, 'mamoncillo': 56.02,
        'limoncillo': 25.28, 'palma_africana': 45.2, 'adelfa amarilla': 21.9, 'oiti': 30.16, 'mango': 116.5,
        'palma-real': 39.06, 'palma-de-coco': 23.73, 'almendro': 24.19, 'pomarrosa': 28.78, 'guama': 26.55, 'araguaney': 33.34 };

    // ---------- Eco-Misiones ----------
    var TOTAL_TREES = 28;
    var TOTAL_QUIZZES = 28;
    var MISIONES = null;

    function buildMissions() {
        var nativosIds = [];
        var grandesIds = [];
        var frutalesIds = [];
        var carbonero = { id: null, dap: 0 };

        var ids = (typeof ARBOLES_INVENTARIO !== 'undefined') ? ARBOLES_INVENTARIO : Object.keys(getDB() || {});
        TOTAL_TREES = ids.length || 28;

        ids.forEach(function (id) {
            if (esNativo(id)) nativosIds.push(id);
            var dap = dapDe(id);
            if (dap > 30) grandesIds.push(id);
            if (dap > carbonero.dap) carbonero = { id: id, dap: dap };
            if (/mango|guayaba|mamoncillo|jambolan|pomarrosa|noni|guamo|limoncillo/i.test(id)) frutalesIds.push(id);
        });

        var numScanned = function (arr) {
            return arr.filter(function (id) { return state.medals.indexOf(id) !== -1; }).length;
        };
        var allScanned = function (arr) { return arr.length > 0 && numScanned(arr) === arr.length; };

        MISIONES = [
            {
                id: 'mision_biotrupo',
                icono: '📏',
                titulo: 'Misión Biometría',
                desc: 'Encuentra y escanea un árbol con DAP mayor a 30 cm. Pista: busca troncos gruesos junto a las zonas de descanso.',
                xp: 150,
                progreso: function () { return Math.min(numScanned(grandesIds), 1); },
                meta: 1,
                detalle: function () { return numScanned(grandesIds) + ' de 1 árbol grande (' + grandesIds.length + ' candidatos con DAP > 30 cm)'; },
                cumplida: function () { return numScanned(grandesIds) >= 1; }
            },
            {
                id: 'mision_llanera',
                icono: '🌿',
                titulo: 'Misión Llanera',
                desc: 'Escanea TODAS las especies nativas de la Orinoquía registradas en el inventario del colegio.',
                xp: 200,
                progreso: function () { return numScanned(nativosIds); },
                meta: nativosIds.length,
                detalle: function () { return numScanned(nativosIds) + ' de ' + nativosIds.length + ' especies nativas'; },
                cumplida: function () { return allScanned(nativosIds); }
            },
            {
                id: 'mision_carbono',
                icono: '⚡',
                titulo: 'Misión Campeón de Carbono',
                desc: 'El árbol que más CO₂ captura en el colegio es el de mayor DAP: el Caracaro (113 cm). Encuéntralo, escanea su QR y léelo completo.',
                xp: 150,
                progreso: function () { return state.medals.indexOf(carbonero.id) !== -1 ? 1 : 0; },
                meta: 1,
                detalle: function () { return state.medals.indexOf(carbonero.id) !== -1 ? '¡Campeón encontrado!' : '0 de 1 (' + nombreDe(carbonero.id) + ', DAP ' + carbonero.dap + ' cm)'; },
                cumplida: function () { return carbonero.id && state.medals.indexOf(carbonero.id) !== -1; }
            },
            {
                id: 'mision_frutales',
                icono: '🍎',
                titulo: 'Misión Frutales del Patio',
                desc: 'Escanea los árboles frutales del inventario: Mango, Guayaba, Mamoncillo, Jambolán, Pomarrosa, Noni, Guamo y Limoncillo.',
                xp: 180,
                progreso: function () { return numScanned(frutalesIds); },
                meta: frutalesIds.length,
                detalle: function () { return numScanned(frutalesIds) + ' de ' + frutalesIds.length + ' frutales'; },
                cumplida: function () { return allScanned(frutalesIds); }
            },
            {
                id: 'mision_quizes',
                icono: '🧠',
                titulo: 'Misión Sabio de las Fichas',
                desc: 'Aprueba (70% o más) los quizzes de todas las fichas de árbol disponibles.',
                xp: 250,
                progreso: function () { return state.quizzesPassed.length; },
                meta: TOTAL_QUIZZES,
                detalle: function () { return state.quizzesPassed.length + ' de ' + TOTAL_QUIZZES + ' quizzes aprobados'; },
                cumplida: function () { return state.quizzesPassed.length >= TOTAL_QUIZZES; }
            },
            {
                id: 'mision_ruta_completa',
                icono: '🗺️',
                titulo: 'Ruta Completa',
                desc: 'Completa el 100% de la ruta: escanea los ' + TOTAL_TREES + ' árboles del inventario forestal.',
                xp: 300,
                progreso: function () { return state.medals.length; },
                meta: TOTAL_TREES,
                detalle: function () { return state.medals.length + ' de ' + TOTAL_TREES + ' árboles'; },
                cumplida: function () { return state.medals.length >= TOTAL_TREES; }
            }
        ];
    }

    function ensureMissionsBuilt() {
        if (!MISIONES) buildMissions();
    }

    function checkMissions() {
        ensureMissionsBuilt();
        var ganadas = [];
        MISIONES.forEach(function (m) {
            if (!state.missions[m.id] && m.cumplida()) {
                state.missions[m.id] = true;
                state.xp += m.xp;
                ganadas.push(m);
            }
        });
        if (ganadas.length) saveState();
        return ganadas;
    }

    // ---------- Notificaciones tipo toast ----------
    function toast(html, ms) {
        var cont = document.getElementById('perfilToastContainer');
        if (!cont) {
            cont = document.createElement('div');
            cont.id = 'perfilToastContainer';
            document.body.appendChild(cont);
        }
        var t = document.createElement('div');
        t.className = 'perfil-toast';
        t.innerHTML = html;
        cont.appendChild(t);
        requestAnimationFrame(function () { t.classList.add('visible'); });
        setTimeout(function () {
            t.classList.remove('visible');
            setTimeout(function () { t.remove(); }, 400);
        }, ms || 4200);
    }

    // Expuestas para integración con gamificacion.js
    window.__silvainPerfilToast = toast;
    window.__silvainCheckMissions = checkMissions;

    function announceMission(m) {
        toast('<i class="fas fa-bullseye"></i> <strong>Eco-Misión completada:</strong> ' +
            m.titulo + ' <span class="perfil-xp-chip">+' + m.xp + ' XP</span>');
    }

    // ---------- Comprobar subida de rango ----------
    function checkRankUp(rangoPrevio) {
        var nuevo = window.SILVAIN_PERFIL.getRango();
        if (rangoPrevio && nuevo.nombre !== rangoPrevio.nombre) {
            toast('<i class="fas ' + nuevo.icono + '"></i> <strong>¡Ascenso de rango!</strong> Ahora eres: ' +
                nuevo.nombre + ' 🎖️', 6000);
        }
        return nuevo;
    }

    // =====================================================
    // PÁGINA DE PERFIL (perfil.html)
    // =====================================================
    function initPerfilPage() {
        if (!document.getElementById('perfilRoot')) return;

        loadState();
        ensureMissionsBuilt();

        // ---- Identidad / nombre de usuario (localStorage) ----
        var inputNombre = document.getElementById('perfilNombreInput');
        var btnGuardarNombre = document.getElementById('btnGuardarNombre');
        if (inputNombre) inputNombre.value = state.profile.nombre || '';

        if (btnGuardarNombre) {
            btnGuardarNombre.addEventListener('click', function () {
                var v = (inputNombre.value || '').trim();
                if (!v) { toast('✏️ Escribe tu nombre para personalizar el perfil y el certificado.'); return; }
                state.profile.nombre = v;
                saveState();
                renderTodo();
                toast('<i class="fas fa-user-check"></i> ¡Listo, <strong>' + escapeHtml(v) + '</strong>! Tu perfil está personalizado.');
            });
        }

        // ---- Render principal ----
        function renderTodo() {
            renderIdentidad();
            renderRangos();
            renderMisiones();
            renderMedallas();
            renderCertificadoEstado();
        }

        function renderIdentidad() {
            var rango = window.SILVAIN_PERFIL.getRango();
            var elNombre = document.getElementById('perfilDisplayName');
            var elRango = document.getElementById('perfilRangoActual');
            var elXP = document.getElementById('perfilXPValor');
            var fill = document.getElementById('perfilXPBarFill');
            var lblProgreso = document.getElementById('perfilXPLabel');
            var stats = document.getElementById('perfilStatsGrid');

            if (elNombre) elNombre.textContent = state.profile.nombre || 'Guardián Anónimo';
            if (elRango) {
                elRango.innerHTML = '<i class="fas ' + rango.icono + '"></i> ' + rango.nombre;
                elRango.style.color = rango.color;
            }
            if (elXP) elXP.textContent = state.xp + ' XP';

            if (fill && lblProgreso) {
                var pct, texto;
                if (rango.max === Infinity) {
                    pct = 100;
                    texto = 'Rango máximo alcanzado 👑';
                } else {
                    pct = Math.min(100, Math.round(((state.xp - rango.min) / (rango.max - rango.min + 1)) * 100));
                    texto = rango.nombre + ' → siguiente rango en ' + Math.max(0, rango.max + 1 - state.xp) + ' XP';
                }
                fill.style.width = pct + '%';
                fill.style.background = 'linear-gradient(90deg,' + rango.color + ',#ffd700)';
                lblProgreso.textContent = texto;
            }

            if (stats) {
                var misionesHechas = Object.keys(state.missions).length;
                var totalMisiones = MISIONES.length;
                stats.innerHTML =
                    statCard('fa-tree', state.medals.length + '/' + TOTAL_TREES, 'Árboles escaneados') +
                    statCard('fa-star', state.quizzesPassed.length + '/' + TOTAL_QUIZZES, 'Quizzes aprobados') +
                    statCard('fa-bullseye', misionesHechas + '/' + totalMisiones, 'Eco-Misiones') +
                    statCard('fa-medal', state.medals.length, 'Medallas de colección');
            }
        }

        function statCard(icono, valor, etiqueta) {
            return '<div class="perfil-stat-card"><i class="fas ' + icono + '"></i>' +
                '<div class="perfil-stat-valor">' + valor + '</div>' +
                '<div class="perfil-stat-label">' + etiqueta + '</div></div>';
        }

        function renderRangos() {
            var cont = document.getElementById('perfilRangosLista');
            if (!cont) return;
            var rangoActual = window.SILVAIN_PERFIL.getRango();
            cont.innerHTML = RANGOS.map(function (r) {
                var actual = r.nombre === rangoActual.nombre;
                var bloqueado = state.xp < r.min;
                return '<div class="perfil-rango-item ' + (actual ? 'activo' : '') + (bloqueado ? ' bloqueado' : '') + '" style="--rango-color:' + r.color + '">' +
                    '<div class="perfil-rango-icon"><i class="fas ' + r.icono + '"></i></div>' +
                    '<div class="perfil-rango-info"><strong>' + r.nombre + '</strong>' +
                    '<span>' + (r.max === Infinity ? r.min + '+ XP' : r.min + ' – ' + r.max + ' XP') + '</span></div>' +
                    '<div class="perfil-rango-badge">' + (actual ? 'Actual' : (bloqueado ? '<i class="fas fa-lock"></i>' : '<i class="fas fa-check"></i>')) + '</div>' +
                    '</div>';
            }).join('');
        }

        function renderMisiones() {
            var cont = document.getElementById('perfilMisionesLista');
            if (!cont) return;
            cont.innerHTML = MISIONES.map(function (m) {
                var hecha = !!state.missions[m.id];
                var prog = m.progreso();
                var pct = Math.min(100, Math.round((prog / m.meta) * 100));
                return '<div class="perfil-mision ' + (hecha ? 'completada' : '') + '">' +
                    '<div class="perfil-mision-header">' +
                    '<span class="perfil-mision-icono">' + m.icono + '</span>' +
                    '<div><strong>' + m.titulo + '</strong><p>' + m.desc + '</p></div>' +
                    '<span class="perfil-xp-chip">+' + m.xp + ' XP</span>' +
                    '</div>' +
                    '<div class="perfil-mision-bar"><div style="width:' + pct + '%"></div></div>' +
                    '<div class="perfil-mision-footer"><span>' + m.detalle() + '</span>' +
                    (hecha ? '<span class="perfil-mision-ok"><i class="fas fa-circle-check"></i> Completada</span>' : '') +
                    '</div></div>';
            }).join('');
        }

        function renderMedallas() {
            var cont = document.getElementById('perfilMedallasGrid');
            if (!cont) return;
            var ids = (typeof ARBOLES_INVENTARIO !== 'undefined') ?
                ARBOLES_INVENTARIO : Object.keys(getDB() || {});
            cont.innerHTML = ids.map(function (id) {
                var ok = state.medals.indexOf(id) !== -1;
                return '<div class="perfil-medalla ' + (ok ? 'unlocked' : 'locked') + '" title="' + nombreDe(id) + '">' +
                    '<i class="fas ' + (ok ? 'fa-tree' : 'fa-lock') + '"></i>' +
                    '<span>' + escapeHtml(nombreDe(id)) + '</span></div>';
            }).join('');
        }

        // ---- Certificado ----
        function cumpleRequisitos() {
            return state.medals.length >= TOTAL_TREES && state.quizzesPassed.length >= TOTAL_QUIZZES;
        }

        function renderCertificadoEstado() {
            var zona = document.getElementById('certificadoZona');
            if (!zona) return;
            var btn = document.getElementById('btnVerCertificado');
            var ok = cumpleRequisitos();
            var sinNombre = !state.profile.nombre;

            if (ok) {
                zona.innerHTML = '<div class="cert-ready"><i class="fas fa-scroll"></i>' +
                    '<div><strong>¡Felicidades! Cumpliste la ruta completa del bosque.</strong>' +
                    '<p>Tu Certificado Digital de Guardián del Bosque está listo para ser descargado.</p></div></div>';
                if (btn) {
                    btn.disabled = false;
                    btn.onclick = function () {
                        if (!state.profile.nombre) {
                            toast('✏️ Primero guarda tu nombre arriba para imprimirlo en el certificado.');
                            inputNombre.focus();
                            return;
                        }
                        abrirCertificado();
                    };
                }
            } else {
                var faltanArboles = Math.max(0, TOTAL_TREES - state.medals.length);
                var faltanQuizzes = Math.max(0, TOTAL_QUIZZES - state.quizzesPassed.length);
                zona.innerHTML = '<div class="cert-locked"><i class="fas fa-lock"></i>' +
                    '<div><strong>Certificado bloqueado</strong>' +
                    '<p>Para obtener el diploma necesitas completar la ruta del 100%: te faltan <b>' +
                    faltanArboles + '</b> árbol(es) por escanear y <b>' + faltanQuizzes +
                    '</b> quiz(s) por aprobar (70%+).</p></div></div>';
                if (btn) { btn.disabled = true; btn.onclick = null; }
            }
        }

        // Dibujar certificado en canvas 1600x1130 (horizontal)
        function dibujarCertificado(canvas) {
            var ctx = canvas.getContext('2d');
            var W = canvas.width, H = canvas.height;

            // Fondo
            var grad = ctx.createLinearGradient(0, 0, W, H);
            grad.addColorStop(0, '#f6fbf2');
            grad.addColorStop(1, '#e4f2dc');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, W, H);

            // Marco doble
            ctx.strokeStyle = '#2e5d1e'; ctx.lineWidth = 10;
            ctx.strokeRect(40, 40, W - 80, H - 80);
            ctx.strokeStyle = '#c9a227'; ctx.lineWidth = 3;
            ctx.strokeRect(62, 62, W - 124, H - 124);

            // Hojas decorativas en esquinas
            ctx.font = '44px serif';
            ctx.fillText('🌿', 80, 130); ctx.fillText('🌿', W - 130, 130);
            ctx.fillText('🍃', 80, H - 85); ctx.fillText('🍃', W - 130, H - 85);

            var cx = W / 2;
            ctx.textAlign = 'center';

            // Logos (colegio + proyecto) — se dibujan si cargan, si no continúa
            function drawCircleLogo(img, x, y, r, label) {
                ctx.save();
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.closePath();
                ctx.clip();
                ctx.drawImage(img, x - r, y - r, r * 2, r * 2);
                ctx.restore();
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.strokeStyle = '#2e5d1e'; ctx.lineWidth = 4; ctx.stroke();
                if (label) {
                    ctx.fillStyle = '#3b5b2e';
                    ctx.font = 'bold 20px Georgia';
                    ctx.fillText(label, x, y + r + 28);
                }
            }

            var logoColegio = document.getElementById('imgLogoColegioCert');
            var logoProyecto = document.getElementById('imgLogoProyectoCert');

            function finishDraw() {
                // Títulos
                ctx.fillStyle = '#2e5d1e';
                ctx.font = 'bold 40px Georgia';
                ctx.fillText('I.E. JESÚS BERNAL PINZÓN', cx, 210);
                ctx.font = 'italic 24px Georgia';
                ctx.fillStyle = '#5b7a4d';
                ctx.fillText('Técnica en Conservación de Recursos Naturales · Maní, Casanare', cx, 250);

                ctx.font = 'bold 58px Georgia';
                ctx.fillStyle = '#1d3d12';
                ctx.fillText('CERTIFICADO DIGITAL', cx, 350);
                ctx.font = '28px Georgia';
                ctx.fillStyle = '#4a6b3a';
                ctx.fillText('«Guardián del Bosque» — Proyecto SILVAIN', cx, 395);

                // Nombre del guardián
                ctx.font = '24px Georgia';
                ctx.fillStyle = '#5b7a4d';
                ctx.fillText('Se otorga el presente reconocimiento a:', cx, 470);
                ctx.font = 'bold 64px "Brush Script MT", "Segoe Script", cursive';
                ctx.fillStyle = '#24500f';
                var nombre = state.profile.nombre || 'Guardián Anónimo';
                ctx.fillText(nombre, cx, 550);
                // Línea bajo el nombre
                ctx.strokeStyle = '#c9a227'; ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(cx - 420, 570); ctx.lineTo(cx + 420, 570); ctx.stroke();

                // Cuerpo
                ctx.font = '24px Georgia';
                ctx.fillStyle = '#33472a';
                var lineas = [
                    'Por completar el 100% de la Ruta Forestal Interactiva del colegio,',
                    'escaneando los ' + TOTAL_TREES + ' árboles del inventario, aprobando los ' + TOTAL_QUIZZES + ' quizzes',
                    'ecológicos y demostrando conocimiento y amor por la biodiversidad',
                    'de la Orinoquía colombiana.'
                ];
                lineas.forEach(function (l, i) { ctx.fillText(l, cx, 630 + i * 36); });

                // Rango y estadísticas
                var rango = window.SILVAIN_PERFIL.getRango();
                ctx.font = 'bold 30px Georgia';
                ctx.fillStyle = rango.color;
                ctx.fillText('Rango alcanzado: ' + rango.nombre.toUpperCase(), cx, 810);
                ctx.font = '22px Georgia';
                ctx.fillStyle = '#4a6b3a';
                ctx.fillText(state.xp + ' XP acumulados · ' + Object.keys(state.missions).length + ' Eco-Misiones completadas', cx, 848);

                // Sello dorado
                ctx.save();
                ctx.translate(W - 210, H - 230);
                ctx.rotate(-0.2);
                ctx.beginPath(); ctx.arc(0, 0, 78, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(201,162,39,0.15)'; ctx.fill();
                ctx.lineWidth = 5; ctx.strokeStyle = '#c9a227'; ctx.stroke();
                ctx.beginPath(); ctx.arc(0, 0, 62, 0, Math.PI * 2);
                ctx.lineWidth = 2; ctx.stroke();
                ctx.fillStyle = '#a8842a';
                ctx.font = 'bold 16px Georgia';
                ctx.fillText('SILVAIN', 0, -18);
                ctx.font = '36px serif';
                ctx.fillText('🌳', 0, 18);
                ctx.font = 'bold 13px Georgia';
                ctx.fillText('GUARDIÁN', 0, 44);
                ctx.fillText('CERTIFICADO', 0, 60);
                ctx.restore();

                // Firma y fecha
                ctx.textAlign = 'left';
                ctx.strokeStyle = '#33472a'; ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(180, H - 170); ctx.lineTo(560, H - 170); ctx.stroke();
                ctx.font = '22px Georgia'; ctx.fillStyle = '#33472a';
                ctx.fillText('Coordinación del Proyecto', 180, H - 138);
                ctx.textAlign = 'right';
                var fecha = new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });
                ctx.fillText(fecha, W - 180, H - 145);
                ctx.font = '18px Georgia'; ctx.fillStyle = '#5b7a4d';
                ctx.fillText('Maní, Casanare — Colombia', W - 180, H - 118);
                ctx.textAlign = 'center';
                ctx.font = '16px Georgia'; ctx.fillStyle = '#8aa07c';
                ctx.fillText('Código de verificación: SILVAIN-' + hashString(nombre + '|' + state.xp).toUpperCase(), cx, H - 88);

                if (logoColegio && logoColegio.complete && logoColegio.naturalWidth) drawCircleLogo(logoColegio, 210, 150, 62, 'Colegio JBP');
                if (logoProyecto && logoProyecto.complete && logoProyecto.naturalWidth) drawCircleLogo(logoProyecto, W - 210, 150, 62, 'SILVAIN');
            }

            // Esperar logos (con timeout de seguridad)
            var pendientes = 0, hecho = false;
            function maybeFinish() {
                if (hecho) return;
                if (--pendientes <= 0) { hecho = true; finishDraw(); }
            }
            [logoColegio, logoProyecto].forEach(function (img) {
                if (img && !(img.complete && img.naturalWidth)) {
                    pendientes++;
                    img.addEventListener('load', maybeFinish);
                    img.addEventListener('error', maybeFinish);
                }
            });
            if (pendientes <= 0) finishDraw();
            setTimeout(function () { if (!hecho) { hecho = true; finishDraw(); } }, 1500);
        }

        function hashString(s) {
            var h = 0;
            for (var i = 0; i < s.length; i++) { h = ((h << 5) - h + s.charCodeAt(i)) | 0; }
            return ('00000000' + Math.abs(h).toString(16)).slice(-8);
        }

        function abrirCertificado() {
            var modal = document.getElementById('certificadoModal');
            var canvas = document.getElementById('certificadoCanvas');
            if (!modal || !canvas) return;
            dibujarCertificado(canvas);
            modal.style.display = 'flex';
            requestAnimationFrame(function () { modal.classList.add('visible'); });

            var btnDescargar = document.getElementById('btnDescargarCertificado');
            var btnImprimir = document.getElementById('btnImprimirCertificado');
            var btnCerrar = document.getElementById('cerrarCertificadoModal');

            if (btnDescargar) {
                btnDescargar.onclick = function () {
                    try {
                        var a = document.createElement('a');
                        a.download = 'Certificado_Guardian_' + (state.profile.nombre || 'SILVAIN').replace(/\s+/g, '_') + '.png';
                        a.href = canvas.toDataURL('image/png');
                        a.click();
                        toast('<i class="fas fa-download"></i> Certificado descargado como imagen PNG.');
                    } catch (e) {
                        toast('⚠️ No se pudo descargar directamente. Usa el botón Imprimir/Guardar PDF.');
                    }
                };
            }
            if (btnImprimir) {
                btnImprimir.onclick = function () {
                    var win = window.open('', '_blank');
                    if (!win) { toast('⚠️ Permite las ventanas emergentes para imprimir el certificado.'); return; }
                    win.document.write('<html><head><title>Certificado SILVAIN</title>' +
                        '<style>body{margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#fff}' +
                        'img{max-width:100%;height:auto}</style></head><body>' +
                        '<img src="' + canvas.toDataURL('image/png') + '" onload="setTimeout(function(){window.print()},400)">' +
                        '</body></html>');
                    win.document.close();
                };
            }
            if (btnCerrar) {
                btnCerrar.onclick = function () {
                    modal.classList.remove('visible');
                    setTimeout(function () { modal.style.display = 'none'; }, 300);
                };
            }
        }

        renderTodo();
    }

    function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    // =====================================================
    // INYECCIÓN EN FICHAS: banner de rango/XP + hooks de quiz
    // =====================================================
    function initFichaHooks() {
        var quizCont = document.querySelector('.quiz-premium-container');
        if (!quizCont) return; // no estamos en una ficha de árbol

        loadState();
        var rango = window.SILVAIN_PERFIL.getRango();

        // Banner discreto bajo el título del quiz
        var titleEl = quizCont.querySelector('.quiz-title-pro');
        if (titleEl && !document.getElementById('perfilQuizBanner')) {
            var banner = document.createElement('div');
            banner.id = 'perfilQuizBanner';
            banner.className = 'perfil-quiz-banner';
            banner.innerHTML = '<i class="fas ' + rango.icono + '"></i> ' + rango.nombre +
                ' · <strong>' + state.xp + ' XP</strong>' +
                '<span class="perfil-quiz-reward"><i class="fas fa-gift"></i> Aprueba este quiz (+' +
                window.SILVAIN_PERFIL.constants.XP_QUIZ_PASSED + ' XP)</span>';
            titleEl.insertAdjacentElement('afterend', banner);
        }

        // Observar el banner de resultado del quiz (creado por ficha-interactiva.js)
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mu) {
                mu.addedNodes.forEach(function (node) {
                    if (node.nodeType !== 1) return;
                    if (node.classList && node.classList.contains('quiz-result-banner') &&
                        node.classList.contains('quiz-result-great')) {
                        onQuizAprobado();
                    }
                });
            });
        });
        observer.observe(quizCont, { childList: true });
    }

    function onQuizAprobado() {
        var arbolId = window.arbolSeleccionado || null;
        var rangoPrevio = window.SILVAIN_PERFIL.getRango();
        var nueva = window.SILVAIN_PERFIL.registerQuizPass(arbolId);
        var ganadas = checkMissions();
        ganadas.forEach(announceMission);
        checkRankUp(rangoPrevio);

        if (nueva) {
            toast('<i class="fas fa-brain"></i> <strong>Quiz aprobado:</strong> +' +
                window.SILVAIN_PERFIL.constants.XP_QUIZ_PASSED + ' XP por dominar la ficha de ' +
                escapeHtml(nombreDe(arbolId)) + '. <a href="perfil.html" class="perfil-toast-link">Ver mi perfil →</a>', 6000);
        } else if (!ganadas.length) {
            toast('<i class="fas fa-check"></i> ¡Bien hecho! Ya habías ganado los XP de este quiz. 💚', 3500);
        }
    }

    // =====================================================
    // AUTOINICIALIZACIÓN
    // =====================================================
    function boot() {
        loadState();
        ensureMissionsBuilt();
        if (document.getElementById('perfilRoot')) {
            initPerfilPage();
        } else {
            initFichaHooks();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
