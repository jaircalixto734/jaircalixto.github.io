/* ============================================================================
   CALCULADORA DE CARBONO FORESTAL - JBP MANÍ, CASANARE
   Versión 2.0 - corregida y mejorada
   ----------------------------------------------------------------------------
   Ecuaciones alométricas basadas en:
   - Álvarez et al. (2012) - Modelos de biomasa para Colombia (bs-T)
   - Chave et al. (2005, 2014) - Modelos pantrópicos
   - Goodman et al. (2013) - Palmas
   - Ramos-Escalante et al. (2018) - Palma africana
   - Schnitzer et al. (2006) - Lianas
   - Frangi & Lugo (1985), López-Galet et al. (2017/2018) - Volumétrico
   - Niklas & Tiffney (1994) - Cycas
   Factores de conversión: IPCC (2006) - factor de carbono 0.47, factor CO2 3.67
   ============================================================================ */

/* ----------------------------------------------------------------------------
   CONSTANTES GLOBALES
   ---------------------------------------------------------------------------- */
var FACTOR_CARBONO = 0.47;        // fracción de carbono en la biomasa (IPCC 2006)
var FACTOR_CO2 = 44 / 12;          // ≈ 3.67 conversión C → CO₂

/* ----------------------------------------------------------------------------
   FUNCIONES DE ECUACIONES (todas devuelven biomasa aérea en kg,
   salvo las marcadas con devuelveCarbono: true)
   ---------------------------------------------------------------------------- */

// Chave et al. (2014) pantrópica - general para cualquier dicotiledónea tropical
function chavePanTropical(dap, altura, densidad) {
    return 0.0673 * Math.pow(densidad * dap * dap * altura, 0.976);
}

// Chave et al. (2005) con densidad (modelo moist forest)
function chave2005(dap, altura, densidad) {
    return Math.exp(-2.408 + 2.040 * Math.log(dap) + 0.659 * Math.log(altura) + Math.log(densidad));
}

// Modelo potencial Colombia (Álvarez et al. 2012 - general): BA = a·ρ·DAP^b·H^c
function potencialAlvarez(dap, altura, densidad) {
    return 0.129 * densidad * Math.pow(dap, 1.913) * Math.pow(altura, 0.732);
}

// Logarítmica combinada (Álvarez et al. 2012): ln(BAS) = a + b·ln(D²·H·ρ)
function logD2HR(dap, altura, densidad) {
    return Math.exp(-2.187 + 0.916 * Math.log(dap * dap * altura * densidad));
}

// Tipo II.1 (Álvarez et al. 2012): ln(AGB) = a + b·ln(D) + c·ln(ρ)
function logTipoII(dap, altura, densidad) {
    return Math.exp(-2.187 + 2.348 * Math.log(dap) + 0.916 * Math.log(densidad));
}

// Tipo I completa (Álvarez et al. 2012): ln(Ba) = a + b·ln(D) + c·ln(H) + d·ln(ρ)
function logTipoI(dap, altura, densidad) {
    return Math.exp(-2.187 + 2.348 * Math.log(dap) + 0.659 * Math.log(altura) + 0.916 * Math.log(densidad));
}

// Polinómica logarítmica (Álvarez et al. 2012 - bosque seco tropical, R²=0.958)
function polinomicaLog(dap, altura, densidad) {
    var lnD = Math.log(dap);
    var lnRho = Math.log(densidad);
    var lnAGB = -3.652 - 1.697 * lnD + 1.169 * lnD * lnD - 0.122 * lnD * lnD * lnD + 1.285 * lnRho;
    return Math.exp(lnAGB);
}

// Arbustiva Chave et al. (2005) para DAP bajo (<10 cm)
function arbustivaChave2005(dap, altura, densidad) {
    return 0.112 * Math.pow(densidad * dap * dap * altura, 0.916);
}

// Liana Schnitzer et al. (2006)
function lianaSchnitzer(dap) {
    return 0.1208 * Math.pow(dap, 1.98);
}

// Volumétrica para palmas (Goodman et al. 2013 / Frangi & Lugo 1985)
// AGB = ρ × V, donde V = π × (D/2)² × H × f   (f = factor de forma)
function volumetricaPalma(factor) {
    return function (dap, altura, densidad) {
        var radio = (dap / 2) / 100;                  // cm → m
        var volumen = Math.PI * radio * radio * altura * factor; // m³
        return densidad * 1000 * volumen;             // g/cm³ × 1000 = kg/m³; × m³ = kg
    };
}
var volPalma075 = volumetricaPalma(0.75);
var volPalma085 = volumetricaPalma(0.85);
var volPalma0875 = volumetricaPalma(0.875);
var volPalma090 = volumetricaPalma(0.90);

// Goodman et al. (2013) - Palma de coco (solo altura)
function palmaCocoGoodman(dap, altura) {
    return 0.1281 * Math.pow(altura, 1.8899);
}

// Palma areca - Goodman multicaule
function palmaArecaGoodman(dap) {
    return Math.pow(10, -1.234 + 2.156 * Math.log10(dap));
}

// Ramos-Escalante et al. (2018) - Palma africana (devuelve CARBONO directo en kg C)
function palmaAfricanaRamos(dap, altura) {
    return 55.15 * altura + 326.96;
}

// Niklas & Tiffney (1994) adaptada para Cycas
function cicaNiklas(dap, altura) {
    return 0.15 * Math.pow(dap * dap * altura, 0.85);
}

/* ----------------------------------------------------------------------------
   HELPER para crear objetos de ecuación
   ---------------------------------------------------------------------------- */
function eq(nombre, formula, fuente, calcular, opts) {
    opts = opts || {};
    return {
        nombre: nombre,
        formula: formula,
        fuente: fuente,
        calcular: calcular,
        estado: opts.estado || 'validada',           // validada | verificar | pendiente
        usaAltura: opts.usaAltura !== undefined ? opts.usaAltura : true,
        usaDensidad: opts.usaDensidad !== undefined ? opts.usaDensidad : true,
        dapMin: opts.dapMin || null,                 // DAP mínimo para aplicar esta ecuación
        dapMax: opts.dapMax || null,                 // DAP máximo (la polinómica del bs-T solo es fiable < 12 cm)
        devuelveCarbono: opts.devuelveCarbono || false
    };
}

