const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const htmls = fs.readdirSync(ROOT).filter((f) => f.endsWith('.html'));
const sw = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8');

// Parsear realmente los arrays PAGINAS y RECURSOS_LOCALES del sw.js
function extraerArray(src, nombre) {
  const cab = 'const ' + nombre + ' = [';
  const ini = src.indexOf(cab);
  if (ini < 0) throw new Error('No se encontró ' + nombre);
  const inicio = ini + cab.length - 1; // posición de '['
  let profundidad = 0, fin = -1;
  for (let i = inicio; i < src.length; i++) {
    const ch = src[i];
    if (ch === '[') profundidad++;
    else if (ch === ']') { profundidad--; if (profundidad === 0) { fin = i + 1; break; } }
    else if (ch === '"' || ch === "'") { // saltar cadenas
      const q = ch; i++;
      while (i < src.length && src[i] !== q) { if (src[i] === '\\') i++; i++; }
    }
  }
  return eval(src.slice(inicio, fin));
}
const listed = new Set(
  [...extraerArray(sw, 'PAGINAS'), ...extraerArray(sw, 'RECURSOS_LOCALES')].map((u) =>
    u.replace(/^\.\//, '')
  )
);

// also collect files referenced from JS (dynamic image paths etc.)
const jsRefs = new Set();
for (const j of fs.readdirSync(path.join(ROOT, 'js'))) {
  const c = fs.readFileSync(path.join(ROOT, 'js', j), 'utf8');
  for (const m of c.matchAll(/["'`](\.\/)?imagenes\/[^"'`]+|["'`](\.\/)?css\/[^"'`]+|["'`](\.\/)?js\/[^"'`]+/g)) {
    jsRefs.add(m[0].replace(/^["'`]/, '').replace(/^\.\//, ''));
  }
}

let missing = [];
for (const h of htmls) {
  const c = fs.readFileSync(path.join(ROOT, h), 'utf8');
  const refs = [...c.matchAll(/(?:src|href)="([^"?#]+)(?:\?[^"]*)?"/g)].map((m) => m[1]);
  for (const r of refs) {
    if (/^(https?:|#|data:|mailto:|tel:)/.test(r)) continue;
    const clean = decodeURIComponent(r.replace(/^\.\//, ''));
    const abs = path.join(ROOT, clean);
    if (!fs.existsSync(abs)) continue; // not a local file we serve
    if (!listed.has(clean)) missing.push(h + ' -> ' + clean);
  }
}
for (const r of jsRefs) {
  const clean = decodeURIComponent(r);
  if (!fs.existsSync(path.join(ROOT, clean))) continue;
  if (!listed.has(clean)) missing.push('js-refs -> ' + clean);
}

console.log([...new Set(missing)].join('\n') || 'OK: todo recurso local referenciado está en la lista de precache');

// check SW list entries that do not exist on disk
for (const l of listed) {
  if (!fs.existsSync(path.join(ROOT, decodeURIComponent(l)))) console.log('SW lista archivo INEXISTENTE: ./' + l);
}
