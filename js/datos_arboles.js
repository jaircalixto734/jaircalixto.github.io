const baseDatosArboles = {
    "merecure": {
        id: "#JBP-01", tipo: "Nativo", nombre: "Merecure", cientifico: "Moquilea pyrifolia (Griseb.) R.O.Williams",
        familia: "Chrysobalanaceae", origen: "Nativo Orinoquía", estado: "Preocupación Menor", exotica: false,
        carbono: 215.4, viajes: 78, imagen_portada: "./imagenes/colegio1.jpeg",
        galeria: [
            { img: "./imagenes/colegio1.jpeg", desc: "Árbol Completo" },
            { img: "./imagenes/foto2.jpeg", desc: "Hojas" }
        ],
        nombresLocales: ["Merecure", "Querebere", "Merecurito (juveniles)", "Árbol de los llanos"],
        distribucion: `
            <p>El merecure se distribuye desde las Antillas Menores (Martinica, Trinidad) hasta las llanuras de Venezuela y Colombia, con registros herborizados en Arauca (río Cravo Norte) y Casanare (Orocué, río Meta). Es una especie diagnóstica de los bosques de galería y mata de monte de la cuenca del Orinoco, donde estructura el dosel bajo y provee recursos críticos para la fauna local.</p>
            <div class="blockquote-pro mt-3">
                <p>"La Flora de Colombia documenta para Licania pyrifolia su presencia en bosques de tierras bajas y ribereños en lugares abiertos, desde Martinica hasta Trinidad, en regiones aledañas de Venezuela, y en Colombia."</p>
                <cite>— Universidad Nacional de Colombia, Flora Virtual de Colombia.</cite>
            </div>
        `,
        densidad: "0.68 – 0.82 g/cm³", fraccion: "0.49 (Phillips et al.)",
        alometria: `
            <div class="alometry-box">AGB = 0.0509 × (ρ × DAP² × H)⁰·⁹⁹⁶</div>
            <p class="mt-2 text-sm">Donde: <strong>AGB</strong> = biomasa aérea (kg), <strong>ρ</strong> = densidad de madera (g/cm³), <strong>DAP</strong> = diámetro a la altura del pecho (cm), <strong>H</strong> = altura total (m). Fuente: Chave et al. (2005) — modelo húmedo-seco aplicable a latifoliadas de tierras bajas tropicales colombianas.</p>
            <div class="alometry-box" style="border-left-color:#BA7517; margin-top: 10px;">Carbono (kgC) = AGB × 0.49</div>
            <div class="blockquote-pro mt-3">
                <p>"Los modelos que integran densidad de madera, diámetro y altura reducen el error de estimación en más de un 30% frente a los modelos que sólo usan el DAP, siendo su aplicación prioritaria en ecosistemas de galería de la Orinoquía."</p>
                <cite>— Álvarez et al. (2012). Forest Ecology and Management.</cite>
            </div>
        `,
        calendario: [
            { mes: "Dic", fase: "Floración", clima: "dry" }, { mes: "Ene", fase: "Floración", clima: "dry" },
            { mes: "Feb", fase: "Cuajado", clima: "dry" }, { mes: "Mar", fase: "Fructif.", clima: "dry" },
            { mes: "Abr", fase: "Madurac.", clima: "rain" }, { mes: "May", fase: "Madurac.", clima: "rain" },
            { mes: "Jun", fase: "Dispers.", clima: "rain" }, { mes: "Jul", fase: "Dispers.", clima: "rain" },
            { mes: "Ago", fase: "Rebrote", clima: "rain" }, { mes: "Sep", fase: "Crecim.", clima: "rain" },
            { mes: "Oct", fase: "Crecim.", clima: "rain" }, { mes: "Nov", fase: "Pre-flor.", clima: "dry" }
        ],
        morfologia: `
            <p><strong>Porte:</strong> Árbol pequeño a mediano, de 10 a 15 m de altura (excepcionalmente hasta 20 m). Copa globosa, muy densa y frondosa, perennifolia.</p>
            <p class="mt-2"><strong>Tallo y corteza:</strong> Tronco corto, fuste a veces irregular; ramas expandidas. Corteza pardo-grisácea, algo rugosa.</p>
            <p class="mt-2"><strong>Sistema radicular:</strong> Pivotante y profundo, con raíces laterales extensas que le confieren resistencia a inundaciones estacionales prolongadas.</p>
            <p class="mt-2"><strong>Hojas:</strong> Simples, alternas (filotaxia espiralada), elípticas a oblongas. Haz lustrosa; envés con vena media plana y lanosa.</p>
            <p class="mt-2"><strong>Flores:</strong> Hermafroditas, pequeñas (4–4.5 mm), blancas y fragantes. Dispuestas en panículas axilares.</p>
            <p class="mt-2"><strong>Frutos:</strong> Drupa oblonga, hasta 11 cm de largo. Epicarpo densamente verrugoso, de color marrón grisáceo. Pulpa amarilla, cremosa, de sabor harinoso-dulce. Semilla única.</p>
            <div class="warn-box mt-3">La floración se desencadena al inicio de la temporada seca (noviembre–enero), cuando el estrés hídrico moderado actúa como señal reproductiva. La maduración coincide con el inicio de lluvias, favoreciendo la dispersión en sabanas inundables.</div>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Aves frugívoras</div><div class="section-val text-sm mt-2">Moriche (Icterus icterus), Loros (Amazona spp.), Palomas y Tucanes. Se alimentan de la pulpa y dispersan semillas.</div></div>
                <div class="metric-card"><div class="metric-label">Insectos polinizadores</div><div class="section-val text-sm mt-2">Abejas nativas (Meliponini), abejorros y dípteros atraídos por el aroma de las flores durante el verano llanero.</div></div>
                <div class="metric-card"><div class="metric-label">Mamíferos</div><div class="section-val text-sm mt-2">Chigüiro, venado llanero y primates consumen los frutos caídos. Lapas contribuyen a la dispersión secundaria.</div></div>
                <div class="metric-card"><div class="metric-label">Ganado (Etnobotánica)</div><div class="section-val text-sm mt-2">Los frutos caídos son aprovechados por el ganado bovino en potreros, lo que ha favorecido su permanencia en fincas.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Carpintería rural</div><div class="section-val text-sm mt-2">Fabricación de estantes, horcones y postes. Madera densa, durable y resistente a la humedad de las sabanas inundables.</div></div>
                <div class="metric-card"><div class="metric-label">Alimentación</div><div class="section-val text-sm mt-2">Pulpa dulce y harinosa. Históricamente, las comunidades Pumé y Sikuani procesaban una harina para elaborar bebidas (chicha).</div></div>
                <div class="metric-card"><div class="metric-label">Medicina popular</div><div class="section-val text-sm mt-2">Corteza usada como astringente. Compuestos del género Licania presentan actividad útil para control de caracoles plaga.</div></div>
                <div class="metric-card"><div class="metric-label">Sombra silvopastoril</div><div class="section-val text-sm mt-2">Copa perennifolia ideal para viviendas y corrales. Referente paisajístico de los fundos llaneros.</div></div>
            </div>
        `,
        mensajeIA: "Soy un viejo sabio del llano. Me llaman Merecure, aunque mis amigos más íntimos —los Pumé y los Sikuani— me conocen también como Querebere. Aquí, en estas sabanas que se llenan de agua cada año como un mar de hierba, yo soy de los pocos que no huyo: mis raíces se hunden tan profundo en la tierra roja que ni el aguacero de cinco meses me hace temblar. ¡Y mis frutos llevan dentro una pulpa dulce con la que los indígenas hacían chicha hace cientos de años!",
        referencias: [
            "Álvarez, E., et al. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. Forest Ecology and Management, 267, 297–308.",
            "Chave, J., et al. (2005). Tree allometry and improved estimation of carbon stocks and balance in tropical forests. Oecologia, 145(1), 87–99.",
            "Universidad Nacional de Colombia. (s.f.). Licania pyrifolia Griseb. En Flora Virtual de Colombia — BioVirtual.",
            "Braca, A., et al. (2003). Chemical and biological studies on Licania genus. En Studies in Natural Products Chemistry (Vol. 28, pp. 35–67)."
        ],
        quiz: [
            { q: "¿A qué familia botánica pertenece el merecure (Moquilea pyrifolia)?", opts: ["Fabaceae", "Myrtaceae", "Chrysobalanaceae"], correct: 2 },
            { q: "¿En qué temporada del año florece el merecure en Maní, Casanare?", opts: ["Al inicio de la temporada seca", "En temporada de lluvias", "No tiene estacionalidad"], correct: 0 },
            { q: "¿Para qué usaban los pueblos Pumé y Sikuani la pulpa del fruto?", opts: ["Para tratar fiebres", "Para elaborar harina y chicha", "Como repelente de insectos"], correct: 1 }
        ]
    },
    "jambolan": {
        id: "#JBP-02", tipo: "Frutal", nombre: "Jambolán", cientifico: "Syzygium cumini (L.) Skeels",
        familia: "Myrtaceae", origen: "Exótico (India)", estado: "Cultivada", exotica: true,
        carbono: 150.8, viajes: 55, imagen_portada: "./imagenes/foto2.jpeg",
        galeria: [
            { img: "./imagenes/foto2.jpeg", desc: "Frutos maduros" },
            { img: "./imagenes/colegio2.jpeg", desc: "Hojas y ramas" }
        ],
        nombresLocales: ["Ciruela de Java", "Pésjua extranjera", "Guayabo pésjua", "Ciruela negra"],
        distribucion: `
            <p>Originaria de la India, Sri Lanka, Birmania y el Sudeste Asiático. Introducida en las Américas en la época colonial. En la Orinoquía colombiana y venezolana su presencia es estrictamente antrópica: se planta en patios, fundos y bordes de carreteras por su fruta y sombra. No hace parte de la vegetación nativa del llano.</p>
            <div class="blockquote-pro mt-3">
                <p>"Se encuentra cultivada en Colombia; Alt. 150–2430 m.; Andes, Llanura del Caribe, Valle del Cauca, sin registros de poblaciones silvestres establecidas en la Orinoquía."</p>
                <cite>— Catálogo de Plantas y Líquenes de Colombia (UNAL, 2015).</cite>
            </div>
        `,
        densidad: "0.69 g/cm³ (Proxy Género)", fraccion: "0.47 (IPCC 2006)",
        alometria: `
            <div class="alometry-box">AGB = 0.0509 × (ρ × DAP² × H)⁰·⁹⁹⁶</div>
            <p class="mt-2 text-sm">Al tratarse de una especie exótica cultivada, los individuos del JBP probablemente se encuentran a pleno sol con manejo antrópico, lo que puede alterar la tasa de crecimiento y densidad respecto a valores asiáticos.</p>
            <div class="alometry-box" style="border-left-color:#BA7517; margin-top: 10px;">Carbono (kgC) = AGB × 0.47</div>
            <div class="blockquote-pro mt-3">
                <p>"Estudios con Syzygium cumini bajo CO₂ elevado demostraron incrementos significativos en biomasa aérea, evidenciando su plasticidad fenotípica frente al cambio climático."</p>
                <cite>— Pandey & Bajpai (2021). Environmental and Sustainability Indicators.</cite>
            </div>
        `,
        calendario: [
            { mes: "Dic", fase: "Reposo", clima: "dry" }, { mes: "Ene", fase: "Reposo", clima: "dry" },
            { mes: "Feb", fase: "Pre-flor.", clima: "dry" }, { mes: "Mar", fase: "Floración", clima: "trans" },
            { mes: "Abr", fase: "Floración", clima: "rain" }, { mes: "May", fase: "Cuajado", clima: "rain" },
            { mes: "Jun", fase: "Fructif.", clima: "rain" }, { mes: "Jul", fase: "Madurac.", clima: "rain" },
            { mes: "Ago", fase: "Dispers.", clima: "rain" }, { mes: "Sep", fase: "Dispers.", clima: "rain" },
            { mes: "Oct", fase: "Rebrote", clima: "rain" }, { mes: "Nov", fase: "Reposo", clima: "dry" }
        ],
        morfologia: `
            <p><strong>Porte:</strong> Árbol siempreverde, de crecimiento rápido (6–20 m). Puede vivir más de 100 años. Copa globosa, muy ramosa y densa.</p>
            <p class="mt-2"><strong>Tallo y corteza:</strong> Tronco robusto, recto o retorcido. Corteza gruesa, castaño o gris oscuro, lisa a escamosa.</p>
            <p class="mt-2"><strong>Hojas:</strong> Simples, opuestas, elípticas. Textura coriácea, glabras, con glándulas aromáticas. Hojas jóvenes rojizo-cobrizas.</p>
            <p class="mt-2"><strong>Flores:</strong> Pequeñas (5–8 mm), blancas a rosadas, melíferas. Numerosos estambres prominentes (aspecto de borla).</p>
            <p class="mt-2"><strong>Frutos:</strong> Bayas ovoides. Coloración progresiva: verde → rosado → rojo-vino → negro-púrpura al madurar. Pulpa dulce-ácido-astringente con antocianinas que tiñen la boca de malva.</p>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Aves frugívoras</div><div class="section-val text-sm mt-2">Loros, pericos, tordos y tucanes consumen activamente los frutos maduros y dispersan las semillas.</div></div>
                <div class="metric-card"><div class="metric-label">Insectos polinizadores</div><div class="section-val text-sm mt-2">Flores melíferas que atraen intensamente a abejas nativas, abejorros y mariposas. Árbol apícola.</div></div>
                <div class="metric-card"><div class="metric-label">Mamíferos</div><div class="section-val text-sm mt-2">Chigüiros, zorros cangrejeros y murciélagos frugívoros aprovechan los frutos caídos.</div></div>
                <div class="metric-card"><div class="metric-label">Nota Ecológica</div><div class="section-val text-sm mt-2">Por ser exótica, puede competir con flora nativa si escapa al cultivo. Reportada como invasora en Brasil y Florida.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Medicina Popular</div><div class="section-val text-sm mt-2">Semillas consideradas hipoglucemiantes y antidiabéticas. Extractos usados para trastornos digestivos y asma.</div></div>
                <div class="metric-card"><div class="metric-label">Alimentación</div><div class="section-val text-sm mt-2">Fruto consumido fresco, en jugos, jaleas y licores. Rico en vitaminas A, C y hierro.</div></div>
                <div class="metric-card"><div class="metric-label">Madera y Carpintería</div><div class="section-val text-sm mt-2">Madera resistente y densa. Históricamente empleada en traviesas de ferrocarril. En Casanare se usa en cercas.</div></div>
                <div class="metric-card"><div class="metric-label">Apicultura y Curtiembre</div><div class="section-val text-sm mt-2">Árbol apícola de primera categoría. La corteza provee taninos usados en curtiembre artesanal.</div></div>
            </div>
        `,
        mensajeIA: "Soy un viajero que llegó muy lejos de casa. Vengo de la India, donde los monsones me hacen crecer junto al río Ganges. Alguien me trajo en un barco hace cientos de años y me quedé en el llano. Cuando mis frutos maduran, tiñen la lengua de lila porque tengo antocianinas, los mismos pigmentos de las moras. Además, mis semillas son medicina: los abuelos de la India las usan para controlar el azúcar en la sangre, ¡y la ciencia lo ha comprobado!",
        referencias: [
            "Bernal, R., et al. (Eds.). (2015). Catálogo de plantas y líquenes de Colombia.",
            "Pandey, R., y Bajpai, O. (2021). Impact of nitrogen addition on growth and carbon sequestration potential of Syzygium cumini.",
            "Royal Botanic Gardens Kew. (2021). Plants of the World Online — Syzygium cumini."
        ],
        quiz: [
            { q: "¿De dónde es originario el jambolán y cómo llegó a la Orinoquía?", opts: ["Nativo de Brasil", "De India (Introducción humana)", "Nativo del llano"], correct: 1 },
            { q: "¿Qué parte del jambolán es especialmente valorada para tratar la diabetes?", opts: ["Raíces", "Flores", "Semillas"], correct: 2 },
            { q: "¿Qué hace que los frutos tiñen la lengua de lila?", opts: ["Clorofila", "Un ácido tánico", "Antocianinas"], correct: 2 }
        ]
    },
    "palo-cruz": {
        id: "#JBP-03", tipo: "Nativo", nombre: "Palo Cruz", cientifico: "Brownea ariza Benth.",
        familia: "Fabaceae", origen: "Nativo Colombia", estado: "Preocupación Menor", exotica: false,
        carbono: 185.0, viajes: 65, imagen_portada: "./imagenes/colegio2.jpeg",
        galeria: [
            { img: "./imagenes/colegio2.jpeg", desc: "Flores en el tronco" },
            { img: "./imagenes/colegio1.jpeg", desc: "Hojas jóvenes" }
        ],
        nombresLocales: ["Palo Cruz", "Arizá", "Rosa de Monte", "Florisanto"],
        distribucion: `
            <p>Especie nativa de Colombia, Ecuador, Perú y Venezuela. En Colombia se encuentra en los Llanos Orientales y el valle del Magdalena. Presenta el fenómeno de <strong>caulifloria</strong>, donde las flores nacen directamente del tronco.</p>
            <div class="blockquote-pro mt-3">
                <p>"Árbol pequeño a mediano, puede superar los 10 m de altura. Hojas compuestas, alternas y paripinnadas, cuando jóvenes forman racimos péndulos con cambio gradual de color."</p>
                <cite>— Universidad de Antioquia, Arizá (Brownea ariza).</cite>
            </div>
        `,
        densidad: "Dato por verificar", fraccion: "0.50 (Yepes et al.)",
        alometria: `
            <div class="alometry-box">BA = a × ρ × DAP<sup>b</sup> × H<sup>c</sup></div>
            <p class="mt-2 text-sm">Se utiliza la ecuación de Álvarez et al. (2012) para bosques naturales de Colombia. BA = Biomasa aérea (kg). ρ = Densidad de madera.</p>
            <div class="alometry-box" style="border-left-color:#BA7517; margin-top: 10px;">Carbono (kgC) = BA × 0.50</div>
            <div class="blockquote-pro mt-3">
                <p>"La familia Fabaceae es fundamental en la dinámica del carbono por su abundancia y capacidad de fijar nitrógeno en suelos tropicales."</p>
                <cite>— Yepes et al. (2011). Protocolo de biomasa-carbono.</cite>
            </div>
        `,
        calendario: [
            { mes: "Dic", fase: "Brotación", clima: "dry" }, { mes: "Ene", fase: "Brotación", clima: "dry" },
            { mes: "Feb", fase: "Reposo", clima: "dry" }, { mes: "Mar", fase: "Floración", clima: "trans" },
            { mes: "Abr", fase: "Floración", clima: "trans" }, { mes: "May", fase: "Fructif.", clima: "rain" },
            { mes: "Jun", fase: "Fructif.", clima: "rain" }, { mes: "Jul", fase: "Fructif.", clima: "rain" },
            { mes: "Ago", fase: "Fructif.", clima: "rain" }, { mes: "Sep", fase: "Dispers.", clima: "rain" },
            { mes: "Oct", fase: "Crecim.", clima: "rain" }, { mes: "Nov", fase: "Crecim.", clima: "rain" }
        ],
        morfologia: `
            <p><strong>Porte:</strong> Árbol de 9 a 12 metros de altura, perennifolio. Copa amplia y ramas colgantes que pueden tocar el suelo.</p>
            <p class="mt-2"><strong>Hojas:</strong> Alternas, compuestas, paripinnadas. Los brotes jóvenes son péndulos y pasan de gris-plateado a rosado y luego verde.</p>
            <p class="mt-2"><strong>Flores:</strong> Cabezuelas grandes (12-18 cm) de color rojo-anaranjado intenso. Nacen directamente del tronco (caulifloria).</p>
            <p class="mt-2"><strong>Frutos:</strong> Legumbre plana de 20-30 cm, de color marrón al madurar.</p>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Colibríes</div><div class="section-val text-sm mt-2">Principales polinizadores atraídos por el color rojo y el abundante néctar de las flores.</div></div>
                <div class="metric-card"><div class="metric-label">Guatines</div><div class="section-val text-sm mt-2">Roedores que consumen y entierran semillas, actuando como dispersores efectivos.</div></div>
                <div class="metric-card"><div class="metric-label">Perezosos</div><div class="section-val text-sm mt-2">Utilizan las ramas colgantes para desplazarse y refugiarse en el bosque de galería.</div></div>
                <div class="metric-card"><div class="metric-label">Abejas</div><div class="section-val text-sm mt-2">Visitantes florales que aprovechan la riqueza de néctar, otorgándole valor apícola.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Ebanistería</div><div class="section-val text-sm mt-2">Madera dura y resistente al ataque de termitas (comején). Se usa en postes y construcción rural.</div></div>
                <div class="metric-card"><div class="metric-label">Medicina</div><div class="section-val text-sm mt-2">Las flores y ramas se usan como hemostáticos y para tratar hemorragias y diarreas.</div></div>
                <div class="metric-card"><div class="metric-label">Ornamental</div><div class="section-val text-sm mt-2">Muy apreciado en jardines y plazas por la belleza espectacular de sus "bolas de fuego".</div></div>
                <div class="metric-card"><div class="metric-label">Cultural</div><div class="section-val text-sm mt-2">Llamado "Palo Cruz" porque sus ramas al entrecruzarse forman ángulos rectos similares a una cruz.</div></div>
            </div>
        `,
        mensajeIA: "Me llaman Palo Cruz, y soy de pura cepa colombiana. Lo que me hace realmente único es que mis flores no nacen en las puntas de las ramas, sino directamente de mi tronco grueso, como si mi corazón explotara en fuego rojo. Los científicos llaman a esto 'caulifloria'. Mis hojas jóvenes parecen marionetas de seda rosada antes de volverse verdes. Soy fuerte, mi madera resiste a las termitas y mis flores curan heridas. ¡Soy un tesoro del llano!",
        referencias: [
            "Bernal, R., et al. (2015). Catálogo de plantas y líquenes de Colombia.",
            "Álvarez, E., et al. (2012). Tree above-ground biomass allometries for forests of Colombia.",
            "Yepes, A. P., et al. (2011). Protocolo para estimación de biomasa-carbono en Colombia.",
            "Mazza, G. (2018). Monaco Nature Encyclopedia — Brownea ariza."
        ],
        quiz: [
            { q: "¿Cómo se llama el fenómeno de flores que nacen del tronco?", opts: ["Heterofilia", "Caulifloria", "Melitofilia"], correct: 1 },
            { q: "¿De qué color son los brotes de hojas jóvenes?", opts: ["Azules", "Amarillos", "Rosados/Plateados"], correct: 2 },
            { q: "¿Por qué se llama 'Palo Cruz'?", opts: ["Por sus flores", "Por el ángulo de sus ramas", "Por su madera"], correct: 1 }
        ]
    },
    "almendro": {
        id: "#JBP-04", tipo: "Sombra / Frutal", nombre: "Almendro", cientifico: "Terminalia catappa L.",
        familia: "Combretaceae", origen: "Exótico (Asia)", estado: "Preocupación Menor", exotica: true,
        carbono: 280.5, viajes: 95, imagen_portada: "./imagenes/colegio1.jpeg",
        galeria: [
            { img: "./imagenes/colegio1.jpeg", desc: "Copa en capas" },
            { img: "./imagenes/foto2.jpeg", desc: "Hojas rojas" }
        ],
        nombresLocales: ["Almendro", "Almendrón", "Almendro de la India", "Almendro de playa"],
        distribucion: `
            <p>Nativo del Sudeste Asiático, introducido y naturalizado en todos los trópicos. En el Casanare es el árbol de sombra por excelencia en parques y potreros, adaptándose muy bien al régimen de sequía llanera.</p>
            <div class="blockquote-pro mt-3">
                <p>"Especie exitosa y resistente, con ramas horizontales en falsos verticilos que crean una copa piramidal perfecta para la sombra."</p>
                <cite>— Gentry (1993). Woody Plants of Northwest South America.</cite>
            </div>
        `,
        densidad: "0.59 g/cm³", fraccion: "0.47 (IPCC)",
        alometria: `
            <div class="alometry-box">ln(BAS) = a + b·ln(DAP²·H·ρ)</div>
            <p class="mt-2 text-sm">Modelo II.1 de Álvarez et al. (2012). BAS = Biomasa aérea seca. ρ = 0.59 g/cm³. Carbono = BAS × 0.47.</p>
            <div class="blockquote-pro mt-3">
                <p>"Los sistemas agroforestales con almendro en los Llanos Orientales son fundamentales para la mitigación del cambio climático."</p>
                <cite>— Segura et al. (2021). Revista de Biología Tropical.</cite>
            </div>
        `,
        calendario: [
            { mes: "Dic", fase: "Defoliación", clima: "dry" }, { mes: "Ene", fase: "Defoliación", clima: "dry" },
            { mes: "Feb", fase: "Refoliación", clima: "dry" }, { mes: "Mar", fase: "Floración", clima: "trans" },
            { mes: "Abr", fase: "Floración", clima: "trans" }, { mes: "May", fase: "Cuajado", clima: "rain" },
            { mes: "Jun", fase: "Fructif.", clima: "rain" }, { mes: "Jul", fase: "Fructif.", clima: "rain" },
            { mes: "Ago", fase: "Maduración", clima: "rain" }, { mes: "Sep", fase: "Dispersión", clima: "rain" },
            { mes: "Oct", fase: "Foliación", clima: "rain" }, { mes: "Nov", fase: "Foliación", clima: "rain" }
        ],
        morfologia: `
            <p><strong>Porte:</strong> Árbol de 10 a 20 metros con ramas horizontales dispuestas en pisos (verticiladas). Copa piramidal.</p>
            <p class="mt-2"><strong>Hojas:</strong> Grandes, coriáceas y obovadas. Se vuelven rojas antes de caer en el verano llanero.</p>
            <p class="mt-2"><strong>Flores:</strong> Pequeñas y blancas en espigas axilares. Olor característico.</p>
            <p class="mt-2"><strong>Frutos:</strong> Drupa aplanada con mesocarpo carnoso. Semilla comestible (almendra).</p>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Loros Reales</div><div class="section-val text-sm mt-2">Consumen los frutos maduros y dispersan las semillas en el paisaje llanero.</div></div>
                <div class="metric-card"><div class="metric-label">Murciélagos</div><div class="section-val text-sm mt-2">Frugívoros nocturnos que consumen la pulpa y actúan como dispersores secundarios.</div></div>
                <div class="metric-card"><div class="metric-label">Iguanas</div><div class="section-val text-sm mt-2">Consumen las hojas jóvenes y utilizan las ramas para termorregulación solar.</div></div>
                <div class="metric-card"><div class="metric-label">Peces</div><div class="section-val text-sm mt-2">Las hojas caídas en caños liberan taninos que purifican el agua y matan bacterias.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Sombra Ganadera</div><div class="section-val text-sm mt-2">Reduce el estrés calórico del ganado bovino en las horas de sol intenso del mediodía.</div></div>
                <div class="metric-card"><div class="metric-label">Carpintería</div><div class="section-val text-sm mt-2">Madera sólida y resistente al agua, usada en cercas, postes y muebles rústicos.</div></div>
                <div class="metric-card"><div class="metric-label">Medicina</div><div class="section-val text-sm mt-2">Incusión de hojas secas para problemas hepáticos y como cicatrizante natural.</div></div>
                <div class="metric-card"><div class="metric-label">Alimentación</div><div class="section-val text-sm mt-2">La semilla es comestible y tiene un sabor similar a la almendra europea.</div></div>
            </div>
        `,
        mensajeIA: "Soy un viajero que vino de Asia para darte sombra. Mis ramas crecen en pisos, como una casa de varios niveles, perfecta para proteger al ganado del fuerte sol de Maní. Antes de que llegue el verano, mis hojas se visten de rojo para avisar que voy a descansar. Mis frutos guardan una almendra dulce y mis hojas caídas son medicina para los peces de los caños. ¡Soy tu farmacia natural flotante!",
        referencias: [
            "Francis, J. K. (1989). Terminalia catappa L. — Indian almond.",
            "Segura, M., et al. (2021). Almacenamiento de carbono en sistemas agroforestales.",
            "Bernal, R., et al. (2015). Catálogo de plantas y líquenes de Colombia.",
            "Brown, S., & Lugo, A. E. (1992). Wood densities of tropical tree species."
        ],
        quiz: [
            { q: "¿A qué familia botánica pertenece el almendro?", opts: ["Fabaceae", "Combretaceae", "Moraceae"], correct: 1 },
            { q: "¿Qué sucede con sus hojas en verano?", opts: ["Se vuelven azules", "Se vuelven rojas y caen", "No cambian"], correct: 1 },
            { q: "¿Para qué sirven sus hojas en el agua?", opts: ["Para ensuciar", "Para alimentar vacas", "Para purificar y matar bacterias"], correct: 2 }
        ]
    },
    "pomarrosa": {
        id: "#JBP-05", tipo: "Frutal / Ornamental", nombre: "Pomarrosa", cientifico: "Syzygium jambos (L.) Alston",
        familia: "Myrtaceae", origen: "Sudeste asiático (Naturalizada)", estado: "Preocupación Menor (LC)", exotica: true,
        carbono: 142.5, viajes: 52, imagen_portada: "./imagenes/pomarrosa1.jpg",
        galeria: [
            { img: "./imagenes/pomarrosa1.jpg", desc: "Flores en pompones" },
            { img: "./imagenes/pomarrosa2.jpg", desc: "Frutos maduros" },
            { img: "./imagenes/pomarrosa3.jpg", desc: "Hojas jóvenes rosadas" }
        ],
        nombresLocales: ["Pomarroso", "Poma", "Pero de Agua", "Pumalaca", "Jambo"],
        distribucion: `
            <p>Originaria del sudeste asiático (archipiélago malayo). Ampliamente naturalizada en el Neotrópico. En Colombia, prospera en la Orinoquía, asociada a bosques de galería del sistema hídrico del río Meta y sus afluentes en Casanare.</p>
            <div class="blockquote-pro mt-3">
                <p>"En Colombia y Venezuela, el árbol ha sido acogido tradicionalmente como ornamental en climas cálidos, debido a su bajo mantenimiento, abundante sombra y rápido crecimiento."</p>
                <cite>— NaturaLista Colombia (2024).</cite>
            </div>
            <div class="mt-4">
                <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
                    <tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:8px; font-weight:700;">Orden</td><td style="padding:8px;">Myrtales</td></tr>
                    <tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:8px; font-weight:700;">Género</td><td style="padding:8px;">Syzygium Gaertn.</td></tr>
                    <tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:8px; font-weight:700;">Sinónimo</td><td style="padding:8px;">Eugenia jambos L.</td></tr>
                </table>
            </div>
        `,
        densidad: "0.60 – 0.75 g/cm³", fraccion: "0.50 (IPCC)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:10px;">ln(AGB) = a + b·ln(D) + c·ln(ρ)</div>
            <p class="text-sm">Ecuación de <strong>Álvarez et al. (2012)</strong> para bosques naturales de Colombia. <strong>AGB</strong>: Biomasa Aérea (kg), <strong>D</strong>: DAP (cm), <strong>ρ</strong>: Densidad básica (g/cm³).</p>
            <div class="warn-box mt-2" style="font-size:0.8rem; border-left:4px solid #f39c12; padding-left:10px;">
                Dato de densidad por verificar en campo mediante toma de muestras in situ en Maní, Casanare.
            </div>
        `,
        calendario: [
            { mes: "Dic", fase: "Reposo", clima: "dry" }, { mes: "Ene", fase: "Vegetativo", clima: "dry" },
            { mes: "Feb", fase: "Floración", clima: "dry" }, { mes: "Mar", fase: "Floración", clima: "dry" },
            { mes: "Abr", fase: "Fructific.", clima: "rain" }, { mes: "May", fase: "Fructific.", clima: "rain" },
            { mes: "Jun", fase: "Crecim.", clima: "rain" }, { mes: "Jul", fase: "Crecim.", clima: "rain" },
            { mes: "Ago", fase: "Crecim.", clima: "rain" }, { mes: "Sep", fase: "Vegetat.", clima: "rain" },
            { mes: "Oct", fase: "Vegetat.", clima: "rain" }, { mes: "Nov", fase: "Pre-flor.", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px;">
                <div><strong style="color:var(--secondary-color);">Porte:</strong> Árbol perennifolio de 3 a 20 m. Copa amplia y densa con tendencia a ramificación baja.</div>
                <div><strong style="color:var(--secondary-color);">Hojas:</strong> Simples, opuestas, lanceoladas (10-24 cm). Las jóvenes brotan de color rosado intenso.</div>
                <div><strong style="color:var(--secondary-color);">Flores:</strong> Estambres numerosos y largos que forman "pompones" blancos; producen gran cantidad de néctar.</div>
                <div><strong style="color:var(--secondary-color);">Frutos:</strong> Baya carnosa tipo pomo, blanca-rosada al madurar, con pulpa dulce y aroma a rosas.</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Polinizadores</div><div class="section-val text-sm mt-2">Abejas y mariposas atraídas por el abundante néctar de los pompones florales.</div></div>
                <div class="metric-card"><div class="metric-label">Aves frugívoras</div><div class="section-val text-sm mt-2">Loros, pericos y palomas silvestres consumen los frutos y dispersan semillas.</div></div>
                <div class="metric-card"><div class="metric-label">Mamíferos</div><div class="section-val text-sm mt-2">Murciélagos frugívoros (Artibeus spp.) y ardillas actúan como dispersores secundarios.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Alimentario</div><div class="section-val text-sm mt-2">Fruto fresco, dulces y jaleas. Rico en pectinas y vitamina C.</div></div>
                <div class="metric-card"><div class="metric-label">Medicinal</div><div class="section-val text-sm mt-2">Semillas para diabetes, hojas para ojos irritados y raíces como antiepiléptico.</div></div>
                <div class="metric-card"><div class="metric-label">Servicios</div><div class="section-val text-sm mt-2">Sombra ganadera, rompevientos y control de erosión en márgenes de caños.</div></div>
            </div>
        `,
        mensajeIA: "¡Hola! Soy el Pomarroso. Nací en las selvas de Asia, pero mis raíces ahora abrazan la tierra del Casanare. Mis flores parecen pequeños fuegos artificiales blancos y mis semillas saben nadar por los caños para encontrar nuevos hogares. ¿Sabías que mis hojas nuevas son de color rosado? ¡Es mi forma de decir que estoy creciendo con fuerza!",
        referencias: [
            "Álvarez, E., et al. (2012). Tree above-ground biomass allometries for forests of Colombia. Forest Ecology and Management.",
            "Bernal, R., et al. (2020). Catálogo de Plantas y Líquenes de Colombia. Universidad Nacional de Colombia.",
            "IUCN Red List (2019). Syzygium jambos (Least Concern).",
            "Zanne, A. E., et al. (2009). Global wood density database."
        ],
        quiz: [
            { q: "¿A qué familia botánica pertenece el Pomarroso?", opts: ["Fabaceae", "Myrtaceae", "Anacardiaceae"], correct: 1 },
            { q: "¿Por qué sus semillas son buenas colonizadoras en el llano?", opts: ["Tienen alas para volar", "Tienen alta flotabilidad en caños", "Las entierran los guatines"], correct: 1 },
            { q: "¿De qué color son sus brotes de hojas jóvenes?", opts: ["Verde oscuro", "Amarillo brillante", "Rosado intenso"], correct: 2 }
        ]
    },
    "palma_areca": {
        id: "#JBP-06", tipo: "Ornamental", nombre: "Palma Areca", cientifico: "Dypsis lutescens (H.Wendl.) Beentje & J.Dransf.",
        familia: "Arecaceae", origen: "Exótico (Madagascar)", estado: "En Peligro (Nativo) / Cultivada", exotica: true,
        carbono: 45.2, viajes: 15, imagen_portada: "./imagenes/areca1.jpg",
        galeria: [
            { img: "./imagenes/areca1.jpg", desc: "Porte multicaule" },
            { img: "./imagenes/areca2.jpg", desc: "Frutos dorados" }
        ],
        nombresLocales: ["Palma Bambú", "Palma Mariposa", "Frutos de Oro", "Areca"],
        distribucion: `
            <p>Endémica de Madagascar, donde sus poblaciones naturales están en peligro crítico. Globalmente es la palmera ornamental más cultivada. En Casanare se adapta excepcionalmente al calor, aunque requiere suelos con buen drenaje.</p>
            <div class="blockquote-pro mt-3">
                <p>"La Palma Areca es una de las pocas plantas que puede eliminar el formaldehído, el xileno y el amoníaco del aire interior, según los estudios de la NASA."</p>
                <cite>— NASA Clean Air Study (Wolverton, 1989).</cite>
            </div>
            <div class="mt-4">
                <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
                    <tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:8px; font-weight:700;">Subfamilia</td><td style="padding:8px;">Arecoideae</td></tr>
                    <tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:8px; font-weight:700;">Tribu</td><td style="padding:8px;">Areceae</td></tr>
                    <tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:8px; font-weight:700;">Sinónimo</td><td style="padding:8px;">Chrysalidocarpus lutescens</td></tr>
                </table>
            </div>
        `,
        densidad: "0.30 – 0.40 g/cm³", fraccion: "0.47 (IPCC)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:10px;">BAS = 10^(a + b·log₁₀(DAP))</div>
            <p class="text-sm">Modelo de <strong>Goodman et al. (2013)</strong> para Arecaceae tropicales. La biomasa en palmeras se estima principalmente por la altura del estipe y el diámetro.</p>
            <div class="warn-box mt-2" style="font-size:0.8rem; border-left:4px solid #f39c12; padding-left:10px;">
                Nota: Al ser multicaule (crece en grupos), la biomasa total es la suma de todos sus tallos individuales.
            </div>
        `,
        calendario: [
            { mes: "Dic", fase: "Reposo", clima: "dry" }, { mes: "Ene", fase: "Floración", clima: "dry" },
            { mes: "Feb", fase: "Floración", clima: "dry" }, { mes: "Mar", fase: "Floración", clima: "trans" },
            { mes: "Abr", fase: "Cuajado", clima: "rain" }, { mes: "May", fase: "Fructif.", clima: "rain" },
            { mes: "Jun", fase: "Fructif.", clima: "rain" }, { mes: "Jul", fase: "Madurac.", clima: "rain" },
            { mes: "Ago", fase: "Madurac.", clima: "rain" }, { mes: "Sep", fase: "Dispers.", clima: "rain" },
            { mes: "Oct", fase: "Reposo", clima: "rain" }, { mes: "Nov", fase: "Reposo", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px;">
                <div><strong style="color:var(--secondary-color);">Porte:</strong> Palmera multicaule (cespitosa) de 3-9 m. Tallos cilíndricos anillados similares al bambú.</div>
                <div><strong style="color:var(--secondary-color);">Hojas:</strong> Pinnadas, arqueadas, con raquis de color amarillo dorado característico (de ahí su nombre *lutescens*).</div>
                <div><strong style="color:var(--secondary-color);">Flores:</strong> Pequeñas, blancas y muy aromáticas; nacen en inflorescencias ramificadas bajo la corona.</div>
                <div><strong style="color:var(--secondary-color);">Frutos:</strong> Drupas oblongas que cambian de amarillo a púrpura-negro al madurar.</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Insectos</div><div class="section-val text-sm mt-2">Abejas nativas y pequeñas avispas son atraídas por el perfume intenso de sus flores.</div></div>
                <div class="metric-card"><div class="metric-label">Aves</div><div class="section-val text-sm mt-2">Pequeñas aves frugívoras consumen los frutos dorados cuando están plenamente maduros.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Ambiental</div><div class="section-val text-sm mt-2">Certificada por la NASA para purificar el aire de toxinas y humidificar ambientes secos.</div></div>
                <div class="metric-card"><div class="metric-label">Paisajismo</div><div class="section-val text-sm mt-2">Uso masivo en jardines de Casanare por su elegancia y resistencia al sol directo.</div></div>
            </div>
        `,
        mensajeIA: "¡Hola! Soy la Palma Areca. Vengo de la isla de Madagascar, al otro lado del océano. Me llaman Palma Bambú porque mis tallos tienen anillos que me hacen parecer un bambú gigante. ¿Sabías que soy una experta limpiando el aire? La NASA dice que soy de las mejores plantas para quitar contaminantes y refrescar tu casa. ¡Soy como un filtro de aire vivo!",
        referencias: [
            "Goodman et al. (2013). Biomass estimates for tropical palms. Forest Ecology and Management.",
            "Wolverton, B. C. (1989). NASA Clean Air Study. NASA Reports.",
            "Henderson, A., et al. (1995). Field Guide to the Palms of the Americas. Princeton University Press.",
            "IUCN Red List (2023). Dypsis lutescens — Conservation Status."
        ],
        quiz: [
            { q: "¿De qué isla es originaria la Palma Areca?", opts: ["Hawái", "Madagascar", "Borneo"], correct: 1 },
            { q: "¿Por qué se le conoce como 'Palma Bambú'?", opts: ["Porque sus hojas son largas", "Por los anillos en sus tallos", "Porque crece en el agua"], correct: 1 },
            { q: "¿Qué importante descubrimiento hizo la NASA sobre esta palma?", opts: ["Que puede crecer en Marte", "Que produce oro en sus raíces", "Que es excelente purificando el aire"], correct: 2 }
        ]
    },
    "caracaro": {
        id: "#JBP-07", tipo: "Nativo", nombre: "Caracaro", cientifico: "Enterolobium cyclocarpum (Jacq.) Griseb.",
        familia: "Fabaceae", origen: "Nativo Neotrópico", estado: "Preocupación Menor (LC)", exotica: false,
        carbono: 450.5, viajes: 165, imagen_portada: "./imagenes/caracaro1.jpg",
        galeria: [
            { img: "./imagenes/caracaro1.jpg", desc: "Fruto forma de oreja" },
            { img: "./imagenes/caracaro2.jpg", desc: "Copa extendida" }
        ],
        nombresLocales: ["Orejero", "Piñón de Oreja", "Guanacaste", "Anacahuite"],
        distribucion: `
            <p>Nativo desde México hasta el norte de Sudamérica. En la Orinoquía es un gigante emblemático de las sabanas y bosques de galería, fundamental en sistemas silvopastoriles llaneros por su sombra y nitrificación.</p>
            <div class="blockquote-pro mt-3">
                <p>"El Caracaro es el gigante generoso de la sabana; bajo su sombra puede descansar todo un hato, mientras sus raíces alimentan el suelo con nitrógeno."</p>
                <cite>— Tradición Oral y Sabiduría Llanera.</cite>
            </div>
            <div class="mt-4">
                <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
                    <tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:8px; font-weight:700;">Subfamilia</td><td style="padding:8px;">Mimosoideae</td></tr>
                    <tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:8px; font-weight:700;">Tribu</td><td style="padding:8px;">Ingeae</td></tr>
                    <tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:8px; font-weight:700;">Estado (UICN)</td><td style="padding:8px;">Least Concern (LC)</td></tr>
                </table>
            </div>
        `,
        densidad: "0.34 – 0.60 g/cm³", fraccion: "0.47 (IPCC)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:10px;">ln(BAS) = a + b · ln(DAP² · H · ρ)</div>
            <p class="text-sm">Modelo de <strong>Álvarez et al. (2012)</strong>. Es una de las especies con mayor potencial de secuestro de carbono en la Orinoquía debido a su crecimiento rápido y gran volumen de copa.</p>
            <div class="warn-box mt-2" style="font-size:0.8rem; border-left:4px solid #f39c12; padding-left:10px;">
                Especie clave para proyectos de bonos de carbono en sistemas agroforestales.
            </div>
        `,
        calendario: [
            { mes: "Dic", fase: "Defoliación", clima: "dry" }, { mes: "Ene", fase: "Defoliación", clima: "dry" },
            { mes: "Feb", fase: "Refoliación", clima: "dry" }, { mes: "Mar", fase: "Floración", clima: "trans" },
            { mes: "Abr", fase: "Floración", clima: "trans" }, { mes: "May", fase: "Cuajado", clima: "rain" },
            { mes: "Jun", fase: "Fructif.", clima: "rain" }, { mes: "Jul", fase: "Fructif.", clima: "rain" },
            { mes: "Ago", fase: "Fructif.", clima: "rain" }, { mes: "Sep", fase: "Fructif.", clima: "rain" },
            { mes: "Oct", fase: "Madurac.", clima: "rain" }, { mes: "Nov", fase: "Dispers.", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px;">
                <div><strong style="color:var(--secondary-color);">Porte:</strong> Árbol gigante (20-30 m) con copa hemisférica muy extendida (hasta 30 m de diámetro).</div>
                <div><strong style="color:var(--secondary-color);">Hojas:</strong> Bipinnadas, alternas. Los folíolos tienen la curiosidad de plegarse de noche o ante falta de agua.</div>
                <div><strong style="color:var(--secondary-color);">Flores:</strong> Cabezuelas globosas blancas de aspecto plumoso; muy fragantes y ricas en néctar.</div>
                <div><strong style="color:var(--secondary-color);">Frutos:</strong> Legumbre circular indehiscente con forma de oreja humana, de color moreno oscuro y muy brillante.</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Ganado Vacuno</div><div class="section-val text-sm mt-2">Consume los frutos caídos, que son ricos en proteína, y dispersa las semillas en los potreros.</div></div>
                <div class="metric-card"><div class="metric-label">Insectos</div><div class="section-val text-sm mt-2">Sus flores blancas son un imán para abejas nativas y abejorros al inicio de las lluvias.</div></div>
                <div class="metric-card"><div class="metric-label">Aves</div><div class="section-val text-sm mt-2">Diferentes aves de sabana anidan en su enorme copa, protegidas por su denso follaje.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Suelo</div><div class="section-val text-sm mt-2">Fija nitrógeno en el suelo a través de simbiosis radicular, mejorando la pastura.</div></div>
                <div class="metric-card"><div class="metric-label">Madera</div><div class="section-val text-sm mt-2">Liviana y fácil de trabajar; resistente al agua, usada tradicionalmente en canoas.</div></div>
                <div class="metric-card"><div class="metric-label">Sombra</div><div class="section-val text-sm mt-2">Indispensable en hatos llaneros para mitigar el estrés calórico del ganado.</div></div>
            </div>
        `,
        mensajeIA: "¡Epa, pariente! Yo soy el Caracaro. Soy el gigante que vigila las sabanas de Maní. Me dicen 'Orejero' porque mis frutos parecen orejas humanas caídas en el suelo. Soy un árbol muy generoso: no solo te doy la mejor sombra del llano, sino que también le regalo nitrógeno a la tierra para que el pasto crezca verde y fuerte para las vacas. ¡Soy un abrazo de sombra para todo el hato!",
        referencias: [
            "Álvarez et al. (2012). Tree above-ground biomass allometries for Colombian forests. Forest Ecology and Management.",
            "Bernal, R., et al. (2017). Nombres comunes de las plantas de Colombia. Universidad Nacional de Colombia.",
            "Gentry, A. H. (1993). A Field Guide to the Families and Generies of Woody Plants of Northwest South America. Conservation International.",
            "IUCN (2023). Enterolobium cyclocarpum — Conservation Assessment."
        ],
        quiz: [
            { q: "¿Por qué se le llama popularmente 'Orejero'?", opts: ["Porque sus hojas oyen", "Por la forma de sus frutos circulares", "Porque crece cerca de los oídos"], correct: 1 },
            { q: "¿Qué importante beneficio le da al suelo de los potreros?", opts: ["Lo vuelve más duro", "Lo seca para que no haya barro", "Fija nitrógeno y lo fertiliza"], correct: 2 },
            { q: "¿Cómo se comportan sus hojas de noche?", opts: ["Se caen todas", "Se pliegan o se cierran", "Se vuelven rojas"], correct: 1 }
        ]
    },
    "mango": {
        id: "#JBP-08", tipo: "Frutal", nombre: "Mango", cientifico: "Mangifera indica L.",
        familia: "Anacardiaceae", origen: "Exótico (Asia)", estado: "Preocupación Menor (LC)", exotica: true,
        carbono: 310.2, viajes: 105, imagen_portada: "./imagenes/mango1.jpg",
        galeria: [
            { img: "./imagenes/mango1.jpg", desc: "Variedad criolla" },
            { img: "./imagenes/mango2.jpg", desc: "Inflorescencia" }
        ],
        nombresLocales: ["Mango criollo", "Mango de hilacha", "Manguero", "Mango de azúcar"],
        distribucion: `
            <p>Nativo del norte de la India y Myanmar. Cultivado en el trópico americano desde hace más de 400 años. En el Casanare es omnipresente en fincas y pueblos, plenamente adaptado al régimen de sabana y bosques de galería.</p>
            <div class="blockquote-pro mt-3">
                <p>"El mango es el rey de las frutas tropicales; en el llano no hay hato que no tenga un 'palo de mango' cargado en mayo, siendo un referente cultural y alimentario insustituible."</p>
                <cite>— Tradición Popular del Casanare.</cite>
            </div>
            <div class="mt-4">
                <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
                    <tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:8px; font-weight:700;">Orden</td><td style="padding:8px;">Sapindales</td></tr>
                    <tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:8px; font-weight:700;">Género</td><td style="padding:8px;">Mangifera L.</td></tr>
                    <tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:8px; font-weight:700;">Compuesto clave</td><td style="padding:8px;">Mangiferina (Xantona)</td></tr>
                </table>
            </div>
        `,
        densidad: "0.52 – 0.70 g/cm³", fraccion: "0.50 (IPCC)",
        alometria: `
            <div class="alometry-box" style="margin-bottom:10px;">AGB = 0.0673 × (ρ × D² × H)⁰·⁹⁷⁶</div>
            <p class="text-sm">Modelo pantrópico de <strong>Chave et al. (2014)</strong>. El mango almacena grandes cantidades de carbono en su tronco robusto y copa perennifolia.</p>
            <div class="warn-box mt-2" style="font-size:0.8rem; border-left:4px solid #f39c12; padding-left:10px;">
                La densidad de la madera de mango varía según la edad del ejemplar y la variedad.
            </div>
        `,
        calendario: [
            { mes: "Dic", fase: "Floración", clima: "dry" }, { mes: "Ene", fase: "Floración", clima: "dry" },
            { mes: "Feb", fase: "Floración", clima: "dry" }, { mes: "Mar", fase: "Cuajado", clima: "trans" },
            { mes: "Abr", fase: "Cosecha", clima: "rain" }, { mes: "May", fase: "Cosecha", clima: "rain" },
            { mes: "Jun", fase: "Crecim.", clima: "rain" }, { mes: "Jul", fase: "Crecim.", clima: "rain" },
            { mes: "Ago", fase: "Veg. Activo", clima: "rain" }, { mes: "Sep", fase: "Veg. Activo", clima: "rain" },
            { mes: "Oct", fase: "Pre-flor.", clima: "rain" }, { mes: "Nov", fase: "Inicio sec.", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px;">
                <div><strong style="color:var(--secondary-color);">Porte:</strong> Árbol perennifolio de copa densa y redondeada. Puede alcanzar 30 m de altura y vivir más de 100 años.</div>
                <div><strong style="color:var(--secondary-color);">Hojas:</strong> Simples, alternas, lanceoladas, de color verde oscuro brillante; los brotes nuevos son rojizos.</div>
                <div><strong style="color:var(--secondary-color);">Flores:</strong> Pequeñas y muy fragantes en grandes panículas piramidales terminales.</div>
                <div><strong style="color:var(--secondary-color);">Frutos:</strong> Drupa carnosa con pulpa dulce y una semilla grande y fibrosa; piel variable (verde, amarillo, rojo).</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Aves</div><div class="section-val text-sm mt-2">Loros, pericos y turpiales consumen activamente los frutos maduros.</div></div>
                <div class="metric-card"><div class="metric-label">Insectos</div><div class="section-val text-sm mt-2">Flores melíferas que atraen abejas y moscas polinizadoras (Anastrepha spp.).</div></div>
                <div class="metric-card"><div class="metric-label">Mamíferos</div><div class="section-val text-sm mt-2">Chigüiros y murciélagos frugívoros aprovechan los frutos caídos o en la rama.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Alimentación</div><div class="section-val text-sm mt-2">Fruto fresco, jugos y conservas. El mango biche con sal es tradicional en el llano.</div></div>
                <div class="metric-card"><div class="metric-label">Farmacología</div><div class="section-val text-sm mt-2">Contiene mangiferina en hojas y corteza, con propiedades antioxidantes y antidiabéticas.</div></div>
                <div class="metric-card"><div class="metric-label">Sombra</div><div class="section-val text-sm mt-2">Árbol de sombra por excelencia en viviendas y potreros del Casanare.</div></div>
            </div>
        `,
        mensajeIA: "¡Hola! Soy el Mango. Vengo de la India, pero me siento más llanero que el coleo. Llevo cientos de años alimentando a la gente de estas tierras. Mis hojas son fuertes y siempre verdes, y cuando llega mayo, mis ramas se doblan con el peso de mis frutos dulces. ¿Sabías que guardo una medicina secreta llamada mangiferina en mis hojas? ¡Soy un tesoro de sabor y salud!",
        referencias: [
            "Chave et al. (2014). Improved allometric models for tropical trees. Global Change Biology.",
            "Imran, M., et al. (2017). Mangiferin: a natural miracle bioactive compound. Lipids in Health and Disease.",
            "Bernal, R., et al. (2020). Catálogo de plantas y líquenes de Colombia. Universidad Nacional de Colombia.",
            "DANE (2019). El cultivo del mango en Colombia. Boletín de Insumos."
        ],
        quiz: [
            { q: "¿En qué país se originó originalmente el árbol de mango?", opts: ["Brasil", "India", "México"], correct: 1 },
            { q: "¿Cómo se llama el compuesto bioactivo saludable que se encuentra en sus hojas?", opts: ["Cafeína", "Mangiferina", "Látex"], correct: 1 },
            { q: "¿Qué sucede con los brotes de hojas nuevas del mango?", opts: ["Nacen de color azul", "Son de color rojizo o rosado", "Son transparentes"], correct: 1 }
        ]
    }
};
