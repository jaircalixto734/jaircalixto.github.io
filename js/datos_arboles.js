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
        carbono: 150.8, viajes: 55, imagen_portada: "./imagenes/Jambolán.jpeg",
        galeria: [
            { img: "./imagenes/Jambolán.jpeg", desc: "Frutos maduros" },
            { img: "./imagenes/Jambolán_2.jpeg", desc: "Hojas y ramas" }
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
        carbono: 185.0, viajes: 65, imagen_portada: "./imagenes/Palo_Cruz.jpeg",
        galeria: [
            { img: "./imagenes/Palo_Cruz.jpeg", desc: "Flores en el tronco" },
            { img: "./imagenes/Palo_Cruz_2.jpeg", desc: "Hojas jóvenes" }
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
        id: "#JBP-07", tipo: "Nativo / Sombra", nombre: "Caracaro", cientifico: "Enterolobium cyclocarpum (Jacq.) Griseb.",
        familia: "Fabaceae (Leguminosas)", origen: "Nativo Neotrópico", estado: "Preocupación Menor (LC)", exotica: false,
        carbono: 450.5, viajes: 165, imagen_portada: "./imagenes/caracaro1.jpg",
        galeria: [
            { img: "./imagenes/caracaro1.jpg", desc: "Fruto forma de oreja" },
            { img: "./imagenes/caracaro2.jpg", desc: "Copa extendida" }
        ],
        nombresLocales: ["Caracaro", "Orejero", "Piñón de oreja", "Caro", "Hueso de pescado", "Guanacaste", "Jaboncillo"],
        distribucion: `
            <p>Gigante emblemático de las sabanas y bosques de galería, fundamental en sistemas silvopastoriles llaneros. Es el Árbol Nacional de Costa Rica (Guanacaste). En Casanare, actúa como un "ingeniero del ecosistema" mejorando la calidad del suelo y ofreciendo refugio térmico vital para el ganado.</p>
            <div class="blockquote-pro mt-3">
                <p>"Tres palos hay en el monte, que causan admiración: algarrobo pa’ trapiche, caracaro pa’ pilón, el jobo por lo liviano, la ceniza pa’ jabón."</p>
                <cite>— Coplerío Popular Llanero (Extracto del libro de Etnobotánica).</cite>
            </div>
        `,
        densidad: "0.34 – 0.60 g/cm³ (Ref. 0.47)", fraccion: "0.47 (IPCC)",
        alometria: `
            <div class="alometry-box">ln(BAS) = a + b · ln(DAP² · H · ρ)</div>
            <p class="mt-2 text-sm">Modelo II.1 de <strong>Álvarez et al. (2012)</strong>. Especie con un potencial colosal de secuestro de carbono. Un solo ejemplar maduro puede capturar toneladas de CO₂eq durante su vida, actuando como un verdadero 'titán del carbono' en los potreros de Maní.</p>
        `,
        calendario: [
            { mes: "Dic", fase: "Defoliación", clima: "dry" }, { mes: "Ene", fase: "Defoliación", clima: "dry" },
            { mes: "Feb", fase: "Defoliación", clima: "dry" }, { mes: "Mar", fase: "Floración", clima: "trans" },
            { mes: "Abr", fase: "Floración", clima: "trans" }, { mes: "May", fase: "Fructif.", clima: "rain" },
            { mes: "Jun", fase: "Fructif.", clima: "rain" }, { mes: "Jul", fase: "Fructif.", clima: "rain" },
            { mes: "Ago", fase: "Fructif.", clima: "rain" }, { mes: "Sep", fase: "Dispersión", clima: "rain" },
            { mes: "Oct", fase: "Dispersión", clima: "rain" }, { mes: "Nov", fase: "Dispersión", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px;">
                <div><strong style="color:var(--secondary-color);">Porte:</strong> Gigante del llano (20-30 m). Copa hemisférica inmensa y densa que proyecta una sombra amplia, reduciendo el estrés calórico en el hato.</div>
                <div><strong style="color:var(--secondary-color);">Hojas:</strong> Bipinnadas. Presentan <strong>nictinastia</strong>: se pliegan de noche o en sequía extrema para ahorrar agua y protegerse del sol ardiente.</div>
                <div><strong style="color:var(--secondary-color);">Tronco:</strong> Recto y robusto. Madera liviana pero resistente a la humedad, fácil de trabajar en carpintería rural.</div>
                <div><strong style="color:var(--secondary-color);">Fruto:</strong> Vaina circular enroscada como una <strong>oreja humana</strong> (7-15 cm). Contiene saponinas naturales; antes se usaba como jabón.</div>
            </div>
        `,
        fauna: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Grandes Mamíferos</div><div class="section-val text-sm mt-2">Dantas, chigüiros y ganado consumen las vainas maduras; las semillas sobreviven al paso digestivo (endozoocoria).</div></div>
                <div class="metric-card"><div class="metric-label">Insectos</div><div class="section-val text-sm mt-2">Cabezuelas globosas blancas muy aromáticas que atraen masivamente a abejas nativas y abejorros en marzo.</div></div>
                <div class="metric-card"><div class="metric-label">Regulación Térmica</div><div class="section-val text-sm mt-2">Su inmensa copa reduce la temperatura del suelo y protege a la fauna silvestre del sol casanareño.</div></div>
            </div>
        `,
        usos: `
            <div class="grid2 mt-3">
                <div class="metric-card"><div class="metric-label">Etnobotánica</div><div class="section-val text-sm mt-2">Madera para pilones, curiaras y ruedas de carreta. Vainas verdes usadas para lavar ropa (Jaboncillo).</div></div>
                <div class="metric-card"><div class="metric-label">Fijación de Nitrógeno</div><div class="section-val text-sm mt-2">Sus raíces con bacterias <em>Rhizobium</em> enriquecen el suelo, actuando como abono natural para los pastos.</div></div>
                <div class="metric-card"><div class="metric-label">Medicina Tradicional</div><div class="section-val text-sm mt-2">La decocción de corteza es cicatrizante y antiinflamatoria; se usa en baños contra olores corporales.</div></div>
            </div>
        `,
        mensajeIA: "¡Epa, pariente! Yo soy el Caracaro, el gigante generoso del llano. Me dicen 'Orejero' por mis frutos, pero también 'Jaboncillo' porque con mis vainas verdes lavaban la ropa antes de que existieran las tiendas. Soy un ingeniero del suelo: atrapo el nitrógeno del aire y lo regalo a la tierra para que el pasto crezca fuerte para las vacas. ¡Bajo mi sombra cabe todo el hato y sobra espacio!",
        referencias: [
            "Álvarez, E., et al. (2012). Tree above-ground biomass allometries for carbon stocks estimation in Colombia.",
            "Bernal, R., et al. (2017). Nombres comunes de las plantas de Colombia. Universidad Nacional de Colombia.",
            "Francis, J. K. (1988). Enterolobium cyclocarpum (Jacq.) Griseb. Guanacaste, earpod-tree (USDA Forest Service).",
            "Ibrahim, M., et al. (2006). Sistemas silvopastoriles para el mejoramiento de la productividad.",
            "Obando Picado, M. (2010). Propiedades físicas y generales de la madera de Enterolobium cyclocarpum."
        ],
        quiz: [
            { q: "¿Por qué se le llama popularmente 'Jaboncillo' al Caracaro?", opts: ["Porque su madera resbala", "Porque sus vainas verdes contienen saponinas que hacen espuma", "Porque sus hojas huelen a perfume"], correct: 1 },
            { q: "¿Qué importante beneficio oculto le da a los potreros de Maní?", opts: ["Ahuyenta a las serpientes", "Fija nitrógeno atmosférico en el suelo mediante sus raíces", "Produce agua potable"], correct: 1 },
            { q: "¿Qué es la nictinastia, fenómeno que ocurre en sus hojas?", opts: ["Cuando las flores se vuelven rojas", "Cuando las hojas se pliegan de noche o en sequía para ahorrar agua", "Cuando el árbol crece más rápido en invierno"], correct: 1 }
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
    },
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
};