function eqChaveGeneral(estado) {
    return eq(
        'Chave et al. (2014) - Pantrópica (general)',
        'AGB = 0.0673 × (ρ × D² × H)^0.976',
        'Chave et al. (2014)',
        chavePanTropical,
        { estado: estado || 'validada' }
    );
}

/* ============================================================================
   BASE DE DATOS DE ESPECIES
   Densidades y ecuaciones tomadas del inventario (datos_arboles.js).
   Las notas aclaran valores que aún requieren verificación en campo.
   ============================================================================ */
var especiesCalculadora = {

    merecure: {
        nombre: 'Merecure', cientifico: 'Moquilea pyrifolia', densidad: 0.72, tipo: 'dicotiledonea',
        notas: ['Densidad referencial 0.65–0.80 g/cm³; requiere calibración local en Maní.'],
        ecuaciones: {
            especifica: eq('Álvarez et al. (2012) - Modelo Colombia', 'BA = 0.129 × ρ × DAP^1.913 × H^0.732', 'Álvarez et al. (2012)', potencialAlvarez, { estado: 'verificar' }),
            general: eqChaveGeneral()
        }
    },

    jambolan: {
        nombre: 'Jambolán', cientifico: 'Syzygium cumini', densidad: 0.56, tipo: 'dicotiledonea',
        notas: ['Densidad 0.56 g/cm³ (USDA i-Tree). Especie exótica.'],
        ecuaciones: {
            especifica: eq('Álvarez et al. (2012) - Modelo Colombia', 'BA = 0.129 × ρ × DAP^1.913 × H^0.732', 'Álvarez et al. (2012)', potencialAlvarez, { estado: 'verificar' }),
            general: eqChaveGeneral()
        }
    },

    paloCruz: {
        nombre: 'Palo Cruz', cientifico: 'Brownea ariza', densidad: 0.70, tipo: 'dicotiledonea',
        notas: ['Densidad por verificar en campo (madera dura). Se usa 0.70 como referencia.'],
        ecuaciones: {
            especifica: eq('Álvarez et al. (2012) - Modelo Colombia', 'BA = 0.129 × ρ × DAP^1.913 × H^0.732', 'Álvarez et al. (2012)', potencialAlvarez, { estado: 'verificar' }),
            general: eqChaveGeneral()
        }
    },

    almendro: {
        nombre: 'Almendro', cientifico: 'Terminalia catappa', densidad: 0.59, tipo: 'dicotiledonea',
        notas: ['Densidad 0.59 g/cm³ (rango 0.49–0.72).'],
        ecuaciones: {
            especifica: eq('Álvarez et al. (2012) - Logarítmica', 'ln(BAS) = -2.187 + 0.916·ln(D²·H·ρ)', 'Álvarez et al. (2012)', logD2HR, { estado: 'verificar' }),
            general: eqChaveGeneral()
        }
    },

    pomarrosa: {
        nombre: 'Pomarrosa', cientifico: 'Syzygium jambos', densidad: 0.675, tipo: 'dicotiledonea',
        notas: ['Densidad referencial 0.60–0.75 g/cm³; se usa 0.675.'],
        ecuaciones: {
            especifica: eq('Álvarez et al. (2012) - Tipo II.1', 'ln(AGB) = -2.187 + 2.348·ln(D) + 0.916·ln(ρ)', 'Álvarez et al. (2012)', logTipoII, { estado: 'verificar', usaAltura: false }),
            general: eqChaveGeneral()
        }
    },

    guacimo: {
        nombre: 'Guácimo', cientifico: 'Guazuma ulmifolia', densidad: 0.507, tipo: 'dicotiledonea',
        notas: ['Densidad 0.507 g/cm³ verificada en bosque seco tropical. Ecuación específica: Chave (2005) con densidad, validada para maderas de densidad media.'],
        ecuaciones: {
            especifica: eq('Chave et al. (2005) - Con densidad (moist forest)', 'BA = EXP(-2.408 + 2.040·ln(D) + 0.659·ln(H) + ln(ρ))', 'Chave et al. (2005)', chave2005, { estado: 'validada' }),
            general: eqChaveGeneral()
        }
    },

    gualanday: {
        nombre: 'Gualanday', cientifico: 'Jacaranda obtusifolia', densidad: 0.43, tipo: 'dicotiledonea',
        notas: ['Densidad ~0.43 g/cm³ estimada por género; por verificar en campo.'],
        ecuaciones: {
            especifica: eq('Álvarez et al. (2012) - Tipo I', 'ln(Ba) = -2.187 + 2.348·ln(D) + 0.659·ln(H) + 0.916·ln(ρ)', 'Álvarez et al. (2012)', logTipoI, { estado: 'verificar' }),
            general: eqChaveGeneral()
        }
    },

    palmaReal: {
        nombre: 'Palma Real', cientifico: 'Roystonea regia', densidad: 0.516, tipo: 'palma',
        notas: ['Densidad ~0.516 g/cm³ (periferia del estípite). Enfoque volumétrico (f ≈ 0.85–0.90).'],
        ecuaciones: {
            especifica: eq('Enfoque volumétrico (López-Galet et al.)', 'Biomasa = π × (D/2)² × H × 0.875 × ρ', 'López-Galet et al. (2017/2018)', volPalma0875, { estado: 'validada' })
        }
    },

    saman: {
        nombre: 'Samán', cientifico: 'Samanea saman', densidad: 0.46, tipo: 'dicotiledonea',
        notas: ['Densidad 0.46 g/cm³ (SENA/FAO).'],
        ecuaciones: {
            especifica: eq('Álvarez et al. (2012) - Tipo II.1', 'ln(BA) = -2.187 + 2.348·ln(DAP) + 0.916·ln(ρ)', 'Álvarez et al. (2012)', logTipoII, { estado: 'verificar', usaAltura: false }),
            general: eqChaveGeneral()
        }
    },

    mango: {
        nombre: 'Mango', cientifico: 'Mangifera indica', densidad: 0.61, tipo: 'dicotiledonea',
        notas: ['Densidad referencial 0.52–0.70 g/cm³; se usa 0.61.'],
        ecuaciones: {
            especifica: eq('Álvarez et al. (2012) - Tipo II.1', 'ln(AGB) = -2.187 + 2.348·ln(D) + 0.916·ln(ρ)', 'Álvarez et al. (2012)', logTipoII, { estado: 'verificar', usaAltura: false }),
            general: eqChaveGeneral()
        }
    },

    trompillo: {
        nombre: 'Trompillo', cientifico: 'Guarea guidonia', densidad: 0.515, tipo: 'dicotiledonea',
        notas: ['Densidad referencial 0.48–0.55 g/cm³ (Meliaceae); por verificar.'],
        ecuaciones: {
            especifica: eq('Álvarez et al. (2012) - Tipo II.1', 'ln(BA) = -2.187 + 2.348·ln(DAP) + 0.916·ln(ρ)', 'Álvarez et al. (2012)', logTipoII, { estado: 'verificar', usaAltura: false }),
            general: eqChaveGeneral()
        }
    },

    oiti: {
        nombre: 'Oití', cientifico: 'Licania tomentosa', densidad: 0.85, tipo: 'dicotiledonea',
        notas: ['Densidad referencial 0.75–0.95 g/cm³; se usa 0.85. Madera muy densa.'],
        ecuaciones: {
            especifica: eq('Álvarez et al. (2012) - Tipo I', 'ln(Ba) = -2.187 + 2.348·ln(D) + 0.659·ln(H) + 0.916·ln(ρ)', 'Álvarez et al. (2012)', logTipoI, { estado: 'verificar' }),
            general: eqChaveGeneral()
        }
    },

    noni: {
        nombre: 'Noni', cientifico: 'Morinda citrifolia', densidad: 0.47, tipo: 'dicotiledonea',
        notas: ['Densidad referencial 0.40–0.54 g/cm³. Ecuación general Chave (2014) aplicable a cualquier DAP > 5 cm.'],
        ecuaciones: {
            especifica: eqChaveGeneral(),
            arbustiva: eq('Chave et al. (2005) - Arbustos (DAP < 5 cm)', 'BA = 0.112 × (ρ × DAP² × H)^0.916', 'Chave et al. (2005)', arbustivaChave2005, { estado: 'validada', dapMax: 5 })
        }
    },

    caracaro: {
        nombre: 'Caracaro', cientifico: 'Enterolobium cyclocarpum', densidad: 0.47, tipo: 'dicotiledonea',
        notas: ['Densidad referencial 0.34–0.60 g/cm³; se usa 0.47.'],
        ecuaciones: {
            especifica: eq('Álvarez et al. (2012) - Logarítmica', 'ln(BAS) = -2.187 + 0.916·ln(D²·H·ρ)', 'Álvarez et al. (2012)', logD2HR, { estado: 'verificar' }),
            general: eqChaveGeneral()
        }
    },

    maizTostado: {
        nombre: 'Maíz Tostado', cientifico: 'Coccoloba acuminata', densidad: 0.70, tipo: 'dicotiledonea',
        notas: ['Densidad referencial 0.60–0.80 g/cm³; se usa 0.70.'],
        ecuaciones: {
            especifica: eq('Chave et al. (2005) - Con densidad', 'BA = EXP(-2.408 + 2.040·ln(D) + 0.659·ln(H) + ln(ρ))', 'Chave et al. (2005)', chave2005, { estado: 'validada' }),
            general: eqChaveGeneral()
        }
    },

    guayaba: {
        nombre: 'Guayaba', cientifico: 'Psidium guajava', densidad: 0.65, tipo: 'dicotiledonea',
        notas: ['Densidad recomendada 0.65 g/cm³ (rango amplio 0.27–0.92).'],
        ecuaciones: {
            especifica: eq('Chave et al. (2005) - Con densidad', 'BA = EXP(-2.408 + 2.040·ln(D) + 0.659·ln(H) + ln(ρ))', 'Chave et al. (2005)', chave2005, { estado: 'validada' }),
            general: eqChaveGeneral()
        }
    },

    florMorado: {
        nombre: 'Flor Morado', cientifico: 'Tabebuia rosea', densidad: 0.54, tipo: 'dicotiledonea',
        notas: ['Densidad 0.54 g/cm³ verificada (IDEAM/CTCM SENNOVA).'],
        ecuaciones: {
            especifica: eq('Chave et al. (2005) - Con densidad', 'BA = EXP(-2.408 + 2.040·ln(D) + 0.659·ln(H) + ln(ρ))', 'Chave et al. (2005)', chave2005, { estado: 'validada' }),
            general: eqChaveGeneral()
        }
    },

    mamoncillo: {
        nombre: 'Mamoncillo', cientifico: 'Melicoccus bijugatus', densidad: 0.70, tipo: 'dicotiledonea',
        notas: ['Densidad ~0.70 g/cm³ estimada (Sapindaceae); por verificar.'],
        ecuaciones: {
            especifica: eq('Álvarez et al. (2012) - Tipo II.1', 'BA = EXP(-2.187 + 2.348·ln(DAP) + 0.916·ln(ρ))', 'Álvarez et al. (2012)', logTipoII, { estado: 'verificar', usaAltura: false }),
            general: eqChaveGeneral()
        }
    },

    limoncillo: {
        nombre: 'Limoncillo', cientifico: 'Swinglea glutinosa', densidad: 0.675, tipo: 'dicotiledonea',
        notas: ['Densidad ~0.60–0.75 g/cm³ estimada (Rutaceae). Ecuación específica válida para DAP ≥ 10 cm.'],
        ecuaciones: {
            especifica: eq('Álvarez et al. (2012) - Tipo II.1', 'BA = EXP(-2.187 + 2.348·ln(DAP) + 0.916·ln(ρ))', 'Álvarez et al. (2012)', logTipoII, { estado: 'verificar', usaAltura: false, dapMin: 10 }),
            arbustiva: eq('Chave et al. (2005) - Arbustos (DAP < 10 cm)', 'BA = 0.112 × (ρ × DAP² × H)^0.916', 'Chave et al. (2005)', arbustivaChave2005, { estado: 'validada' }),
            general: eqChaveGeneral()
        }
    },

    palmaAreca: {
        nombre: 'Palma Areca', cientifico: 'Dypsis lutescens', densidad: 0.35, tipo: 'palma',
        notas: ['Densidad 0.30–0.40 g/cm³; se usa 0.35. Palma multicaule: se recomienda la ecuación volumétrica.'],
        ecuaciones: {
            especifica: eq('Volumétrica multicaule (recomendada)', 'BAS = ρ × π × (DAP/2)² × H × 0.75', 'Frangi & Lugo (1985)', volPalma075, { estado: 'validada' }),
            alternativa: eq('Goodman et al. (2013)', 'BAS = 10^(-1.234 + 2.156·log₁₀(DAP))', 'Goodman et al. (2013)', palmaArecaGoodman, { estado: 'verificar', usaAltura: false, usaDensidad: false })
        }
    },

    palmaCoco: {
        nombre: 'Palma de Coco', cientifico: 'Cocos nucifera', densidad: 0.47, tipo: 'palma',
        notas: ['Densidad periferia 0.60–0.90, centro 0.20–0.40; se usa 0.47.'],
        ecuaciones: {
            especifica: eq('Goodman et al. (2013) - Solo altura', 'AGB = 0.1281 × H^1.8899', 'Goodman et al. (2013)', palmaCocoGoodman, { estado: 'validada', usaAltura: true, usaDensidad: false }),
            general: eq('Modelo volumétrico palmas', 'AGB = ρ × π × (DAP/2)² × H × 0.85', 'Yepes et al. (2011) / IDEAM', volPalma085, { estado: 'validada' })
        }
    },

    palmaAfricana: {
        nombre: 'Palma Africana', cientifico: 'Elaeis guineensis', densidad: 0.40, tipo: 'palma',
        notas: ['La ecuación específica estima el CARBONO directo (kg C). Densidad 0.20–0.60; se usa 0.40 como valor medio.'],
        ecuaciones: {
            especifica: eq('Ramos-Escalante et al. (2018)', 'CAP = 55.15 × Altura + 326.96 (kg C)', 'Ramos-Escalante et al. (2018)', palmaAfricanaRamos, { estado: 'validada', usaAltura: true, usaDensidad: false, devuelveCarbono: true }),
            general: eq('Modelo volumétrico palmas', 'AGB = ρ × π × (DAP/2)² × H × 0.90', 'Enfoque volumétrico', volPalma090, { estado: 'validada' })
        }
    },

    adelfaAmarilla: {
        nombre: 'Adelfa Amarilla', cientifico: 'Cascabela thevetia', densidad: 0.46, tipo: 'dicotiledonea',
        notas: ['⚠️ Especie TÓXICA. Densidad ~0.38–0.55 g/cm³ estimada. Para DAP < 10 cm se aplica automáticamente la ecuación arbustiva.'],
        ecuaciones: {
            especifica: eq('Chave et al. (2005) - Con densidad', 'BA = EXP(-2.408 + 2.040·ln(D) + 0.659·ln(H) + ln(ρ))', 'Chave et al. (2005)', chave2005, { estado: 'validada', dapMin: 10 }),
            arbustiva: eq('Chave et al. (2014) - Arbustos (DAP < 10 cm)', 'AGB = 0.0673 × (ρ × D² × H)^0.976', 'Chave et al. (2014)', chavePanTropical, { estado: 'validada' }),
            general: eqChaveGeneral()
        }
    },

    cica: {
        nombre: 'Cica', cientifico: 'Cycas revoluta', densidad: 0.516, tipo: 'gimnosperma',
        notas: ['⚠️ Especie TÓXICA. Coeficientes provisionales; no aplica DAP convencional. Usar solo como estimación preliminar.'],
        ecuaciones: {
            especifica: eq('Niklas & Tiffney (1994) adaptada', 'AGB ≈ 0.15 × (D² × H)^0.85', 'Niklas & Tiffney (1994)', cicaNiklas, { estado: 'verificar' })
        }
    },

    vanarena: {
        nombre: 'Vanarena', cientifico: 'Bougainvillea spectabilis', densidad: 0.61, tipo: 'liana',
        notas: ['Si el individuo es claramente trepador/liana, usa la ecuación alternativa de Schnitzer.'],
        ecuaciones: {
            especifica: eq('Chave et al. (2005) - Con densidad (tronco definido)', 'BA = EXP(-2.408 + 2.040·ln(D) + 0.659·ln(H) + ln(ρ))', 'Chave et al. (2005)', chave2005, { estado: 'validada' }),
            alternativa: eq('Schnitzer et al. (2006) - Liana', 'AGB_liana = 0.1208 × DAP^1.98', 'Schnitzer et al. (2006)', lianaSchnitzer, { estado: 'validada', usaAltura: false, usaDensidad: false }),
            general: eqChaveGeneral()
        }
    },

    leucaena: {
        nombre: 'Leucaena', cientifico: 'Leucaena leucocephala', densidad: 0.515, tipo: 'dicotiledonea',
        notas: ['Densidad ~0.50–0.65 g/cm³ estimada. Especie exótica con potencial invasor.'],
        ecuaciones: {
            especifica: eq('Álvarez et al. (2012) - Silvopastoril (bs-T)', 'ln(AGB) = -2.187 + 2.348·ln(DAP) + 0.916·ln(ρ)', 'Álvarez et al. (2012)', logTipoII, { estado: 'validada', usaAltura: false }),
            general: eqChaveGeneral()
        }
    },

    guamo: {
        nombre: 'Guamo', cientifico: 'Inga edulis', densidad: 0.50, tipo: 'dicotiledonea',
        notas: ['Densidad ~0.45–0.55 g/cm³ estimada por género; por verificar.'],
        ecuaciones: {
            especifica: eq('Chave et al. (2005) - Con densidad', 'BA = EXP(-2.408 + 2.040·ln(D) + 0.659·ln(H) + ln(ρ))', 'Chave et al. (2005)', chave2005, { estado: 'validada' }),
            general: eqChaveGeneral()
        }
    },

    araguaney: {
        nombre: 'Flor Amarillo (Araguaney)', cientifico: 'Handroanthus chrysanthus', densidad: 0.96, tipo: 'dicotiledonea',
        notas: ['Madera muy densa (0.85–1.04 g/cm³); se usa 0.96. Almacena más carbono por m³ que el promedio.'],
        ecuaciones: {
            especifica: eq('Chave et al. (2005) - Con densidad', 'BA = EXP(-2.408 + 2.040·ln(D) + 0.659·ln(H) + ln(ρ))', 'Chave et al. (2005)', chave2005, { estado: 'validada' }),
            general: eqChaveGeneral()
        }
    }
};

