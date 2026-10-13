/* ============================================================================
   sw.js — SERVICE WORKER de SILVAIN (Inventario Forestal Digital JBP)
   ----------------------------------------------------------------------------
   Estrategia:
     · PRECACHE: al instalar, guarda en el dispositivo TODAS las páginas,
       estilos, scripts e imágenes del proyecto. Así la app funciona
       completa sin internet (ideal para zonas con señal débil en Maní).
     · PÁGINAS (navegación): "cache primero con revalidación en segundo
       plano". La lista de árboles, fichas, mapa, calculadora y perfil se
       abren INSTANTÁNEA y de forma idéntica con o sin internet (los datos
       viven dentro de los JS cacheados: datos_arboles.js, tree-tokens.js,
       mapa-colegio.js…). En segundo plano se busca la versión fresca.
       Esto elimina los "cuelgues" del modo offline cuando la señal es nula
       y el navegador tardaba segundos en agotar el timeout de la red.
     · ARCHIVOS ESTÁTICOS (js/css/imagenes/fuentes): "cache primero" con
       revalidación en segundo plano (stale-while-revalidate), lo que hace
       que todo cargue instantáneo aunque la conexión sea lenta.
     · EXTERNOS (Google Fonts, FontAwesome): se copian a la caché la
       primera vez que se descargan, para mantener la estética offline.
     · /api/chat (Silvain AI): NUNCA se cachea — requiere internet; el
       aviso "necesitas conexión" lo maneja js/offline.js.
   ============================================================================ */

'use strict';

const VERSION = 'v2026.10.14.1';
const CACHE_CORE = 'silvain-core-' + VERSION;      // páginas + assets críticos
const CACHE_ASSETS = 'silvain-assets-' + VERSION;  // imagenes y medios
const CACHE_RUNTIME = 'silvain-runtime-' + VERSION; // fuentes/CDN externos

/* Páginas de la app */
const PAGINAS = [
  './',
  './index.html',
  './lista-arboles.html',
  './mapa-colegio.html',
  './calculadora.html',
  './ficha-arbol.html',
  './perfil.html',
  './equipo.html',
  './ia-chatbot.html',
  './offline.html',
  './manifest.json',
  './js/offline.js',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  './icons/icon-192x192-maskable.png',
  './icons/icon-512x512-maskable.png',
  './icons/apple-touch-icon.png'
];

