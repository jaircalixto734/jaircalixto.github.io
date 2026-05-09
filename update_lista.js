const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'lista-arboles.html');

let content = fs.readFileSync(filePath, 'utf8');

const regex = /<!-- ÁRBOLES ORNAMENTALES \(13-17\) -->[\s\S]*?(?=<\/div>\s*<\/section>)/;

const newCards = `<!-- NUEVOS ÁRBOLES (09-17) -->
                <div class="tree-card" data-category="nativos">
                    <div class="tree-img-container"><img src="./imagenes/desconocido.jpg" alt="Uvero">
                        <span class="tree-badge badge-nativo"><i class="fas fa-seedling"></i> Nativo</span><span class="tree-id">#JBP-09</span></div>
                    <div class="tree-info"><h3>Uvero</h3><p class="scientific-name">Coccoloba acuminata</p>
                        <p class="tree-desc">Sus pequeños frutos parecidos a uvas son un manjar para aves y transeúntes, crece cerca de fuentes de agua.</p>
                        <a href="ficha-arbol.html?arbol=coccoloba-acuminata" class="btn-tree"><i class="fas fa-leaf"></i> Ver Ficha Completa</a></div>
                </div>

                <div class="tree-card" data-category="frutales">
                    <div class="tree-img-container"><img src="./imagenes/desconocido.jpg" alt="Palma de Coco">
                        <span class="tree-badge badge-frutal"><i class="fas fa-apple-alt"></i> Frutal</span><span class="tree-id">#JBP-10</span></div>
                    <div class="tree-info"><h3>Palma de Coco</h3><p class="scientific-name">Cocos nucifera</p>
                        <p class="tree-desc">Palma mundialmente conocida por su fruto, el agua de coco y su valor paisajístico inconfundible.</p>
                        <a href="ficha-arbol.html?arbol=palma-de-coco" class="btn-tree"><i class="fas fa-leaf"></i> Ver Ficha Completa</a></div>
                </div>

                <div class="tree-card" data-category="maderables">
                    <div class="tree-img-container"><img src="./imagenes/desconocido.jpg" alt="Trompillo">
                        <span class="tree-badge badge-maderable"><i class="fas fa-hammer"></i> Maderable</span><span class="tree-id">#JBP-11</span></div>
                    <div class="tree-info"><h3>Trompillo</h3><p class="scientific-name">Guarea guidonia</p>
                        <p class="tree-desc">También conocido como Cedro Macho, aporta valiosa madera y sus semillas atraen a las aves del bosque.</p>
                        <a href="ficha-arbol.html?arbol=trompillo" class="btn-tree"><i class="fas fa-leaf"></i> Ver Ficha Completa</a></div>
                </div>

                <div class="tree-card" data-category="nativos">
                    <div class="tree-img-container"><img src="./imagenes/desconocido.jpg" alt="Guácimo">
                        <span class="tree-badge badge-nativo"><i class="fas fa-seedling"></i> Nativo</span><span class="tree-id">#JBP-12</span></div>
                    <div class="tree-info"><h3>Guácimo</h3><p class="scientific-name">Guazuma ulmifolia</p>
                        <p class="tree-desc">Un salvavidas en el verano llanero: sus frutos caídos proporcionan forraje clave para el ganado.</p>
                        <a href="ficha-arbol.html?arbol=guacimo" class="btn-tree"><i class="fas fa-leaf"></i> Ver Ficha Completa</a></div>
                </div>

                <div class="tree-card" data-category="ornamentales">
                    <div class="tree-img-container"><img src="./imagenes/desconocido.jpg" alt="Gualanday">
                        <span class="tree-badge badge-ornamental"><i class="fas fa-spa"></i> Ornamental</span><span class="tree-id">#JBP-13</span></div>
                    <div class="tree-info"><h3>Gualanday</h3><p class="scientific-name">Jacaranda obtusifolia</p>
                        <p class="tree-desc">Pinta el paisaje de la Orinoquía con su espectacular floración azul-violácea durante la sequía.</p>
                        <a href="ficha-arbol.html?arbol=gualanday" class="btn-tree"><i class="fas fa-leaf"></i> Ver Ficha Completa</a></div>
                </div>

                <div class="tree-card" data-category="ornamentales">
                    <div class="tree-img-container"><img src="./imagenes/desconocido.jpg" alt="Oití">
                        <span class="tree-badge badge-ornamental"><i class="fas fa-spa"></i> Ornamental</span><span class="tree-id">#JBP-14</span></div>
                    <div class="tree-info"><h3>Oití</h3><p class="scientific-name">Licania tomentosa</p>
                        <p class="tree-desc">Su copa densa y redondeada proporciona una sombra excelente, ideal para parques y andenes.</p>
                        <a href="ficha-arbol.html?arbol=oiti" class="btn-tree"><i class="fas fa-leaf"></i> Ver Ficha Completa</a></div>
                </div>

                <div class="tree-card" data-category="frutales">
                    <div class="tree-img-container"><img src="./imagenes/desconocido.jpg" alt="Noni">
                        <span class="tree-badge badge-frutal"><i class="fas fa-apple-alt"></i> Frutal</span><span class="tree-id">#JBP-15</span></div>
                    <div class="tree-info"><h3>Noni</h3><p class="scientific-name">Morinda citrifolia</p>
                        <p class="tree-desc">Conocido por su fuerte olor y ampliamente cultivado por sus supuestas propiedades medicinales.</p>
                        <a href="ficha-arbol.html?arbol=noni" class="btn-tree"><i class="fas fa-leaf"></i> Ver Ficha Completa</a></div>
                </div>

                <div class="tree-card" data-category="ornamentales">
                    <div class="tree-img-container"><img src="./imagenes/desconocido.jpg" alt="Palma Real">
                        <span class="tree-badge badge-ornamental"><i class="fas fa-spa"></i> Ornamental</span><span class="tree-id">#JBP-16</span></div>
                    <div class="tree-info"><h3>Palma Real</h3><p class="scientific-name">Roystonea regia</p>
                        <p class="tree-desc">Majestuosa palmera con capitel verde brillante, sus frutos "palmiche" son favoritos de loros.</p>
                        <a href="ficha-arbol.html?arbol=palma-real" class="btn-tree"><i class="fas fa-leaf"></i> Ver Ficha Completa</a></div>
                </div>

                <div class="tree-card" data-category="maderables">
                    <div class="tree-img-container"><img src="./imagenes/desconocido.jpg" alt="Samán">
                        <span class="tree-badge badge-maderable"><i class="fas fa-hammer"></i> Maderable</span><span class="tree-id">#JBP-17</span></div>
                    <div class="tree-info"><h3>Samán</h3><p class="scientific-name">Samanea saman</p>
                        <p class="tree-desc">El gigante protector del llano; su inmensa copa da refugio y sus hojas "duermen" de noche.</p>
                        <a href="ficha-arbol.html?arbol=saman" class="btn-tree"><i class="fas fa-leaf"></i> Ver Ficha Completa</a></div>
                </div>

                <!-- POR IDENTIFICAR (18-20) -->
                <div class="tree-card" data-category="por-identificar">
                    <div class="tree-img-container"><img src="./imagenes/desconocido.jpg" alt="Por identificar">
                        <span class="tree-badge badge-estudio"><i class="fas fa-microscope"></i> En Estudio</span><span class="tree-id">#JBP-18</span></div>
                    <div class="tree-info"><h3>Especie en Estudio</h3><p class="scientific-name">Pendiente de clasificación</p>
                        <p class="tree-desc">Se están recolectando muestras de hojas y frutos para su identificación botánica.</p>
                        <a href="#" class="btn-tree"><i class="fas fa-leaf"></i> Ver Ficha Completa</a></div>
                </div>

                <div class="tree-card" data-category="por-identificar">
                    <div class="tree-img-container"><img src="./imagenes/desconocido.jpg" alt="Por identificar">
                        <span class="tree-badge badge-estudio"><i class="fas fa-microscope"></i> En Estudio</span><span class="tree-id">#JBP-19</span></div>
                    <div class="tree-info"><h3>Especie en Estudio</h3><p class="scientific-name">Pendiente de clasificación</p>
                        <p class="tree-desc">Se están recolectando muestras botánicas.</p>
                        <a href="#" class="btn-tree"><i class="fas fa-leaf"></i> Ver Ficha Completa</a></div>
                </div>

                <div class="tree-card" data-category="por-identificar">
                    <div class="tree-img-container"><img src="./imagenes/desconocido.jpg" alt="Por identificar">
                        <span class="tree-badge badge-estudio"><i class="fas fa-microscope"></i> En Estudio</span><span class="tree-id">#JBP-20</span></div>
                    <div class="tree-info"><h3>Especie en Estudio</h3><p class="scientific-name">Pendiente de clasificación</p>
                        <p class="tree-desc">Se están recolectando muestras botánicas.</p>
                        <a href="#" class="btn-tree"><i class="fas fa-leaf"></i> Ver Ficha Completa</a></div>
                </div>
            </div>
        </div>`;

content = content.replace(regex, newCards + '\n            </div>\n        ');

fs.writeFileSync(filePath, content, 'utf8');
console.log('lista-arboles.html updated.');