/* ============================================================================
   GENERACIÓN DEL PROCEDIMIENTO PASO A PASO
   Genera un array de strings con el desglose pedagógico del cálculo.
   ============================================================================ */
function generarProcedimiento(dap, altura, densidad, especie, ecuacion, biomasa, carbono, co2eq) {
    var D = dap, H = altura, rho = densidad;
    var pasos = [];

    pasos.push('Especie seleccionada: ' + especie.nombre + ' (' + especie.cientifico + ')');
    pasos.push('Datos de entrada: DAP = ' + D + ' cm · Altura = ' + H + ' m · Densidad de madera ρ = ' + rho + ' g/cm³');
    pasos.push('Ecuación aplicada: ' + ecuacion.nombre);
    pasos.push('Fórmula: ' + ecuacion.formula);

    var sustitucion = '';
    var intermedio = '';
    var lnVal = 0;

    // Identificar la ecuación por referencia de función
    if (ecuacion.calcular === chavePanTropical) {
        var f1 = rho * D * D * H;
        sustitucion = 'BA = 0.0673 × (ρ × D² × H)^0.976 = 0.0673 × (' + rho + ' × ' + D + '² × ' + H + ')^0.976 = 0.0673 × (' + f1.toFixed(2) + ')^0.976';
        intermedio = 'BA = 0.0673 × ' + Math.pow(f1, 0.976).toFixed(2) + ' = ' + biomasa.toFixed(2) + ' kg';
    } else if (ecuacion.calcular === chave2005) {
        sustitucion = 'ln(BA) = -2.408 + 2.040·ln(' + D + ') + 0.659·ln(' + H + ') + ln(' + rho + ')';
        lnVal = -2.408 + 2.040 * Math.log(D) + 0.659 * Math.log(H) + Math.log(rho);
        intermedio = 'ln(BA) = ' + lnVal.toFixed(4) + ' → BA = e^' + lnVal.toFixed(4) + ' = ' + biomasa.toFixed(2) + ' kg';
    } else if (ecuacion.calcular === potencialAlvarez) {
        var dExp = Math.pow(D, 1.913), hExp = Math.pow(H, 0.732);
        sustitucion = 'BA = 0.129 × ' + rho + ' × ' + D + '^1.913 × ' + H + '^0.732';
        intermedio = 'BA = 0.129 × ' + rho + ' × ' + dExp.toFixed(2) + ' × ' + hExp.toFixed(2) + ' = ' + biomasa.toFixed(2) + ' kg';
    } else if (ecuacion.calcular === logD2HR) {
        var v1 = D * D * H * rho;
        sustitucion = 'ln(BAS) = -2.187 + 0.916·ln(D²·H·ρ) = -2.187 + 0.916·ln(' + D + '²·' + H + '·' + rho + ') = -2.187 + 0.916·ln(' + v1.toFixed(2) + ')';
        lnVal = -2.187 + 0.916 * Math.log(v1);
        intermedio = 'ln(BAS) = ' + lnVal.toFixed(4) + ' → BAS = e^' + lnVal.toFixed(4) + ' = ' + biomasa.toFixed(2) + ' kg';
    } else if (ecuacion.calcular === logTipoII) {
        sustitucion = 'ln(BA) = -2.187 + 2.348·ln(' + D + ') + 0.916·ln(' + rho + ')';
        lnVal = -2.187 + 2.348 * Math.log(D) + 0.916 * Math.log(rho);
        intermedio = 'ln(BA) = ' + lnVal.toFixed(4) + ' → BA = e^' + lnVal.toFixed(4) + ' = ' + biomasa.toFixed(2) + ' kg';
    } else if (ecuacion.calcular === logTipoI) {
        sustitucion = 'ln(Ba) = -2.187 + 2.348·ln(' + D + ') + 0.659·ln(' + H + ') + 0.916·ln(' + rho + ')';
        lnVal = -2.187 + 2.348 * Math.log(D) + 0.659 * Math.log(H) + 0.916 * Math.log(rho);
        intermedio = 'ln(Ba) = ' + lnVal.toFixed(4) + ' → Ba = e^' + lnVal.toFixed(4) + ' = ' + biomasa.toFixed(2) + ' kg';
    } else if (ecuacion.calcular === polinomicaLog) {
        var lnD = Math.log(D), lnRho = Math.log(rho);
        sustitucion = 'ln(AGB) = -3.652 - 1.697·ln(' + D + ') + 1.169·[ln(' + D + ')]² - 0.122·[ln(' + D + ')]³ + 1.285·ln(' + rho + ')';
        lnVal = -3.652 - 1.697 * lnD + 1.169 * lnD * lnD - 0.122 * lnD * lnD * lnD + 1.285 * lnRho;
        intermedio = 'ln(AGB) = ' + lnVal.toFixed(4) + ' → AGB = e^' + lnVal.toFixed(4) + ' = ' + biomasa.toFixed(2) + ' kg';
    } else if (ecuacion.calcular === arbustivaChave2005) {
        var f2 = rho * D * D * H;
        sustitucion = 'BA = 0.112 × (ρ × D² × H)^0.916 = 0.112 × (' + f2.toFixed(2) + ')^0.916';
        intermedio = 'BA = 0.112 × ' + Math.pow(f2, 0.916).toFixed(2) + ' = ' + biomasa.toFixed(2) + ' kg';
    } else if (ecuacion.calcular === lianaSchnitzer) {
        sustitucion = 'AGB = 0.1208 × DAP^1.98 = 0.1208 × ' + D + '^1.98';
        intermedio = 'AGB = 0.1208 × ' + Math.pow(D, 1.98).toFixed(2) + ' = ' + biomasa.toFixed(2) + ' kg';
    } else if (ecuacion.calcular === palmaCocoGoodman) {
        sustitucion = 'AGB = 0.1281 × H^1.8899 = 0.1281 × ' + H + '^1.8899';
        intermedio = 'AGB = 0.1281 × ' + Math.pow(H, 1.8899).toFixed(2) + ' = ' + biomasa.toFixed(2) + ' kg';
    } else if (ecuacion.calcular === palmaArecaGoodman) {
        sustitucion = 'BAS = 10^(-1.234 + 2.156·log₁₀(' + D + '))';
        var logVal = -1.234 + 2.156 * Math.log10(D);
        intermedio = 'BAS = 10^' + logVal.toFixed(4) + ' = ' + biomasa.toFixed(2) + ' kg';
    } else if (ecuacion.calcular === palmaAfricanaRamos) {
        sustitucion = 'CAP = 55.15 × ' + H + ' + 326.96 = ' + (55.15 * H).toFixed(2) + ' + 326.96';
        intermedio = 'CAP = ' + carbono.toFixed(2) + ' kg C (directamente)';
    } else if (ecuacion.calcular === cicaNiklas) {
        var f3 = D * D * H;
        sustitucion = 'AGB ≈ 0.15 × (D² × H)^0.85 = 0.15 × (' + f3.toFixed(2) + ')^0.85';
        intermedio = 'AGB = 0.15 × ' + Math.pow(f3, 0.85).toFixed(2) + ' = ' + biomasa.toFixed(2) + ' kg';
    } else {
        // Volumétrica para palmas (factor genérico)
        var radio = (D / 2) / 100;
        var vol = Math.PI * radio * radio * H; // m³ sin factor
        sustitucion = 'V = π × (D/2)² × H = π × (' + radio.toFixed(3) + ')² × ' + H + ' = ' + vol.toFixed(3) + ' m³ (× factor de forma)';
        intermedio = 'BA = ρ × 1000 × V × f = ' + rho + ' × 1000 × ' + vol.toFixed(3) + ' × f = ' + biomasa.toFixed(2) + ' kg';
    }

    if (sustitucion) pasos.push('Sustitución: ' + sustitucion);
    pasos.push('Cálculo: ' + intermedio);

    // Pasos finales de conversión
    if (ecuacion.devuelveCarbono) {
        pasos.push('Esta ecuación estima directamente el CARBONO: C = ' + carbono.toFixed(2) + ' kg C');
        pasos.push('Biomasa inferida: BA = C / 0.47 = ' + carbono.toFixed(2) + ' / 0.47 = ' + biomasa.toFixed(2) + ' kg');
    } else {
        pasos.push('Carbono almacenado: C = BA × 0.47 = ' + biomasa.toFixed(2) + ' × 0.47 = ' + carbono.toFixed(2) + ' kg C');
    }
    pasos.push('CO₂ equivalente: CO₂e = C × 3.67 = ' + carbono.toFixed(2) + ' × 3.67 = ' + co2eq.toFixed(2) + ' kg CO₂e');

    return pasos;
}

