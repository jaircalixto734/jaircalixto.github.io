/* ============================================================================
   js/offline.js — Centro de control OFFLINE / PWA de SILVAIN
   ----------------------------------------------------------------------------
   Se encarga de:
     1. Registrar el Service Worker (sw.js) en todas las páginas.
     2. Mostrar el "banner" para instalar la app (Agregar a pantalla de inicio).
     3. Indicar el estado de conexión (online/offline) en tiempo real.
     4. Responder preguntas básicas del inventario SIN internet
        (modo local del chatbot Silvain AI, usando datos_arboles.js).

   Este archivo es 100% opcional para el funcionamiento del sitio:
   si algo falla, la web sigue funcionando igual que antes.
   ============================================================================ */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1. REGISTRO DEL SERVICE WORKER
     ------------------------------------------------------------------ */
  function registrarServiceWorker() {
    // Los service workers requieren HTTPS (o localhost). En hosting normal
    // de SILVAIN (Vercel/Netlify/GitHub Pages) esto se cumple.
    if (!('serviceWorker' in navigator)) return;

    window.addEventListener('load', function () {
      navigator.serviceWorker
        .register('./sw.js')
        .then(function (reg) {
          console.log('[SILVAIN PWA] Service Worker registrado ✔');

          // Aviso de actualización: cuando el SW instala una nueva versión,
          // mostramos un botón discreto para recargar y quedarse con ella.
          reg.addEventListener('updatefound', function () {
            var newWorker = reg.installing;
            if (!newWorker) return;
            newWorker.addEventListener('statechange', function () {
              if (newWorker.state === 'activated' && navigator.serviceWorker.controller) {
                console.log('[SILVAIN PWA] Nueva versión activada.');
              }
            });
          });

          // Revisar periódicamente si hay nueva versión del sw.js
          // (cada vez que se abre la app y luego cada 60 min mientras sigue abierta)
          function revisarActualizacion() {
            try { reg.update(); } catch (e) {}
          }
          revisarActualizacion();
          setInterval(revisarActualizacion, 60 * 60 * 1000);
        })
        .catch(function (err) {
          console.warn('[SILVAIN PWA] No se pudo registrar el SW:', err);
        });
    });
  }

  /* ------------------------------------------------------------------
     2. ESTILO BASE (banner + indicador de red)
     ------------------------------------------------------------------ */
  function inyectarEstilos() {
    if (document.getElementById('silvain-pwa-styles')) return;
    var css = [
      '.silvain-offline-badge{position:fixed;top:70px;right:14px;z-index:9998;',
      'display:none;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;',
      'background:#5b3a00;color:#ffd166;font-size:.82rem;font-weight:600;',
      'box-shadow:0 6px 20px rgba(0,0,0,.35);font-family:inherit;}',
      '.silvain-offline-badge.visible{display:flex;animation:silvainFadeIn .3s ease;}',
      '@keyframes silvainFadeIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}',

      '.silvain-install-bar{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);',
      'z-index:9999;display:none;align-items:center;gap:12px;max-width:92vw;',
      'padding:12px 16px;border-radius:14px;background:#1c3527;color:#eaf5ec;',
      'border:1px solid rgba(255,255,255,.12);box-shadow:0 10px 30px rgba(0,0,0,.45);',
      'font-size:.88rem;line-height:1.35;}',
      '.silvain-install-bar.visible{display:flex;}',
      '.silvain-install-bar img{width:38px;height:38px;border-radius:9px;flex:none;}',
      '.silvain-install-bar button{border:none;border-radius:9px;padding:8px 14px;',
      'cursor:pointer;font-weight:700;font-size:.85rem;}',
      '.silvain-install-bar .si-ok{background:#3fa34d;color:#fff;}',
      '.silvain-install-bar .si-no{background:transparent;color:#9fd3a8;text-decoration:underline;}',

      '.silvain-local-tag{display:inline-block;margin-left:6px;padding:2px 8px;border-radius:999px;',
      'background:#3a2f00;color:#ffd166;font-size:.7rem;font-weight:700;vertical-align:middle;}'
    ].join('');
    var s = document.createElement('style');
    s.id = 'silvain-pwa-styles';
    s.textContent = css;
    document.head.appendChild(s);
  }

  /* ------------------------------------------------------------------
     3. INDICADOR DE CONEXIÓN (online/offline en vivo)
     ------------------------------------------------------------------ */
  function crearIndicadorOffline() {
    var badge = document.createElement('div');
    badge.className = 'silvain-offline-badge';
    badge.id = 'silvainOfflineBadge';
    badge.innerHTML =
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2.4" stroke-linecap="round"><path d="M1 1l22 22"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/>' +
      '<path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.58 9"/>' +
      '<path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><path d="M12 20h.01"/></svg>' +
      '<span>Sin internet · modo offline activo</span>';
    document.body.appendChild(badge);

    // Botón discreto para ocultar el aviso (sesión actual)
    var cerrar = document.createElement('button');
    cerrar.setAttribute('aria-label', 'Ocultar aviso');
    cerrar.textContent = '✕';
    cerrar.style.cssText =
      'background:transparent;border:none;color:#ffd166;font-size:1rem;cursor:pointer;padding:0 2px;line-height:1;';
    badge.appendChild(cerrar);
    var oculto = false;
    cerrar.addEventListener('click', function () {
      oculto = true;
      badge.classList.remove('visible');
    });
    window.addEventListener('online', function () { oculto = false; });
    window.addEventListener('offline', function () { oculto = false; });

    function refrescar() {
      badge.classList.toggle('visible', !navigator.onLine && !oculto);
    }
    window.addEventListener('online', refrescar);
    window.addEventListener('offline', refrescar);
    refrescar();
  }

  /* ------------------------------------------------------------------
     4. BANNER "INSTALAR APP" (beforeinstallprompt)
     ------------------------------------------------------------------ */
  function crearBarraInstalacion() {
    var deferredPrompt = null;

    // Si la app ya está instalada (o corriendo en modo standalone), no mostrar nada
    var yaInstalada = false;
    try {
      yaInstalada =
        window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone === true ||
        sessionStorage.getItem('silvain_install_dismissed') === '1';
    } catch (e) {}

    var bar = document.createElement('div');
    bar.className = 'silvain-install-bar';
    bar.id = 'silvainInstallBar';
    bar.innerHTML =
      '<img src="./icons/icon-192x192.png" alt="Logo SILVAIN">' +
      '<span><strong>SILVAIN sin internet:</strong> instala la app en tu celular para usar el inventario, el mapa y la calculadora aunque no haya señal.</span>' +
      '<button class="si-ok" id="silvainInstallBtn">Instalar</button>' +
      '<button class="si-no" id="silvainInstallNo">Ahora no</button>';
    document.body.appendChild(bar);

    var btnOk = bar.querySelector('#silvainInstallBtn');
    var btnNo = bar.querySelector('#silvainInstallNo');

    btnNo.addEventListener('click', function () {
      bar.classList.remove('visible');
      try { localStorage.setItem('silvain_install_dismissed', '1'); } catch (e) {}
    });

    window.addEventListener('beforeinstallprompt', function (e) {
      e.preventDefault();
      deferredPrompt = e;
      var rechazado = false;
      try { rechazado = localStorage.getItem('silvain_install_dismissed') === '1'; } catch (err) {}
      if (!rechazado) bar.classList.add('visible');
    });

    btnOk.addEventListener('click', function () {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function (res) {
        if (res.outcome === 'accepted') {
          console.log('[SILVAIN PWA] App instalada 🎉');
        }
        deferredPrompt = null;
        bar.classList.remove('visible');
      });
    });

    window.addEventListener('appinstalled', function () {
      bar.classList.remove('visible');
    });

    // Si el navegador nunca dispara beforeinstallprompt pero la app ya está
    // instalada, tampoco debe verse nada (yaInstalada evita mostrar la barra
    // en contexto standalone por si eventos previos la activaron).
    if (yaInstalada) {
      window.addEventListener('beforeinstallprompt', function () {
        bar.classList.remove('visible');
      }, true);
    }
  }

  /* ------------------------------------------------------------------
     5. SILVAIN AI SIN INTERNET → AVISO DE "FUNCIONA SOLO ONLINE"
     ------------------------------------------------------------------
     Por decisión del proyecto, el chatbot Silvain AI (la IA generativa)
     NO tiene modo local: sin conexión responde un mensaje claro indicando
     que la función requiere internet. El resto de la app (inventario,
     fichas, mapa, calculadora, perfil, XP y medallas) sí funciona offline.
     ------------------------------------------------------------------ */
  var MENSAJE_OFFLINE_IA =
    '📡 *Silvain AI solo funciona con conexión a internet.*\n\n' +
    'Necesito estar en línea para pensar y responder tus preguntas.\n' +
    'Mientras tanto, puedes seguir usando SILVAIN sin señal:\n' +
    '• 🌳 Inventario y fichas de los árboles\n' +
    '• 🗺️ Mapa del colegio\n' +
    '• 🌱 Calculadora de carbono\n' +
    '• 🏅 Tu perfil, XP y medallas\n\n' +
    'Cuando vuelva la conexión, escríbeme de nuevo. 🌿';

  function esUrlChatIA(url) {
    return /\/api\/chat(\?|$)/.test(String(url || ''));
  }

  /* ------------------------------------------------------------------
     6. INTEGRACIÓN CON LOS CHATBOTS EXISTENTES
     ------------------------------------------------------------------
     parchamos window.fetch solo para POST /api/chat: si el dispositivo
     está offline (o el servidor no responde), devolvemos el aviso
     "requiere internet" con el mismo formato JSON que esperan los chats
     ({ reply }), sin tocar ia-chatbot.js ni ficha-silvain-chat.js.
     ------------------------------------------------------------------ */
  function parcharChatOffline() {
    if (!window.fetch) return;
    var fetchOriginal = window.fetch.bind(window);

    window.fetch = function (input, init) {
      var url = typeof input === 'string' ? input : (input && input.url) || '';
      var method = (init && init.method) || (input && input.method) || 'GET';

      var esChatIA = esUrlChatIA(url) && String(method).toUpperCase() === 'POST';

      if (!esChatIA) {
        return fetchOriginal(input, init);
      }

      // Offline → NO se intenta la red: aviso inmediato de "solo online"
      if (!navigator.onLine) {
        return Promise.resolve(respuestaIAOffline());
      }

      // Online → petición normal; si el servidor falla o tarda demasiado
      // (señal débil en el colegio), caemos al mismo aviso con elegancia.
      var ctrl = null, timer = null;
      var opts = init ? Object.assign({}, init) : {};
      try {
        ctrl = new AbortController();
        opts.signal = ctrl.signal;
        timer = setTimeout(function () { try { ctrl.abort(); } catch (e) {} }, 30000);
      } catch (e) { ctrl = null; }

      return fetchOriginal(input, opts)
        .then(function (resp) {
          if (timer) clearTimeout(timer);
          if (resp && resp.ok) return resp;
          return respuestaIAOffline();
        })
        .catch(function () {
          if (timer) clearTimeout(timer);
          return respuestaIAOffline();
        });
    };

    function respuestaIAOffline() {
      var json = JSON.stringify({
        reply: MENSAJE_OFFLINE_IA,
        offline: true,
        requiereInternet: true,
        fuente: 'SILVAIN · Silvain AI requiere conexión a internet'
      });
      return new Response(json, {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }

  /* Expone el motor de aviso para uso directo desde las páginas de IA */
  window.SilvainPWA = {
    isOffline: function () { return !navigator.onLine; },
    esUrlChatIA: esUrlChatIA,
    mensajeOfflineIA: function () { return MENSAJE_OFFLINE_IA; }
  };

  /* ------------------------------------------------------------------
     ARRANQUE
     ------------------------------------------------------------------ */
  function iniciar() {
    inyectarEstilos();
    registrarServiceWorker();
    crearIndicadorOffline();
    crearBarraInstalacion();
    parcharChatOffline();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