/* Todos los recursos locales del proyecto (css, js, imagenes, iconos) */
const RECURSOS_LOCALES = [
  "./index.css",
  "./inventario.css",
  "./main.js",
  "./css/base.css",
  "./css/components.css",
  "./css/pages/calculadora.css",
  "./css/pages/equipo.css",
  "./css/pages/ficha-arbol.css",
  "./css/pages/gamificacion.css",
  "./css/pages/ia-chatbot.css",
  "./css/pages/mapa-colegio.css",
  "./css/pages/perfil.css",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192x192-maskable.png",
  "./icons/icon-192x192.png",
  "./icons/icon-512x512-maskable.png",
  "./icons/icon-512x512.png",
  "./imagenes/Jair.jpg",
  "./imagenes/Jambolán.jpeg",
  "./imagenes/Palo_Cruz.jpeg",
  "./imagenes/Silvainblanco.png",
  "./imagenes/adelfa1.jpeg",
  "./imagenes/adelfa2.jpeg",
  "./imagenes/adelfa3.jpeg",
  "./imagenes/adelfa4.jpeg",
  "./imagenes/africana1.jpeg",
  "./imagenes/almendro1.jpeg",
  "./imagenes/almendro2.jpeg",
  "./imagenes/almendro3.jpeg",
  "./imagenes/almendro4.jpeg",
  "./imagenes/almendro5.jpeg",
  "./imagenes/areca1.jpeg",
  "./imagenes/areca2.jpeg",
  "./imagenes/areca3.jpeg",
  "./imagenes/areca4.jpeg",
  "./imagenes/areca5.jpeg",
  "./imagenes/areca6.jpeg",
  "./imagenes/areca7.jpeg",
  "./imagenes/calculadora (1).png",
  "./imagenes/calculadora.png",
  "./imagenes/calculadora2.png",
  "./imagenes/caracaro1.jpeg",
  "./imagenes/caracaro2.jpeg",
  "./imagenes/caracaro3.jpeg",
  "./imagenes/caracaro4.jpeg",
  "./imagenes/caracaro5.jpeg",
  "./imagenes/caracaro6.jpeg",
  "./imagenes/cica1.jpeg",
  "./imagenes/cica2.jpeg",
  "./imagenes/cica3.jpeg",
  "./imagenes/cica4.jpeg",
  "./imagenes/cica5.jpeg",
  "./imagenes/ciencia ciudadana.png",
  "./imagenes/coco1.jpeg",
  "./imagenes/coco2.jpeg",
  "./imagenes/coco3.jpeg",
  "./imagenes/coco4.jpeg",
  "./imagenes/coco5.jpeg",
  "./imagenes/codigo QR.png",
  "./imagenes/colegio1.jpeg",
  "./imagenes/colegio10.jpeg",
  "./imagenes/colegio2.jpeg",
  "./imagenes/colegio3.jpeg",
  "./imagenes/colegio4.jpeg",
  "./imagenes/colegio5.jpeg",
  "./imagenes/colegio6.jpeg",
  "./imagenes/colegio7.jpeg",
  "./imagenes/colegio8.jpeg",
  "./imagenes/colegio9.jpeg",
  "./imagenes/diego.jpeg",
  "./imagenes/edwin.jpg",
  "./imagenes/foto1.jpeg",
  "./imagenes/foto2.jpeg",
  "./imagenes/foto3.jpeg",
  "./imagenes/fotojair.jpeg",
  "./imagenes/fundacion-morichales.png",
  "./imagenes/guacimo1.jpeg",
  "./imagenes/guacimo2.jpeg",
  "./imagenes/guacimo3.jpeg",
  "./imagenes/guacimo4.jpeg",
  "./imagenes/guacimo5.jpeg",
  "./imagenes/guacimo6.jpeg",
  "./imagenes/guacimo7.jpeg",
  "./imagenes/gualanday1.jpeg",
  "./imagenes/gualanday2.jpeg",
  "./imagenes/gualanday3.jpeg",
  "./imagenes/gualanday4.jpeg",
  "./imagenes/gualanday5.jpeg",
  "./imagenes/gualanday6.jpeg",
  "./imagenes/guama1.jpg",
  "./imagenes/guama2.jpg",
  "./imagenes/guama3.jpg",
  "./imagenes/guama4.jpg",
  "./imagenes/guayaba1.jpeg",
  "./imagenes/guayaba2.jpeg",
  "./imagenes/guayaba3.jpeg",
  "./imagenes/guayaba4.jpeg",
  "./imagenes/guayaba5.jpeg",
  "./imagenes/guayaba6.jpeg",
  "./imagenes/guayaba7.jpeg",
  "./imagenes/inteligencia artificial.png",
  "./imagenes/jambolan1.jpeg",
  "./imagenes/jambolan2.jpeg",
  "./imagenes/jambolan3.jpeg",
  "./imagenes/jambolan4.jpeg",
  "./imagenes/jambolan5.jpeg",
  "./imagenes/jambolan6.jpeg",
  "./imagenes/jambolan7.jpeg",
  "./imagenes/jambolan8.jpeg",
  "./imagenes/jambolan9.jpeg",
  "./imagenes/limoncillo1.jpeg",
  "./imagenes/limoncillo2.jpeg",
  "./imagenes/limoncillo3.jpeg",
  "./imagenes/limoncillo4.jpeg",
  "./imagenes/limoncillo5.jpeg",
  "./imagenes/logoAI.jpeg",
  "./imagenes/logojbp.png",
  "./imagenes/logojbp1.png",
  "./imagenes/mamoncillo.jpeg",
  "./imagenes/mamoncillo2.jpeg",
  "./imagenes/mamoncillo3.jpeg",
  "./imagenes/mango1.jpeg",
  "./imagenes/mango2.jpeg",
  "./imagenes/mango3.jpeg",
  "./imagenes/mango4.jpeg",
  "./imagenes/mango5.jpeg",
  "./imagenes/mapa-campus.jpg",
  "./imagenes/merecure1.jpeg",
  "./imagenes/merecure2.jpeg",
  "./imagenes/merecure3.jpeg",
  "./imagenes/merecure4.jpeg",
  "./imagenes/merecure5.jpeg",
  "./imagenes/merecure6.jpeg",
  "./imagenes/merecure7.jpeg",
  "./imagenes/merecure8.jpeg",
  "./imagenes/merecure9.jpeg",
  "./imagenes/merecures.jpeg",
  "./imagenes/noni1.jpeg",
  "./imagenes/noni2.jpeg",
  "./imagenes/noni3.jpeg",
  "./imagenes/noni4.jpeg",
  "./imagenes/noni5.jpeg",
  "./imagenes/oiti1.jpeg",
  "./imagenes/oiti2.jpeg",
  "./imagenes/oiti3.jpeg",
  "./imagenes/oiti4.jpeg",
  "./imagenes/oiti5.jpeg",
  "./imagenes/oiti6.jpeg",
  "./imagenes/oiti7.jpeg",
  "./imagenes/oiti8.jpeg",
  "./imagenes/palocruz1.jpeg",
  "./imagenes/palocruz2.jpeg",
  "./imagenes/palocruz3.jpeg",
  "./imagenes/palocruz4.jpeg",
  "./imagenes/palocruz5.jpeg",
  "./imagenes/palocruz6.jpeg",
  "./imagenes/palocruz7.jpeg",
  "./imagenes/pomarrosa1.jpeg",
  "./imagenes/pomarrosa2.jpeg",
  "./imagenes/pomarrosa3.jpeg",
  "./imagenes/pomarrosa4.jpeg",
  "./imagenes/pomarrosa5.jpeg",
  "./imagenes/pomarrosa6.jpeg",
  "./imagenes/qr-code Merecure.png",
  "./imagenes/real1.jpeg",
  "./imagenes/real2.jpeg",
  "./imagenes/real3.jpeg",
  "./imagenes/real4.jpeg",
  "./imagenes/real5.jpeg",
  "./imagenes/real6.jpeg",
  "./imagenes/real7.jpeg",
  "./imagenes/rosea1.jpeg",
  "./imagenes/rosea2.jpeg",
  "./imagenes/rosea3.jpeg",
  "./imagenes/rosea4.jpeg",
  "./imagenes/rosea5.jpeg",
  "./imagenes/rosea6.jpeg",
  "./imagenes/rosea7.jpeg",
  "./imagenes/saman1.jpeg",
  "./imagenes/saman10.jpeg",
  "./imagenes/saman2.jpeg",
  "./imagenes/saman3.jpeg",
  "./imagenes/saman4.jpeg",
  "./imagenes/saman5.jpeg",
  "./imagenes/saman6.jpeg",
  "./imagenes/saman7.jpeg",
  "./imagenes/saman8.jpeg",
  "./imagenes/saman9.jpeg",
  "./imagenes/sara.jpeg",
  "./imagenes/servicios ecosistemicos.png",
  "./imagenes/servicios ecosistemicos2.png",
  "./imagenes/silvain1.jpeg",
  "./imagenes/silvainai2.png",
  "./imagenes/silvainjbp.png",
  "./imagenes/tostado1.jpeg",
  "./imagenes/tostado2.jpeg",
  "./imagenes/tostado3.jpeg",
  "./imagenes/tostado4.jpeg",
  "./imagenes/trompillo1.jpeg",
  "./imagenes/trompillo2.jpeg",
  "./imagenes/vanarena1.jpeg",
  "./imagenes/vanarena2.jpeg",
  "./js/calculadora-carbono.js",
  "./js/datos_arboles.js",
  "./js/datos_arboles2.js",
  "./js/ficha-interactiva.js",
  "./js/ficha-silvain-chat.js",
  "./js/gamificacion.js",
  "./js/ia-chatbot.js",
  "./js/main.js",
  "./js/mapa-colegio.js",
  "./js/offline.js",
  "./js/perfil.js",
  "./js/tree-tokens.js"
];

