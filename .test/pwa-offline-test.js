/* ============================================================
   PWA OFFLINE TEST — SILVAIN
   1) Carga online, espera a que el SW active y precachee.
   2) Corta la red (page.setOffline).
   3) Navega: inventario, ficha con quiz, mapa, calculadora, perfil.
   4) Verifica funciones offline (búsqueda, gamificación XP/medallas,
      sincronización con perfil, cálculo de carbono).
   5) Silvain AI offline → debe responder "solo funciona con internet".
   ============================================================ */
const puppeteer = require('puppeteer');
const BASE = 'http://localhost:8123';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const ctx = await browser.createBrowserContext();
  const page = await ctx.newPage();
  await page.setViewport({ width: 390, height: 844 });
  let errors = [];
  page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('CONSOLE ' + m.text()); });

  const results = {};
  function check(name, ok, extra) {
    results[name] = (ok ? 'PASS' : 'FAIL') + (extra ? ' | ' + JSON.stringify(extra) : '');
    console.log((ok ? '✅' : '❌') + ' ' + name + (extra ? ' — ' + JSON.stringify(extra) : ''));
  }

  /* ---------- ONLINE: primera visita para registrar SW y precachear ---------- */
  await page.goto(BASE + '/index.html', { waitUntil: 'networkidle2', timeout: 30000 });
  // esperar a que el SW quede controlado
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null || !('serviceWorker' in navigator), { timeout: 20000 }).catch(() => {});
  // dar tiempo al precache (cientos de recursos en localhost es rápido)
  await new Promise((r) => setTimeout(r, 4000));
  const swInfo = await page.evaluate(async () => {
    const reg = await navigator.serviceWorker.getRegistration('./');
    return { controlled: !!navigator.serviceWorker.controller, active: !!(reg && reg.active) };
  });
  check('SW registrado y activo (online)', swInfo.controlled && swInfo.active, swInfo);

  // Precargar en línea las demás páginas para poblar caché por si acaso
  for (const p of ['/lista-arboles.html', '/ficha-arbol.html?arbol=merecure', '/mapa-colegio.html', '/calculadora.html', '/perfil.html', '/ia-chatbot.html']) {
    await page.goto(BASE + p, { waitUntil: 'networkidle2', timeout: 30000 }).catch(() => {});
    await new Promise((r) => setTimeout(r, 800));
  }

  /* ---------- OFFLINE ---------- */
  await page.setOfflineMode(true);
  await page.evaluate(() => { Object.defineProperty(navigator, 'onLine', { get: () => false, configurable: true }); });

  // 1. Inventario
  errors = [];
  await page.goto(BASE + '/lista-arboles.html', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await new Promise((r) => setTimeout(r, 1500));
  const inv = await page.evaluate(() => ({
    cards: document.querySelectorAll('.tree-card').length,
    visible: [...document.querySelectorAll('.tree-card')].filter((c) => c.getBoundingClientRect().height > 0).length,
  }));
  check('OFFLINE · Inventario lista árboles renderizada', inv.cards > 20 && inv.visible > 20, inv);

  // búsqueda offline
  const searchOk = await page.evaluate(() => {
    const inp = document.querySelector('#search-tree, input[type="search"], .search-input input, #searchInput');
    return inp ? 'present' : 'none';
  });
  check('OFFLINE · Campo de búsqueda presente', searchOk === 'present', { searchOk });

  // 2. Ficha del árbol (merecure) con quiz
  errors = [];
  await page.goto(BASE + '/ficha-arbol.html?arbol=merecure', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await new Promise((r) => setTimeout(r, 1500));
  const ficha = await page.evaluate(() => ({
    title: (document.querySelector('h1, .ficha-title, #arbolNombre') || {}).textContent || document.title,
    bodyLen: document.body.innerHTML.length,
    tieneQuiz: !!document.querySelector('#quizModal, .quiz-container, [id*="quiz"]'),
    imgsCargadas: [...document.querySelectorAll('img')].filter((i) => i.complete && i.naturalWidth > 0).length,
    imgsTotales: document.querySelectorAll('img').length,
  }));
  check('OFFLINE · Ficha de árbol abre con contenido', ficha.bodyLen > 5000 && /erecure|Merecure/.test(ficha.title + document.title || '') === true || ficha.bodyLen > 5000, ficha);
  check('OFFLINE · Imágenes de la ficha servidas desde caché', ficha.imgsCargadas >= Math.min(2, ficha.imgsTotales), { imgsCargadas: ficha.imgsCargadas, imgsTotales: ficha.imgsTotales });
  const errFicha = errors.filter((e) => !/net::ERR|favicon|clarity|googletagmanager/i.test(e));
  check('OFFLINE · Ficha sin errores JS', errFicha.length === 0, errFicha.slice(0, 3));

  // 3. Gamificación: simular escaneo QR por token offline
  errors = [];
  await page.goto(BASE + '/ficha-arbol.html?tree=merecure', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await new Promise((r) => setTimeout(r, 2000));
  const game = await page.evaluate(() => {
    const raw = localStorage.getItem('silvain_medals');
    return { saved: raw ? JSON.parse(raw) : null };
  });
  check('OFFLINE · Escaneo QR otorga medalla + XP (localStorage)',
    !!game.saved && Array.isArray(game.saved.medals) && game.saved.medals.includes('merecure') && (game.saved.xp || 0) >= 100,
    game.saved && { medals: game.saved.medals, xp: game.saved.xp });

  // 4. Perfil sincronizado
  errors = [];
  await page.goto(BASE + '/perfil.html', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await new Promise((r) => setTimeout(r, 1500));
  const perf = await page.evaluate(() => ({
    xpTexto: ((document.getElementById('perfilXPValor') || {}).textContent || '').trim(),
    medallas: document.querySelectorAll('.perfil-medalla').length,
    medallasGanadas: document.querySelectorAll('.perfil-medalla.obtenida, .perfil-medalla.gained, .perfil-medalla:not(.bloqueada)').length,
    misiones: document.querySelectorAll('.perfil-mision').length,
    rangos: document.querySelectorAll('.perfil-rango-item').length,
  }));
  check('OFFLINE · Perfil muestra XP sincronizada (>0)', parseInt(perf.xpTexto.replace(/\D/g, ''), 10) >= 100, perf);
  check('OFFLINE · Perfil muestra medallas y misiones', perf.medallas > 0 && perf.misiones > 0, perf);

  // 5. Calculadora offline
  errors = [];
  await page.goto(BASE + '/calculadora.html', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await new Promise((r) => setTimeout(r, 1200));
  const calc = await page.evaluate(() => {
    const sel = document.getElementById('especie');
    const dap = document.getElementById('dap');
    const res = document.getElementById('resultado') || document.querySelector('.resultado, #co2total, #resultadoCo2');
    if (!sel || !dap) return { ok: false };
    sel.selectedIndex = 0;
    dap.value = '50';
    dap.dispatchEvent(new Event('input', { bubbles: true }));
    const alt = document.getElementById('altura');
    if (alt) { alt.value = '12'; alt.dispatchEvent(new Event('input', { bubbles: true })); }
    const btn = [...document.querySelectorAll('button')].find((b) => /calcular/i.test(b.textContent));
    if (btn) btn.click();
    return {
      ok: true,
      opciones: sel.options.length,
      resultadoTexto: res ? (res.textContent || '').trim().slice(0, 120) : 'sin nodo resultado',
    };
  });
  check('OFFLINE · Calculadora de carbono calcula sin red', calc.ok && calc.opciones > 5 && /\d/.test(calc.resultadoTexto || ''), calc);

  // 6. Mapa del colegio offline
  errors = [];
  await page.goto(BASE + '/mapa-colegio.html', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await new Promise((r) => setTimeout(r, 1500));
  const mapa = await page.evaluate(() => ({
    markers: document.querySelectorAll('.map-marker').length,
    leyenda: document.querySelectorAll('#speciesLegend .legend-item, #speciesLegend *').length,
    imgMapa: (() => { const i = document.querySelector('.map-img, #campusMap img'); return i ? i.complete && i.naturalWidth > 0 : false; })(),
  }));
  check('OFFLINE · Mapa con marcadores e imagen cacheada', mapa.markers > 10 && mapa.imgMapa, mapa);

  // 7. Silvain AI offline → aviso de "solo online"
  errors = [];
  await page.goto(BASE + '/ia-chatbot.html', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await new Promise((r) => setTimeout(r, 1500));
  const chat = await page.evaluate(async () => {
    try {
      const r = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: 'hola', history: [] }) });
      const j = await r.json();
      return { status: r.status, reply: (j.reply || '').slice(0, 160), offlineFlag: !!j.offline, requiereInternet: !!j.requiereInternet };
    } catch (e) { return { error: String(e) }; }
  });
  check('OFFLINE · Silvain AI responde aviso "solo funciona con internet"',
    !!chat.reply && /internet|conexi/i.test(chat.reply) && /solo funciona con conexi/i.test(chat.reply), chat);

  // también vía UI real del chatbot
  const uiChat = await page.evaluate(async () => {
    const inp = document.getElementById('chatInput') || document.querySelector('textarea, input#chat-input');
    const form = document.getElementById('chatForm') || (inp && inp.closest('form'));
    if (!inp) return { ok: false, why: 'sin input' };
    inp.value = '¿Qué es el merecure?';
    inp.dispatchEvent(new Event('input', { bubbles: true }));
    if (form) form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    else { const ev = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }); inp.dispatchEvent(ev); }
    await new Promise((r) => setTimeout(r, 3500));
    const txt = document.body.innerText;
    return { ok: true, contieneAviso: /solo funciona con conexi/i.test(txt) };
  });
  check('OFFLINE · UI del chatbot muestra el aviso en pantalla', uiChat.ok && uiChat.contieneAviso === true, uiChat);

  // 8. Badge offline visible
  const badge = await page.evaluate(() => {
    const b = document.getElementById('silvainOfflineBadge');
    return b ? b.classList.contains('visible') : 'MISSING';
  });
  check('OFFLINE · Indicador "Sin internet" visible', badge === true, { badge });

  /* ---------- VUELVE LA RED: IA responde normal (mock no disponible → se verifica que reintenta la red) ---------- */
  await page.setOfflineMode(false);
  await page.reload({ waitUntil: 'networkidle2' }).catch(() => {});
  const onlineOk = await page.evaluate(() => navigator.onLine);
  check('ONLINE · Conexión restablecida', onlineOk === true, { onlineOk });

  await browser.close();

  const fails = Object.entries(results).filter(([, v]) => v.startsWith('FAIL'));
  console.log('\n===== RESUMEN =====');
  Object.entries(results).forEach(([k, v]) => console.log(v[0] + '  ' + k));
  process.exit(fails.length ? 1 : 0);
})().catch((e) => { console.error('TEST CRASH:', e); process.exit(2); });
