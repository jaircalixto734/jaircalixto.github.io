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

    function refrescar() {
      badge.classList.toggle('visible', !navigator.onLine);
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
      try { sessionStorage.setItem('silvain_install_dismissed', '1'); } catch (e) {}
    });

    window.addEventListener('beforeinstallprompt', function (e) {
      e.preventDefault();
      deferredPrompt = e;
      var yaRechazado = false;
      try { yaRechazado = sessionStorage.getItem('silvain_install_dismissed') === '1'; } catch (err) {}
      if (!yaRechazado) bar.classList.add('visible');
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
  }

  /* ------------------------------------------------------------------
     5. MOTOR DE RESPUESTAS LOCALES (Silvain AI sin internet)
     ------------------------------------------------------------------
     Usa la base de datos local `baseDatosArboles` (js/datos_arboles.js),
     que ya está cargada en la página, para responder consultas básicas
     cuando no hay conexión o cuando el servidor de IA no responde.
     ------------------------------------------------------------------ */
  function normalizar(txt) {
    return String(txt || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function limpiarHTML(html) {
    var div = document.createElement('div');
    div.innerHTML = String(html || '');
    return (div.textContent || '').replace(/\s+/g, ' ').trim();
  }

  /** Busca qué especie(s) menciona la pregunta. */
  function especiesEnConsulta(consulta) {
    var db = (typeof baseDatosArboles !== 'undefined' && baseDatosArboles) || null;
    if (!db) return [];
    var texto = normalizar(consulta);
    var encontradas = [];
    Object.keys(db).forEach(function (clave) {
      var a = db[clave];
      var alias = [a.nombre].concat(a.nombresLocales || []).concat([a.cientifico])
        .filter(Boolean).map(normalizar);
      for (var i = 0; i < alias.length; i++) {
        if (alias[i].length >= 4 && texto.indexOf(alias[i]) !== -1) {
          encontradas.push({ clave: clave, arbol: a });
          return;
        }
      }
    });
    return encontradas.slice(0, 2);
  }

  /** Categorías de pregunta → campo de la ficha que responde. */
  function categoriaPregunta(consulta) {
    var t = normalizar(consulta);
    if (/(carbono|co2|biomasa|clima|calentamiento)/.test(t)) return 'carbono';
    if (/(medicinal|medicina|cura|salud)/.test(t)) return 'usos';
    if (/(fruto|comestible|comer|fruta)/.test(t)) return 'usos';
    if (/(flor|florece|floracion|calendario|fenologia)/.test(t)) return 'calendario';
    if (/(hoja|corteza|madera|tronco|altura|como es|parece|morfologia|identificar)/.test(t)) return 'morfologia';
    if (/(ave|animal|fauna|poliniz|abeja|insecto)/.test(t)) return 'fauna';
    if (/(origen|nativa|exotica|donde crece|habitat|distribucion)/.test(t)) return 'distribucion';
    if (/(dap|diametro|medida|proceso|formula|calcul)/.test(t)) return 'carbono';
    if (/(hola|buenas|bienven|gracias|quien eres|que eres|ayuda)/.test(t)) return 'saludo';
    return 'resumen';
  }

  /** Genera una respuesta local a partir de los datos de la ficha. */
  function responderLocal(consulta, arbolDeFicha) {
    var cat = categoriaPregunta(consulta);

    if (cat === 'saludo' && !arbolDeFicha) {
      var total = 0;
      try { total = Object.keys(baseDatosArboles).length; } catch (e) {}
      return '👋 ¡Hola! Soy Silvain AI en <strong>modo local (sin internet)</strong>. ' +
        'Conozco las <strong>' + total + ' especies</strong> del inventario forestal del colegio ' +
        'Jesús Bernal Pinzón. Pregúntame por un árbol, por ejemplo: ' +
        '<em>"¿Qué usos tiene el merecure?"</em> o <em>"Cuéntame sobre el algarrobo"</em>. ' +
        'Para respuestas más profundas concurso, conéctate a internet. 🌳';
    }

    var hit = especiesEnConsulta(consulta);
    var a = null, nombre = '';
    if (arbolDeFicha) { a = arbolDeFicha; nombre = a.nombre; }
    else if (hit.length) { a = hit[0].arbol; nombre = a.nombre; }

    if (!a) {
      return '😕 No encontré esa especie en el inventario local. Puedo hablarte de: ' +
        (function () {
          try {
            return Object.keys(baseDatosArboles).slice(0, 12)
              .map(function (k) { return baseDatosArboles[k].nombre; }).join(', ') + '…';
          } catch (e) { return 'merecure, pomarrosa, algarrobo…'; }
        })() +
        '<br><br>💡 Con internet, Silvain AI puede responder mucho más. Esta es la versión sin conexión.';
    }

    var partes = ['📗 <strong>' + nombre + '</strong> <em>(' + (a.cientifico || '') + ')</em> — respuesta del <strong>modo local</strong>:'];

    if (cat === 'carbono') {
      partes.push('Almacena aproximadamente <strong>' + (a.carbono || '—') + ' kg de CO₂</strong> por individuo según el cálculo del inventario (alometría de Álvarez et al. 2012 para bosques naturales de Colombia).' +
        (a.datosColegio && a.datosColegio.individuos ? ' En el colegio hay <strong>' + a.datosColegio.individuos + ' individuos</strong> con DAP promedio de ' + a.datosColegio.dapPromedio + ' cm y altura de ' + a.datosColegio.alturaPromedio + ' m.' : ''));
    } else if (cat === 'usos') {
      partes.push(limpiarHTML(a.usos).slice(0, 600) || 'La ficha local no registra usos detallados.');
    } else if (cat === 'morfologia') {
      partes.push(limpiarHTML(a.morfologia).slice(0, 600) || 'Sin descripción morfológica en la ficha local.');
    } else if (cat === 'fauna') {
      partes.push(limpiarHTML(a.fauna).slice(0, 500) || 'Sin datos de fauna asociada en la ficha local.');
    } else if (cat === 'distribucion') {
      partes.push((a.origen || '') + '. ' + limpiarHTML(a.distribucion).slice(0, 500));
    } else if (cat === 'calendario') {
      if (Array.isArray(a.calendario) && a.calendario.length) {
        partes.push('Calendario fenológico: ' + a.calendario.map(function (c) { return c.mes + ': ' + c.fase; }).join(' · '));
      } else {
        partes.push(limpiarHTML(a.morfologia).slice(0, 300) || 'Sin calendario en la ficha local.');
      }
    } else if (cat === 'saludo') {
      partes.push('Estás viendo su ficha. Puedes preguntarme por sus usos, frutos, hojas, carbono o dónde crece.');
    } else { // resumen
      partes.push('Familia <strong>' + (a.familia || '—') + '</strong>, ' + (a.exotica ? 'especie <strong>exótica</strong>' : 'especie <strong>nativa</strong>') +
        ', estado de conservación: ' + (a.estado || '—') + '. Almacena ~' + (a.carbono || '—') + ' kg de CO₂.' +
        (a.nombresLocales && a.nombresLocales.length ? ' También lo conocemos como: ' + a.nombresLocales.join(', ') + '.' : ''));
      var morf = limpiarHTML(a.morfologia).slice(0, 350);
      if (morf) partes.push(morf);
    }

    partes.push('<span class="silvain-local-tag">Modo local · sin internet</span>');
    return partes.join('<br><br>');
  }

  /* ------------------------------------------------------------------
     6. INTEGRACIÓN CON LOS CHATBOTS EXISTENTES
     ------------------------------------------------------------------
     parchamos window.fetch solo para POST /api/chat: si el dispositivo
     está offline (o el servidor falla), devolvemos una respuesta local
     con el mismo formato JSON que esperan los chats ({ reply }).
     Así NO hace falta modificar ia-chatbot.js ni ficha-silvain-chat.js.
     ------------------------------------------------------------------ */
  function parcharChatOffline() {
    if (!window.fetch) return;
    var fetchOriginal = window.fetch.bind(window);

    window.fetch = function (input, init) {
      var url = typeof input === 'string' ? input : (input && input.url) || '';
      var method = (init && init.method) || (input && input.method) || 'GET';

      var esChatIA = /\/api\/chat(\?|$)/.test(url) && String(method).toUpperCase() === 'POST';

      if (!esChatIA) {
        return fetchOriginal(input, init);
      }

      // Offline → responder localmente sin intentar la red
      if (!navigator.onLine) {
        return simularRespuestaLocal(init);
      }

      // Online → intento normal; si el servidor falla, caigo al modo local
      return fetchOriginal(input, init).then(function (resp) {
        if (resp && resp.ok) return resp;
        return simularRespuestaLocal(init);
      }).catch(function () {
        return simularRespuestaLocal(init);
      });
    };

    function simularRespuestaLocal(init) {
      var consulta = '';
      var contextoFicha = '';
      try {
        var body = JSON.parse((init && init.body) || '{}');
        consulta = body.message || '';
        contextoFicha = body.contextoInventario || '';
      } catch (e) {}

      // Si estamos en una ficha de árbol, detectamos la especie desde la URL
      var arbolDeFicha = null;
      try {
        var params = new URLSearchParams(window.location.search);
        var id = params.get('arbol') || params.get('id');
        if (id && typeof baseDatosArboles !== 'undefined' && baseDatosArboles[id]) {
          arbolDeFicha = baseDatosArboles[id];
        }
      } catch (e) {}

      var texto = responderLocal(consulta, arbolDeFicha);
      // Quitar etiquetas HTML simples para el chat que usa texto plano
      var textoPlano = texto.replace(/<[^>]+>/g, '');

      var json = JSON.stringify({
        reply: textoPlano,
        offline: true,
        fuente: 'SILVAIN modo local'
      });

      return Promise.resolve(new Response(json, {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }));
    }
  }

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