/* ---------------------------------------------------------------- install */
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_CORE);
      // Usamos one-by-one tolerante: si un archivo falta, el resto se guarda igual
      const todos = [...new Set([...PAGINAS, ...RECURSOS_LOCALES])];
      const resultados = await Promise.allSettled(
        todos.map((u) => cache.add(new Request(u, { cache: 'reload' })))
      );
      let ok = 0;
      resultados.forEach((r) => { if (r.status === 'ok') ok++; });
      console.log('[SW] Precache: ' + ok + '/' + todos.length + ' recursos guardados.');
      await self.skipWaiting();
    })()
  );
});

/* --------------------------------------------------------------- activate */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Borrar cachés de versiones anteriores cuando cambia VERSION
      const claves = await caches.keys();
      const actuales = [CACHE_CORE, CACHE_ASSETS, CACHE_RUNTIME];
      await Promise.all(
        claves.filter((k) => /^silvain-/.test(k) && !actuales.includes(k))
              .map((k) => caches.delete(k))
      );
      await self.clients.claim();
      console.log('[SW] Activado', VERSION);
    })()
  );
});

/* --------------------------------------------------------------- helpers */
function esNavegacion(request) {
  return request.mode === 'navigate' ||
    ((request.method === 'GET' && request.headers.get('accept') || '').includes('text/html'));
}