/* ============================================================================
   FUNCIONES PRINCIPALES
   ============================================================================ */
function calcularBiomasa(especieId, dap, altura, tipoEcuacion) {
    tipoEcuacion = tipoEcuacion || 'especifica';
    var especie = especiesCalculadora[especieId];
    if (!especie) throw new Error('Especie "' + especieId + '" no encontrada.');

    dap = parseFloat(dap);
    altura = parseFloat(altura);
    if (!isFinite(dap) || dap <= 0) throw new Error('El DAP debe ser un número mayor que 0.');
    if (!isFinite(altura) || altura <= 0) throw new Error('La altura debe ser un número mayor que 0.');

    var advertencias = [];
    var ecuacion;

    if (tipoEcuacion === 'alternativa' && especie.ecuaciones.alternativa) {
        ecuacion = especie.ecuaciones.alternativa;
    } else if (tipoEcuacion === 'arbustiva' && especie.ecuaciones.arbustiva) {
        ecuacion = especie.ecuaciones.arbustiva;
    } else if (tipoEcuacion === 'general' && especie.ecuaciones.general) {
        ecuacion = especie.ecuaciones.general;
    } else {
        ecuacion = especie.ecuaciones.especifica;
        // Si el DAP está por debajo del mínimo y hay ecuación arbustiva, se aplica automáticamente.
        if (ecuacion && ecuacion.dapMin && dap < ecuacion.dapMin && especie.ecuaciones.arbustiva) {
            advertencias.push('DAP menor a ' + ecuacion.dapMin + ' cm: se aplicó automáticamente la ecuación arbustiva.');
            ecuacion = especie.ecuaciones.arbustiva;
        }
        // Si el DAP está por encima del máximo (polinómica bs-T poco fiable para árboles grandes),
        // caer automáticamente a la ecuación general de Chave (2014).
        if (ecuacion && ecuacion.dapMax && dap > ecuacion.dapMax && especie.ecuaciones.general) {
            advertencias.push('DAP mayor a ' + ecuacion.dapMax + ' cm: la ecuación específica pierde precisión en árboles grandes, se aplicó automáticamente la ecuación general de Chave et al. (2014).');
            ecuacion = especie.ecuaciones.general;
        }
    }

    if (!ecuacion) throw new Error('Esta especie no tiene ecuaciones disponibles.');
    if (ecuacion.estado === 'pendiente') {
        throw new Error('La ecuación "' + ecuacion.nombre + '" está pendiente de validación.');
    }
    if (ecuacion.estado === 'verificar') {
        advertencias.push('Los coeficientes de esta ecuación están marcados para verificación en campo. Úsala como estimación preliminar.');
    }
    if (ecuacion.usaAltura === false) {
        advertencias.push('Esta ecuación no utiliza la altura; el valor ingresado se ignora en el cálculo.');
    }
    if (ecuacion.usaDensidad === false) {
        advertencias.push('Esta ecuación no utiliza la densidad de madera.');
    }

    var densidad = especie.densidad;
    var resultado = ecuacion.calcular(dap, altura, densidad);
    if (!isFinite(resultado) || resultado <= 0) {
        throw new Error('La ecuación produjo un valor inválido. Revisa los datos ingresados.');
    }

    var biomasa, carbono;
    if (ecuacion.devuelveCarbono) {
        carbono = resultado;
        biomasa = carbono / FACTOR_CARBONO;
        advertencias.push('Esta ecuación estima directamente el carbono (kg C); la biomasa se calculó dividiendo entre 0.47.');
    } else {
        biomasa = resultado;
        carbono = biomasa * FACTOR_CARBONO;
    }
    var co2Equivalente = carbono * FACTOR_CO2;

    // Generar procedimiento paso a paso
    var procedimiento = generarProcedimiento(dap, altura, densidad, especie, ecuacion, biomasa, carbono, co2Equivalente);

    return {
        biomasa: biomasa,
        carbono: carbono,
        co2Equivalente: co2Equivalente,
        especie: especie.nombre,
        cientifico: especie.cientifico,
        densidad: densidad,
        ecuacionUsada: ecuacion.nombre,
        formula: ecuacion.formula,
        fuente: ecuacion.fuente,
        tipoEcuacion: tipoEcuacion,
        dap: dap,
        altura: altura,
        advertencias: advertencias,
        procedimiento: procedimiento
    };
}

