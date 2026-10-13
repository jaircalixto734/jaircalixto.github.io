const puppeteer = require('puppeteer');
const BASE='http://localhost:8123';
(async()=>{
  const browser=await puppeteer.launch({args:['--no-sandbox','--disable-setuid-sandbox']});
  const page=await browser.newPage();
  await page.setViewport({width:390,height:844});
  const errors=[];
  page.on('pageerror',e=>errors.push('PAGEERROR '+e.message));
  page.on('console',m=>{if(m.type()==='error')errors.push('CONSOLE '+m.text());});

  async function visit(url,fn){
    errors.length=0;
    await page.goto(BASE+url,{waitUntil:'networkidle2',timeout:20000}).catch(e=>errors.push('NAV '+e.message));
    await new Promise(r=>setTimeout(r,900));
    const res=await page.evaluate(fn);
    console.log('=== '+url+' ===');
    console.log(JSON.stringify(res,null,1));
    console.log('ERRORS:',errors.slice(0,8).join('\n')||'(none)');
  }

  await visit('/lista-arboles.html',()=>({
      cardsVisible: [...document.querySelectorAll('.tree-card')].filter(c=>getComputedStyle(c).display!=='none'&&c.getBoundingClientRect().height>0).length,
      totalCards: document.querySelectorAll('.tree-card').length,
      navListDisplay: (()=>{const n=document.getElementById('nav-list');return n?getComputedStyle(n).display:'MISSING';})(),
      badgeVisible: (()=>{const b=document.getElementById('silvainOfflineBadge');return b?b.classList.contains('visible'):'MISSING';})(),
  }));

  await visit('/mapa-colegio.html',()=>({
      markers: document.querySelectorAll('.map-marker').length,
      legendItems: document.querySelectorAll('#speciesLegend .legend-item').length,
      mapImgOk: (()=>{const i=document.querySelector('.map-img');return i?(i.complete&&i.naturalWidth>0):'NO IMG';})(),
      campusMapChildren: document.getElementById('campusMap')?document.getElementById('campusMap').children.length:'NO #campusMap',
      pointsGridRows: document.querySelectorAll('#pointsGrid > *').length,
  }));

  await visit('/calculadora.html',()=>{
    const sel=document.getElementById('especie');
    return {
      speciesOptions: sel?sel.options.length:'SELECT MISSING',
      ecuacionDefault: (()=>{const e=document.getElementById('ecuacion');return e&&e.options[0]?e.options[0].textContent:'MISSING';})(),
    };
  });

  await visit('/perfil.html',()=>({
      displayName: (document.getElementById('perfilDisplayName')||{}).textContent,
      xpValor: (document.getElementById('perfilXPValor')||{}).textContent,
      misiones: document.querySelectorAll('.perfil-mision').length,
      medallas: document.querySelectorAll('.perfil-medalla').length,
      rangos: document.querySelectorAll('.perfil-rango-item').length,
      certZona: ((document.getElementById('certificadoZona')||{}).textContent||'').trim().slice(0,90),
  }));

  await visit('/ficha-arbol.html?arbol=merecure',()=>({ title: document.title, bodyLen: document.body.innerHTML.length }));

  // prueba hamburguesa en lista-arboles
  await page.goto(BASE+'/lista-arboles.html',{waitUntil:'networkidle2'});
  await new Promise(r=>setTimeout(r,600));
  await page.click('#mobile-menu');
  await new Promise(r=>setTimeout(r,500));
  const menuOpen=await page.evaluate(()=>{const n=document.getElementById('nav-list');return n?n.className+' | display='+getComputedStyle(n).display:'MISSING';});
  console.log('MENU after click:',menuOpen);

  await browser.close();
})();
