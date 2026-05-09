import os
import re

file_path = "js/datos_arboles.js"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

new_trees = """    ,
    "coccoloba-acuminata": {
        id: "#JBP-09", tipo: "Nativo", nombre: "Uvero / Uvita de playa", cientifico: "Coccoloba acuminata Kunth",
        familia: "Polygonaceae", origen: "Nativa", estado: "No Evaluada (NE) / LC", exotica: false,
        carbono: 15.0, viajes: 0, imagen_portada: "./imagenes/desconocido.jpg",
        galeria: [
            { img: "./imagenes/desconocido.jpg", desc: "Pendiente de foto en campo" }
        ],
        nombresLocales: ["Uvero", "Uvita de playa", "Uvero de sabana"],
        distribucion: `
            <p>Especie nativa de las regiones bajas y medias de Colombia. Presente en bordes de ríos, caños y sabanas inundables de la Orinoquía. En Casanare crece de forma silvestre asociada a cuerpos de agua.</p>
        `,
        densidad: "0.55 – 0.65 g/cm³", fraccion: "0.47 (IPCC)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:10px;">AGB = 0.0673 × (ρ × D² × H)⁰·⁹⁷⁶</div>
            <p class="text-sm">Ecuación pantrópica de <strong>Chave et al. (2014)</strong> recomendada para bosques secos y sabanas inundables. Se requiere calibración local.</p>
        `,
        calendario: [
            { mes: "Ene", fase: "Reposo", clima: "dry" }, { mes: "Feb", fase: "Floración", clima: "dry" },
            { mes: "Mar", fase: "Floración", clima: "dry" }, { mes: "Abr", fase: "Fructificación", clima: "rain" },
            { mes: "May", fase: "Fructificación", clima: "rain" }, { mes: "Jun", fase: "Crecimiento", clima: "rain" },
            { mes: "Jul", fase: "Crecimiento", clima: "rain" }, { mes: "Ago", fase: "Reposo", clima: "rain" },
            { mes: "Sep", fase: "Reposo", clima: "rain" }, { mes: "Oct", fase: "Reposo", clima: "rain" },
            { mes: "Nov", fase: "Reposo", clima: "dry" }, { mes: "Dic", fase: "Reposo", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px;">
                <div><strong style="color:var(--secondary-color);">Porte:</strong> Arbusto grande o árbol pequeño, generalmente de 3 a 8 metros de altura, con ramas extendidas y algunas veces trepadoras.</div>
                <div><strong style="color:var(--secondary-color);">Hojas:</strong> Alternas, simples, lanceoladas a ovado-lanceoladas, acuminadas en el ápice, con la base de la hoja formando una ócrea característica de la familia.</div>
                <div><strong style="color:var(--secondary-color);">Flores:</strong> Pequeñas, dispuestas en racimos terminales alargados y delgados (espigas).</div>
                <div><strong style="color:var(--secondary-color);">Frutos:</strong> Aquenios envueltos en un perianto carnoso (pseudofruto), globosos, pequeños, de color rojizo a púrpura oscuro al madurar, semejantes a racimos de uvas pequeñas.</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Aves frugívoras</div><div class="section-val text-sm mt-2">Atrae a múltiples especies de aves que consumen sus pequeños frutos carnosos.</div></div>
                <div class="metric-card"><div class="metric-label">Insectos polinizadores</div><div class="section-val text-sm mt-2">Flores visitadas por abejas nativas y otros insectos pequeños en busca de néctar.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Alimenticio</div><div class="section-val text-sm mt-2">Los frutos (pseudofrutos) son comestibles, de sabor dulce a ligeramente ácido.</div></div>
                <div class="metric-card"><div class="metric-label">Protección de cuencas</div><div class="section-val text-sm mt-2">Útil para la estabilización de riberas y protección de cuerpos de agua.</div></div>
            </div>
        `,
        mensajeIA: "¡Hola! Soy el Uvero. Tal vez no sea el árbol más gigantesco del llano, pero mis pequeños frutos parecidos a uvas son un manjar para los pájaros y para ti también si los encuentras maduros. Pertenezco a una familia curiosa (las poligonáceas) y me gusta crecer cerca del agua.",
        referencias: [
            "Bernal, R., et al. (2015). Catálogo de plantas y líquenes de Colombia. Universidad Nacional de Colombia.",
            "Chave, J. et al. (2014). Improved allometric models to estimate the aboveground biomass of tropical trees. Global Change Biology."
        ],
        quiz: [
            { q: "¿Qué parte del 'fruto' del Uvero es la que realmente nos comemos?", opts: ["La semilla entera", "Un cáliz o perianto que se vuelve carnoso", "El tallo de la flor"], correct: 1 },
            { q: "¿A qué tipo de ecosistema o zona está más asociado el crecimiento del Uvero en el Casanare?", opts: ["En lo alto de las montañas", "Cerca de cuerpos de agua y bordes de ríos", "En medio del desierto"], correct: 1 },
            { q: "¿Qué estructura foliar es característica de la familia del Uvero (Polygonaceae)?", opts: ["Una ócrea en la base de la hoja", "Espinas gigantes", "Hojas en forma de aguja"], correct: 0 }
        ]
    },
    "palma-de-coco": {
        id: "#JBP-10", tipo: "Introducido", nombre: "Palma de Coco", cientifico: "Cocos nucifera L.",
        familia: "Arecaceae", origen: "Introducida (Asia/Pacífico)", estado: "Preocupación Menor (LC)", exotica: true,
        carbono: 45.0, viajes: 0, imagen_portada: "./imagenes/desconocido.jpg",
        galeria: [
            { img: "./imagenes/desconocido.jpg", desc: "Pendiente de foto en campo" }
        ],
        nombresLocales: ["Palma de coco", "Cocotero", "Palma cocotera"],
        distribucion: `
            <p>Origen exacto disputado (posiblemente la región Indo-Pacífica). Es la palma más ampliamente cultivada en los trópicos del mundo. En Casanare se cultiva en patios, fincas y zonas urbanas por sus frutos y valor ornamental, aunque no es su hábitat óptimo de sabana.</p>
        `,
        densidad: "0.40 – 0.55 g/cm³", fraccion: "0.47 (IPCC)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:10px;">V = π × (D/2)² × H × f</div>
            <p class="text-sm">Para palmeras se sugiere volumen cilíndrico. Ecuación específica para Cocos nucifera recomendada: <strong>B = 0.5369 + 2.053 × H</strong> (Brown, 1997 para palmas).</p>
        `,
        calendario: [
            { mes: "Ene", fase: "Continua", clima: "dry" }, { mes: "Feb", fase: "Continua", clima: "dry" },
            { mes: "Mar", fase: "Continua", clima: "dry" }, { mes: "Abr", fase: "Continua", clima: "rain" },
            { mes: "May", fase: "Continua", clima: "rain" }, { mes: "Jun", fase: "Continua", clima: "rain" },
            { mes: "Jul", fase: "Continua", clima: "rain" }, { mes: "Ago", fase: "Continua", clima: "rain" },
            { mes: "Sep", fase: "Continua", clima: "rain" }, { mes: "Oct", fase: "Continua", clima: "rain" },
            { mes: "Nov", fase: "Continua", clima: "dry" }, { mes: "Dic", fase: "Continua", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px;">
                <div><strong style="color:var(--secondary-color);">Porte:</strong> Palma solitaria de hasta 30 metros de altura, con un estípite (tallo) liso, a menudo ligeramente inclinado, marcado por cicatrices foliares anulares.</div>
                <div><strong style="color:var(--secondary-color);">Hojas:</strong> Pinnadas, agrupadas en la corona terminal, de 4 a 6 metros de largo, con numerosos folíolos lineares.</div>
                <div><strong style="color:var(--secondary-color);">Flores:</strong> Inflorescencias ramificadas que nacen entre las hojas (intrafoliares). Flores masculinas pequeñas y numerosas; flores femeninas más grandes y en menor cantidad en la base.</div>
                <div><strong style="color:var(--secondary-color);">Frutos:</strong> Drupa grande (coco) con un mesocarpio fibroso grueso y un endocarpio óseo duro que contiene la semilla (endospermo líquido y sólido).</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Insectos</div><div class="section-val text-sm mt-2">Abejas y avispas visitan sus inflorescencias ricas en polen y néctar.</div></div>
                <div class="metric-card"><div class="metric-label">Aves</div><div class="section-val text-sm mt-2">Algunas aves usan las palmas para anidar o buscar insectos entre las bases de las hojas.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Alimentación</div><div class="section-val text-sm mt-2">Agua de coco, copra (pulpa blanca) consumida fresca o en preparaciones, y extracción de aceite.</div></div>
                <div class="metric-card"><div class="metric-label">Materiales</div><div class="section-val text-sm mt-2">Fibras del mesocarpio (estopa) para cuerdas y tapetes; endocarpio (concha) para artesanías y carbón activado.</div></div>
            </div>
        `,
        mensajeIA: "¡Hola! Soy el Cocotero, el 'árbol de la vida'. Aunque mi hogar perfecto es la playa donde la brisa del mar me acaricia, me he adaptado a los Llanos Orientales para traerte el agua más refrescante del mundo. Mis semillas (los cocos) están diseñadas para flotar meses en el océano y colonizar nuevas islas.",
        referencias: [
            "Bernal, R. et al. (2015). Catálogo de plantas y líquenes de Colombia.",
            "Brown, S. (1997). Estimating biomass and biomass change of tropical forests. FAO Forestry Paper 134."
        ],
        quiz: [
            { q: "¿Qué tipo de estructura botánica es realmente el 'coco' que compramos para beber?", opts: ["Una semilla gigantesca", "Una drupa (fruto) con su cáscara fibrosa interna", "Un tubérculo de la palma"], correct: 1 },
            { q: "¿Cómo se llama la capa fibrosa que envuelve al coco y le permite flotar en el mar?", opts: ["Mesocarpio", "Endocarpio", "Epicarpio"], correct: 0 },
            { q: "A diferencia de los árboles maderables, ¿por qué la densidad del tronco de la palma de coco no es uniforme?", opts: ["Porque es hueco por dentro", "Porque es una monocotiledónea con fibras dispersas (más duras en la periferia)", "Porque se llena de agua de lluvia"], correct: 1 }
        ]
    },
    "trompillo": {
        id: "#JBP-11", tipo: "Nativo", nombre: "Trompillo / Cedro Macho", cientifico: "Guarea guidonia (L.) Sleumer",
        familia: "Meliaceae", origen: "Nativa", estado: "Preocupación Menor (LC)", exotica: false,
        carbono: 145.0, viajes: 0, imagen_portada: "./imagenes/desconocido.jpg",
        galeria: [
            { img: "./imagenes/desconocido.jpg", desc: "Pendiente de foto en campo" }
        ],
        nombresLocales: ["Trompillo", "Cedro macho", "Requia", "Grequia"],
        distribucion: `
            <p>Ampliamente distribuida en América tropical, desde Costa Rica hasta el sur de Brasil. En Colombia, está presente en múltiples regiones incluyendo la Orinoquía. Especie nativa de gran importancia forestal que se desarrolla bien en bosques secos, húmedos y de galería.</p>
        `,
        densidad: "0.58 g/cm³", fraccion: "0.47 (IPCC)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:10px;">AGB = exp[-1.803 - 0.976E + 0.976 ln(ρ) + 2.673 ln(D)]</div>
            <p class="text-sm">Ecuación pantrópica de <strong>Chave et al. (2014)</strong> que incorpora el estrés ambiental (E). Especie maderable de crecimiento moderado que acumula carbono de manera estable.</p>
        `,
        calendario: [
            { mes: "Ene", fase: "Reposo", clima: "dry" }, { mes: "Feb", fase: "Reposo", clima: "dry" },
            { mes: "Mar", fase: "Reposo", clima: "dry" }, { mes: "Abr", fase: "Floración", clima: "rain" },
            { mes: "May", fase: "Floración", clima: "rain" }, { mes: "Jun", fase: "Floración", clima: "rain" },
            { mes: "Jul", fase: "Fructificación", clima: "rain" }, { mes: "Ago", fase: "Fructificación", clima: "rain" },
            { mes: "Sep", fase: "Fructificación", clima: "rain" }, { mes: "Oct", fase: "Dispersión", clima: "rain" },
            { mes: "Nov", fase: "Dispersión", clima: "dry" }, { mes: "Dic", fase: "Reposo", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px;">
                <div><strong style="color:var(--secondary-color);">Porte:</strong> Árbol de tamaño mediano a grande, que puede alcanzar 25 a 30 metros de altura, con un fuste recto y cilíndrico, frecuentemente ramificado desde baja altura en espacios abiertos.</div>
                <div><strong style="color:var(--secondary-color);">Hojas:</strong> Pinnadas, compuestas por 4 a 10 pares de folíolos opuestos, elípticos a oblongos. Las hojas nuevas tienen la característica única de continuar creciendo en el ápice durante algún tiempo.</div>
                <div><strong style="color:var(--secondary-color);">Flores:</strong> Inflorescencias en panículas axilares. Flores de color blanco a crema, pequeñas y tubulares, muy aromáticas.</div>
                <div><strong style="color:var(--secondary-color);">Frutos:</strong> Cápsulas coriáceas, globosas a piriformes, de color marrón al madurar. Se abren en 4 valvas revelando semillas cubiertas por un arilo rojo intenso o anaranjado.</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Aves</div><div class="section-val text-sm mt-2">El arilo rojo de las semillas es muy atractivo para aves como tucanes y pavas, que actúan como dispersoras.</div></div>
                <div class="metric-card"><div class="metric-label">Mamíferos</div><div class="section-val text-sm mt-2">Monos y otros mamíferos arborícolas consumen las semillas ariladas.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Maderable</div><div class="section-val text-sm mt-2">Su madera, parecida a la del cedro pero más pesada y dura, se usa en ebanistería, carpintería y construcción general.</div></div>
                <div class="metric-card"><div class="metric-label">Medicinal</div><div class="section-val text-sm mt-2">La corteza y las hojas se usan tradicionalmente como emético, purgante y hemostático.</div></div>
            </div>
        `,
        mensajeIA: "¡Hola! Soy el Trompillo. A veces me confunden con el cedro, por eso me llaman 'cedro macho'. Mi madera es fuerte y mi presencia en los bosques de galería del Casanare es fundamental. Mis semillas tienen una envoltura roja brillante (arilo) que es como un caramelo irresistible para las aves del bosque.",
        referencias: [
            "Álvarez et al. (2012). Tree above-ground biomass allometries for carbon stocks estimation in Colombia.",
            "Bernal, R. et al. (2015). Catálogo de plantas y líquenes de Colombia.",
            "Cárdenas et al. (2015). Maderas de Colombia."
        ],
        quiz: [
            { q: "¿Qué característica especial tienen las hojas jóvenes del Trompillo (Guarea guidonia)?", opts: ["Tienen espinas venenosas", "Continúan creciendo en la punta por un tiempo", "Se cierran cuando las tocas"], correct: 1 },
            { q: "¿Por qué las aves son atraídas tan fuertemente por las semillas del Trompillo?", opts: ["Por su olor a carne podrida", "Porque están cubiertas de un arilo carnoso y rojo intenso", "Porque brillan en la oscuridad"], correct: 1 },
            { q: "¿Con qué otra madera valiosa suele compararse o confundirse la madera del Trompillo?", opts: ["Con el Cedro (familia Meliaceae)", "Con el Pino", "Con el Eucalipto"], correct: 0 }
        ]
    },
    "guacimo": {
        id: "#JBP-12", tipo: "Nativo", nombre: "Guácimo / Guásimo", cientifico: "Guazuma ulmifolia Lam.",
        familia: "Malvaceae", origen: "Nativa", estado: "Preocupación Menor (LC)", exotica: false,
        carbono: 85.0, viajes: 0, imagen_portada: "./imagenes/desconocido.jpg",
        galeria: [
            { img: "./imagenes/desconocido.jpg", desc: "Pendiente de foto en campo" }
        ],
        nombresLocales: ["Guácimo", "Guásimo", "Caulote", "Mutamba"],
        distribucion: `
            <p>Especie pionera ampliamente distribuida desde México hasta Argentina. En Colombia es extremadamente común en bosques secos, sabanas, zonas de matorral y potreros del llano casanareño. Excelente capacidad de rebrote tras incendios o podas.</p>
        `,
        densidad: "0.56 g/cm³", fraccion: "0.47 (IPCC)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:10px;">AGB = exp[-1.803 - 0.976E + 0.976 ln(ρ) + 2.673 ln(D)]</div>
            <p class="text-sm">Modelo de <strong>Chave et al. (2014)</strong>. El Guácimo es una especie de rápido crecimiento que aporta a la recuperación temprana del carbono en áreas degradadas.</p>
        `,
        calendario: [
            { mes: "Ene", fase: "Fructificación", clima: "dry" }, { mes: "Feb", fase: "Fructificación", clima: "dry" },
            { mes: "Mar", fase: "Fructificación", clima: "dry" }, { mes: "Abr", fase: "Caída follaje", clima: "rain" },
            { mes: "May", fase: "Brotación", clima: "rain" }, { mes: "Jun", fase: "Floración", clima: "rain" },
            { mes: "Jul", fase: "Floración", clima: "rain" }, { mes: "Ago", fase: "Floración", clima: "rain" },
            { mes: "Sep", fase: "Frutos verdes", clima: "rain" }, { mes: "Oct", fase: "Frutos verdes", clima: "rain" },
            { mes: "Nov", fase: "Frutos verdes", clima: "dry" }, { mes: "Dic", fase: "Fructificación", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px;">
                <div><strong style="color:var(--secondary-color);">Porte:</strong> Árbol de tamaño pequeño a mediano, típicamente de 10 a 15 metros de altura, con una copa extendida e irregular y fuste corto y ramificado.</div>
                <div><strong style="color:var(--secondary-color);">Hojas:</strong> Simples, alternas, ovadas a lanceoladas, con márgenes aserrados y base asimétrica. Se asemejan a las hojas del olmo (de ahí el epíteto <em>ulmifolia</em>). Ásperas al tacto.</div>
                <div><strong style="color:var(--secondary-color);">Flores:</strong> Pequeñas, agrupadas en cimas axilares, de color amarillo pálido, con un aroma dulce.</div>
                <div><strong style="color:var(--secondary-color);">Frutos:</strong> Cápsulas leñosas, subglobosas, de color negro o púrpura oscuro al madurar, cubiertas de tubérculos obtusos (como una mora leñosa dura). Contienen mucílago dulce.</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Ganado e Invertebrados</div><div class="section-val text-sm mt-2">Los frutos caídos en verano son un forraje vital para el ganado vacuno y equino.</div></div>
                <div class="metric-card"><div class="metric-label">Aves y Mamíferos</div><div class="section-val text-sm mt-2">Atrae monos, ñeques y aves que consumen el mucílago de sus frutos.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Forraje y Sombra</div><div class="section-val text-sm mt-2">Árbol clave en sistemas silvopastoriles para sombra y como suplemento alimenticio en verano.</div></div>
                <div class="metric-card"><div class="metric-label">Medicinal e Industrial</div><div class="section-val text-sm mt-2">La corteza y frutos producen mucílago usado para clarificar el azúcar de caña (panela) y para tratar resfriados e inflamaciones.</div></div>
            </div>
        `,
        mensajeIA: "¡Hola! Soy el Guácimo. Si le preguntas a un llanero por mí, te dirá que soy un salvavidas en el verano. Cuando los pastos se secan, mis frutos dulces, duros y negros caen al suelo y alimentan al ganado. Mi corteza tiene una 'baba' (mucílago) que se usa para limpiar la panela hirviendo. Soy humilde y resistente al fuego.",
        referencias: [
            "Bernal, R. et al. (2015). Catálogo de plantas y líquenes de Colombia.",
            "Maass, J.M. et al. (2005). Ecosystem services of tropical dry forests: insights from long-term ecological and socioeconomic research. Ecology and Society."
        ],
        quiz: [
            { q: "¿Para qué proceso agroindustrial tradicional se utiliza el mucílago ('baba') del tallo del Guácimo?", opts: ["Para hacer queso", "Para clarificar el jugo de caña en la elaboración de panela", "Para teñir telas de rojo"], correct: 1 },
            { q: "¿Qué rol juega el Guácimo durante el duro verano del Casanare?", opts: ["Atrae lluvias", "Sus frutos caídos proporcionan forraje al ganado cuando el pasto escasea", "Envenena a los depredadores"], correct: 1 },
            { q: "¿A qué fruto se parecen las cápsulas leñosas oscuras del Guácimo?", opts: ["A una sandía pequeña", "A una mora negra, dura y leñosa", "A una guayaba lisa"], correct: 1 }
        ]
    },
    "gualanday": {
        id: "#JBP-13", tipo: "Nativo", nombre: "Gualanday / Acacia", cientifico: "Jacaranda obtusifolia Bonpl.",
        familia: "Bignoniaceae", origen: "Nativa", estado: "Preocupación Menor (LC)", exotica: false,
        carbono: 120.0, viajes: 0, imagen_portada: "./imagenes/desconocido.jpg",
        galeria: [
            { img: "./imagenes/desconocido.jpg", desc: "Pendiente de foto en campo" }
        ],
        nombresLocales: ["Gualanday", "Acacia morada", "Guayacán morado", "Jacaranda"],
        distribucion: `
            <p>Especie nativa de América del Sur tropical (Colombia, Venezuela, Guayanas, Brasil). En los Llanos Orientales de Colombia es común en zonas de sabana arbolada, bosques de galería y también como árbol ornamental urbano.</p>
        `,
        densidad: "0.45 – 0.55 g/cm³", fraccion: "0.47 (IPCC)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:10px;">AGB = 0.0673 × (ρ × D² × H)⁰·⁹⁷⁶</div>
            <p class="text-sm">Ecuación de <strong>Chave et al. (2014)</strong> aplicable a especies de Bignoniaceae en bosques secos neotropicales.</p>
        `,
        calendario: [
            { mes: "Ene", fase: "Reposo", clima: "dry" }, { mes: "Feb", fase: "Caída follaje", clima: "dry" },
            { mes: "Mar", fase: "Floración", clima: "dry" }, { mes: "Abr", fase: "Floración", clima: "rain" },
            { mes: "May", fase: "Brotación", clima: "rain" }, { mes: "Jun", fase: "Fructificación", clima: "rain" },
            { mes: "Jul", fase: "Fructificación", clima: "rain" }, { mes: "Ago", fase: "Crecimiento", clima: "rain" },
            { mes: "Sep", fase: "Crecimiento", clima: "rain" }, { mes: "Oct", fase: "Dispersión", clima: "rain" },
            { mes: "Nov", fase: "Dispersión", clima: "dry" }, { mes: "Dic", fase: "Reposo", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px;">
                <div><strong style="color:var(--secondary-color);">Porte:</strong> Árbol mediano de 10 a 20 metros de altura, con copa irregular, abierta y extendida, que proporciona una sombra ligera y tamizada.</div>
                <div><strong style="color:var(--secondary-color);">Hojas:</strong> Bipinnadas (semejantes a las de los helechos), opuestas, con numerosos folíolos pequeños, obtusos en el ápice (de ahí <em>obtusifolia</em>), color verde claro.</div>
                <div><strong style="color:var(--secondary-color);">Flores:</strong> Espectaculares panículas terminales de flores tubulares y campanuladas, de un color azul-violáceo o lila intenso. Frecuentemente florece cuando ha perdido sus hojas.</div>
                <div><strong style="color:var(--secondary-color);">Frutos:</strong> Cápsulas leñosas, planas, con forma de castañuela o pequeña tortuga, dehiscentes, que liberan numerosas semillas aladas.</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Insectos</div><div class="section-val text-sm mt-2">Sus flores lilas tubulares son visitadas intensamente por abejas grandes y abejorros.</div></div>
                <div class="metric-card"><div class="metric-label">Aves</div><div class="section-val text-sm mt-2">Los colibríes aprovechan el néctar de sus flores acampanadas durante la temporada seca.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Ornamental</div><div class="section-val text-sm mt-2">Su floración masiva de color lila lo convierte en uno de los árboles paisajísticos más hermosos del llano.</div></div>
                <div class="metric-card"><div class="metric-label">Medicinal Tradicional</div><div class="section-val text-sm mt-2">La infusión de sus hojas y corteza se ha usado en medicina popular para afecciones de la piel y como depurativo.</div></div>
            </div>
        `,
        mensajeIA: "¡Hola! Soy el Gualanday. Si alguna vez en el verano llanero viste un árbol que se quedó sin hojas pero se cubrió completamente de campanas moradas o lilas, ¡ese era yo! Pinto el paisaje de la Orinoquía con colores espectaculares. Mis frutos secos parecen pequeñas castañuelas de madera que guardan semillas con 'alas' para volar con el viento.",
        referencias: [
            "Bernal, R. et al. (2015). Catálogo de plantas y líquenes de Colombia.",
            "Gentry, A.H. (1992). Bignoniaceae: Part II (Tribe Tecomeae). Flora Neotropica."
        ],
        quiz: [
            { q: "¿En qué época del año el Gualanday suele mostrar su espectacular floración morada/lila en el Casanare?", opts: ["En el pico de las lluvias torrenciales", "Durante el verano (época seca), muchas veces después de perder sus hojas", "Solo de noche durante el invierno"], correct: 1 },
            { q: "¿Qué forma tienen los frutos secos leñosos del Gualanday?", opts: ["Forma de castañuela aplanada", "Forma de bola perfecta", "Forma de vaina larguísima como un machete"], correct: 0 },
            { q: "¿Cómo se dispersan las semillas del Gualanday?", opts: ["Flotando en el agua (Hidrocoria)", "Llevadas por el viento gracias a sus alas (Anemocoria)", "Comidas por monos (Zoocoria)"], correct: 1 }
        ]
    },
    "oiti": {
        id: "#JBP-14", tipo: "Introducido", nombre: "Oití / Oiticica", cientifico: "Licania tomentosa (Benth.) Fritsch",
        familia: "Chrysobalanaceae", origen: "Introducida (Brasil)", estado: "Preocupación Menor (LC)", exotica: true,
        carbono: 180.0, viajes: 0, imagen_portada: "./imagenes/desconocido.jpg",
        galeria: [
            { img: "./imagenes/desconocido.jpg", desc: "Pendiente de foto en campo" }
        ],
        nombresLocales: ["Oití", "Oiticica", "Licania"],
        distribucion: `
            <p>Especie nativa de la Mata Atlántica de Brasil. Ha sido ampliamente introducida en Colombia como árbol urbano de sombra y ornamental. En Casanare se cultiva en andenes, parques y áreas institucionales debido a su densa copa.</p>
        `,
        densidad: "0.85 g/cm³", fraccion: "0.47 (IPCC)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:10px;">AGB = 0.0673 × (ρ × D² × H)⁰·⁹⁷⁶</div>
            <p class="text-sm">Modelo de <strong>Chave et al. (2014)</strong>. El Oití posee una madera muy densa (0.85 g/cm³), lo que significa que un árbol de Oití almacena mucho más carbono que un árbol de igual tamaño de madera liviana.</p>
        `,
        calendario: [
            { mes: "Ene", fase: "Reposo", clima: "dry" }, { mes: "Feb", fase: "Reposo", clima: "dry" },
            { mes: "Mar", fase: "Floración", clima: "dry" }, { mes: "Abr", fase: "Floración", clima: "rain" },
            { mes: "May", fase: "Fructificación", clima: "rain" }, { mes: "Jun", fase: "Fructificación", clima: "rain" },
            { mes: "Jul", fase: "Maduración", clima: "rain" }, { mes: "Ago", fase: "Maduración", clima: "rain" },
            { mes: "Sep", fase: "Dispersión", clima: "rain" }, { mes: "Oct", fase: "Reposo", clima: "rain" },
            { mes: "Nov", fase: "Reposo", clima: "dry" }, { mes: "Dic", fase: "Reposo", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px;">
                <div><strong style="color:var(--secondary-color);">Porte:</strong> Árbol perennifolio de tamaño medio, de 10 a 20 metros de altura, con una copa extremadamente densa, redondeada y globosa. Tronco oscuro y asimétrico.</div>
                <div><strong style="color:var(--secondary-color);">Hojas:</strong> Simples, alternas, elípticas, verde oscuro brillante en la haz y blanquecinas/tomentosas (con pelillos finos) en el envés.</div>
                <div><strong style="color:var(--secondary-color);">Flores:</strong> Pequeñas, dispuestas en panículas terminales y axilares, de color blanco amarillento o crema, muy sutiles.</div>
                <div><strong style="color:var(--secondary-color);">Frutos:</strong> Drupas carnosas, ovoides o elipsoides, de 4-6 cm de largo, amarillo-verdosas al madurar, con un endocarpio fibroso y duro.</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Aves Urbanas</div><div class="section-val text-sm mt-2">Su follaje hiperdenso ofrece un refugio seguro para la anidación de aves en entornos urbanos y escolares.</div></div>
                <div class="metric-card"><div class="metric-label">Mamíferos e Insectos</div><div class="section-val text-sm mt-2">Frutos consumidos ocasionalmente por murciélagos. Flores visitadas por abejas en busca de néctar.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Arborización Urbana</div><div class="section-val text-sm mt-2">Uso primario en Colombia: excelente sombra para parques y andenes, tolerante a la contaminación urbana.</div></div>
                <div class="metric-card"><div class="metric-label">Industrial (Histórico)</div><div class="section-val text-sm mt-2">En Brasil, el aceite extraído de sus semillas (aceite de oiticica) se usaba para pinturas y barnices por ser de secado rápido.</div></div>
            </div>
        `,
        mensajeIA: "¡Hola! Soy el Oití. Llegué desde Brasil, de los bosques atlánticos. Mírame bien: mi copa es tan tupida y redonda que parece una inmensa bola verde oscuro. Doy una sombra espectacular, oscura y fresca, perfecta para el parque del colegio en los días más ardientes del Casanare. Mi madera es tan densa y pesada que hundo a muchos competidores a la hora de almacenar carbono.",
        referencias: [
            "Bernal, R. et al. (2015). Catálogo de plantas y líquenes de Colombia.",
            "Lorenzi, H. (1992). Árvores Brasileiras: Manual de Identificação e Cultivo de Plantas Arbóreas do Brasil."
        ],
        quiz: [
            { q: "¿De dónde es originario el árbol de Oití (Licania tomentosa)?", opts: ["De la Amazonia colombiana", "De la sabana africana", "De la Mata Atlántica de Brasil"], correct: 2 },
            { q: "¿Por qué el Oití es tan popular en la arborización urbana en Colombia?", opts: ["Porque sus frutos se venden a alto precio en los mercados", "Por su copa extremadamente densa y redondeada que da excelente sombra", "Porque su tronco sirve para postes de luz"], correct: 1 },
            { q: "¿Cómo es el envés (la parte de abajo) de las hojas del Oití?", opts: ["Rojo sangre", "Transparente", "Blanquecino y tomentoso (con vellosidades finas)"], correct: 2 }
        ]
    },
    "noni": {
        id: "#JBP-15", tipo: "Introducido", nombre: "Noni / Mora de la India", cientifico: "Morinda citrifolia L.",
        familia: "Rubiaceae", origen: "Introducida (Sureste Asiático)", estado: "Preocupación Menor (LC)", exotica: true,
        carbono: 12.0, viajes: 0, imagen_portada: "./imagenes/desconocido.jpg",
        galeria: [
            { img: "./imagenes/desconocido.jpg", desc: "Pendiente de foto en campo" }
        ],
        nombresLocales: ["Noni", "Mora de la India", "Guanábana cimarrona"],
        distribucion: `
            <p>Nativo del Sureste Asiático, India y Polinesia. Ha sido dispersado por todo el trópico. En Colombia es una especie introducida y naturalizada, cultivada en huertos caseros y fincas del Casanare por sus usos medicinales.</p>
        `,
        densidad: "0.40 – 0.54 g/cm³", fraccion: "0.47 (IPCC)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:10px;">AGB = 0.0673 × (ρ × D² × H)⁰·⁹⁷⁶</div>
            <p class="text-sm">Ecuación de <strong>Chave et al. (2014)</strong>. Arbusto o árbol pequeño con contribución marginal a la biomasa total del bosque, pero importante culturalmente.</p>
        `,
        calendario: [
            { mes: "Ene", fase: "Continua", clima: "dry" }, { mes: "Feb", fase: "Continua", clima: "dry" },
            { mes: "Mar", fase: "Continua", clima: "dry" }, { mes: "Abr", fase: "Continua", clima: "rain" },
            { mes: "May", fase: "Continua", clima: "rain" }, { mes: "Jun", fase: "Continua", clima: "rain" },
            { mes: "Jul", fase: "Continua", clima: "rain" }, { mes: "Ago", fase: "Continua", clima: "rain" },
            { mes: "Sep", fase: "Continua", clima: "rain" }, { mes: "Oct", fase: "Continua", clima: "rain" },
            { mes: "Nov", fase: "Continua", clima: "dry" }, { mes: "Dic", fase: "Continua", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px;">
                <div><strong style="color:var(--secondary-color);">Porte:</strong> Arbusto grande o arbolito de 3 a 8 metros de altura, con ramas angulosas y copa cónica o irregular.</div>
                <div><strong style="color:var(--secondary-color);">Hojas:</strong> Opuestas, grandes (hasta 25 cm), ovadas o elípticas, de color verde brillante oscuro, muy lustrosas y con venación marcada.</div>
                <div><strong style="color:var(--secondary-color);">Flores:</strong> Pequeñas, tubulares, de color blanco, agrupadas en cabezuelas globosas que crecen en las axilas de las hojas.</div>
                <div><strong style="color:var(--secondary-color);">Frutos:</strong> Sincarpio (fruto compuesto o múltiple), ovoide a globoso, blanco-amarillento al madurar, de consistencia blanda y olor fuerte y muy penetrante (similar a queso añejo o vómito).</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Murciélagos</div><div class="section-val text-sm mt-2">Principal dispersor en su zona de origen y en el trópico. Atraídos por su olor penetrante durante la noche.</div></div>
                <div class="metric-card"><div class="metric-label">Insectos</div><div class="section-val text-sm mt-2">Flores visitadas por abejas. El fruto en descomposición atrae moscas de la fruta y escarabajos.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Medicinal Tradicional</div><div class="section-val text-sm mt-2">Zumo del fruto usado ampliamente como panacea (tónico inmunológico, antiinflamatorio), aunque requiere estudios clínicos en humanos.</div></div>
                <div class="metric-card"><div class="metric-label">Tintes naturales</div><div class="section-val text-sm mt-2">Históricamente en Asia, la raíz se usaba para extraer un tinte rojo y la corteza un tinte amarillo (para batik).</div></div>
            </div>
        `,
        mensajeIA: "¡Hola! Soy el Noni. Vengo de muy lejos, de las islas de la Polinesia. Mis frutos blancos y rugosos no huelen muy bien —¡algunos dicen que huelo a queso rancio!— pero la gente me busca mucho por mis supuestos poderes medicinales. ¿Un secreto botánico fascinante? Mis semillas tienen una pequeña cámara de aire adentro que les permite flotar y viajar por el agua del mar durante meses sin ahogarse.",
        referencias: [
            "Bernal, R. et al. (2015). Catálogo de plantas y líquenes de Colombia.",
            "Morón, F. & Morón, D. (2004). Mito y realidad de Morinda citrifolia L. (noni). Revista Cubana de Plantas Medicinales."
        ],
        quiz: [
            { q: "¿Cómo es el olor característico del fruto maduro del Noni?", opts: ["Huele a vainilla dulce", "Huele fuerte, penetrante, parecido a queso añejo o vómito", "No tiene ningún olor"], correct: 1 },
            { q: "Desde un punto de vista de la biología vegetal, ¿cómo logran las semillas del Noni viajar por corrientes de agua?", opts: ["Tienen aletas como los peces", "Se pegan a la piel de los cocodrilos", "Tienen una cámara de aire interna que les permite flotar meses (hidrocoria)"], correct: 2 },
            { q: "¿De qué región del mundo es originario el Noni?", opts: ["Del desierto del Sahara", "Del Sureste Asiático, India y Polinesia", "Del páramo andino colombiano"], correct: 1 }
        ]
    },
    "palma-real": {
        id: "#JBP-16", tipo: "Introducido", nombre: "Palma Real / Chaguaramo", cientifico: "Roystonea regia (Kunth) O.F.Cook",
        familia: "Arecaceae", origen: "Introducida (Caribe)", estado: "Preocupación Menor (LC)", exotica: true,
        carbono: 135.0, viajes: 0, imagen_portada: "./imagenes/desconocido.jpg",
        galeria: [
            { img: "./imagenes/desconocido.jpg", desc: "Pendiente de foto en campo" }
        ],
        nombresLocales: ["Palma real", "Chaguaramo", "Palmera real"],
        distribucion: `
            <p>Nativa de Cuba, sur de Florida y Centroamérica. Es el árbol nacional de Cuba. En Colombia es una especie introducida y ampliamente naturalizada y cultivada como ornamental en los Llanos, la región Caribe y Andina.</p>
        `,
        densidad: "0.628 – 0.669 g/cm³ (Periferia)", fraccion: "0.47 (IPCC)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:10px;">V = π × (D/2)² × H × f</div>
            <p class="text-sm">Palmeras requieren modelos de biomasa cilíndricos (f ≈ 0.85-0.90). La densidad de su tronco varía: duro en la periferia, suave en el centro.</p>
        `,
        calendario: [
            { mes: "Ene", fase: "Continua", clima: "dry" }, { mes: "Feb", fase: "Continua", clima: "dry" },
            { mes: "Mar", fase: "Continua", clima: "dry" }, { mes: "Abr", fase: "Continua", clima: "rain" },
            { mes: "May", fase: "Continua", clima: "rain" }, { mes: "Jun", fase: "Pico Floración", clima: "rain" },
            { mes: "Jul", fase: "Pico Floración", clima: "rain" }, { mes: "Ago", fase: "Pico Frutos", clima: "rain" },
            { mes: "Sep", fase: "Pico Frutos", clima: "rain" }, { mes: "Oct", fase: "Pico Frutos", clima: "rain" },
            { mes: "Nov", fase: "Continua", clima: "dry" }, { mes: "Dic", fase: "Continua", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px;">
                <div><strong style="color:var(--secondary-color);">Porte:</strong> Palma majestuosa y solitaria que puede alcanzar 20 a 30 metros. Tallo (estípite) grisáceo, liso, ligeramente ensanchado a media altura (fusiforme).</div>
                <div><strong style="color:var(--secondary-color);">Capitel:</strong> En la parte superior del tronco presenta un capitel liso y verde brillante (crownshaft) de hasta 2 metros de largo, formado por las bases envainadoras de las hojas.</div>
                <div><strong style="color:var(--secondary-color);">Hojas:</strong> Pinnadas, enormes (4 a 6 metros de largo), agrupadas en la corona, con los folíolos dispuestos en varios planos, lo que le da un aspecto plumoso.</div>
                <div><strong style="color:var(--secondary-color);">Frutos:</strong> Drupas globosas a elipsoides, purpúreas a negras al madurar (palmiche), abundantes en racimos pesados colgantes justo debajo del capitel verde.</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Aves (Loros y guacamayas)</div><div class="section-val text-sm mt-2">Consumen copiosamente el "palmiche" (frutos) al madurar. Usan el tronco muerto para anidar.</div></div>
                <div class="metric-card"><div class="metric-label">Ganado y Murciélagos</div><div class="section-val text-sm mt-2">El fruto caído es devorado por vacas y cerdos. Murciélagos frugívoros son dispersores.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Ornamental</div><div class="section-val text-sm mt-2">La reina de las palmas ornamentales para avenidas y haciendas por su elegancia simétrica.</div></div>
                <div class="metric-card"><div class="metric-label">Materiales</div><div class="section-val text-sm mt-2">La hoja o vaina ensanchada ("yagua") se usaba en el Caribe para empacar, envolver y techar bohíos campesinos.</div></div>
            </div>
        `,
        mensajeIA: "¡Hola! Soy la Palma Real, y en los llanos de Venezuela me llaman 'Chaguaramo'. Vengo del Caribe y soy el Árbol Nacional de Cuba. Mírame bien, mi tronco parece una columna de mármol pulido y no tengo ramas, solo un penacho de plumas gigantes. La parte verde debajo de mis hojas (el capitel) es como mi cuello, y de ahí nacen racimos gigantes de coquitos oscuros (palmiche) que a los loros y a los cerdos les encantan.",
        referencias: [
            "Galeano, G. & Bernal, R. (2015). Roystonea regia. En Catálogo de plantas y líquenes de Colombia.",
            "López-Galet, S.P. et al. (2017). Caracterización de las propiedades físicas y mecánicas de la palma real. Universidad Industrial de Santander."
        ],
        quiz: [
            { q: "¿Qué nombre recibe el fruto maduro y oscuro de la Palma Real, que es alimento favorito de aves y cerdos?", opts: ["Cacao silvestre", "Palmiche", "Bellota llanera"], correct: 1 },
            { q: "¿Cómo se le llama a la zona lisa y verde brillante que está en la parte superior del tronco, justo debajo de las hojas?", opts: ["Capitel o crownshaft", "Corteza esmeralda", "Nudo fotosintético"], correct: 0 },
            { q: "¿En qué país la Palma Real (Roystonea regia) es considerada oficialmente como el Árbol Nacional?", opts: ["Colombia", "Cuba", "Brasil"], correct: 1 }
        ]
    },
    "saman": {
        id: "#JBP-17", tipo: "Nativo", nombre: "Samán / Campano", cientifico: "Samanea saman (Jacq.) Merr.",
        familia: "Fabaceae", origen: "Nativa", estado: "Preocupación Menor (LC)", exotica: false,
        carbono: 420.0, viajes: 0, imagen_portada: "./imagenes/desconocido.jpg",
        galeria: [
            { img: "./imagenes/desconocido.jpg", desc: "Pendiente de foto en campo" }
        ],
        nombresLocales: ["Samán", "Campano", "Árbol de la Lluvia", "Dormilón", "Cenízaro"],
        distribucion: `
            <p>Nativo del trópico americano, desde México hasta Perú y Brasil. En la Orinoquía colombiana es el árbol silvopastoril por excelencia. Majestuoso en sabanas, potreros y bordes de caño.</p>
        `,
        densidad: "0.46 g/cm³", fraccion: "0.47 (IPCC)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:10px;">ln(BA) = a + b·ln(DAP) + c·ln(ρ)</div>
            <p class="text-sm">Ecuación de <strong>Álvarez et al. (2012)</strong>. Aunque de madera moderadamente liviana, su volumen colosal lo convierte en un 'titán del carbono'. Un árbol maduro puede capturar más de 28 t de CO₂/año.</p>
        `,
        calendario: [
            { mes: "Ene", fase: "Plena floración", clima: "dry" }, { mes: "Feb", fase: "Plena floración", clima: "dry" },
            { mes: "Mar", fase: "Inicio frutos", clima: "dry" }, { mes: "Abr", fase: "Plenos frutos", clima: "rain" },
            { mes: "May", fase: "Plenos frutos", clima: "rain" }, { mes: "Jun", fase: "Plenos frutos", clima: "rain" },
            { mes: "Jul", fase: "Dispersión", clima: "rain" }, { mes: "Ago", fase: "2da Floración", clima: "rain" },
            { mes: "Sep", fase: "2da Floración", clima: "rain" }, { mes: "Oct", fase: "Maduración frutos", clima: "rain" },
            { mes: "Nov", fase: "Caída de frutos", clima: "dry" }, { mes: "Dic", fase: "Inicio caída hojas", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px;">
                <div><strong style="color:var(--secondary-color);">Porte:</strong> Árbol colosal de 15 a 30 m de altura. Su característica más distintiva es su copa en forma de inmenso paraguas o sombrilla, que puede alcanzar hasta 50 m de diámetro. Tronco grueso, corto, con corteza fisurada.</div>
                <div><strong style="color:var(--secondary-color);">Hojas:</strong> Bipinnadas, alternas. Presentan movimientos <strong>nictinásticos</strong>: las hojuelas se pliegan y cierran durante la noche o en días nublados previos a la lluvia.</div>
                <div><strong style="color:var(--secondary-color);">Flores:</strong> Inflorescencias en umbelas (como pequeños pompones o plumeros), con estambres largos de color rosado en la mitad superior y blancos en la base. Muy vistosas.</div>
                <div><strong style="color:var(--secondary-color);">Frutos:</strong> Legumbres (vainas) largas, gruesas y oscuras (negras al madurar), indehiscentes, con una pulpa dulce pegajosa rodeando las semillas.</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Ganado e Invertebrados</div><div class="section-val text-sm mt-2">Vainas ricas en proteína consumidas por ganado vacuno. Cigarras chupan su savia causando "lluvias" de líquido azucarado.</div></div>
                <div class="metric-card"><div class="metric-label">Aves, Abejas y Monos</div><div class="section-val text-sm mt-2">Abejas polinizan sus flores. Loros y monos comen sus vainas. Árbol de anidación preferido para rapaces.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Silvopastoreo</div><div class="section-val text-sm mt-2">El árbol de sombra más valioso de la ganadería llanera. Su copa fresca baja la temperatura hasta 8°C.</div></div>
                <div class="metric-card"><div class="metric-label">Ebanistería y Servicios</div><div class="section-val text-sm mt-2">Madera tipo nogal muy apreciada para muebles. Fija nitrógeno en el suelo gracias a bacterias en sus raíces.</div></div>
            </div>
        `,
        mensajeIA: "¡Hola! Soy el Samán, el gigante protector del llano. ¿Sabes por qué me llaman 'Dormilón' o 'Árbol de la Lluvia'? Porque tengo el poder mágico de plegar mis hojas y 'dormir' cuando se hace de noche o va a llover. Al cerrarlas, dejo que la luz de la luna o las gotas de lluvia caigan al suelo, permitiendo que el pasto crezca bajo mi sombra. En el día me abro como una sombrilla gigante para proteger a las vacas del ardiente sol casanareño. ¡Hasta salgo en la moneda de 500 pesos de Colombia!",
        referencias: [
            "SENA Colombia (s.f.). Las maderas en Colombia, Fascículo 49: Samán.",
            "Pedraza, R.M. et al. (2009). Samanea saman, árbol multipropósito con potencialidades forrajeras."
        ],
        quiz: [
            { q: "¿Cómo se llama el movimiento que hace el Samán al cerrar sus hojas de noche o antes de llover?", opts: ["Fototropismo", "Nictinastia", "Gravitropismo"], correct: 1 },
            { q: "¿Por qué el Samán es el árbol favorito para tener en los potreros ganaderos de la Orinoquía?", opts: ["Porque sus hojas envenenan a las garrapatas", "Porque su inmensa copa da una sombra muy fresca y sus vainas maduras alimentan al ganado", "Porque su madera sirve para postes de cercas eléctricas"], correct: 1 },
            { q: "¿En qué moneda de circulación actual en Colombia aparece grabado el árbol de Samán?", opts: ["En la de 1.000 pesos", "En la de 50 pesos", "En la de 500 pesos"], correct: 2 }
        ]
    }
"""

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content.replace("\n};", new_trees + "\n};"))

print("datos_arboles.js updated.")