/* ----------------------------------------------------------------------------
   EQUIVALENCIAS - valores ajustados a referencias reales:
   - Auto promedio: 0.25 kg CO₂/km (flota mixta Colombia/Latam)
   - O₂ humano: 0.84 kg O₂/día/persona (actividad moderada)
   - Foco LED 10W × 24h = 0.24 kWh/día × 0.18 kg CO₂/kWh (grid Colombia) = 0.043 kg CO₂/día
   - Botella PET 500ml: ~0.082 kg CO₂ por producción+transporte
   - Carga smartphone: ~0.0083 kg CO₂ (13.7 Wh × 0.6 kg/kWh)
   - Árbol joven promedio: 21.77 kg CO₂/año (EPA) → 5.9 kg C/año → 59 kg C en 10 años
   ---------------------------------------------------------------------------- */
function calcularEquivalencias(kgCarbono) {
    var kgCO2 = kgCarbono * FACTOR_CO2;
    var kgOxigeno = kgCarbono * 2.67; // estequiometría fotosíntesis: 12g C → 32g O₂
    return {
        kmAuto: kgCO2 / 0.25,
        kgOxigeno: kgOxigeno,
        personasDiaOxigeno: kgOxigeno / 0.84,
        diasFocoLED: kgCO2 / 0.043,
        botellasPlastico: kgCO2 / 0.082,
        cargasSmartphone: kgCO2 / 0.0083,
        arbolesJovenes10Anios: kgCarbono / 59
    };
}

