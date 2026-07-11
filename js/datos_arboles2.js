// Archivo de datos educativos - Información sencilla y comprensible para estudiantes
const baseDatosArbolesEducativa = {
    "merecure": {
        id: "#JBP-01", tipo: "Nativo", nombre: "Merecure", cientifico: "Moquilea pyrifolia",
        familia: "Chrysobalanaceae", origen: "Llanos de Colombia y Venezuela", estado: "Árbol común en los Llanos", exotica: false,
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
        nombresLocales: ["Merecure", "Querebere", "Merecurito", "Árbol del Llano"],
        distribucion: `
            <p><strong>¿Dónde vive el Merecure?</strong> Este árbol es típico de los Llanos Orientales de Colombia y Venezuela. Le gusta crecer cerca de ríos y en sabanas donde hay épocas de mucha agua y épocas de sequía.</p>
            <p><strong>Curiosidad:</strong> ¡Es el árbol símbolo del estado Apure en Venezuela! Su nombre científico "pyrifolia" significa "hojas como de pera", porque sus hojas se parecen a las del árbol de peras.</p>
            <div class="warn-box mt-3" style="font-size:0.9rem; border-left:4px solid var(--primary-light); padding-left:12px; margin-top:15px; color:var(--text-main);">
                <strong>🌍 ¿Sabías qué?</strong> El Merecure es un árbol muy resistente que puede sobrevivir tanto a inundaciones como a sequías fuertes en los Llanos.
            </div>
        `,
        densidad: "Madera dura y pesada", fraccion: "Aproximadamente 50% es carbono",
        alometria: `
            <div class="warn-box" style="font-size:0.9rem; border-left:4px solid #f39c12; padding-left:12px; margin-bottom:15px; color:var(--text-main);">
                🔬 <strong>¿Cómo calculamos el carbono?</strong> Los científicos usan fórmulas matemáticas especiales para calcular cuánto carbono tiene un árbol. Necesitan medir su grosor (DAP), su altura y qué tan densa es su madera.
            </div>
            <div class="alometry-box" style="margin-bottom:15px; font-family: 'Courier New', monospace; font-weight:bold; background: #000; color: #0f0; padding: 15px; border-radius: 10px; text-align:center;">
                Carbono = Fórmula especial × Grosor × Altura
            </div>
            <p class="text-sm"><strong>Explicación sencilla:</strong> Imagina que el árbol es como una alcancía que guarda carbono del aire. Mientras más grande y grueso sea, más carbono puede guardar.</p>
            <div class="mt-3">
                <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin-bottom: 15px;">
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">DAP</td><td style="padding:6px;">Grosor del tronco medido a la altura de tu pecho (1.30 m)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Altura (H)</td><td style="padding:6px;">Qué tan alto es el árbol (en metros)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Densidad</td><td style="padding:6px;">Qué tan pesada es la madera (el Merecure tiene madera dura)</td></tr>
                    <tr style="border-bottom:1px solid var(--border-color);"><td style="padding:6px; font-weight:700;">Carbono</td><td style="padding:6px;">Aproximadamente la mitad del peso del árbol es carbono guardado</td></tr>
                </table>
            </div>
            <div class="warn-box mt-2" style="font-size:0.9rem; border-left:4px solid #27ae60; padding-left:10px; color:var(--text-main); margin-top: 15px;">
                🌱 <strong>Importancia:</strong> Los árboles como el Merecure ayudan a limpiar el aire porque guardan el carbono que contamina. ¡Son como filtros naturales!
            </div>
        `,
        calendario: [
            { mes: "Dic", fase: "Flores 🌸", clima: "dry" },
            { mes: "Ene", fase: "Flores 🌸", clima: "dry" },
            { mes: "Feb", fase: "Frutitos verdes 🟢", clima: "dry" },
            { mes: "Mar", fase: "Frutos creciendo 🟢", clima: "dry" },
            { mes: "Abr", fase: "Frutos madurando 🍇", clima: "rain" },
            { mes: "May", fase: "Casi listos 🍇", clima: "rain" },
            { mes: "Jun", fase: "¡A cosechar! 🍇", clima: "rain" },
            { mes: "Jul", fase: "Caen los frutos 🍇", clima: "rain" },
            { mes: "Ago", fase: "Caen los frutos 🍇", clima: "rain" },
            { mes: "Sep", fase: "Nuevas hojitas 🌱", clima: "rain" },
            { mes: "Oct", fase: "Árbol verde 🍃", clima: "rain" },
            { mes: "Nov", fase: "Prepara flores 🌸", clima: "dry" }
        ],
        morfologia: `
            <div style="display:flex; flex-direction:column; gap:15px; font-size:0.95rem;">
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-tree"></i> ¿Cómo es el árbol?</strong> Es un árbol mediano, alcanza entre 10 y 15 metros de altura (como un edificio de 3-4 pisos). Su copa es redonda y muy frondosa, perfecta para dar sombra fresca.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-seedling"></i> Raíces:</strong> Tiene raíces profundas que le permiten agarrarse fuerte al suelo y buscar agua incluso en épocas secas. Por eso resiste tanto las inundaciones como los veranos fuertes.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-folder-open"></i> Tronco y corteza:</strong> El tronco es corto y se ramifica desde abajo. La corteza es gris y lisa. Su madera es dura, pesada y de color marrón claro.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-leaf"></i> Hojas:</strong> Sus hojas son verdes brillantes por encima y peluditas por debajo. Tienen forma ovalada, parecidas a las hojas del árbol de peras. ¡Por eso se llama "pyrifolia"!</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-spa"></i> Flores:</strong> Las flores son pequeñas, blancas y huelen muy rico. Aparecen en grupos y atraen insectos que ayudan a polinizar.</div>
                <div><strong style="color:var(--secondary-color);"><i class="fas fa-circle-notch"></i> Frutos:</strong> El fruto es grande (hasta 11 cm), verde con punticos, y por dentro tiene una pulpa amarilla deliciosa. ¡Los niños de los Llanos lo comen cuando está maduro!</div>
            </div>
        `,
        fauna: `
            <p><strong>¿Quiénes visitan al Merecure?</strong> Muchos animales disfrutan de este árbol:</p>
            <ul style="list-style: none; padding-left: 0;">
                <li style="margin-bottom: 10px;">🐦 <strong>Aves:</strong> Pájaros como tucanes, loros y guacamayas vienen a comer los frutos.</li>
                <li style="margin-bottom: 10px;">🐿️ <strong>Mamíferos:</strong> Ardillas, micos y hasta chigüiros disfrutan de sus frutos.</li>
                <li style="margin-bottom: 10px;">🐝 <strong>Insectos:</strong> Abejas y mariposas visitan las flores para tomar néctar.</li>
            </ul>
        `,
        usos: `
            <p><strong>¿Para qué sirve el Merecure?</strong></p>
            <ul style="list-style: none; padding-left: 0;">
                <li style="margin-bottom: 10px;">🏡 <strong>Sombra:</strong> Se siembra en patios y parques porque da una sombra muy fresca.</li>
                <li style="margin-bottom: 10px;">🍽️ <strong>Alimento:</strong> Los frutos se pueden comer frescos cuando están maduros.</li>
                <li style="margin-bottom: 10px;">🪵 <strong>Madera:</strong> Su madera dura sirve para hacer muebles y construcciones.</li>
                <li style="margin-bottom: 10px;">🌳 <strong>Decoración:</strong> Es muy bonito y se usa para embellecer calles y plazas.</li>
                <li style="margin-bottom: 10px;">💚 <strong>Medicina tradicional:</strong> En los Llanos, algunas personas usan partes del árbol para preparar remedios caseros.</li>
            </ul>
        `,
        mensajeIA: "¡Hola! Soy el Merecure, el árbol símbolo de los Llanos. ¿Sabías que mis hojas se parecen a las del peral? Doy rica sombra y mis frutos son deliciosos. ¡Los animales me quieren mucho!",
        quiz: [
            {
                q: "¿De dónde es originario el Merecure?",
                opts: ["De Europa", "De los Llanos de Colombia y Venezuela", "De África", "De Asia"],
                correct: 1
            },
            {
                q: "¿Qué significa 'pyrifolia' en su nombre científico?",
                opts: ["Hoja pequeña", "Hoja como de pera", "Hoja verde", "Hoja grande"],
                correct: 1
            },
            {
                q: "¿Cuándo florece el Merecure?",
                opts: ["En diciembre y enero", "En junio y julio", "En marzo y abril", "En septiembre y octubre"],
                correct: 0
            },
            {
                q: "¿Qué animal NO visita al Merecure?",
                opts: ["Pájaros", "Ardillas", "Peces", "Insectos"],
                correct: 2
            }
        ],
        referencias: [
            "Observaciones de campo - Colegio José Brunet Manrique, Maní (Casanare)",
            "Conversaciones con la comunidad local sobre usos tradicionales",
            "Material educativo adaptado para estudiantes de primaria y bachillerato"
        ]
    }
};