function rutaSinQuery(url) {
  // ficha-arbol.html?arbol=merecure → ficha-arbol.html (misma copia cacheada)
  const u = new URL(url);
  return u.origin + u.pathname;
}

async function responderPagina(event) {
  const request = event.request;
  const url = new URL(request.url);
  const clave = new Request(rutaSinQuery(url.href), { method: 'GET' });
  const cache = await caches.open(CACHE_CORE);

  // Candidatos dentro de la caché (con y sin query, raíz, etc.)
  async function buscarEnCache() {
    return (
      (await cache.match(clave)) ||
      (await cache.match(request)) ||
      (await cache.match('./' + url.pathname.split('/').pop())) ||
      (await cache.match('./index.html'))
    );
  }

  // Revalidar en segundo plano: si hay internet, la próxima apertura ya
  // tendrá la versión fresca — pero la apertura actual NO depende de la red.
  function revalidar() {
    event.waitUntil(
      fetch(request.clone())
        .then(function (resp) {
          if (resp && resp.ok) return cache.put(clave, resp.clone());
        })
        .catch(function () {})
    );
  }

  // 1) CACHE FIRST: la app instalada abre idéntica y al instante,
  //    con o sin señal. (Así se evitan los "cuelgues" offline esperando la red.)
  const enCache = await buscarEnCache();
  if (enCache) {
    revalidar();
    return enCache;
  }

  // 2) Primera vez (todavía no precacheada): intentar la red con timeout
  try {
    const ctrl = new AbortController();
    const t = setTimeout(function () { ctrl.abort(); }, 4000);
    let red;
    try {
      red = await fetch(request, { signal: ctrl.signal });
    } finally {
      clearTimeout(t);
    }
    if (red && red.ok) cache.put(clave, red.clone()).catch(function () {});
    return red;
  } catch (err) {
    // 3) Último recurso: página "sin conexión" local
    const offline = await cache.match('./offline.html');
    if (offline) return offline;
    return new Response(
      '<html lang="es"><meta charset="utf-8"><h1>Sin conexión</h1>' +
      '<p>Abre SILVAIN desde su ícono instalado o vuelve a intentarlo.</p></html>',
      { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
  }
}

async function responderEstatico(event) {
  const request = event.request;
  const esPropio = new URL(request.url).origin === self.location.origin;
  const cacheName = /\.(jpe?g|png|gif|svg|webp|ico|mp4)$/i.test(request.url)
    ? CACHE_ASSETS : (esPropio ? CACHE_CORE : CACHE_RUNTIME);

  const cached = await caches.match(request);
  if (cached) {
    // Revalidar en segundo plano (solo archivos propios)
    if (esPropio) {
      event.waitUntil(
        fetch(request.clone())
          .then((resp) => {
            if (resp && resp.ok) return caches.open(cacheName).then((c) => c.put(request, resp.clone()));
          })
          .catch(() => {})
      );
    }
    return cached;
  }

  try {
    const resp = await fetch(request.clone());
    if (resp && (resp.ok || resp.type === 'opaque')) {
      const c = await caches.open(cacheName);
      c.put(request, resp.clone()).catch(() => {});
    }
    return resp;
  } catch (err) {
    // Imagen no cacheada y sin red: devolver vacío (la web muestra el SVG alterno)
    if (/\.(png|jpe?g)$/i.test(request.url)) {
      return new Response('', { status: 503 });
    }
    throw err;
  }
}

/* ------------------------------------------------------------- fetch main */
self.addEventListener('fetch', (event) => {
  const request = event.request;

  if (request.method !== 'GET') return;              // POST /api/chat pasa directo

  const url = new URL(request.url);
  if (url.pathname.includes('/api/')) return;        // IA: nunca cacheable

  if (esNavegacion(request)) {
    event.respondWith(responderPagina(event));
  } else {
    event.respondWith(responderEstatico(event));
  }
});