function obtenerListaEspecies() {
    return Object.keys(especiesCalculadora).map(function (id) {
        return {
            id: id,
            nombre: especiesCalculadora[id].nombre,
            cientifico: especiesCalculadora[id].cientifico,
            densidad: especiesCalculadora[id].densidad,
            tipo: especiesCalculadora[id].tipo
        };
    });
}

function obtenerEcuacionesEspecie(especieId) {
    var especie = especiesCalculadora[especieId];
    if (!especie) return null;
    var orden = ['especifica', 'alternativa', 'arbustiva', 'general'];
    var salida = {};
    orden.forEach(function (tipo) {
        if (especie.ecuaciones[tipo]) {
            salida[tipo] = especie.ecuaciones[tipo];
        }
    });
    return salida;
}

/* ============================================================================
   INICIALIZACIÓN DE LA INTERFAZ
   ============================================================================ */
function fmt(n) {
    if (n === undefined || n === null || !isFinite(n)) return '—';
    if (Math.abs(n) >= 1000) {
        return n.toLocaleString('es-CO', { maximumFractionDigits: 0 });
    }
    return n.toLocaleString('es-CO', { maximumFractionDigits: 2 });
}

/* Animación suave de conteo para el número principal */
function animateValue(element, start, end, duration) {
    if (!element) return;
    var range = end - start;
    var startTime = performance.now();
    function update(currentTime) {
        var elapsed = currentTime - startTime;
        var progress = Math.min(elapsed / duration, 1);
        var easeOutQuart = 1 - Math.pow(1 - progress, 4);
        var current = start + (range * easeOutQuart);
        element.textContent = fmt(current);
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

function initCalculadora() {
    var especieSel = document.getElementById('especie');
    var ecuacionSel = document.getElementById('ecuacion');
    var dapInput = document.getElementById('dap');
    var alturaInput = document.getElementById('altura');
    var form = document.getElementById('form-calculadora');
    var resultado = document.getElementById('resultado');
    var equivalencias = document.getElementById('equivalencias');
    var advertenciasBox = document.getElementById('advertencias');
    var notasBox = document.getElementById('notas-especie');
    var procedimientoBox = document.getElementById('res-procedimiento');
    var btnCalcular = document.querySelector('.btn-calc');

    if (!especieSel || !form) return; // no estamos en la página de la calculadora

    // Cargar especies
    var especies = obtenerListaEspecies();
    especieSel.innerHTML = '<option value="">Selecciona una especie...</option>';
    especies.forEach(function (e) {
        var opt = document.createElement('option');
        opt.value = e.id;
        opt.textContent = e.nombre + ' (' + e.cientifico + ')';
        especieSel.appendChild(opt);
    });

    function actualizarEcuaciones() {
        var id = especieSel.value;
        ecuacionSel.innerHTML = '';
        if (!id) {
            ecuacionSel.innerHTML = '<option value="">Primero selecciona una especie</option>';
            return;
        }
        var ecs = obtenerEcuacionesEspecie(id);
        var etiquetas = {
            especifica: 'Específica (recomendada)',
            alternativa: 'Alternativa',
            arbustiva: 'Arbustiva (DAP bajo)',
            general: 'General'
        };
        Object.keys(ecs).forEach(function (tipo, i) {
            var opt = document.createElement('option');
            opt.value = tipo;
            opt.textContent = (etiquetas[tipo] || tipo) + ': ' + ecs[tipo].nombre;
            if (i === 0) opt.selected = true;
            ecuacionSel.appendChild(opt);
        });
    }

    function mostrarNotasEspecie() {
        var id = especieSel.value;
        if (!id) { if (notasBox) notasBox.innerHTML = ''; return; }
        var sp = especiesCalculadora[id];
        if (notasBox) notasBox.innerHTML = (sp.notas || []).map(function (n) { return '<li>' + n + '</li>'; }).join('');
    }

    especieSel.addEventListener('change', function () {
        actualizarEcuaciones();
        mostrarNotasEspecie();
    });

    form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        try {
            var id = especieSel.value;
            if (!id) throw new Error('Selecciona una especie.');
            var tipo = ecuacionSel.value || 'especifica';
            var dapVal = dapInput.value;
            var altVal = alturaInput.value;

            if (!dapVal || !altVal) throw new Error('Ingresa el DAP y la altura del árbol.');
            if (parseFloat(dapVal) <= 0 || parseFloat(altVal) <= 0) {
                throw new Error('El DAP y la altura deben ser mayores que cero.');
            }

            // Estado de carga en el botón
            if (btnCalcular) {
                btnCalcular.disabled = true;
                btnCalcular.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Procesando...';
            }

            // Pequeña demora para que se vea el estado de procesamiento (UX)
            setTimeout(function () {
                try {
                    var res = calcularBiomasa(id, dapVal, altVal, tipo);

                    // Resultado principal con animación
                    animateValue(document.getElementById('res-co2'), 0, res.co2Equivalente, 1200);

                    // Biomasa y carbono (formato directo)
                    document.getElementById('res-biomasa').textContent = fmt(res.biomasa);
                    document.getElementById('res-carbono').textContent = fmt(res.carbono);

                    // Ecuación usada y detalles
                    document.getElementById('res-ecuacion').textContent =
                        'Este ' + res.especie + ' (' + res.cientifico + ') ha capturado ' +
                        fmt(res.co2Equivalente) + ' kg CO₂e usando: ' + res.ecuacionUsada;
                    document.getElementById('res-formula').textContent = 'Fórmula: ' + res.formula;
                    document.getElementById('res-fuente').textContent = 'Fuente: ' + res.fuente;

                    // Advertencias
                    if (advertenciasBox) {
                        advertenciasBox.innerHTML = res.advertencias.map(function (a) {
                            return '<li>' + a + '</li>';
                        }).join('');
                    }

                    // Procedimiento paso a paso
                    if (procedimientoBox) {
                        procedimientoBox.innerHTML = res.procedimiento.map(function (p, i) {
                            return '<li><span class="paso-num">' + (i + 1) + '</span><span class="paso-txt">' + p + '</span></li>';
                        }).join('');
                    }

                    // Equivalencias
                    var eq = calcularEquivalencias(res.carbono);
                    var eqMap = {
                        'eq-km': { val: eq.kmAuto, suffix: ' km' },
                        'eq-oxigeno': { val: eq.personasDiaOxigeno, suffix: ' días' },
                        'eq-led': { val: eq.diasFocoLED, suffix: ' días' },
                        'eq-botellas': { val: eq.botellasPlastico, suffix: ' bot.' },
                        'eq-cargas': { val: eq.cargasSmartphone, suffix: ' cargas' },
                        'eq-arboles': { val: eq.arbolesJovenes10Anios, suffix: ' árboles' }
                    };
                    Object.keys(eqMap).forEach(function (elementId) {
                        var el = document.getElementById(elementId);
                        if (el) el.textContent = fmt(eqMap[elementId].val) + eqMap[elementId].suffix;
                    });

                    // Mostrar paneles
                    if (resultado) resultado.hidden = false;
                    if (equivalencias) equivalencias.hidden = false;

                    // Restaurar botón con confirmación
                    if (btnCalcular) {
                        btnCalcular.disabled = false;
                        btnCalcular.innerHTML = '<i class="fas fa-check"></i> ¡Cálculo Exitoso!';
                        setTimeout(function () {
                            btnCalcular.innerHTML = '<i class="fas fa-recycle"></i> Calcular Otro Árbol';
                        }, 2200);
                    }

                    // Scroll suave hacia los resultados
                    if (resultado) resultado.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } catch (err) {
                    if (advertenciasBox) {
                        advertenciasBox.innerHTML = '<li class="error"><i class="fas fa-exclamation-triangle"></i> ' + err.message + '</li>';
                    }
                    if (btnCalcular) {
                        btnCalcular.disabled = false;
                        btnCalcular.innerHTML = '<i class="fas fa-calculator"></i> Calcular Impacto Ambiental';
                    }
                    console.error('Error en cálculo:', err);
                }
            }, 400);
        } catch (err) {
            if (advertenciasBox) {
                advertenciasBox.innerHTML = '<li class="error"><i class="fas fa-exclamation-triangle"></i> ' + err.message + '</li>';
            }
            if (btnCalcular) {
                btnCalcular.disabled = false;
                btnCalcular.innerHTML = '<i class="fas fa-calculator"></i> Calcular Impacto Ambiental';
            }
            console.error('Error:', err);
        }
    });

    // Inicializar estados de UI
    actualizarEcuaciones();
    mostrarNotasEspecie();
}

/* ============================================================================
   EXPOSICIÓN GLOBAL - compatibilidad con otros scripts del proyecto
   ============================================================================ */
window.CalculadoraCarbono = {
    calcularBiomasa: calcularBiomasa,
    calcularEquivalencias: calcularEquivalencias,
    obtenerListaEspecies: obtenerListaEspecies,
    obtenerEcuacionesEspecie: obtenerEcuacionesEspecie,
    generarProcedimiento: generarProcedimiento,
    init: initCalculadora,
    especies: especiesCalculadora,
    FACTOR_CARBONO: FACTOR_CARBONO,
    FACTOR_CO2: FACTOR_CO2
};

/* Auto-inicialización cuando el DOM está listo */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCalculadora);
} else {
    // Si el documento ya está cargado, inicializar inmediatamente
    initCalculadora();
}
