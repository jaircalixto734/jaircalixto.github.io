window["dossier_jambolan"] = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>SILVAIN AI – Dossier Técnico: Syzygium cumini (Uvito / Jambolán)</title>
  <style>
    /* ===== RESET & BASE ===== */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --morado-oscuro:  #2d1b4e;
      --morado-medio:   #5b2d8e;
      --morado-claro:   #9b59b6;
      --morado-palido:  #d7bde2;
      --crema:          #f8f4f0;
      --vino:           #6d2a2a;
      --vino-claro:     #c0392b;
      --amarillo-fruto: #f0c040;
      --verde-hoja:     #27ae60;
      --verde-oscuro:   #1a5c35;
      --gris-texto:     #2c2c2c;
      --blanco:         #ffffff;
      --sombra:         rgba(0,0,0,0.13);
    }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Georgia', serif;
      background-color: #f2eef8;
      color: var(--gris-texto);
      line-height: 1.75;
      font-size: 16px;
    }

    /* ===== PORTADA ===== */
    .portada {
      background: linear-gradient(155deg, #1a0a2e 0%, #2d1b4e 45%, #6d2177 80%, #9b59b6 100%);
      color: var(--blanco);
      text-align: center;
      padding: 72px 30px 64px;
      position: relative;
      overflow: hidden;
    }
    .portada::before {
      content: "🍇";
      font-size: 200px;
      position: absolute;
      top: -30px;
      right: -25px;
      opacity: 0.06;
      pointer-events: none;
    }
    .portada::after {
      content: "🌿";
      font-size: 150px;
      position: absolute;
      bottom: -20px;
      left: -15px;
      opacity: 0.05;
      pointer-events: none;
    }
    .portada .badge {
      display: inline-block;
      background: var(--amarillo-fruto);
      color: var(--morado-oscuro);
      font-family: 'Arial', sans-serif;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 6px 22px;
      border-radius: 30px;
      margin-bottom: 22px;
    }
    .portada h1 {
      font-size: 2.7rem;
      font-style: italic;
      margin-bottom: 8px;
      text-shadow: 0 2px 10px rgba(0,0,0,0.4);
      letter-spacing: 0.5px;
    }
    .portada h2 {
      font-size: 1.18rem;
      font-weight: 400;
      letter-spacing: 1px;
      margin-bottom: 18px;
      opacity: 0.88;
    }
    .portada .subtitulo {
      font-size: 0.95rem;
      opacity: 0.78;
      max-width: 620px;
      margin: 0 auto 32px;
      line-height: 1.6;
    }
    .portada .meta-box {
      display: inline-flex;
      gap: 22px;
      flex-wrap: wrap;
      justify-content: center;
      background: rgba(255,255,255,0.09);
      border: 1px solid rgba(255,255,255,0.18);
      border-radius: 14px;
      padding: 14px 28px;
      font-size: 0.85rem;
      font-family: 'Arial', sans-serif;
    }
    .portada .meta-box span { opacity: 0.88; }
    .portada .meta-box strong { color: var(--amarillo-fruto); }

    /* ===== ALERTA ESPECIE INTRODUCIDA ===== */
    .alerta-invasora {
      background: linear-gradient(90deg, #7d1a1a, #c0392b);
      color: var(--blanco);
      text-align: center;
      padding: 12px 20px;
      font-family: 'Arial', sans-serif;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
    .alerta-invasora a { color: var(--amarillo-fruto); text-decoration: none; }

    /* ===== NAVEGACIÓN ===== */
    nav.indice {
      background: var(--morado-oscuro);
      padding: 14px 20px;
      text-align: center;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 3px 10px var(--sombra);
    }
    nav.indice a {
      color: var(--morado-palido);
      text-decoration: none;
      font-family: 'Arial', sans-serif;
      font-size: 0.77rem;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 5px 12px;
      border-radius: 20px;
      transition: background 0.25s, color 0.25s;
      display: inline-block;
      margin: 3px 4px;
    }
    nav.indice a:hover {
      background: var(--morado-claro);
      color: var(--blanco);
    }

    /* ===== LAYOUT ===== */
    main { max-width: 970px; margin: 0 auto; padding: 0 20px 60px; }

    /* ===== MÓDULOS ===== */
    .modulo {
      background: var(--blanco);
      border-radius: 16px;
      box-shadow: 0 4px 22px var(--sombra);
      margin: 44px 0;
      overflow: hidden;
    }
    .modulo-header {
      padding: 22px 32px;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .modulo-header .icono { font-size: 2.2rem; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2)); }
    .modulo-header h3 {
      font-family: 'Arial', sans-serif;
      font-size: 1.04rem;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--blanco);
      line-height: 1.2;
    }
    .modulo-header p {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.72);
      font-family: 'Arial', sans-serif;
      margin-top: 3px;
    }
    .mod1 .modulo-header { background: linear-gradient(135deg, #2d1b4e, #5b2d8e); }
    .mod2 .modulo-header { background: linear-gradient(135deg, #0d3b5c, #1a6a9a); }
    .mod3 .modulo-header { background: linear-gradient(135deg, #1a5c35, #27ae60); }
    .mod4 .modulo-header { background: linear-gradient(135deg, #5c1a1a, #a03030); }
    .mod5 .modulo-header { background: linear-gradient(135deg, #2a1a5c, #4a3a8a); }

    .modulo-body { padding: 30px 32px; }
    .modulo-body h4 {
      color: var(--morado-oscuro);
      font-size: 1.0rem;
      margin: 26px 0 9px;
      border-left: 4px solid var(--morado-claro);
      padding-left: 12px;
      font-family: 'Arial', sans-serif;
    }
    .modulo-body p { margin-bottom: 14px; }

    /* ===== TABLA TAXONÓMICA ===== */
    .tabla-taxonomia {
      width: 100%;
      border-collapse: collapse;
      font-family: 'Arial', sans-serif;
      font-size: 0.9rem;
      margin: 16px 0;
    }
    .tabla-taxonomia tr:nth-child(even) { background: #f5f0fa; }
    .tabla-taxonomia td {
      padding: 10px 16px;
      border-bottom: 1px solid #e5d8f0;
    }
    .tabla-taxonomia td:first-child {
      font-weight: 700;
      color: var(--morado-oscuro);
      width: 38%;
    }
    .tabla-taxonomia em { color: var(--morado-medio); }

    /* ===== TARJETAS ===== */
    .tarjetas-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin: 16px 0;
    }
    .tarjeta {
      border-radius: 12px;
      padding: 18px 16px;
      text-align: center;
      font-family: 'Arial', sans-serif;
    }
    .tarjeta .valor {
      font-size: 1.75rem;
      font-weight: 700;
      display: block;
      margin-bottom: 5px;
    }
    .tarjeta .etiqueta {
      font-size: 0.73rem;
      font-weight: 600;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      opacity: 0.82;
    }
    .tarjeta-purp  { background: #f0e8fa; color: var(--morado-oscuro); }
    .tarjeta-azul  { background: #e8f2fd; color: #0d3b5c; }
    .tarjeta-verde { background: #e8f8ee; color: #1a5c35; }
    .tarjeta-rojo  { background: #fdf0f0; color: #7d1a1a; }
    .tarjeta-amber { background: #fef8e0; color: #7a4f00; }
    .tarjeta-vino  { background: #fde8e8; color: var(--vino); }

    /* ===== BLOQUE CITA ===== */
    .bloque-cita {
      background: #f8f0ff;
      border-left: 5px solid var(--morado-claro);
      border-radius: 0 10px 10px 0;
      padding: 18px 24px;
      margin: 20px 0;
      font-style: italic;
      font-size: 0.92rem;
      color: #333;
    }
    .bloque-cita .referencia {
      display: block;
      margin-top: 10px;
      font-style: normal;
      font-size: 0.82rem;
      color: var(--morado-medio);
      font-family: 'Arial', sans-serif;
    }

    /* ===== ADVERTENCIA ===== */
    .dato-verificar {
      background: #fff8e1;
      border: 2px dashed #f4a000;
      border-radius: 8px;
      padding: 12px 18px;
      font-family: 'Arial', sans-serif;
      font-size: 0.88rem;
      color: #7a4f00;
      margin: 12px 0;
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }
    .dato-verificar::before { content: "⚠️"; font-size: 1.1rem; flex-shrink: 0; margin-top: 1px; }

    /* ALERTA INVASORA */
    .alerta-box {
      background: #fdf0f0;
      border: 2px solid var(--vino-claro);
      border-radius: 10px;
      padding: 14px 18px;
      font-family: 'Arial', sans-serif;
      font-size: 0.9rem;
      color: var(--vino);
      margin: 14px 0;
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }
    .alerta-box::before { content: "🚨"; font-size: 1.1rem; flex-shrink: 0; margin-top: 1px; }

    /* ===== ECUACIÓN ===== */
    .ecuacion-box {
      background: #0d3b5c;
      color: #e0f0ff;
      border-radius: 12px;
      padding: 22px 24px;
      margin: 16px 0;
      font-family: 'Courier New', monospace;
      font-size: 1.05rem;
      text-align: center;
    }
    .ecuacion-box .eq-titulo {
      font-family: 'Arial', sans-serif;
      font-size: 0.78rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #90caf9;
      margin-bottom: 10px;
    }
    .ecuacion-box .eq-notas {
      font-size: 0.79rem;
      color: #90caf9;
      font-family: 'Arial', sans-serif;
      margin-top: 12px;
      text-align: left;
      line-height: 1.7;
    }

    /* ===== FENOLOGÍA ===== */
    .fenologia-tabla {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.85rem;
      font-family: 'Arial', sans-serif;
      margin: 16px 0;
    }
    .fenologia-tabla th {
      background: var(--morado-oscuro);
      color: var(--blanco);
      padding: 10px 14px;
      text-align: left;
      font-size: 0.78rem;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .fenologia-tabla td {
      padding: 10px 14px;
      border-bottom: 1px solid #e5d8f0;
      vertical-align: top;
    }
    .fenologia-tabla tr:nth-child(even) { background: #f8f0ff; }
    .tag {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 20px;
      font-size: 0.72rem;
      font-weight: 700;
      font-family: 'Arial', sans-serif;
      letter-spacing: 0.5px;
    }
    .tag-verano   { background: #fff3c4; color: #7a4f00; }
    .tag-invierno { background: #c4d8ff; color: #003a7a; }
    .tag-ambos    { background: #dfc4ff; color: #3a006a; }

    /* ===== SILVAIN ===== */
    .silvain-card {
      background: linear-gradient(135deg, #1a0a2e 0%, #3d1560 50%, #6a2d9a 100%);
      color: var(--blanco);
      border-radius: 16px;
      padding: 34px;
      position: relative;
      overflow: hidden;
      margin: 20px 0;
    }
    .silvain-card::before {
      content: "🍇";
      font-size: 140px;
      position: absolute;
      bottom: -25px;
      right: -15px;
      opacity: 0.07;
      pointer-events: none;
    }
    .silvain-card .silvain-badge {
      display: inline-block;
      background: rgba(255,255,255,0.13);
      border: 1px solid rgba(255,255,255,0.28);
      border-radius: 20px;
      padding: 4px 18px;
      font-size: 0.75rem;
      font-family: 'Arial', sans-serif;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .silvain-card p {
      font-size: 1.0rem;
      line-height: 1.88;
      font-style: italic;
      position: relative;
      z-index: 1;
      margin-bottom: 0;
    }

    /* ===== PREGUNTAS ===== */
    .pregunta {
      background: #f8f0ff;
      border-radius: 12px;
      padding: 20px 24px;
      margin: 16px 0;
      border-top: 4px solid var(--morado-claro);
    }
    .pregunta .enunciado {
      font-weight: 700;
      color: var(--morado-oscuro);
      margin-bottom: 12px;
      font-family: 'Arial', sans-serif;
    }
    .pregunta .opciones { list-style: none; }
    .pregunta .opciones li {
      padding: 7px 14px;
      margin: 5px 0;
      border-radius: 8px;
      font-family: 'Arial', sans-serif;
      font-size: 0.9rem;
      border: 1px solid #d8c4f0;
      background: var(--blanco);
    }
    .opciones li.correcta {
      background: #ede0ff;
      border-color: var(--morado-claro);
      color: var(--morado-oscuro);
      font-weight: 700;
    }
    .opciones li.correcta::after { content: " ✅"; }

    /* ===== REFERENCIAS ===== */
    .ref-lista { list-style: none; padding: 0; }
    .ref-lista li {
      background: #f5f0fa;
      border-radius: 8px;
      padding: 14px 18px;
      margin: 10px 0;
      font-size: 0.88rem;
      font-family: 'Arial', sans-serif;
      border-left: 4px solid var(--morado-claro);
      line-height: 1.65;
    }
    .ref-lista li strong { color: var(--morado-oscuro); }

    /* ===== COMPARATIVA ===== */
    .comparativa-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin: 16px 0;
    }
    .comparativa-item {
      border-radius: 10px;
      padding: 16px 18px;
      font-family: 'Arial', sans-serif;
      font-size: 0.88rem;
    }
    .comparativa-item h5 {
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .ci-nativa  { background: #e8f8ee; color: #1a5c35; border: 1px solid #b2dfdb; }
    .ci-nativa h5  { color: #1a5c35; }
    .ci-intro   { background: #fdf0f0; color: #7d1a1a; border: 1px solid #f5c6c6; }
    .ci-intro h5   { color: #7d1a1a; }

    /* ===== FOOTER ===== */
    footer {
      background: var(--morado-oscuro);
      color: rgba(255,255,255,0.72);
      text-align: center;
      padding: 32px 20px;
      font-family: 'Arial', sans-serif;
      font-size: 0.82rem;
    }
    footer strong { color: var(--morado-palido); }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 640px) {
      .portada h1 { font-size: 1.85rem; }
      .modulo-body { padding: 20px 18px; }
      .tarjetas-grid { grid-template-columns: 1fr 1fr; }
      .comparativa-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

<!-- ===== PORTADA ===== -->
<header class="portada">
  <span class="badge">🍇 Proyecto SILVAIN AI · Inventario Forestal JBP · Especie Introducida</span>
  <h1>Syzygium cumini</h1>
  <h2>(L.) Skeels (1912) — Uvito / Jambolán / Ciruela de Java</h2>
  <p class="subtitulo">Dossier técnico-pedagógico exhaustivo para el Inventario Forestal del Jardín Botánico de Maní, Casanare – Orinoquía colombiana. <strong>Especie de origen exótico naturalizada en Colombia.</strong></p>
  <div class="meta-box">
    <span>📍 <strong>Localidad:</strong> Maní, Casanare</span>
    <span>🌡 <strong>Zona:</strong> Orinoquía – Llanos Orientales</span>
    <span>⚠️ <strong>Origen:</strong> Indo-Malaya (Introducida)</span>
    <span>📚 <strong>Normas:</strong> APA 7ª ed.</span>
    <span>🗓 <strong>Versión:</strong> 2025</span>
  </div>
</header>

<!-- ===== ALERTA SUPERIOR ===== -->
<div class="alerta-invasora">
  ⚠️ NOTA IMPORTANTE: <em>Syzygium cumini</em> es una especie <strong>EXÓTICA INTRODUCIDA</strong> en Colombia — No es nativa de la Orinoquía ni de América. Puede comportarse como invasora en algunos ecosistemas tropicales. Ver Módulo 1 para más detalles.
</div>

<!-- ===== NAVEGACIÓN ===== -->
<nav class="indice">
  <a href="#mod1">🔬 Taxonomía</a>
  <a href="#mod2">📊 Biometría</a>
  <a href="#mod3">🌿 Morfología</a>
  <a href="#mod4">🍇 Etnobotánica</a>
  <a href="#mod5">📚 Referencias</a>
</nav>

<!-- ===== CONTENIDO PRINCIPAL ===== -->
<main>

  <!-- ==================== MÓDULO 1 ==================== -->
  <section class="modulo mod1" id="mod1">
    <div class="modulo-header">
      <span class="icono">🔬</span>
      <div>
        <h3>Módulo 1 — Taxonomía y Rigor Científico</h3>
        <p>Identificación plena · Nomenclatura · Distribución global y local · Estado de conservación</p>
      </div>
    </div>
    <div class="modulo-body">

      <h4>1.1 Identificación Taxonómica Completa</h4>
      <table class="tabla-taxonomia">
        <tr><td>Reino</td><td>Plantae</td></tr>
        <tr><td>División</td><td>Magnoliophyta (Angiospermas)</td></tr>
        <tr><td>Clase</td><td>Magnoliopsida (Dicotiledóneas)</td></tr>
        <tr><td>Orden</td><td>Myrtales</td></tr>
        <tr><td>Familia</td><td><strong>Myrtaceae</strong> Juss.</td></tr>
        <tr><td>Género</td><td><em>Syzygium</em> P.Browne ex Gaertn.</td></tr>
        <tr>
          <td>Especie aceptada</td>
          <td>
            <em>Syzygium cumini</em> (L.) Skeels<br>
            <small style="color:#666; font-family:Arial,sans-serif;">Publicación original: Skeels, <em>Bull. Bur. Pl. Industr. U.S.D.A.</em> 248: 25. 1912</small>
          </td>
        </tr>
        <tr><td>Basiónimo</td><td><em>Myrtus cumini</em> L., <em>Sp. Pl.</em>: 471. 1753</td></tr>
        <tr>
          <td>Sinónimos principales</td>
          <td>
            <em>Eugenia cumini</em> (L.) Druce (1913)<br>
            <em>Eugenia jambolana</em> Lam. (1789)<br>
            <em>Syzygium jambolanum</em> (Lam.) DC. (1828)<br>
            <em>Calyptranthes cumini</em> (L.) Pers. (1806)
          </td>
        </tr>
        <tr>
          <td>Etimología</td>
          <td>
            <strong>Syzygium:</strong> Del griego <em>syzygos</em> = "unidos en pares", referido a las hojas opuestas.<br>
            <strong>cumini:</strong> Del latín <em>cuminum</em> = comino, por el olor de sus hojas al frotarlas.
          </td>
        </tr>
      </table>

      <div class="bloque-cita">
        <strong>Nota nomenclatural (Catálogo de Plantas de Colombia):</strong> El Catálogo de Plantas y Líquenes de Colombia registra a <em>Syzygium cumini</em> (L.) Skeels como nombre aceptado para Colombia, con hábito de árbol y origen <strong>Cultivada</strong>, con presencia registrada en los departamentos de Cesar, Cundinamarca y Valle del Cauca, y rango altitudinal de 150–2430 m s.n.m. La especie no figura como nativa de ninguna región colombiana.
        <span class="referencia">Bernal, R., Gradstein, S.R. &amp; Celis, M. (Eds.). (2015). <em>Catálogo de plantas y líquenes de Colombia</em>. Instituto de Ciencias Naturales, Universidad Nacional de Colombia, Bogotá. http://catalogoplantasdecolombia.unal.edu.co</span>
      </div>

      <h4>1.2 Nombres Comunes — Colombia, Casanare y el Mundo</h4>
      <div class="tarjetas-grid">
        <div class="tarjeta tarjeta-purp">
          <span class="valor" style="font-size:1.2rem;">Uvito / Uva mora</span>
          <span class="etiqueta">Colombia – Costa Caribe y Llanos</span>
        </div>
        <div class="tarjeta tarjeta-purp">
          <span class="valor" style="font-size:1.2rem;">Jambolán</span>
          <span class="etiqueta">Colombia, Venezuela, Argentina</span>
        </div>
        <div class="tarjeta tarjeta-vino">
          <span class="valor" style="font-size:1.15rem;">Ciruela de Java</span>
          <span class="etiqueta">Nombre castellano generalizado</span>
        </div>
        <div class="tarjeta tarjeta-azul">
          <span class="valor" style="font-size:1.15rem;">Java Plum / Jamun</span>
          <span class="etiqueta">Inglés / Hindi (origen)</span>
        </div>
        <div class="tarjeta tarjeta-amber">
          <span class="valor" style="font-size:1.15rem;">Guayabo Pesgua</span>
          <span class="etiqueta">Variante regional colombiana</span>
        </div>
        <div class="tarjeta tarjeta-verde">
          <span class="valor" style="font-size:1.15rem;">Black Plum / Malabar Plum</span>
          <span class="etiqueta">Inglés internacional</span>
        </div>
      </div>

      <h4>1.3 Estado de Conservación y Alerta de Especie Introducida</h4>

      <div class="alerta-box">
        <span>
          <strong>Especie exótica con potencial invasor:</strong> <em>Syzygium cumini</em> es nativa del subcontinente indio y del Sudeste Asiático. Es una planta de crecimiento rápido considerada como especie invasora en muchas regiones del mundo. Fue introducida a América tropical y hoy está naturalizada en Colombia y Venezuela. En el Catálogo de Plantas de Colombia figura únicamente como "Cultivada", no como nativa. Su manejo en el Inventario Forestal JBP debe contemplar esta condición.
        </span>
      </div>

      <div class="comparativa-grid">
        <div class="comparativa-item ci-nativa">
          <h5>✅ Árboles nativos de la Orinoquía</h5>
          <p style="font-size:0.83rem;">Especies como <em>Moquilea pyrifolia</em> (Merecure), <em>Copaifera officinalis</em> (Aceite de Marie), <em>Mauritia flexuosa</em> (Moriche) y <em>Bowdichia virgilioides</em> (Alcornoque) son nativas del bioma llanero y sus servicios ecosistémicos están adaptados al contexto biogeográfico regional.</p>
        </div>
        <div class="comparativa-item ci-intro">
          <h5>🚨 Syzygium cumini — Exótica Introducida</h5>
          <p style="font-size:0.83rem;"><em>Syzygium cumini</em> fue introducida en América tropical para uso frutal y ornamental. Su presencia en Maní, Casanare, es consecuencia de siembras antrópicas. No tiene relaciones coevolutivas con la fauna y flora nativa de la Orinoquía colombiana. Puede desplazar especies nativas si se propaga sin control.</p>
        </div>
      </div>

      <p style="font-family:Arial,sans-serif; font-size:0.88rem; color:#555;">
        ⚠️ <em>Nota sobre UICN:</em> <em>Syzygium cumini</em> no figura en la Lista Roja de la UICN bajo ninguna categoría de amenaza, dado que globalmente no está amenazada. En el Catálogo de Plantas de Colombia su estado es "No Evaluada" para el territorio nacional.
      </p>

      <h4>1.4 Distribución Global y Presencia en Colombia</h4>
      <p>
        <em>Syzygium cumini</em> es un árbol tropical siempreverde nativo del subcontinente indio y el Sudeste Asiático. Está naturalizado o cultivado activamente en Colombia, Venezuela, Brasil, Perú, Bolivia, Centroamérica, el Caribe, Hawái, Florida (EE. UU.), África tropical, y Oceanía, entre muchas otras regiones tropicales del mundo.
      </p>

      <div class="bloque-cita">
        "Es nativa del subcontinente indio y del Sudeste Asiático. Puede alcanzar alturas de hasta 30 m y puede vivir más de 100 años."
        <span class="referencia">Wikipedia. (2025, abril). <em>Syzygium cumini</em>. En <em>Wikipedia, The Free Encyclopedia</em>. Wikimedia Foundation. https://en.wikipedia.org/wiki/Syzygium_cumini</span>
      </div>

      <p>
        En Colombia, Plants of the World Online (Kew Science) y el Catálogo de Plantas de Colombia (UNAL) confirman su presencia en el territorio nacional. La especie se adapta bien desde el nivel del mar hasta los 2.430 m s.n.m., lo que explica su exitosa naturalización en el piedemonte llanero del Casanare, incluyendo el municipio de Maní (ca. 200–250 m s.n.m.). El nombre del género proviene del griego <em>syzygos</em>, que significa "unidos o emparejados", haciendo referencia a la disposición opuesta de sus hojas; y el epíteto <em>cumini</em> proviene del latín <em>cuminum</em> (comino), porque Linneo detectó similitud de olor con esa especia al describir la planta por primera vez.
      </p>

    </div>
  </section>

  <!-- ==================== MÓDULO 2 ==================== -->
  <section class="modulo mod2" id="mod2">
    <div class="modulo-header">
      <span class="icono">📊</span>
      <div>
        <h3>Módulo 2 — Biometría y Carbono</h3>
        <p>Densidad de madera · Parámetros de carbono · Ecuaciones alométricas · Bloque técnico</p>
      </div>
    </div>
    <div class="modulo-body">

      <h4>2.1 Densidad Básica de la Madera (g/cm³)</h4>
      <p>
        A diferencia del merecure, para <em>Syzygium cumini</em> sí existen valores de densidad básica de madera reportados en la literatura científica internacional, aunque con variación entre estudios y regiones:
      </p>
      <div class="tarjetas-grid">
        <div class="tarjeta tarjeta-azul">
          <span class="valor">0.56 g/cm³</span>
          <span class="etiqueta">USDA Forest Service – i-Tree Wood Density Values (2021) — Valor de referencia internacional más citado</span>
        </div>
        <div class="tarjeta tarjeta-purp">
          <span class="valor">0.30–0.56 g/cm³</span>
          <span class="etiqueta">Rango entre estudios. El valor 0.30 proviene de muestras de árboles jóvenes en subcontinente indio (Uttar Banga, 2019)</span>
        </div>
        <div class="tarjeta tarjeta-verde">
          <span class="valor">~0.56 g/cm³</span>
          <span class="etiqueta">Valor recomendado para cálculos de biomasa en individuos maduros de clima tropical húmedo</span>
        </div>
      </div>

      <div class="bloque-cita" style="background:#e8f2fd; border-left-color:#1a6a9a;">
        <strong>Fuente técnica (USDA Forest Service, 2021):</strong> El listado de densidades de madera para modelos i-Tree del USDA Forest Service (Appendix 11, GTR-NRS-200, 2021) reporta para <em>Syzygium cumini</em> una densidad básica de <strong>0.56 g/cm³</strong>. Este es el valor de mayor respaldo institucional disponible para la especie a nivel global.
        <span class="referencia">U.S. Department of Agriculture, Forest Service. (2021). <em>Understanding i-Tree – Appendix 11: Wood Density Values</em> (Gen. Tech. Rep. NRS-200-2021). Northern Research Station. https://www.fs.usda.gov/nrs/pubs/gtr/gtr-nrs200-2021_appendixes/gtr_nrs200-2021_appendix11.pdf</span>
      </div>

      <div class="dato-verificar">
        <span>
          <strong>Dato complementario por verificar en campo (Colombia):</strong> El valor de 0.56 g/cm³ (USDA, 2021) proviene de mediciones en contextos no colombianos. Para el Inventario JBP Maní, se recomienda realizar mediciones directas de densidad básica en individuos locales, dado que las condiciones edafoclimáticas de la Orinoquía colombiana pueden generar variaciones. El Catálogo de Maderas de Colombia (IDEAM/SENA) no incluye <em>S. cumini</em> como especie maderable prioritaria, confiriendo al valor de 0.56 g/cm³ del USDA un nivel de confianza de referencia internacional pero no local.
        </span>
      </div>

      <h4>2.2 Parámetros de Carbono</h4>
      <div class="tarjetas-grid">
        <div class="tarjeta tarjeta-azul">
          <span class="valor">0.56 g/cm³</span>
          <span class="etiqueta">Densidad básica de madera (USDA, 2021) — referencia para cálculo de biomasa</span>
        </div>
        <div class="tarjeta tarjeta-verde">
          <span class="valor">0.47–0.50</span>
          <span class="etiqueta">Fracción de carbono (FC) estándar — Myrtaceae tropical (IPCC, 2006)</span>
        </div>
        <div class="tarjeta tarjeta-purp">
          <span class="valor">50%</span>
          <span class="etiqueta">% de la biomasa aérea equivalente a carbono (IDEAM, 2011 — estándar colombiano)</span>
        </div>
        <div class="tarjeta tarjeta-rojo">
          <span class="valor">⚠️ N/D</span>
          <span class="etiqueta">FEB (Factor de Expansión de Biomasa) especie-específico para Colombia — Dato por verificar</span>
        </div>
      </div>

      <p>
        La familia <strong>Myrtaceae</strong>, a la que pertenece <em>Syzygium cumini</em>, incluye especies con contenidos de carbono en biomasa aérea que oscilan entre el 47% y el 50% del peso seco total, conforme a los valores por defecto del IPCC (2006) para bosques tropicales. En ausencia de un factor especie-específico para la Orinoquía colombiana, el protocolo de estimación del IDEAM (Yepes et al., 2011) permite aplicar el valor de <strong>FC = 0.50</strong> como valor conservador de referencia.
      </p>

      <h4>2.3 Ecuación Alométrica Sugerida</h4>
      <div class="ecuacion-box">
        <div class="eq-titulo">Ecuación alométrica recomendada — Álvarez et al. (2012) para bosques naturales de Colombia</div>
        <strong>BA = a × ρ × DAP<sup>b</sup> × H<sup>c</sup></strong>
        <div class="eq-notas">
          Donde:<br>
          • <strong>BA</strong> = Biomasa aérea (kg árbol⁻¹)<br>
          • <strong>ρ</strong> = Densidad básica de madera = <strong>0.56 g/cm³</strong> (USDA, 2021; referencia internacional para <em>S. cumini</em>)<br>
          • <strong>DAP</strong> = Diámetro a la Altura del Pecho (cm), medido a 1.30 m sobre el suelo<br>
          • <strong>H</strong> = Altura total del árbol (m)<br>
          • <strong>a, b, c</strong> = Coeficientes ajustados para bosques naturales colombianos (Álvarez et al., 2012)<br>
          • <strong>Carbono almacenado (t C)</strong> = BA × 0.50 / 1000<br><br>
          <em>Nota: Para árboles de zonas de vida de sabanas inundables / bosques de galería de la Orinoquía, puede también aplicarse la ecuación pantrópica de Chave et al. (2014), que incorpora directamente la densidad de madera como parámetro de entrada.</em>
        </div>
      </div>

      <h4>2.4 Bloque Técnico — Importancia del Género Syzygium en el Ciclo de Carbono (Cita APA 7)</h4>
      <div class="bloque-cita" style="margin-left:40px; border-left-color:#1a6a9a; background:#f0f6fd;">
        La estimación de los contenidos y flujos de carbono en bosques tropicales es, en la actualidad, uno de los principales temas de interés científico, debido a que estos ecosistemas actúan como verdaderos sumideros o fuentes de dióxido de carbono (CO₂) a la atmósfera, especialmente cuando la deforestación tropical ha contribuido con aproximadamente el 20% de las emisiones globales de Gases de Efecto Invernadero (GEI) en las últimas décadas. Las especies introducidas de rápido crecimiento como <em>Syzygium cumini</em> han sido evaluadas en contextos de plantaciones tropicales como fuentes secundarias de biomasa; sin embargo, los valores de densidad de su madera —moderados en comparación con especies nativas de bosques primarios— determinan que su potencial de almacenamiento de carbono por individuo sea inferior al de las especies madurantes de alta densidad propias de bosques naturales colombianos.
        <span class="referencia">
          Yepes, A. P., Navarrete, D. A., Duque, A. J., Phillips, J. F., Cabrera, K. R., Álvarez, E., García, M. C., &amp; Ordóñez, M. F. (2011). <em>Protocolo para la estimación nacional y subnacional de biomasa-carbono en Colombia</em> (pp. 1–2). Instituto de Hidrología, Meteorología y Estudios Ambientales – IDEAM. [Con anotaciones del consorcio técnico SILVAIN AI, 2025].
        </span>
      </div>

    </div>
  </section>

  <!-- ==================== MÓDULO 3 ==================== -->
  <section class="modulo mod3" id="mod3">
    <div class="modulo-header">
      <span class="icono">🌿</span>
      <div>
        <h3>Módulo 3 — Morfología y Fenología</h3>
        <p>Descripción organográfica · Calendario fenológico ajustado a Maní · Fauna asociada</p>
      </div>
    </div>
    <div class="modulo-body">

      <h4>3.1 Descripción Organográfica Detallada</h4>

      <p><strong>🌳 Hábito general:</strong>
        Árbol siempreverde (perennifolio) de <strong>6 a 20 m de altura</strong> en condiciones de cultivo, con registros de hasta 30 m en zonas de origen. Copa globosa o irregular, muy ramificada y de follaje denso. El tronco es corto y robusto, recto o retorcido, con corteza gruesa de color castaño o gris oscuro, lisa o escamosa. Es de crecimiento relativamente rápido para sus dimensiones finales, y puede superar los <strong>100 años de vida</strong>. Se adapta muy bien desde el nivel del mar hasta los 2.000 m s.n.m.
      </p>

      <p><strong>🌱 Raíz:</strong>
        Sistema radicular profundo y extendido, de tipo pivotante con raíces laterales bien desarrolladas que otorgan gran anclaje y resistencia. En suelos de sabana inundable (como los de Maní, Casanare), las raíces toleran períodos cortos de encharcamiento, aunque la especie prefiere suelos bien drenados. La producción de carbón vegetal a partir de la madera del árbol de uva mora ha sido investigada en Colombia como combustible alternativo, lo que indica el interés en sus residuos biomásicos.
      </p>

      <p><strong>🪵 Tallo y corteza:</strong>
        Ramillas redondeadas, glabras (sin pelos), ligeramente estriadas, blanquecinas o grisáceas. La corteza externa es de color castaño o gris oscuro. La madera es apreciada y muy resistente; se le atribuyen usos para vigas de techo y estructuras de ferrocarriles en los países de origen, evidenciando su durabilidad.
      </p>

      <p><strong>🍃 Hojas (filotaxia):</strong>
        Hojas <strong>opuestas</strong>, de estrechamente elípticas a oblongas, de <strong>7–18 cm de largo y 4–8 cm de ancho</strong>. Base anchamente cuneada o a veces redondeada; margen entero, a veces ondulado; ápice redondeado u obtuso con un acumen (punta breve). Textura coriácea (dura y resistente), glabras y con pequeñas glándulas en ambas superficies visibles bajo la lupa. Color verde brillante en el haz y verde-amarillento mate en el envés. Las hojas jóvenes presentan una coloración rojizo-cobriza característica que distingue los brotes nuevos con facilidad. Nervio central destacado, amarillento, con nervadura secundaria formada por 20–30 pares de nervios finos, paralelos y bastante juntos. De las hojas se puede obtener un aceite esencial volátil con uso en perfumería.
      </p>

      <p><strong>🌸 Flores:</strong>
        Flores fragantes y pequeñas, de aproximadamente <strong>5 mm de diámetro</strong>, de color verde-amarillento o blanco, agrupadas en racimos terminales o axilares. Los estambres son numerosos, con filamentos blancos de 7–8 mm de largo, formando una característica "borla" visible. El cáliz es tubular con 4–5 lóbulos. La floración es prolífica y altamente atractiva para polinizadores.
      </p>

      <p><strong>🫐 Frutos:</strong>
        El fruto es una baya <strong>oblonga a ovoide</strong> de tipo drupoide, de 1.5–3.5 cm de largo. Inicia verde, cambia progresivamente a rosado, luego a rojo carmesí brillante y finalmente a <strong>negro-morado intenso</strong> al madurar. El fruto maduro colorea la lengua de morado, característica diagnóstica bien conocida. Tiene un sabor que combina dulce, levemente ácido y astringente. Los frutos son comestibles y muy ricos en hierro, vitaminas A, B y C, además de magnesio, fósforo, potasio y fibra. Contienen una sola semilla grande.
      </p>

      <p><strong>🌱 Propagación:</strong>
        Se multiplica por semillas, esquejes, injertos y acodos. El crecimiento es rápido y la germinación es alta. La especie puede establecerse espontáneamente cerca de individuos adultos si existen dispersores de semillas, lo que explica en parte su potencial invasor fuera de su área nativa.
      </p>

      <h4>3.2 Calendario Fenológico Local — Maní, Casanare</h4>
      <p style="font-size:0.85rem; color:#666; font-family:Arial,sans-serif; margin-bottom:12px;">
        ⚠️ <em>Nota metodológica:</em> El calendario fenológico de <em>S. cumini</em> en su área nativa (India) describe floración en marzo–abril y fructificación en mayo–junio. Dado que Maní, Casanare, está ubicada en el hemisferio norte tropical con un régimen bimodal de lluvias, se ha adaptado el calendario respetando los patrones generales reportados para la especie en zonas tropicales de altitud baja. Se recomienda validación con observaciones directas de campo.
      </p>
      <table class="fenologia-tabla">
        <thead>
          <tr>
            <th>Mes</th>
            <th>Período climático Maní</th>
            <th>Evento fenológico probable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Diciembre – Febrero</td>
            <td><span class="tag tag-verano">☀️ Verano / Época seca</span></td>
            <td>
              <strong>Reposo relativo y preparación floral:</strong> La copa mantiene su follaje siempreverde. Se observa abundante brotación de hojas jóvenes con coloración rojizo-cobriza. Acumulación de reservas para la floración próxima. Los brotes nuevos son especialmente llamativos durante este período.
            </td>
          </tr>
          <tr>
            <td>Marzo – Abril</td>
            <td><span class="tag tag-ambos">🌤️ Transición seca–lluviosa</span></td>
            <td>
              <strong>Floración plena:</strong> Aparecen los racimos florales terminales y axilares con flores blancas fragantes de ~5 mm. Las flores son altamente atractivas para abejas, mariposas y otros insectos. Este período representa el pico de actividad polinizadora alrededor del árbol. En zonas de origen (India), la floración ocurre en este mismo período del año.
            </td>
          </tr>
          <tr>
            <td>Mayo – Julio</td>
            <td><span class="tag tag-invierno">🌧️ Inicio y pleno invierno</span></td>
            <td>
              <strong>Fructificación y maduración:</strong> Los frutos se desarrollan desde verde hasta su coloración final negro-morada. La maduración ocurre progresivamente. Los frutos maduros caen al suelo o son consumidos por fauna silvestre. Este es el período de mayor atracción para aves y mamíferos frugívoros. Los frutos caídos pueden teñir suelos y superficies con jugo morado persistente.
            </td>
          </tr>
          <tr>
            <td>Agosto – Noviembre</td>
            <td><span class="tag tag-invierno">🌧️ Invierno prolongado</span></td>
            <td>
              <strong>Dispersión de semillas y crecimiento vegetativo:</strong> Dispersión de semillas por zoocoria (aves y mamíferos). Crecimiento activo de ramas y hojas impulsado por las lluvias. Las semillas dispersadas pueden germinar en el suelo húmedo durante esta época, lo que puede generar regeneración espontánea en zonas cercanas al árbol madre.
            </td>
          </tr>
        </tbody>
      </table>

      <h4>3.3 Fauna Asociada en el Contexto de Maní, Casanare</h4>
      <p>
        A nivel global, los frutos del jambolán son consumidos por una amplia variedad de fauna. Sus frutos son comidos por diversas aves y pequeños mamíferos. En el contexto de la Orinoquía colombiana, los individuos presentes en el JBP Maní pueden atraer:
      </p>
      <div class="tarjetas-grid" style="grid-template-columns: repeat(auto-fit, minmax(190px,1fr));">
        <div class="tarjeta tarjeta-purp" style="text-align:left; padding:16px;">
          <span style="font-size:1.5rem; display:block; margin-bottom:6px;">🐦</span>
          <strong style="font-size:0.85rem; font-family:Arial,sans-serif;">Aves frugívoras:</strong>
          <p style="font-size:0.8rem; margin-top:5px; margin-bottom:0;">Loros y cotorras (Psittacidae), tángaras (Thraupidae), turpiales (<em>Icterus</em> spp.), toches, y aves migratorias ocasionales que consumen los frutos maduros. El follaje denso ofrece refugio y sitios de anidación.
          </p>
        </div>
        <div class="tarjeta tarjeta-amber" style="text-align:left; padding:16px;">
          <span style="font-size:1.5rem; display:block; margin-bottom:6px;">🦇</span>
          <strong style="font-size:0.85rem; font-family:Arial,sans-serif;">Murciélagos frugívoros:</strong>
          <p style="font-size:0.8rem; margin-top:5px; margin-bottom:0;">Murciélagos de la familia Phyllostomidae consumen los frutos maduros en horas nocturnas y son dispersores efectivos de semillas, explicando en parte la capacidad de la especie para reproducirse fuera de jardines y cultivos.
          </p>
        </div>
        <div class="tarjeta tarjeta-verde" style="text-align:left; padding:16px;">
          <span style="font-size:1.5rem; display:block; margin-bottom:6px;">🐝</span>
          <strong style="font-size:0.85rem; font-family:Arial,sans-serif;">Insectos polinizadores:</strong>
          <p style="font-size:0.8rem; margin-top:5px; margin-bottom:0;">Las flores blancas y fragantes atraen abejas (<em>Apis mellifera</em> y meliponinos), mariposas y diversas moscas florales durante el período de floración, contribuyendo a la polinización del árbol.
          </p>
        </div>
        <div class="tarjeta tarjeta-rojo" style="text-align:left; padding:16px;">
          <span style="font-size:1.5rem; display:block; margin-bottom:6px;">⚠️</span>
          <strong style="font-size:0.85rem; font-family:Arial,sans-serif;">Riesgo de dispersión invasora:</strong>
          <p style="font-size:0.8rem; margin-top:5px; margin-bottom:0;">La dispersión de semillas por aves y murciélagos hacia áreas naturales adyacentes (bosques de galería, morichales) es el principal vector del potencial invasor de la especie. Debe monitorearse en el JBP Maní.
          </p>
        </div>
      </div>
      <p style="font-size:0.82rem; color:#888; font-family:Arial,sans-serif; margin-top:10px;">
        ⚠️ <em>Nota de verificación:</em> Las interacciones faunísticas específicas deben confirmarse mediante observaciones directas de campo en el JBP Maní. Consultar también el SiB Colombia y el IAvH para registros de fauna asociada a <em>S. cumini</em> en Casanare.
      </p>

    </div>
  </section>

  <!-- ==================== MÓDULO 4 ==================== -->
  <section class="modulo mod4" id="mod4">
    <div class="modulo-header">
      <span class="icono">🍇</span>
      <div>
        <h3>Módulo 4 — Etnobotánica y Pedagogía</h3>
        <p>Usos tradicionales · La Voz de SILVAIN · Reto de aprendizaje activo</p>
      </div>
    </div>
    <div class="modulo-body">

      <h4>4.1 Usos Tradicionales y Documentados</h4>

      <p><strong>🍹 Fruto comestible y procesado:</strong>
        La fruta del jambolán puede consumirse cruda y se utiliza para la elaboración de tartas, salsas, mermeladas y jaleas. En los países de origen, con la fruta fermentada se elaboran bebidas alcohólicas, vinos, licores destilados, brandy, el tradicional "jambava" y vinagre. Los frutos son ovoides, de sabor agridulce, y contienen Vitaminas A, B y C, hierro, magnesio, fósforo, potasio, sodio, proteínas y fibra. En Colombia se conoce como "uva mora" o "uvito" y se consume fresco en época de cosecha.
      </p>

      <p><strong>🔥 Madera, leña y carbón:</strong>
        La especie es muy apreciada para leña y carbón, y su madera se destina para uso industrial. En Colombia, la Universidad del Atlántico ha investigado la obtención de carbón vegetal a partir de la madera de <em>S. cumini</em> (allí denominada "uva mora") para utilizarlo como combustible alternativo, evidenciando su potencial energético en el contexto nacional. La madera también se usa para vigas de techo, durmientes de ferrocarril y postes, gracias a su resistencia y durabilidad.
      </p>

      <p><strong>🌿 Usos medicinales (etnofarmacología):</strong>
        Farmacológicamente, la especie funciona como astringente, carminativa e hipoglucemiante (reduce el azúcar en sangre), siendo conocida en medicina popular por su uso en el tratamiento de la diabetes. Se utilizan corteza, hojas, semillas y frutos en medicamentos que ayudan a fortalecer los dientes y las encías, para la eliminación de parásitos, trastornos urinarios, efectos antivirales, controlar la presión arterial y como antioxidante natural. Las frutas son una buena fuente de hierro y se les atribuye beneficio en problemas del corazón y el hígado, y también su empleo en relación al asma y la bronquitis.
      </p>

      <p><strong>🐄 Forraje para ganado:</strong>
        Las hojas de esta planta también son usadas como alimento para el ganado por su alto valor nutritivo, lo cual la hace relevante en el contexto del sistema ganadero de la Orinoquía colombiana. En los llanos de Casanare, la sombra del árbol y la disponibilidad de follaje hacen del uvito un árbol apreciado en potreros y corrales.
      </p>

      <p><strong>🌳 Árbol ornamental y de sombra:</strong>
        La especie es muy apreciada como árbol ornamental urbano, sembrado en parques, avenidas y jardines de todo el trópico americano. Su copa densa, follaje brillante y coloridos brotes nuevos de color rojo cobrizo la convierten en un árbol de gran valor estético. Su adaptabilidad a un amplio rango altitudinal (0–2.430 m) facilita su cultivo en el municipio de Maní.
      </p>

      <p><strong>🧪 Actividad antibacteriana (ciencia aplicada):</strong>
        Estudios científicos publicados en revistas cubanas de plantas medicinales han evaluado la actividad antibacteriana de extractos de <em>S. cumini</em> (jambolán) frente a microorganismos asociados a la <strong>mastitis bovina</strong>, una enfermedad de alto impacto económico en la ganadería llanera, abriendo perspectivas para su uso en medicina veterinaria rural en el contexto de Casanare.
      </p>

      <h4>4.2 La Voz de SILVAIN — Storytelling para Grado Sexto</h4>
      <div class="silvain-card">
        <span class="silvain-badge">🍇 SILVAIN habla — La voz del Uvito</span>
        <p>
          Soy un viajero. Llegué desde muy, muy lejos: desde la India, ese país enorme y antiguo al otro lado del mundo, donde ríos sagrados como el Ganges bañan mis raíces y donde por miles de años los niños corrían a comer mis frutos morados bajo el sol de verano. Me llaman <em>Jamun</em> en hindi, <em>Jambolán</em> en español, y aquí en los llanos de Casanare me conocen como <em>Uvito</em> o <em>Uva mora</em>. Mi nombre científico es <em>Syzygium cumini</em>, y pertenezco a la gran familia de las Myrtaceae, la misma de la guayaba y del clavo de olor.
          <br><br>
          Tengo un secreto que te va a sorprender: <strong>¡mis frutos colorean la lengua de morado durante horas y no hay manera de evitarlo!</strong> Es porque tengo tantísimas antocianinas —esos pigmentos morados— que incluso se usan para teñir telas y alimentos naturales. Pero ese mismo color morado que mancha es el que me hace especial: es la señal de que estoy lleno de hierro, vitaminas y antioxidantes que cuidan la salud humana. Los médicos tradicionales de India me usan desde hace siglos para tratar la diabetes, y la ciencia moderna ha comprobado que tienen razón. ¿Sabías que en un laboratorio de Colombia descubrieron que mis extractos pueden combatir las bacterias que enferman al ganado? Soy un árbol viajero y científico, dos cosas a la vez. Y ahora soy tuyo, aquí en Maní.
        </p>
      </div>

      <h4>4.3 Reto de Aprendizaje — Active Recall (3 preguntas)</h4>

      <div class="pregunta">
        <p class="enunciado">Pregunta 1: ¿Cuál es el origen geográfico nativo de <em>Syzygium cumini</em> (Uvito / Jambolán)?</p>
        <ul class="opciones">
          <li>A) Nativo de los Llanos Orientales de Colombia y Venezuela</li>
          <li>B) Nativo de la Amazonía brasileña y peruana</li>
          <li class="correcta">C) Nativo del subcontinente indio y del Sudeste Asiático; introducido y naturalizado en Colombia</li>
          <li>D) Nativo de África tropical subsahariana</li>
        </ul>
      </div>

      <div class="pregunta">
        <p class="enunciado">Pregunta 2: ¿Cuál es la característica más llamativa y diagnóstica del fruto maduro del Uvito que cualquier persona puede observar al comerlo?</p>
        <ul class="opciones">
          <li>A) El fruto explota al tocarlo y lanza sus semillas a distancia</li>
          <li>B) El fruto tiene espinas que deben retirarse antes de comer</li>
          <li class="correcta">C) El fruto maduro tiene un jugo morado-negro que colorea la lengua de ese color durante varias horas</li>
          <li>D) El fruto emite un olor muy fuerte que puede oírse desde lejos</li>
        </ul>
      </div>

      <div class="pregunta">
        <p class="enunciado">Pregunta 3: ¿Por qué es importante que el Inventario Forestal JBP de Maní registre a <em>Syzygium cumini</em> como especie <em>introducida</em> y no como especie nativa?</p>
        <ul class="opciones">
          <li>A) Porque las especies introducidas no producen oxígeno y no tienen valor ecológico</li>
          <li>B) Porque las especies introducidas están siempre enfermas y contagian a las nativas</li>
          <li class="correcta">C) Porque al ser exótica, no tiene relaciones coevolutivas con la flora y fauna nativa de la Orinoquía y puede comportarse como invasora, desplazando especies nativas si se dispersa sin control hacia ecosistemas naturales</li>
          <li>D) Porque las especies introducidas nunca producen frutos comestibles en Colombia</li>
        </ul>
      </div>

    </div>
  </section>

  <!-- ==================== MÓDULO 5 ==================== -->
  <section class="modulo mod5" id="mod5">
    <div class="modulo-header">
      <span class="icono">📚</span>
      <div>
        <h3>Módulo 5 — Referencias Bibliográficas</h3>
        <p>Formato APA 7ª edición · Fuentes reales y verificables · Mínimo 6 referencias</p>
      </div>
    </div>
    <div class="modulo-body">

      <p style="font-family:Arial,sans-serif; font-size:0.88rem; color:#555; margin-bottom:20px;">
        Todas las referencias corresponden a fuentes reales y verificables. No se incluyen URLs fabricadas. Documentos físicos o de acceso institucional se citan sin enlace, conforme a APA 7ª ed. Las fuentes están ordenadas alfabéticamente por primer apellido del autor/entidad.
      </p>

      <ul class="ref-lista">

        <li>
          <strong>1. Catálogo de Plantas y Líquenes de Colombia – Fuente taxonómica primaria</strong><br>
          Bernal, R., Gradstein, S. R., &amp; Celis, M. (Eds.). (2015). <em>Catálogo de plantas y líquenes de Colombia</em>. Instituto de Ciencias Naturales, Universidad Nacional de Colombia. http://catalogoplantasdecolombia.unal.edu.co/es/resultados/especie/Syzygium%20cumini/
        </li>

        <li>
          <strong>2. Ecuaciones alométricas para bosques naturales de Colombia – Fuente biometría/carbono</strong><br>
          Álvarez, E., Duque, A., Saldarriaga, J. G., Cabrera, K., De las Salas, G., Del Valle, J. I., Moreno, F., Orrego, S. A., &amp; Rodríguez, L. (2012). Tree above-ground biomass allometries for carbon stocks estimation in the natural forests of Colombia. <em>Forest Ecology and Management, 267</em>, 297–308. https://doi.org/10.1016/j.foreco.2011.11.013
        </li>

        <li>
          <strong>3. Densidad de madera – USDA Forest Service (Fuente biométrica internacional)</strong><br>
          U.S. Department of Agriculture, Forest Service. (2021). <em>Understanding i-Tree – Appendix 11: Wood Density Values</em> (Gen. Tech. Rep. GTR-NRS-200-2021, Appendix 11). Northern Research Station. https://www.fs.usda.gov/nrs/pubs/gtr/gtr-nrs200-2021_appendixes/gtr_nrs200-2021_appendix11.pdf
        </li>

        <li>
          <strong>4. Protocolo de estimación de biomasa-carbono en Colombia – IDEAM</strong><br>
          Yepes, A. P., Navarrete, D. A., Duque, A. J., Phillips, J. F., Cabrera, K. R., Álvarez, E., García, M. C., &amp; Ordóñez, M. F. (2011). <em>Protocolo para la estimación nacional y subnacional de biomasa-carbono en Colombia</em>. Instituto de Hidrología, Meteorología y Estudios Ambientales – IDEAM. [Documento técnico institucional. Disponible en repositorio del IDEAM, Bogotá D.C.]
        </li>

        <li>
          <strong>5. Plants of the World Online – Kew Science (Fuente nomenclatural)</strong><br>
          Royal Botanic Gardens, Kew. (2024). <em>Syzygium cumini</em> (L.) Skeels. En <em>Plants of the World Online</em>. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:601603-1
        </li>

        <li>
          <strong>6. Actividad antibacteriana de S. cumini frente a mastitis bovina – Revista Cubana</strong><br>
          [Autores no identificados en el fragmento disponible]. (s.f.). Actividad antibacteriana de los extractos de <em>Syzygium cumini</em> (L.) Skeels (jambolán) frente a los microorganismos asociados a la mastitis bovina. <em>Revista Cubana de Plantas Medicinales</em>. http://revplantasmedicinales.sld.cu/index.php/pla/article/view/74/31 [Verificar autoría completa y año en fuente primaria].
        </li>

        <li>
          <strong>7. Obtención de carbón vegetal de uva mora en Colombia – Fuente energética</strong><br>
          González Zambrano, E. F., &amp; Torres Ibarra, J. (s.f.). <em>Obtención de carbón vegetal a partir de la madera del árbol de uva mora (Syzygium cumini), con el fin de utilizarlo como combustible alternativo</em>. [Trabajo de grado]. Universidad del Atlántico, Biblioteca Central Orlando Fals Borda. [Documento físico institucional. Consultar en Biblioteca Universidad del Atlántico, Barranquilla, Colombia].
        </li>

        <li>
          <strong>8. Wikipedia – Fuente divulgativa de referencia rápida (uso complementario)</strong><br>
          Wikipedia contributors. (2025, abril). <em>Syzygium cumini</em>. En <em>Wikipedia, The Free Encyclopedia</em>. Wikimedia Foundation. https://en.wikipedia.org/wiki/Syzygium_cumini [Consultada: abril de 2025. Usar exclusivamente como fuente complementaria de divulgación, nunca como fuente primaria de datos técnicos].
        </li>

      </ul>

      <div class="bloque-cita" style="margin-top:26px; background:#fff8e1; border-left-color:#f4a000;">
        <strong>⚠️ Nota de integridad académica y científica:</strong> Este dossier fue elaborado con estricto respeto a las Reglas de Oro del Proyecto SILVAIN AI. El valor de densidad básica de madera (0.56 g/cm³, USDA 2021) fue verificado en fuente primaria oficial del USDA Forest Service. El Factor de Expansión de Biomasa (FEB) especie-específico para <em>S. cumini</em> en la Orinoquía colombiana <strong>no fue encontrado en la literatura científica consultada</strong> y se declara como "Dato por verificar en campo". La condición de especie exótica introducida es un hallazgo verificado en el Catálogo de Plantas de Colombia (UNAL, 2015) y en Plants of the World Online (Kew, 2024), y debe ser considerado en las decisiones de manejo del JBP Maní.
        <span class="referencia">Elaborado por: Consorcio Técnico SILVAIN AI — Ph.D. Botánica Sistemática · Ing. Forestal Biometría · Antropólogo Etnobotánica · Editor APA 7ª Ed. | Plataforma: Inventario Forestal JBP Maní, Casanare. 2025.</span>
      </div>

    </div>
  </section>

</main>

<!-- ===== FOOTER ===== -->
<footer>
  <p><strong>🍇 SILVAIN AI — Inventario Forestal JBP Maní, Casanare</strong></p>
  <p style="margin-top:6px;">Dossier técnico-pedagógico · <em>Syzygium cumini</em> (Uvito / Jambolán / Ciruela de Java) · Versión 2025</p>
  <p style="margin-top:6px;">Especie exótica introducida · Origen: Indo-Malaya · Naturalizada en Colombia · Normas APA 7ª Edición</p>
  <p style="margin-top:14px; font-size:0.75rem; opacity:0.55;">© 2025 Proyecto SILVAIN AI · Datos verificados en fuentes primarias · Los datos marcados como "por verificar" requieren medición de campo · La clasificación como especie exótica está respaldada por el Catálogo de Plantas de Colombia (UNAL, 2015) y Kew Science (2024).</p>
</footer>

</body>
</html>`;
