// Archivo de datos educativos - Información sencilla y comprensible para estudiantes
const baseDatosArbolesEducativa = {
    "merecure": {
    id: "#JBP-01", tipo: "Nativo", nombre: "Merecure", cientifico: "Moquilea pyrifolia (Griseb.) R.O.Williams",
    familia: "Chrysobalanaceae", origen: "Nativo Orinoquía — Llanos colombo-venezolanos", estado: "LC — Preocupación Menor (UICN: No Evaluada en Colombia)", exotica: false,
    carbono: 215.4, viajes: 78, imagen_portada: "./imagenes/merecure1.jpeg",
    galeria: [
        { img: "./imagenes/merecure1.jpeg", desc: "Imagen Merecure" },
        { img: "./imagenes/merecures.jpeg", desc: "Varios Merecures" },
        { img: "./imagenes/merecure2.jpeg", desc: "Corteza del árbol" },
        { img: "./imagenes/merecure3.jpeg", desc: "Vista inferior" },
        { img: "./imagenes/merecure4.jpeg", desc: "Hojas" },
        { img: "./imagenes/merecure5.jpeg", desc: "Corteza" },
        { img: "./imagenes/merecure6.jpeg", desc: "Fruto Seco" },
        { img: "./imagenes/merecure7.jpeg", desc: "Flores" },
        { img: "./imagenes/merecure8.jpeg", desc: "Frutos" },
        { img: "./imagenes/merecure9.jpeg", desc: "Tronco" }
    ],
    nombresLocales: ["Merecure", "Querebere", "Merecurito (juveniles)", "Árbol del Llano", "Merecure plateado"],
    distribucion: `
        <p><strong>Árbol emblemático de los Llanos:</strong> El Merecure es un árbol que nació en estas tierras. Crece desde las islas del Caribe (como Trinidad) hasta los llanos de Colombia y Venezuela, especialmente cerca de los ríos Orinoco y Meta. En Casanare lo encuentras en los bosques que bordean los ríos (bosques de galería), en las matas de monte y en las sabanas que se inundan en invierno. Es tan importante para el paisaje llanero que en Venezuela lo declararon símbolo natural del estado Apure.</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Familia</td><td style="padding:6px;">Chrysobalanaceae (una familia pequeña de árboles tropicales)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Nombre científico</td><td style="padding:6px;"><em>Moquilea pyrifolia</em> (antes se llamaba <em>Licania pyrifolia</em>)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué significa su nombre?</td><td style="padding:6px;"><em>pyrifolia</em> = "hojas de peral", porque sus hojas se parecen a las del árbol de pera</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Dónde vive?</td><td style="padding:6px;">Bosques de galería, matas de monte y sabanas inundables de la Orinoquía</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Estado de conservación</td><td style="padding:6px;">✅ Preocupación Menor — no está en peligro, pero hay que cuidarlo</td></tr>
            </table>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🌎 Dato curioso:</strong> El Merecure es tan querido en los llanos que los músicos le pusieron su nombre a un golpe de joropo. ¡Es el único árbol de Colombia que tiene su propia canción!
        </div>
    `,
    densidad: "Madera pesada y dura (0.65 – 0.80 g/cm³) — requiere medición local", fraccion: "Aproximadamente la mitad de su peso es carbono (0.47 – 0.50)",
    alometria: `
        <div class="warn-box" style="font-size:0.85rem; border-left:4px solid #f39c12; padding-left:12px; margin-bottom:15px; color:var(--text-main);">
            ⚠️ <strong>¿Cómo medimos el carbono del Merecure?</strong> Para saber cuánto carbono guarda un árbol, los científicos usan fórmulas matemáticas llamadas <em>ecuaciones alométricas</em>. Estas fórmulas usan el grosor del tronco (DAP) y la altura del árbol. Para el Merecure, aún no tenemos el dato exacto de qué tan pesada es su madera en Casanare, por eso ese valor lo mediremos directamente en el campo con los árboles del JBP.
        </div>
        <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
            Biomasa = f(grosor del tronco, altura, densidad de la madera)
        </div>
        <p class="text-sm"><strong>¿Por qué importa esto?</strong> Porque los árboles son como esponjas gigantes que atrapan el dióxido de carbono (CO₂) del aire y lo guardan en su madera. Mientras más grande y pesado sea el árbol, más carbono guarda. El Merecure, con su madera dura y su copa grande, es un excelente guardián del clima.</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué medimos en campo?</td><td style="padding:6px;">Grosor del tronco a 1.30 m del suelo (DAP) y altura total del árbol</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué calculamos?</td><td style="padding:6px;">Cuántos kilos de carbono tiene guardado ese árbol</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Por qué?</td><td style="padding:6px;">Para saber cuánto ayuda el JBP a combatir el cambio climático</td></tr>
            </table>
        </div>
    `,
    calendario: [
        { mes: "Dic", fase: "Floración 🌸", clima: "dry" },
        { mes: "Ene", fase: "Floración 🌸", clima: "dry" },
        { mes: "Feb", fase: "Empiezan a formarse los frutos 🟢", clima: "dry" },
        { mes: "Mar", fase: "Frutos pequeños 🟢", clima: "dry" },
        { mes: "Abr", fase: "Frutos creciendo 🍇", clima: "rain" },
        { mes: "May", fase: "Frutos madurando 🍇", clima: "rain" },
        { mes: "Jun", fase: "¡Cosecha máxima! Frutos listos 🍇", clima: "rain" },
        { mes: "Jul", fase: "Los frutos caen y los animales los comen 🍇", clima: "rain" },
        { mes: "Ago", fase: "Dispersión de semillas 🍇", clima: "rain" },
        { mes: "Sep", fase: "Brotes nuevos 🌱", clima: "rain" },
        { mes: "Oct", fase: "El árbol crece activamente 🍃", clima: "rain" },
        { mes: "Nov", fase: "Se prepara para florecer de nuevo 🌸", clima: "dry" }
    ],
    morfologia: `
        <div style="display:flex; flex-direction:column; gap:15px; font-size:0.95rem;">
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-tree"></i> ¿Cómo es el Merecure?</strong> Es un árbol de tamaño mediano (10 a 15 metros de alto), con una copa redondeada y muy frondosa que da una sombra fresquísima. Siempre tiene hojas verdes (es perennifolio), así que nunca lo verás pelado. Crece despacio pero vive muchísimos años.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-seedling"></i> Sus raíces:</strong> Tiene una raíz principal que se hunde profundo en la tierra, como un ancla, y otras raíces que se extienden a los lados. Esto le permite aguantar tanto las inundaciones del invierno como la sequía del verano.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-folder-open"></i> Su tronco y madera:</strong> El tronco es corto y se ramifica bajito. La corteza es grisácea. Su madera es pesada, dura y muy resistente, con vetas de color rojizo oscuro. Por eso los llaneros la usan para hacer postes y horcones que duran décadas.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-leaf"></i> Sus hojas:</strong> Son simples, de forma ovalada, con el haz (parte de arriba) verde brillante y el envés (parte de abajo) lanosito. Se parecen a las hojas del peral —de ahí viene su nombre científico <em>pyrifolia</em>.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-spa"></i> Sus flores:</strong> Son pequeñitas, blancas y muy fragantes. Aparecen en la época seca (diciembre-enero) y atraen a muchos insectos polinizadores.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-circle-notch"></i> Sus frutos:</strong> Son grandes (hasta 11 cm de largo), con cáscara verrugosa. Adentro tienen una pulpa amarilla, cremosa y sabrosa, con una semilla grande. Cuando maduran, caen al suelo y los animales —y los niños— los recogen con alegría.</div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>📌 Para identificarlo en campo:</strong> Busca un árbol de copa redondeada, hojas que parecen de peral, frutos grandes con cáscara verrugosa y madera dura con vetas rojizas.
        </div>
    `,
    fauna: `
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card"><div class="metric-label">🦜 Aves del llano</div><div class="section-val text-sm mt-2">Loros, cotorras, carpinteros y tangaras visitan el Merecure. Usan su copa densa para descansar y hacer nidos, y comen sus frutos carnosos. Las flores blancas atraen insectos que también sirven de alimento a las aves.</div></div>
            <div class="metric-card"><div class="metric-label">🐗 Mamíferos silvestres</div><div class="section-val text-sm mt-2">Chigüiros, venados, báquiros (pecaríes) y roedores comen los frutos que caen al suelo. Son los encargados de dispersar las semillas y ayudar a que nazcan nuevos Merecures.</div></div>
            <div class="metric-card"><div class="metric-label">🐄 Ganado</div><div class="section-val text-sm mt-2">Las vacas también disfrutan los merecures caídos en los potreros. Los frutos tienen una sustancia harinosa que les sirve de alimento complementario, especialmente en verano cuando escasea el pasto.</div></div>
            <div class="metric-card"><div class="metric-label">🐝 Insectos</div><div class="section-val text-sm mt-2">Abejas, mariposas y otros insectos visitan las flores blancas y fragantes para tomar néctar. Así ayudan a polinizar el árbol y mantener la biodiversidad del llano.</div></div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🔬 El Merecure es un árbol "nodal":</strong> Esto significa que conecta a muchos animales en la red de la vida del llano. Sin él, muchas especies tendrían menos alimento y refugio.
        </div>
    `,
    usos: `
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card"><div class="metric-label">🏗️ Carpintería y construcciones</div><div class="section-val text-sm mt-2">Su madera es tan dura y resistente que los llaneros la usan para hacer horcones de cercas, postes, columnas de casas y mangos de herramientas. Un poste de Merecure enterrado en la tierra puede durar décadas sin pudrirse.</div></div>
            <div class="metric-card"><div class="metric-label">🌳 Sombra para el ganado</div><div class="section-val text-sm mt-2">Su copa redondeada y siempre verde da una sombra fresquísima. Los ganaderos lo plantan en los potreros para que las vacas descansen del sol caliente del verano.</div></div>
            <div class="metric-card"><div class="metric-label">🍎 Fruto comestible</div><div class="section-val text-sm mt-2">Los frutos se pueden comer frescos, en jugos, dulces o helados. Los niños llaneros los recogen del suelo como si fueran mangos. Las comunidades indígenas los procesaban para hacer harina y bebidas.</div></div>
            <div class="metric-card"><div class="metric-label">🩺 Medicina tradicional</div><div class="section-val text-sm mt-2">En la medicina popular del llano, el fruto se usa como laxante suave. La corteza tiene compuestos que ayudan a cicatrizar heridas. La ciencia ha confirmado que contiene sustancias que pueden controlar caracoles dañinos para los cultivos.</div></div>
            <div class="metric-card"><div class="metric-label">🎵 Música y cultura llanera</div><div class="section-val text-sm mt-2">El "Merecure" es también el nombre de un golpe de joropo llanero, creado por el músico Pedro Francisco Vivas hace más de 100 años. El compositor René Devia le dedicó una canción: <em>"El canto de los petises siempre me hace recordar, el merecure plateado, las flores del morichal"</em>.</div></div>
            <div class="metric-card"><div class="metric-label">🗣️ Dichos populares</div><div class="section-val text-sm mt-2">Los niños llaneros tienen un dicho para cuando recogen los frutos caídos: <em>"¡Conmigo es: palos pa' lo alto, merecures pa'l suelo y chinos a recoger!"</em> — una tradición que pasa de generación en generación.</div></div>
        </div>
    `,
    mensajeIA: "🌳 ¡Hola, pariente llanero! Soy el Merecure... y tengo un secreto que te va a sorprender.\n\nSoy un árbol viejo, muy viejo. Mis raíces llevan siglos abrazando esta tierra llanera de Casanare, bebiendo el agua que sube cuando los ríos se desbordan y resistiendo, quieto y firme, el sol que quema en los meses de verano. Me llaman Merecure, aunque también me conocen como Querebere, según el pueblo y la región.\n\nMi copa es redonda y frondosa como un gran paraguas verde. Bajo ella descansan el vaquero, el chigüiro y las aves que vienen a comer mis frutos. Y aquí está mi gran secreto que muy pocos conocen: ¡mis frutos son tan importantes que hasta un golpe del joropo lleva mi nombre! Sí, el 'merecure' es una melodía que los músicos llaneros tocan con arpa, cuatro y maracas para celebrar la vida en el llano. Imagínate: soy el único árbol en Colombia que tiene su propia canción de joropo. ¿Conoces otro árbol que pueda decir lo mismo?\n\nLos niños me conocen por el dicho: <em>'¡Conmigo es: palos pa' lo alto, merecures pa'l suelo y chinos a recoger!'</em> Yo no crezco rápido, pero soy de los más longevos del llano. La paciencia, me dice el viento, es la sabiduría más grande de la sabana.",
    referencias: [
        "Álvarez, E., Duque, A., Saldarriaga, J. G., Cabrera, K., De las Salas, G., Del Valle, J. I., Moreno, F., Orrego, S. A., & Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. Forest Ecology and Management, 267, 297–308. https://doi.org/10.1016/j.foreco.2011.11.013",
        "Acero Duarte, L. E. (2005). Plantas útiles de la cuenca del Orinoco. BP Exploration Company (Colombia) Limited; Ecopetrol; Corporinoquia.",
        "Braca, A., Bilia, A. R., Mendez, J., Pizza, C., Morelli, I., & De Tommasi, N. (2003). Chemical and biological studies on Licania genus. En Studies in Natural Products Chemistry (Vol. 28, pp. 35–67). Elsevier. https://doi.org/10.1016/S1572-5995(03)80004-3",
        "Forero, E., & Romero, C. (Eds.). (1990). Flora de Colombia: Chrysobalanaceae. Instituto de Ciencias Naturales, Universidad Nacional de Colombia; Instituto Colombiano para el Fomento de la Educación Superior (ICFES). http://www.biovirtual.unal.edu.co/floradecolombia/es/description/795/",
        "Hoyos F., J. (1983). Guía de árboles de Venezuela (Monografía N° 32, pp. 282–283). Fundación La Salle de Ciencias Naturales.",
        "Prance, G. T., & Sothers, C. A. (2003). Chrysobalanaceae 1, Chrysobalanus to Parinari. Species Plantarum: Flora of the World, Part 9 (pp. 1–319). Australian Biological Resources Study. http://speciesplantarum.net/published-volumes-species-plantarum-flora-world",
        "Sothers, C. A., Prance, G. T., & Chase, M. W. (2019). A new name in Moquilea (Chrysobalanaceae). Kew Bulletin, 74(4), 58. https://doi.org/10.1007/s12225-019-9835-0",
        "Yepes, A. P., Navarrete, D. A., Duque, A. J., Phillips, J. F., Cabrera, K. R., Álvarez, E., García, M. C., & Ordóñez, M. F. (2011). Protocolo para la estimación nacional y subnacional de biomasa-carbono en Colombia. Instituto de Hidrología, Meteorología y Estudios Ambientales – IDEAM.",
        "Autoridad Nacional de Licencias Ambientales – ANLA. (2024). Valores de referencia del potencial de carbono almacenado en coberturas de la tierra licenciadas por ANLA. Ministerio de Ambiente y Desarrollo Sostenible de Colombia. https://www.anla.gov.co/images/documentos/manuales/2024-03-14-anla-VRPCA-areas-lic-ANLA.pdf"
    ],
    quiz: [
        { q: "¿A qué familia botánica pertenece el Merecure?", opts: ["Fabaceae (leguminosas)", "Moraceae (moreras y ficus)", "Chrysobalanaceae (crisobalanáceas)", "Myrtaceae (guayabos y arrayanes)"], correct: 2, expl: "El Merecure pertenece a la familia Chrysobalanaceae, una familia pequeña de árboles tropicales. Es una familia menos conocida pero muy importante en los bosques de galería de la Orinoquía." },
        { q: "¿Cómo es la madera del Merecure?", opts: ["Liviana, blanda y de fácil deterioro", "De crecimiento rápido y color blanco brillante", "Pesada, dura, fuerte y duradera, con vetas de goma rojiza", "No tiene ningún uso porque es tóxica"], correct: 2, expl: "La madera del Merecure es muy apreciada en el llano por su resistencia y durabilidad. Un poste hecho con esta madera puede durar décadas enterrado en la tierra sin pudrirse." },
        { q: "¿Por qué el Merecure es tan valioso para la fauna del llano?", opts: ["Porque sus raíces producen miel que consumen las abejas", "Porque sus flores son tan grandes que sirven de refugio para aves rapaces", "Porque siempre tiene hojas verdes (es perennifolio), da sombra todo el año y sus frutos alimentan a animales y ganado durante todo el año", "Porque atrae lluvia con sus hojas y por eso se planta en los cultivos"], correct: 2, expl: "El Merecure nunca pierde sus hojas, así que siempre ofrece sombra y refugio. Sus frutos son alimento importante para chigüiros, venados, aves y hasta para el ganado en verano." },
        { q: "¿Qué relación especial tiene el Merecure con la música llanera?", opts: ["Su madera se usa para tallar las mejores arpas llaneras", "Su nombre dio origen a un golpe musical tradicional del joropo llanero", "Sus hojas se usan para fabricar las maracas del baile", "Su fruto es el ingrediente principal de la chicha llanera"], correct: 1, expl: "El 'Merecure' es uno de los golpes clásicos del joropo llanero, creado por el músico Pedro Francisco Vivas entre 1900-1910. ¡Es el único árbol en Colombia que tiene su propia canción!" },
        { q: "¿Cuál es el dicho popular llanero que recuerda la recolección de los frutos del Merecure?", opts: ["\"Conmigo es: palos pa' lo alto, merecures pa'l suelo y chinos a recoger\"", "\"Merecure plateado, flores del morichal\"", "\"El que siembra en sabana, recoge en la vega\"", "\"Árbol que da fruto, no se corta\""], correct: 0, expl: "Este dicho refleja la tradición de los niños llaneros recogiendo los frutos caídos del Merecure. Los frutos son comestibles y saben muy bien, así que los niños los recogen con alegría." }
    ]
},

"jambolan": {
    id: "#JBP-02", tipo: "Frutal / Exótica", nombre: "Jambolán", cientifico: "Syzygium cumini (L.) Skeels",
    familia: "Myrtaceae", origen: "Exótica introducida — Indo-Malaya (India y Sudeste Asiático)", estado: "No Evaluada (NE) en Colombia / Globalmente no amenazada — Potencial invasor", exotica: true,
    carbono: 150.8, viajes: 55, imagen_portada: "./imagenes/Jambolán.jpeg",
    galeria: [
        { img: "./imagenes/Jambolán.jpeg", desc: "" },
        { img: "./imagenes/jambolan1.jpeg", desc: "" },
        { img: "./imagenes/jambolan2.jpeg", desc: "" },
        { img: "./imagenes/jambolan3.jpeg", desc: "" },
        { img: "./imagenes/jambolan4.jpeg", desc: "" },
        { img: "./imagenes/jambolan5.jpeg", desc: "" },
        { img: "./imagenes/jambolan6.jpeg", desc: "" },
        { img: "./imagenes/jambolan7.jpeg", desc: "" },
        { img: "./imagenes/jambolan8.jpeg", desc: "" },
        { img: "./imagenes/jambolan9.jpeg", desc: "" }
        
    ],
    nombresLocales: ["Uvito", "Jambolán", "Ciruela de Java", "Uva mora", "Guayabo Pesgua", "Java Plum", "Jamun", "Black Plum", "Malabar Plum"],
    distribucion: `
        <p><strong>Árbol viajero desde la India:</strong> El Jambolán no nació en Colombia. Es originario de la India y el Sudeste Asiático, donde ha sido cultivado por miles de años. Llegó a América tropical para ser usado como árbol frutal y ornamental. En Colombia está registrado como especie <strong>Cultivada</strong> en departamentos como Cesar, Cundinamarca y Valle del Cauca. En Maní (Casanare), lo encuentras en patios, potreros y fincas, pero siempre porque alguien lo plantó —no crece de forma natural aquí.</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Familia</td><td style="padding:6px;">Myrtaceae (la misma familia de la guayaba y el clavo de olor)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Nombre científico</td><td style="padding:6px;"><em>Syzygium cumini</em> (antes se llamaba <em>Eugenia jambolana</em>)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué significa su nombre?</td><td style="padding:6px;"><em>Syzygium</em> = "unidos en pares" (por sus hojas opuestas); <em>cumini</em> = "comino" (por el olor de sus hojas)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿De dónde viene?</td><td style="padding:6px;">India y Sudeste Asiático — introducido en Colombia</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Estado en Colombia</td><td style="padding:6px;">⚠️ Especie cultivada, no nativa — con potencial invasor</td></tr>
            </table>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid #e74c3c; padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🚨 ALERTA IMPORTANTE:</strong> El Jambolán <strong>NO es nativo</strong> de Colombia ni de la Orinoquía. Fue traído por humanos. En algunos lugares del mundo (como Florida, Brasil y islas del Pacífico) se ha vuelto invasor, desplazando plantas nativas. En Maní debemos vigilar que no se propague hacia bosques de galería o morichales donde podría hacer daño.
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🌎 Dato curioso:</strong> El Jambolán puede vivir más de 100 años y alcanzar hasta 30 metros de altura en su tierra natal. En la India es un árbol sagrado y sus frutos se mencionan en textos antiguos de medicina tradicional.
        </div>
    `,
    densidad: "0.56 g/cm³ (madera de densidad media; USDA Forest Service, 2021)", fraccion: "Aproximadamente la mitad de su peso es carbono (0.47 – 0.50)",
    alometria: `
        <div class="warn-box" style="font-size:0.85rem; border-left:4px solid #f39c12; padding-left:12px; margin-bottom:15px; color:var(--text-main);">
            ⚠️ <strong>¿Cómo medimos el carbono del Jambolán?</strong> El valor de densidad de madera (0.56 g/cm³) viene de mediciones hechas fuera de Colombia. Para el JBP de Maní, sería ideal medir directamente la madera de nuestros árboles, porque el clima y el suelo de Casanare pueden hacer que la madera sea un poco diferente. Como es una especie que crece rápido, su madera no es tan densa como la de árboles nativos como el Cañaguate, así que guarda menos carbono por metro cúbico.
        </div>
        <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
            Biomasa = f(grosor del tronco, altura, densidad de la madera)
        </div>
        <p class="text-sm"><strong>¿Por qué importa esto?</strong> Porque los árboles son como esponjas gigantes que atrapan el dióxido de carbono (CO₂) del aire y lo guardan en su madera. Mientras más grande y pesado sea el árbol, más carbono guarda. El Jambolán, al ser de madera media, guarda una cantidad moderada de carbono —menos que los árboles de madera muy dura, pero sigue siendo valioso para combatir el cambio climático.</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué medimos en campo?</td><td style="padding:6px;">Grosor del tronco a 1.30 m del suelo (DAP) y altura total del árbol</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué calculamos?</td><td style="padding:6px;">Cuántos kilos de carbono tiene guardado ese árbol</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Por qué?</td><td style="padding:6px;">Para saber cuánto ayuda el JBP a combatir el cambio climático</td></tr>
            </table>
        </div>
    `,
    calendario: [
        { mes: "Dic", fase: "El árbol descansa y se prepara 🌱", clima: "dry" },
        { mes: "Ene", fase: "Brotes nuevos de color rojizo-cobre 🌱", clima: "dry" },
        { mes: "Feb", fase: "Acumula energía para florecer 🌱", clima: "dry" },
        { mes: "Mar", fase: "¡Floración plena! 🌸", clima: "dry" },
        { mes: "Abr", fase: "Floración y polinización 🌸🐝", clima: "rain" },
        { mes: "May", fase: "Empiezan a formarse los frutos 🟢", clima: "rain" },
        { mes: "Jun", fase: "Frutos creciendo 🟢", clima: "rain" },
        { mes: "Jul", fase: "¡Frutos madurando! 🍇", clima: "rain" },
        { mes: "Ago", fase: "Cosecha y caída de frutos 🍇", clima: "rain" },
        { mes: "Sep", fase: "Las semillas se dispersan 🍇", clima: "rain" },
        { mes: "Oct", fase: "El árbol crece activamente 🍃", clima: "rain" },
        { mes: "Nov", fase: "Sigue creciendo 🍃", clima: "dry" }
    ],
    morfologia: `
        <div style="display:flex; flex-direction:column; gap:15px; font-size:0.95rem;">
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-tree"></i> ¿Cómo es el Jambolán?</strong> Es un árbol siempreverde (nunca pierde todas sus hojas) que crece rápido y puede vivir más de 100 años. Alcanza entre 6 y 20 metros de altura, con una copa redondeada y muy ramificada que da buena sombra. El tronco es corto y robusto, con corteza gruesa de color castaño o gris oscuro.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-seedling"></i> Sus raíces:</strong> Tiene una raíz principal que se hunde profundo en la tierra, como un ancla, y otras raíces que se extienden a los lados. Esto le permite aguantar tanto la sequía como inundaciones cortas. Prefiere suelos bien drenados pero se adapta a muchos tipos de suelo.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-folder-open"></i> Su tronco y madera:</strong> Las ramas jóvenes son lisas y de color blanquecino o grisáceo. La madera es resistente y apreciada en su tierra natal para hacer vigas de techo y durmientes de ferrocarril. En Colombia no se usa mucho para construcción, pero sirve para leña y carbón de buena calidad.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-leaf"></i> Sus hojas:</strong> Son opuestas (crecen de dos en dos), de forma alargada, con el haz (parte de arriba) verde brillante y el envés (parte de abajo) verde-amarillento mate. <strong>Un detalle especial:</strong> cuando el árbol saca hojas nuevas, estas son de color rojizo-cobre, lo que le da un aspecto muy bonito. Si frotas las hojas, huelen un poco a comino.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-spa"></i> Sus flores:</strong> Son pequeñitas, de color verde-amarillento o blanco, agrupadas en racimos. Tienen muchos estambres blancos que parecen una "borla" o pompón. Son fragantes y atraen a muchas abejas, mariposas y moscas florales. Florecen en marzo-abril, cuando empieza el invierno.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-circle-notch"></i> Sus frutos:</strong> Son bayas alargadas, de 1.5 a 3.5 cm de largo. Cambian de color mientras maduran: primero son verdes, luego rosados, después rojos y finalmente <strong>negro-morados intensos</strong>. <strong>El dato más divertido:</strong> cuando los comes, te colorean la lengua de morado durante horas, ¡y no hay forma de evitarlo! Son dulces, un poco ácidos y astringentes. Tienen mucha vitamina C, hierro y antioxidantes.</div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>📌 Para identificarlo en campo:</strong> Busca un árbol siempreverde de copa densa, hojas opuestas con brotes nuevos rojizos, y frutos que colorean la lengua de morado. Si ves un árbol así en Maní, ¡seguro es un Jambolán!
        </div>
    `,
    fauna: `
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card"><div class="metric-label">🦜 Aves frugívoras</div><div class="section-val text-sm mt-2">Loros, cotorras, tángaras, turpiales y toches comen los frutos con avidez. El follaje denso les sirve de refugio y sitio para hacer nidos. Estas aves también ayudan a dispersar las semillas —lo cual puede ser bueno o malo, dependiendo de dónde caigan.</div></div>
            <div class="metric-card"><div class="metric-label">🦇 Murciélagos frugívoros</div><div class="section-val text-sm mt-2">Comen los frutos maduros por la noche y dispersan las semillas a largas distancias. Son los principales responsables de que el Jambolán pueda volverse invasor si se escapa de los patios hacia los bosques naturales.</div></div>
            <div class="metric-card"><div class="metric-label">🐝 Insectos polinizadores</div><div class="section-val text-sm mt-2">Abejas, mariposas y moscas florales visitan las flores para tomar néctar y polen. El Jambolán es muy atractivo para las abejas, lo que lo hace interesante para la apicultura en Casanare.</div></div>
            <div class="metric-card"><div class="metric-label">🐗 Fauna terrestre</div><div class="section-val text-sm mt-2">Chigüiros, venados y pecaríes comen las bayas que caen al suelo. Son nutritivas y les sirven de alimento en época de cosecha.</div></div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid #e74c3c; padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>⚠️ Riesgo de dispersión invasora:</strong> Las aves y murciélagos pueden llevar las semillas del Jambolán hacia bosques de galería, morichales y otras áreas naturales. Si esto pasa, el árbol podría competir con las plantas nativas y desplazarlas. Por eso es importante vigilar que no se propague sin control en el JBP de Maní.
        </div>
    `,
    usos: `
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card"><div class="metric-label">🥤 Alimentación y gastronomía</div><div class="section-val text-sm mt-2">Los frutos se comen frescos (como "uvito" o "uva mora") o se procesan en salsas, mermeladas, jaleas y tartas. En Asia los fermentan para hacer vinos, licores y vinagre. Son muy nutritivos: tienen mucho hierro, vitaminas A, B y C, magnesio, fósforo, potasio y fibra. En Colombia se consumen frescos en época de cosecha.</div></div>
            <div class="metric-card"><div class="metric-label">🌿 Medicina tradicional (antidiabética)</div><div class="section-val text-sm mt-2">En la medicina popular se usa para tratar la diabetes porque ayuda a reducir el azúcar en la sangre. También se usa como astringente, para fortalecer dientes y encías, eliminar parásitos y tratar problemas urinarios. La ciencia moderna ha confirmado que tiene propiedades antioxidantes y antivirales.</div></div>
            <div class="metric-card"><div class="metric-label">🔥 Madera y energía</div><div class="section-val text-sm mt-2">La madera es muy apreciada para leña y carbón de alta calidad. En la Universidad del Atlántico han investigado cómo hacer carbón vegetal con esta madera para usarlo como combustible alternativo. También sirve para vigas de techo, postes y cercas.</div></div>
            <div class="metric-card"><div class="metric-label">🐄 Forraje y veterinaria</div><div class="section-val text-sm mt-2">Las hojas se pueden dar como alimento al ganado. Estudios han demostrado que los extractos de la planta combaten bacterias que causan mastitis en las vacas, lo que abre posibilidades para usarla en medicina veterinaria rural en Casanare.</div></div>
            <div class="metric-card"><div class="metric-label">🌳 Ornamental y sombra</div><div class="section-val text-sm mt-2">Es un árbol muy bonito para parques, avenidas y jardines. Su copa densa da buena sombra, y los brotes nuevos de color rojizo-cobre le dan un aspecto muy atractivo. Se adapta a muchos tipos de clima y suelo, desde el nivel del mar hasta los 2.400 metros de altura.</div></div>
        </div>
    `,
    mensajeIA: `🍇 <strong>¡Hola, pariente llanero! Soy el Uvito... y tengo un secreto que te va a sorprender</strong><br><br>
Soy un viajero. Llegué desde muy, muy lejos: desde la India, ese país enorme y antiguo al otro lado del mundo, donde ríos sagrados como el Ganges bañan mis raíces y donde por miles de años los niños corrían a comer mis frutos morados bajo el sol de verano. Me llaman <em>Jamun</em> en hindi, <em>Jambolán</em> en español, y aquí en los llanos de Casanare me conocen como <em>Uvito</em> o <em>Uva mora</em>. Mi nombre científico es <em>Syzygium cumini</em>, y pertenezco a la gran familia de las Myrtaceae, la misma de la guayaba y el clavo de olor.<br><br>
<strong>Tengo un secreto que te va a sorprender: ¡mis frutos colorean la lengua de morado durante horas y no hay manera de evitarlo!</strong> Es porque tengo tantísimas antocianinas —esos pigmentos morados— que incluso se usan para teñir telas y alimentos naturales. Pero ese mismo color morado que mancha es el que me hace especial: es la señal de que estoy lleno de hierro, vitaminas y antioxidantes que cuidan la salud humana. Los médicos tradicionales de India me usan desde hace siglos para tratar la diabetes, y la ciencia moderna ha comprobado que tienen razón. ¿Sabías que en un laboratorio de Colombia descubrieron que mis extractos pueden combatir las bacterias que enferman al ganado? Soy un árbol viajero y científico, dos cosas a la vez. Y ahora soy tuyo, aquí en Maní.<br><br>
⚠️ <strong>Pero debo ser honesto contigo</strong>: no soy nativo de esta tierra. Llegué aquí porque alguien me trajo. Si me plantas en tu finca, disfruta mis frutos, pero vigila que mis semillas no se vayan a dispersar hacia los bosques de galería o los morichales, donde podría competir con los árboles que sí nacieron aquí. La belleza y la utilidad deben ir de la mano con el respeto por la naturaleza nativa.<br><br>
¿Me plantarías en tu patio? Si lo haces, que sea con conocimiento y responsabilidad. Soy un árbol que puede dar mucho... pero también puede hacer daño si no se maneja con cuidado.`,
    referencias: [
        "Álvarez, E., Duque, A., Saldarriaga, J. G., Cabrera, K., De las Salas, G., Del Valle, J. I., Moreno, F., Orrego, S. A., & Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. Forest Ecology and Management, 267, 297–308. https://doi.org/10.1016/j.foreco.2011.11.013",
        "Bernal, R., Gradstein, S. R., & Celis, M. (Eds.). (2015). Catálogo de plantas y líquenes de Colombia. Instituto de Ciencias Naturales, Universidad Nacional de Colombia. http://catalogoplantasdecolombia.unal.edu.co/es/resultados/especie/Syzygium%20cumini/",
        "Royal Botanic Gardens, Kew. (2024). Syzygium cumini (L.) Skeels. En Plants of the World Online. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:601603-1",
        "U.S. Department of Agriculture, Forest Service. (2021). Understanding i-Tree – Appendix 11: Wood Density Values (Gen. Tech. Rep. GTR-NRS-200-2021, Appendix 11). Northern Research Station. https://www.fs.usda.gov/nrs/pubs/gtr/gtr-nrs200-2021_appendixes/gtr_nrs200-2021_appendix11.pdf",
        "Yepes, A. P., Navarrete, D. A., Duque, A. J., Phillips, J. F., Cabrera, K. R., Álvarez, E., García, M. C., & Ordóñez, M. F. (2011). Protocolo para la estimación nacional y subnacional de biomasa-carbono en Colombia. Instituto de Hidrología, Meteorología y Estudios Ambientales – IDEAM.",
        "Wikipedia contributors. (2025, abril). Syzygium cumini. En Wikipedia, The Free Encyclopedia. Wikimedia Foundation. https://en.wikipedia.org/wiki/Syzygium_cumini [Consultada: abril de 2025. Usar exclusivamente como fuente complementaria de divulgación, nunca como fuente primaria de datos técnicos].",
        "[Autores no identificados]. (s.f.). Actividad antibacteriana de los extractos de Syzygium cumini (L.) Skeels (jambolán) frente a los microorganismos asociados a la mastitis bovina. Revista Cubana de Plantas Medicinales. http://revplantasmedicinales.sld.cu/index.php/pla/article/view/74/31 [Verificar autoría completa y año en fuente primaria].",
        "González Zambrano, E. F., & Torres Ibarra, J. (s.f.). Obtención de carbón vegetal a partir de la madera del árbol de uva mora (Syzygium cumini), con el fin de utilizarlo como combustible alternativo [Trabajo de grado]. Universidad del Atlántico, Biblioteca Central Orlando Fals Borda. [Documento físico institucional. Consultar en Biblioteca Universidad del Atlántico, Barranquilla, Colombia]."
    ],
    quiz: [
        { q: "¿Cuál es el origen geográfico nativo de Syzygium cumini (Uvito / Jambolán)?", opts: ["Nativo de los Llanos Orientales de Colombia y Venezuela", "Nativo de la Amazonía brasileña y peruana", "Nativo del subcontinente indio y del Sudeste Asiático; introducido y naturalizado en Colombia", "Nativo de África tropical subsahariana"], correct: 2, expl: "El Jambolán es originario de la India y el Sudeste Asiático. Llegó a Colombia como especie cultivada, no de forma natural. Por eso es importante saber que no es nativo de nuestra región." },
        { q: "¿Cuál es la característica más llamativa y diagnóstica del fruto maduro del Uvito que cualquier persona puede observar al comerlo?", opts: ["El fruto explota al tocarlo y lanza sus semillas a distancia", "El fruto tiene espinas que deben retirarse antes de comer", "El fruto maduro tiene un jugo morado-negro que colorea la lengua de ese color durante varias horas", "El fruto emite un olor muy fuerte que puede oírse desde lejos"], correct: 2, expl: "El jugo morado del Jambolán contiene tantísimas antocianinas (pigmentos naturales) que tiñen la lengua durante horas. Este es el rasgo más fácil para identificar el árbol: si ves a alguien con la lengua morada después de comer frutos, ¡seguro estaba comiendo uvitos!" },
        { q: "¿Por qué es importante que el Inventario Forestal JBP de Maní registre a Syzygium cumini como especie introducida y no como especie nativa?", opts: ["Porque las especies introducidas no producen oxígeno y no tienen valor ecológico", "Porque las especies introducidas están siempre enfermas y contagian a las nativas", "Porque al ser exótica, no tiene relaciones coevolutivas con la flora y fauna nativa de la Orinoquía y puede comportarse como invasora, desplazando especies nativas si se dispersa sin control hacia ecosistemas naturales", "Porque las especies introducidas nunca producen frutos comestibles en Colombia"], correct: 2, expl: "Las especies introducidas como el Jambolán no evolucionaron junto con las plantas y animales nativos de nuestra región. Esto significa que pueden volverse invasoras y desplazar a las especies que sí son nativas. Por eso es importante registrarlas correctamente y vigilar que no se propaguen hacia bosques naturales." }
    ]
},
"palo-cruz": {
    id: "#JBP-03", tipo: "Nativo", nombre: "Palo Cruz", cientifico: "Brownea ariza Benth.",
    familia: "Fabaceae", origen: "Nativa de Colombia — Neotrópico (Orinoquía)", estado: "LC — Preocupación Menor (ColPlanta/UNAL 2025)", exotica: false,
    carbono: 185.0, viajes: 65, imagen_portada: "./imagenes/Palo_Cruz.jpeg",
    galeria: [
        { img: "./imagenes/Palo_Cruz.jpeg", desc: "Árbol Completo" },
        { img: "./imagenes/palocruz1.jpeg", desc: "Árbol Completo" },
        { img: "./imagenes/palocruz2.jpeg", desc: "Hojas" },
        { img: "./imagenes/palocruz3.jpeg", desc: "Vista Inferior" },
        { img: "./imagenes/palocruz4.jpeg", desc: "Flor" },
        { img: "./imagenes/palocruz5.jpeg", desc: "Flor aún si abrir" }
    ],
    nombresLocales: ["Palo Cruz", "Arizá", "Rosa de Monte", "Árbol de la Cruz", "Flor de la Cruz", "Palo de Rosa", "Monterillo", "Florisanto", "Clavellino", "Rosa de la Cruz", "Palosanto"],
    distribucion: `
        <p><strong>Árbol nativo colombiano con flores que nacen del tronco:</strong> El Palo Cruz es un árbol que nació en estas tierras. Crece en Colombia, Ecuador, Perú y Venezuela, desde el nivel del mar hasta los 1.700 metros de altura. En Colombia lo encuentras en 17 departamentos, incluyendo Casanare, Meta y Arauca. Vive en bosques de galería (los que bordean los ríos), sabanas arboladas y matorrales. Es un árbol que siempre tiene hojas verdes, así que nunca lo verás pelado.</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Familia</td><td style="padding:6px;">Fabaceae (la familia de las leguminosas: fríjoles, acacias, guamos)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Nombre científico</td><td style="padding:6px;"><em>Brownea ariza</em> (el nombre "ariza" viene del nombre popular colombiano)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué significa su nombre?</td><td style="padding:6px;"><em>Brownea</em>: en honor al botánico Patrick Browne; <em>ariza</em>: nombre popular colombiano</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Dónde vive?</td><td style="padding:6px;">Bosques de galería, sabanas arboladas y matorrales de la Orinoquía</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Estado de conservación</td><td style="padding:6px;">✅ Preocupación Menor — no está en peligro, pero hay que cuidarlo</td></tr>
            </table>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🌺 Dato curioso:</strong> El Palo Cruz tiene un truco especial: sus flores no nacen en las puntas de las ramas como en la mayoría de los árboles, sino <strong>directamente del tronco</strong>. Este fenómeno se llama <strong>caulifloria</strong> y también lo tiene el cacao. ¡Es como si el árbol floreciera desde su corazón!
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>⛪ ¿Por qué le dicen "Palo Cruz"?</strong> Cuando las ramas colgantes tocan el suelo y se entrecruzan, forman una figura que parece una cruz cristiana. Por eso los colonizadores españoles le pusieron ese nombre, y también le dicen "Florisanto" (flor santa).
        </div>
    `,
    densidad: "Madera dura y resistente al comején (termitas) — requiere medición local", fraccion: "Aproximadamente la mitad de su peso es carbono (0.47 – 0.50)",
    alometria: `
        <div class="warn-box" style="font-size:0.85rem; border-left:4px solid #f39c12; padding-left:12px; margin-bottom:15px; color:var(--text-main);">
            ⚠️ <strong>¿Cómo medimos el carbono del Palo Cruz?</strong> Para saber cuánto carbono guarda un árbol, los científicos usan fórmulas matemáticas llamadas <em>ecuaciones alométricas</em>. Estas fórmulas usan el grosor del tronco (DAP) y la altura del árbol. Para el Palo Cruz, aún no tenemos el dato exacto de qué tan pesada es su madera en Casanare, por eso ese valor lo mediremos directamente en el campo con los árboles del JBP. Lo que sí sabemos es que su madera es muy dura y resistente a las termitas, lo que sugiere que es densa y buena para almacenar carbono.
        </div>
        <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
            Biomasa = f(grosor del tronco, altura, densidad de la madera)
        </div>
        <p class="text-sm"><strong>¿Por qué importa esto?</strong> Porque los árboles son como esponjas gigantes que atrapan el dióxido de carbono (CO₂) del aire y lo guardan en su madera. Mientras más grande y pesado sea el árbol, más carbono guarda. El Palo Cruz, con su madera dura y su copa amplia, es un excelente guardián del clima.</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué medimos en campo?</td><td style="padding:6px;">Grosor del tronco a 1.30 m del suelo (DAP) y altura total del árbol</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué calculamos?</td><td style="padding:6px;">Cuántos kilos de carbono tiene guardado ese árbol</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Por qué?</td><td style="padding:6px;">Para saber cuánto ayuda el JBP a combatir el cambio climático</td></tr>
            </table>
        </div>
    `,
    calendario: [
        { mes: "Dic", fase: "Brotes nuevos de colores 🎨", clima: "dry" },
        { mes: "Ene", fase: "Brotes nuevos de colores 🎨", clima: "dry" },
        { mes: "Feb", fase: "El árbol acumula energía 🌱", clima: "dry" },
        { mes: "Mar", fase: "¡Floración masiva! 🌺", clima: "dry" },
        { mes: "Abr", fase: "Floración sostenida 🌺", clima: "rain" },
        { mes: "May", fase: "Empiezan a formarse los frutos 🫘", clima: "rain" },
        { mes: "Jun", fase: "Frutos creciendo 🫘", clima: "rain" },
        { mes: "Jul", fase: "Frutos maduros se abren 🫘", clima: "rain" },
        { mes: "Ago", fase: "Las semillas se dispersan 🌱", clima: "rain" },
        { mes: "Sep", fase: "Nuevos brotes de colores 🎨", clima: "rain" },
        { mes: "Oct", fase: "El árbol crece activamente 🍃", clima: "rain" },
        { mes: "Nov", fase: "Sigue creciendo 🍃", clima: "dry" }
    ],
    morfologia: `
        <div style="display:flex; flex-direction:column; gap:15px; font-size:0.95rem;">
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-tree"></i> ¿Cómo es el Palo Cruz?</strong> Es un árbol de tamaño mediano (9 a 12 metros de alto, hasta 15 m en condiciones ideales). Siempre tiene hojas verdes (es perennifolio). Su tronco es grisáceo y generalmente corto, con una copa amplia y ramas largas que cuelgan. Crece despacio pero vive muchísimos años.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-seedling"></i> Sus raíces:</strong> Tiene raíces profundas y bien desarrolladas que lo anclan firmemente en suelos húmedos. No tiene raíces aéreas ni tabulares. Los árboles jóvenes necesitan sombra y humedad para crecer bien.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-folder-open"></i> Su tronco y madera:</strong> El tronco es grisáceo con corteza lisa o levemente rugosa. <strong>Su madera es muy dura y resistente a las termitas (comején)</strong>, por eso los llaneros la usan para postes de cercas que duran décadas. Y aquí viene lo especial: <strong>sus flores nacen directamente del tronco</strong>, no de las ramas.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-leaf"></i> Sus hojas:</strong> Son compuestas, muy largas (hasta 60-70 cm), con muchos folíolos verdes oscuros y brillantes. <strong>El detalle más bonito:</strong> cuando el árbol saca hojas nuevas, estas nacen en racimos colgantes que cambian de color: primero son gris-plateadas, luego rosadas o salmón, después verde pálido casi transparente, y finalmente verde oscuro brillante. ¡Es como si el árbol se pintara solo!</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-spa"></i> Sus flores:</strong> Son el espectáculo del árbol. Forman bolas gigantes (12-18 cm de diámetro) de color rojo-anaranjado intenso que nacen directamente del tronco. Tienen muchos estambres que parecen una "bola de fuego". Son péndulas y tienen mucho néctar, lo que atrae a colibríes, abejas y mariposas.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-circle-notch"></i> Sus frutos:</strong> Son legumbres planas de 20-30 cm de largo, de color marrón cuando maduran. Se abren al madurar y liberan varias semillas alargadas con una capa fibrosa. Los animales silvestres ayudan a dispersarlas.</div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>📌 Para identificarlo en campo:</strong> Busca un árbol de copa amplia con ramas colgantes, flores rojas que nacen del tronco (no de las ramas), hojas compuestas muy largas, y brotes nuevos que cambian de gris a rosado a verde. Si ves todo eso, ¡seguro es un Palo Cruz!
        </div>
    `,
    fauna: `
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card"><div class="metric-label">🐦✨ Colibríes</div><div class="section-val text-sm mt-2">Los colibríes son los polinizadores principales del Palo Cruz. Visitan sus flores rojas en busca de néctar abundante y, sin saberlo, llevan el polen de árbol en árbol. Especies como el colibrí bronceado y el colibrí de garganta blanca son visitantes frecuentes.</div></div>
            <div class="metric-card"><div class="metric-label">🐿️ Guatines (ñeques)</div><div class="section-val text-sm mt-2">Los guatines comen los frutos y entierran las semillas, ayudando a que nazcan nuevos Palo Cruz en diferentes lugares. Son dispersores muy efectivos.</div></div>
            <div class="metric-card"><div class="metric-label">🦥 Perezosos</div><div class="section-val text-sm mt-2">Los perezosos usan las ramas colgantes del Palo Cruz como refugio y como autopista para moverse por el bosque. Les encanta descansar en su copa densa.</div></div>
            <div class="metric-card"><div class="metric-label">🐦 Aves frugívoras</div><div class="section-val text-sm mt-2">Diversas aves de los bosques de galería comen los frutos y semillas, y usan la copa del árbol para descansar y hacer nidos.</div></div>
            <div class="metric-card"><div class="metric-label">🐝🦋 Abejas y mariposas</div><div class="section-val text-sm mt-2">Abejas nativas, abejas sin aguijón y mariposas visitan las flores para tomar néctar. Ayudan a polinizar el árbol y mantienen la biodiversidad del llano.</div></div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🔬 El Palo Cruz es un árbol "nodal":</strong> Esto significa que conecta a muchos animales en la red de la vida del llano. Sus flores alimentan a los polinizadores, sus frutos alimentan a los dispersores de semillas, y sus ramas ofrecen refugio a los perezosos. Sin él, muchas especies tendrían menos alimento y hogar.
        </div>
    `,
    usos: `
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card"><div class="metric-label">🪵 Madera y construcción</div><div class="section-val text-sm mt-2">Su madera es tan dura y resistente a las termitas que los llaneros la usan para hacer postes de cercas que duran décadas enterrados en la tierra. También sirve para ebanistería, carpintería general y como leña de buena calidad.</div></div>
            <div class="metric-card"><div class="metric-label">🌿 Medicina tradicional</div><div class="section-val text-sm mt-2">En la medicina popular, las ramas y hojas se usan para detener sangrados. La decocción de flores y ramas se toma para la disentería y la diarrea. También se usa como laxante suave y para combatir parásitos intestinales. Los científicos están estudiando sus componentes para tratar problemas de sangrado.</div></div>
            <div class="metric-card"><div class="metric-label">🌺 Ornamental y paisajismo</div><div class="section-val text-sm mt-2">Es uno de los árboles más bonitos del trópico americano. Sus flores rojas que nacen del tronco y sus brotes que cambian de color lo hacen muy apreciado para jardines botánicos, parques y plazas.</div></div>
            <div class="metric-card"><div class="metric-label">🌰 Servicios ecosistémicos</div><div class="section-val text-sm mt-2">Aunque sus frutos no son consumidos por humanos, son alimento para la fauna silvestre. El árbol ofrece refugio a perezosos, atrae polinizadores y dispersores de semillas, y participa activamente en la salud de los bosques de galería.</div></div>
            <div class="metric-card"><div class="metric-label">⛪ Simbología cultural</div><div class="section-val text-sm mt-2">El nombre "Palo Cruz" o "Árbol de la Cruz" tiene un significado especial: cuando sus ramas colgantes tocan el suelo y se entrecruzan, forman una figura que parece una cruz cristiana. Por eso los colonizadores españoles le dieron ese nombre, y también le dicen "Florisanto" (flor santa). Es un árbol con historia y espiritualidad.</div></div>
        </div>
    `,
    mensajeIA: "🌺 ¡Hola, pariente llanero! Soy el <strong>Palo Cruz</strong>, aunque también me llaman <em>Arizá</em>, <em>Rosa de Monte</em> o <em>Florisanto</em>. Mi nombre científico es <em>Brownea ariza</em>, y pertenezco a la gran familia de las leguminosas, la misma del fríjol y la acacia.\n\nSoy de aquí. Nací en estas tierras colombianas hace muchísimos años, mucho antes de que existieran los pueblos y las carreteras, cuando los Llanos Orientales eran solo viento, sabana y el rugido del río Meta.\n\n✨ <strong>Pero lo que de verdad me hace único en el mundo</strong> —y quiero que lo recuerdes siempre— es esto: mis flores no nacen en las puntas de mis ramas como las de los demás árboles. <strong>Mis flores nacen directamente de mi tronco</strong>. Así es: del mismo palo grueso y grisáceo brotan unas bolas gigantes de flores rojas y anaranjadas, como si mi corazón explotara en fuego por fuera. Los botánicos le llaman <strong>caulifloria</strong> a este fenómeno. ¡Soy el único árbol del llano que florece desde su propio cuerpo!\n\nY no solo eso: mis hojas jóvenes nacen como pequeñas marionetas colgantes de color rosado y plateado, y poco a poco se van volviendo verdes. Me transformo de colores sin perder ni una sola hoja, porque soy siempreverde.\n\nLos colibríes me visitan cada vez que florezco. Meten su pico largo en mis flores buscando néctar, y sin saberlo, llevan mi polen de árbol en árbol. Soy muy lento creciendo, pero muy largo viviendo. Y mi madera es tan dura que ni las termitas pueden comérsela. Por eso aquí en Casanare me usan para los postes de las cercas.\n\n⛪ <strong>¿Sabías por qué me llaman Palo Cruz?</strong> Cuando mis ramas colgantes tocan el suelo y se entrecruzan, forman una figura que parece una cruz cristiana. Por eso los colonizadores españoles me dieron ese nombre, y también me dicen Florisanto (flor santa). Soy bello, soy fuerte, soy medicinal y soy de Colombia. Eso es más que suficiente para estar orgulloso.\n\n¿Me plantarías en tu paisaje? Si lo haces, que sea con respeto: en linderos de caños, para sombra en sistemas agroforestales, o para restaurar bosques de galería. Soy nativo de esta tierra, y mi misión es servir con sabiduría, no desplazar.",
    referencias: [
        "Álvarez, E., Duque, A., Saldarriaga, J. G., Cabrera, K., De las Salas, G., Del Valle, J. I., Moreno, F., Orrego, S. A., & Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. Forest Ecology and Management, 267, 297–308. https://doi.org/10.1016/j.foreco.2011.11.013",
        "Bachman, S. P., Brown, M. J. M., Leão, T. C. C., Lughadha, E. N., & Walker, B. E. (2024). Extinction risk predictions for the world's flowering plants to support their conservation. New Phytologist. https://doi.org/10.1111/nph.19592",
        "Bernal, R., Galeano, G., Gradstein, S. R., & Celis, M. (2025). ColPlanta — Brownea ariza Benth. Colombian Plants Made Accessible. Instituto de Ciencias Naturales, UNAL. https://colplanta.org/taxon/urn:lsid:ipni.org:names:482406-1/general-information",
        "Bernal, R., Galeano, G., Rodríguez, A., Sarmiento, H., & Gutiérrez, M. (2017). Nombres comunes de las plantas de Colombia. Instituto de Ciencias Naturales, Universidad Nacional de Colombia – Biovirtual. http://www.biovirtual.unal.edu.co/nombrescomunes/",
        "Bernal, R., Gradstein, S. R., & Celis, M. (Eds.). (2015). Catálogo de plantas y líquenes de Colombia. Instituto de Ciencias Naturales, Universidad Nacional de Colombia. http://catalogoplantasdecolombia.unal.edu.co",
        "El Troudi, H. (2020, diciembre). Rosa de Montaña: sus llamativas flores y propiedades medicinales. Haiman El Troudi. https://haimaneltroudi.com/rosa-de-montana-sus-llamativas-flores-y-propiedades-medicinales/",
        "Mazza, G. (2018, marzo). Brownea ariza. Monaco Nature Encyclopedia. https://www.monaconatureencyclopedia.com/brownea-ariza/?lang=en",
        "Morales, A. (2015, julio). ÁRBOLES FANTÁSTICOS — El Arizá, Palo Cruz o Rosa de Monte, Brownea ariza Benth [Entrada de blog]. Arboretum Medellín. http://arboretumedellin.blogspot.com/2015/07/arboles-fantasticos-ariza-palo-cruz-o.html",
        "Piedrahita Idárraga, A., Urrea, L. M., Roldán Palacio, F. J., & Cardona Naranjo, F. A. (2016). Flora del Magdalena Medio: áreas de influencia de la central térmica Termocentro. ISAGEN – Universidad de Antioquia, Herbario Universidad de Antioquia. [Referenciado en GBIF: https://www.gbif.org/species/2970445]",
        "Royal Botanic Gardens, Kew. (2024). Brownea ariza Benth. En Plants of the World Online. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:482406-1",
        "Shade Coffee Organization. (2024). Brownea ariza — The Shade Catalog Colombia. https://www.shadecoffee.org/es/catalog/colombia/species/brownea-ariza",
        "Yepes, A. P., Navarrete, D. A., Duque, A. J., Phillips, J. F., Cabrera, K. R., Álvarez, E., García, M. C., & Ordóñez, M. F. (2011). Protocolo para la estimación nacional y subnacional de biomasa-carbono en Colombia. Instituto de Hidrología, Meteorología y Estudios Ambientales – IDEAM."
    ],
    quiz: [
        { q: "¿Cuál es el fenómeno botánico que hace única al Palo Cruz (Brownea ariza) en comparación con la mayoría de los árboles?", opts: ["La melitofilía, que consiste en que solo las abejas pueden polinizarla", "La heterofilia, que consiste en que sus hojas tienen formas completamente diferentes", "La caulifloria, que consiste en que sus flores e inflorescencias nacen directamente del tronco principal y las ramas gruesas del árbol", "La partenocarpia, que consiste en que sus frutos se forman sin necesidad de polinización"], correct: 2, expl: "La caulifloria es un fenómeno fascinante: las flores nacen directamente del tronco, no de las ramas terminales. Esto es una adaptación evolutiva que facilita que los polinizadores (como colibríes y murciélagos) encuentren las flores más fácilmente en el bosque denso. El cacao también tiene esta característica." },
        { q: "¿Qué secuencia de colores presentan las hojas jóvenes (brotes nuevos) del Palo Cruz cuando emergen?", opts: ["Amarillo → Naranja → Rojo → Verde oscuro", "Blanco → Azul → Morado → Verde oscuro", "Gris-plateado → Rosado o salmón → Verde pálido casi transparente → Verde oscuro brillante", "Negro → Café → Ocre → Verde claro"], correct: 2, expl: "Los brotes nuevos del Palo Cruz son como un espectáculo de colores: primero son gris-plateados, luego rosados o salmón, después verde pálido casi transparente, y finalmente verde oscuro brillante. Este cambio gradual de colores es una característica única que ayuda a identificar el árbol incluso cuando no está floreciendo." },
        { q: "¿Cuál de los siguientes animales es un polinizador y dispersor activo del Palo Cruz en los bosques de galería de Casanare?", opts: ["El caimán del Orinoco, que abre los frutos con su mandíbula", "La anaconda, que se enrolla al tronco y dispersa las semillas", "Los colibríes que visitan las flores rojas en busca de néctar, y los guatines y perezosos que consumen sus frutos o utilizan sus ramas como refugio", "El manatí amazónico, que come las hojas caídas al río"], correct: 2, expl: "El Palo Cruz es un árbol 'nodal' que conecta a muchos animales: los colibríes lo polinizan visitando sus flores rojas, los guatines (ñeques) dispersan sus semillas al enterrarlas, y los perezosos usan sus ramas colgantes como refugio y autopista. Sin estos animales, el árbol no podría reproducirse ni sobrevivir en el bosque." }
    ]
},
"almendro": {
    id: "#JBP-04", tipo: "Exótica Introducida", nombre: "Almendro", cientifico: "Terminalia catappa L.",
    familia: "Combretaceae", origen: "Exótica introducida — Sudeste Asiático (Malasia, India). Naturalizada en trópicos de América", estado: "LC — Preocupación Menor (UICN). No listada en Libros Rojos de Colombia", exotica: true,
    carbono: 280.5, viajes: 95, imagen_portada: "./imagenes/almendro1.jpeg",
    galeria: [
        { img: "./imagenes/almendro1.jpeg", desc: "" },
        { img: "./imagenes/almendro2.jpeg", desc: "" },
        { img: "./imagenes/almendro3.jpeg", desc: "" },
        { img: "./imagenes/almendro4.jpeg", desc: "" },
        { img: "./imagenes/almendro5.jpeg", desc: "" },
    ],
    nombresLocales: ["Almendro", "Almendrón", "Almendro de la India", "Almendro de los Trópicos", "Almendro de playa", "Almendrillo", "Almendro de Sombra"],
    distribucion: `
        <p><strong>Árbol viajero desde el Sudeste Asiático:</strong> El Almendro no nació en Colombia. Es originario de Malasia, India y el Sudeste Asiático, donde crece cerca de las costas y los manglares. Llegó a América tropical como árbol ornamental y de sombra. En Colombia está registrado en las regiones Andina, Caribe, Orinoquía y Pacífico. En Maní (Casanare), lo encuentras en parques, potreros y patios de fincas, siempre porque alguien lo plantó —no crece de forma natural aquí.</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Familia</td><td style="padding:6px;">Combretaceae (una familia de árboles tropicales)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Nombre científico</td><td style="padding:6px;"><em>Terminalia catappa</em> (el nombre "catappa" viene de la palabra malaya "ketapang")</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué significa su nombre?</td><td style="padding:6px;"><em>Terminalia</em> = "terminal" (porque las hojas se agrupan al final de las ramas); <em>catappa</em> = nombre original en malayo</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿De dónde viene?</td><td style="padding:6px;">Sudeste Asiático (Malasia, India) — introducido en Colombia</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Estado en Colombia</td><td style="padding:6px;">⚠️ Especie cultivada, no nativa — ampliamente naturalizada</td></tr>
            </table>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid #e74c3c; padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🚨 ALERTA IMPORTANTE:</strong> El Almendro <strong>NO es nativo</strong> de Colombia ni de la Orinoquía. Fue traído por humanos desde Asia. En Maní lo encuentras en parques y potreros porque alguien lo plantó para dar sombra. Al ser exótica, no tiene relaciones coevolutivas con la flora y fauna nativa de la Orinoquía colombiana.
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🌎 Dato curioso:</strong> El Almendro tiene una forma muy especial: sus ramas crecen en "pisos" horizontales, como los niveles de una casa, lo que le da una copa piramidal perfecta. Además, cuando llega el verano llanero, sus hojas se ponen rojas y anaranjadas antes de caer, ¡como si el llano también tuviera otoño!
        </div>
    `,
    densidad: "0.59 g/cm³ (madera de densidad media; USDA Forest Service, 1992)", fraccion: "Aproximadamente la mitad de su peso es carbono (0.47 – 0.50)",
    alometria: `
        <div class="warn-box" style="font-size:0.85rem; border-left:4px solid #f39c12; padding-left:12px; margin-bottom:15px; color:var(--text-main);">
            ⚠️ <strong>¿Cómo medimos el carbono del Almendro?</strong> El valor de densidad de madera (0.59 g/cm³) viene de mediciones hechas fuera de Colombia. Para el JBP de Maní, sería ideal medir directamente la madera de nuestros árboles, porque el clima y el suelo de Casanare pueden hacer que la madera sea un poco diferente. Como es una especie que crece rápido y tiene madera de densidad media, su capacidad de almacenar carbono es moderada —menos que los árboles de madera muy dura, pero sigue siendo valioso para combatir el cambio climático.
        </div>
        <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
            Biomasa = f(grosor del tronco, altura, densidad de la madera)
        </div>
        <p class="text-sm"><strong>¿Por qué importa esto?</strong> Porque los árboles son como esponjas gigantes que atrapan el dióxido de carbono (CO₂) del aire y lo guardan en su madera. Mientras más grande y pesado sea el árbol, más carbono guarda. El Almendro, con su madera de densidad media y su copa amplia, es un buen guardián del clima, especialmente en sistemas agroforestales del llano.</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué medimos en campo?</td><td style="padding:6px;">Grosor del tronco a 1.30 m del suelo (DAP) y altura total del árbol</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué calculamos?</td><td style="padding:6px;">Cuántos kilos de carbono tiene guardado ese árbol</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Por qué?</td><td style="padding:6px;">Para saber cuánto ayuda el JBP a combatir el cambio climático</td></tr>
            </table>
        </div>
    `,
    calendario: [
        { mes: "Dic", fase: "Empieza a perder hojas 🍂", clima: "dry" },
        { mes: "Ene", fase: "Hojas rojas y anaranjadas antes de caer 🍂", clima: "dry" },
        { mes: "Feb", fase: "Empiezan a brotar hojas nuevas 🌱", clima: "dry" },
        { mes: "Mar", fase: "¡Floración plena! 🌸", clima: "trans" },
        { mes: "Abr", fase: "Floración tardía y polinización 🌸🐝", clima: "trans" },
        { mes: "May", fase: "Empiezan a formarse los frutos 🍑", clima: "rain" },
        { mes: "Jun", fase: "Frutos creciendo 🍑", clima: "rain" },
        { mes: "Jul", fase: "Frutos madurando 🍑", clima: "rain" },
        { mes: "Ago", fase: "Cosecha y caída de frutos 🍑", clima: "rain" },
        { mes: "Sep", fase: "Las semillas se dispersan 💧", clima: "rain" },
        { mes: "Oct", fase: "Copa con máximo follaje 🌿", clima: "rain" },
        { mes: "Nov", fase: "Copa llena / Preparación para defoliación 🌿", clima: "dry" }
    ],
    morfologia: `
        <div style="display:flex; flex-direction:column; gap:15px; font-size:0.95rem;">
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-tree"></i> ¿Cómo es el Almendro?</strong> Es un árbol que pierde sus hojas en época seca (caducifolio), de 9 a 35 metros de altura (en Casanare suele ser de 10-20 m). Su tronco es grueso con corteza gris oscura que se agrieta con la edad. <strong>Lo más especial:</strong> sus ramas crecen en "pisos" horizontales, como los niveles de una casa, lo que le da una copa piramidal perfecta y muy ornamental. Crece rápido en climas tropicales.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-seedling"></i> Sus raíces:</strong> Tiene raíces amplias y superficiales que se extienden a los lados, ayudando a anclar el árbol y consolidar el suelo. En árboles viejos desarrolla raíces de contrafuerte (como bambas) en la base del tronco. Se adapta a muchos tipos de suelo, desde arenas hasta arcillas compactas.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-folder-open"></i> Su tronco y madera:</strong> El tronco es recto o ligeramente sinuoso, con corteza gris oscura que en árboles jóvenes es lisa y en adultos se agrieta formando placas. <strong>Su madera es rojiza, sólida y muy resistente al agua</strong>, por eso los llaneros la usan para hacer cercas, postes y hasta embarcaciones artesanales (curiaras) que aguantan las inundaciones del llano.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-leaf"></i> Sus hojas:</strong> Son grandes (8-38 cm), de forma ovalada ancha, agrupadas al final de las ramas. Son duras y brillantes. <strong>El detalle más bonito:</strong> cuando llega el verano llanero, antes de caer, las hojas se ponen de color rojo y anaranjado, creando un espectáculo visual único en el paisaje de Maní, ¡como si el llano también tuviera otoño!</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-spa"></i> Sus flores:</strong> Son pequeñitas, de color blanco-verdoso, agrupadas en espigas largas (15-20 cm). Tienen un olor poco agradable, pero atraen a abejas, mariposas y moscas florales. Florecen en la transición del verano a las lluvias (marzo-abril), cuando empieza el invierno.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-circle-notch"></i> Sus frutos:</strong> Son drupas aplanadas de 4-7 cm de largo, con una pulpa carnosa y fibrosa, y adentro una semilla dura. <strong>El dato más delicioso:</strong> la semilla es comestible y sabe a almendra, ¡por eso le dicen almendro! Los niños llaneros las recolectan y las comen tostadas o crudas. Los frutos se dispersan por agua (hidrocoria) y por animales como loros y murciélagos.</div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>📌 Para identificarlo en campo:</strong> Busca un árbol de copa piramidal con ramas en "pisos" horizontales, hojas grandes que se ponen rojas antes de caer, y frutos aplanados con semillas comestibles. Si ves todo eso en Maní, ¡seguro es un Almendro!
        </div>
    `,
    fauna: `
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card"><div class="metric-label">🦜 Loros y cotorras</div><div class="section-val text-sm mt-2">Loros reales, cotorras y pericos comen las semillas y frutos maduros. Rompen las drupas con sus picos fuertes y transportan las semillas a distancias considerables, ayudando a dispersar el árbol.</div></div>
            <div class="metric-card"><div class="metric-label">🕊️ Palomas</div><div class="section-val text-sm mt-2">Palomas como la paloma colorada consumen los frutos caídos y usan la copa extendida del árbol como percha y refugio. Anidan en las ramas horizontales protegidas por el follaje denso.</div></div>
            <div class="metric-card"><div class="metric-label">🦇 Murciélagos frugívoros</div><div class="section-val text-sm mt-2">Murciélagos como el murciélago frutero común comen la pulpa del fruto por la noche y actúan como dispersores secundarios. Transportan frutos enteros a sus refugios, facilitando que las semillas germinen lejos del árbol madre.</div></div>
            <div class="metric-card"><div class="metric-label">🐝 Abejas y mariposas</div><div class="section-val text-sm mt-2">Abejas nativas, abejas melíferas y mariposas visitan las flores para tomar néctar y polen durante la floración (marzo-abril). El Almendro es una fuente importante de alimento para polinizadores en la transición seco-lluvioso.</div></div>
            <div class="metric-card"><div class="metric-label">🦎 Iguanas</div><div class="section-val text-sm mt-2">Las iguanas consumen hojas jóvenes y usan las ramas como sitio para asolearse durante las mañanas llaneras. Trepan a los pisos superiores de la copa para termorregular su cuerpo.</div></div>
            <div class="metric-card"><div class="metric-label">🐟 Peces de caños y morichales</div><div class="section-val text-sm mt-2"><strong>¡Sorpresa!</strong> Cuando las hojas caídas del Almendro llegan al agua de caños y morichales, liberan taninos que bajan la acidez del agua y matan bacterias dañinas. Por eso, los acuaristas del mundo entero buscan sus hojas secas para proteger a sus peces tropicales. ¡Es una farmacia natural flotante!</div></div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🔬 El Almendro es un árbol de sombra por excelencia:</strong> Su copa piramidal y densa proporciona sombra fresca para el ganado en las horas de máximo sol (10 a.m.–3 p.m.), reduciendo el estrés calórico y mejorando la productividad lechera. Por eso es tan valorado en los potreros del llano.
        </div>
    `,
    usos: `
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card"><div class="metric-label">🪵 Carpintería y madera</div><div class="section-val text-sm mt-2">Su madera rojiza, sólida y muy resistente al agua ha sido usada para construir cercas, postes, embarcaciones artesanales (curiaras), pisos y muebles rústicos en las fincas del piedemonte llanero. Aguanta las inundaciones estacionales del llano sin pudrirse fácilmente.</div></div>
            <div class="metric-card"><div class="metric-label">🌿 Medicina tradicional</div><div class="section-val text-sm mt-2">Las hojas contienen taninos, flavonoides y saponinas con propiedades antiinflamatorias y antimicrobianas. En el llano, la infusión de hojas secas se usa para tratar problemas del hígado, diarrea y como cicatrizante de heridas. La corteza se usa en cataplasmas para contusiones.</div></div>
            <div class="metric-card"><div class="metric-label">🌳 Sombra ganadera y cercas vivas</div><div class="section-val text-sm mt-2">Es uno de los árboles de sombra por excelencia en potreros llaneros. Su copa amplia da sombra fresca para el ganado en las horas de máximo sol, reduciendo el estrés calórico y mejorando la producción de leche. También se usa como cerca viva en linderos de fincas.</div></div>
            <div class="metric-card"><div class="metric-label">🍽️ Alimentación y ornamental</div><div class="section-val text-sm mt-2">Las semillas (almendras) son comestibles: los niños llaneros las comen directamente o tostadas, obteniendo un sabor similar a la almendra europea. Como árbol ornamental, es plantado en parques y casas de Maní, Trinidad y Yopal, especialmente valorado por la sombra densa que proyecta.</div></div>
            <div class="metric-card"><div class="metric-label">🐟 Farmacia natural para peces</div><div class="section-val text-sm mt-2">Cuando las hojas caídas llegan al agua, liberan taninos que purifican y modulan el pH del agua, matando bacterias dañinas. Esta propiedad es usada por acuaristas de todo el mundo para tratar aguas de peces tropicales. ¡El Almendro es una farmacia natural flotante!</div></div>
        </div>
    `,
    mensajeIA: `🌳 ¡Hola, pariente llanero! Soy el <strong>Almendro</strong>, aunque también me llaman <em>Almendrón</em> o <em>Almendro de la India</em>. Mi nombre científico es <em>Terminalia catappa</em>, y tengo una historia que combina viajes, sombra y secretos.\n\nSoy un viajero muy antiguo. Nací en las costas del Sudeste Asiático, en tierras de manglar y arenas ardientes, y el mar y los vientos me llevaron, semilla a semilla, hasta llegar a este llano inmenso que hoy llamo hogar. No soy nativo de Colombia —llegué aquí porque alguien me trajo— pero me adapté tan bien que ahora soy parte del paisaje de Maní.\n\n✨ <strong>Pero tengo secretos que te van a sorprender</strong>: mis ramas crecen en "pisos" horizontales, como los niveles de una gran casa, lo que me da una copa piramidal perfecta. Y cuando llega el verano llanero, me visto de rojo y anaranjado antes de soltar mis hojas, como si el llano también necesitara un otoño propio. ¡Soy el único árbol del llano que tiene otoño!\n\n🍽️ <strong>Y otra cosa deliciosa</strong>: mis frutos guardan dentro una semilla que sabe a almendra. Los niños llaneros las recolectan y las comen tostadas o crudas. Los loros reales del llano conocen mejor que nadie dónde encontrarlas.\n\n🐟 <strong>Pero mi secreto más asombroso</strong> es este: ¿Sabías que mis hojas caídas son mágicas para los peces? Cuando caen al agua de los caños y morichales, sueltan taninos que bajan la acidez del agua y matan bacterias dañinas, ¡tal como hacen algunos antibióticos! Por eso, los acuaristas del mundo entero buscan mis hojas secas para proteger a sus peces tropicales. ¡Soy una farmacia natural flotante!\n\n⚠️ <strong>Pero debo ser honesto contigo</strong>: no soy nativo de esta tierra. Llegué aquí porque alguien me trajo desde Asia. Si me plantas en tu finca, disfruta mi sombra generosa, pero recuerda que no tengo las mismas relaciones con la fauna nativa que los árboles que sí nacieron aquí. La belleza y la utilidad deben ir de la mano con el respeto por la naturaleza nativa.\n\n¿Me plantarías en tu paisaje? Si lo haces, que sea con conocimiento y responsabilidad. Soy un árbol que puede dar mucha sombra y beneficios... pero también debo ser manejado con cuidado.`,
    referencias: [
        "Álvarez, E., Duque, A., Saldarriaga, J. G., Cabrera, K., De las Salas, G., Del Valle, J. I., Lema, A., Moreno, F., Orrego, S. A., & Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. <em>Forest Ecology and Management, 267</em>(1), 297–308. https://doi.org/10.1016/j.foreco.2011.12.013",
        "Bernal, R., Gradstein, S. R., & Celis, M. (Eds.). (2015). <em>Catálogo de plantas y líquenes de Colombia</em>. Instituto de Ciencias Naturales, Universidad Nacional de Colombia. http://catalogoplantasdecolombia.unal.edu.co",
        "Brown, S., & Lugo, A. E. (1992). Wood densities of tropical tree species (Gen. Tech. Rep. SO-88). U.S. Department of Agriculture, Forest Service, Southern Forest Experiment Station. https://www.srs.fs.usda.gov/pubs/gtr/gtr_so088.pdf",
        "Francis, J. K. (1989). <em>Terminalia catappa L. — Indian almond, almendra</em> (SO-ITF-SM-23). U.S. Department of Agriculture, Forest Service, Southern Forest Experiment Station. https://rngr.net/publications/arboles-de-puerto-rico/terminalia-catappa",
        "Chudnoff, M. (1984). <em>Tropical timbers of the world</em> (Agriculture Handbook 607). U.S. Department of Agriculture, Forest Service.",
        "Plants of the World Online / Kew Science. (2024). <em>Terminalia catappa</em> L. Royal Botanic Gardens, Kew. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:171034-1",
        "Segura, M., Andrade, H. J., & Mojica Sánchez, S. (2021). Almacenamiento de carbono en sistemas agroforestales en los Llanos Orientales de Colombia. <em>Revista de Biología Tropical, 69</em>(1), 352–368. https://doi.org/10.15517/rbt.v69i1",
        "World Agroforestry Centre (ICRAF). (2024). <em>Terminalia catappa — Species profile</em>. Agroforestree Database 4.0. https://apps.worldagroforestry.org/treedb2/speciesprofile.php?Spid=1616",
        "IDEAM. (2014). <em>Protocolo para la estimación nacional y subnacional de biomasa-carbono en Colombia</em>. Instituto de Hidrología, Meteorología y Estudios Ambientales. Ministerio de Ambiente y Desarrollo Sostenible.",
        "IPCC. (2006). <em>IPCC guidelines for national greenhouse gas inventories. Volume 4: Agriculture, forestry and other land use</em>. Intergovernmental Panel on Climate Change. https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol4.html"
    ],
    quiz: [
        { q: "¿A qué familia botánica pertenece Terminalia catappa (Almendro)?", opts: ["Fabaceae (leguminosas)", "Moraceae (moreras y ficus)", "Combretaceae", "Bignoniaceae (familia del cañaguate)"], correct: 2, expl: "El Almendro pertenece a la familia Combretaceae, una familia de árboles tropicales. No está relacionado con el cañaguate (Bignoniaceae) ni con los fríjoles (Fabaceae)." },
        { q: "En el contexto del llano de Maní (Casanare), ¿en qué época del año el almendro generalmente produce sus flores?", opts: ["Durante los meses de mayor lluvia (julio–agosto)", "Al finalizar el verano e inicio de lluvias (marzo–abril)", "En pleno verano (enero–febrero)", "En diciembre, durante la Navidad llanera"], correct: 1, expl: "El Almendro florece en la transición del verano a las lluvias (marzo-abril), cuando empieza el invierno llanero. Esta es una estrategia para aprovechar la humedad disponible para el desarrollo de los frutos." },
        { q: "¿Cuál es la densidad básica de la madera de Terminalia catappa reportada en bases de datos internacionales de maderas tropicales?", opts: ["0.20 g/cm³ (madera muy liviana, como el balso)", "0.95 g/cm³ (madera muy pesada, como el guayacán)", "0.49–0.59 g/cm³ (madera de densidad media)", "1.10 g/cm³ (más densa que el agua)"], correct: 2, expl: "La madera del Almendro tiene una densidad básica de 0.49–0.59 g/cm³, lo que la clasifica como madera de densidad media. No es tan liviana como el balso ni tan pesada como el guayacán, pero es lo suficientemente resistente para construcciones rurales y embarcaciones." },
        { q: "¿Qué propiedad especial tienen las hojas caídas del almendro cuando entran en contacto con el agua?", opts: ["Producen oxígeno adicional para los peces", "Liberan taninos con propiedades antibacterianas que purifican y modulan el pH del agua", "Consumen todo el oxígeno disponible", "Generan algas que alimentan a los peces"], correct: 1, expl: "Cuando las hojas caídas del Almendro llegan al agua, liberan taninos que bajan la acidez del agua y matan bacterias dañinas. Esta propiedad es tan valiosa que los acuaristas de todo el mundo buscan sus hojas secas para proteger a sus peces tropicales. ¡Es una farmacia natural flotante!" }
    ]
},
"pomarrosa": {
    id: "#JBP-05", tipo: "Exótica Introducida", nombre: "Pomarrosa", cientifico: "Syzygium jambos (L.) Alston",
    familia: "Myrtaceae", origen: "Exótico — Sudeste Asiático (archipiélago malayo). Naturalizada en Colombia", estado: "LC — Preocupación Menor (UICN 2019)", exotica: true,
    carbono: 142.5, viajes: 52, imagen_portada: "./imagenes/pomarrosa1.jpeg",
    galeria: [
        { img: "./imagenes/pomarrosa1.jpeg", desc: "Árbol Completo" },
        { img: "./imagenes/pomarrosa3.jpeg", desc: "Vista inferior" },
        { img: "./imagenes/pomarrosa4.jpeg", desc: "Corteza" },
        { img: "./imagenes/pomarrosa5.jpeg", desc: "Hojas" },
        { img: "./imagenes/pomarrosa6.jpeg", desc: "Frutos" }
    ],
    nombresLocales: ["Pomarroso", "Poma", "Pero de Agua", "Pomarrosa", "Perita", "Pumalaca (Venezuela)", "Jambo (Brasil)", "Rose apple (Inglés)", "Malabar plum", "Almendro de la India"],
    distribucion: `
        <p><strong>Árbol viajero desde el Sudeste Asiático:</strong> La Pomarroso no nació en Colombia. Es originaria del archipiélago malayo (Indonesia, Malasia, Filipinas), donde crece en selvas húmedas cerca del mar. Los marineros y exploradores la llevaron en sus barcos como fruta exótica, y así llegó a América tropical hace siglos. En Colombia está registrada como especie <strong>naturalizada</strong> en zonas de clima cálido, especialmente en bordes de quebradas, márgenes de ríos y predios rurales de la Orinoquía. En Maní (Casanare), la encuentras junto a caños y ríos, donde prospera dando sombra y frutos.</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Familia</td><td style="padding:6px;">Myrtaceae (la misma familia del guayabo y el clavo de olor)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Nombre científico</td><td style="padding:6px;"><em>Syzygium jambos</em> (antes se llamaba <em>Eugenia jambos</em>)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué significa su nombre?</td><td style="padding:6px;"><em>Syzygium</em> = "unidos en pares" (por sus hojas opuestas); <em>jambos</em> = nombre original en malayo</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿De dónde viene?</td><td style="padding:6px;">Sudeste Asiático (Indonesia, Malasia) — introducida y naturalizada en Colombia</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Estado en Colombia</td><td style="padding:6px;">⚠️ Especie naturalizada, no nativa — ampliamente aceptada en los llanos</td></tr>
            </table>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid #f39c12; padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>⚠️ NOTA IMPORTANTE:</strong> La Pomarroso <strong>NO es nativa</strong> de Colombia ni de la Orinoquía. Llegó aquí traída por humanos desde Asia hace siglos. Aunque está naturalizada y es bien aceptada en los llanos del Casanare, su condición de exótica debe ser registrada conforme a las normas del Inventario Forestal Nacional.
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🌎 Dato curioso:</strong> En Colombia y Venezuela, la Pomarroso ha sido acogida tradicionalmente como árbol ornamental en climas cálidos, debido a su bajo mantenimiento, abundante sombra y rápido crecimiento. Sus frutos huelen a rosas y son muy apreciados para hacer dulces y mermeladas.
        </div>
    `,
    densidad: "0.60 – 0.75 g/cm³ (madera moderadamente pesada; ⚠️ por verificar en campo)", fraccion: "Aproximadamente la mitad de su peso es carbono (0.47 – 0.50)",
    alometria: `
        <div class="warn-box" style="font-size:0.85rem; border-left:4px solid #f39c12; padding-left:12px; margin-bottom:15px; color:var(--text-main);">
            ⚠️ <strong>¿Cómo medimos el carbono de la Pomarroso?</strong> El valor de densidad de madera (0.60–0.75 g/cm³) viene de bases de datos internacionales. Para el JBP de Maní, sería ideal medir directamente la madera de nuestros árboles, porque el clima y el suelo de Casanare pueden hacer que la madera sea un poco diferente. Como es una especie de madera media-pesada, su capacidad de almacenar carbono es moderada-buena, especialmente cuando crece junto a ríos y caños.
        </div>
        <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
            Biomasa = f(grosor del tronco, altura, densidad de la madera)
        </div>
        <p class="text-sm"><strong>¿Por qué importa esto?</strong> Porque los árboles son como esponjas gigantes que atrapan el dióxido de carbono (CO₂) del aire y lo guardan en su madera. Mientras más grande y pesado sea el árbol, más carbono guarda. La Pomarroso, con su madera de densidad media y su copa amplia, es un buen guardián del clima, especialmente cuando crece junto a ríos y caños del Casanare.</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué medimos en campo?</td><td style="padding:6px;">Grosor del tronco a 1.30 m del suelo (DAP) y altura total del árbol</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué calculamos?</td><td style="padding:6px;">Cuántos kilos de carbono tiene guardado ese árbol</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Por qué?</td><td style="padding:6px;">Para saber cuánto ayuda el JBP a combatir el cambio climático</td></tr>
            </table>
        </div>
    `,
    calendario: [
        { mes: "Dic", fase: "El árbol descansa ☀️", clima: "dry" },
        { mes: "Ene", fase: "Empieza a crecer 🌱", clima: "dry" },
        { mes: "Feb", fase: "¡Floración! Pompones blancos 🌸", clima: "dry" },
        { mes: "Mar", fase: "Floración tardía 🌸", clima: "dry" },
        { mes: "Abr", fase: "Se forman los frutos 🟢", clima: "rain" },
        { mes: "May", fase: "¡Cosecha! Frutos maduros 🍈", clima: "rain" },
        { mes: "Jun", fase: "Crecimiento activo 🌧️", clima: "rain" },
        { mes: "Jul", fase: "Crecimiento activo 🌧️", clima: "rain" },
        { mes: "Ago", fase: "Crecimiento activo 🌧️", clima: "rain" },
        { mes: "Sep", fase: "Copa con máximo follaje 🌱", clima: "rain" },
        { mes: "Oct", fase: "Copa con máximo follaje 🌱", clima: "rain" },
        { mes: "Nov", fase: "Se prepara para florecer 🌺", clima: "dry" }
    ],
    morfologia: `
        <div style="display:flex; flex-direction:column; gap:15px; font-size:0.95rem;">
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-tree"></i> ¿Cómo es la Pomarroso?</strong> Es un árbol siempreverde (nunca pierde todas sus hojas) de 3 a 20 metros de altura, con una copa amplia y densa que da mucha sombra. El tronco tiene corteza lisa de color pardo-rojizo o gris castaño. Crece rápido y es ideal para sombra en potreros llaneros.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-seedling"></i> Sus raíces:</strong> Tiene una raíz principal que se hunde profundo y otras raíces superficiales fuertes que abrazan la tierra. <strong>El detalle más útil:</strong> sus raíces estabilizan las orillas de ríos y caños, evitando que el agua se lleve la tierra durante las crecientes del invierno llanero.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-leaf"></i> Sus hojas:</strong> Son simples, alargadas, de color verde brillante. <strong>El detalle más bonito:</strong> cuando el árbol saca hojas nuevas, estas brotan de color <strong>rosado intenso o rojizo</strong>, como pequeñas flores, antes de volverse verdes. Las hojas crecen de dos en dos, en ángulo recto (una característica de su familia).</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-spa"></i> Sus flores:</strong> Son pequeñitas, de color blanco o verdoso, pero tienen muchos estambres largos que parecen <strong>pompones blancos</strong>. Son muy visitadas por abejas porque producen mucho néctar. Florecen en febrero-marzo, cuando empieza el invierno.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-circle-notch"></i> Sus frutos:</strong> Son bayas redondas, de color blanco-rosado cuando maduran. <strong>El detalle más delicioso:</strong> huelen a rosas y saben dulces. Adentro tienen semillas que <strong>pueden flotar en el agua</strong>, lo que les permite viajar por ríos y caños para colonizar nuevas orillas. Son ricos en vitamina C y se usan para hacer dulces y mermeladas.</div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>📌 Para identificarla en campo:</strong> Busca un árbol de copa densa, hojas que brotan rosadas, flores con pompones blancos, y frutos que huelen a rosas. Si ves todo eso junto a un caño en Maní, ¡seguro es una Pomarroso!
        </div>
    `,
    fauna: `
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card"><div class="metric-label">🐝 Abejas y meliponinos</div><div class="section-val text-sm mt-2">Las flores producen gran cantidad de néctar y son intensamente visitadas por abejas. Es una excelente fuente de alimento para la apicultura del piedemonte llanero.</div></div>
            <div class="metric-card"><div class="metric-label">🦜 Loros y pericos</div><div class="section-val text-sm mt-2">Loros reales, cotorras y pericos comen las bayas carnosas directamente en la copa del árbol. Ayudan a dispersar las semillas por los bosques de galería de Maní.</div></div>
            <div class="metric-card"><div class="metric-label">🦇 Murciélagos frugívoros</div><div class="section-val text-sm mt-2">Murciélagos como el murciélago frutero común comen el fruto carnoso por la noche y liberan las semillas a distancia, colonizando nuevas márgenes de caños.</div></div>
            <div class="metric-card"><div class="metric-label">🐦 Pavas y palomas silvestres</div><div class="section-val text-sm mt-2">Pavas de monte y palomas visitan el follaje superior durante la fructificación. Consumen frutos caídos y usan el árbol como percha y refugio.</div></div>
            <div class="metric-card"><div class="metric-label">🦋 Mariposas e insectos</div><div class="section-val text-sm mt-2">El néctar abundante atrae mariposas y otros insectos del piedemonte llanero, contribuyendo a la biodiversidad de polinizadores locales.</div></div>
            <div class="metric-card"><div class="metric-label">🐿️ Mamíferos menores</div><div class="section-val text-sm mt-2">Ardillas y ratones arborícolas consumen frutos caídos y actúan como dispersores secundarios en el sotobosque de galería.</div></div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🔬 La Pomarroso es un árbol de sombra y alimento:</strong> Su copa densa da sombra fresca para el ganado en las horas de máximo sol, y sus frutos alimentan a loros, murciélagos y aves. Además, sus raíces protegen las orillas de los caños contra la erosión.
        </div>
    `,
    usos: `
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card"><div class="metric-label">🍹 Alimentación y repostería</div><div class="section-val text-sm mt-2">El fruto se come fresco por su dulzor y perfume a rosas. Es rico en vitamina C y se usa para hacer dulce de leche, mermeladas, jaleas y jugos frutales en el llano. Las semillas también son comestibles.</div></div>
            <div class="metric-card"><div class="metric-label">🩺 Medicina tradicional</div><div class="section-val text-sm mt-2">Las semillas pulverizadas en infusión se usan para tratar diabetes. La decocción de hojas se usa para ojos irritados y como diurético. La corteza tiene propiedades astringentes para curtiembres y tratamiento de heridas.</div></div>
            <div class="metric-card"><div class="metric-label">🛡️ Control de erosión fluvial</div><div class="section-val text-sm mt-2">Sus raíces superficiales actúan como amarre natural del suelo, estabilizando riberas, taludes fluviales y bordes de caños frente a las crecientes invernales del Casanare. Especie recomendada para restauración de márgenes.</div></div>
            <div class="metric-card"><div class="metric-label">🐄 Sombra ganadera y apicultura</div><div class="section-val text-sm mt-2">Su densa sombra sirve de resguardo para bovinos en potreros durante las horas de máximo sol. Además, su abundante néctar es muy cotizado para el montaje de apiarios de piedemonte.</div></div>
            <div class="metric-card"><div class="metric-label">🔨 Madera y construcción</div><div class="section-val text-sm mt-2">La madera es de fibra recta y fuerte. Se usa para productos rollizos, leña y carbón vegetal. Tiene densidad media-alta pero durabilidad baja a moderada ante humedad y termitas.</div></div>
            <div class="metric-card"><div class="metric-label">🌳 Ornamental y cercas vivas</div><div class="section-val text-sm mt-2">Árbol de sombra y ornamental en fincas llaneras. Se usa como rompevientos en bordes de potreros, cercas vivas y linderos de predios rurales. Valorado por bajo mantenimiento y rápido crecimiento.</div></div>
        </div>
    `,
    mensajeIA: "🌸 ¡Hola, pariente llanero! Soy la <strong>Pomarrosa</strong>, aunque también me llaman <em>Poma</em>, <em>Pero de Agua</em> o <em>Jambo</em> en Brasil. Mi nombre científico es <em>Syzygium jambos</em>, y pertenezco a la gran familia de las Myrtaceae, la misma del guayabo y el clavo de olor.\n\nSoy un viajero muy antiguo. Nací en las selvas húmedas del Sudeste Asiático, a orillas del Mar de Java, donde los monzones me bañaban con lluvia tibia durante meses. Los marineros y exploradores me llevaron en sus barcos como fruta exótica, y así crucé océanos hasta llegar a las tierras calientes del Neotrópico.\n\n✨ <strong>Pero tengo secretos que te van a sorprender</strong>: mis raíces abrazan la tierra para que el río no se lleve las orillas, mis flores blancas con estambres largos se parecen a pequeños pompones que las abejas no pueden resistir, y mis frutos —que huelen a rosas— alimentan a los loros, murciélagos y hasta los becerros curiosos que pasan a la sombra de mi copa.\n\n🌊 <strong>Y otra curiosidad asombrosa</strong>: ¿Sabías que mis semillas saben nadar? Cuando uno de mis frutos cae al caño o al río, la semilla puede flotar durante horas o incluso días, siendo arrastrada por la corriente hasta llegar a un banco de arena o a las orillas de otro caño, donde germina y nace un nuevo árbol. ¡Soy uno de los pocos árboles tropicales que usa los ríos llaneros como \"autopistas\" para expandirse! Esto me convierte en un experto colonizador de riberas.\n\n🍈 <strong>Y algo delicioso</strong>: mis frutos huelen a rosas y saben dulces. Los llaneros me conocen como el \"pomarroso\" o el \"pero de agua\", y me plantan en los bordes de sus fincas para tener sombra en los veranos ardientes, jaleas dulces para el desayuno y medicina cuando alguien tiene fiebre o los ojos irritados.\n\n⚠️ <strong>Pero debo ser honesto contigo</strong>: no soy nativo de esta tierra. Llegué aquí porque alguien me trajo desde Asia hace siglos. Si me plantas en tu finca, disfruta mi sombra y mis frutos, pero recuerda que no tengo las mismas relaciones con la fauna nativa que los árboles que sí nacieron aquí. La belleza y la utilidad deben ir de la mano con el respeto por la naturaleza nativa.\n\n¿Me plantarías en tu paisaje? Si lo haces, que sea con conocimiento y responsabilidad. Soy un árbol que puede dar mucha sombra, alimento y protección a las orillas de los caños... pero también debo ser manejado con cuidado.",
    referencias: [
        "Álvarez, E., Duque, A., Saldarriaga, J., Cabrera, K., de las Salas, G., del Valle, I., Lema, A., Moreno, F., Orrego, S., & Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. <em>Forest Ecology and Management, 267</em>(1), 297–308. https://doi.org/10.1016/j.foreco.2011.12.013",
        "Barreto, J. S., Ramírez-Echeverry, S., Peña, M. A., Capachero, C., Barbosa, A. P., Panev, M., Phillips, J. F., & Moreno, L. M. (2018). <em>Manual de Campo Inventario Forestal Nacional Colombia</em>. Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). Bogotá D.C.",
        "Bernal, R., Gradstein, S. R., & Celis, M. (Eds.). (2020). <em>Catálogo de Plantas y Líquenes de Colombia</em> (v1.1). Universidad Nacional de Colombia. https://doi.org/10.15472/7avdhn",
        "Botanic Gardens Conservation International (BGCI) & IUCN SSC Global Tree Specialist Group. (2019). <em>Syzygium jambos</em>. The IUCN Red List of Threatened Species. e.T49487025A144800316. https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T49487025A144800316.en",
        "Castellanos, J., & Cárdenas, D. (2017). Tipos funcionales de plantas como estimadores de carbono en bosque seco del Caribe colombiano. <em>Revista Mexicana de Biodiversidad, 88</em>(1), 147–157. https://doi.org/10.1016/j.rmb.2016.11.004",
        "Corporación Autónoma Regional de Cundinamarca (CAR). (2013). <em>Guía para la cuantificación de la biomasa y el carbono en inventarios forestales</em>. CAR. Bogotá D.C.",
        "Díaz-Cháux, J. T., Cerón Urquina, C. T., Molina Mendieta, M., Ordóñez García, M. A., & Velasquez-Valencia, A. (2021). Cuantificación del carbono almacenado en la vereda Peregrinos (Solano-Caquetá). Informe técnico del componente de Servicios Ecosistémicos de la Expedición No. 01 Proyecto Colombia BIO Caquetá BIO. Centro de Investigación de la Biodiversidad Andino Amazónica (INBIANAM). Florencia, Caquetá.",
        "Global Biodiversity Information Facility (GBIF). (2019). <em>Syzygium jambos</em> (L.) Alston. GBIF Backbone Taxonomy. Checklist dataset. https://doi.org/10.15468/39omei",
        "González-Blas, M., Huamaní, F., & Herrera-Gutiérrez, L. (2022). Flavonoides y fenoles totales con actividad hipoglicemiante en semillas de <em>Syzygium jambos</em>. <em>Revista de Salud, Amazonía y Bienestar, 1</em>(1), e272. Universidad Nacional de Trujillo.",
        "Kew Science — Plants of the World Online. (2023). <em>Syzygium jambos</em> (L.) Alston. Royal Botanic Gardens, Kew. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:601802-1",
        "Zanne, A. E., Lopez-Gonzalez, G., Coomes, D. A., Ilic, J., Jansen, S., Lewis, S. L., Miller, R. B., Swenson, N. G., Wiemann, M. C., & Chave, J. (2009). Global wood density database. Dryad Digital Repository. https://doi.org/10.5061/dryad.234"
    ],
    quiz: [
        { q: "¿A qué familia botánica pertenece la Pomarroso (Syzygium jambos)?", opts: ["Fabaceae (la familia de los árboles con vainas y semillas secas)", "Moraceae (la familia de las higueras y el árbol de pan)", "Myrtaceae (la misma familia del guayabo y el clavo de olor)", "Rubiaceae (la familia del café)"], correct: 2, expl: "La Pomarroso pertenece a la familia Myrtaceae, la misma del guayabo y el clavo de olor. Esta familia se caracteriza por hojas opuestas, flores con muchos estambres y frutos aromáticos." },
        { q: "¿Por qué las semillas de la Pomarroso pueden dispersarse a lo largo de los caños y ríos del Casanare?", opts: ["Porque tienen alas que las permiten volar con el viento", "Porque las semillas pueden flotar en el agua y tienen alta capacidad de germinación", "Porque las hormigas las transportan largas distancias", "Porque los frutos tienen ganchos que se pegan en el pelo de los animales"], correct: 1, expl: "Las semillas de la Pomarroso tienen alta capacidad de flotación, lo que les permite viajar por ríos y caños durante horas o días. Cuando llegan a un banco de arena o a las orillas de otro caño, germinan y nace un nuevo árbol. ¡Es como si usara los ríos como autopistas para expandirse!" },
        { q: "¿Cuál de los siguientes usos de la Pomarroso es especialmente importante en el contexto de los llanos de Casanare?", opts: ["Como especia para cocinar (como el clavo de olor)", "Como árbol maderero para la construcción de barcos", "Como árbol de sombra en fincas, control de erosión en caños y fuente de néctar para abejas", "Como planta trepadora para cubrir paredes"], correct: 2, expl: "La Pomarroso es muy valorada en Casanare por tres razones: da sombra fresca para el ganado en horas de máximo sol, sus raíces estabilizan las orillas de caños y ríos contra la erosión, y sus flores producen abundante néctar para la apicultura del piedemonte llanero." },
        { q: "¿De qué color brotan las hojas jóvenes de la Pomarroso antes de madurar?", opts: ["Amarillo limón brillante", "Rosado intenso o rojizo", "Blanco verdoso pálido", "Azul metálico"], correct: 1, expl: "Las hojas jóvenes de la Pomarroso brotan de color rosado intenso o rojizo, como pequeñas flores, antes de volverse verdes. Este cambio de color es un espectáculo visual característico que ayuda a identificar el árbol incluso cuando no está floreciendo." }
    ]
},
"palma_areca": {
    id: "#JBP-06", tipo: "Ornamental", nombre: "Palma Areca", cientifico: "Dypsis lutescens (H.Wendl.) Beentje & J.Dransf.",
    familia: "Arecaceae", origen: "Exótico (Madagascar)", estado: "EN — En Peligro (UICN: Hábitat Natural) / No Evaluada en Colombia", exotica: true,
    carbono: 45.2, viajes: 15, imagen_portada: "./imagenes/areca1.jpeg",
    galeria: [
        { img: "./imagenes/areca1.jpeg", desc: "Palma Completa" },
        { img: "./imagenes/areca2.jpeg", desc: "Palma Completa" },
        { img: "./imagenes/areca3.jpeg", desc: "Hojas" },
        { img: "./imagenes/areca4.jpeg", desc: "Frutas" },
        { img: "./imagenes/areca5.jpeg", desc: "Vista inferior" },
        { img: "./imagenes/areca6.jpeg", desc: "Corteza Palma" },
        { img: "./imagenes/areca7.jpeg", desc: "Frutas" }
    ],
    nombresLocales: ["Palma Areca", "Palmera Bambú", "Palma de Frutos de Oro", "Palma Mariposa", "Palma Dorada", "Butterfly Palm (EN)", "Golden Feather Palm (EN)"],
    distribucion: `
        <p><strong>Viajera desde Madagascar:</strong> La Palma Areca no nació en Colombia. Es originaria exclusivamente de Madagascar, una isla enorme en el océano Índico, donde crece en los bosques húmedos cerca del mar. Los humanos la encontraron tan hermosa que la llevaron por todo el mundo. Hoy es una de las palmeras ornamentales más cultivadas del planeta. En Colombia está presente en regiones de clima cálido-húmedo como el Caribe, el Pacífico y la Orinoquía. En Maní (Casanare), la encuentras en parques, casas y jardines, apreciada por su porte elegante y su copa siempreverde.</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Familia</td><td style="padding:6px;">Arecaceae (la familia de las palmeras)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Nombre científico</td><td style="padding:6px;"><em>Dypsis lutescens</em> (antes se llamaba <em>Chrysalidocarpus lutescens</em>)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué significa su nombre?</td><td style="padding:6px;"><em>lutescens</em> = "volverse amarillo" — por el color dorado de sus tallos y hojas</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿De dónde viene?</td><td style="padding:6px;">Madagascar (isla en el océano Índico) — introducida y cultivada en Colombia</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Estado en su hogar</td><td style="padding:6px;">⚠️ <strong>EN Peligro</strong> en Madagascar por destrucción de bosques · En Colombia: cultivada, no nativa</td></tr>
            </table>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid #e74c3c; padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>⚠️ Confusión de nombres:</strong> La "Palma Areca" en Colombia no es del género <em>Areca</em> (que incluye la nuez de betel de Asia). <em>Dypsis lutescens</em> recibe el apodo popular de "areca" por su similitud estética, pero pertenece a un género distinto.
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid #f39c12; padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🌴 Paradoja de conservación:</strong> La Palma Areca es una de las palmeras de interior más vendidas del mundo —con millones de ejemplares cultivados globalmente— mientras que en sus bosques nativos de Madagascar está en peligro crítico de extinción. Su éxito ornamental no ha beneficiado a sus poblaciones silvestres.
        </div>
    `,
    densidad: "0.30 – 0.40 g/cm³ (estipe de densidad baja; Global Wood Density Database)", fraccion: "0.47 (IPCC para monocotiledóneas leñosas tropicales)",
    alometria: `
        <div class="warn-box" style="font-size:0.85rem; border-left:4px solid #3498db; padding-left:12px; margin-bottom:15px; color:var(--text-main);">
            <strong>🌴 Nota especial — Palmeras vs. árboles:</strong> Las palmeras son diferentes a los árboles convencionales: no tienen anillos de crecimiento, su tronco no aumenta de diámetro con la edad, y su biomasa se distribuye de manera diferente. Por eso, las fórmulas para calcular carbono en árboles no aplican directamente a palmeras sin ajustes. Para la Palma Areca, usamos modelos específicos para palmeras tropicales.
        </div>
        <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
            Biomasa = f(altura, diámetro del estipe, densidad)
        </div>
        <p class="text-sm"><strong>¿Por qué importa esto?</strong> Aunque la Palma Areca es pequeña comparada con árboles grandes, su abundancia en jardines y parques la convierte en un componente importante del carbono urbano en Maní. Además, tiene un superpoder único: es una de las mejores plantas purificadoras de aire, certificada por la NASA.</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué medimos?</td><td style="padding:6px;">Altura total del estipe (m) y diámetro del tallo (cm)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué calculamos?</td><td style="padding:6px;">Biomasa aérea y carbono almacenado</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Densidad</td><td style="padding:6px;">0.30–0.40 g/cm³ (madera ligera, típica de palmeras)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Carbono</td><td style="padding:6px;">Aproximadamente la mitad de su peso es carbono (0.47)</td></tr>
            </table>
        </div>
        <div class="metric-card mt-3" style="background:linear-gradient(135deg, #27ae60, #2ecc71); color:white; padding:15px; border-radius:10px;">
            <div class="metric-label" style="color:rgba(255,255,255,0.9); font-weight:700;">💨 Servicio ambiental excepcional — Purificación del Aire</div>
            <div class="section-val text-sm mt-2" style="color:white;">Una palma areca de 2 m de altura transpira aproximadamente <strong>1 litro de agua por día</strong> a través de sus hojas (transpiración foliar), actuando como humidificador natural. Es una de las plantas más eficientes en la eliminación de compuestos orgánicos volátiles (COVs) del aire interior según el <strong>Clean Air Study de la NASA</strong> (Wolverton, 1989): benceno, formaldehído, tricloroetileno, xileno y tolueno.</div>
        </div>
    `,
    calendario: [
        { mes: "Ene", fase: "Verano / Estrés hídrico ☀️", clima: "dry" },
        { mes: "Feb", fase: "Verano / Estrés hídrico ☀️", clima: "dry" },
        { mes: "Mar", fase: "Floración perfumada 🌸", clima: "trans" },
        { mes: "Abr", fase: "Floración sostenida 🌸", clima: "rain" },
        { mes: "May", fase: "Formación de frutos 🍑", clima: "rain" },
        { mes: "Jun", fase: "Frutos dorados madurando ", clima: "rain" },
        { mes: "Jul", fase: "Fructificación activa 🍑", clima: "rain" },
        { mes: "Ago", fase: "Maduración de frutos 🍑", clima: "rain" },
        { mes: "Sep", fase: "Dispersión de semillas ", clima: "rain" },
        { mes: "Oct", fase: "Máxima actividad foliar 🌿", clima: "rain" },
        { mes: "Nov", fase: "Actividad foliar sostenida 🌿", clima: "trans" },
        { mes: "Dic", fase: "Verano / Crecimiento lento ☀️", clima: "dry" }
    ],
    morfologia: `
        <div style="display:flex; flex-direction:column; gap:15px; font-size:0.95rem;">
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-tree"></i> ¿Cómo es la Palma Areca?</strong> Es una palmera siempreverde (nunca pierde todas sus hojas) que crece en matas densas con múltiples tallos delgados. Cada tallo (estipe) es cilíndrico, liso, con anillos marcados donde cayeron las hojas viejas. <strong>Lo más especial:</strong> sus tallos y pecíolos son de color <strong>amarillo-dorado brillante</strong> cuando están expuestos al sol —de ahí viene su nombre "lutescens" que significa "volverse amarillo". Alcanza entre 1.5 y 6 metros de altura, dependiendo de si está en interior o exterior.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-seedling"></i> Sus raíces:</strong> Tiene raíces fibrosas y superficiales (sin raíz pivotante profunda), características de las palmeras. Son sensibles al encharcamiento prolongado, por eso en Maní requiere buen drenaje, especialmente durante el invierno llanero cuando hay inundaciones.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-leaf"></i> Sus hojas:</strong> Son largas (1.5 a 3 metros), arqueadas hacia afuera, con muchos folíolos delgados que parecen plumas gigantes de color verde claro brillante. Los pecíolos (los "palitos" que sostienen las hojas) son de color amarillo-dorado, lo que le da un aspecto muy elegante. <strong>El detalle más útil:</strong> nunca pierde todas sus hojas, así que siempre se ve verde y hermosa.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-spa"></i> Sus flores:</strong> Son pequeñitas, blancas y muy aromáticas, agrupadas en racimos que nacen entre las hojas. Atraen abejas y otros insectos polinizadores. Florecen en marzo-abril, cuando empieza el invierno.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-circle-notch"></i> Sus frutos:</strong> Son pequeñas drupas (como cerezas) de 1-2 cm. <strong>El detalle más bonito:</strong> cuando maduran, brillan como <strong>oro amarillo</strong> —por eso le dicen "palma de frutos de oro"—. Luego se vuelven anaranjados, rojizos y finalmente marrones al secar. Cada fruto tiene una semilla dura adentro.</div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>📌 Para identificarla en campo:</strong> Busca una palmera con tallos delgados y anillados (como bambú), hojas largas en forma de pluma con pecíolos dorados, y frutos amarillo-brillantes cuando maduran. Si ves todo eso en Maní, ¡seguro es una Palma Areca!
        </div>
    `,
    fauna: `
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card"><div class="metric-label">🦜 Aves frugívoras</div><div class="section-val text-sm mt-2">Bichofués, mieleros y tángaras consumen los frutos dorados. En Maní, estas aves nativas son dispersoras potenciales de las semillas.</div></div>
            <div class="metric-card"><div class="metric-label">️ Palomas y pericos</div><div class="section-val text-sm mt-2">Palomas como la tortolita y pericos consumen las semillas caídas. Usan la palma como percha habitual.</div></div>
            <div class="metric-card"><div class="metric-label">🦎 Lagartijas</div><div class="section-val text-sm mt-2">Lagartijas como los anolis usan los tallos expuestos al sol para termorregularse (calentarse) y cazan insectos en la base de las hojas.</div></div>
            <div class="metric-card"><div class="metric-label"> Abejas nativas</div><div class="section-val text-sm mt-2">Abejas nativas sin aguijón (meliponinos) y abejas melíferas visitan las flores aromáticas durante la floración (marzo-abril) para tomar néctar.</div></div>
            <div class="metric-card"><div class="metric-label">️ Arañas</div><div class="section-val text-sm mt-2">Arañas tejedoras hacen telas entre los folíolos para cazar insectos. Son controladores biológicos naturales de plagas.</div></div>
            <div class="metric-card"><div class="metric-label">⚠️ Plagas potenciales</div><div class="section-val text-sm mt-2">En época de verano seco (baja humedad), puede ser atacada por ácaros rojos, cochinillas y pulgones. Requiere riego suplementario durante el verano llanero.</div></div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🔬 La Palma Areca es una planta de interior por excelencia:</strong> Aunque en Maní está en exteriores, su verdadero valor está en espacios interiores donde purifica el aire y aumenta la humedad. Es una de las plantas ornamentales más vendidas del mundo.
        </div>
    `,
    usos: `
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card" style="background:linear-gradient(135deg, #3498db, #2980b9); color:white;"><div class="metric-label" style="color:rgba(255,255,255,0.9);"> Certificación NASA — Clean Air Study (1989)</div><div class="section-val text-sm mt-2" style="color:white;">Incluida en el estudio pionero de la NASA sobre plantas purificadoras de aire interior. Identificada como una de las más efectivas para eliminar benceno, formaldehído, tricloroetileno, xileno y tolueno. Una palma de 1.8 m libera ~1 L agua diario por transpiración, aumentando la humedad relativa.</div></div>
            <div class="metric-card"><div class="metric-label">🌿 Ornamental y paisajismo urbano</div><div class="section-val text-sm mt-2">Una de las palmeras ornamentales de mayor cultivo y comercio en el mundo. En municipios del Casanare (Maní, Yopal, Trinidad, Villanueva), se usa ampliamente en antejardines, parques municipales y centros educativos por su porte elegante, su copa siempreverde y su resistencia al calor.</div></div>
            <div class="metric-card"><div class="metric-label">🏠 Planta de interior y bioarquitectura</div><div class="section-val text-sm mt-2">Palmera de interior por excelencia a nivel mundial. En oficinas gubernamentales, centros de salud y aulas educativas del Casanare, se emplea para mejorar la calidad del aire, reducir el estrés visual, aumentar la humedad relativa en ambientes climatizados y como elemento decorativo de bajo mantenimiento.</div></div>
            <div class="metric-card"><div class="metric-label"> Educación ambiental y vivero</div><div class="section-val text-sm mt-2">En el JBP Maní, tiene valor pedagógico singular: es la única especie del inventario con certificación NASA por purificación del aire. Herramienta excepcional para trabajar temas de contaminación, calidad ambiental y servicios ecosistémicos con estudiantes. Su condición de especie "en peligro en su hogar pero exitosa en el mundo" ilustra las contradicciones de la conservación global.</div></div>
            <div class="metric-card"><div class="metric-label">💰 Valor económico y comercial</div><div class="section-val text-sm mt-2">Genera una industria ornamental global de cientos de millones de dólares anuales. En Colombia, es una de las plantas más comercializadas en viveros y supermercados. En Casanare, los viveros de Yopal y Maní la venden regularmente.</div></div>
            <div class="metric-card"><div class="metric-label">🪡 Artesanías con fibras</div><div class="section-val text-sm mt-2">En Madagascar y comunidades tropicales, las hojas se usan para cestos, sombreros, esteras y artesanías. En el contexto llanero, aunque no existe tradición específica con esta especie introducida, los maestros artesanos del Casanare podrían incorporar sus fibras a las técnicas de tejido con palma moriche.</div></div>
        </div>
    `,
    mensajeIA: `🌴 ¡Hola, pariente llanero! Soy la <strong>Palma Areca</strong>, aunque también me llaman <em>Palmera Bambú</em> o <em>Palma de Frutos de Oro</em>. Mi nombre científico es <em>Dypsis lutescens</em>, y pertenezco a la gran familia de las palmeras (Arecaceae).\n\nNací muy lejos de aquí, en la isla más grande del océano Índico: <strong>Madagascar</strong>. Allá, en los bosques húmedos de la costa este, crecí entre arena, brisa de mar y lluvia tropical. Pero los humanos me encontraron hermosa y decidieron llevarme por todo el mundo, hasta que llegué a este llano de Maní —tan diferente a mi hogar original— y aquí me quedé, verde y orgullosa, en el jardín del JBP.\n\n✨ <strong>Pero tengo secretos que te van a sorprender</strong>: soy muy fácil de reconocer: mis tallos son delgados y anillados como cañas de bambú, mis hojas son largas y arqueadas como plumas gigantes de color verde claro con pecíolos dorados, y mis frutos pequeñitos —cuando maduran— brillan como oro bajo el sol del llano.\n\n🚀 <strong>Y mi superpoder más asombroso</strong>: soy una <strong>máquina limpiadora de aire</strong>. Mis hojas capturan gases tóxicos invisibles —como el formaldehído del plástico nuevo y el benceno de las pinturas— y los transforman en nutrientes para mis raíces. ¡La NASA me estudió y me certificó como una de las mejores plantas purificadoras del planeta! Si me pones en tu cuarto o en el salón de clases, limpiaré el aire mientras tú estudias o duermes. Además, transpiro aproximadamente 1 litro de agua por día, actuando como humidificador natural.\n\n💔 <strong>Pero debo ser honesta contigo</strong>: mientras en el JBP Maní soy una planta saludable y abundante, en mi hogar original de Madagascar estoy <strong>EN PELIGRO DE EXTINCIÓN</strong>. ¡Soy una de las palmeras más cultivadas del mundo y al mismo tiempo una de las más amenazadas en la naturaleza! Imagina: millones de personas me tienen en sus casas y oficinas, pero en los bosques de donde vengo ya casi no quedo. Es la paradoja más triste y más asombrosa de mi historia.\n\n️ <strong>Una advertencia con cariño</strong>: no soy nativa de esta tierra. Llegué aquí porque alguien me trajo desde Madagascar. Si me plantas en tu jardín, disfruta mi belleza y mi capacidad de purificar el aire, pero recuerda que no tengo las mismas relaciones con la fauna nativa que las palmeras que sí nacieron aquí, como la palma moriche. La belleza y la utilidad deben ir de la mano con el respeto por la naturaleza nativa.\n\n¿Me plantarías en tu paisaje? Si lo haces, que sea con conocimiento y responsabilidad. Soy una planta que puede limpiar el aire y embellecer espacios... pero también debo ser manejada con cuidado.`,
    referencias: [
        "Álvarez, E., Duque, A., Saldarriaga, J. G., Cabrera, K., De las Salas, G., Del Valle, J. I., Lema, A., Moreno, F., Orrego, S. A., & Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. <em>Forest Ecology and Management, 267</em>(1), 297–308. https://doi.org/10.1016/j.foreco.2011.12.013",
        "Barros Ribeiro, L., & Gogliath Silva, M. (2006). Comportamento alimentar das aves <em>Pitangus sulphuratus</em>, <em>Coereba flaveola</em> e <em>Thraupis sayaca</em> em palmeiras frutificadas em área urbana. <em>Atualidades Ornitológicas</em>, (132).",
        "Beentje, H. J., & Dransfield, J. (1995). <em>Palms of Madagascar</em>. Royal Botanic Gardens, Kew / International Palm Society.",
        "Bernal, R., Gradstein, S. R., & Celis, M. (Eds.). (2015). <em>Catálogo de plantas y líquenes de Colombia</em>. Instituto de Ciencias Naturales, Universidad Nacional de Colombia. http://catalogoplantasdecolombia.unal.edu.co",
        "Catálogo de Flora del Valle de Aburrá — EIA. (2024). <em>Dypsis lutescens</em> — Areca, palma de frutos de oro. Escuela de Ingeniería de Antioquia. https://catalogofloravalleaburra.eia.edu.co/species/176",
        "Chave, J., Coomes, D., Jansen, S., Lewis, S. L., Swenson, N. G., & Zanne, A. E. (2009). Towards a worldwide wood economics spectrum. <em>Ecology Letters, 12</em>(4), 351–366. https://doi.org/10.1111/j.1461-0248.2009.01285.x",
        "Goodman, R. C., Phillips, O. L., Del Castillo Torres, D., Freitas, L., Cortese, S. T., Monteagudo, A., & Baker, T. R. (2013). Amazon palm biomass and allometry. <em>Forest Ecology and Management, 310</em>, 994–1004. https://doi.org/10.1016/j.foreco.2013.09.045",
        "Henderson, A., Galeano, G., & Bernal, R. (1995). <em>Field guide to the palms of the Americas</em>. Princeton University Press.",
        "IDEAM. (2014). <em>Protocolo para la estimación nacional y subnacional de biomasa-carbono en Colombia</em>. Instituto de Hidrología, Meteorología y Estudios Ambientales. Ministerio de Ambiente y Desarrollo Sostenible.",
        "IPCC. (2006). <em>IPCC guidelines for national greenhouse gas inventories. Volume 4: Agriculture, forestry and other land use</em>. Intergovernmental Panel on Climate Change. https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol4.html",
        "Plants of the World Online / Kew Science. (2024). <em>Dypsis lutescens</em> (H.Wendl.) Beentje & J.Dransf. Royal Botanic Gardens, Kew. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:693428-1",
        "Wolverton, B. C., Johnson, A., & Bounds, K. (1989). <em>Interior landscape plants for indoor air pollution abatement</em> (Technical Report NASA/TM-1989-194349). National Aeronautics and Space Administration, John C. Stennis Space Center.",
        "Zanne, A. E., Lopez-Gonzalez, G., Coomes, D. A., Ilic, J., Jansen, S., Lewis, S. L., Miller, R. B., Swenson, N. G., Wiemann, M. C., & Chave, J. (2009). Global wood density database. Dryad. https://doi.org/10.5061/dryad.234"
    ],
    quiz: [
        { q: "¿Cuál es la característica más llamativa que da el nombre de 'palma de frutos de oro' a la Dypsis lutescens?", opts: ["Sus raíces que brillan bajo el suelo como pepitas de oro", "Sus flores de pétalos completamente dorados y brillantes durante la floración", "Sus frutos drupas de color amarillo brillante al madurar, y también el color dorado-amarillo de sus pecíolos y raquis", "El color dorado que adquieren sus hojas en invierno antes de caer"], correct: 2, expl: "Los frutos de la Palma Areca son drupas pequeñas que brillan como oro amarillo cuando maduran —de ahí el nombre 'palma de frutos de oro'. Además, los pecíolos y raquis de sus hojas también tienen un color dorado-amarillo característico cuando están expuestos al sol." },
        { q: "¿Cuál es el principal servicio ambiental que hace única a la Palma Areca entre las plantas del inventario del JBP Maní, y quién lo certificó científicamente?", opts: ["Fija nitrógeno del aire al suelo como las leguminosas — certificado por el IDEAM", "Produce madera de altísima calidad para carpintería fina — certificado por el CATIE", "Purifica el aire interior eliminando compuestos tóxicos como benceno y formaldehído, y libera hasta 1 litro de agua por día al ambiente — certificado por la NASA en su Clean Air Study (Wolverton, 1989)", "Produce frutos comestibles que alimentan al ganado llanero — certificado por la FAO"], correct: 2, expl: "La Palma Areca fue incluida en el estudio pionero de la NASA sobre plantas purificadoras de aire interior (Clean Air Study, 1989). Es una de las más efectivas para eliminar compuestos orgánicos volátiles (COVs) como benceno, formaldehído, tricloroetileno, xileno y tolueno. Además, una palma de 1.8 m transpira aproximadamente 1 litro de agua por día, actuando como humidificador natural." },
        { q: "¿Por qué la Palma Areca representa una paradoja de conservación a nivel global?", opts: ["Porque es invasora en Colombia pero nativa útil en Madagascar", "Porque crece muy rápido en exteriores pero muere lentamente en interiores", "Porque es una de las palmeras ornamentales más cultivadas y comercializadas del mundo (millones de ejemplares), mientras que en su hábitat natural de Madagascar está categorizada EN PELIGRO (EN) de extinción por la UICN, debido a la destrucción masiva de los bosques litorales malgaches", "Porque purifica el aire pero al mismo tiempo emite CO₂ en exceso por la noche"], correct: 2, expl: "Esta es la paradoja más triste de la Palma Areca: es una de las palmeras de interior más vendidas del mundo, con millones de ejemplares cultivados globalmente, mientras que en sus bosques nativos de Madagascar está en peligro de extinción (categoría EN de la UICN) por la destrucción masiva de los bosques litorales. Su éxito ornamental no ha beneficiado a sus poblaciones silvestres." },
        { q: "¿De qué isla del océano Índico es originaria la Palma Areca?", opts: ["Sri Lanka", "Madagascar", "Java", "Filipinas"], correct: 1, expl: "La Palma Areca es originaria exclusivamente de Madagascar, una isla enorme en el océano Índico, donde crece en los bosques húmedos de la costa este sobre suelos arenosos en elevaciones bajas." },
        { q: "¿Por qué se le conoce popularmente como 'Palmera Bambú' en Casanare?", opts: ["Porque sus hojas son largas y delgadas como las del bambú", "Porque sus tallos son cilíndricos, anillados y crecen en matas cespitosas similares al bambú", "Porque crece cerca de los ríos como el bambú guarúa", "Porque su madera se usa para construir casas como el bambú"], correct: 1, expl: "Se le llama 'Palmera Bambú' porque sus tallos son cilíndricos, delgados, lisos y están marcados con anillos (cicatrices de hojas caídas) que se parecen a los tallos del bambú. Además, crece en matas densas con múltiples tallos desde la base, similar a como crece el bambú." }
    ]
},
"caracaro": {
    id: "#JBP-07", tipo: "Nativo", nombre: "Caracaro", cientifico: "Enterolobium cyclocarpum (Jacq.) Griseb.",
    familia: "Fabaceae", origen: "Nativo Neotrópico (México–Sudamérica)", estado: "LC — Preocupación Menor (UICN)", exotica: false,
    carbono: 285.6, viajes: 92, imagen_portada: "./imagenes/colegio1.jpeg",
    galeria: [
        { img: "./imagenes/caracaro1.jpeg", desc: "Árbol Completo" },
        { img: "./imagenes/caracaro2.jpeg", desc: "Hojas" },
        { img: "./imagenes/caracaro3.jpeg", desc: "Hojas" },
        { img: "./imagenes/caracaro4.jpeg", desc: "Corteza y Tronco" },
        { img: "./imagenes/caracaro5.jpeg", desc: "Vista inferior" }
    ],
    nombresLocales: ["Caracaro", "Orejero", "Piñón de oreja", "Carito", "Caro", "Orejo", "Orejón", "Dormilón", "Árbol de oreja", "Jaboncillo", "Guarano blanco", "Caracaro del Potrero", "Guanacaste (CR)"],
    distribucion: `
        <p><strong>Árbol nativo de las Américas:</strong> El Caracaro es un árbol que nació en estas tierras. Crece desde el centro de México hasta el norte de Sudamérica (Venezuela, Brasil, Colombia) y las islas del Caribe. En Colombia está registrado como especie nativa en la Amazonía, los Andes, el Caribe y la Orinoquía. En Maní (Casanare), lo encuentras en bosques de galería, potreros y sistemas silvopastoriles, donde es fundamental por su sombra densa y sus vainas que alimentan al ganado.</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Familia</td><td style="padding:6px;">Fabaceae (la familia de las leguminosas: fríjoles, acacias, guamos)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Nombre científico</td><td style="padding:6px;"><em>Enterolobium cyclocarpum</em> (significa "fruto circular con forma de intestino")</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué significa su nombre?</td><td style="padding:6px;">Sus vainas son circulares y retorcidas, parecidas a una oreja humana —de ahí le dicen "árbol de la oreja"</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Dónde vive?</td><td style="padding:6px;">Bosques de galería, potreros y sabanas desde México hasta Colombia</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Estado de conservación</td><td style="padding:6px;">✅ Preocupación Menor — no está en peligro, crece rápido y se adapta bien</td></tr>
            </table>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid #27ae60; padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🌎 ¿Sabías esto?</strong> El Caracaro es el <strong>árbol nacional de Costa Rica</strong> desde 1959. En náhuatl (lengua indígena mexicana), "guanacaste" viene de <em>quauh</em> (árbol) + <em>nacastl</em> (oreja), refiriéndose a la forma inconfundible de su fruto.
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🌱 Superpoder ecológico:</strong> Como todas las leguminosas, el Caracaro tiene bacterias en sus raíces que capturan nitrógeno del aire y lo convierten en fertilizante natural. Esto enriquece los suelos pobres del llano y ayuda a que otras plantas crezcan mejor.
        </div>
    `,
    densidad: "0.34 – 0.60 g/cm³ (madera rojiza, liviana a media)", fraccion: "Aproximadamente la mitad de su peso es carbono (0.47)",
    alometria: `
        <div class="warn-box" style="font-size:0.85rem; border-left:4px solid #f39c12; padding-left:12px; margin-bottom:15px; color:var(--text-main);">
            ⚠️ <strong>¿Cómo medimos el carbono del Caracaro?</strong> Para saber cuánto carbono guarda un árbol, los científicos usan fórmulas matemáticas llamadas <em>ecuaciones alométricas</em>. Estas fórmulas usan el grosor del tronco (DAP) y la altura del árbol. Para el Caracaro, aún no tenemos una fórmula específica para los árboles de Casanare, por eso usamos una fórmula general validada para Colombia. Lo que sí sabemos es que su madera tiene densidad media y crece rápido, lo que lo hace un buen guardián del clima.
        </div>
        <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
            Biomasa = f(grosor del tronco, altura, densidad de la madera)
        </div>
        <p class="text-sm"><strong>¿Por qué importa esto?</strong> Porque los árboles son como esponjas gigantes que atrapan el dióxido de carbono (CO₂) del aire y lo guardan en su madera. El Caracaro, con su copa enorme (hasta 30 metros de diámetro) y su crecimiento rápido, es un excelente guardián del clima. Además, como fija nitrógeno, ayuda a que el suelo también guarde más carbono.</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué medimos en campo?</td><td style="padding:6px;">Grosor del tronco a 1.30 m del suelo (DAP) y altura total del árbol</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué calculamos?</td><td style="padding:6px;">Cuántos kilos de carbono tiene guardado ese árbol</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Por qué?</td><td style="padding:6px;">Para saber cuánto ayuda el JBP a combatir el cambio climático</td></tr>
            </table>
        </div>
        <div class="metric-card mt-3" style="background:linear-gradient(135deg, #27ae60, #2ecc71); color:white; padding:15px; border-radius:10px;">
            <div class="metric-label" style="color:rgba(255,255,255,0.9); font-weight:700;">🌱 Servicio ecosistémico clave — Fijación de Nitrógeno</div>
            <div class="section-val text-sm mt-2" style="color:white;">Como leguminosa, el Caracaro fija nitrógeno atmosférico gracias a bacterias que viven en sus raíces. Esto enriquece los suelos de sabana de forma natural, reduciendo la necesidad de fertilizantes químicos y ayudando a que otras plantas crezcan mejor. Es un árbol que alimenta la tierra.</div>
        </div>
    `,
    calendario: [
        { mes: "Ene", fase: "Pierde hojas en verano 🍂", clima: "dry" },
        { mes: "Feb", fase: "Empiezan a brotar hojas nuevas 🌱", clima: "dry" },
        { mes: "Mar", fase: "¡Floración! Flores blancas esponjosas 🌸", clima: "trans" },
        { mes: "Abr", fase: "Floración y formación de frutos 🌸", clima: "rain" },
        { mes: "May", fase: "Frutos creciendo 💧", clima: "rain" },
        { mes: "Jun", fase: "Frutos madurando 🍑", clima: "rain" },
        { mes: "Jul", fase: "Fructificación activa 🍑", clima: "rain" },
        { mes: "Ago", fase: "Vainas madurando 🍑", clima: "rain" },
        { mes: "Sep", fase: "Dispersión de semillas 💧", clima: "rain" },
        { mes: "Oct", fase: "Copa con máximo follaje 🌿", clima: "rain" },
        { mes: "Nov", fase: "Actividad vegetativa 🌿", clima: "trans" },
        { mes: "Dic", fase: "Empieza a perder hojas 🍂", clima: "dry" }
    ],
    morfologia: `
        <div style="display:flex; flex-direction:column; gap:15px; font-size:0.95rem;">
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-tree"></i> ¿Cómo es el Caracaro?</strong> Es un árbol grande de 20 a 30 metros de altura (puede llegar a 45 m en condiciones ideales). Su tronco es derecho y robusto, y su copa es enorme, redondeada como un paraguas gigante (hasta 30 metros de diámetro). Da una sombra densa y fresquísima. Pierde sus hojas en el verano llanero (caducifolio) pero las recupera rápido con las primeras lluvias. Crece muy rápido.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-seedling"></i> Sus raíces:</strong> Tiene una raíz principal profunda que busca agua en la sabana, y otras raíces que se extienden a los lados. <strong>El detalle más importante:</strong> en sus raíces hay pequeños bultos (nódulos) donde viven bacterias que capturan nitrógeno del aire y lo convierten en fertilizante natural. ¡Es una fábrica de abono!</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-folder-open"></i> Su tronco y madera:</strong> El tronco es derecho con corteza gris clara o pardusca, lisa o granulosa. La madera es de color rojizo, de dureza media, fácil de trabajar. Es resistente al fuego y al comején, y aguanta bien la humedad. Los llaneros la usan para hacer canoas, puertas, ventanas y muebles rústicos.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-leaf"></i> Sus hojas:</strong> Son compuestas, muy largas (15-40 cm), con muchos folíolos pequeños. <strong>El detalle más curioso:</strong> las hojas se pliegan de noche o cuando hace mucho calor (nictinastia), como si se fueran a dormir. Además, tienen pequeñas glándulas que producen néctar para atraer hormigas que defienden al árbol de insectos dañinos.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-spa"></i> Sus flores:</strong> Son pequeñitas, blancas y esponjosas, agrupadas en bolitas de 1.5-2 cm. Tienen muchos estambres largos que parecen plumas y huelen muy rico. Atraen abejas y abejorros que las polinizan. Florecen en marzo-abril, cuando empieza el invierno llanero.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-circle-notch"></i> Sus frutos:</strong> <strong>El detalle más inconfundible:</strong> son vainas circulares de 7-15 cm de diámetro, enroscadas en espiral como una oreja humana. Son de color marrón oscuro brillante, con pulpa esponjosa y dulce adentro. Contienen 10-15 semillas grandes y muy duras. El ganado, los caballos y los loros las comen y dispersan las semillas por todo el llano.</div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>📌 Para identificarlo en campo:</strong> Busca un árbol grande con copa redondeada enorme, hojas compuestas que se pliegan de noche, y frutos circulares en forma de oreja. Si ves todo eso en Maní, ¡seguro es un Caracaro!
        </div>
    `,
    fauna: `
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card"><div class="metric-label">🦜 Loras y pericos</div><div class="section-val text-sm mt-2">Loras y pericos como el perico carisucio comen las semillas verdes directamente de las vainas. Ayudan a dispersar las semillas por el llano.</div></div>
            <div class="metric-card"><div class="metric-label">🕊️ Palomas</div><div class="section-val text-sm mt-2">Palomas como la tortolita y la paloma colorada comen las semillas caídas en el suelo. Usan la copa densa como percha y sitio de anidación.</div></div>
            <div class="metric-card"><div class="metric-label">🐄 Ganado y caballos</div><div class="section-val text-sm mt-2">El ganado bovino, los caballos y las dantas comen las vainas maduras con avidez. Las semillas pasan por su sistema digestivo y germinan mejor, dispersándose por todo el potrero.</div></div>
            <div class="metric-card"><div class="metric-label">🦔 Mamíferos silvestres</div><div class="section-val text-sm mt-2">Ratones espinosos y chigüiros comen las semillas caídas y las almacenan, ayudando a que algunas germinen lejos del árbol madre.</div></div>
            <div class="metric-card"><div class="metric-label">🐝 Abejas y abejorros</div><div class="section-val text-sm mt-2">Abejas nativas sin aguijón, abejorros y abejas melíferas visitan las flores blancas y esponjosas en marzo-abril. El Caracaro es una fuente importante de néctar para la apicultura del llano.</div></div>
            <div class="metric-card"><div class="metric-label">🐜 Hormigas defensoras</div><div class="section-val text-sm mt-2">Las hojas tienen glándulas que producen néctar para atraer hormigas. Estas hormigas defienden al árbol de insectos herbívoros. ¡Es como tener guardaespaldas!</div></div>
            <div class="metric-card"><div class="metric-label">🐛 Insectos fitófagos</div><div class="section-val text-sm mt-2">La mosca de agallas (<em>Asphondylia enterolobii</em>) ataca las flores y puede reducir la producción de frutos. Es una plaga natural que debe monitorearse.</div></div>
            <div class="metric-card"><div class="metric-label">🦎 Iguanas</div><div class="section-val text-sm mt-2">Las iguanas comen hojas, flores y frutos. Usan la copa densa para termorregularse (calentarse al sol) durante las mañanas llaneras.</div></div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🔬 El Caracaro es un árbol nodal:</strong> Su copa enorme da sombra al ganado, sus vainas alimentan a muchos animales, sus flores atraen polinizadores, y sus raíces fertilizan el suelo. Es uno de los árboles más importantes para la ganadería sostenible del llano.
        </div>
    `,
    usos: `
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card"><div class="metric-label">🪵 Carpintería y construcción</div><div class="section-val text-sm mt-2">La madera rojiza es de dureza media y fácil de trabajar. Los llaneros la usan para hacer canoas (curiaras), ruedas de carreta, puertas, ventanas, muebles rústicos y artesanías. Aguanta bien la humedad y es resistente al fuego y al comején.</div></div>
            <div class="metric-card"><div class="metric-label">🌾 Forraje y ganadería</div><div class="section-val text-sm mt-2">Es uno de los árboles forrajeros más importantes del llano. Las vainas maduras son consumidas por ganado, caballos y cerdos, proporcionando energía, proteínas y minerales. Un árbol adulto puede producir cientos de kilos de vainas por temporada. Su copa enorme da sombra indispensable para el bienestar animal.</div></div>
            <div class="metric-card"><div class="metric-label">🌿 Medicina tradicional</div><div class="section-val text-sm mt-2">La corteza se usa como cicatrizante y antiinflamatorio. Las infusiones de hojas se toman para afecciones respiratorias y digestivas. La corteza también tiene taninos que se usan para curtir cueros. Estudios científicos han confirmado actividad antibacteriana contra <em>E. coli</em> y <em>S. aureus</em>.</div></div>
            <div class="metric-card"><div class="metric-label">🧼 Usos domésticos</div><div class="section-val text-sm mt-2">La pulpa de las vainas verdes contiene saponinas, sustancias que hacen espuma y sirven como jabón natural. Los llaneros de antes lavaban ropa restregando las vainas contra la tela. La madera se usa para tallar juguetes y utensilios. Las semillas se usan para hacer collares y pulseras.</div></div>
            <div class="metric-card"><div class="metric-label">🌳 Sombra y restauración</div><div class="section-val text-sm mt-2">Se planta en plazas, parques y entradas de fincas por su copa hemisférica y sombra densa. Es especie pionera en restauración de bosques secos degradados. Como fija nitrógeno, es un árbol mejorador de suelo recomendado por la FAO para sistemas agroforestales.</div></div>
            <div class="metric-card"><div class="metric-label">🍽️ Alimentación</div><div class="section-val text-sm mt-2">Las semillas son comestibles tostadas o cocidas (tienen hasta 30% de proteínas). Se consumen en comunidades indígenas del Casanare y Meta. La pulpa interna de las vainas es dulce y se come como alimento de subsistencia en épocas de escasez.</div></div>
        </div>
    `,
    mensajeIA: `🌿 ¡Hola, pariente llanero! Soy el <strong>Caracaro</strong>, aunque también me llaman <em>Orejero</em>, <em>Piñón de oreja</em> o <em>Guanacaste</em> en Costa Rica. Mi nombre científico es <em>Enterolobium cyclocarpum</em>, y pertenezco a la gran familia de las leguminosas, la misma del fríjol y la acacia.\n\nSoy uno de los árboles más viejos y sabios del llano. Mis raíces se hunden profundo en la sabana inundable, buscando agua cuando el verano seca la tierra y la convierte en polvo amarillo. Pero yo no me rindo. Cada año, al llegar el final del verano, me quedo sin hojas y parezco muerto. Los llaneros dicen que "el caracaro se pone pelón". Pero eso es solo un truco: estoy descansando, ahorrando agua, esperando el momento exacto para florecer.\n\n✨ <strong>Cuando el primer viento fresco de marzo llega</strong>, yo despierto. Brotan mis hojas nuevas y al mismo tiempo mis flores blancas y esponjosas cubren mi copa entera como si fuera una nube verde perfumada. Las abejas, mis mejores amigas, vienen desde muy lejos para visitar mis flores. Luego, con las primeras lluvias del invierno, mis frutos van creciendo lentamente. Son mis vainas en forma de oreja —¡sí, exactamente igual que una oreja humana!— las que me hacen inconfundible en todo el llano.\n\n🌱 <strong>Mis raíces guardan un secreto increíble</strong>: dentro de pequeños nódulos, viven bacterias que capturan el nitrógeno del aire —ese gas invisible que está en todas partes— y lo convierten en alimento para mí y para las plantas que crecen a mi alrededor. ¡Soy una fábrica natural de fertilizante!\n\n🧼 <strong>Y otra curiosidad asombrosa</strong>: ¿Sabías que mis vainas verdes tienen un súper poder? Contienen saponinas —una sustancia tan jabonosa que los llaneros de antes lavaban su ropa restregando mis vainas contra la tela sin necesitar jabón. ¡Soy el árbol que hace espuma! Y si eso no fuera poco, mis semillas son tan duras que pueden sobrevivir dentro de la barriga de un caballo y germinar en el otro extremo del llano.\n\n🇨🇷 <strong>Un dato que te va a sorprender</strong>: soy el árbol nacional de Costa Rica desde 1959. En náhuatl (lengua indígena mexicana), "guanacaste" viene de <em>quauh</em> (árbol) + <em>nacastl</em> (oreja), refiriéndose a la forma inconfundible de mi fruto.\n\n¿Me plantarías en tu finca? Si lo haces, que sea con respeto: en linderos de potreros, para sombra en sistemas silvopastoriles, o para restaurar suelos degradados. Soy nativo de esta tierra, y mi misión es servir con sabiduría, no desplazar.`,
    referencias: [
        "Álvarez, E., Duque, A., Saldarriaga, J. G., Cabrera, K., De las Salas, G., Del Valle, J. I., Lema, A., Moreno, F., Orrego, S. A., & Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. <em>Forest Ecology and Management, 267</em>(1), 297–308. https://doi.org/10.1016/j.foreco.2011.12.013",
        "Bernal, R., Gradstein, S. R., & Celis, M. (Eds.). (2015). <em>Catálogo de plantas y líquenes de Colombia</em>. Instituto de Ciencias Naturales, Universidad Nacional de Colombia. http://catalogoplantasdecolombia.unal.edu.co",
        "Bernal, R., Galeano, G., Rodríguez, A., Sarmiento, H., & Gutiérrez, M. (2017). <em>Nombres comunes de las plantas de Colombia</em>. Universidad Nacional de Colombia. http://www.biovirtual.unal.edu.co/nombrescomunes/",
        "Francis, J. K. (1988). <em>Enterolobium cyclocarpum</em> (Jacq.) Griseb. Guanacaste, earpod-tree (SO-ITF-SM-15). U.S. Department of Agriculture, Forest Service, Southern Forest Experiment Station. https://rngr.net/publications/arboles-de-puerto-rico/enterolobium-cyclocarpum",
        "Gentry, A. H. (1993). <em>A field guide to the families and genera of woody plants of northwest South America</em> (Colombia, Ecuador, Peru) with supplementary notes on herbaceous taxa. Conservation International / University of Chicago Press.",
        "IDEAM. (2014). <em>Protocolo para la estimación nacional y subnacional de biomasa-carbono en Colombia</em>. Instituto de Hidrología, Meteorología y Estudios Ambientales. Ministerio de Ambiente y Desarrollo Sostenible.",
        "IPCC. (2006). <em>IPCC guidelines for national greenhouse gas inventories. Volume 4: Agriculture, forestry and other land use</em>. Intergovernmental Panel on Climate Change. https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol4.html",
        "Ibrahim, M., Villanueva, C., Casasola, F., & Rojas, J. (2006). Sistemas silvopastoriles como una herramienta para el mejoramiento de la productividad y generación de servicios ambientales en fincas ganaderas de América Central. <em>Pastos y Forrajes, 29</em>(4), 383–419.",
        "Plants of the World Online / Kew Science. (2024). <em>Enterolobium cyclocarpum</em> (Jacq.) Griseb. Royal Botanic Gardens, Kew. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names/1037928-2",
        "Obando Picado, M. (2010). Condición silvicultural actual y propiedades físicas y generales de la madera de <em>Enterolobium cyclocarpum</em> y <em>Samanea saman</em> en plantaciones mixtas con especies nativas ubicadas en la Estación Experimental Forestal Horizontes, Liberia, Guanacaste [Tesis de Licenciatura]. Instituto Tecnológico de Costa Rica. https://repositoriotec.tec.ac.cr/handle/2238/5669",
        "Pineda-Herrera, E., Valdez-Hernández, J. I., Pérez-Olvera, C. P., & Dávalos-Sotelo, R. (2017). Fenología, incremento en diámetro y periodicidad de anillos de crecimiento de <em>Enterolobium cyclocarpum</em> (Jacq.) Griseb (Leguminoceae) en Costa Grande, Guerrero, México. <em>Polibotánica, 43</em>, 1–21. https://doi.org/10.18387/polibotanica.43.9",
        "Acero Duarte, L. E. (2005). <em>Plantas útiles de la cuenca del Orinoco</em>. BP Exploration Company (Colombia) Limited; Ecopetrol; Corporinoquia."
    ],
    quiz: [
        { q: "¿Cómo es el fruto característico del Caracaro (Enterolobium cyclocarpum) que le da su nombre popular 'árbol de la oreja'?", opts: ["Una drupa carnosa y redonda similar a una cereza grande", "Una cápsula dehiscente que se abre en dos valvas al madurar", "Una vaina circular indehiscente de 7–15 cm de diámetro, aplanada y enroscada en espiral como una oreja, de color marrón oscuro brillante y sabor dulce", "Un sámara alada que vuela con el viento como las semillas del guayacán"], correct: 2, expl: "Los frutos del Caracaro son vainas circulares enroscadas en espiral que se parecen exactamente a una oreja humana. Son indehiscentes (no se abren solas), de color marrón oscuro brillante, con pulpa esponjosa y dulce adentro. Esta forma inconfundible es la razón por la que le dicen 'árbol de la oreja' o 'orejero'." },
        { q: "¿Qué servicio ecosistémico especial ofrecen las raíces del Caracaro a los suelos del llano casanareño?", opts: ["Producen látex medicinal que se extrae para curar heridas", "Sus raíces forman nódulos con bacterias del género Rhizobium que fijan nitrógeno atmosférico, enriqueciendo el suelo de forma natural", "Sus raíces profundas extraen metales pesados del suelo descontaminándolo", "Sus raíces producen sustancias alelopáticas que eliminan malezas competidoras"], correct: 1, expl: "Como leguminosa, el Caracaro tiene bacterias del género Rhizobium que viven en nódulos de sus raíces. Estas bacterias capturan nitrógeno del aire (que las plantas no pueden usar directamente) y lo convierten en formas que las plantas sí pueden absorber. Esto enriquece los suelos pobres del llano de forma natural, reduciendo la necesidad de fertilizantes químicos." },
        { q: "En el calendario fenológico de Maní (Casanare), ¿en qué momento del año florece el Caracaro y qué característica especial tiene su floración?", opts: ["Solo en pleno invierno (junio–julio), cuando hay máxima humedad en el suelo", "Al final del verano e inicio de lluvias (marzo–abril), coincidiendo simultáneamente con la refoliación", "Exclusivamente en otoño (octubre–noviembre), cuando los días se acortan", "Durante todo el año de forma continua sin relación con las estaciones climáticas"], correct: 1, expl: "El Caracaro florece al final del verano e inicio de las lluvias (marzo-abril), y lo hace de forma espectacular: al mismo tiempo que brotan sus hojas nuevas, sus flores blancas y esponjosas cubren toda la copa como una nube perfumada. Esta sincronización maximiza la visibilidad para los polinizadores en un momento crítico del año llanero." },
        { q: "¿Por qué el Caracaro (Enterolobium cyclocarpum) es considerado el árbol nacional de Costa Rica y qué significa el nombre 'Guanacaste' en náhuatl?", opts: ["Por su madera valiosa; 'Guanacaste' significa 'árbol de oro'", "Por su belleza ornamental; 'Guanacaste' significa 'flor del sur'", "Por su importancia cultural y ecológica; 'Guanacaste' viene de 'quauh' (árbol) + 'nacastl' (oreja), refiriéndose a la forma de su fruto", "Por su longevidad extrema; 'Guanacaste' significa 'árbol eterno'"], correct: 2, expl: "El Caracaro fue declarado árbol nacional de Costa Rica el 31 de agosto de 1959 por su importancia cultural, ecológica y económica. El nombre 'Guanacaste' viene del náhuatl (lengua indígena mexicana): 'quauh' significa árbol y 'nacastl' significa oreja, refiriéndose a la forma inconfundible de sus frutos circulares. Es símbolo de la provincia de Guanacaste." }
    ]
},
"mango": {
    id: "#JBP-08", tipo: "Introducido", nombre: "Mango", cientifico: "Mangifera indica L.",
    familia: "Anacardiaceae", origen: "Norte de India y Myanmar (Exótica introducida)", estado: "LC — Preocupación Menor (UICN) / No Evaluada en Colombia", exotica: true,
    carbono: 185.4, viajes: 62, imagen_portada: "./imagenes/mango1.jpeg",
    galeria: [
        { img: "./imagenes/mango1.jpeg", desc: "Árbol Completo" },
        { img: "./imagenes/mango2.jpeg", desc: "Corteza" },
        { img: "./imagenes/mango3.jpeg", desc: "Vista Inferior" },
        { img: "./imagenes/mango4.jpeg", desc: "Hojas" },
        { img: "./imagenes/mango5.jpeg", desc: "Fruto: Mango" }
    ],
    nombresLocales: ["Mango", "Mango criollo", "Palo de mango", "Melocotón de los trópicos", "Mango de azúcar", "Mango de hilacha", "Mango de burro", "Bocado (Venezuela)", "Mango manzano", "Common mango (EN)", "Manga (PT)", "Mangue (FR)"],
    distribucion: `
        <p><strong>Viajero desde la India hace 4.000 años:</strong> El Mango no nació en Colombia. Es originario de los bosques húmedos del norte de la India y Myanmar, donde se cultiva desde hace aproximadamente 4.000 años. Los portugueses lo trajeron a América hace siglos, y llegó a los llanos del Meta y Casanare probablemente a comienzos del siglo XIX, traído desde las Antillas por el río Orinoco. En Maní (Casanare), lo encuentras en patios, hatos y fincas, donde se ha integrado tanto a la cultura llanera que muchos lo perciben como parte del paisaje tradicional, aunque botánicamente sea exótico.</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Familia</td><td style="padding:6px;">Anacardiaceae (la misma familia del merey, la uña de gato y la hiedra venenosa)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Nombre científico</td><td style="padding:6px;"><em>Mangifera indica</em> (significa "el que produce mangos de la India")</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué significa su nombre?</td><td style="padding:6px;"><em>Mangifera</em>: del malayo "manga" + "fer" (el que produce); <em>indica</em>: procedente de la India</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿De dónde viene?</td><td style="padding:6px;">Norte de India y Myanmar — introducido en Colombia hace ~200 años</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Estado en Colombia</td><td style="padding:6px;">⚠️ Especie introducida y naturalizada — ampliamente cultivada en Casanare</td></tr>
            </table>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🥭 Nota de contexto histórico:</strong> Aunque el Mango no es nativo de Colombia, su integración cultural en el llano es tan profunda que muchos lo perciben como parte del paisaje tradicional. Los indígenas guahibos, nómadas por naturaleza, hacían prolongadas estaciones cuando encontraban rodales de mango en cosecha. De su madera se hacían las sillas de montar y asientos rústicos.
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid #e74c3c; padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>⚠️ ALERTA TOXICOLÓGICA:</strong> La madera y corteza del mango contienen <strong>urushiol</strong>, la misma sustancia presente en la hiedra venenosa. Puede causar dermatitis por contacto en personas sensibilizadas. Cuando los niños llaneros muerden el mango directamente del árbol, a veces les sale una manchita roja alrededor de la boca. <strong>La pulpa de adentro es completamente segura y deliciosa</strong>, pero manipula la corteza con guantes.
        </div>
    `,
    densidad: "0.52 – 0.70 g/cm³ (madera semipesada a pesada; Delta-Intkey / InsideWood Database)", fraccion: "Aproximadamente la mitad de su peso es carbono (0.47 – 0.50)",
    alometria: `
        <div class="warn-box" style="font-size:0.85rem; border-left:4px solid #f39c12; padding-left:12px; margin-bottom:15px; color:var(--text-main);">
            ⚠️ <strong>¿Cómo medimos el carbono del Mango?</strong> Para saber cuánto carbono guarda un árbol, los científicos usan fórmulas matemáticas llamadas <em>ecuaciones alométricas</em>. Estas fórmulas usan el grosor del tronco (DAP) y la altura del árbol. Para el Mango, aún no tenemos el dato exacto de qué tan pesada es su madera en Casanare, por eso ese valor lo mediremos directamente en el campo con los árboles del JBP. Lo que sí sabemos es que su madera es semipesada (0.52–0.70 g/cm³), lo que la convierte en un buen guardián del clima.
        </div>
        <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
            Biomasa = f(grosor del tronco, altura, densidad de la madera)
        </div>
        <p class="text-sm"><strong>¿Por qué importa esto?</strong> Porque los árboles son como esponjas gigantes que atrapan el dióxido de carbono (CO₂) del aire y lo guardan en su madera. Mientras más grande y pesado sea el árbol, más carbono guarda. El Mango, con su madera semipesada y su copa densa, es un excelente guardián del clima, especialmente en sistemas agroforestales del llano.</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué medimos en campo?</td><td style="padding:6px;">Grosor del tronco a 1.30 m del suelo (DAP) y altura total del árbol</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué calculamos?</td><td style="padding:6px;">Cuántos kilos de carbono tiene guardado ese árbol</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Por qué?</td><td style="padding:6px;">Para saber cuánto ayuda el JBP a combatir el cambio climático</td></tr>
            </table>
        </div>
    `,
    calendario: [
        { mes: "Dic", fase: "¡Floración! Panículas aromáticas 🌸", clima: "dry" },
        { mes: "Ene", fase: "Floración sostenida 🌸🐝", clima: "dry" },
        { mes: "Feb", fase: "Floración tardía 🌸", clima: "dry" },
        { mes: "Mar", fase: "Se forman los frutos 🍏", clima: "dry" },
        { mes: "Abr", fase: "¡Cosecha! Frutos maduros 🥭", clima: "rain" },
        { mes: "May", fase: "Cosecha máxima 🥭", clima: "rain" },
        { mes: "Jun", fase: "Crecimiento vegetativo 🌧️", clima: "rain" },
        { mes: "Jul", fase: "Crecimiento activo 🌧️", clima: "rain" },
        { mes: "Ago", fase: "Crecimiento activo 🌧️", clima: "rain" },
        { mes: "Sep", fase: "Preparación pre-floral 🌱", clima: "rain" },
        { mes: "Oct", fase: "Preparación pre-floral 🌱", clima: "rain" },
        { mes: "Nov", fase: "Se prepara para florecer 🌸", clima: "dry" }
    ],
    morfologia: `
        <div style="display:flex; flex-direction:column; gap:15px; font-size:0.95rem;">
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-tree"></i> ¿Cómo es el Mango?</strong> Es un árbol siempreverde (nunca pierde todas sus hojas) de 8 a 30 metros de altura, con una copa densa y redondeada que puede alcanzar hasta 30 metros de diámetro. El tronco es recto y robusto, con corteza gruesa, áspera y de color negruzco. Puede vivir más de 100 años y seguir produciendo frutos. En Casanare, los ejemplares típicos tienen unos 14 metros de altura y 80 cm de diámetro.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-seedling"></i> Sus raíces:</strong> Tiene una raíz principal profunda y otras raíces laterales bien desarrolladas. Se adapta a suelos pobres y es eficaz fijando el suelo en sabanas y bordes de caño. Tolera un rango amplio de pH (5–8).</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-folder-open"></i> Su tronco y madera:</strong> La corteza es gruesa, áspera y negruzca, con fisuras verticales. <strong>El detalle más importante:</strong> de las ramas y corteza joven brota un látex resinoso de olor penetrante. La madera es semipesada a pesada, apta para tablas de picar, yugos, carpintería rústica e instrumentos musicales. <strong>⚠️ Contiene urushiol</strong> — manipula con guantes.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-leaf"></i> Sus hojas:</strong> Son simples, alargadas, de color verde oscuro brillante por arriba y más claras por abajo. <strong>El detalle más bonito:</strong> cuando el árbol saca hojas nuevas, estas brotan de color rojizo o rosado, como pequeñas flores, antes de volverse verdes. Las hojas crecen en espiral alrededor de la rama para captar la máxima luz del sol.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-spa"></i> Sus flores:</strong> Son pequeñitas, de color verde-amarillento, agrupadas en racimos piramidales grandes (15-40 cm) que cuelgan de las ramas. Son muy aromáticas y atraen abejas, abejorros y otros insectos polinizadores. Florecen en diciembre-febrero, durante el verano seco, cuando el árbol necesita la sequía como señal para producir flores.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-circle-notch"></i> Sus frutos:</strong> Son drupas grandes (4-25 cm), de forma ovalada o redondeada. <strong>El detalle más delicioso:</strong> por fuera tienen una cáscara lisa que puede ser verde, amarilla, naranja o roja, y por dentro una pulpa carnosa, fibrosa y muy dulce, de color amarillo-anaranjado. Adentro tienen un hueso leñoso con la semilla. En Casanare hay variedades criollas muy valoradas: "mango de azúcar", "de hilacha" y "de burro".</div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>📌 Para identificarlo en campo:</strong> Busca un árbol de copa densa y redondeada, hojas simples alargadas con brotes nuevos rojizos, flores pequeñitas en racimos piramidales aromáticos, y frutos grandes con pulpa amarilla-anaranjada. Si ves todo eso en Maní, ¡seguro es un Mango!
        </div>
    `,
    fauna: `
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card"><div class="metric-label">🐝 Abejas y abejorros</div><div class="section-val text-sm mt-2">Las flores aromáticas del mango son visitadas por abejas melíferas y abejas nativas sin aguijón (meliponinos). El mango es un árbol melífero de primer orden en el llano: sus racimos florales atraen colonias enteras durante la estación seca.</div></div>
            <div class="metric-card"><div class="metric-label">🦜 Loros y pericos</div><div class="section-val text-sm mt-2">Loros reales, cotorras y pericos consumen los frutos maduros e inmaduros. Ayudan a dispersar las semillas por los bosques de galería de Maní.</div></div>
            <div class="metric-card"><div class="metric-label">🐗 Chácharo (pecarí)</div><div class="section-val text-sm mt-2">El chácharo o pecarí de collar consume los frutos caídos con avidez. Es un dispersor importante en sabanas y bosques de galería de la Orinoquía.</div></div>
            <div class="metric-card"><div class="metric-label">🐀 Lapa y picure</div><div class="section-val text-sm mt-2">La lapa (Cuniculus paca) y el picure (Dasyprocta spp.) roen el hueso leñoso del mango para acceder a la pulpa y la semilla. Son dispersores secundarios importantes.</div></div>
            <div class="metric-card"><div class="metric-label">🐦 Turpiales y tángaras</div><div class="section-val text-sm mt-2">Turpiales y tángaras picotean la pulpa madura. Usan las ramas como percha y sitio de canto.</div></div>
            <div class="metric-card"><div class="metric-label">🦇 Murciélagos frugívoros</div><div class="section-val text-sm mt-2">Murciélagos como el murciélago frutero común consumen los frutos por la noche y dispersan las semillas a largas distancias. La copa densa del mango les sirve de refugio diurno.</div></div>
            <div class="metric-card"><div class="metric-label">🐛 Mosca del mango</div><div class="section-val text-sm mt-2">La mosca del mango (Anastrepha spp.) es la principal plaga del cultivo. Pone sus huevos dentro del fruto, y las larvas se alimentan de la pulpa. Requiere manejo integrado en fincas llaneras.</div></div>
            <div class="metric-card"><div class="metric-label">🐄 Ganado y équidos</div><div class="section-val text-sm mt-2">El mango proporciona sombra permanente en hatos y fundos. Los frutos caídos son consumidos por el ganado como forraje suplementario.</div></div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🔬 El Mango es un árbol de sombra y alimento:</strong> Su copa densa da sombra fresca para el ganado en las horas de máximo sol, y sus frutos alimentan a loros, murciélagos, pecaríes y aves. Además, sus flores atraen polinizadores durante la estación seca, cuando escasean otros recursos florales en el llano.
        </div>
    `,
    usos: `
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card"><div class="metric-label">🍹 Alimentación</div><div class="section-val text-sm mt-2">El fruto se consume fresco, en jugos, mermeladas y bocadillos. Es rico en vitamina A, C, betacarotenos y fibra. El "mango de azúcar" criollo del Casanare es muy valorado. El fruto verde ("biche") se usa con sal y limón como aperitivo llanero.</div></div>
            <div class="metric-card"><div class="metric-label">💊 Medicina tradicional (hojas)</div><div class="section-val text-sm mt-2">La decocción de hojas se usa para afecciones respiratorias, tos y asma. La infusión se toma como antidiabético tradicional. Las hojas masticadas alivian ampollas bucales.</div></div>
            <div class="metric-card"><div class="metric-label">💊 Medicina tradicional (corteza y raíz)</div><div class="section-val text-sm mt-2">La corteza se usa como desinfectante de heridas (comunidad Siona). La raíz se usa como diurético y para problemas gastrointestinales. Es astringente para diarreas crónicas y se usa para tratar carate y vitíligo.</div></div>
            <div class="metric-card"><div class="metric-label">💊 Medicina tradicional (semilla)</div><div class="section-val text-sm mt-2">El polvo seco de la semilla se usa como antiparasitario contra Ascaris. La almendra contiene triterpenos y esteroles bioactivos con propiedades medicinales.</div></div>
            <div class="metric-card"><div class="metric-label">🔬 Mangiferina (compuesto bioactivo)</div><div class="section-val text-sm mt-2">Las hojas y corteza contienen mangiferina, una xantona glucosilada con propiedades antioxidantes, antidiabéticas, antimicrobianas y anticancerígenas confirmadas científicamente. Es un "milagro natural" contra enfermedades relacionadas con el estilo de vida.</div></div>
            <div class="metric-card"><div class="metric-label">🪵 Madera y artesanía</div><div class="section-val text-sm mt-2">La madera se usa para utensilios de cocina, yugos para bueyes, carpintería rústica, instrumentos musicales (ukuleles, marimbas) y carbón vegetal. Los indígenas guahibos hacían sillas de montar con esta madera.</div></div>
            <div class="metric-card"><div class="metric-label">🎨 Tintura y taninos</div><div class="section-val text-sm mt-2">La corteza produce un colorante amarillo. Los taninos de la familia Anacardiaceae se usan para curtiembre de cueros.</div></div>
            <div class="metric-card"><div class="metric-label">🌳 Servicios ecosistémicos</div><div class="section-val text-sm mt-2">El mango proporciona sombra insustituible en hatos, actúa como rompevientos, fija el suelo y es componente de sistemas silvopastoriles sin necesidad de riego ni fertilización.</div></div>
        </div>
        <div class="blockquote-pro mt-3" style="border-left:4px solid var(--primary-light); padding-left:15px; background:rgba(0,0,0,0.02); padding:12px; border-radius:6px;">
            <p><strong>📜 Herencia cultural llanera:</strong></p>
            <p style="font-style:italic;">"La orejiniela soy yo, amiga del rey zamuro,<br>y salgo en semana santa a comer mango maduro."</p>
            <p style="margin-top:10px;"><strong>Adivinanza tradicional:</strong><br>¿Qué es lo que tiene carne por fuera y los pelos por dentro?<br><em>El mango.</em></p>
            <p style="margin-top:10px; font-size:0.85rem;">Muchos animales de la fauna silvestre, entre ellos el chácharo o pecarí de collar, la lapa y el picure, comen con avidez sus frutos. Los indígenas guahibos, nómadas por naturaleza, hacían prolongadas estaciones cuando encontraban en su camino rodales de árbol de mango en cosecha.</p>
        </div>
    `,
    mensajeIA: `🥭 ¡Hola, pariente llanero! Soy el <strong>Mango</strong>, aunque también me llaman <em>Melocotón de los Trópicos</em> o <em>Mango de azúcar</em> en Casanare. Mi nombre científico es <em>Mangifera indica</em>, y pertenezco a la gran familia de las Anacardiaceae, la misma del merey y la hiedra venenosa.\n\nNací en los bosques húmedos y montañosos del norte de la India, cerca de Myanmar, donde monjes y viajeros me cargaban en sus bolsas hace más de 4.000 años. Crucé océanos con marineros persas, luego los portugueses me embarcaron desde Goa hacia África, Brasil y México. Cuando llegué a los llanos del Casanare, supe que había encontrado mi lugar: el verano largo y seco de diciembre a marzo me despierta del letargo, mis ramas se llenan de racimos piramidales con miles de florecitas perfumadas, y las abejas, turpiales y colibríes no se resisten a mi néctar.\n\n✨ <strong>Pero tengo secretos que los científicos apenas están descubriendo</strong>: mis hojas y mi corteza guardan la <strong>mangiferina</strong>, un compuesto que puede ayudar a combatir la diabetes, los hongos y hasta algunas células enfermas. ¡Soy una farmacia natural!\n\n⚠️ <strong>Pero debo ser honesto contigo</strong>: pertenezco a la misma familia que la hiedra venenosa. Mi piel y mi madera contienen <strong>urushiol</strong>, la misma sustancia que causa sarpullido en personas sensibles. Por eso, cuando los niños llaneros muerden el mango directamente del árbol, a veces les sale una manchita roja alrededor de la boca. La pulpa de adentro, eso sí, es completamente segura y deliciosa.\n\n🌳 <strong>Y otra curiosidad asombrosa</strong>: puedo vivir más de 100 años y seguir produciendo frutos. En Bangladesh hay un mango de 110 años que sigue dando cosecha. Soy el árbol frutal más paciente del mundo, y mientras haya un llanero bajo mi sombra esperando que caiga el primero, yo seguiré floreciendo cada verano.\n\n📜 <strong>Un dato cultural</strong>: Los indígenas guahibos, nómadas por naturaleza, hacían prolongadas estaciones cuando encontraban rodales de mango en cosecha. De mi madera hacían las sillas de montar y asientos rústicos. En el llano, hay una adivinanza que dice: "¿Qué es lo que tiene carne por fuera y los pelos por dentro? El mango."\n\n¿Me plantarías en tu finca? Si lo haces, que sea con conocimiento y responsabilidad. Soy un árbol que puede dar mucha sombra, alimento y medicina... pero también debo ser manejado con cuidado por el urushiol de mi corteza.`,
    referencias: [
        "Álvarez, E., Duque, A., Saldarriaga, J., Cabrera, K., de las Salas, G., del Valle, I., Lema, A., Moreno, F., Orrego, S., & Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. <em>Forest Ecology and Management, 267</em>(1), 297–308. https://doi.org/10.1016/j.foreco.2011.12.013",
        "Barreto, J. S., Ramírez-Echeverry, S., Peña, M. A., Capachero, C., Barbosa, A. P., Panev, M., Phillips, J. F., & Moreno, L. M. (2018). <em>Manual de Campo Inventario Forestal Nacional Colombia</em>. IDEAM.",
        "Bernal, R., Gradstein, S. R., & Celis, M. (Eds.). (2020). <em>Catálogo de Plantas y Líquenes de Colombia</em> (v1.1). Universidad Nacional de Colombia. https://doi.org/10.15472/7avdhn",
        "Chave, J. (2006). <em>Medición de densidad de madera en árboles tropicales: Manual de campo</em>. Laboratoire Évolution et Diversité Biologique, Université Paul Sabatier.",
        "Chave, J., Réjou-Méchain, M., Búrquez, A., Chidumayo, E., Colgan, M. S., Delitti, W. B. C., Duque, A., Eid, T., Fearnside, P. M., Goodman, R. C., Henry, M., Martínez-Yrízar, A., Mugasha, W. A., Muller-Landau, H. C., Mencuccini, M., Nelson, B. W., Ngomanda, A., Nogueira, E. M., Ortiz-Malavassi, E., … Vieilledent, G. (2014). Improved allometric models to estimate the aboveground biomass of tropical trees. <em>Global Change Biology, 20</em>(10), 3177–3190. https://doi.org/10.1111/gcb.12629",
        "Departamento Administrativo Nacional de Estadística (DANE). (2019). <em>El cultivo del mango (Mangifera indica L.) en Colombia y un estudio de caso de los costos de producción en el municipio de Espinal (Tolima)</em>. Boletín de Insumos y Factores Asociados a la Producción Agropecuaria.",
        "Imran, M., Arshad, M. S., Butt, M. S., Kwon, J.-H., Arshad, M. U., & Sultan, M. T. (2017). Mangiferin: a natural miracle bioactive compound against lifestyle related disorders. <em>Lipids in Health and Disease, 16</em>(84). https://doi.org/10.1186/s12944-017-0449-y",
        "Riesco Muñoz, G., Imaña Encinas, J., & de Paula, J. E. (2019). Densidad de la madera de 59 especies del orden Sapindales procedentes de bosques naturales brasileños. <em>Madera y Bosques, 25</em>(2), e2521817. https://doi.org/10.21829/myb.2019.2521817",
        "TRAMIL Network. (2023). <em>Mangifera indica L. — Ficha etnofarmacológica</em>. Tramil Caribbean Medicinal Plant Database.",
        "Zanne, A. E., Lopez-Gonzalez, G., Coomes, D. A., Ilic, J., Jansen, S., Lewis, S. L., Miller, R. B., Swenson, N. G., Wiemann, M. C., & Chave, J. (2009). Global wood density database. Dryad. https://doi.org/10.5061/dryad.234"
    ],
    quiz: [
        { q: "¿De dónde es originario el árbol de mango (Mangifera indica) y cuánto tiempo lleva siendo cultivado por el ser humano?", opts: ["Es originario de África central y lleva unos 500 años de cultivo en el trópico americano", "Es originario de la Amazonia colombiana y Venezuela, donde se cultiva desde hace 1.000 años", "Es originario del norte de la India y Myanmar, con aproximadamente 4.000 años de cultivo continuo por el ser humano", "Es nativo de los llanos del Casanare y Arauca, donde crece silvestre de forma natural"], correct: 2, expl: "El Mango es originario de los bosques húmedos del norte de la India y Myanmar, donde se cultiva desde hace aproximadamente 4.000 años. Los portugueses lo trajeron a América hace siglos, y llegó a los llanos del Meta y Casanare probablemente a comienzos del siglo XIX, traído desde las Antillas por el río Orinoco." },
        { q: "¿Por qué en Maní (Casanare) el mango florece principalmente entre diciembre y febrero, durante la época de verano?", opts: ["Porque en esa época el suelo tiene más nutrientes disponibles gracias a las inundaciones de los caños", "Porque el mango prefiere períodos secos para florecer; la estación sin lluvias actúa como señal hormonal para que el árbol produzca sus flores aromáticas", "Porque las abejas solo están activas en los meses de verano y sin ellas el mango no puede florecer", "Porque la temperatura baja en diciembre y eso estimula la aparición de las flores"], correct: 1, expl: "El Mango necesita la sequía como señal hormonal para florecer. En Casanare, el verano seco de diciembre a febrero actúa como un 'despertador' natural que le dice al árbol: 'es hora de producir flores'. Cuando llegan las primeras lluvias de abril, los frutos ya están maduros, amarillos o naranja, y toda la sabana huele a mango." },
        { q: "¿Qué compuesto bioactivo importante se extrae de las hojas y la corteza del mango, y para qué sirve según la ciencia?", opts: ["La cafeína, que es un estimulante del sistema nervioso central", "La pectina, que se usa exclusivamente para hacer mermeladas y jaleas", "El urushiol, que tiene propiedades curativas contra enfermedades de la piel en los llanos", "La mangiferina, una xantona con propiedades antioxidantes, antidiabéticas, antimicrobianas y anticancerígenas confirmadas científicamente"], correct: 3, expl: "La mangiferina es una xantona glucosilada que se encuentra en las hojas y corteza del mango. Investigaciones científicas han confirmado que tiene propiedades antioxidantes, antidiabéticas, antimicrobianas y anticancerígenas. Es considerada un 'milagro natural' contra enfermedades relacionadas con el estilo de vida moderno." }
    ]
},
"maiz_tostado": {
    id: "#JBP-09", tipo: "Nativo", nombre: "Maíz Tostado", cientifico: "Coccoloba acuminata Kunth",
    familia: "Polygonaceae", origen: "Nativa Neotrópico — México SE a Sudamérica. Nativa de Colombia", estado: "LC — Preocupación Menor (UICN 2021)", exotica: false,
    carbono: 85.3, viajes: 42, imagen_portada: "./imagenes/tostado1.jpeg",
    galeria: [
        { img: "./imagenes/tostado1.jpeg", desc: "" },
        { img: "./imagenes/tostado2.jpeg", desc: "" },
        { img: "./imagenes/tostado3.jpeg", desc: "" },
        { img: "./imagenes/tostado4.jpeg", desc: "" }
    ],
    nombresLocales: ["Maíz Tostado", "Maíz tostao", "Uva de Coral", "Uva de Monte", "Uvero", "Uva silvestre", "Bejuco de uvero"],
    distribucion: `
        <p><strong>Árbol nativo de los bordes de caños:</strong> El Maíz Tostado es un árbol que nació en estas tierras. Crece desde el sureste de México hasta el sur de Sudamérica. En Colombia está registrado en la Llanura del Caribe, la Orinoquía, el Pacífico y el Valle del Magdalena, entre 0 y 500 metros de altura. En Maní (Casanare), lo encuentras en bosques de galería (los que bordean los ríos), sabanas arboladas y márgenes de caños, donde prospera en el piso térmico cálido.</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Familia</td><td style="padding:6px;">Polygonaceae (la familia del alforfón y las espinacas)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Nombre científico</td><td style="padding:6px;"><em>Coccoloba acuminata</em> (significa "con punta aguda", por sus hojas)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué significa su nombre?</td><td style="padding:6px;"><em>acuminata</em> = "acuminado" (con punta alargada); sus hojas tienen puntas muy afiladas</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Dónde vive?</td><td style="padding:6px;">Bosques de galería, sabanas arboladas y márgenes de caños desde México hasta Sudamérica</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Estado de conservación</td><td style="padding:6px;">✅ Preocupación Menor — no está en peligro, crece bien y se adapta</td></tr>
            </table>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🌎 Dato curioso:</strong> El nombre "Maíz Tostado" hace referencia a la apariencia de los frutos maduros agrupados en espigas, que recuerdan una mazorca de maíz tostado por su textura y coloración. "Uva de Coral" enfatiza el color encendido de los frutos maduros, que brillan como pequeñas joyas rojas en las ramas.
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🔬 Sello secreto de la familia:</strong> El Maíz Tostado pertenece a la familia Polygonaceae, que tiene un rasgo único: en cada nudo de sus tallos hay unas pequeñas bolsitas membranosas llamadas <strong>ócreas</strong>, como diminutas bufandas que abrazan las ramas. Ninguna otra familia de plantas tiene estas ócreas. Si encuentras un arbusto con esas bolsitas en los nudos, ya sabes que es un pariente del Maíz Tostado.
        </div>
    `,
    densidad: "0.60 – 0.80 g/cm³ (madera semidura a dura; ⚠️ por verificar en campo)", fraccion: "Aproximadamente la mitad de su peso es carbono (0.47 – 0.50)",
    alometria: `
        <div class="warn-box" style="font-size:0.85rem; border-left:4px solid #f39c12; padding-left:12px; margin-bottom:15px; color:var(--text-main);">
            ⚠️ <strong>¿Cómo medimos el carbono del Maíz Tostado?</strong> Para saber cuánto carbono guarda un árbol, los científicos usan fórmulas matemáticas llamadas <em>ecuaciones alométricas</em>. Estas fórmulas usan el grosor del tronco (DAP) y la altura del árbol. Para el Maíz Tostado, aún no tenemos el dato exacto de qué tan pesada es su madera en Casanare, por eso ese valor lo mediremos directamente en el campo con los árboles del JBP. Lo que sí sabemos es que su madera es semidura a dura (0.60–0.80 g/cm³), lo que la convierte en un buen guardián del clima.
        </div>
        <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
            Biomasa = f(grosor del tronco, altura, densidad de la madera)
        </div>
        <p class="text-sm"><strong>¿Por qué importa esto?</strong> Porque los árboles son como esponjas gigantes que atrapan el dióxido de carbono (CO₂) del aire y lo guardan en su madera. Mientras más grande y pesado sea el árbol, más carbono guarda. El Maíz Tostado, con su madera semidura y su copa densa, es un excelente guardián del clima, especialmente en bosques de galería del llano.</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué medimos en campo?</td><td style="padding:6px;">Grosor del tronco a 1.30 m del suelo (DAP) y altura total del árbol</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué calculamos?</td><td style="padding:6px;">Cuántos kilos de carbono tiene guardado ese árbol</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Por qué?</td><td style="padding:6px;">Para saber cuánto ayuda el JBP a combatir el cambio climático</td></tr>
            </table>
        </div>
        <div class="warn-box mt-2" style="font-size:0.8rem; border-left:4px solid #e74c3c; padding-left:10px; color:var(--text-main); margin-top: 15px;">
            💡 <strong>Consideración especial:</strong> Por ser el Maíz Tostado frecuentemente un arbusto o árbol pequeño (DAP = 3–6 cm en hábitats perturbados), se recomienda complementar la ecuación alométrica con mediciones de biomasa radical estimada y biomasa foliar. Para individuos con DAP menor a 5 cm se sugiere consultar las ecuaciones para plantas leñosas tropicales de pequeño porte.
        </div>
    `,
    calendario: [
        { mes: "Dic", fase: "Verano / Frutos maduros 🍇", clima: "dry" },
        { mes: "Ene", fase: "Verano / Frutos maduros 🍇", clima: "dry" },
        { mes: "Feb", fase: "Verano / Posible floración 🌸", clima: "dry" },
        { mes: "Mar", fase: "Verano / Follaje siempreverde 🌿", clima: "dry" },
        { mes: "Abr", fase: "Inicio lluvias / Floración principal 🌸", clima: "rain" },
        { mes: "May", fase: "Floración tardía 🌸", clima: "rain" },
        { mes: "Jun", fase: "Cuajado de frutos 🟢", clima: "rain" },
        { mes: "Jul", fase: "Desarrollo de frutos 🍇", clima: "rain" },
        { mes: "Ago", fase: "Fructificación activa 🍇", clima: "rain" },
        { mes: "Sep", fase: "Maduración de frutos 🍇", clima: "rain" },
        { mes: "Oct", fase: "Cosecha máxima 🍇", clima: "rain" },
        { mes: "Nov", fase: "Dispersión de semillas 💧", clima: "rain" }
    ],
    morfologia: `
        <div style="display:flex; flex-direction:column; gap:15px; font-size:0.95rem;">
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-tree"></i> ¿Cómo es el Maíz Tostado?</strong> Es un arbusto o árbol pequeño a mediano, siempreverde (nunca pierde todas sus hojas), de 6 a 10 metros de altura máxima en bosque de galería; frecuentemente 2–5 metros en zonas perturbadas. Su copa es reducida, con follaje de densidad media. Crece a ritmo moderado y puede vivir entre 20 y 30 años.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-seedling"></i> Sus raíces:</strong> Tiene una raíz principal profunda y otras raíces laterales que se extienden en la superficie. En ambientes riparios (cerca de ríos) desarrolla raíces adventicias superficiales para anclarse en suelos con fluctuaciones de agua. No tiene nódulos para fijar nitrógeno, pero puede tener asociaciones con hongos beneficiosos (micorrizas).</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-folder-open"></i> Su tronco y corteza:</strong> El tronco es erecto o semierecto, ramificado desde la base. La corteza externa es pardo grisácea, lisa en árboles jóvenes, con pequeñas lenticelas visibles en ramas maduras. <strong>El detalle más especial:</strong> en cada nudo del tallo hay unas pequeñas bolsitas membranosas llamadas <strong>ócreas</strong>, que envuelven la rama como diminutas bufandas. Este es el sello distintivo de la familia Polygonaceae —ninguna otra familia de plantas tiene estas ócreas.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-leaf"></i> Sus hojas:</strong> Son simples, con pecíolo (tallito que las sostiene), de forma ovalada a lanceolada. <strong>El detalle más característico:</strong> tienen puntas muy afiladas y alargadas (de ahí el nombre <em>acuminata</em>). La base es redondeada o levemente acorazonada, y el margen es entero o levemente ondulado. Son de textura subcoriácea (un poco duras), con nervación prominente. El haz (parte de arriba) es verde oscuro brillante, y el envés (parte de abajo) es más claro.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-spa"></i> Sus flores:</strong> Son espigas terminales o axilares, erectas o péndulas, de color blanco a blanco verdoso. Las flores son pequeñitas, hermafroditas o funcionalmente unisexuales, con 5 tépalos fusionados en la base. La polinización es principalmente por viento (anemófila), aunque también pueden atraer insectos oportunistas.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-circle-notch"></i> Sus frutos:</strong> Son aquenios triangulados (característicos de Polygonaceae), envueltos por un perianto carnoso y brillante que se vuelve comestible al madurar. <strong>El detalle más llamativo:</strong> los frutos están agrupados en espigas densas que <strong>asemejan una mazorca de maíz tostado</strong>. Cambian de color mientras maduran: primero son verdes, luego se vuelven <strong>rojo coral brillante</strong> (de ahí el nombre "Uva de Coral"). Las semillas son pequeñas, con cáscara dura. Se dispersan por viento y por animales (aves y mamíferos).</div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>📌 Para identificarlo en campo:</strong> Busca un arbusto o árbol pequeño con hojas de punta muy afilada, ócreas en los nudos del tallo (bolsitas membranosas), y frutos agrupados en espigas que parecen maíz tostado o uvas de coral. Si ves todo eso en Maní, ¡seguro es un Maíz Tostado!
        </div>
    `,
    fauna: `
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card"><div class="metric-label">🦜 Aves frugívoras</div><div class="section-val text-sm mt-2">Tangaras, manakins y palomas silvestres comen los frutos maduros. Ayudan a dispersar las semillas por los bosques de galería de Maní.</div></div>
            <div class="metric-card"><div class="metric-label">🐒 Primates</div><div class="section-val text-sm mt-2">Micos como el capuchino (Cebus apella) y los squirrel monkeys (Saimiri spp.) consumen los frutos en racimo en bosques de galería.</div></div>
            <div class="metric-card"><div class="metric-label">🦇 Murciélagos frugívoros</div><div class="section-val text-sm mt-2">Murciélagos como el murciélago frutero común (Artibeus spp.) y el murciélago de cola corta (Carollia spp.) consumen los frutos por la noche y dispersan las semillas a largas distancias.</div></div>
            <div class="metric-card"><div class="metric-label">🦌 Venado cola blanca</div><div class="section-val text-sm mt-2">El venado cola blanca (Odocoileus virginianus) consume los frutos caídos en el sotobosque del bosque de galería.</div></div>
            <div class="metric-card"><div class="metric-label">🐝 Abejas y avispas</div><div class="section-val text-sm mt-2">Varias especies de abejas y avispas visitan las flores para tomar néctar. Son polinizadores ocasionales, ya que la polinización principal es por viento.</div></div>
            <div class="metric-card"><div class="metric-label">🦋 Mariposas neotropicales</div><div class="section-val text-sm mt-2">Diversas especies de mariposas visitan las flores blancas en espigas para tomar néctar durante la floración.</div></div>
            <div class="metric-card"><div class="metric-label">🐛 Herbívoros foliares</div><div class="section-val text-sm mt-2">Diversos insectos consumen las hojas jóvenes del árbol, siendo parte natural del ecosistema.</div></div>
            <div class="metric-card"><div class="metric-label">🐜 Hormigas</div><div class="section-val text-sm mt-2">Varias especies de hormigas actúan como dispersoras de semillas (mirmecoria), ayudando a que nazcan nuevos árboles.</div></div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🔬 Nota ecológica:</strong> El género Coccoloba presenta asociaciones con macrohongos micorrícicos (Amanitaceae, Russulaceae, Boletaceae), documentadas para especies hermanas como C. uvifera. Estas asociaciones pueden tener implicaciones en la absorción de nutrientes en suelos pobres de la sabana llanera. La dispersión de semillas por aves (ornitocoria) es posiblemente el principal mecanismo de regeneración natural en bosques de galería.
        </div>
    `,
    usos: `
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card"><div class="metric-label">🍇 Alimentación (uso principal)</div><div class="section-val text-sm mt-2">Los frutos maduros son carnosos, de sabor variable entre dulce y ligeramente astringente. Se consumen frescos, en mermeladas y en postres artesanales. Este uso está registrado en el Catálogo de Plantas Útiles de Colombia (ColPlantA, 2021). En comunidades llaneras y ribereñas del Meta y Casanare, la planta es conocida como fuente de frutos silvestres de temporada, apreciados especialmente por niños y recolectores.</div></div>
            <div class="metric-card"><div class="metric-label">💊 Medicina tradicional</div><div class="section-val text-sm mt-2">El ColPlantA (2021) confirma el uso medicinal de C. acuminata. Extrapolando del conocimiento etnobotánico del género en el Neotrópico: el cocimiento de la corteza se usa como antidiarreico y astringente gastrointestinal (por sus taninos); la infusión de hojas como febrífugo y para aliviar malestares respiratorios leves; la corteza se aplica tópicamente en heridas superficiales por propiedades hemostáticas; y el fruto fresco se usa para aliviar la sed. <strong>Nota:</strong> Los usos medicinales son inferidos del patrón del género; se recomienda consulta directa con sabedores tradicionales de Maní para documentar usos locales específicos.</div></div>
            <div class="metric-card"><div class="metric-label">🌳 Usos ornamentales y agroforestales</div><div class="section-val text-sm mt-2">Árbol o arbusto ornamental en jardines y parques de zonas tropicales. Se usa como árbol de sombrío liviano en sistemas silvopastoriles de baja densidad. Es especie nodal para fauna en corredores biológicos en bordes de bosques de galería, elemento de revegetalización en márgenes de caños y quebradas del llano, y especie centinela de biodiversidad en inventarios forestales.</div></div>
            <div class="metric-card"><div class="metric-label">🪵 Madera y artesanía</div><div class="section-val text-sm mt-2">Aunque no es de uso maderable comercial significativo por su porte predominantemente arbustivo, la madera de individuos adultos puede emplearse en herramientas y utensilios menores de uso doméstico (mangos, palancas), leña y carbón vegetal de uso doméstico (densidad media-alta = buen poder calorífico), y artesanía de pequeño formato (torneado, marquetería).</div></div>
        </div>
    `,
    mensajeIA: `🍇 ¡Hola, pariente llanero! Soy el <strong>Maíz Tostado</strong>, aunque también me llaman <em>Uva de Coral</em>, <em>Uvero</em> o <em>Maíz tostao</em>. Mi nombre científico es <em>Coccoloba acuminata</em>, y pertenezco a la familia Polygonaceae, la misma de las espinacas y el alforfón.\n\nVivo aquí, en los bordes de los caños y bosques de galería de la Orinoquía, donde el agua y la tierra se encuentran. Cuando estoy cargado de frutos maduros, mis ramas se llenan de racimos de color rojo brillante que parecen pequeñas uvas de coral, y cuando están agrupados en espiga, recuerdan una mazorca de maíz que alguien tostó al fuego. Por eso me llaman Maíz Tostado.\n\n✨ <strong>Pero tengo un secreto que te va a sorprender</strong>: tengo un sello secreto en cada nudo de mis tallos. Unas pequeñas bolsitas de papel llamadas <strong>ócreas</strong>, que son como diminutas bufandas que abrazan mis ramas. Ninguna otra familia de plantas tiene esas ócreas. Si algún día encuentras en el monte un arbusto con esas bolsitas en los nudos, ya sabes que es un pariente mío.\n\n🔬 <strong>Y otra curiosidad asombrosa</strong>: mis hojas tienen puntas muy afiladas y alargadas, por eso los botánicos me pusieron el apellido <em>acuminata</em>, que en latín significa "con punta aguda".\n\n🌬️ <strong>Y mi estrategia de dispersión es única</strong>: ¿Sabías que mis frutos se dispersan principalmente por el viento? Soy diferente a muchos árboles del llano: mis pequeñas semillas están envueltas en un perianto carnoso que también puede atrapar aire y planear cortas distancias. ¡Pero cuando las aves y los murciélagos se comen mis frutos, yo viajo mucho más lejos sin gastar ni un gramo de energía! Eso se llama <strong>doble estrategia de dispersión</strong>. Soy el viajero con dos modos de transporte del bosque llanero.\n\n🍽️ <strong>Y algo delicioso</strong>: mis frutos maduros son carnosos y sabrosos. Los niños llaneros los recogen y los comen frescos, o los usan para hacer mermeladas y postres artesanales. En comunidades ribereñas del Meta y Casanare, soy conocido como fuente de frutos silvestres de temporada.\n\n¿Me plantarías en tu paisaje? Si lo haces, que sea con respeto: en linderos de caños, para sombra en sistemas agroforestales, o para restaurar bosques de galería. Soy nativo de esta tierra, y mi misión es servir con sabiduría, no desplazar.`,
    referencias: [
        "Álvarez, E., Benítez, D., Velásquez, C., & Cogollo, Á. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. <em>Forest Ecology and Management, 267</em>, 297–308. https://doi.org/10.1016/j.foreco.2011.11.013",
        "Bachman, S. P., Brown, M. J. M., Leão, T. C. C., Lughadha, E. N., & Walker, B. E. (2024). Extinction risk predictions for the world's flowering plants to support their conservation. <em>New Phytologist, 242</em>(2), 679–691. https://doi.org/10.1111/nph.19592",
        "Bernal, R., Galeano, G., Rodríguez, A., Sarmiento, H., & Gutiérrez, M. (2017). <em>Nombres comunes de las plantas de Colombia</em>. Universidad Nacional de Colombia, Instituto de Ciencias Naturales. http://www.biovirtual.unal.edu.co/nombrescomunes/",
        "Bernal, R., Gradstein, S. R., & Celis, M. (Eds.). (2015, actualizado 2022). <em>Catálogo de plantas y líquenes de Colombia</em>. Instituto de Ciencias Naturales, Universidad Nacional de Colombia, Bogotá. Entrada: Coccoloba acuminata Kunth. http://catalogoplantasdecolombia.unal.edu.co",
        "Bernal, R., Gradstein, S. R., & Celis, M. (Eds.). (2020). <em>Catálogo de plantas y líquenes de Colombia</em> (v1.1) [Dataset/Checklist]. Universidad Nacional de Colombia. https://doi.org/10.15472/7avdhn",
        "Catálogo de Flora del Valle de Aburrá – EIA. (2023). <em>Coccoloba acuminata Kunth: Maíz tostao</em>. Ficha de especie #86. Universidad EIA. http://catalogofloravalleaburra.eia.edu.co/species/86",
        "Chave, J., Réjou-Méchain, M., Búrquez, A., Chidumayo, E., Colgan, M. S., Delitti, W. B. C., Duque, A., Eid, T., Fearnside, P. M., Goodman, R. C., Henry, M., Martínez-Yrízar, A., Mugasha, W. A., Muller-Landau, H. C., Mencuccini, M., Nelson, B. W., Ngomanda, A., Nogueira, E. M., Ortiz-Malavassi, E., … Vieilledent, G. (2014). Improved allometric models to estimate the aboveground biomass of tropical trees. <em>Global Change Biology, 20</em>(10), 3177–3190. https://doi.org/10.1111/gcb.12629",
        "Diazgranados, M., Allkin, B., Black, N., Cámara-Leret, R., Canteiro, C., Carretero, J., Eastwood, R., Hargreaves, S., Hudson, A., Milliken, W., Nesbitt, M., Ondo, I., Patmore, K., Pironon, S., Turner, R., & Ulian, T. (2020). <em>World Checklist of Useful Plant Species</em>. Royal Botanic Gardens, Kew. Recuperado vía GBIF Knowledge Network for Biocomplexity.",
        "García Castro, N. J. (2011). <em>Plantas nativas empleadas en alimentación en Colombia</em>. Instituto de Investigaciones Biológicas Alexander von Humboldt, Bogotá. [Documento impreso, repositorio IAvH]",
        "Global Biodiversity Information Facility – GBIF. (2023). <em>Coccoloba acuminata Kunth</em>. Taxon ID: 7291417. GBIF Secretariat, Copenhagen. https://www.gbif.org/species/7291417",
        "Plants of the World Online – Kew Science. (2026). <em>Coccoloba acuminata Kunth</em>. Royal Botanic Gardens, Kew. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:693560-1",
        "Useful Plants of Colombia – ColPlantA. (2021). <em>Coccoloba acuminata Kunth: General information, uses and distribution</em>. http://colplanta.org/taxon/urn:lsid:ipni.org:names:693560-1/general-information"
    ],
    quiz: [
        { q: "¿Cuál es el rasgo morfológico más característico que permite identificar en campo a cualquier planta de la familia Polygonaceae, incluyendo a Coccoloba acuminata?", opts: ["Flores de color azul con cinco pétalos soldados en forma de campana", "Hojas compuestas pinnadas con folíolos opuestos y estípulas espinosas", "Presencia de ócreas: estructuras tubulares membranosas que envuelven cada nudo del tallo", "Látex blanco lechoso visible al cortar cualquier parte de la planta"], correct: 2, expl: "Las ócreas son estructuras tubulares membranosas que envuelven cada nudo del tallo, como diminutas bufandas que abrazan las ramas. Este es el sello distintivo de la familia Polygonaceae —ninguna otra familia de plantas vasculares tiene estas ócreas. Si encuentras un arbusto con esas bolsitas en los nudos, ya sabes que es un pariente del Maíz Tostado." },
        { q: "Según el Catálogo de Plantas Útiles de Colombia (ColPlantA, 2021), ¿cuáles son los DOS usos principales documentados para Coccoloba acuminata?", opts: ["Madera estructural y forraje para ganado bovino", "Tinte natural para textiles y producción de aceite vegetal", "Medicina tradicional y alimentación (frutos comestibles)", "Control de erosión costera y fabricación de cuerdas"], correct: 2, expl: "El ColPlantA (2021) confirma que los dos usos principales del Maíz Tostado son la medicina tradicional y la alimentación. Los frutos maduros son carnosos y se consumen frescos, en mermeladas y postres artesanales. La corteza y las hojas se usan en medicina tradicional por sus propiedades astringentes, febrífugas y hemostáticas." },
        { q: "¿Cuál es el rango altitudinal documentado para Coccoloba acuminata en Colombia, y a qué regiones biogeográficas colombianas está restringida su distribución verificada?", opts: ["0–3.000 m; presente en Andes, Amazonia y Orinoquía", "500–2.000 m; exclusiva de la región Andina y el Macizo Colombiano", "0–500 m; Llanura del Caribe, Orinoquía, Pacífico y Valle del Magdalena", "1.000–3.500 m; páramos y bosques altoandinos de Boyacá y Cundinamarca"], correct: 2, expl: "El Maíz Tostado crece entre 0 y 500 metros de altura en Colombia, y está presente en la Llanura del Caribe, la Orinoquía, el Pacífico y el Valle del Magdalena. En Maní (Casanare), que está entre 180–250 metros de altura, se encuentra dentro de su rango óptimo, prosperando en bosques de galería y márgenes de caños." },
        { q: "¿Qué estrategia de dispersión de semillas utiliza Coccoloba acuminata que la hace particularmente exitosa en bosques de galería de la Orinoquía?", opts: ["Solo dispersión por viento (anemocoria)", "Solo dispersión por agua (hidrocoria)", "Doble estrategia: anemocoria (viento) + zoocoria (aves y murciélagos)", "Solo dispersión por hormigas (mirmecoria)"], correct: 2, expl: "El Maíz Tostado tiene una doble estrategia de dispersión que lo hace muy exitoso: sus pequeñas semillas pueden planear cortas distancias por el viento (anemocoria), pero cuando las aves y los murciélagos se comen sus frutos, las semillas viajan mucho más lejos sin gastar ni un gramo de energía (zoocoria). Esto le permite colonizar nuevos espacios en los bosques de galería de la Orinoquía." }
    ]
},
"palma-de-coco": {
    id: "#JBP-10", tipo: "Introducido", nombre: "Palma de Coco", cientifico: "Cocos nucifera L.",
    familia: "Arecaceae", origen: "Indo-Pacífico (Exótica introducida)", estado: "No Evaluada / LC global", exotica: true,
    carbono: 85.2, viajes: 0, imagen_portada: "./imagenes/coco1.jpeg",
    galeria: [
        { img: "./imagenes/coco1.jpeg", desc: "Palma Completa" },
        { img: "./imagenes/coco2.jpeg", desc: "Cocos" },
        { img: "./imagenes/coco3.jpeg", desc: "Tronco" },
        { img: "./imagenes/coco4.jpeg", desc: "Vista Inferior" }
    ],
    nombresLocales: ["Palma de coco", "Cocotero", "Coquera", "Coquero", "Palo de coco", "Mata de coco", "Coco caballero", "Árbol de la vida", "Árbol de los mil usos", "Coconut palm (EN)"],
    distribucion: `
        <p><strong>Viajero desde el Indo-Pacífico:</strong> La Palma de Coco no nació en Colombia. Es originaria de las islas del Pacífico Sur y el Sudeste Asiático. Gracias a que sus frutos pueden flotar en el océano durante meses, se dispersó naturalmente por todas las costas tropicales del mundo antes de que existieran los humanos. Luego, marineros portugueses y españoles la trajeron a América hace más de 500 años. En Colombia está registrada en los 32 departamentos, desde el nivel del mar hasta los 1.500 metros de altura. En Maní (Casanare), la encuentras en huertos domésticos, jardines de viviendas rurales y patios de fincas ganaderas, aunque no es su hábitat óptimo natural (playas costeras).</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Familia</td><td style="padding:6px;">Arecaceae (la familia de las palmeras)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Nombre científico</td><td style="padding:6px;"><em>Cocos nucifera</em> (significa "portadora de nueces de coco")</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué significa su nombre?</td><td style="padding:6px;"><em>Cocos</em>: del portugués "coco" (monstruo fantasmagórico, por los tres poros del fruto); <em>nucifera</em>: "portadora de nueces"</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿De dónde viene?</td><td style="padding:6px;">Indo-Pacífico (islas del Pacífico Sur) — introducida en Colombia hace ~500 años</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Estado en Colombia</td><td style="padding:6px;">⚠️ Especie introducida y naturalizada — ampliamente cultivada en todo el país</td></tr>
            </table>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🌴 Dato curioso:</strong> El cocotero es conocido como "El Árbol de la Vida" porque ninguna otra planta tropical proporciona tantos productos de uso simultáneo: casa, alimento, bebida, fibra, carbón, combustible y medicina. Más de 100 productos derivados se obtienen de esta palma.
        </div>
        <div class="blockquote-pro mt-3">
            <p>"El cocotero es tal vez uno de los árboles de los Trópicos mejor reconocidos y uno de los más importantes económicamente."</p>
            <cite>— Parrotta, J. A. (1993). <em>Cocos nucifera L.</em> SO-ITF-SM-57. USDA Forest Service.</cite>
        </div>
    `,
    densidad: "0.60 – 0.90 g/cm³ (periferia del estípite) | 0.20 – 0.40 g/cm³ (centro esponjoso)", fraccion: "Aproximadamente la mitad de su peso es carbono (0.47 – 0.50)",
    alometria: `
        <div class="warn-box" style="font-size:0.85rem; border-left:4px solid #f39c12; padding-left:12px; margin-bottom:15px; color:var(--text-main);">
            ⚠️ <strong>Nota especial — Palmeras vs. árboles:</strong> La Palma de Coco, como toda palmera, <strong>no tiene madera en sentido botánico estricto</strong>. Su tronco (estípite) está compuesto por tejido monocotiledóneo sin anillos de crecimiento ni xilema secundario. Por eso, las fórmulas para calcular carbono en árboles no aplican directamente a palmeras. La variable clave para medir su carbono es la <strong>altura total</strong>, no el grosor del tronco.
        </div>
        <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
            Biomasa = f(altura total de la palma)
        </div>
        <p class="text-sm"><strong>¿Por qué importa esto?</strong> Porque los árboles son como esponjas gigantes que atrapan el dióxido de carbono (CO₂) del aire y lo guardan en su madera. Las palmeras también guardan carbono, pero como su tronco no tiene madera verdadera, se usan fórmulas diferentes. La Palma de Coco, con su tronco alto y sus hojas grandes, es un buen guardián del clima, especialmente en sistemas agroforestales.</p>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom: 15px;">
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué medimos en campo?</td><td style="padding:6px;">Altura total de la palma (m)</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Qué calculamos?</td><td style="padding:6px;">Cuántos kilos de carbono tiene guardado esa palma</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">¿Por qué?</td><td style="padding:6px;">Para saber cuánto ayuda el JBP a combatir el cambio climático</td></tr>
            </table>
        </div>
        <div class="section-val text-sm mt-3" style="color:white; padding:12px; background: linear-gradient(135deg, #27ae60, #2ecc71); border-radius:8px;">
            ✅ <strong>Hallazgo científico verificado:</strong> Un estudio publicado en Redalyc (2024) sobre sistemas agrosilvopastoriles con Palma de Coco en México encontró que el cocotero aportó del <strong>60 al 80% del total del secuestro de carbono</strong> del sistema, con valores entre 101.19 y 128.62 toneladas de carbono por hectárea por año dependiendo de la densidad de siembra.
        </div>
        <div class="warn-box mt-3" style="font-size:0.8rem; border-left:4px solid #e74c3c; padding-left:10px; color:var(--text-main); margin-top: 15px;">
            ⚠️ <strong>Dato por verificar en campo:</strong> No existe un valor específico publicado para la Palma de Coco en la Orinoquía colombiana. Se recomienda medición directa de altura en individuos del JBP Maní y muestreo de tejido del tronco para calibración local.
        </div>
    `,
    calendario: [
        { mes: "Ene", fase: "Cosecha posible 🍑", clima: "dry" },
        { mes: "Feb", fase: "Cosecha posible 🍑", clima: "dry" },
        { mes: "Mar", fase: "¡Pico de floración! 🌸", clima: "dry" },
        { mes: "Abr", fase: "Inicio cosecha activa 🍑", clima: "rain" },
        { mes: "May", fase: "Mayor producción 🍑", clima: "rain" },
        { mes: "Jun", fase: "Pico de invierno 🍑", clima: "rain" },
        { mes: "Jul", fase: "Pico de cosecha 🍑", clima: "rain" },
        { mes: "Ago", fase: "Mayor producción 🍑", clima: "rain" },
        { mes: "Sep", fase: "Pico de cosecha 🍑", clima: "rain" },
        { mes: "Oct", fase: "Producción activa 🍑", clima: "rain" },
        { mes: "Nov", fase: "Cosecha activa 🍑", clima: "dry" },
        { mes: "Dic", fase: "Cosecha posible 🍑", clima: "dry" }
    ],
    morfologia: `
        <div style="display:flex; flex-direction:column; gap:15px; font-size:0.95rem;">
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-tree"></i> ¿Cómo es la Palma de Coco?</strong> Es una palmera siempreverde (nunca pierde todas sus hojas) de 10 a 30 metros de altura en individuos adultos. Tiene un tronco único, cilíndrico, sin ramas, de 30-80 cm de diámetro en la base. El tronco está marcado con anillos visibles (cicatrices de hojas viejas) separados cada 10-20 cm. Puede vivir hasta 100 años y producir frutos activamente hasta los 50 años. En Maní, los individuos de patio típicamente alcanzan 12-20 metros.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-seedling"></i> Sus raíces:</strong> Tiene muchas raíces fibrosas que se extienden a los lados (sin raíz principal profunda). Las raíces activas se concentran en un radio de 2 metros del tronco, a una profundidad de 0.2 a 0.8 metros. No daña estructuras superficiales como casas o paredes.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-folder-open"></i> Su tronco:</strong> El tronco es único, cilíndrico, sin ramificaciones. Es de color gris a pardo, con anillos marcados donde cayeron las hojas viejas. <strong>El detalle más importante:</strong> no tiene madera verdadera como los árboles, sino tejido monocotiledóneo que no engruesa con el tiempo.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-leaf"></i> Sus hojas:</strong> Son compuestas, en forma de pluma, de 4-6 metros de largo. Los folíolos son duros y de color verde amarillento. Una palma adulta puede tener 25-35 hojas funcionales al mismo tiempo. Cada hoja dura 12-14 meses antes de caer. La palma produce 12-13 hojas nuevas por año.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-spa"></i> Sus flores:</strong> Las flores están agrupadas en racimos protegidos por una espata leñosa de unos 70 cm. La palma es monoica: tiene flores masculinas y femeninas en la misma planta. Las flores femeninas están en la base del racimo, y las masculinas (más pequeñas y numerosas) hacia el extremo. Se polinizan por viento e insectos.</div>
            <div><strong style="color:var(--secondary-color);"><i class="fas fa-circle-notch"></i> Sus frutos:</strong> <strong>El detalle más delicioso:</strong> botánicamente es una drupa (no una nuez), de forma ovalada a esférica, de 20-30 cm de largo y 1.5-2.5 kg de peso. Tiene tres capas: piel exterior lisa (exocarpio), capa fibrosa intermedia (mesocarpio o estopa), y cáscara leñosa con tres poros germinativos o "ojos" (endocarpio). Adentro tiene pulpa blanca (copra) y agua (de 0.5 a 1 litro). Una palma puede producir hasta 75 frutos por año.</div>
        </div>
        <div class="mt-3">
            <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-top:15px;">
                <tr style="background:var(--primary-color); color:white;"><th style="padding:8px; text-align:left;">Capa del Fruto</th><th style="padding:8px; text-align:left;">Nombre Técnico</th><th style="padding:8px; text-align:left;">Uso Principal</th></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px;">Piel exterior</td><td style="padding:8px;">Exocarpio</td><td style="padding:8px;">Protección; artesanías; fuente de pigmentos</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px;">Capa fibrosa intermedia</td><td style="padding:8px;">Mesocarpio (estopa)</td><td style="padding:8px;">Cepillos, tapetes, sustratos agrícolas, artesanías, rellenos</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px;">Cáscara leñosa</td><td style="padding:8px;">Endocarpio</td><td style="padding:8px;">Carbón activado, artesanías, utensilios, biocombustible</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px;">Pulpa blanca</td><td style="padding:8px;">Endospermo sólido (copra)</td><td style="padding:8px;">Alimento directo, aceite de coco, leche de coco, cosméticos</td></tr>
                <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:8px;">Agua interior</td><td style="padding:8px;">Líquido endospérmico</td><td style="padding:8px;">Bebida nutritiva e hidratante; suero oral natural</td></tr>
            </table>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>📌 Para identificarla en campo:</strong> Busca una palmera de tronco único y anillado, hojas largas en forma de pluma, y frutos grandes con tres "ojos" en la cáscara. Si ves todo eso en Maní, ¡seguro es una Palma de Coco!
        </div>
    `,
    fauna: `
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card"><div class="metric-label">🐝 Abejas y meliponinos</div><div class="section-val text-sm mt-2">Son los principales polinizadores de las flores masculinas. Las inflorescencias producen néctar abundante. En patios de Maní, la presencia de colmenas de meliponinos cerca de los cocoteros mejora la polinización y la producción de frutos.</div></div>
            <div class="metric-card"><div class="metric-label">🌬️ Viento</div><div class="section-val text-sm mt-2">La polinización también ocurre por viento. Los llanos de Casanare, con vientos persistentes del noreste en temporada seca, favorecen la polinización natural en los individuos aislados del JBP de Maní.</div></div>
            <div class="metric-card"><div class="metric-label">🦜 Loros y pericos</div><div class="section-val text-sm mt-2">Loros reales y pericos consumen la pulpa y el agua de los frutos inmaduros y semimaturos. Son considerados plaga menor en cultivos comerciales, pero en el JBP son dispersores secundarios.</div></div>
            <div class="metric-card"><div class="metric-label">🐿️ Ardillas y roedores</div><div class="section-val text-sm mt-2">Ardillas como la ardilla roja consumen la carne del coco maduro y pueden roer la cáscara para llegar a la pulpa. En los Llanos Orientales, los roedores son los dispersores más frecuentes de semillas de cocotero a corta distancia.</div></div>
            <div class="metric-card"><div class="metric-label">🦟 Insectos plaga</div><div class="section-val text-sm mt-2">El picudo de las palmeras (Rhynchophorus palmarum) es el insecto más dañino para la Palma de Coco en los Llanos. Sus larvas se alimentan del interior del tronco, pudiendo matar la planta. Su presencia en Casanare requiere monitoreo activo.</div></div>
            <div class="metric-card"><div class="metric-label">🦥 Perezosos</div><div class="section-val text-sm mt-2">Los perezosos usan las hojas del cocotero como refugio y trepan el tronco en las noches. Se han registrado en jardines y huertos con palmeras en la región de los Llanos Orientales colombianos.</div></div>
            <div class="metric-card"><div class="metric-label">🐦 Aves nidificantes</div><div class="section-val text-sm mt-2">Diversas aves de la Orinoquía usan las hojas secas colgantes del cocotero como material de nido o como percha. El turpial de garganta negra construye nidos colgantes en los pecíolos de las hojas.</div></div>
            <div class="metric-card"><div class="metric-label">🌊 Corrientes de agua</div><div class="section-val text-sm mt-2">El fruto del cocotero puede flotar en el agua por meses gracias a su capa fibrosa y sobrevivir para germinar. En Casanare, los frutos que caen cerca de caños o ríos pueden ser transportados y germinar en nuevos sitios naturalmente.</div></div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
            <strong>🔬 La Palma de Coco es un árbol de múltiples usos:</strong> Sus frutos alimentan a loros, ardillas y roedores, sus flores atraen polinizadores, y sus hojas ofrecen refugio a perezosos y aves. Además, sus frutos pueden viajar por ríos y caños, colonizando nuevas orillas naturalmente.
        </div>
    `,
    usos: `
        <div class="section-val text-sm mt-2" style="color:white; padding:12px; background: linear-gradient(135deg, #e67e22, #f39c12); border-radius:8px; margin-bottom:15px;">
            🌴 <strong>"El Árbol de la Vida"</strong> — Ninguna otra planta tropical proporciona simultáneamente tantos productos de uso cotidiano. Más de 100 productos derivados.
        </div>
        <div class="grid2 mt-3" style="font-size:0.9rem;">
            <div class="metric-card"><div class="metric-label">🥥 Alimentación humana</div><div class="section-val text-sm mt-2">La pulpa (copra) se consume fresca, rallada o deshidratada. El agua de pipa es una bebida refrescante rica en electrolitos. La leche de coco se usa para cocinar. El aceite de coco virgen extra tiene alto valor nutricional. En la Costa Caribe colombiana: arroz con coco, cazuela de mariscos, dulces de coco; uso creciente en las comunidades llaneras del Casanare.</div></div>
            <div class="metric-card"><div class="metric-label">💊 Medicina tradicional</div><div class="section-val text-sm mt-2">El agua de coco se usa como suero oral natural y antiparasitario (contra Ascaris, amibas y disentería). El aceite de coco se aplica para el cabello y la piel. La estopa se usa como infusión para "empacho" y purgante. Propiedades hipotensoras y diuréticas documentadas experimentalmente. Antiséptico para heridas superficiales.</div></div>
            <div class="metric-card"><div class="metric-label">🏠 Construcción rural</div><div class="section-val text-sm mt-2">Las hojas (palmas) se usan para techado de viviendas en el campo llanero (palapas, enramadas). El tronco sirve para postes, vigas, pisos y paredes. El nervio central de las hojas se usa para escobas y cañas. La fibra de coco (estopa) como material aislante en construcción rural. Uso histórico documentado en comunidades indígenas del Casanare.</div></div>
            <div class="metric-card"><div class="metric-label">🧴 Industria y cosmética</div><div class="section-val text-sm mt-2">El aceite de coco se usa en jabones, shampús, lociones y biocombustible (biodiesel). El carbón activado de cáscara se usa en filtros de agua, purificadores de aire y medicina. La fibra de coco (coir) se usa como sustrato para plantas, tapetes, cuerdas y rellenos. La copra desecada se exporta para alimentos procesados y confitería.</div></div>
            <div class="metric-card"><div class="metric-label">🔥 Bioenergía</div><div class="section-val text-sm mt-2">La cáscara (endocarpio) se usa como sustituto del carbón en zonas rurales del Casanare. Estudios de la Universidad de Antioquia (2024) verificaron que los residuos de coco tienen excelente poder calorífico para producción de pellets y briquetas biocombustible, cumpliendo normas NTC 2060 (Colombia).</div></div>
            <div class="metric-card"><div class="metric-label">🌿 Artesanías llaneras</div><div class="section-val text-sm mt-2">Con la cáscara se fabrican tazas, cucharas y artesanías para turistas. Las hojas se tejen para hacer canastos, esteras y sombreros. El nervio de la hoja sirve para construir jaulas y cercas temporales. Las artesanías de coco son producto de venta en ferias artesanales de Yopal, Aguazul y Maní (Casanare).</div></div>
            <div class="metric-card"><div class="metric-label">🌱 Sustratos y agricultura</div><div class="section-val text-sm mt-2">La fibra de coco (coir) se usa ampliamente como sustrato para cultivos hidropónicos y en viveros forestales. Mejora la retención de humedad del suelo. El compost de fibra de coco se utiliza en la producción de plántulas para restauración en los Llanos Orientales.</div></div>
            <div class="metric-card"><div class="metric-label">🍷 Bebidas fermentadas</div><div class="section-val text-sm mt-2">El néctar de la inflorescencia (sucrosa) se extrae artesanalmente y fermenta para producir "vino de palma" (bebida tradicional). También puede destilarse para obtener alcohol. Esta tradición se mantiene en comunidades campesinas e indígenas de las sabanas de Casanare y Meta.</div></div>
        </div>
        <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid #e74c3c; padding-left:12px; margin-top:15px; color:var(--text-main);">
            ⚠️ <strong>Precaución sobre el consumo del palmito:</strong> La yema terminal o "cogollo" de la Palma de Coco es comestible y sabrosa, pero extraerla significa matar irreversiblemente la palma, ya que es el único punto de crecimiento de la planta (meristema apical único). Este uso debe estar totalmente prohibido en el JBP de Maní. También se recomienda control fitosanitario activo contra el picudo Rhynchophorus palmarum.
        </div>
    `,
    mensajeIA: `🌴 ¡Hola, pariente llanero! Soy la <strong>Palma de Coco</strong>, aunque también me llaman <em>Cocotero</em>, <em>Coquera</em> o <em>Árbol de la Vida</em>. Mi nombre científico es <em>Cocos nucifera</em> L., y pertenezco a la gran familia de las palmeras (Arecaceae).\n\nSoy una viajera muy antigua. Mis abuelos nacieron en las islas del Pacífico Sur, en lugares con playas de arena blanca y mares azules. Pero hace cientos de años, mis frutos aprendieron a flotar en el océano y cruzaron el mundo entero. Los marineros portugueses y españoles me llevaron a Colombia hace más de 500 años, y desde entonces he crecido en las costas, los llanos y los patios de casi todas las casas de este país. Hoy vivo en Maní, Casanare, en el Jardín Botánico de este municipio, bien lejos del mar, ¡pero muy feliz!\n\n✨ <strong>Pero tengo secretos que te van a sorprender</strong>: soy un árbol especial porque puedo dar de todo. Con mis hojas hacen techos para las casas del campo llanero; con mi tronco hacen paredes y postes; con mi fibra de coco hacen tapetes y cepillos; con mi cáscara hacen carbón; con mi pulpa blanca hacen aceite, jabón y shampú; y con mi agua fresca de pipa —ese líquido dulce que tengo adentro— los llaneros me llaman en los días calurosos del verano de Maní para refrescarse. ¡Soy el árbol que sirve de pies a cabeza!\n\n🍑 <strong>Y otra curiosidad asombrosa</strong>: cada mes del año, sin descanso, produzco flores y frutos al mismo tiempo. Nunca me tomo vacaciones, nunca paro de trabajar. Cuando el viento de los llanos llega desde el noreste en el verano, lleva mi polvo de flores de un lado al otro, y mis nuevos cocos empiezan a crecer. Doce meses después de nacer, cuando el fruto ya está gordo y maduro, los niños de Maní pueden beber mi agua fresca directamente.\n\n🌊 <strong>Y mi secreto más increíble</strong>: ¿Sabías que mi fruto puede viajar solo por el océano durante más de 3 meses flotando en el mar y sobrevivir para germinar? Mi capa fibrosa (el mesocarpio) actúa como un <strong>chaleco salvavidas natural</strong>, lleno de aire atrapado entre sus fibras. Así llegaron mis ancestros de las Islas del Pacífico a las costas de América, antes de que existieran los barcos. Cada coco que ves es, en realidad, un barco en miniatura diseñado por la naturaleza para cruzar océanos.\n\n💧 <strong>Y algo más</strong>: si pierdes tu camino en la selva sin agua, puedes sobrevivir bebiendo mi agua: es tan pura y estéril que en la Segunda Guerra Mundial los médicos la usaron como solución intravenosa de emergencia para salvar vidas de soldados heridos. ¡Soy el árbol de la vida, y lo digo en serio!\n\n⚠️ <strong>Pero debo ser honesta contigo</strong>: no soy nativa de esta tierra. Llegué aquí porque alguien me trajo desde el Indo-Pacífico hace 500 años. Si me plantas en tu finca, disfruta mis frutos y mi sombra, pero recuerda que no tengo las mismas relaciones con la fauna nativa que las palmeras que sí nacieron aquí, como la palma moriche. La belleza y la utilidad deben ir de la mano con el respeto por la naturaleza nativa.\n\n¿Me plantarías en tu paisaje? Si lo haces, que sea con conocimiento y responsabilidad. Soy un árbol que puede dar mucha sombra, alimento y productos... pero también debo ser manejada con cuidado.`,
    referencias: [
        "Bernal, R., Gradstein, S. R., y Celis, M. (Eds.). (2015). <em>Catálogo de plantas y líquenes de Colombia</em>. Instituto de Ciencias Naturales, Universidad Nacional de Colombia. http://catalogoplantasdecolombia.unal.edu.co",
        "Plants of the World Online. (2024). <em>Cocos nucifera L.</em> Royal Botanic Gardens, Kew. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:666160-1",
        "Parrotta, J. A. (2000). <em>Cocos nucifera L. Palma de coco, coco, coconut palm</em>. SO-ITF-SM-57. U.S. Department of Agriculture, Forest Service. https://rngr.net/publications/arboles-de-puerto-rico/cocos-nucifera",
        "Granados-Sánchez, D., y López-Ríos, G. F. (2002). Manejo de la palma de coco (Cocos nucifera L.) en México. <em>Revista Chapingo. Serie Ciencias Forestales y del Ambiente, 8</em>(1), 39–48. https://www.redalyc.org/pdf/629/62980105.pdf",
        "Álvarez, E., Duque, A., Saldarriaga, J. G., Cabrera, K., De las Salas, G., Del Valle, J. I., Moreno, F., Orrego, S. A., y Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. <em>Forest Ecology and Management, 267</em>, 297–308. https://doi.org/10.1016/j.foreco.2011.11.013",
        "Yepes, A. P., Navarrete, D. A., Duque, A. J., Phillips, J. F., Cabrera, K. R., Álvarez, E., García, M. C., y Ordóñez, M. F. (2011). <em>Protocolo para la estimación nacional y subnacional de biomasa-carbono en Colombia</em>. Instituto de Hidrología, Meteorología y Estudios Ambientales–IDEAM.",
        "Goodman, R. C., Phillips, O. L., y Baker, T. R. (2013). The importance of crown dimensions to improve tropical tree biomass estimates. <em>Ecological Applications, 24</em>(4), 680–698. https://doi.org/10.1890/13-0070.1",
        "Chave, J., Réjou-Méchain, M., Búrquez, A., Chidumayo, E., Colgan, M. S., Delitti, W. B. C., Duque, A., … Vieilledent, G. (2014). Improved allometric models to estimate the aboveground biomass of tropical trees. <em>Global Change Biology, 20</em>(10), 3177–3190. https://doi.org/10.1111/gcb.12629",
        "Bernal, R., Galeano, G., Rodríguez, A., Sarmiento, H., y Gutiérrez, M. (2017). <em>Nombres comunes de las plantas de Colombia</em>. Universidad Nacional de Colombia, Instituto de Ciencias Naturales. http://www.biovirtual.unal.edu.co/nombrescomunes/",
        "Chacín-Fuenmayor, M. R., Peña-López, Y., y Cujia-Coronado, A. (2024). Secuestro de carbono en la biomasa aérea de un sistema agrosilvopastoril de Cocos nucifera, Leucaena leucocephala Var. Cunningham y Pennisetum purpureum Cuba CT-115. <em>Pastos y Forrajes</em>. https://www.redalyc.org/journal/837/83725698009/",
        "Andrés, G. S., Aguilar-Sierra, S., y Graziella, B. (2024). Estudio experimental de los residuos de coco mediante densificación para obtener pellets y briquetas. <em>Revista Facultad de Ingeniería Universidad de Antioquia</em>. https://doi.org/10.17533/udea.redin.20240620",
        "Global Biodiversity Information Facility–GBIF. (2024). <em>Cocos nucifera L.</em> [Occurrence data]. GBIF Secretariat. https://www.gbif.org/species/2735117",
        "Briones, V. L., y Barrera, M. A. F. (2016). El cocotero: 'El árbol de la vida'. <em>Herbario CICY, 8</em>, 107–110. Centro de Investigación Científica de Yucatán.",
        "Linné, C. von. (1753). <em>Species Plantarum 2: 1188</em>. Holmiae: Impensis Laurentii Salvii."
    ],
    quiz: [
        { q: "¿Por qué no se puede aplicar una ecuación alométrica estándar para árboles maderables (como la de Álvarez et al., 2012) a la Palma de Coco en el JBP de Maní, Casanare?", opts: ["Porque la Palma de Coco es una especie introducida en Colombia y las ecuaciones solo aplican a especies nativas", "Porque la Palma de Coco crece demasiado rápido y las ecuaciones no contemplan ese crecimiento acelerado", "Porque la Palma de Coco es una monocotiledónea sin crecimiento secundario: su tronco (estípite) no tiene xilema secundario ni anillos de crecimiento, por lo que no posee 'madera' en sentido botánico y requiere ecuaciones específicas para palmeras", "Porque la Palma de Coco no almacena carbono en ninguna de sus estructuras vegetales"], correct: 2, expl: "Las palmeras como la Palma de Coco son monocotiledóneas, lo que significa que su tronco no tiene madera verdadera como los árboles dicotiledóneos. No tiene anillos de crecimiento ni xilema secundario, por eso las ecuaciones estándar para árboles no aplican. Se necesitan fórmulas específicas que usan la altura total como variable principal." },
        { q: "En el municipio de Maní, Casanare, ¿en qué período del año es mayor la producción de frutos de la Palma de Coco y por qué es así desde el punto de vista fisiológico?", opts: ["Solo produce frutos en el verano (diciembre–marzo), cuando hay mucho sol y calor", "Produce frutos durante todo el año de forma continua y escalonada, con mayor producción en el período lluvioso (mayo–octubre), cuando hay mayor disponibilidad hídrica y fotosintética para el desarrollo de los frutos", "Solo produce frutos una vez al año en noviembre, coincidiendo con el final de las lluvias", "No produce frutos en los Llanos porque es una especie costera que requiere suelos arenosos de playa"], correct: 1, expl: "La Palma de Coco produce frutos durante todo el año de forma continua, pero su producción es mayor en el período lluvioso (mayo-octubre) porque tiene más agua disponible para la fotosíntesis y el desarrollo de los frutos. Aunque puede crecer en los Llanos lejos del mar, su producción es menor que en costas." },
        { q: "¿Cuál es la característica anatómica del fruto del cocotero que le permitió a esta especie dispersarse por los océanos antes de la presencia humana, llegando a las costas de América de manera natural?", opts: ["Su exocarpio (piel externa) impermeable que impide que el agua entre al fruto durante semanas", "Sus tres poros germinativos (ojos) que actúan como válvulas de flotación hidráulica", "El mesocarpio fibroso y esponjoso (estopa), lleno de espacios de aire atrapados entre sus fibras, que actúa como chaleco salvavidas natural permitiendo al fruto flotar por más de 3 meses en el océano y sobrevivir para germinar", "El endocarpio leñoso (cáscara) que protege herméticamente la semilla de la salinidad del mar"], correct: 2, expl: "El mesocarpio (la capa fibrosa entre la piel y la cáscara) está lleno de espacios de aire atrapados entre sus fibras, lo que actúa como un chaleco salvavidas natural. Esto permite al fruto flotar por más de 3 meses en el océano y sobrevivir para germinar cuando llega a una costa. Así llegaron los ancestros del cocotero de las Islas del Pacífico a las costas de América." },
        { q: "¿Por qué la Palma de Coco es conocida popularmente como 'El Árbol de la Vida' o 'El Árbol de los Mil Usos' en toda América tropical?", opts: ["Porque vive hasta 100 años y es muy longeva", "Porque ninguna otra planta tropical proporciona tantos productos de uso simultáneo: casa, alimento, bebida, fibra, carbón, combustible y medicina", "Porque sus frutos pueden salvar vidas en el mar", "Porque es el árbol más abundante en las playas del Caribe"], correct: 1, expl: "La Palma de Coco es conocida como 'El Árbol de la Vida' porque ninguna otra planta tropical proporciona tantos productos de uso simultáneo: con sus hojas hacen techos, con su tronco hacen paredes, con su fibra hacen tapetes, con su cáscara hacen carbón, con su pulpa hacen aceite y jabón, y con su agua hacen bebidas refrescantes. Más de 100 productos derivados se obtienen de esta palma." },
        { q: "¿Qué tipo de estructura botánica es realmente el 'coco' que compramos para beber?", opts: ["Una semilla gigantesca", "Una drupa (fruto) con exocarpio, mesocarpio fibroso y endocarpio leñoso", "Un tubérculo de la palma", "Una nuez verdadera"], correct: 1, expl: "Botánicamente, el coco es una drupa (un tipo de fruto), no una nuez verdadera ni una semilla. Tiene tres capas: el exocarpio (piel exterior lisa), el mesocarpio (capa fibrosa intermedia o estopa), y el endocarpio (cáscara leñosa con tres poros germinativos). Adentro tiene la pulpa blanca (copra) y el agua de coco." }
    ]
},
};
