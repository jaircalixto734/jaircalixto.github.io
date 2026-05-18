const baseDatosArboles = {
    "merecure": {
        id: "#JBP-01", tipo: "Nativo", nombre: "Merecure", cientifico: "Moquilea pyrifolia (Griseb.) R.O.Williams",
        familia: "Chrysobalanaceae", origen: "Nativo Orinoquía", estado: "Preocupación Menor (NE/LC)", exotica: false,
        carbono: 215.4, viajes: 78, imagen_portada: "./imagenes/colegio1.jpeg",
        galeria: [
            { img: "./imagenes/colegio1.jpeg", desc: "Gran Merecure del JBP brindando sombrío permanente" },
            { img: "./imagenes/foto2.jpeg", desc: "Follaje denso perennifolio y hojas lanceoladas" }
        ],
        nombresLocales: ["Merecure", "Querebere", "Merecurito (juveniles)", "Árbol del Llano"],
        distribucion: `
            <p><strong>Árbol emblemático de los Llanos Colombo-Venezolanos:</strong> Se distribuye desde las Antillas Menores (Martinica, Trinidad) hasta el norte de Sudamérica (Colombia y Venezuela). En Colombia es nativo y muy popular en las cuencas de los ríos Orinoco y Meta, con registros botánicos documentados en Casanare (Orocué, río Meta) y Arauca (Tame, Cravo Norte). Habita bosques de galería, matas de monte y sabanas inundables, donde actúa como una especie estructural clave y es reconocido como símbolo natural del estado Apure (Venezuela).</p>
            <div class="mt-3">
                <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Clase / Orden</td><td style="padding:6px;">Magnoliopsida / Malpighiales</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Nomenclatura</td><td style="padding:6px;">El género <em>Licania</em> fue segregado recientemente, reconociéndose a <em>Moquilea pyrifolia</em> (Griseb.) R.O.Williams (1932) como válido en filogenia molecular. En el Catálogo de Flora de Colombia (UNAL) figura bajo su basónimo aceptado <em>Licania pyrifolia</em> Griseb. (1860).</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Sinónimos</td><td style="padding:6px;"><em>Moquilea macrocarpa</em> Pittier (1938), <em>Licania pyrifolia</em> Griseb.</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Conservación</td><td style="padding:6px;">No figura con amenaza inminente en los Libros Rojos de Colombia ni en la Lista Roja de la UICN (Categoría probable LC / NE).</td></tr>
                </table>
            </div>
            <div class="blockquote-pro">
                <p>"Bosques de tierras bajas y bosques ribereños en lugares abiertos, desde Martinica hasta Trinidad, en regiones aledañas de Venezuela, y en Colombia."</p>
                <cite>— Universidad Nacional de Colombia – Biovirtual (s.f.)</cite>
            </div>
            <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
                <strong>Epíteto Específico:</strong> El nombre <em>pyrifolia</em> (del latín <em>pyrus</em> y <em>folia</em>) hace alusión a la curiosa similitud morfológica que tienen sus hojas con las del peral europeo, a pesar de pertenecer a familias botánicas totalmente distintas.
            </div>
        `,
        densidad: "0.65 – 0.80 g/cm³ (Madera pesada y dura; requiere calibración local)", fraccion: "0.47 – 0.50 (Ref. 0.49)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
                AGB = 0.0509 · (ρ · DAP² · H)⁰·⁹⁹⁶
            </div>
            <p class="text-sm">Modelo alométrico de <strong>Chave et al. (2005)</strong> y sugerido por <strong>Álvarez et al. (2012)</strong> para estimar la biomasa aérea total (AGB en kg) de latifoliadas tropicales en bosques naturales colombianos de tierras bajas cálidas.</p>
            <div class="mt-3">
                <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom: 15px;">
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">DAP (D)</td><td style="padding:6px;">Diámetro a la altura del pecho (cm, medido a 1.30 m)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">H</td><td style="padding:6px;">Altura total del árbol (m)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">ρ (Densidad)</td><td style="padding:6px;">Densidad básica de la madera (~0.68 g/cm³, promedio referencial de Chrysobalanaceae)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Fracción C</td><td style="padding:6px;">Biomasa aérea total × 0.49 (Conversión de carbono sugerida para bosque húmedo-seco llanero)</td></tr>
                </table>
            </div>
            <div class="blockquote-pro" style="font-size:0.85rem;">
                <p>"La estimación de los contenidos y flujos de carbono en bosques tropicales es de gran interés, debido a que estos ecosistemas actúan como verdaderos sumideros o fuentes de CO₂ a la atmósfera..."</p>
                <cite>— Yepes et al. (2011) / IDEAM</cite>
            </div>
            <div class="warn-box mt-2" style="font-size:0.8rem; border-left:4px solid #e74c3c; padding-left:10px; color:var(--text-main); margin-top: 15px;">
                ⚠️ <strong>Dato por verificar en campo (Integridad Científica SILVAIN):</strong> No se cuenta con una densidad básica de madera Species-Specific de Merecure en el Casanare. Se asume provisionalmente el rango 0.65–0.80 g/cm³ a la espera de ensayos xilológicos ASTM D2395.
            </div>
        `,
        calendario: [
            { mes: "Dic", fase: "Floración Ppal 🌸", clima: "dry" },
            { mes: "Ene", fase: "Floración Ppal 🌸", clima: "dry" },
            { mes: "Feb", fase: "Formación Fruto 🟢", clima: "dry" },
            { mes: "Mar", fase: "Fructif. Activa 🟢", clima: "dry" },
            { mes: "Abr", fase: "Maduración / Cosecha 🍇", clima: "rain" },
            { mes: "May", fase: "Cosecha Máxima 🍇", clima: "rain" },
            { mes: "Jun", fase: "Dispersión / Caída 🍇", clima: "rain" },
            { mes: "Jul", fase: "Dispersión / Caída 🍇", clima: "rain" },
            { mes: "Ago", fase: "Rebrotes Foliares 🌱", clima: "rain" },
            { mes: "Sep", fase: "Crecimiento Activo 🌱", clima: "rain" },
            { mes: "Oct", fase: "Vegetación Activa 🍃", clima: "rain" },
            { mes: "Nov", fase: "Pre-floración 🌸", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px; font-size:0.95rem;">
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-tree"></i> Hábito y Porte:</strong> Árbol de crecimiento lento y gran longevidad. Alcanza habitualmente alturas de 8 a 15 metros y diámetros de fuste de hasta 45 cm. Presenta una copa sumamente amplia, densa, globosa y perennifolia (siempreverde), brindando un sombrío de frescura inigualable.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-seedling"></i> Sistema Radicular:</strong> Raíz principal pivotante de gran profundidad combinada con raíces laterales robustas. Este entramado le confiere una firmeza excepcional y una gran resistencia tanto a las inundaciones estacionales como a los veranos intensos.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-folder-open"></i> Madera y Corteza:</strong> Fuste irregular, de fuste corto y ramificado a baja altura. Corteza grisácea a pardo-grisácea con lenticelas inconspicuas. Madera de color marrón claro o rosado-grisáceo, sumamente pesada, dura, fuerte y duradera, con características vetas de goma rojiza oscura.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-leaf"></i> Follaje y Hojas:</strong> Hojas simples, alternas y dísticas (dispuestas en un solo plano), de forma elíptica a oblonga (de 11 x 5 cm). Haz verde claro brillante y envés lanoso con nervación prominente. Su nombre científico <em>pyrifolia</em> proviene del latín por su gran parecido con las hojas del peral.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-spa"></i> Flores e Inflorescencia:</strong> Flores hermafroditas, de tamaño reducido (4–4.5 mm), de color blanco y muy fragantes. Se disponen solitarias o agrupadas en inflorescencias lanosas sobre ramas cortas. Poseen de 25 a 35 estambres y un ovario lanoso.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-circle-notch"></i> Fruto y Semilla:</strong> Fruto oblongo, drupáceo y verrugoso, de hasta 11 cm de largo y 5 cm de ancho (9 x 4.5 cm en muestras de libro). Al madurar adquiere un color marrón grisáceo. Posee un epicarpo frágil que encierra una única semilla grande y una pulpa harinosa, de color amarillo-anaranjado, de olor característico y sabor dulce agradable. Se recomienda retirar la cubierta fibrosa de la semilla antes de la siembra para acelerar la germinación.</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3" style="font-size:0.9rem;">
                <div class="metric-card"><div class="metric-label">🦜 Avifauna y Cotorras</div><div class="section-val text-sm mt-2"><strong>Tangaras, loros, carpinteros y cotorras (Psittacidae spp.):</strong> Utilizan la copa frondosa para anidar y comer la pulpa del fruto maduro. Sus ramas son ideales para percha y forrajeo.</div></div>
                <div class="metric-card"><div class="metric-label">🐗 Chácharos y Pecaríes</div><div class="section-val text-sm mt-2"><strong>Chácharos o pecaríes (Tayassu spp.), báquiros y venados cola blanca:</strong> Consumen con gran avidez los frutos carnosos caídos en el piso del bosque de galería.</div></div>
                <div class="metric-card"><div class="metric-label">🐄 Ganado y Silvopastoreo</div><div class="section-val text-sm mt-2">El ganado bovino consume ávidamente los merecures caídos en los potreros, siendo uno de los principales recursos forrajeros nativos del llano.</div></div>
                <div class="metric-card"><div class="metric-label">🐝 Insectos Polinizadores</div><div class="section-val text-sm mt-2">Las abejas nativas (meliponinos, abejas melíferas), mariposas y otros dípteros polinizan las fragantes flores blancas del merecure durante la sequía.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3" style="font-size:0.9rem;">
                <div class="metric-card"><div class="metric-label">🏗️ Horcones y Construcción Rural</div><div class="section-val text-sm mt-2">La madera es extremadamente pesada, fuerte y durable. Tradicionalmente apreciada en el campo llanero para fabricar horcones, columnas de viviendas rurales, postes de cercas y mangos de herramientas por su resistencia a la intemperie.</div></div>
                <div class="metric-card"><div class="metric-label">🥤 Alimentario e Indígena</div><div class="section-val text-sm mt-2">Comestible fresco. Los niños consumen sus frutos cual si fueran mangos. Los pueblos indígenas Pumé y Guahibo procesaban la pulpa harinosa para elaborar bebidas y chicha. Se puede consumir troceado y mezclado con leche.</div></div>
                <div class="metric-card"><div class="metric-label">🩺 Laxante Suave y Medicina</div><div class="section-val text-sm mt-2">El fruto maduro se utiliza como laxante suave en la medicina popular. La decocción de la corteza, rica en compuestos fenólicos y flavonoides, actúa como astringente cicatrizante.</div></div>
                <div class="metric-card"><div class="metric-label">🎵 Patrimonio y Copla Llanera</div><div class="section-val text-sm mt-2">Su nombre inspiró el "Merecure", uno de los golpes clásicos de joropo. René Devia en su tema <em>Les merecures</em> evoca: "El canto de los petises siempre me hace recordar, el merecure plateado, las flores del morichal".</div></div>
            </div>
        `,
        mensajeIA: "¡Hola, pariente llanero! Soy el Merecure, el verdadero gigante sabio de los Llanos de Casanare. Si miras mi copa, verás un inmenso paraguas siempre verde que da la sombra más fresca de todo el potrero. Tengo las raíces tan profundas que ni las grandes inundaciones del río Meta ni el sol ardiente de enero me hacen temblar. Los niños me conocen muy bien por el dicho llanero: '¡Conmigo es: palos pa' lo alto, merecures pa'l suelo y chinos a recoger!' Y lo más asombroso de todo... ¡tengo mi propio golpe en la música del joropo! Con el sonar de la madera de mis horcones y el cantar de los arperos, mi alma vive por siempre en la sabana.",
        referencias: [
            "Álvarez, E., Duque, A., Saldarriaga, J. G., Cabrera, K., De las Salas, G., Del Valle, J. I., Moreno, F., Orrego, S. A., & Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. Forest Ecology and Management, 267, 297–308. https://doi.org/10.1016/j.foreco.2011.11.013",
            "Braca, A., Bilia, A. R., Mendez, J., Pizza, C., Morelli, I., & De Tommasi, N. (2003). Chemical and biological studies on Licania genus. En Studies in Natural Products Chemistry (Vol. 28, pp. 35–67). Elsevier. https://doi.org/10.1016/S1572-5995(03)80004-3",
            "Forero, E., & Romero, C. (Eds.). (1990). Flora de Colombia: Chrysobalanaceae. Instituto de Ciencias Naturales, Universidad Nacional de Colombia.",
            "Hoyos F., J. (1983). Guía de árboles de Venezuela (Monografía N° 32, pp. 282–283). Fundación La Salle de Ciencias Naturales.",
            "Prance, G. T., & Sothers, C. A. (2003). Chrysobalanaceae 1, Chrysobalanus to Parinari. Species Plantarum: Flora of the World, Part 9 (pp. 1–319). Australian Biological Resources Study.",
            "Sothers, C. A., Prance, G. T., & Chase, M. W. (2019). A new name in Moquilea (Chrysobalanaceae). Kew Bulletin, 74(4), 58. https://doi.org/10.1007/s12225-019-9835-0",
            "Yepes, A. P., Navarrete, D. A., Duque, A. J., Phillips, J. F., Cabrera, K. R., Álvarez, E., García, M. C., & Ordóñez, M. F. (2011). Protocolo para la estimación nacional y subnacional de biomasa-carbono en Colombia. Instituto de Hidrología, Meteorología y Estudios Ambientales – IDEAM."
        ],
        quiz: [
            { q: "¿A qué familia botánica pertenece el Merecure (Moquilea pyrifolia)?", opts: ["Fabaceae (leguminosas)", "Moraceae (moras y ficus)", "Chrysobalanaceae (crisobalanáceas)"], correct: 2 },
            { q: "¿Cuál es el dicho popular llanero que recuerda la recolección infantil de sus frutos?", opts: ["\"Conmigo es: palos pa' lo alto, merecures pa'l suelo y chinos a recoger\"", "\"Merecure plateado, flores del morichal\"", "\"El que siembra en sabana, recoge en la vega\""], correct: 0 },
            { q: "¿Qué importante relación cultural inmaterial tiene este árbol con el folclor de la Orinoquía?", opts: ["Su madera se usa para tallar las mejores arpas llaneras", "Su nombre dio origen a un golpe musical tradicional del joropo llanero", "Sus hojas se usan para fabricar las maracas del baile"], correct: 1 }
        ]
    },
    "jambolan": {
        id: "#JBP-02", tipo: "Frutal", nombre: "Jambolán", cientifico: "Syzygium cumini (L.) Skeels",
        familia: "Myrtaceae", origen: "Exótico (Indo-Malaya)", estado: "Cultivada / Naturalizada", exotica: true,
        carbono: 150.8, viajes: 55, imagen_portada: "./imagenes/Jambolán.jpeg",
        galeria: [
            { img: "./imagenes/Jambolán.jpeg", desc: "Frutos maduros de Jambolán que tiñen la lengua de lila" }
        ],
        nombresLocales: ["Uvito", "Jambolán", "Ciruela de Java", "Uva mora", "Guayabo Pesgua", "Java Plum", "Jamun"],
        distribucion: `
            <p><strong>Especie exótica introducida y naturalizada en Colombia:</strong> Es originaria del subcontinente indio y del Sudeste Asiático (región Indo-Malaya). Fue introducida en América tropical con fines frutales, ornamentales y de sombrío. En Colombia, el Catálogo de Plantas y Líquenes de Colombia (UNAL, 2015) la reporta como especie <strong>Cultivada</strong> con registros en Cesar, Cundinamarca y Valle del Cauca, adaptada desde los 150 hasta los 2430 m s.n.m. En la Orinoquía, su presencia en patios, potreros y fincas de Maní es estrictamente de origen antrópico.</p>
            <div class="mt-3">
                <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Basónimo</td><td style="padding:6px;"><em>Myrtus cumini</em> L. (Sp. Pl. 471, 1753)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Sinónimos</td><td style="padding:6px;"><em>Eugenia cumini</em> (L.) Druce; <em>Eugenia jambolana</em> Lam.; <em>Syzygium jambolanum</em> (Lam.) DC.</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Etimología</td><td style="padding:6px;"><em>Syzygium</em> (del griego <em>syzygos</em> = unidos en pares, por sus hojas opuestas) y <em>cumini</em> (del latín comino, por el fragante aroma de sus hojas al frotarse).</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Conservación</td><td style="padding:6px;">No Evaluada (NE) nacionalmente. Globalmente no amenazada y considerada en varias islas tropicales y regiones (como Florida y Brasil) como especie con potencial invasor.</td></tr>
                </table>
            </div>
            <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid #e74c3c; padding-left:12px; margin-top:15px; color:var(--text-main);">
                <strong>Alerta de Manejo Forestal (JBP Maní):</strong> Al tratarse de una especie exótica con alto potencial invasor por zoocoria (aves y murciélagos dispersando semillas), su propagación debe ser estrictamente monitoreada para evitar el desplazamiento de especies nativas del bosque de galería.
            </div>
        `,
        densidad: "0.56 g/cm³ (i-Tree / USDA Forest Service, 2021)", fraccion: "0.47 – 0.50 (Estándar IPCC)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
                BA = a · ρ · DAPᵇ · Hᶜ
            </div>
            <p class="text-sm">Ecuación alométrica recomendada por <strong>Álvarez et al. (2012)</strong> para estimar la biomasa aérea ($BA$ en kg) de latifoliadas tropicales cultivadas e introducidas en Colombia.</p>
            <div class="mt-3">
                <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom: 15px;">
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">DAP (D)</td><td style="padding:6px;">Diámetro a la altura del pecho (cm, a 1.30 m)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">H</td><td style="padding:6px;">Altura total del árbol (m)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">ρ (Densidad)</td><td style="padding:6px;">Densidad básica de la madera = 0.56 g/cm³ (USDA, 2021)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Conversión C</td><td style="padding:6px;">Carbono (t C) = Biomasa aérea ($BA$) × 0.50 / 1000 (IDEAM, 2011)</td></tr>
                </table>
            </div>
            <div class="blockquote-pro" style="font-size:0.85rem;">
                <p>"Las especies introducidas de rápido crecimiento han sido evaluadas en plantaciones tropicales como fuentes secundarias de biomasa; sin embargo, su potencial de almacenamiento de carbono por individuo suele ser inferior al de las nativas madurantes de alta densidad."</p>
                <cite>— Yepes et al. (2011) – Protocolo Biomasa-Carbono IDEAM</cite>
            </div>
        `,
        calendario: [
            { mes: "Dic", fase: "Brotación foliar rojiza 🌱", clima: "dry" },
            { mes: "Ene", fase: "Brotación foliar rojiza 🌱", clima: "dry" },
            { mes: "Feb", fase: "Brotación / Acumulac. 🌱", clima: "dry" },
            { mes: "Mar", fase: "Floración Plena 🌸", clima: "dry" },
            { mes: "Abr", fase: "Floración Plena 🌸", clima: "rain" },
            { mes: "May", fase: "Fructif. / Desarrollo 🟢", clima: "rain" },
            { mes: "Jun", fase: "Fructif. / Desarrollo 🟢", clima: "rain" },
            { mes: "Jul", fase: "Madurac. / Caída 🍇", clima: "rain" },
            { mes: "Ago", fase: "Madurac. / Cosecha 🍇", clima: "rain" },
            { mes: "Sep", fase: "Dispersión / Germinac. 🍇", clima: "rain" },
            { mes: "Oct", fase: "Crecimiento Foliar 🍃", clima: "rain" },
            { mes: "Nov", fase: "Crecimiento Foliar 🍃", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px; font-size:0.95rem;">
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-tree"></i> Hábito y Porte:</strong> Árbol siempreverde (perennifolio) de rápido crecimiento y larga vida (más de 100 años). Alcanza alturas de 6 a 20 m (y hasta 30 m en su hábitat natural). Copa globosa, muy ramosa y densa. Tronco corto, robusto y a veces retorcido, con corteza gruesa, lisa a escamosa, de color castaño a gris oscuro.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-seedling"></i> Raíz:</strong> Sistema radicular de tipo pivotante, muy profundo y vigoroso, complementado por raíces laterales extensas que le confieren una excelente sujeción y tolerancia a encharcamientos cortos en sabana.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-leaf"></i> Follaje y Hojas:</strong> Hojas opuestas, elípticas a oblongas (7–18 cm × 4–8 cm), coriáceas, de margen entero y ápice obtuso. Haz verde brillante y envés mate con glándulas aromáticas. Los brotes nuevos exhiben una hermosa coloración rojizo-cobriza.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-spa"></i> Flores:</strong> Flores fragantes y pequeñas (~5 mm), agrupadas en inflorescencias terminales o axilares. Pétalos blanquecinos y estambres numerosos en forma de borla blanca que atrae a cientos de polinizadores.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-circle-notch"></i> Fruto y Propagación:</strong> Baya oblonga de tipo drupoide (1.5–3.5 cm) que pasa de verde a rosado y madura a negro-morado brillante. Contiene una única semilla grande. Se propaga fácilmente por semillas de alta germinación, lo que eleva su potencial invasor en condiciones de humedad sabanera.</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3" style="font-size:0.9rem;">
                <div class="metric-card"><div class="metric-label">🦜 Avifauna y Cotorras</div><div class="section-val text-sm mt-2"><strong>Loros, cotorras, tángaras y turpiales:</strong> Consumen con avidez los frutos carnosos en las copas de los árboles, sirviendo de vectores de dispersión.</div></div>
                <div class="metric-card"><div class="metric-label">🦇 Murciélagos Frugívoros</div><div class="section-val text-sm mt-2"><strong>Familias Phyllostomidae y frugívoros nocturnos:</strong> Consumen los frutos y dispersan semillas en vuelos nocturnos de largo alcance.</div></div>
                <div class="metric-card"><div class="metric-label">🐝 Insectos Polinizadores</div><div class="section-val text-sm mt-2"><strong>Abejas (Apis mellifera y nativas meliponinas) y mariposas:</strong> Aprovechan el abundante polen de los estambres en borla. Especie de alto interés apícola.</div></div>
                <div class="metric-card"><div class="metric-label">🐗 Fauna Terrestre</div><div class="section-val text-sm mt-2"><strong>Chigüiros, venados y pecaríes:</strong> Consumen las bayas caídas en el suelo, beneficiándose de su valor nutritivo e higroscópico.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3" style="font-size:0.9rem;">
                <div class="metric-card"><div class="metric-label">🥤 Alimentación y Gastronomía</div><div class="section-val text-sm mt-2">Los frutos se consumen frescos ("uva mora" o "uvito") o procesados en salsas, mermeladas, jaleas y tartas. En Asia se fermenta para producir vinos, brandy, licores (jambava) y vinagre. Altísimo contenido de hierro y vitaminas.</div></div>
                <div class="metric-card"><div class="metric-label">🌿 Etnomedicina Antidiabética</div><div class="section-val text-sm mt-2">Las semillas y corteza contienen compuestos hipoglucemiantes conocidos para reducir el azúcar en sangre. Empleado en tratamientos tradicionales de la diabetes, asma y assepsia de encías.</div></div>
                <div class="metric-card"><div class="metric-label">🔥 Madera y Energía Alternativa</div><div class="section-val text-sm mt-2">La Universidad del Atlántico ha investigado la obtención de carbón vegetal de alta eficiencia energética a partir de su madera ("uva mora") como combustible ecológico. Madera resistente útil para cercas, durmientes y postes.</div></div>
                <div class="metric-card"><div class="metric-label">🐄 Alimentación Bovina</div><div class="section-val text-sm mt-2">Las hojas se suministran como forraje de alta calidad. Además, extractos del árbol muestran efectividad científica frente a microorganismos asociados a la mastitis bovina en fincas ganaderas.</div></div>
            </div>
        `,
        mensajeIA: "¡Hola, amigo! Soy el Uvito, también conocido como Jambolán o Ciruela de Java. Nací muy lejos de aquí, en las lejanas sabanas de la India, pero hace mucho tiempo tomé un barco y eché raíces en el Casanare. Tengo un gran secreto: ¡cuando comes mis frutos maduros de color negro-morado, tu lengua quedará teñida de morado durante horas y no lo podrás evitar! Es porque estoy repleto de antocianinas, que son maravillosos antioxidantes naturales. Mis semillas y corteza son una farmacia viva contra la diabetes, y a las abejas les encantan mis borlas de flores blancas. ¡Disfruta de mi sombra fresca en Maní!",
        referencias: [
            "Álvarez, E., Duque, A., Saldarriaga, J. G., Cabrera, K., De las Salas, G., Del Valle, J. I., Moreno, F., Orrego, S. A., & Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. Forest Ecology and Management, 267, 297–308. https://doi.org/10.1016/j.foreco.2011.11.013",
            "Bernal, R., Gradstein, S. R., & Celis, M. (Eds.). (2015). Catálogo de plantas y líquenes de Colombia. Instituto de Ciencias Naturales, Universidad Nacional de Colombia.",
            "Royal Botanic Gardens, Kew. (2024). Syzygium cumini (L.) Skeels. En Plants of the World Online. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:601603-1",
            "U.S. Department of Agriculture, Forest Service. (2021). Understanding i-Tree – Appendix 11: Wood Density Values (Gen. Tech. Rep. GTR-NRS-200-2021). Northern Research Station.",
            "Yepes, A. P., Navarrete, D. A., Duque, A. J., Phillips, J. F., Cabrera, K. R., Álvarez, E., García, M. C., & Ordóñez, M. F. (2011). Protocolo para la estimación nacional y subnacional de biomasa-carbono en Colombia. Instituto de Hidrología, Meteorología y Estudios Ambientales – IDEAM.",
            "González Zambrano, E. F., & Torres Ibarra, J. (s.f.). Obtención de carbón vegetal a partir de la madera del árbol de uva mora (Syzygium cumini), con el fin de utilizarlo como combustible alternativo [Trabajo de grado]. Universidad del Atlántico."
        ],
        quiz: [
            { q: "¿De qué región del mundo es nativo el Jambolán o Uvito (Syzygium cumini)?", opts: ["Nativo de la cuenca del Amazonas", "Nativo del subcontinente indio y del Sudeste Asiático", "Nativo de las sabanas de la Orinoquía"], correct: 1 },
            { q: "¿Cuál es el efecto del fruto de Jambolán al consumirse que sirve como característica diagnóstica?", opts: ["Tiñe la lengua de morado por antocianinas", "Produce un sabor picante intenso", "Es de textura espinosa en la lengua"], correct: 0 },
            { q: "¿Por qué se le considera una especie de cuidado en el JBP Maní?", opts: ["Porque no produce biomasa ni capta carbono", "Porque es una especie exótica con alto potencial invasor si se propaga sin control", "Porque sus hojas son sumamente tóxicas para el ganado"], correct: 1 }
        ]
    },
    "palo-cruz": {
        id: "#JBP-03", tipo: "Nativo", nombre: "Palo Cruz", cientifico: "Brownea ariza Benth.",
        familia: "Fabaceae", origen: "Nativo de Colombia", estado: "Preocupación Menor (LC)", exotica: false,
        carbono: 185.0, viajes: 65, imagen_portada: "./imagenes/Palo_Cruz.jpeg",
        galeria: [
            { img: "./imagenes/Palo_Cruz.jpeg", desc: "Espectacular floración caulinar roja ('bola de fuego') del Palo Cruz" }
        ],
        nombresLocales: ["Palo Cruz", "Arizá", "Rosa de Monte", "Árbol de la Cruz", "Florisanto", "Monterillo", "Palosanto"],
        distribucion: `
            <p><strong>Especie 100% nativa de Colombia y el Neotrópico:</strong> Se distribuye naturalmente en Colombia, Ecuador, Perú y Venezuela, en un rango altitudinal de 0 a 1.700 m s.n.m. En Colombia, el Catálogo de Plantas y Líquenes de Colombia registra su presencia en 17 departamentos, incluyendo el Casanare y las tierras bajas de la Orinoquía. Su hábitat natural comprende bosques de galería, sabanas arboladas, vegas de ríos y humedales continentales. Su siembra ornamental ha ayudado a su conservación <em>ex situ</em> en parques y plazas de todo el país.</p>
            <div class="mt-3">
                <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Basónimo</td><td style="padding:6px;">No posee basónimos. Fue descrita originalmente por George Bentham en <em>Plantae Hartwegianae</em> (1845).</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Sinónimos</td><td style="padding:6px;"><em>Brownea princeps</em> Linden (1855); <em>Hermesias ariza</em> Kuntze (1891); <em>Brownea stenantha</em> Britton & Killip.</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Etimología</td><td style="padding:6px;"><em>Brownea</em> (en honor a Patrick Browne, médico botánico irlandés) y <em>ariza</em> (nombre vernáculo colonial con el que era conocido por los habitantes locales al momento de su clasificación).</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Conservación</td><td style="padding:6px;">Calificada como <strong>Preocupación Menor (LC)</strong> a nivel global (UNAL / ColPlanta 2025). Sin embargo, la deforestación de bosques de galería en Casanare resalta la importancia de conservarlo <em>ex situ</em> en el JBP Maní.</td></tr>
                </table>
            </div>
            <div class="blockquote-pro mt-3" style="font-size:0.9rem;">
                <p><strong>El enigma de la caulifloria:</strong> Este árbol presenta uno de los espectáculos botánicos más hermosos del trópico: las flores emergen directamente del tronco principal y ramas mayores, en lugar de las puntas terminales. Esto facilita el acceso a grandes polinizadores terrestres y aéreos.</p>
            </div>
        `,
        densidad: "Dato por verificar en campo (Madera pesada y dura)", fraccion: "0.47 – 0.50 (Estándar IPCC)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
                BA = a · ρ · DAPᵇ · Hᶜ
            </div>
            <p class="text-sm">Ecuación alométrica recomendada por <strong>Álvarez et al. (2012)</strong> para estimar la biomasa aérea ($BA$ en kg) de latifoliadas nativas en bosques tropicales colombianos.</p>
            <div class="mt-3">
                <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom: 15px;">
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">DAP (D)</td><td style="padding:6px;">Diámetro a la altura del pecho (cm, a 1.30 m)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">H</td><td style="padding:6px;">Altura total del árbol (m)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">ρ (Densidad)</td><td style="padding:6px;">Densidad básica de la madera → ⚠️ Dato por determinar en laboratorio del JBP Maní.</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Conversión C</td><td style="padding:6px;">Carbono (t C) = Biomasa aérea ($BA$) × 0.50 / 1000 (Directrices IPCC 2006 / Yepes et al., 2011)</td></tr>
                </table>
            </div>
            <div class="blockquote-pro" style="font-size:0.85rem;">
                <p>"La familia Fabaceae, por su abundancia en bosques colombianos y por sus relaciones simbióticas con bacterias fijadoras de nitrógeno (Rhizobium spp.), constituye uno de los grupos de mayor relevancia tanto en la dinámica del carbono como en la fertilidad de suelos."</p>
                <cite>— Yepes et al. (2011) – Protocolo Biomasa-Carbono IDEAM</cite>
            </div>
        `,
        calendario: [
            { mes: "Dic", fase: "Brotación cromática 🎨", clima: "dry" },
            { mes: "Ene", fase: "Brotación cromática 🎨", clima: "dry" },
            { mes: "Feb", fase: "Acumulación reservas 🌱", clima: "dry" },
            { mes: "Mar", fase: "Pico de Floración 🌺", clima: "dry" },
            { mes: "Abr", fase: "Pico de Floración 🌺", clima: "rain" },
            { mes: "May", fase: "Fructificación / Legumbres 🫘", clima: "rain" },
            { mes: "Jun", fase: "Fructificación / Legumbres 🫘", clima: "rain" },
            { mes: "Jul", fase: "Dispersión / Dehiscencia 🫘", clima: "rain" },
            { mes: "Ago", fase: "Germinación en campo 🌱", clima: "rain" },
            { mes: "Sep", fase: "Brotación cromática 🎨", clima: "rain" },
            { mes: "Oct", fase: "Crecimiento vegetativo 🍃", clima: "rain" },
            { mes: "Nov", fase: "Crecimiento vegetativo 🍃", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px; font-size:0.95rem;">
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-tree"></i> Hábito y Porte:</strong> Árbol perennifolio pequeño a mediano (9 a 12 m de altura, hasta 15 m en óptimas condiciones). Copa amplia y abierta, caracterizada por ramas colgantes y arqueadas que a menudo llegan a tocar el suelo. Tronco grisáceo corto, con DAP de 30-40 cm.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-seedling"></i> Raíz:</strong> Sistema radicular pivotante y profundo. Sus raíces se anclan firmemente en suelos aluviales húmedos y ricos en materia orgánica. No produce contrafuertes o raíces aéreas.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-leaf"></i> Metamorfosis Cromática Foliar:</strong> Hojas alternas compuestas paripinnadas de 60-70 cm de largo, con 6-12 pares de folíolos coriáceos. Los brotes nuevos se desarrollan en racimos péndulos con una bellísima secuencia cromática: gris-plateado → rosado/salmón → verde pálido casi transparente → verde oscuro brillante.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-spa"></i> Flores y Caulifloria:</strong> Inflorescencias caulinares dispuestas en cabezuelas globosas gigantes ("bolas de fuego") de 12 a 18 cm de diámetro. Flores de color rojo-anaranjado a rojo carmesí brillante con filamentos y estambres largamente prominentes y abundante néctar.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-circle-notch"></i> Fruto y Semilla:</strong> Legumbre plana y coriácea de 20-30 cm de largo por 8 cm de ancho, de color marrón. Al madurar, se abre con fuerza (dehiscencia) liberando semillas con recubrimiento fibroso que germinan rápidamente.</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3" style="font-size:0.9rem;">
                <div class="metric-card"><div class="metric-label">🐦✨ Colibríes Polinizadores</div><div class="section-val text-sm mt-2"><strong>Colibrí colirrufo y amazilia:</strong> Son los polinizadores principales. Visitan las cabezuelas rojas atraídos por el color brillante y el abundante néctar.</div></div>
                <div class="metric-card"><div class="metric-label">🐿️ Guatines y Roedores</div><div class="section-val text-sm mt-2"><strong>Dasyprocta fuliginosa y fauna terrestre:</strong> Consumen las legumbres caídas y entierran las semillas, sirviendo de eficientes dispersores.</div></div>
                <div class="metric-card"><div class="metric-label">🦥 Perezosos y Refugio</div><div class="section-val text-sm mt-2"><strong>Perezosos de dos y tres dedos:</strong> Utilizan las ramas largas y colgantes como refugio, áreas de descanso y vías de tránsito seguro en el bosque.</div></div>
                <div class="metric-card"><div class="metric-label">🐝 Insectos Polinizadores</div><div class="section-val text-sm mt-2"><strong>Abejas melíferas y mariposas:</strong> Visitan activamente las flores en busca de néctar, completando el proceso de polinización.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3" style="font-size:0.9rem;">
                <div class="metric-card"><div class="metric-label">🏗️ Madera y Carpintería Rural</div><div class="section-val text-sm mt-2">La madera es excepcionalmente dura y resistente a la intemperie y a la degradación por termitas (comején). Se usa tradicionalmente en cercas, postes, ebanistería rústica y leña.</div></div>
                <div class="metric-card"><div class="metric-label">🩺 Etnomedicina y Astringencia</div><div class="section-val text-sm mt-2">Las hojas y ramas trituradas se aplican localmente como hemostático para detener el sangrado. La decocción de sus ramas y flores rojas se bebe contra la disentería, menorragia y parásitos.</div></div>
                <div class="metric-card"><div class="metric-label">🌺 Paisajismo y Conservación</div><div class="section-val text-sm mt-2">Es uno de los árboles ornamentales de mayor belleza en el trópico. Muy sembrado en parques y plazas por el impacto de sus cabezuelas rojas. Conserva suelos de vegas y ríos.</div></div>
                <div class="metric-card"><div class="metric-label">⛪ Simbología Cultural Llanera</div><div class="section-val text-sm mt-2">Nombrado "Palo Cruz" o "Florisanto" porque sus ramas arqueadas colgantes al cruzarse en ángulos de 90° forman figuras que evocan una cruz, dándole un trasfondo religioso de protección.</div></div>
            </div>
        `,
        mensajeIA: "¡Hola, pariente de la sabana! Soy el Palo Cruz, también conocido como Arizá o Rosa de Monte, y soy un árbol 100% colombiano. Lo que me hace verdaderamente spectacular y único en el mundo es mi caulifloria: ¡mis flores no nacen en las ramitas delgadas, sino directamente de mi tronco grueso, como si mi corazón de madera explotara en bolas de fuego rojo! Mis hojas jóvenes parecen hermosas marionetas de seda gris y rosada antes de madurar a verde brillante. Mi madera es tan dura que las termitas huyen de ella, y soy el mejor amigo de los colibríes. ¡Es un orgullo crecer aquí contigo en Maní!",
        referencias: [
            "Álvarez, E., Duque, A., Saldarriaga, J. G., Cabrera, K., De las Salas, G., Del Valle, J. I., Moreno, F., Orrego, S. A., & Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. Forest Ecology and Management, 267, 297–308.",
            "Bernal, R., Galeano, G., Gradstein, S. R., & Celis, M. (2025). ColPlanta — Brownea ariza Benth. Colombian Plants Made Accessible. Instituto de Ciencias Naturales, UNAL.",
            "Bernal, R., Galeano, G., Rodríguez, A., Sarmiento, H., & Gutiérrez, M. (2017). Nombres comunes de las plantas de Colombia. Instituto de Ciencias Naturales, UNAL – Biovirtual.",
            "Royal Botanic Gardens, Kew. (2024). Brownea ariza Benth. En Plants of the World Online. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:482406-1",
            "Mazza, G. (2018). Brownea ariza. Monaco Nature Encyclopedia.",
            "Yepes, A. P., Navarrete, D. A., Duque, A. J., Phillips, J. F., Cabrera, K. R., Álvarez, E., García, M. C., & Ordóñez, M. F. (2011). Protocolo para la estimación nacional y subnacional de biomasa-carbono en Colombia. IDEAM."
        ],
        quiz: [
            { q: "¿Qué nombre recibe el extraordinario fenómeno biológico en el que las flores nacen directamente del tronco del Palo Cruz?", opts: ["Heterofilia", "Partenocarpia", "Caulifloria"], correct: 2 },
            { q: "¿Por qué recibe popularmente el nombre de 'Palo Cruz' o 'Florisanto' en la cultura rural colombiana?", opts: ["Porque sus hojas tienen forma de cruz cristiana", "Porque el patrón de entrecruzamiento de sus ramas caídas forma ángulos rectos simulando una cruz", "Porque solo florece el Viernes Santo"], correct: 1 },
            { q: "¿Cuál es la metamorfosis de color que experimentan los brotes jóvenes del Palo Cruz?", opts: ["Gris-plateado → Rosado → Verde pálido → Verde oscuro", "Amarillo → Naranja → Rojo → Verde oscuro", "Blanco → Azul → Morado → Verde oscuro"], correct: 0 }
        ]
    },
    "almendro": {
        id: "#JBP-04", tipo: "Sombra / Frutal", nombre: "Almendro", cientifico: "Terminalia catappa L.",
        familia: "Combretaceae", origen: "Exótico (Asia)", estado: "Preocupación Menor (LC)", exotica: true,
        carbono: 280.5, viajes: 95, imagen_portada: "./imagenes/colegio1.jpeg",
        galeria: [
            { img: "./imagenes/colegio1.jpeg", desc: "Gran copa piramidal verticilada en el patio del colegio JBP" },
            { img: "./imagenes/foto2.jpeg", desc: "Defoliación estacional vistiendo de rojo el verano llanero" }
        ],
        nombresLocales: ["Almendro", "Almendrón", "Almendro de la India", "Almendro de los Trópicos", "Almendro de playa", "Almendrillo", "Almendro de Sombra"],
        distribucion: `
            <p><strong>Especie exótica introducida y naturalizada en Colombia:</strong> Originaria del Sudeste Asiático (Malasia, India e Indo-China), ha sido introducida y ampliamente cultivada en todas las regiones tropicales del globo. En Colombia, el Catálogo de Plantas y Líquenes de Colombia (UNAL, 2015) la reporta presente en las regiones Andina, Caribe, Orinoquía y Pacífico, en un rango altitudinal de 0 a 1.500 m s.n.m. En la Orinoquía (Maní, Casanare), prospera como árbol urbano, de potrero y ornamental gracias a su asombrosa tolerancia a la sequía estacional y los suelos ácidos típicos del llano.</p>
            <div class="mt-3">
                <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Basónimo</td><td style="padding:6px;">No posee. Fue clasificada originalmente por Carlos Linneo en <em>Mantissa Plantarum</em> (1767).</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Sinónimos</td><td style="padding:6px;"><em>Buceras catappa</em> (L.) Hitchc.; <em>Juglans catappa</em> (L.) Lour.; <em>Terminalia moluccana</em> Lam.</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Etimología</td><td style="padding:6px;"><em>Terminalia</em> (del latín <em>terminus</em> = terminal, aludiendo a la agrupación de hojas al final de los tallos) y <em>catappa</em> (de la palabra malaya <em>ketapang</em>, nombre original del árbol).</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Conservación</td><td style="padding:6px;">Preocupación Menor (LC) a nivel mundial. Especie extremadamente exitosa y no amenazada. En Colombia no está en Libros Rojos dada su condición exótica cultivada.</td></tr>
                </table>
            </div>
            <div class="blockquote-pro mt-3" style="font-size:0.9rem;">
                <p>"La familia Combretaceae se distribuye predominantemente en las regiones tropicales y subtropicales, con géneros arbóreos de alta importancia ecológica y etnobotánica en el Neotrópico, donde contribuyen a la estructura de bosques riparios y de galería."</p>
                <cite>— Alwyn H. Gentry (1993) – Guía de Campo de las Plantas Leñosas de Colombia</cite>
            </div>
        `,
        densidad: "0.59 g/cm³ (Madera de densidad media a media-alta)", fraccion: "0.47 – 0.50 (Ref. 0.47)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
                ln(BAS) = a + b · ln(DAP² · H · ρ)
            </div>
            <p class="text-sm">Modelo II.1 recomendado por <strong>Álvarez et al. (2012)</strong> para estimar la biomasa aérea seca ($BAS$ en kg) de árboles latifoliados en bosques naturales de Colombia.</p>
            <div class="mt-3">
                <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom: 15px;">
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">DAP (D)</td><td style="padding:6px;">Diámetro a la altura del pecho (cm, a 1.30 m)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">H</td><td style="padding:6px;">Altura total del árbol (m)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">ρ (Densidad)</td><td style="padding:6px;">Densidad básica de la madera → **0.59 g/cm³** (Ref. USDA / USFS / Brown & Lugo, 1992).</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Conversión C</td><td style="padding:6px;">Carbono (t C) = Biomasa aérea ($BAS$) × 0.47 / 1000 (Valor de conversión de carbono conservador para Combretaceae).</td></tr>
                </table>
            </div>
            <div class="blockquote-pro" style="font-size:0.85rem;">
                <p>"Los sistemas agroforestales y silvopastoriles —que en los Llanos Orientales de Colombia incorporan especies como el almendro— contribuyen al secuestro y almacenamiento de carbono, siendo fundamentales para proyectos REDD+."</p>
                <cite>— Segura et al. (2021) – Revista de Biología Tropical</cite>
            </div>
            <div class="warn-box mt-3" style="font-size:0.8rem; border-left:4px solid #e74c3c; padding-left:10px; color:var(--text-main);">
                ⚠️ <strong>Integridad Científica SILVAIN AI:</strong> No existe una densidad básica especie-específica certificada in situ en Casanare. La cifra 0.59 g/cm³ es referencial (USDA i-Tree). Requiere medición local en el JBP Maní.
            </div>
        `,
        calendario: [
            { mes: "Dic", fase: "Defoliación Roja 🍂", clima: "dry" },
            { mes: "Ene", fase: "Defoliación / Hojas Rojas 🍂", clima: "dry" },
            { mes: "Feb", fase: "Refoliación Joven 🌱", clima: "dry" },
            { mes: "Mar", fase: "Pico de Floración 🌸", clima: "trans" },
            { mes: "Abr", fase: "Pico de Floración 🌸", clima: "trans" },
            { mes: "May", fase: "Cuajado y Fructificación 🍑", clima: "rain" },
            { mes: "Jun", fase: "Crecimiento de drupas 🍑", clima: "rain" },
            { mes: "Jul", fase: "Maduración y cosecha 🍑", clima: "rain" },
            { mes: "Ago", fase: "Caída de frutos 🍑", clima: "rain" },
            { mes: "Sep", fase: "Dispersión por fauna / agua 💧", clima: "rain" },
            { mes: "Oct", fase: "Foliación máxima 🌿", clima: "rain" },
            { mes: "Nov", fase: "Foliación máxima 🌿", clima: "rain" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px; font-size:0.95rem;">
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-tree"></i> Hábito y Porte:</strong> Árbol caducifolio de 9 a 35 m de altura (10-20 m en Casanare). Tronco robusto con corteza grisácea agrietada en ejemplares maduros. Destaca por sus ramas horizontales dispuestas en pisos verticilados (falsa verticilada), formando una copa piramidal.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-seedling"></i> Raíz:</strong> Sistema radicular amplio y superficial. Desarrolla contrafuertes (bambas) en la base del tronco al envejecer, permitiendo gran anclaje en suelos variables.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-leaf"></i> Hojas Caducas:</strong> Alternas pero agrupadas en el ápice de las ramas (pseudoverticiladas). Hojas coriáceas obovadas (8-38 cm x 5-19 cm). Tienen la particularidad única de vestirse de color rojo brillante y caer en el verano llanero.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-spa"></i> Flores:</strong> Dispuestas en espigas axilares de 15 a 20 cm de longitud. Flores blancas-verdosas muy pequeñas (~6 mm) y con un aroma característico. Las flores masculinas se ubican arriba y las bisexuales en la base.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-circle-notch"></i> Fruto y Semilla:</strong> Drupa aplanada elipsoide bicarenada de 4-7 cm de largo. Mesocarpo carnoso y fibroso, endocarpo leñoso sumamente duro. La semilla interior es una almendra comestible de difícil extracción. Dispersión por hidrocoría y fauna.</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3" style="font-size:0.9rem;">
                <div class="metric-card"><div class="metric-label">🦜 Loros y Cotorras</div><div class="section-val text-sm mt-2"><strong>Amazona amazonica (Loro real llanero) y Forpus:</strong> Consumen con avidez las drupas maduras, rompiendo los frutos y favoreciendo la dispersión biológica.</div></div>
                <div class="metric-card"><div class="metric-label">🦇 Murciélagos Frugívoros</div><div class="section-val text-sm mt-2"><strong>Artibeus jamaicensis y Carollia:</strong> Consumen el mesocarpo carnoso de las legumbres por la noche, transportando las semillas y actuando como eficientes dispersores secundarios.</div></div>
                <div class="metric-card"><div class="metric-label">🦎 Iguanas y Foliación</div><div class="section-val text-sm mt-2"><strong>Iguana iguana:</strong> Consumen las hojas tiernas de los brotes jóvenes y trepan hasta los pisos superiores para termorregularse bajo el sol llanero.</div></div>
                <div class="metric-card"><div class="metric-label">🐟 Biotopo y Purificación</div><div class="section-val text-sm mt-2"><strong>Peces y macroinvertebrados:</strong> Las hojas caídas en caños y morichales liberan taninos saludables que bajan la acidez, matan bacterias y purifican el agua.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3" style="font-size:0.9rem;">
                <div class="metric-card"><div class="metric-label">🐄 Sombra Ganadera y Sistemas</div><div class="section-val text-sm mt-2">Su amplia copa en pisos brinda el sombrío ideal para el ganado bovino durante las horas críticas del día (10 a.m. a 3 p.m.), reduciendo significativamente el estrés calórico y mejorando el ordeño.</div></div>
                <div class="metric-card"><div class="metric-label">🏗️ Madera e Hidrorresistencia</div><div class="section-val text-sm mt-2">Madera sólida de color rojizo con excelente resistencia al agua. Tradicionalmente empleada en el llano para fabricar postes de cercas, construcciones de corrales y canoas o curiaras.</div></div>
                <div class="metric-card"><div class="metric-label">🩺 Etnomedicina Llanera</div><div class="section-val text-sm mt-2">Las hojas secas son ricas en taninos y flavonoides con alto poder cicatrizante y antibacteriano. Tradicionalmente, la infusión se bebe contra problemas hepáticos, diabetes y diarrea.</div></div>
                <div class="metric-card"><div class="metric-label">🍽️ Alimentación y Nutrición</div><div class="section-val text-sm mt-2">Las semillas o "almendras" contenidas dentro del hueso son comestibles, muy nutritivas y ricas en aceites. Tradicionalmente recolectadas por niños en el patio del colegio JBP.</div></div>
            </div>
        `,
        mensajeIA: "¡Hola, pariente! Soy el Almendro del Llano, aunque mis raíces reales están muy lejos, en el Sudeste Asiático. Aterricé en Casanare hace tiempo y aquí me quedé. Mis ramas son geniales porque crecen en pisos verticilados, formando una estructura de capas perfecta para que el ganado se resguarde a mediodía. En verano me visto con un deslumbrante follaje de hojas rojas antes de soltarlas para mi descanso. Mis frutos guardan una almendra dulce que a los loros reales les fascina, y mis hojas secas caídas actúan como una medicina natural purificando los caños de agua para los peces. ¡Disfruta de mi sombra en el colegio JBP!",
        referencias: [
            "Álvarez, E., Duque, A., Saldarriaga, J. G., Cabrera, K., De las Salas, G., Del Valle, J. I., Moreno, F., Orrego, S. A., & Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. Forest Ecology and Management, 267(1), 297–308.",
            "Bernal, R., Gradstein, S. R., & Celis, M. (Eds.). (2015). Catálogo de plantas y líquenes de Colombia. Instituto de Ciencias Naturales, Universidad Nacional de Colombia.",
            "Brown, S., & Lugo, A. E. (1992). Wood densities of tropical tree species (Gen. Tech. Rep. SO-88). U.S. Department of Agriculture, Forest Service.",
            "Francis, J. K. (1989). Terminalia catappa L. — Indian almond, almendra (SO-ITF-SM-23). U.S. Department of Agriculture, Forest Service.",
            "Plants of the World Online / Kew Science. (2024). Terminalia catappa L. Royal Botanic Gardens, Kew.",
            "Segura, M., Andrade, H. J., & Mojica Sánchez, S. (2021). Almacenamiento de carbono en sistemas agroforestales en los Llanos Orientales de Colombia. Revista de Biología Tropical, 69(1), 352–368.",
            "World Agroforestry Centre (ICRAF). (2024). Terminalia catappa — Species profile. Agroforestree Database 4.0."
        ],
        quiz: [
            { q: "¿A qué familia botánica pertenece el árbol de Almendro (Terminalia catappa)?", opts: ["Fabaceae", "Moraceae", "Combretaceae"], correct: 2 },
            { q: "¿En qué época del año el Almendro florece predominantemente en el régimen llanero de Maní (Casanare)?", opts: ["Al finalizar el verano e inicios de lluvias (marzo–abril)", "En pleno verano seco (enero–febrero)", "En el invierno más lluvioso (julio–agosto)"], correct: 0 },
            { q: "¿Qué beneficio brindan sus hojas secas caídas cuando entran en contacto con el agua de caños y acristalamientos?", opts: ["Ensucian el biotopo e impiden el crecimiento de algas", "Liberan taninos con propiedades antibacterianas que purifican y modulan el pH del agua", "Consumen el oxígeno impidiendo la vida de los peces"], correct: 1 }
        ]
    },
    "pomarrosa": {
        id: "#JBP-05", tipo: "Frutal / Ornamental", nombre: "Pomarrosa", cientifico: "Syzygium jambos (L.) Alston",
        familia: "Myrtaceae", origen: "Exótico (Asia)", estado: "Preocupación Menor (LC)", exotica: true,
        carbono: 142.5, viajes: 52, imagen_portada: "./imagenes/colegio2.jpeg",
        galeria: [
            { img: "./imagenes/colegio2.jpeg", desc: "Arbolado de pomarrosa y guaduas en el patio escolar del colegio JBP" }
        ],
        nombresLocales: ["Pomarroso", "Poma", "Pero de Agua", "Pomarrosa", "Perita", "Pumalaca", "Jambo", "Rose apple", "Malabar plum"],
        distribucion: `
            <p><strong>Especie exótica introducida y naturalizada en Colombia:</strong> Originaria del Sudeste Asiático (principalmente del archipiélago malayo o Insulindia), ha sido introducida y cultivada ampliamente en todas las regiones tropicales y subtropicales del globo. En Colombia, el Catálogo de Plantas y Líquenes de Colombia (Bernal, Gradstein & Celis, 2020) la reporta presente en las regiones Andina, Caribe, Orinoquía y Pacífico. En la Orinoquía (Maní, Casanare), se encuentra naturalizada a lo largo de bosques de galería, márgenes fluviales del río Meta y sus afluentes, y predios rurales por su gran adaptabilidad edafoclimática.</p>
            <div class="mt-3">
                <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Basónimo</td><td style="padding:6px;"><em>Eugenia jambos</em> L. (Sp. Pl.: 470, 1753), clasificada originalmente por Carlos Linneo.</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Sinónimos</td><td style="padding:6px;"><em>Jambosa jambos</em> (L.) Millsp.; <em>Myrtus jambos</em> (L.) Kunth; <em>Plinia jambos</em> (L.) M.Gómez.</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Etimología</td><td style="padding:6px;"><em>Syzygium</em> (del griego <em>syn</em> = "juntos" y <em>zygon</em> = "yugo", aludiendo a sus hojas decusadas opuestas) y <em>jambos</em> (del sánscrito <em>jambu</em>, nombre original dado al fruto en la India).</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Conservación</td><td style="padding:6px;">Preocupación Menor (LC) a nivel mundial (Lista Roja UICN 2019 / BGCI). Especie muy exitosa no amenazada. En Colombia no figura en Libros Rojos dada su condición exótica naturalizada.</td></tr>
                </table>
            </div>
            <div class="blockquote-pro mt-3" style="font-size:0.9rem;">
                <p>"En Colombia y Venezuela, el árbol ha sido acogido tradicionalmente como ornamental en climas cálidos, debido a su bajo mantenimiento, abundante sombra y rápido crecimiento."</p>
                <cite>— NaturaLista Colombia / Wikipedia ES (2024)</cite>
            </div>
        `,
        densidad: "0.60 – 0.75 g/cm³ (Madera moderadamente pesada)", fraccion: "0.47 – 0.50 (Ref. 0.50)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
                ln(AGB) = a + b · ln(D) + c · ln(ρ)
            </div>
            <p class="text-sm">Modelo recomendado por <strong>Álvarez et al. (2012)</strong> para estimar la biomasa aérea seca ($AGB$ en kg) de árboles latifoliados en bosques naturales de Colombia.</p>
            <div class="mt-3">
                <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom: 15px;">
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">D (DAP)</td><td style="padding:6px;">Diámetro a la altura del pecho (cm, a 1.30 m)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">ρ (Densidad)</td><td style="padding:6px;">Densidad básica de la madera → **0.60 – 0.75 g/cm³** (Ref. Zanne et al., 2009 / Global Wood Density Database).</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Conversión C</td><td style="padding:6px;">Carbono (t C) = Biomasa aérea ($AGB$) × 0.50 / 1000 (Factor estándar IPCC para Myrtaceae tropicales).</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Subterránea</td><td style="padding:6px;">Biomasa radicular estimada mediante el modelo de <strong>Cairns et al. (1997)</strong>.</td></tr>
                </table>
            </div>
            <div class="blockquote-pro" style="font-size:0.85rem;">
                <p>"Para el bosque seco tropical, los análisis de estas relaciones son aún más escasos, lo que subraya la urgencia de desarrollar ecuaciones locales para especies como Syzygium jambos en ecosistemas de sabana y galería."</p>
                <cite>— Castellanos & Cárdenas (2017) – Revista Mexicana de Biodiversidad</cite>
            </div>
            <div class="warn-box mt-3" style="font-size:0.8rem; border-left:4px solid #e74c3c; padding-left:10px; color:var(--text-main);">
                ⚠️ <strong>Integridad Científica SILVAIN AI:</strong> El IDEAM y el Catálogo de Maderas de Colombia no cuentan con un registro específico publicado para <em>Syzygium jambos</em> en la Orinoquía. El rango 0.60–0.75 g/cm³ es referencial global. Requiere toma de muestras densimétricas in situ en el JBP Maní.
            </div>
        `,
        calendario: [
            { mes: "Dic", fase: "Reposo estacional ☀️", clima: "dry" },
            { mes: "Ene", fase: "Crecimiento vegetativo 🌱", clima: "dry" },
            { mes: "Feb", fase: "Floración (pompones) 🌸", clima: "dry" },
            { mes: "Mar", fase: "Floración (pompones) 🌸", clima: "dry" },
            { mes: "Abr", fase: "Maduración de frutos (pomos) 🍈", clima: "rain" },
            { mes: "May", fase: "Cosecha de peritas de agua 🍈", clima: "rain" },
            { mes: "Jun", fase: "Crecimiento vegetativo activo 🌧️", clima: "rain" },
            { mes: "Jul", fase: "Crecimiento vegetativo activo 🌧️", clima: "rain" },
            { mes: "Ago", fase: "Crecimiento vegetativo activo 🌧️", clima: "rain" },
            { mes: "Sep", fase: "Foliación máxima 🌱", clima: "rain" },
            { mes: "Oct", fase: "Foliación máxima 🌱", clima: "rain" },
            { mes: "Nov", fase: "Yemas y pre-floración 🌺", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px; font-size:0.95rem;">
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-tree"></i> Hábito y Porte:</strong> Árbol perennifolio de 3 a 20 m de altura. Desarrolla una copa sumamente amplia y densa con tendencia a ramificar a baja altura. Tronco con corteza lisa pardo-rojiza a gris castaño.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-leaf"></i> Filotaxia Decusada:</strong> Hojas simples, opuestas (decusadas, dispuestas en 90° entre pares consecutivos), lanceoladas (10–24 cm × 3–5 cm), coriáceas de color verde brillante. Los brotes de hojas jóvenes muestran un espectacular color rosado intenso.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-spa"></i> Inflorescencia y Flores:</strong> Corimbos terminales de 4 a 5 flores hermafroditas actinomorfas epíginas. Pétalos blanquecinos a verdosos (1–1.5 cm) y estambres libres sumamente numerosos y largos (3–4 cm) que forman vistosos "pompones" blancos de abundante néctar.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-circle-notch"></i> Fruto y Semilla:</strong> Baya carnosa tipo pomo, globosa de color blanco rosado a amarillo al madurar. Pulpa dulce con aroma a rosas rica en pectinas. Semillas poliembriónicas de alta flotabilidad y germinación rápida (hidrocoría).</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-seedling"></i> Raíz:</strong> Sistema pivotante con raíces laterales superficiales fuertes que permiten anclarse firmemente en márgenes de quebradas y caños fluviales, controlando la erosión de riberas.</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3" style="font-size:0.9rem;">
                <div class="metric-card"><div class="metric-label">🐝 Abejas y Meliponinos</div><div class="section-val text-sm mt-2"><strong>Apis mellifera y nativas:</strong> Polinizadores primarios atraídos por el néctar abundante y los numerosos estambres que actúan como guías visuales secundarias.</div></div>
                <div class="metric-card"><div class="metric-label">🦜 Loros y Pericos</div><div class="section-val text-sm mt-2"><strong>Amazona y Brotogeris:</strong> Consumen las bayas carnosas directamente en el dosel de los bosques de galería de Maní, actuando como eficaces dispersores biológicos.</div></div>
                <div class="metric-card"><div class="metric-label">🦇 Murciélagos Frugívoros</div><div class="section-val text-sm mt-2"><strong>Artibeus spp.:</strong> Consumen el fruto carnoso en sus vuelos nocturnos, liberando las semillas a distancia y colonizando nuevas márgenes de caños.</div></div>
                <div class="metric-card"><div class="metric-label">🐦 Pavas y Palomas</div><div class="section-val text-sm mt-2"><strong>Penelope purpurascens y colúmbidos:</strong> Visitantes frecuentes del follaje superior del pomarroso durante la fructificación invernal.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3" style="font-size:0.9rem;">
                <div class="metric-card"><div class="metric-label">🍹 Alimentario y Repostería</div><div class="section-val text-sm mt-2">Fruto consumido fresco por su dulzor y perfume. Rico en pectinas y vitamina C, ideal para elaborar dulce de leche, mermeladas, jaleas y jugos frutales en el llano.</div></div>
                <div class="metric-card"><div class="metric-label">🩺 Etnomedicina Popular</div><div class="section-val text-sm mt-2">Semillas pulverizadas en decocción contra la diabetes; hojas en infusión diurética y antiinflamatoria ocular; corteza astringente rica en taninos (7–12.4%) para curtiembres.</div></div>
                <div class="metric-card"><div class="metric-label">🛡️ Control de Erosión Fluvial</div><div class="section-val text-sm mt-2">Su denso sistema de raíces superficiales actúa como amarre natural del suelo, estabilizando riberas, taludes fluviales y bordes de caños frente a crecientes invernales.</div></div>
                <div class="metric-card"><div class="metric-label">🐝 Sombra y Apicultura</div><div class="section-val text-sm mt-2">Su densa sombra sirve de resguardo calórico para bovinos en potreros. Además, su abundante néctar es sumamente cotizado para el montaje de apiarios de piedemonte.</div></div>
            </div>
        `,
        mensajeIA: "¡Hola, estudiante! Soy el Pomarroso (o perita de agua, como me llaman mis vecinos llaneros). Viajé desde el archipiélago malayo en el Sudeste Asiático hace mucho tiempo y encontré un hogar feliz en las orillas de los caños del Casanare. Mis flores parecen pequeños fuegos artificiales blancos que las abejas adoran por su néctar dulce, y mis semillas tienen un superpoder único: ¡saben nadar! Flotan en el agua para viajar con la corriente y colonizar nuevas orillas llaneras. Además, cuando crezco, mis brotes nuevos se visten de un alegre color rosado intenso. ¡Doy sombra fresquita, medicina popular y frutos perfumados a todo el llano!",
        referencias: [
            "Álvarez, E., Duque, A., Saldarriaga, J., Cabrera, K., de las Salas, G., del Valle, I., ... Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. Forest Ecology and Management, 267(1), 297–308.",
            "Bernal, R., Gradstein, S. R., & Celis, M. (Eds.). (2020). Catálogo de plantas y líquenes de Colombia (v1.1). Universidad Nacional de Colombia.",
            "Botanic Gardens Conservation International (BGCI) & IUCN SSC Global Tree Specialist Group. (2019). Syzygium jambos. The IUCN Red List of Threatened Species 2019. e.T49487025A144800316.",
            "Castellanos, J., & Cárdenas, D. (2017). Tipos funcionales de plantas como estimadores de carbono en bosque seco del Caribe colombiano. Revista Mexicana de Biodiversidad, 88(1), 147–157.",
            "Kew Science — Plants of the World Online. (2023). Syzygium jambos (L.) Alston. Royal Botanic Gardens, Kew.",
            "Zanne, A. E., Lopez-Gonzalez, G., Coomes, D. A., Ilic, J., Jansen, S., Lewis, S. L., Miller, R. B., Swenson, N. G., Wiemann, M. C., & Chave, J. (2009). Global wood density database. Dryad Digital Repository."
        ],
        quiz: [
            { q: "¿A qué familia botánica pertenece el árbol de Pomarroso (Syzygium jambos)?", opts: ["Fabaceae", "Moraceae", "Myrtaceae"], correct: 2 },
            { q: "¿Qué particularidad de dispersión hidráulica (hidrocoría) poseen las semillas del Pomarroso?", opts: ["Tienen alas grandes que les permiten planear", "Poseen alta flotabilidad y germinan rápidamente en márgenes fluviales", "Son enterradas por las hormigas melíferas"], correct: 1 },
            { q: "¿De qué color brotan las hojas jóvenes del Pomarroso antes de madurar?", opts: ["Amarillo limón brillante", "Rosado intenso o rojizo", "Blanco verdoso pálido"], correct: 1 }
        ]
    },
    "palma_areca": {
        id: "#JBP-06", tipo: "Ornamental", nombre: "Palma Areca", cientifico: "Dypsis lutescens (H.Wendl.) Beentje & J.Dransf.",
        familia: "Arecaceae", origen: "Exótico (Madagascar)", estado: "EN — En Peligro (UICN: Hábitat Natural) / No Evaluada en Colombia", exotica: true,
        carbono: 45.2, viajes: 15, imagen_portada: "./imagenes/areca1.jpg",
        galeria: [
            { img: "./imagenes/areca1.jpg", desc: "Porte multicaule cespitoso con estipes anillados dorados al sol" },
            { img: "./imagenes/areca2.jpg", desc: "Frutos drupas amarillo-dorados en madurez ('frutos de oro')" },
            { img: "./imagenes/areca3.jpg", desc: "Hojas pinnadas arqueadas con raquis y pecíolos amarillo-dorados característicos" }
        ],
        nombresLocales: ["Palma Areca", "Palmera Bambú", "Palma de Frutos de Oro", "Palma Mariposa", "Palma Dorada", "Butterfly Palm (EN)", "Golden Feather Palm (EN)"],
        distribucion: `
            <p><strong>Endémica del este de Madagascar — Bosques húmedos litorales:</strong> <em>Dypsis lutescens</em> es originaria exclusivamente de los bosques húmedos de la costa este de Madagascar, donde crece sobre suelos arenosos en elevaciones bajas. Gracias a su alta adaptabilidad y valor ornamental, ha sido introducida y cultivada en prácticamente todos los países tropicales y subtropicales del mundo.</p>
            <p>En Colombia aparece ampliamente cultivada en regiones de clima cálido-húmedo: Caribe, Pacífico, Andina (zonas bajas) y Orinoquía, entre 0 y 1.000 m s.n.m. El Catálogo de Flora del Valle de Aburrá (EIA, 2024) la registra como especie ornamental establecida en áreas urbanas colombianas.</p>
            <p>En Maní (Casanare), la especie se encuentra como planta de ornato en parques, casas y jardines, apreciada por su copa frondosa y su porte elegante adaptado al clima cálido llanero (temperatura media anual ≈ 27 °C). No ha sido registrada como especie naturalizada en ecosistemas naturales de la Orinoquía.</p>
            <div class="mt-3">
                <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Clase / Orden</td><td style="padding:6px;">Liliopsida (Monocotyledoneae) / Arecales</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Subfamilia / Tribu</td><td style="padding:6px;">Arecoideae / Areceae</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Género</td><td style="padding:6px;"><em>Dypsis</em> Noronha ex Mart. — del griego <em>dýpsis</em> ('zambullirse'), aludiendo al hábitat litoral húmedo de las palmeras malgaches</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Epíteto Específico</td><td style="padding:6px;"><em>lutescens</em> (del latín <em>lutescere</em>) — 'volverse amarillo / amarillento'. Describe el color dorado-amarillento característico de los tallos, pecíolos y hojas expuestos al sol</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Sinónimos Principales</td><td style="padding:6px;"><em>Chrysalidocarpus lutescens</em> H.Wendl. (1878) — basónimo; <em>Areca flavescens</em> Voss (1895); <em>Chrysalidocarpus baronii</em> var. <em>littoralis</em> Jum. & H.Perrier (1913); <em>Chrysalidocarpus glaucescens</em> Waby (1923)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Combinación Válida Actual</td><td style="padding:6px;">Beentje & J.Dransf. (1995) — publicada en <em>Palms of Madagascar</em>. Royal Botanic Gardens, Kew</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Conservación (UICN)</td><td style="padding:6px;">⚠️ <strong>EN — En Peligro</strong> en su hábitat natural (Madagascar) por destrucción masiva de bosques litorales. Fuera de su hábitat: No Evaluada (NE) en Colombia</td></tr>
                </table>
            </div>
            <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid #e74c3c; padding-left:12px; margin-top:15px; color:var(--text-main);">
                <strong>⚠️ Confusión de nombres:</strong> La "Palma Areca" en Colombia no es del género <em>Areca</em> (que incluye la <em>Areca catechu</em> — nuez de betel de Asia). <em>Dypsis lutescens</em> recibe el apodo popular de "areca" por su similitud estética, pero pertenece a un género distinto.
            </div>
            <div class="blockquote-pro mt-3" style="border-left:4px solid var(--primary-light); padding-left:15px; background:rgba(0,0,0,0.02); padding:12px; border-radius:6px;">
                <p style="margin:0; font-style:italic;">"La familia Arecaceae representa uno de los grupos de plantas más importantes económica y ecológicamente en los trópicos del mundo. En los ecosistemas de sabana y bosques de galería de la Orinoquía colombiana, las palmeras constituyen un elemento estructural fundamental del paisaje, proveen refugio y alimento a la fauna silvestre, y tienen un profundo significado cultural para las comunidades llaneras."</p>
                <cite style="display:block; margin-top:8px; font-size:0.85rem; color:var(--text-secondary);">— Henderson, A., Galeano, G., & Bernal, R. (1995). Field Guide to the Palms of the Americas. Princeton University Press. p. 3. [Adaptación contextual]</cite>
            </div>
            <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid #f39c12; padding-left:12px; margin-top:15px; color:var(--text-main); background:#fff3cd;">
                <strong>🌴 Paradoja de conservación global:</strong> La Palma Areca es una de las palmeras de interior más vendidas del mundo —con millones de ejemplares cultivados globalmente— mientras que en sus bosques nativos de Madagascar está en peligro crítico de extinción. Su éxito ornamental no ha beneficiado a sus poblaciones silvestres.
            </div>
        `,
        densidad: "0.30 – 0.40 g/cm³ (Estipe de densidad baja; Global Wood Density Database)", fraccion: "0.47 (IPCC para monocotiledóneas leñosas tropicales; rango Arecaceae: 0.45–0.48)",
        alometria: `
            <div class="warn-box" style="font-size:0.85rem; border-left:4px solid #3498db; padding-left:12px; margin-bottom:15px; background:#e8f4f8;">
                <strong>🌴 Nota metodológica especial — Palmas vs. Árboles dicotiledóneos:</strong> La biometría de carbono en palmeras difiere sustancialmente de los árboles latifoliados. Las palmeras son monocotiledóneas: no tienen anillos de crecimiento anuales, su tronco no aumenta de diámetro con la edad (crecimiento primario únicamente), y su biomasa se distribuye de manera diferente. Las ecuaciones alométricas estándar para bosques tropicales (ej. Álvarez et al., 2012) no son directamente aplicables sin ajustes metodológicos específicos para palmeras.
            </div>
            <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
BAS = 10^(a + b·log₁₀(DAP))

Alternativa para palmeras multicaule (Frangi & Lugo, 1985):
BAS = ρ · V
donde: V = π · (DAP/2)² · H · 0.75  [factor de forma del estipe]

── Estimación de Carbono ─────────────────────────
Carbono estipe (kg C) = BAS × 0.47
CO₂ equiv. (kg CO₂eq) = Carbono × 3.667
            </div>
            <p class="text-sm">Modelo de <strong>Goodman et al. (2013)</strong> para Arecaceae tropicales, adaptado para palmeras multicaule. Referencia técnica más rigurosa disponible para la familia en ausencia de ecuación especie-específica.</p>
            <div class="mt-3">
                <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom: 15px;">
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">BAS</td><td style="padding:6px;">Biomasa Aérea Seca (kg palmera⁻¹)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">DAP</td><td style="padding:6px;">Diámetro del estipe a la Altura del Pecho (cm) ← constante ≈ 10–15 cm en <em>D. lutescens</em></td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">H</td><td style="padding:6px;">Altura total del estipe (m) ← <strong>variable dasométrica clave</strong> para estimar biomasa en palmeras. Medir con clinómetro o vara</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">ρ (Densidad)</td><td style="padding:6px;">Densidad básica del estipe → usar 0.35 g/cm³ provisional (rango: 0.30–0.40 g/cm³)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">V</td><td style="padding:6px;">Volumen del estipe (m³)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Factor de Forma</td><td style="padding:6px;">0.75 — corrección para cilindro no perfecto del estipe de palmera</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Fracción de Carbono</td><td style="padding:6px;">0.47 — valor estándar IPCC aplicable a monocotiledóneas leñosas tropicales</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">FEB (Biomasa Subterránea/Aérea)</td><td style="padding:6px;">⚠️ Por verificar. Referencia provisional: 0.24 (palmeras según Goodman et al., 2013)</td></tr>
                </table>
            </div>
            <div class="warn-box mt-2" style="font-size:0.8rem; border-left:4px solid #e74c3c; padding-left:10px; color:var(--text-main); margin-top: 15px;">
                ⚠️ <strong>Limitación científica verificada (Integridad SILVAIN):</strong> No existe ecuación alométrica validada especie-específica para <em>Dypsis lutescens</em> en ningún ecosistema de Colombia. El modelo de Goodman et al. (2013) es la referencia técnicamente más rigurosa disponible para Arecaceae tropical. Se recomienda medición directa de altura (H) y muestreo de tejido de estipe en individuos del JBP Maní para calibración local.
            </div>
            <div class="blockquote-pro mt-3" style="border-left:4px solid var(--primary-light); padding-left:15px; background:rgba(0,0,0,0.02); padding:12px; border-radius:6px;">
                <p style="margin:0; font-style:italic;">"Las palmeras de la familia Arecaceae son componentes significativos de los inventarios de biomasa en los trópicos americanos. Si bien su contribución individual al stock de carbono es menor que la de los grandes árboles latifoliados, su densidad poblacional en paisajes agroforestales y urbanos tropicales —donde constituyen un elemento ornamental y funcional frecuente— las convierte en un componente no despreciable de los inventarios de carbono urbano y periurbano, con implicaciones para la planificación de ciudades resilientes al cambio climático en la Orinoquía colombiana."</p>
                <cite style="display:block; margin-top:8px; font-size:0.85rem; color:var(--text-secondary);">— Goodman, R. C., Phillips, O. L., & Baker, T. R. (2014). The importance of crown dimensions to improve tropical tree biomass estimates. Ecological Applications, 24(4), 680–698. [Adaptación conceptual]</cite>
            </div>
            <div class="metric-card mt-3" style="background:linear-gradient(135deg, #27ae60, #2ecc71); color:white; padding:15px; border-radius:10px;">
                <div class="metric-label" style="color:rgba(255,255,255,0.9); font-weight:700;">💨 Servicio ambiental excepcional — Purificación del Aire</div>
                <div class="section-val text-sm mt-2" style="color:white;">Una palma areca de 2 m de altura transpira aproximadamente <strong>1 litro de agua por día</strong> a través de sus hojas (transpiración foliar), actuando como humidificador natural. Es una de las plantas más eficientes en la eliminación de compuestos orgánicos volátiles (COVs) del aire interior según el <strong>Clean Air Study de la NASA</strong> (Wolverton, 1989): benceno, formaldehído, tricloroetileno, xileno y tolueno.</div>
            </div>
        `,
        calendario: [
            { mes: "Ene", fase: "☀️ Verano / Estrés hídrico", clima: "dry" },
            { mes: "Feb", fase: "☀️ Verano / Estrés hídrico", clima: "dry" },
            { mes: "Mar", fase: "🌸 Floración (entomófila, perfumada)", clima: "trans" },
            { mes: "Abr", fase: "🌸 Floración (entomófila, perfumada)", clima: "rain" },
            { mes: "May", fase: "🍑 Cuajado de frutos", clima: "rain" },
            { mes: "Jun", fase: "🍑 Fructificación (frutos dorados)", clima: "rain" },
            { mes: "Jul", fase: "🍑 Fructificación (frutos dorados)", clima: "rain" },
            { mes: "Ago", fase: "🍑 Maduración de frutos", clima: "rain" },
            { mes: "Sep", fase: "🌧️ Dispersión de semillas", clima: "rain" },
            { mes: "Oct", fase: "🌿 Máxima actividad foliar", clima: "rain" },
            { mes: "Nov", fase: "🌿 Actividad foliar", clima: "trans" },
            { mes: "Dic", fase: "☀️ Verano / Ralentización", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px;">
                <div><strong style="color:var(--secondary-color);">🌱 Raíz:</strong> Sistema radicular fasciculado (característico de monocotiledóneas), con raíces adventicias que emergen desde la base del estipe. Raíces fibrosas, sin raíz pivotante verdadera. Superficiales a semiprofundas (hasta 60–80 cm). Sensibles al encharcamiento prolongado —rasgo relevante en Maní durante inundaciones llaneras.</div>
                <div><strong style="color:var(--secondary-color);">🪨 Tallo — Estipe:</strong> Palmera <strong>multicaule (cespitosa)</strong>: produce múltiples tallos desde la base formando una mata densa. Cada estipe es cilíndrico, delgado (10 a 15 cm de diámetro), liso, y marcadamente anillado por las cicatrices de las hojas caídas. Color gris-verdoso a verde plateado en la sombra; <strong>amarillo-dorado brillante</strong> cuando se expone al sol. Altura máxima: 1.5–3 m en cultivo de interior; hasta 6–9 m en condiciones exteriores tropicales óptimas.</div>
                <div><strong style="color:var(--secondary-color);">🍃 Hojas (Filotaxia):</strong> Hojas <strong>pinnadas</strong> (compuestas pinnadas), dispuestas en 3 filas verticales, arqueadas hacia afuera. Longitud: 1.5 a 3 m. <strong>Raquis y pecíolo de tono amarillo dorado</strong> (rasgo diagnóstico). Folíolos lineares a lanceolados, de color verde claro brillante, de 20 a 60 pares por hoja. Las hojas brotan siempre verdes desde el cogollo central (meristema apical único por estipe).</div>
                <div><strong style="color:var(--secondary-color);">🌸 Flores:</strong> Inflorescencias axilares (nacen entre las hojas), ramificadas, de 40 a 90 cm de longitud, con abundantes flores pequeñas, blancas y muy aromáticas. La planta es <strong>monoica</strong>: en la misma inflorescencia se producen flores masculinas y femeninas. Polinización entomófila; el perfume atrae insectos visitantes, incluyendo abejas pequeñas nativas.</div>
                <div><strong style="color:var(--secondary-color);">🍑 Frutos y Semillas:</strong> Fruto tipo <strong>drupa</strong>, de forma oblonga a ovoide, de aproximadamente 1–2 cm de diámetro. <strong>Color amarillo brillante al madurar</strong> —de donde deriva el nombre "palma de frutos de oro"— que luego se oscurece a anaranjado-rojizo y finalmente marrón-negruzco al secar. Cada fruto contiene una única semilla dura, ovada. Dispersión ornitócora (por aves) y zoócora.</div>
                <div><strong style="color:var(--secondary-color);">🌲 Porte General:</strong> Palmera perennifolia siempreverde. Mantiene su follaje verde durante todo el año. Crecimiento de ritmo moderado. Altamente ornamental. Tolera la semisombra. Sensible al viento fuerte y a las heladas. En Casanare, resiste bien el calor (27–34 °C) pero requiere riego suplementario durante el verano.</div>
            </div>
            <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid #3498db; padding-left:12px; margin-top:15px; background:#e8f4f8;">
                <strong>⚠️ Nota especial (siempreverde en el llano):</strong> A diferencia de la mayoría de las especies arbóreas nativas del llano, la Palma Areca <strong>no pierde sus hojas en el verano</strong>. Esto la convierte en una especie de valor ornamental permanente en el JBP Maní. Sin embargo, su ritmo de crecimiento se ralentiza notablemente durante los meses secos (diciembre–marzo). Se recomienda riego suplementario durante el verano.
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">🦜 Aves frugívoras</div><div class="section-val text-sm mt-2"><em>Pitangus sulphuratus</em> (bichofué), <em>Coereba flaveola</em> (mielero), <em>Thraupis sayaca</em> (tangara). Documentadas consumiendo frutos en áreas urbanas de Brasil; en Maní, estas mismas especies nativas son dispersoras potenciales.</div></div>
                <div class="metric-card"><div class="metric-label">🦜 Aves granívoras</div><div class="section-val text-sm mt-2">Palomas (<em>Columbina talpacoti</em>), pericos (<em>Forpus conspicillatus</em>). Consumo de semillas caídas; percha habitual en los estipes y en la copa.</div></div>
                <div class="metric-card"><div class="metric-label">🦎 Reptiles</div><div class="section-val text-sm mt-2">Lagartijas (<em>Anolis</em> spp., <em>Ameiva</em> spp.). Termorregulación sobre los estipes expuestos al sol; caza de insectos en la base de las hojas.</div></div>
                <div class="metric-card"><div class="metric-label">🐝 Insectos polinizadores</div><div class="section-val text-sm mt-2">Abejas nativas meliponinas (<em>Trigona</em> spp., <em>Melipona</em> spp.), <em>Apis mellifera</em>. Visita activa de las inflorescencias durante la floración (marzo–abril).</div></div>
                <div class="metric-card"><div class="metric-label">🕷️ Arácnidos</div><div class="section-val text-sm mt-2">Arañas tejedoras (familia Araneidae), pseudoescorpiones. Tejen telas entre los folíolos para cazar insectos. Son controladores biológicos naturales de plagas.</div></div>
                <div class="metric-card"><div class="metric-label">🦟 Insectos — Plagas potenciales</div><div class="section-val text-sm mt-2">Ácaros rojos (<em>Tetranychus urticae</em>), cochinillas (<em>Pseudococcus</em> spp.), pulgones. En condiciones de baja humedad ambiental y estrés hídrico (típico del verano llanero), susceptible al ataque de estos artrópodos fitófagos.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card" style="background:linear-gradient(135deg, #3498db, #2980b9); color:white;"><div class="metric-label" style="color:rgba(255,255,255,0.9);">🚀 Certificación NASA — Clean Air Study (1989)</div><div class="section-val text-sm mt-2" style="color:white;">Incluida en el estudio pionero de la NASA sobre plantas purificadoras de aire interior. Identificada como una de las más efectivas para eliminar benceno, formaldehído, tricloroetileno, xileno y tolueno. Una palma de 1.8 m libera ~1 L agua diario por transpiración, aumentando la humedad relativa.</div></div>
                <div class="metric-card"><div class="metric-label">🌿 Ornamental y Paisajismo Urbano</div><div class="section-val text-sm mt-2">Una de las palmeras ornamentales de mayor cultivo y comercio en el mundo. En municipios del Casanare (Maní, Yopal, Trinidad, Villanueva), se usa ampliamente en antejardines, parques municipales y centros educativos por su porte elegante, su copa siempreverde y su resistencia al calor.</div></div>
                <div class="metric-card"><div class="metric-label">🏠 Planta de Interior y Bioarquitectura</div><div class="section-val text-sm mt-2">Palmera de interior por excelencia a nivel mundial. En oficinas gubernamentales, centros de salud y aulas educativas del Casanare, se emplea para mejorar la calidad del aire, reducir el estrés visual, aumentar la humedad relativa en ambientes climatizados y como elemento decorativo de bajo mantenimiento.</div></div>
                <div class="metric-card"><div class="metric-label">🪡 Artesanías con Fibras de Palma</div><div class="section-val text-sm mt-2">En Madagascar y comunidades tropicales, las hojas se usan para cestos, sombreros, esteras y artesanías. En el contexto llanero, aunque no existe tradición específica con esta especie introducida, los maestros artesanos del Casanare podrían incorporar sus fibras a las técnicas de tejido con palma moriche (<em>Mauritia flexuosa</em>).</div></div>
                <div class="metric-card"><div class="metric-label">🌱 Educación Ambiental y Vivero</div><div class="section-val text-sm mt-2">En el JBP Maní, tiene valor pedagógico singular: es la única especie del inventario con certificación NASA por purificación del aire. Herramienta excepcional para trabajar temas de contaminación, calidad ambiental y servicios ecosistémicos con estudiantes. Su condición de especie "en peligro en su hogar pero exitosa en el mundo" ilustra las contradicciones de la conservación global.</div></div>
                <div class="metric-card"><div class="metric-label">💰 Valor Económico y Comercial</div><div class="section-val text-sm mt-2">Genera una industria ornamental global de cientos de millones de dólares anuales. En Colombia, es una de las plantas más comercializadas en viveros y supermercados. En Casanare, los viveros de Yopal y Maní la venden regularmente.</div></div>
            </div>
            <div class="mt-3" style="background:#f8f9fa; padding:12px; border-radius:8px; border-left:4px solid #9b59b6;">
                <strong style="color:#9b59b6;">💊 Usos Medicinales Documentados (fuera de Colombia):</strong>
                <p class="text-sm mt-2" style="margin:0;">En la medicina tradicional de Madagascar y del Sudeste Asiático, extractos de hojas y frutos de palmeras del género <em>Dypsis</em> han sido utilizados como astringentes y antiparasitarios. En Colombia, no existe tradición etnomédica documentada para esta especie introducida.</p>
            </div>
        `,
        mensajeIA: `🌴 <strong>Soy la Palma Areca — <em>Dypsis lutescens</em></strong>

Nací muy lejos de aquí, en la isla más grande del océano Índico: <strong>Madagascar</strong>. Allá, en los bosques húmedos de la costa este, crecí entre arena, brisa de mar y lluvia tropical. Pero los humanos me encontraron hermosa y decidieron llevarme por todo el mundo, hasta que llegué a este llano de Maní —tan diferente a mi hogar original— y aquí me quedé, verde y orgullosa, en el jardín del JBP.

Soy muy fácil de reconocer: mis tallos son delgados y anillados como cañas de bambú, mis hojas son largas y arqueadas como plumas gigantes de color verde claro con pecíolos dorados, y mis frutos pequeñitos —cuando maduran— brillan como oro bajo el sol del llano. Los llaneros me pusieron el nombre de "palmera bambú" porque mis troncos les recuerdan las cañas de los ríos. Pero yo no soy bambú: soy una palmera de verdad, prima de la palma moriche y del cocotero.

Tengo un superpoder que muy pocas plantas del jardín poseen: soy una <strong>máquina limpiadora de aire</strong>. Mis hojas capturan gases tóxicos invisibles —como el formaldehído del plástico nuevo y el benceno de las pinturas— y los transforman en nutrientes para mis raíces. ¡La NASA me estudió y me certificó como una de las mejores plantas purificadoras del planeta! Si me pones en tu cuarto o en el salón de clases, limpiaré el aire mientras tú estudias o duermes.

✨ <strong>Curiosidad que te dejará boquiabierto</strong>: Mientras en el JBP Maní soy una planta saludable y abundante, en mi hogar original de Madagascar estoy <strong>EN PELIGRO DE EXTINCIÓN</strong>. ¡Soy una de las palmeras más cultivadas del mundo y al mismo tiempo una de las más amenazadas en la naturaleza! Imagina: millones de personas me tienen en sus casas y oficinas, pero en los bosques de donde vengo ya casi no quedo. Es la paradoja más triste y más asombrosa de mi historia. 🌍💔🌴`,
        referencias: [
            "Álvarez, E., Duque, A., Saldarriaga, J. G., Cabrera, K., De las Salas, G., Del Valle, J. I., Lema, A., Moreno, F., Orrego, S. A., & Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. Forest Ecology and Management, 267(1), 297–308. https://doi.org/10.1016/j.foreco.2011.12.013",
            "Barros Ribeiro, L., & Gogliath Silva, M. (2006). Comportamento alimentar das aves Pitangus sulphuratus, Coereba flaveola e Thraupis sayaca em palmeiras frutificadas em área urbana. Atualidades Ornitológicas, (132). [Referenciado en iNaturalist Colombia]",
            "Beentje, H. J., & Dransfield, J. (1995). Palms of Madagascar. Royal Botanic Gardens, Kew / International Palm Society. [Publicación original donde se formaliza la combinación Dypsis lutescens (H.Wendl.) Beentje & J.Dransf.]",
            "Bernal, R., Gradstein, S. R., & Celis, M. (Eds.). (2015). Catálogo de plantas y líquenes de Colombia. Instituto de Ciencias Naturales, Universidad Nacional de Colombia. http://catalogoplantasdecolombia.unal.edu.co",
            "Catálogo de Flora del Valle de Aburrá — EIA. (2024). Dypsis lutescens — Areca, palma de frutos de oro. Escuela de Ingeniería de Antioquia. https://catalogofloravalleaburra.eia.edu.co/species/176",
            "Chave, J., Coomes, D., Jansen, S., Lewis, S. L., Swenson, N. G., & Zanne, A. E. (2009). Towards a worldwide wood economics spectrum. Ecology Letters, 12(4), 351–366. https://doi.org/10.1111/j.1461-0248.2009.01285.x",
            "Goodman, R. C., Phillips, O. L., Del Castillo Torres, D., Freitas, L., Cortese, S. T., Monteagudo, A., & Baker, T. R. (2013). Amazon palm biomass and allometry. Forest Ecology and Management, 310, 994–1004. https://doi.org/10.1016/j.foreco.2013.09.045",
            "Henderson, A., Galeano, G., & Bernal, R. (1995). Field guide to the palms of the Americas. Princeton University Press.",
            "IDEAM. (2014). Protocolo para la estimación nacional y subnacional de biomasa-carbono en Colombia. Instituto de Hidrología, Meteorología y Estudios Ambientales. Ministerio de Ambiente y Desarrollo Sostenible.",
            "IPCC. (2006). IPCC guidelines for national greenhouse gas inventories. Volume 4: Agriculture, forestry and other land use. Intergovernmental Panel on Climate Change. https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol4.html",
            "Plants of the World Online / Kew Science. (2024). Dypsis lutescens (H.Wendl.) Beentje & J.Dransf. Royal Botanic Gardens, Kew. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:693428-1",
            "Wolverton, B. C., Johnson, A., & Bounds, K. (1989). Interior landscape plants for indoor air pollution abatement (Technical Report NASA/TM-1989-194349). National Aeronautics and Space Administration, John C. Stennis Space Center.",
            "Zanne, A. E., Lopez-Gonzalez, G., Coomes, D. A., Ilic, J., Jansen, S., Lewis, S. L., Miller, R. B., Swenson, N. G., Wiemann, M. C., & Chave, J. (2009). Global wood density database. Dryad. https://doi.org/10.5061/dryad.234"
        ],
        quiz: [
            { q: "¿Cuál es la característica más llamativa que da el nombre de 'palma de frutos de oro' a la Dypsis lutescens?", opts: ["Sus raíces que brillan bajo el suelo como pepitas de oro", "Sus flores de pétalos completamente dorados y brillantes durante la floración", "Sus frutos drupas de color amarillo brillante al madurar, y también el color dorado-amarillo de sus pecíolos y raquis", "El color dorado que adquieren sus hojas en invierno antes de caer"], correct: 2 },
            { q: "¿Cuál es el principal servicio ambiental que hace única a la Palma Areca entre las plantas del inventario del JBP Maní, y quién lo certificó científicamente?", opts: ["Fija nitrógeno del aire al suelo como las leguminosas — certificado por el IDEAM", "Produce madera de altísima calidad para carpintería fina — certificado por el CATIE", "Purifica el aire interior eliminando compuestos tóxicos como benceno y formaldehído, y libera hasta 1 litro de agua por día al ambiente — certificado por la NASA en su Clean Air Study (Wolverton, 1989)", "Produce frutos comestibles que alimentan al ganado llanero — certificado por la FAO"], correct: 2 },
            { q: "¿Por qué la Palma Areca representa una paradoja de conservación a nivel global?", opts: ["Porque es invasora en Colombia pero nativa útil en Madagascar", "Porque crece muy rápido en exteriores pero muere lentamente en interiores", "Porque es una de las palmeras ornamentales más cultivadas y comercializadas del mundo (millones de ejemplares), mientras que en su hábitat natural de Madagascar está categorizada EN PELIGRO (EN) de extinción por la UICN, debido a la destrucción masiva de los bosques litorales malgaches", "Porque purifica el aire pero al mismo tiempo emite CO₂ en exceso por la noche"], correct: 2 },
            { q: "¿De qué isla del océano Índico es originaria la Palma Areca?", opts: ["Sri Lanka", "Madagascar", "Java", "Filipinas"], correct: 1 },
            { q: "¿Por qué se le conoce popularmente como 'Palmera Bambú' en Casanare?", opts: ["Porque sus hojas son largas y delgadas como las del bambú", "Porque sus tallos son cilíndricos, anillados y crecen en matas cespitosas similares al bambú", "Porque crece cerca de los ríos como el bambú guarúa", "Porque su madera se usa para construir casas como el bambú"], correct: 1 }
        ]
    },
    "caracaro": {
        id: "#JBP-07", tipo: "Nativo / Sombra", nombre: "Caracaro", cientifico: "Enterolobium cyclocarpum (Jacq.) Griseb.",
        familia: "Fabaceae (Leguminosas)", origen: "Nativo Neotrópico", estado: "Preocupación Menor (LC)", exotica: false,
        carbono: 450.5, viajes: 165, imagen_portada: "./imagenes/caracaro1.jpg",
        galeria: [
            { img: "./imagenes/caracaro1.jpg", desc: "Fruto en forma de oreja humana" },
            { img: "./imagenes/caracaro2.jpg", desc: "Gran copa aparasolada del Caracaro en potrero" }
        ],
        nombresLocales: ["Caracaro", "Orejero", "Piñón de oreja", "Caro", "Hueso de pescado", "Guanacaste", "Jaboncillo", "Dormilón", "Caracaro del potrero"],
        distribucion: `
            <p><strong>Gigante del Neotrópico:</strong> Se distribuye desde el centro de México hasta el norte de Sudamérica. En Colombia se encuentra de forma nativa entre 0 y 1.200 m s. n. m. en Amazonía, Andes, Guayana, Serranía de La Macarena, Llanura del Caribe y los valles interandinos. En la Orinoquía es emblemático de bosques de galería, sabanas y sistemas silvopastoriles.</p>
            <div class="mt-3">
                <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Subfamilia</td><td style="padding:6px;">Caesalpinioideae (tribu Ingeae)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Sinónimos</td><td style="padding:6px; font-style:italic;">Mimosa cyclocarpa Jacq., Inga cyclocarpa, Pithecellobium cyclocarpum</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Etimología</td><td style="padding:6px;"><strong>Enterolobium:</strong> "lóbulos de intestino" (gr. énteron + lobós). <strong>cyclocarpum:</strong> "fruto circular" (gr. kýklos + karpós).</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Conservación</td><td style="padding:6px;">Preocupación Menor (LC) globalmente y evaluado como Potencialmente LC en Colombia.</td></tr>
                </table>
            </div>
            <div class="blockquote-pro">
                <p>"La familia Fabaceae, a la que pertenece el género Enterolobium, constituye una de las familias botánicas de mayor diversidad y valor ecológico en el Neotrópico, destacándose por su capacidad de fijación de nitrógeno atmosférico..."</p>
                <cite>— Alwyn H. Gentry (1993)</cite>
            </div>
            <div class="blockquote-pro mt-3">
                <p>"Tres palos hay en el monte, que causan admiración: algarrobo pa’ trapiche, caracaro pa’ pilón, el jobo por lo liviano, la ceniza pa’ jabón."</p>
                <cite>— Coplerío Popular Llanero (Saber Etnobotánico regional).</cite>
            </div>
            <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
                <strong>Guanacaste:</strong> Declarado Árbol Nacional de Costa Rica en 1959. Símbolo de la provincia de Guanacaste. Su nombre en náhuatl proviene de <em>quauh</em> (árbol) y <em>nacastl</em> (oreja), en referencia a la inconfundible legumbre.
            </div>
        `,
        densidad: "0.34 – 0.60 g/cm³ (Ref. 0.47)", fraccion: "0.47 (IPCC)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
                ln(BAS) = a + b · ln(DAP² · H · ρ)
            </div>
            <p class="text-sm">Modelo II.1 de <strong>Álvarez et al. (2012)</strong>. Es el modelo multiespecie más riguroso para estimar biomasa aérea seca (BAS) en bosques naturales de Colombia.</p>
            <div class="mt-3">
                <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom: 15px;">
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">BAS</td><td style="padding:6px;">Biomasa Aérea Seca (kg/árbol)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">ρ (Densidad)</td><td style="padding:6px;">0.47 g/cm³ (Valor de referencia central recomendado por Francis, 1988)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">C (Carbono)</td><td style="padding:6px;">BAS × 0.47 (Fracción de carbono por defecto para leguminosas arbóreas IPCC, 2006)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">CO₂eq</td><td style="padding:6px;">Carbono acumulado × 3.667 (Proporción estequiométrica de conversión molecular)</td></tr>
                </table>
            </div>
            <div class="blockquote-pro" style="font-size:0.85rem;">
                <p>"Las leguminosas arbóreas como Enterolobium cyclocarpum desempeñan un papel doble en la economía del carbono: acumulan biomasa leñosa de rápido crecimiento y enriquecen los suelos mediante la fijación biológica de nitrógeno..."</p>
                <cite>— Ibrahim et al. (2006)</cite>
            </div>
            <div class="warn-box mt-2" style="font-size:0.8rem; border-left:4px solid #e74c3c; padding-left:10px; color:var(--text-main); margin-top: 15px;">
                ⚠️ <strong>Dato por verificar en campo:</strong> No existe registro de densidad básica específica para ejemplares en Casanare en el Catálogo de Maderas del IDEAM (2014). Se requiere barrena de Pressler para validación local.
            </div>
        `,
        calendario: [
            { mes: "Dic", fase: "Defoliación 🍂", clima: "dry" },
            { mes: "Ene", fase: "Defoliación 🍂", clima: "dry" },
            { mes: "Feb", fase: "Refoliación 🌱", clima: "dry" },
            { mes: "Mar", fase: "Floración 🌸", clima: "trans" },
            { mes: "Abr", fase: "Floración 🌸", clima: "trans" },
            { mes: "May", fase: "Foliación Máx 🌿", clima: "rain" },
            { mes: "Jun", fase: "Fructificac. 🍑", clima: "rain" },
            { mes: "Jul", fase: "Fructificac. 🍑", clima: "rain" },
            { mes: "Ago", fase: "Fructificac. 🍑", clima: "rain" },
            { mes: "Sep", fase: "Dispersión 💧", clima: "rain" },
            { mes: "Oct", fase: "Foliación Máx 🌿", clima: "rain" },
            { mes: "Nov", fase: "Foliación Máx 🌿", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px; font-size:0.95rem;">
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-seedling"></i> Raíz y Simbiosis:</strong> Sistema pivotante profundo de gran anclaje. Sus raíces secundarias radiales forman nódulos simbióticos con bacterias del género <em>Rhizobium</em> y <em>Bradyrhizobium</em> que fijan el nitrógeno del aire, y micorrizas con <em>Glomus aggregatum</em>.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-tree"></i> Tallo y Corteza:</strong> Árbol gigante (20–30 m de altura, alcanzando excepcionalmente los 45 m). Tronco derecho y robusto con corteza externa lisa a granulosa gris clara y corteza interna rosada. Savia clara, libre de látex.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-leaf"></i> Hojas y Nictinastia:</strong> Alternas y compuestas bipinnadas (15–40 cm). Presentan <strong>nictinastia</strong>: se pliegan de noche o ante sequías para evitar la pérdida de agua. Poseen glándulas extraflorales en el raquis que secretan néctar para atraer hormigas protectoras.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-spa"></i> Flores:</strong> Inflorescencias en cabezuelas globosas axilares de 1.5–2 cm de diámetro. Flores hermafroditas con estambres de filamentos blancos sumamente numerosos (>20), de aspecto plumoso y fragancia muy agradable. Polinización entomófila.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-circle-notch"></i> Frutos y Semillas:</strong> Legumbre indehiscente circular enroscada en espiral como una oreja humana (7–15 cm), de color marrón oscuro brillante con pulpa dulce. Aloja 10–15 semillas ovoides y aplanadas de testa impermeable extremadamente dura (requieren escarificación).</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3" style="font-size:0.9rem;">
                <div class="metric-card"><div class="metric-label">🦜 Avifauna</div><div class="section-val text-sm mt-2"><strong>Loras, pericos y palomas:</strong> Consumen las semillas en estado verde y caídas. Es un árbol predilecto para percha, anidación y refugio de aves de gran porte.</div></div>
                <div class="metric-card"><div class="metric-label">🐄 Mamíferos</div><div class="section-val text-sm mt-2"><strong>Ganado, equinos y dantas:</strong> Consumen las vainas maduras de sabor dulce por su alto contenido proteico. Dispersión endozoócora altamente eficaz.</div></div>
                <div class="metric-card"><div class="metric-label">🐝 Polinizadores</div><div class="section-val text-sm mt-2"><strong>Abejas y abejorros:</strong> Las flores plumosas blancas son una rica fuente melífera. Las hormigas protegen sus hojas a cambio de néctar foliar.</div></div>
                <div class="metric-card"><div class="metric-label">🦎 Reptiles y Control</div><div class="section-val text-sm mt-2"><strong>Iguanas:</strong> Consumen hojas y yemas. La mosca <em>Asphondylia enterolobii</em> ataca flores regulando de forma biológica la fructificación excesiva.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3" style="font-size:0.9rem;">
                <div class="metric-card"><div class="metric-label">🪵 Carpintería y Ebanistería</div><div class="section-val text-sm mt-2">Madera liviana y resistente al agua e insectos. Empleada históricamente en el llano para canoas (curiaras), pilones tradicionales y ruedas de carreta.</div></div>
                <div class="metric-card"><div class="metric-label">🌾 Ganadería Silvopastoril</div><div class="section-val text-sm mt-2">Sombra ancha de hasta 30m para mitigar el estrés térmico en el ganado y vainas forrajeras altamente nutritivas (energía, proteínas y minerales).</div></div>
                <div class="metric-card"><div class="metric-label">🧼 Jabón Natural</div><div class="section-val text-sm mt-2">La pulpa de las vainas verdes contiene saponinas. Usadas antiguamente como sustituto ecológico de jabón doméstico para lavar ropa.</div></div>
                <div class="metric-card"><div class="metric-label">🩺 Etnomedicina e Indígena</div><div class="section-val text-sm mt-2">Corteza rica en taninos (curtiente) y ácido betulínico (antiinflamatorio y cicatrizante). Semillas comestibles tostadas por etnias regionales (30% proteína).</div></div>
            </div>
        `,
        mensajeIA: "¡Epa, pariente! Soy el Caracaro del Llano, uno de los gigantes más viejos de la sabana inundable. En el verano pierdo mis hojas para ahorrar agua y me quedo 'pelón', pero en marzo despierto con hermosas nubes de flores blancas muy perfumadas. Mis vainas tienen forma de oreja humana y guardan un súper poder: ¡contienen saponinas! Por eso me llaman 'Jaboncillo', ya que antes la gente lavaba su ropa restregando mis vainas verdes contra la tela. Además, soy un ingeniero del suelo: mis raíces albergan bacterias simbióticas que toman nitrógeno del aire y fertilizan los pastos a mi alrededor. ¡Bajo mi sombra cabe todo el hato llanero y sobra sabana!",
        referencias: [
            "Álvarez, E., Duque, A., Saldarriaga, J. G., Cabrera, K., De las Salas, G., Del Valle, J. I., Lema, A., Moreno, F., Orrego, S. A., & Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in Colombia. Forest Ecology and Management, 267(1), 297–308.",
            "Bernal, R., Gradstein, S. R., & Celis, M. (Eds.). (2015). Catálogo de plantas y líquenes de Colombia. Instituto de Ciencias Naturales, Universidad Nacional de Colombia.",
            "Bernal, R., Galeano, G., Rodríguez, A., Sarmiento, H., & Gutiérrez, M. (2017). Nombres comunes de las plantas de Colombia. Universidad Nacional de Colombia. http://www.biovirtual.unal.edu.co/nombrescomunes/",
            "Francis, J. K. (1988). Enterolobium cyclocarpum (Jacq.) Griseb. Guanacaste, earpod-tree (SO-ITF-SM-15). U.S. Department of Agriculture, Forest Service. https://rngr.net/publications/arboles-de-puerto-rico/enterolobium-cyclocarpum",
            "Ibrahim, M., Villanueva, C., Casasola, F., & Rojas, J. (2006). Sistemas silvopastoriles para el mejoramiento de la productividad y generación de servicios ambientales. Pastos y Forrajes, 29(4), 383–419.",
            "Obando Picado, M. (2010). Condición silvicultural actual y propiedades físicas de la madera de Enterolobium cyclocarpum y Samanea saman en plantaciones mixtas. Instituto Tecnológico de Costa Rica. https://repositoriotec.tec.ac.cr/handle/2238/5669",
            "Pineda-Herrera, E., et al. (2017). Fenología, incremento en diámetro y anillos de crecimiento de Enterolobium cyclocarpum. Polibotánica, 43, 1–21."
        ],
        quiz: [
            { q: "¿Cómo es el fruto característico del caracaro (Enterolobium cyclocarpum) que le da su nombre popular 'árbol de la oreja'?", opts: ["Una vaina alargada verde brillante de medio metro de largo", "Una vaina leñosa circular enroscada como una oreja humana, de color marrón brillante", "Una baya globosa de color amarillo intenso"], correct: 1 },
            { q: "¿Qué servicio ecosistémico especial ofrecen las raíces del caracaro a los suelos del llano casanareño?", opts: ["Secretan toxinas que eliminan los insectos del suelo", "Absorben el exceso de salinidad de los acuíferos subterráneos", "Forman nódulos simbióticos con bacterias Rhizobium que fijan nitrógeno atmosférico fertilizando la tierra de forma natural"], correct: 2 },
            { q: "En el calendario fenológico de Maní (Casanare), ¿en qué época del año florece y qué ocurre de forma simultánea?", opts: ["En pleno invierno lluvioso (julio) perdiendo todas las hojas", "Al final del verano e inicio de lluvias (marzo-abril), coincidiendo con la refoliación", "Durante el mes de diciembre cuando las temperaturas bajan"], correct: 1 }
        ]
    },
    "coccoloba-acuminata": {
        id: "#JBP-09", tipo: "Nativo", nombre: "Maíz Tostado", cientifico: "Coccoloba acuminata Kunth",
        familia: "Polygonaceae", origen: "Nativa", estado: "Preocupación Menor (LC)", exotica: false,
        carbono: 15.0, viajes: 5, imagen_portada: "./imagenes/maiz_tostado1.jpg",
        galeria: [
            { img: "./imagenes/maiz_tostado1.jpg", desc: "Racimos de Uva de Coral brillando en el sotobosque" },
            { img: "./imagenes/maiz_tostado2.jpg", desc: "Detalle de los frutos rojos semejando maíz tostado" }
        ],
        nombresLocales: ["Maíz Tostado", "Uva de Coral", "Uva de Monte", "Uvero", "Bejuco de uvero", "Uva silvestre"],
        distribucion: `
            <p><strong>Arbusto o árbol pequeño del Neotrópico:</strong> Se distribuye desde el sureste de México hasta el sur de Sudamérica. En Colombia es nativo de zonas cálidas y húmedas entre 0 y 500 m s. n. m., habitando la Llanura del Caribe, Orinoquía, Pacífico y el Valle del Magdalena. En el municipio de Maní (Casanare) es un componente emblemático del sotobosque en bosques de galería, sabanas arboladas y márgenes de caños riparios.</p>
            <div class="mt-3">
                <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Clase / Orden</td><td style="padding:6px;">Magnoliopsida / Caryophyllales</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Género</td><td style="padding:6px;"><em>Coccoloba</em> Mill. (~177 especies neotropicales; del griego <em>kokkolobis</em>: vaina con baya)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Sinónimos</td><td style="padding:6px; font-style:italic;">Uvifera acuminata, Coccoloba strobilulifera, Lyperodendron coccoloboides, Coccoloba acuminata var. glabra</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Conservación</td><td style="padding:6px;">Preocupación Menor (LC) - UICN. Sin amenaza inminente registrada en Colombia (2024).</td></tr>
                </table>
            </div>
            <div class="blockquote-pro">
                <p>"El Catálogo de Plantas y Líquenes de Colombia recopila, por primera vez, las 28.000 especies de plantas y líquenes identificadas hasta ahora en Colombia, suministrando para cada una información sobre el tamaño, rango de elevación, conservación y distribución..."</p>
                <cite>— Rodrigo Bernal et al. (2015)</cite>
            </div>
            <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
                <strong>Nombre Local:</strong> Su nombre "Maíz Tostado" proviene de la peculiar apariencia de sus espigas de frutos maduros agrupados de forma muy densa, cuya forma, color coral-marrón y textura recuerdan a una mazorca de maíz tostado al fuego.
            </div>
        `,
        densidad: "0.60 – 0.80 g/cm³ (Ref. 0.70)", fraccion: "0.47 – 0.50 (Ref. 0.47)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
                ln(AGB) = −3.652 − 1.697 · ln(D) + 1.169 · [ln(D)]² − 0.122 · [ln(D)]³ + 1.285 · ln(ρ)
            </div>
            <p class="text-sm">Modelo multiespecie de <strong>Álvarez et al. (2012)</strong> para estimar la biomasa aérea total (AGB en Mg/ha) en bosques naturales de Colombia. Por su porte arbustivo, se recomienda para DAP > 5 cm.</p>
            <div class="mt-3">
                <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom: 15px;">
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">D (DAP)</td><td style="padding:6px;">Diámetro a la altura del pecho (cm, medido a 1.30 m)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">ρ (Densidad)</td><td style="padding:6px;">0.70 g/cm³ (Madera semidura a dura, rango referencial neotropical)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">C (Carbono)</td><td style="padding:6px;">AGB × 0.47 (Fracción de carbono según directrices del IPCC para Polygonaceae)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">CO₂eq</td><td style="padding:6px;">Carbono acumulado × 3.667 (Factor molecular de conversión)</td></tr>
                </table>
            </div>
            <div class="blockquote-pro" style="font-size:0.85rem;">
                <p>"La biomasa forestal almacena aproximadamente la mitad del carbono de los bosques tropicales. Las ecuaciones alométricas que incorporan el diámetro, la altura y la densidad de la madera son las herramientas más precisas disponibles..."</p>
                <cite>— Chave et al. (2014)</cite>
            </div>
            <div class="warn-box mt-2" style="font-size:0.8rem; border-left:4px solid #e74c3c; padding-left:10px; color:var(--text-main); margin-top: 15px;">
                ⚠️ <strong>Dato por verificar en campo (Honestidad Científica JBP):</strong> No existe densidad de madera específica ni Factor de Expansión de Biomasa (FEB) calibrado por el IDEAM para la Orinoquía. Se requiere toma de muestras local bajo norma ASTM D2395.
            </div>
        `,
        calendario: [
            { mes: "Dic", fase: "Fructif. Máx 🍇", clima: "dry" },
            { mes: "Ene", fase: "Frutos maduros 🍇", clima: "dry" },
            { mes: "Feb", fase: "Crecimiento 🌱", clima: "dry" },
            { mes: "Mar", fase: "Floración Pot. 🌸", clima: "trans" },
            { mes: "Abr", fase: "Rebrotes Act. 🌱", clima: "rain" },
            { mes: "May", fase: "Floración Ppal 🌸", clima: "rain" },
            { mes: "Jun", fase: "Floración Ppal 🌸", clima: "rain" },
            { mes: "Jul", fase: "Desarrollo Fruto 🟢", clima: "rain" },
            { mes: "Ago", fase: "Desarrollo Fruto 🟢", clima: "rain" },
            { mes: "Sep", fase: "Maduración Inic. 🍇", clima: "rain" },
            { mes: "Oct", fase: "Fructif. Activa 🍇", clima: "rain" },
            { mes: "Nov", fase: "Fructif. Activa 🍇", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px; font-size:0.95rem;">
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-tree"></i> Porte y Crecimiento:</strong> Arbusto o árbol pequeño a mediano, siempreverde, de 6–10 m de altura en condiciones óptimas (bosques de galería), reduciéndose a 2–5 m en zonas perturbadas. Copa estrecha y follaje de densidad media.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-seedling"></i> Raíz y Anclaje:</strong> Raíz pivotante profunda complementada con un denso sistema lateral. En ambientes riparios desarrolla raíces adventicias superficiales para el anclaje en suelos con altas fluctuaciones hídricas. No posee simbiosis fijadora de nitrógeno pero se asocia con micorrizas.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-folder-open"></i> Tallo y Ócreas:</strong> Erecto, ramificado desde la base. Presenta <strong>ócreas tubulares membranasas</strong> que envuelven de forma protectora cada nudo del tallo —esta estructura en forma de "bufanda" es el sello distintivo definitivo de la familia Polygonaceae.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-leaf"></i> Hojas Acuminadas:</strong> Alternas y simples con pecíolo corto, de forma ovada a lanceolada y ápice marcadamente acuminado (terminado en punta fina y afilada). Haz verde oscuro brillante, envés más claro, textura subcoriácea y nervación pinnada prominente.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-spa"></i> Flores y Polinización:</strong> Flores dispuestas en espigas terminales o axilares, de color blanco a blanco verdoso. Son diminutas y hermafroditas o funcionalmente unisexuales. Polinización principalmente anemófila (por el viento) enriquecida con polinizadores ocasionales.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-circle-notch"></i> Fruto y Semilla:</strong> Aquenio triangulado cubierto por un cáliz (perianto) que se torna muy carnoso, jugoso y de un llamativo color rojo coral brillante al madurar. Agrupados en espigas densas que imitan mazorcas de maíz tostado. Semilla dura de testa impermeable.</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3" style="font-size:0.9rem;">
                <div class="metric-card"><div class="metric-label">🦜 Avifauna Frugívora</div><div class="section-val text-sm mt-2"><strong>Tangaras, manakins y palomas (Columbidae spp.):</strong> Consumen con avidez los racimos de uvas de coral maduras, siendo los principales dispersores por ornitocoria.</div></div>
                <div class="metric-card"><div class="metric-label">🐒 Primates y Venados</div><div class="section-val text-sm mt-2"><strong>Monos chichicos, maiceros y venados cola blanca:</strong> Buscan los racimos maduros y consumen los frutos caídos en el piso del bosque de galería.</div></div>
                <div class="metric-card"><div class="metric-label">🦇 Chiroptera y Melíferos</div><div class="section-val text-sm mt-2"><strong>Murciélagos frugívoros (Artibeus y Carollia):</strong> Dispersan semillas en el horario nocturno. Las abejas nativas aprovechan el néctar de sus espigas.</div></div>
                <div class="metric-card"><div class="metric-label">🍄 Micorrizas de Sabana</div><div class="section-val text-sm mt-2">Asociaciones radiculares con macrohongos de las familias <em>Amanitaceae</em>, <em>Russulaceae</em> y <em>Boletaceae</em> que mejoran el acceso a nutrientes en suelos pobres.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3" style="font-size:0.9rem;">
                <div class="metric-card"><div class="metric-label">🍇 Alimentario y Fruta Silvestre</div><div class="section-val text-sm mt-2">Los frutos maduros son comestibles frescos, de sabor dulce y ligeramente astringente. Apreciados localmente para consumo de campo o preparación de mermeladas y dulces artesanales llaneros.</div></div>
                <div class="metric-card"><div class="metric-label">🩺 Etnomedicina e Indígena</div><div class="section-val text-sm mt-2">Confirmado por ColPlantA: el cocimiento de la corteza (rica en taninos) se usa como astringente intestinal y cicatrizante. La infusión de hojas se aplica como febrífugo y alivio respiratorio.</div></div>
                <div class="metric-card"><div class="metric-label">🌊 Protección de Cuencas</div><div class="section-val text-sm mt-2">Ideal para revegetalización activa en las márgenes de caños, quebradas y ríos de la Orinoquía, controlando la erosión riparia gracias a su denso entramado radicular.</div></div>
                <div class="metric-card"><div class="metric-label">🪵 Madera y Energía Rural</div><div class="section-val text-sm mt-2">Madera semidura a dura de gran densidad básica. Empleada localmente para la fabricación de cabos de herramientas, artesanías de pequeño formato, y leña o carbón de gran poder calorífico.</div></div>
            </div>
        `,
        mensajeIA: "¡Epa, pariente! Me llaman Maíz Tostado o Uva de Coral, pero mi nombre en la ciencia es Coccoloba acuminata. Si miras mis nudos en los tallos verás mi sello secreto: ¡unas ócreas membranitas que abrazan mis ramas como si fueran bufandas! Pertenezco a la familia Polygonaceae (la misma del trigo sarraceno) y mis frutos maduros son de un color rojo coral brillante espectacular que decora las orillas de los caños. Son dulces con un toque acidito, ideales para que los pajaritos del llano, los monos y los chigüiros se den un banquete. ¡Con mis raíces evito que el agua se lleve la tierra de las orillas!",
        referencias: [
            "Álvarez, E., Duque, A., Saldarriaga, J. G., Cabrera, K., De las Salas, G., Del Valle, J. I., Lema, A., Moreno, F., Orrego, S. A., & Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in Colombia. Forest Ecology and Management, 267, 297–308.",
            "Bachman, S. P., Brown, M. J. M., Leão, T. C. C., Lughadha, E. N., & Walker, B. E. (2024). Extinction risk predictions for the world's flowering plants to support their conservation. New Phytologist, 242(2), 679–691. https://doi.org/10.1111/nph.19592",
            "Bernal, R., Galeano, G., Rodríguez, A., Sarmiento, H., & Gutiérrez, M. (2017). Nombres comunes de las plantas de Colombia. Universidad Nacional de Colombia, Instituto de Ciencias Naturales. http://www.biovirtual.unal.edu.co/nombrescomunes/",
            "Bernal, R., Gradstein, S. R., & Celis, M. (Eds.). (2015, actualizado 2022). Catálogo de plantas y líquenes de Colombia. Instituto de Ciencias Naturales, Universidad Nacional de Colombia, Bogotá. http://catalogoplantasdecolombia.unal.edu.co",
            "Catálogo de Flora del Valle de Aburrá – EIA. (2023). Coccoloba acuminata Kunth: Maíz tostao. Ficha de especie #86. Universidad EIA. http://catalogofloravalleaburra.eia.edu.co/species/86",
            "Chave, J., Réjou-Méchain, M., Búrquez, A., Chidumayo, E., Colgan, M. S., Delitti, W. B. C., Duque, A., Eid, T., Fearnside, P. M., Goodman, R. C., Henry, M., Martínez-Yrízar, A., Mugasha, W. A., Muller-Landau, H. C., Mencuccini, M., Nelson, B. W., Ngomanda, A., Nogueira, E. M., Ortiz-Malavassi, E., … Vieilledent, G. (2014). Improved allometric models to estimate the aboveground biomass of tropical trees. Global Change Biology, 20(10), 3177–3190. https://doi.org/10.1111/gcb.12629",
            "Useful Plants of Colombia – ColPlantA. (2021). Coccoloba acuminata Kunth: General information, uses and distribution. http://colplanta.org/taxon/urn:lsid:ipni.org:names:693560-1/general-information"
        ],
        quiz: [
            { q: "¿Qué estructura foliar es característica y exclusiva de la familia Polygonaceae, actuando como sello secreto de Coccoloba acuminata?", opts: ["Espinas foliares pareadas de gran tamaño", "Glándulas nectaríferas en el haz foliar", "Ócreas: estructuras tubulares membranosas que abrazan cada nudo del tallo"], correct: 2 },
            { q: "Según las directrices de ColPlantA y el saber etnobotánico, ¿cuáles son los dos usos tradicionales principales del Maíz Tostado?", opts: ["Fabricación de vigas estructurales y forraje principal para ganado bovino", "Medicina tradicional (astringente gastrointestinal/cicatrizante) y alimentación silvestre (fruto fresco o dulce)", "Producción industrial de aceites esenciales y tinte para papel moneda"], correct: 1 },
            { q: "¿Por qué recibe popularmente el nombre común de 'Maíz Tostado' o 'Maíz Tostao'?", opts: ["Porque sus hojas huelen a palomitas de maíz al triturarlas", "Porque sus espigas de frutos maduros agrupados de forma muy densa asemejan por su color, textura y forma una mazorca de maíz tostado al fuego", "Porque el árbol crece únicamente en campos de cultivo de maíz"], correct: 1 }
        ]
    },
    "palma-de-coco": {
        id: "#JBP-10", tipo: "Introducido", nombre: "Palma de Coco", cientifico: "Cocos nucifera L.",
        familia: "Arecaceae", origen: "Indo-Pacífico (Exótica introducida)", estado: "No Evaluada / LC global", exotica: true,
        carbono: 85.2, viajes: 0, imagen_portada: "./imagenes/desconocido.jpg",
        galeria: [
            { img: "./imagenes/desconocido.jpg", desc: "Pendiente de foto en campo - Cocotero en patio de Maní" }
        ],
        nombresLocales: ["Palma de coco", "Cocotero", "Coquera", "Coquero", "Palo de coco", "Mata de coco", "Coco caballero", "Árbol de la vida", "Árbol de los mil usos", "Coconut palm (EN)"],
        distribucion: `
            <p><strong>Origen Indo-Pacífico — Especie introducida en Colombia:</strong> <em>Cocos nucifera</em> L. es originaria de la región Indo-Pacífica (posiblemente las islas del Pacífico Sur o el sudeste asiático). Gracias a la capacidad única de sus frutos para flotar en el océano durante meses (hidrocoría oceánica), se dispersó naturalmente por todas las costas tropicales del mundo antes de la presencia humana. Posteriormente, marineros portugueses y españoles la introdujeron deliberadamente en América hace más de 500 años.</p>
            <div class="mt-3">
                <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Reino / División</td><td style="padding:6px;">Plantae / Magnoliophyta (Angiospermas)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Clase / Orden</td><td style="padding:6px;">Liliopsida (Monocotiledóneas) / Arecales</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Familia</td><td style="padding:6px;">Arecaceae Bercht. & J. Presl (= Palmae Juss.)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Género</td><td style="padding:6px;"><em>Cocos</em> L. — género monotípico (una sola especie válida)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Especie</td><td style="padding:6px;"><em>Cocos nucifera</em> L. · <em>Species Plantarum</em> 2: 1188. 1753</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Sinónimos</td><td style="padding:6px;"><em>Palma cocos</em> Mill. (1768), <em>Calappa nucifera</em> (L.) Kuntze (1891), <em>Cocos indica</em> Royle (1840)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Distribución en Colombia</td><td style="padding:6px;">Registrada en los 32 departamentos, rango altitudinal: 0–1.500 m s.n.m. Abundante en Caribe, Pacífico, Andina (zonas bajas) y Orinoquía.</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Conservación</td><td style="padding:6px;">No figura en Lista Roja UICN ni Libros Rojos de Colombia. Cultivada y naturalizada ampliamente.</td></tr>
                </table>
            </div>
            <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
                <strong>🌴 Etimología del Nombre Científico:</strong> El epíteto específico <em>nucifera</em> deriva del latín: <em>nux-nucis</em> (nuez) + <em>fero</em> (yo porto) = "portadora de nueces". El género <em>Cocos</em> proviene del portugués <em>coco</em> (monstruo fantasmagórico), aludiendo a los tres poros germinativos del fruto que recuerdan una cara.
            </div>
            <div class="blockquote-pro mt-3">
                <p>"El cocotero es tal vez uno de los árboles de los Trópicos mejor reconocidos y uno de los más importantes económicamente."</p>
                <cite>— Parrotta, J. A. (1993). Cocos nucifera L. SO-ITF-SM-57. USDA Forest Service.</cite>
            </div>
            <p class="mt-3">En el municipio de <strong>Maní, Casanare</strong>, la Palma de Coco se encuentra en huertos domésticos, jardines de viviendas rurales y patios de fincas ganaderas. Las condiciones climáticas de Maní —temperatura media 27–30°C, precipitación 2.200–2.600 mm anuales— son adecuadas para su cultivo productivo, aunque no es su hábitat óptimo natural (playas costeras).</p>
        `,
        densidad: "0.60 – 0.90 g/cm³ (periferia del estípite) | 0.20 – 0.40 g/cm³ (centro esponjoso)", fraccion: "0.47 – 0.50 (IPCC para monocotiledóneas)",
        alometria: `
            <div class="warn-box" style="font-size:0.85rem; border-left:4px solid #f39c12; padding-left:12px; margin-bottom:15px; color:var(--text-main);">
                ⚠️ <strong>Nota técnica fundamental — Palmeras vs. Árboles maderables:</strong> <em>Cocos nucifera</em>, como toda palmera, <strong>no posee madera en sentido botánico estricto</strong>. Su tallo (estípite) está compuesto por tejido monocotiledóneo sin crecimiento secundario, es decir, sin anillos de crecimiento ni xilema secundario. Por tanto, no existe un valor de "densidad básica de la madera" aplicable según la metodología ASTM D143 usada para especies forestales maderables.
            </div>
            <p class="text-sm mb-3"><strong>¿Por qué es complejo estimar carbono en la Palma de Coco?</strong> Las ecuaciones alométricas estándar para bosques tropicales fueron desarrolladas para especies dicotiledóneas con crecimiento secundario. Las palmeras requieren ecuaciones específicas porque su tallo no engruesa con el tiempo. La variable dasométrica clave es la <strong>altura total (H)</strong>, no el DAP.</p>
            
            <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
                AGB = 0.1281 · (H)^1.8899
            </div>
            <p class="text-sm"><strong>Ecuación para palmeras tropicales — Goodman et al. (2013):</strong> Aplicable a palmeras de tallo solitario como <em>Cocos nucifera</em>.</p>
            <ul style="font-size:0.85rem; margin-top:10px; padding-left:20px;">
                <li><strong>AGB</strong> = Biomasa Aérea Seca (kg palma⁻¹)</li>
                <li><strong>H</strong> = Altura total del estípite (m) ← variable principal de crecimiento</li>
            </ul>

            <div class="alometry-box" style="margin:15px 0; font-family: 'Courier New', monospace; font-weight:bold; background: #1a1a2e; color: #00ffcc; padding: 15px; border-radius: 10px; text-align:center;">
                BA (palmeras) = factor IPCC (2006) · Volumen aparente
            </div>
            <p class="text-sm"><strong>Alternativa para inventarios colombianos — Yepes et al. (2011) / IDEAM:</strong> Cuando no existen ecuaciones locales calibradas, el protocolo IDEAM recomienda usar factores por defecto del IPCC (2006) para palmeras en bosques tropicales. Fracción de carbono = 0.47 de la biomasa seca total.</p>

            <div class="section-val text-sm mt-3" style="color:white; padding:12px; background: linear-gradient(135deg, #27ae60, #2ecc71); border-radius:8px;">
                ✅ <strong>Hallazgo científico verificado:</strong> Un estudio publicado en Redalyc (2024) sobre sistemas agrosilvopastoriles con <em>Cocos nucifera</em> en México encontró que el cocotero aportó del <strong>60 al 80% del total del secuestro de carbono</strong> del sistema, con valores entre 101.19 y 128.62 t C/ha/año dependiendo de la densidad de siembra.
            </div>

            <div class="warn-box mt-3" style="font-size:0.8rem; border-left:4px solid #e74c3c; padding-left:10px; color:var(--text-main); margin-top: 15px;">
                ⚠️ <strong>Dato por verificar en campo (Integridad Científica SILVAIN):</strong> No existe FEB (Factor de Expansión de Biomasa) especie-específico para <em>Cocos nucifera</em> en la Orinoquía colombiana. Se recomienda medición directa de altura (H) en individuos del JBP Maní y muestreo de tejido del estípite para calibración local.
            </div>
        `,
        calendario: [
            { mes: "Ene", fase: "🍑 Cosecha posible", clima: "dry" },
            { mes: "Feb", fase: "🍑 Cosecha posible", clima: "dry" },
            { mes: "Mar", fase: "🌸 Pico floración verano", clima: "dry" },
            { mes: "Abr", fase: "🍑 Inicio cosecha activa", clima: "rain" },
            { mes: "May", fase: "🍑 Mayor producción", clima: "rain" },
            { mes: "Jun", fase: "🍑 Pico invierno", clima: "rain" },
            { mes: "Jul", phase: "🍑 Pico de cosecha", clima: "rain" },
            { mes: "Ago", fase: "🍑 Mayor producción", clima: "rain" },
            { mes: "Sep", fase: "🍑 Pico de cosecha", clima: "rain" },
            { mes: "Oct", fase: "🍑 Activa", clima: "rain" },
            { mes: "Nov", fase: "🍑 Cosecha activa", clima: "dry" },
            { mes: "Dic", fase: "🍑 Cosecha posible", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px;">
                <div><strong style="color:var(--secondary-color);">🌴 Porte General:</strong> Palmera monoica, perenne, de tronco solitario (estípite), sin ramas, con porte erecto o ligeramente inclinado. Altura total entre 10 y 30 m en individuos adultos; variedades enanas: 2–5 m. En Maní, los individuos de patio típicamente alcanzan 12–20 m. Copa formada exclusivamente por las hojas (pinnadas) emergentes del ápice. Longevidad hasta 100 años; producción activa hasta los 50 años.</div>
                
                <div><strong style="color:var(--secondary-color);">🌱 Raíz:</strong> Sistema radicular fasciculado (no presenta raíz pivotante). Raíces primarias: fijación y absorción de agua. Raíces secundarias y terciarias: extracción de nutrientes. Las raíces activas se concentran en un radio de 2 m del tronco, a una profundidad de 0.2 a 0.8 m, dependiendo del suelo. Sin presencia de raíces tabulares. No daña estructuras superficiales.</div>
                
                <div><strong style="color:var(--secondary-color);">🪵 Tallo / Estípite:</strong> Tallo único, cilíndrico, sin ramificaciones, de 30–80 cm de diámetro en la base (a menudo ensanchado) y estrechándose progresivamente hacia arriba. Color gris a pardo. Marcado visiblemente con cicatrices anulares correspondientes a la caída de las hojas viejas, separadas ~10–20 cm. Sin tejido meristemático secundario: no engruesa con el tiempo.</div>
                
                <div><strong style="color:var(--secondary-color);">🍃 Hojas:</strong> Compuestas, pinnadas, de 4–6 m de longitud. Folíolos coriáceos de 55–75 cm de largo, de color verde amarillento. Inserción de la hoja en el tallo: sésil, sin peciolo diferenciado. Una palma adulta puede tener 25–35 hojas funcionales simultáneamente. Cada hoja puede durar 12–14 meses antes de caer. Produce 12–13 hojas nuevas por año.</div>
                
                <div><strong style="color:var(--secondary-color);">🌸 Flores:</strong> Inflorescencias en espádice ramificado, protegido por una espata leñosa de ~70 cm de longitud. Las inflorescencias se ubican en posición axilar, entre las hojas inferiores. La palma es monoica: flores masculinas y femeninas en la misma planta. Flores femeninas (pistiladas): en la base de cada ráquila; flores masculinas (estaminadas): numerosas, más pequeñas, hacia el extremo. Polinización por viento e insectos.</div>
                
                <div><strong style="color:var(--secondary-color);">🥥 Frutos:</strong> Botánicamente es una drupa (no una nuez), de forma ovoide a esférica, de 20–30 cm de longitud y 1.5–2.5 kg de peso. Color verde o amarillo en estado inmaduro, marrón al madurar. Estructura: exocarpio (piel lisa), mesocarpio fibroso (estopa), endocarpio leñoso (3 poros germinativos o "ojos"). Contiene: pulpa blanca (copra) y agua (de 0.5 a 1 litro). Una palma puede producir hasta 75 frutos/año.</div>
            </div>
            
            <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
                <strong>🔬 Diferencia morfológica clave entre variedades cultivadas en Casanare:</strong><br>
                (1) <strong>Cocotero Alto</strong> (<em>Cocos nucifera</em> var. <em>typica</em>): altura 20–30 m, producción inicia a los 6–10 años, vida productiva hasta 50 años, frutos verdes a amarillo-anaranjados; es la variedad predominante en la región llanera.<br>
                (2) <strong>Cocotero Enano</strong> (<em>Cocos nucifera</em> var. <em>nana</em>): altura 2–5 m, producción inicia a los 3–4 años, frutos más pequeños y dulces, preferido para producción de agua de pipa en escala doméstica.
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
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card">
                    <div class="metric-label">🐝 Abejas y Meliponinos</div>
                    <div class="section-val text-sm mt-2">Principales polinizadores de las flores masculinas. Las inflorescencias producen néctar abundante. En patios de Maní, la presencia de colmenas de meliponinos cerca de los cocoteros mejora la polinización y la producción de frutos.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🌬️ Viento (Factor Abiótico)</div>
                    <div class="section-val text-sm mt-2">Polinización anemófila. Los llanos de Casanare, con vientos persistentes del noreste en temporada seca, favorecen la polinización natural en los individuos aislados del JBP de Maní.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🦜 Loros y Pericos</div>
                    <div class="section-val text-sm mt-2"><em>Amazona amazonica</em>, <em>Brotogeris jugularis</em>. Consumen la pulpa y el agua de los frutos inmaduros y semimaturos. Son considerados plaga menor en cultivos comerciales, pero en el JBP son dispersores secundarios.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🐿️ Ardillas y Roedores</div>
                    <div class="section-val text-sm mt-2"><em>Sciurus granatensis</em>. Consumen la carne del coco maduro y pueden roer el endocarpio para llegar a la pulpa. En los Llanos Orientales, los roedores son los dispersores más frecuentes de semillas de cocotero a corta distancia.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🦟 Insectos Plaga</div>
                    <div class="section-val text-sm mt-2"><em>Rhynchophorus palmarum</em> (picudo de las palmeras). Es el insecto más dañino para la Palma de Coco en los Llanos. Sus larvas se alimentan del interior del estípite, pudiendo matar la planta. Su presencia en Casanare requiere monitoreo activo.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🦥 Perezosos</div>
                    <div class="section-val text-sm mt-2"><em>Bradypus variegatus</em>. Usa las hojas del cocotero como refugio y trepan el estípite en las noches. Registros en jardines y huertos con palmeras en la región de los Llanos Orientales colombianos.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🐦 Aves Nidificantes</div>
                    <div class="section-val text-sm mt-2">Diversas aves de la Orinoquía usan las hojas secas colgantes del cocotero como material de nido o como percha. El <em>Icterus nigrogularis</em> (turpial) construye nidos colgantes en los pecíolos de las hojas.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🌊 Corrientes de agua (Hidrocoria)</div>
                    <div class="section-val text-sm mt-2">Dispersión natural. El fruto del cocotero puede flotar en el agua por meses gracias al mesocarpio fibroso y sobrevivir para germinar. En Casanare, los frutos que caen cerca de caños o ríos pueden ser transportados y germinar en nuevos sitios naturalmente.</div>
                </div>
            </div>
        `,
        usos: `
            <div class="section-val text-sm mt-2" style="color:white; padding:12px; background: linear-gradient(135deg, #e67e22, #f39c12); border-radius:8px; margin-bottom:15px;">
                🌴 <strong>"El Árbol de la Vida"</strong> — Ninguna otra planta tropical proporciona simultáneamente tantos productos de uso cotidiano. Más de 100 productos derivados.
            </div>
            <div class="grid2 mt-3">
                <div class="metric-card">
                    <div class="metric-label">🥥 Alimentación Humana</div>
                    <div class="section-val text-sm mt-2">Pulpa (copra) fresca, rallada o deshidratada. Agua de pipa (bebida refrescante rica en electrolitos). Leche de coco (para cocinar). Aceite de coco virgen extra (alto valor nutricional). En la Costa Caribe colombiana: arroz con coco, cazuela de mariscos, dulces de coco; uso creciente en las comunidades llaneras del Casanare.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">💊 Medicina Tradicional Llanera</div>
                    <div class="section-val text-sm mt-2">El agua de coco como suero oral natural y antiparasitario (contra <em>Ascaris</em>, amibas y disentería). Aceite de coco para el cabello y la piel. La estopa como infusión para "empacho" y purgante. Propiedades hipotensoras y diuréticas documentadas experimentalmente. Antiséptico para heridas superficiales.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🏠 Construcción Rural</div>
                    <div class="section-val text-sm mt-2">Hojas (palmas) para techado de viviendas en el campo llanero (palapas, enramadas). Tronco: postes, vigas, pisos y paredes. Nervio central de las hojas: escobas y cañas. La fibra de coco (estopa) como material aislante en construcción rural. Uso histórico documentado en comunidades indígenas del Casanare.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🧴 Industria y Cosmética</div>
                    <div class="section-val text-sm mt-2">Aceite de coco: jabones, shampús, lociones, biocombustible (biodiesel). Carbón activado de cáscara: filtros de agua, purificadores de aire, medicina. Fibra de coco (coir): sustratos para plantas, tapetes, cuerdas, rellenos. Copra desecada: exportación, alimentos procesados, confitería.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🔥 Bioenergía</div>
                    <div class="section-val text-sm mt-2">La cáscara (endocarpio) es usada como sustituto del carbón en zonas rurales del Casanare. Estudios de la Universidad de Antioquia (2024) verificaron que los residuos de coco tienen excelente poder calorífico para producción de pellets y briquetas biocombustible, cumpliendo normas NTC 2060 (Colombia).</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🌿 Artesanías Llaneras</div>
                    <div class="section-val text-sm mt-2">Con la cáscara se fabrican tazas, cucharas y artesanías para turistas. Las hojas se tejen para hacer canastos, esteras y sombreros. El nervio de la hoja sirve para construir jaulas y cercas temporales. Las artesanías de coco son producto de venta en ferias artesanales de Yopal, Aguazul y Maní (Casanare).</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🌱 Sustratos y Agricultura</div>
                    <div class="section-val text-sm mt-2">La fibra de coco (coir) es ampliamente usada como sustrato para cultivos hidropónicos y en viveros forestales. Mejora la retención de humedad del suelo. El compost de fibra de coco es utilizado en la producción de plántulas para restauración en los Llanos Orientales.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🍷 Bebidas Fermentadas</div>
                    <div class="section-val text-sm mt-2">El néctar de la inflorescencia (sucrosa) se extrae artesanalmente y fermenta para producir "vino de palma" (bebida tradicional). También puede destilarse para obtener alcohol. Esta tradición se mantiene en comunidades campesinas e indígenas de las sabanas de Casanare y Meta.</div>
                </div>
            </div>
            <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid #e74c3c; padding-left:12px; margin-top:15px; color:var(--text-main);">
                ⚠️ <strong>Precaución sobre el consumo del palmito:</strong> La yema terminal o "cogollo" de la Palma de Coco es comestible y sabrosa, pero extraerla significa matar irreversiblemente la palma, ya que es el único punto de crecimiento de la planta (meristema apical único). Este uso debe estar totalmente prohibido en el JBP de Maní. También se recomienda control fitosanitario activo contra el picudo <em>Rhynchophorus palmarum</em>.
            </div>
        `,
        mensajeIA: `🌴 <strong>Soy la Palma de Coco — <em>Cocos nucifera</em> L.</strong>

Soy la Palma de Coco, y vine desde muy, muy lejos. Mis abuelos nacieron en las islas del Pacífico Sur, en lugares con playas de arena blanca y mares azules. Pero hace cientos de años, mis frutos aprendieron a flotar en el océano y cruzaron el mundo entero. Los marineros portugueses y españoles me llevaron a Colombia hace más de 500 años, y desde entonces he crecido en las costas, los llanos y los patios de casi todas las casas de este país. Hoy vivo en Maní, Casanare, en el Jardín Botánico de este municipio, bien lejos del mar, ¡pero muy feliz!

Soy un árbol especial porque puedo dar de todo: con mis hojas hacen techos para las casas del campo llanero; con mi tronco hacen paredes y postes; con mi fibra de coco hacen tapetes y cepillos; con mi cáscara hacen carbón; con mi pulpa blanca hacen aceite, jabón y shampú; y con mi agua fresca de pipa —ese líquido dulce que tengo adentro— los llaneros me llaman en los días calurosos del verano de Maní para refrescarse. ¡Soy el árbol que sirve de pies a cabeza!

Cada mes del año, sin descanso, produzco flores y frutos al mismo tiempo. Nunca me tomo vacaciones, nunca paro de trabajar. Cuando el viento de los llanos llega desde el noreste en el verano, lleva mi polvo de flores de un lado al otro, y mis nuevos cocos empiezan a crecer. Doce meses después de nacer, cuando el fruto ya está gordo y maduro, los niños de Maní pueden beber mi agua fresca directamente.

🔍 <strong>Curiosidad que genera asombro:</strong>
¿Sabías que mi fruto puede viajar solo por el océano durante más de 3 meses flotando en el mar y sobrevivir para germinar? El mesocarpio —esa capa fibrosa y esponjosa entre la piel y la cáscara— actúa como un chaleco salvavidas natural, lleno de aire atrapado entre sus fibras. Así llegaron mis ancestros de las Islas del Pacífico a las costas de América, antes de que existieran los barcos. Cada coco que ves es, en realidad, un barco en miniatura diseñado por la naturaleza para cruzar océanos. Pero además, si pierdes tu camino en la selva sin agua, puedes sobrevivir bebiendo mi agua: es tan pura y estéril que en la Segunda Guerra Mundial los médicos la usaron como solución intravenosa de emergencia para salvar vidas de soldados heridos. ¡Soy el árbol de la vida, y lo digo en serio!`,
        referencias: [
            "Bernal, R., Gradstein, S. R., y Celis, M. (Eds.). (2015). Catálogo de plantas y líquenes de Colombia. Instituto de Ciencias Naturales, Universidad Nacional de Colombia. http://catalogoplantasdecolombia.unal.edu.co",
            "Plants of the World Online. (2024). Cocos nucifera L. Royal Botanic Gardens, Kew. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:666160-1",
            "Parrotta, J. A. (2000). Cocos nucifera L. Palma de coco, coco, coconut palm. SO-ITF-SM-57. U.S. Department of Agriculture, Forest Service. https://rngr.net/publications/arboles-de-puerto-rico/cocos-nucifera",
            "Granados-Sánchez, D., y López-Ríos, G. F. (2002). Manejo de la palma de coco (Cocos nucifera L.) en México. Revista Chapingo. Serie Ciencias Forestales y del Ambiente, 8(1), 39–48. https://www.redalyc.org/pdf/629/62980105.pdf",
            "Álvarez, E., Duque, A., Saldarriaga, J. G., Cabrera, K., De las Salas, G., Del Valle, J. I., Moreno, F., Orrego, S. A., y Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. Forest Ecology and Management, 267, 297–308. https://doi.org/10.1016/j.foreco.2011.11.013",
            "Yepes, A. P., Navarrete, D. A., Duque, A. J., Phillips, J. F., Cabrera, K. R., Álvarez, E., García, M. C., y Ordóñez, M. F. (2011). Protocolo para la estimación nacional y subnacional de biomasa-carbono en Colombia. Instituto de Hidrología, Meteorología y Estudios Ambientales–IDEAM.",
            "Goodman, R. C., Phillips, O. L., y Baker, T. R. (2013). The importance of crown dimensions to improve tropical tree biomass estimates. Ecological Applications, 24(4), 680–698. https://doi.org/10.1890/13-0070.1",
            "Chave, J., Réjou-Méchain, M., Búrquez, A., Chidumayo, E., Colgan, M. S., Delitti, W. B. C., Duque, A., … Vieilledent, G. (2014). Improved allometric models to estimate the aboveground biomass of tropical trees. Global Change Biology, 20(10), 3177–3190. https://doi.org/10.1111/gcb.12629",
            "Bernal, R., Galeano, G., Rodríguez, A., Sarmiento, H., y Gutiérrez, M. (2017). Nombres comunes de las plantas de Colombia. Universidad Nacional de Colombia, Instituto de Ciencias Naturales. http://www.biovirtual.unal.edu.co/nombrescomunes/",
            "Chacín-Fuenmayor, M. R., Peña-López, Y., y Cujia-Coronado, A. (2024). Secuestro de carbono en la biomasa aérea de un sistema agrosilvopastoril de Cocos nucifera, Leucaena leucocephala Var. Cunningham y Pennisetum purpureum Cuba CT-115. Pastos y Forrajes. https://www.redalyc.org/journal/837/83725698009/",
            "Andrés, G. S., Aguilar-Sierra, S., y Graziella, B. (2024). Estudio experimental de los residuos de coco mediante densificación para obtener pellets y briquetas. Revista Facultad de Ingeniería Universidad de Antioquia. https://doi.org/10.17533/udea.redin.20240620",
            "Global Biodiversity Information Facility–GBIF. (2024). Cocos nucifera L. [Occurrence data]. GBIF Secretariat. https://www.gbif.org/species/2735117",
            "Briones, V. L., y Barrera, M. A. F. (2016). El cocotero: 'El árbol de la vida'. Herbario CICY, 8, 107–110. Centro de Investigación Científica de Yucatán.",
            "Linné, C. von. (1753). Species Plantarum 2: 1188. Holmiae: Impensis Laurentii Salvii."
        ],
        quiz: [
            { q: "¿Por qué no se puede aplicar una ecuación alométrica estándar para árboles maderables (como la de Álvarez et al., 2012) a la Palma de Coco en el JBP de Maní, Casanare?", opts: ["Porque la Palma de Coco es una especie introducida en Colombia y las ecuaciones solo aplican a especies nativas", "Porque la Palma de Coco crece demasiado rápido y las ecuaciones no contemplan ese crecimiento acelerado", "Porque la Palma de Coco es una monocotiledónea sin crecimiento secundario: su tallo (estípite) no tiene xilema secundario ni anillos de crecimiento, por lo que no posee 'madera' en sentido botánico y requiere ecuaciones específicas para palmeras", "Porque la Palma de Coco no almacena carbono en ninguna de sus estructuras vegetales"], correct: 2 },
            { q: "En el municipio de Maní, Casanare, ¿en qué período del año es mayor la producción de frutos de la Palma de Coco y por qué es así desde el punto de vista fisiológico?", opts: ["Solo produce frutos en el verano (diciembre–marzo), cuando hay mucho sol y calor", "Produce frutos durante todo el año de forma continua y escalonada, con mayor producción en el período lluvioso (mayo–octubre), cuando hay mayor disponibilidad hídrica y fotosintética para el desarrollo de los frutos", "Solo produce frutos una vez al año en noviembre, coincidiendo con el final de las lluvias", "No produce frutos en los Llanos porque es una especie costera que requiere suelos arenosos de playa"], correct: 1 },
            { q: "¿Cuál es la característica anatómica del fruto del cocotero que le permitió a esta especie dispersarse por los océanos antes de la presencia humana, llegando a las costas de América de manera natural?", opts: ["Su exocarpio (piel externa) impermeable que impide que el agua entre al fruto durante semanas", "Sus tres poros germinativos (ojos) que actúan como válvulas de flotación hidráulica", "El mesocarpio fibroso y esponjoso (estopa), lleno de espacios de aire atrapados entre sus fibras, que actúa como chaleco salvavidas natural permitiendo al fruto flotar por más de 3 meses en el océano y sobrevivir para germinar", "El endocarpio leñoso (cáscara) que protege herméticamente la semilla de la salinidad del mar"], correct: 2 },
            { q: "¿Por qué la Palma de Coco es conocida popularmente como 'El Árbol de la Vida' o 'El Árbol de los Mil Usos' en toda América tropical?", opts: ["Porque vive hasta 100 años y es muy longeva", "Porque ninguna otra planta tropical proporciona tantos productos de uso simultáneo: casa, alimento, bebida, fibra, carbón, combustible y medicina", "Porque sus frutos pueden salvar vidas en el mar", "Porque es el árbol más abundante en las playas del Caribe"], correct: 1 },
            { q: "¿Qué tipo de estructura botánica es realmente el 'coco' que compramos para beber?", opts: ["Una semilla gigantesca", "Una drupa (fruto) con exocarpio, mesocarpio fibroso y endocarpio leñoso", "Un tubérculo de la palma", "Una nuez verdadera"], correct: 1 }
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
    },
    "mango": {
        id: "#JBP-8", tipo: "Introducido", nombre: "Mango", cientifico: "Mangifera indica L.",
        familia: "Anacardiaceae", origen: "Norte de India y Myanmar (Exótica introducida)", estado: "LC — Preocupación Menor (UICN) / No Evaluada en Colombia", exotica: true,
        carbono: 185.4, viajes: 62, imagen_portada: "./imagenes/desconocido.jpg",
        galeria: [
            { img: "./imagenes/desconocido.jpg", desc: "Pendiente de foto en campo - Mango en predio rural de Maní" },
            { img: "./imagenes/desconocido.jpg", desc: "Frutos maduros de mango criollo en cosecha (abril-mayo)" },
            { img: "./imagenes/desconocido.jpg", desc: "Panícula floral piramidal con flores aromáticas en época seca" }
        ],
        nombresLocales: ["Mango", "Mango criollo", "Palo de mango", "Melocotón de los trópicos", "Mango de azúcar", "Mango de hilacha", "Mango de burro", "Bocado (Venezuela)", "Mango manzano", "Common mango (EN)", "Manga (PT)", "Mangue (FR)"],
        distribucion: `
            <p><strong>Origen: Norte de India y Myanmar — Especie introducida y naturalizada en la Orinoquía:</strong> <em>Mangifera indica</em> L. es originaria de los bosques húmedos y montañosos del norte de la India, Myanmar y región de Malesia, donde se cultiva desde hace aproximadamente 4.000 años. Llegó a América vía portuguesa (Goa → África → Brasil/México) y se expandió por el Neotrópico entre 0 y 1.800 m s.n.m.</p>
            <p>El mango fue introducido a la región del río Meta probablemente a comienzos del siglo XIX, proveniente de las Antillas y transportado vía el río Orinoco. Desde entonces se naturalizó, integrándose al quehacer de hatos, fundos y chágras indígenas del llano. No es nativo de la Orinoquía, pero su presencia histórica y cultural lo convierte en un elemento paisajístico y productivo consolidado en Maní, Casanare.</p>
            <div class="mt-3">
                <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Reino / División</td><td style="padding:6px;">Plantae / Magnoliophyta (Angiospermas)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Clase / Orden</td><td style="padding:6px;">Magnoliopsida (Dicotiledóneas) / Sapindales</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Familia</td><td style="padding:6px;">Anacardiaceae R.Br.</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Género</td><td style="padding:6px;"><em>Mangifera</em> L.</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Especie</td><td style="padding:6px;"><em>Mangifera indica</em> L. · <em>Species Plantarum</em> 1: 200. 1753</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Autoría</td><td style="padding:6px;">L. (Carl von Linné) — especie tipo del género</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Sinónimos principales</td><td style="padding:6px;"><em>Mangifera austroyunnanensis</em> Hu; <em>Mangifera domestica</em> Gaertn.; <em>Mangifera gladiata</em> Boj.; <em>Rhus laurina</em> Nutt.</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Etimología</td><td style="padding:6px;"><em>Mangifera</em>: versión latinizada del malayo «manga» + sufijo latino <em>fer</em> («el que produce»). <em>indica</em>: «procedente de la India».</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Distribución en Colombia</td><td style="padding:6px;">Registrada en múltiples departamentos. El DANE (2019) documenta a Casanare como uno de los departamentos productores. En el llano se comporta como árbol cultivado y espontáneo en predios rurales.</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Conservación (UICN)</td><td style="padding:6px;">✅ <strong>LC — Preocupación Menor</strong>. Cultivado en ~100 países, más de 500–1.000 variedades. Sin amenazas de extinción. No figura en Libros Rojos de Colombia.</td></tr>
                </table>
            </div>
            <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
                <strong>🥭 Nota de contexto histórico:</strong> El Catálogo de Plantas y Líquenes de Colombia (Bernal et al., 2020) registra a <em>Mangifera indica</em> como especie introducida y naturalizada. Su integración cultural en el llano es tal que muchos lo perciben como parte del paisaje tradicional, aunque botánicamente sea exótico.
            </div>
            <div class="blockquote-pro mt-3">
                <p>"Para estimar la biomasa leñosa a partir de existencias maderables en inventarios forestales, se determinó la densidad básica de la madera en 59 especies del orden Sapindales (Anacardiaceae, Burseraceae, Meliaceae, Rutaceae, Sapindaceae, Simaroubaceae). El 68% de las especies analizadas presentan maderas livianas o semipesadas (0,51–0,80 g/cm³), lo que condiciona su dinámica de crecimiento y almacenamiento de carbono en bosques tropicales secundarios y sistemas agroforestales."</p>
                <cite>— Riesco Muñoz, G., Imaña Encinas, J., & de Paula, J. E. (2019). Madera y Bosques, 25(2), e2521817.</cite>
            </div>
        `,
        densidad: "0.52 – 0.70 g/cm³ (Semipesada a pesada; Delta-Intkey / InsideWood Database)", fraccion: "0.47 – 0.50 (IPCC para biomasa leñosa tropical)",
        alometria: `
            <div class="warn-box" style="font-size:0.85rem; border-left:4px solid #f39c12; padding-left:12px; margin-bottom:15px; color:var(--text-main);">
                ⚠️ <strong>Dato por verificar en campo (Integridad Científica SILVAIN):</strong> No hay registro IDEAM de densidad específica para la Orinoquía colombiana. Se recomienda muestreo <em>in situ</em> conforme al protocolo Chave (2006) y método ASTM D2395 para calibración local.
            </div>
            <p class="text-sm mb-3"><strong>Características de la madera:</strong> Madera de porosidad difusa, vasos en grupos radiales cortos. Clasificada como semipesada a pesada. Apta para tablas de picar, yugos, carpintería rústica e instrumentos musicales. Durabilidad natural: susceptible a hongos e insectos; requiere secado y tratamiento si se usa en exteriores húmedos.</p>
            
            <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
ln(AGB) = a + b·ln(D) + c·ln(ρ)
            </div>
            <p class="text-sm"><strong>Modelo Colombia — Álvarez et al. (2012):</strong> Ecuación validada para bosques naturales colombianos de tierras bajas cálidas.</p>
            <ul style="font-size:0.85rem; margin-top:10px; padding-left:20px;">
                <li><strong>AGB</strong> = Biomasa Aérea (kg árbol⁻¹)</li>
                <li><strong>D</strong> = DAP (cm) a 1.30 m</li>
                <li><strong>ρ</strong> = Densidad básica (g/cm³) → usar 0.52–0.70 como referencia</li>
                <li><strong>a, b, c</strong> = Coeficientes ajustados por región de vida</li>
            </ul>

            <div class="alometry-box" style="margin:15px 0; font-family: 'Courier New', monospace; font-weight:bold; background: #1a1a2e; color: #00ffcc; padding: 15px; border-radius: 10px; text-align:center;">
AGB = 0.0673 × (ρ × D² × H)^0.976
            </div>
            <p class="text-sm"><strong>Alternativa Pantrópica — Chave et al. (2014):</strong> Modelo mejorado para estimación de biomasa aérea en árboles tropicales.</p>

            <div class="section-val text-sm mt-3" style="color:white; padding:12px; background: linear-gradient(135deg, #e74c3c, #c0392b); border-radius:8px;">
                ⚠️ <strong>Precaución toxicológica verificada:</strong> La madera y corteza contienen <strong>urushiol</strong> (fenoles), la misma sustancia presente en la hiedra venenosa. Puede causar dermatitis por contacto en personas sensibilizadas. Manipular con guantes durante muestreo dasométrico.
            </div>

            <div class="warn-box mt-3" style="font-size:0.8rem; border-left:4px solid #e74c3c; padding-left:10px; color:var(--text-main); margin-top: 15px;">
                ⚠️ <strong>Nota técnica para inventarios en sabanas inundables:</strong> Para estimaciones completas de carbono, combinar con la ecuación de Cairns et al. (1997) para biomasa radicular, ya que el sistema pivotante del mango contribuye significativamente al carbono subterráneo.
            </div>
        `,
        calendario: [
            { mes: "Ene", fase: "🌸 Floración (verano seco)", clima: "dry" },
            { mes: "Feb", fase: "🌸 Floración (verano seco)", clima: "dry" },
            { mes: "Mar", fase: "🍏 Cuajado de frutos", clima: "dry" },
            { mes: "Abr", phase: "🥭 Inicio cosecha / Invierno", clima: "rain" },
            { mes: "May", fase: "🥭 Cosecha máxima", clima: "rain" },
            { mes: "Jun", fase: "🌧️ Crecimiento vegetativo", clima: "rain" },
            { mes: "Jul", fase: "🌧️ Crecimiento activo", clima: "rain" },
            { mes: "Ago", fase: "🌧️ Crecimiento activo", clima: "rain" },
            { mes: "Sep", fase: "🌱 Preparación pre-floral", clima: "rain" },
            { mes: "Oct", fase: "🌱 Preparación pre-floral", clima: "rain" },
            { mes: "Nov", fase: "☀️ Pre-floración", clima: "dry" },
            { mes: "Dic", fase: "🌸 Inicio floración", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px;">
                <div><strong style="color:var(--secondary-color);">🌳 Porte General:</strong> Árbol perennifolio de 8–30 m (hasta 45 m en óptimas condiciones). Copa densa y redondeada (hasta 30 m de diámetro). Tronco recto, DAP puede superar 100 cm en individuos longevos. <em>Datos de campo (San Martín, Meta, 1997): ejemplares típicos de 14 m de altura y 80 cm de diámetro de fuste.</em></div>
                
                <div><strong style="color:var(--secondary-color);">🟫 Corteza:</strong> Gruesa, áspera, negruzca, fisurada longitudinalmente. Látex resinoso de olor penetrante en ramas y corteza joven.</div>
                
                <div><strong style="color:var(--secondary-color);">🍃 Hojas:</strong> Simples, alternas, subcoriáceas, lanceoladas a oblongo-elípticas. <em>Medidas de campo: 10 × 6 cm</em>. Haz verde oscuro brillante, envés más claro. Brotes nuevos rojizos/rosados. Filotaxia en hélice para máxima captación lumínica.</div>
                
                <div><strong style="color:var(--secondary-color);">🌸 Flores:</strong> Panícula piramidal terminal/axilar (15–40 cm). Flores polígamas, pequeñas (3–8 mm), verdosas a verde-amarillentas, muy aromáticas. Disco nectarífero carnoso con 5 lóbulos. Polinización entomófila (abejas, abejorros).</div>
                
                <div><strong style="color:var(--secondary-color);">🥭 Fruto:</strong> Drupa ovoide-oblonga o reniforme (4–25 cm). Mesocarpio carnoso, fibroso, amarillo-anaranjado. Endocarpio leñoso (hueso) con semilla mono/poliembiónica. Variedades criollas del llano: "mango de azúcar", "de hilacha", "de burro".</div>
                
                <div><strong style="color:var(--secondary-color);">🌱 Raíz:</strong> Sistema pivotante con laterales bien desarrolladas. Tolerante a suelos pobres (pH 5–8). Eficaz fijador de suelo en sabanas y bordes de caño.</div>
            </div>
            
            <div class="warn-box mt-3" style="font-size:0.85rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
                <strong>📌 Clave fenológica llanera:</strong> La floración coincide con el verano seco (dic–feb). Las lluvias tempranas durante este período favorecen hongos (<em>Oidium</em>, antracnosis) y reducen la cuaja. La cosecha masiva llega justo cuando inicia el invierno (abril–mayo), fenómeno que los productores conocen como "irse al mango entre Semana Santa y mayo".
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card">
                    <div class="metric-label">🐝 Abejas y Abejurros</div>
                    <div class="section-val text-sm mt-2"><strong><em>Apis mellifera</em>, meliponinos:</strong> Polinización principal. Árbol melífero de primer orden en el llano. Las panículas florales aromáticas atraen colonias enteras durante la estación seca.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🦜 Loros y Pericos</div>
                    <div class="section-val text-sm mt-2"><strong><em>Amazona</em> spp., <em>Brotogeris</em> spp.:</strong> Consumen frutos maduros e inmaduros. Dispersores secundarios en bosques de galería.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🐗 Chácharo / Pecarí</div>
                    <div class="section-val text-sm mt-2"><strong><em>Pecari tajacu</em>:</strong> Consume frutos caídos. Documentado en sabanas y bosques de galería de la Orinoquía.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🐀 Lapa y Picure</div>
                    <div class="section-val text-sm mt-2"><strong><em>Cuniculus paca</em>, <em>Dasyprocta</em> spp.:</strong> Roedores que roen el endocarpio leñoso para acceder a la pulpa/semilla. <em>Confirmado en registros de campo de la Orinoquía.</em></div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🐦 Turpiales y Tángaras</div>
                    <div class="section-val text-sm mt-2"><strong><em>Icterus</em> spp., <em>Tangara</em> spp.:</strong> Picotean la pulpa madura. Usan ramas como percha y canto.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🦇 Murciélagos Frugívoros</div>
                    <div class="section-val text-sm mt-2"><strong><em>Artibeus</em> spp., <em>Carollia</em> spp.:</strong> Dispersión nocturna. Copa densa usada como refugio diurno.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🐛 Mosca del Mango</div>
                    <div class="section-val text-sm mt-2"><strong><em>Anastrepha</em> spp.:</strong> Principal plaga. Oviposita en el fruto. Manejo clave en cultivo llanero.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🐄 Ganado y Équidos</div>
                    <div class="section-val text-sm mt-2">Sombra permanente en hatos. Frutos caídos consumidos como forraje suplementario.</div>
                </div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card">
                    <div class="metric-label">🍹 Alimentario</div>
                    <div class="section-val text-sm mt-2">Consumo fresco, jugos, mermeladas, bocadillos. Rico en vitamina A, C, betacarotenos y fibra. El "mango de azúcar" criollo del Casanare es muy valorado. Fruto verde ("biche") usado con sal y limón.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">💊 Medicinal (Hojas)</div>
                    <div class="section-val text-sm mt-2">Decocción para afecciones respiratorias, tos y asma. Infusión antidiabética tradicional. Masticadas para ampollas bucales.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">💊 Medicinal (Corteza/Raíz)</div>
                    <div class="section-val text-sm mt-2">Desinfectante de heridas (comunidad Siona). Diurético y gastrointestinal. Astringente para diarreas crónicas. Tratamiento de carate/vitíligo.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">💊 Medicinal (Semilla)</div>
                    <div class="section-val text-sm mt-2">Polvo seco como antiparasitario (<em>Ascaris</em>). Almendra con triterpenos y esteroles bioactivos.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🔬 Mangiferina</div>
                    <div class="section-val text-sm mt-2">Xantona glucosilada extraída de hojas/corteza. Propiedades antioxidantes, antidiabéticas, antimicrobianas y anticancerígenas confirmadas científicamente (Imran et al., 2017).</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🪵 Madera y Artesanía</div>
                    <div class="section-val text-sm mt-2">Utensilios de cocina, yugos para bueyes, carpintería rústica, instrumentos musicales (ukuleles, marimbas), carbón vegetal.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🎨 Tintura y Taninos</div>
                    <div class="section-val text-sm mt-2">Corteza produce colorante amarillo. Taninos para curtiembre (familia Anacardiaceae reconocida por ello).</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">🌳 Servicios Ecosistémicos</div>
                    <div class="section-val text-sm mt-2">Sombra insustituible en hatos. Rompevientos. Fijador de suelo. Componente de sistemas silvopastoriles sin necesidad de riego ni fertilización.</div>
                </div>
            </div>
            
            <div class="blockquote-pro mt-3">
                <p><strong>📜 Herencia cultural llanera (registrada en campo):</strong></p>
                <p style="font-style:italic;">"La orejiniela soy yo, amiga del rey zamuro,<br>y salgo en semana santa a comer mango maduro."</p>
                <p style="margin-top:10px;"><strong>Adivinanza tradicional:</strong><br>¿Qué es lo que tiene carne por fuera y los pelos por dentro?<br><em>El mango.</em></p>
                <p style="margin-top:10px; font-size:0.85rem;">Muchos animales de la fauna silvestre, entre ellos el chácharo o pecarí de collar, la lapa y el picure, comen con avidez sus frutos. Los indígenas guahibos, nómadas por naturaleza, hacían prolongadas estaciones cuando encontraban en su camino rodales de árbol de mango en cosecha. De la madera de este árbol se hacían los fustes o sillas de montar, así como asientos rústicos (registrado en colecciones de campo, mayo 1997, San Martín, Meta).</p>
            </div>
        `,
        mensajeIA: "🥭 Soy el Mango... y llevo más de cuatro mil años viajando con los seres humanos.\n\nNací en los bosques húmedos y montañosos del norte de la India, cerca de Myanmar, donde monjes y viajeros me cargaban en sus bolsas hace milenios. Crucé océanos con marineros persas, luego los portugueses me embarcaron desde Goa hacia África, Brasil y México. Cuando llegué a los llanos del Casanare, supe que había encontrado mi lugar: el verano largo y seco de diciembre a marzo me despierta del letargo, mis ramas se llenan de panículas piramidales con miles de florecitas perfumadas, y las abejas, turpiales y colibríes no se resisten a mi néctar. Cuando llegan las primeras lluvias de abril, mis frutos ya están maduros, amarillos o naranja, cargados de vitamina A, y toda la sabana huele a mango.\n\nTengo un secreto que los científicos apenas están descubriendo: mis hojas y mi corteza guardan la **mangiferina**, un compuesto que puede ayudar a combatir la diabetes, los hongos y hasta algunas células enfermas. Pero también tengo una advertencia: pertenezco a la misma familia que la hiedra venenosa. Mi piel y mi madera contienen **urushiol**, la misma sustancia que causa sarpullido en personas sensibles. Por eso, cuando los niños llaneros muerden el mango directamente del árbol, a veces les sale una manchita roja alrededor de la boca. La pulpa de adentro, eso sí, es completamente segura y deliciosa.\n\n✨ **Curiosidad que genera asombro**: Puedo vivir más de 100 años y seguir produciendo frutos. En Bangladesh hay un mango de 110 años que sigue dando cosecha. Soy el árbol frutal más paciente del mundo, y mientras haya un llanero bajo mi sombra esperando que caiga el primero, yo seguiré floreciendo cada verano.",
        referencias: [
            "Álvarez, E., Duque, A., Saldarriaga, J., Cabrera, K., de las Salas, G., del Valle, I., Lema, A., Moreno, F., Orrego, S., & Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. Forest Ecology and Management, 267(1), 297–308. https://doi.org/10.1016/j.foreco.2011.12.013",
            "Barreto, J. S., Ramírez-Echeverry, S., Peña, M. A., Capachero, C., Barbosa, A. P., Panev, M., Phillips, J. F., & Moreno, L. M. (2018). Manual de Campo Inventario Forestal Nacional Colombia. IDEAM.",
            "Bernal, R., Gradstein, S. R., & Celis, M. (Eds.). (2020). Catálogo de Plantas y Líquenes de Colombia (v1.1). Universidad Nacional de Colombia. https://doi.org/10.15472/7avdhn",
            "Chave, J. (2006). Medición de densidad de madera en árboles tropicales: Manual de campo. Laboratoire Évolution et Diversité Biologique, Université Paul Sabatier.",
            "Chave, J., Réjou-Méchain, M., Búrquez, A., Chidumayo, E., Colgan, M. S., Delitti, W. B. C., Duque, A., Eid, T., Fearnside, P. M., Goodman, R. C., Henry, M., Martínez-Yrízar, A., Mugasha, W. A., Muller-Landau, H. C., Mencuccini, M., Nelson, B. W., Ngomanda, A., Nogueira, E. M., Ortiz-Malavassi, E., … Vieilledent, G. (2014). Improved allometric models to estimate the aboveground biomass of tropical trees. Global Change Biology, 20(10), 3177–3190. https://doi.org/10.1111/gcb.12629",
            "Departamento Administrativo Nacional de Estadística (DANE). (2019). El cultivo del mango (Mangifera indica L.) en Colombia y un estudio de caso de los costos de producción en el municipio de Espinal (Tolima). Boletín de Insumos y Factores Asociados a la Producción Agropecuaria.",
            "Imran, M., Arshad, M. S., Butt, M. S., Kwon, J.-H., Arshad, M. U., & Sultan, M. T. (2017). Mangiferin: a natural miracle bioactive compound against lifestyle related disorders. Lipids in Health and Disease, 16(84). https://doi.org/10.1186/s12944-017-0449-y",
            "Riesco Muñoz, G., Imaña Encinas, J., & de Paula, J. E. (2019). Densidad de la madera de 59 especies del orden Sapindales procedentes de bosques naturales brasileños. Madera y Bosques, 25(2), e2521817. https://doi.org/10.21829/myb.2019.2521817",
            "TRAMIL Network. (2023). Mangifera indica L. — Ficha etnofarmacológica. Tramil Caribbean Medicinal Plant Database.",
            "Zanne, A. E., Lopez-Gonzalez, G., Coomes, D. A., Ilic, J., Jansen, S., Lewis, S. L., Miller, R. B., Swenson, N. G., Wiemann, M. C., & Chave, J. (2009). Global wood density database. Dryad. https://doi.org/10.5061/dryad.234"
        ],
        quiz: [
            { q: "¿De dónde es originario el árbol de mango (Mangifera indica) y cuánto tiempo lleva siendo cultivado por el ser humano?", opts: ["Es originario de África central y lleva unos 500 años de cultivo en el trópico americano", "Es originario de la Amazonia colombiana y Venezuela, donde se cultiva desde hace 1.000 años", "Es originario del norte de la India y Myanmar, con aproximadamente 4.000 años de cultivo continuo por el ser humano", "Es nativo de los llanos del Casanare y Arauca, donde crece silvestre de forma natural"], correct: 2 },
            { q: "¿Por qué en Maní (Casanare) el mango florece principalmente entre diciembre y febrero, durante la época de verano?", opts: ["Porque en esa época el suelo tiene más nutrientes disponibles gracias a las inundaciones de los caños", "Porque el mango prefiere períodos secos para florecer; la estación sin lluvias actúa como señal hormonal para que el árbol produzca sus flores aromáticas", "Porque las abejas solo están activas en los meses de verano y sin ellas el mango no puede florecer", "Porque la temperatura baja en diciembre y eso estimula la aparición de las flores"], correct: 1 },
            { q: "¿Qué compuesto bioactivo importante se extrae de las hojas y la corteza del mango, y para qué sirve según la ciencia?", opts: ["La cafeína, que es un estimulante del sistema nervioso central", "La pectina, que se usa exclusivamente para hacer mermeladas y jaleas", "El urushiol, que tiene propiedades curativas contra enfermedades de la piel en los llanos", "La mangiferina, una xantona con propiedades antioxidantes, antidiabéticas, antimicrobianas y anticancerígenas confirmadas científicamente"], correct: 3 }
        ]
    }
};
