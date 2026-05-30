/**
 * CALCULADORA DE BIOMASA Y CARBONO - SILVAIN JBP
 * Basada en ecuaciones alométricas validadas científicamente
 * 
 * Referencias:
 * - Álvarez et al. (2012): Ecuación para bosques naturales de Colombia
 * - Chave et al. (2014): Ecuación pantrópica para bosques tropicales
 * - IPCC (2006): Factor de fracción de carbono = 0.47-0.50
 */

// Especies válidas para la calculadora (excluyendo: trompillo, guacimo, gualanday, palma_real, samán)
const ESPECIES_VALIDAS = {
    "merecure": {
        nombre: "Merecure",
        cientifico: "Moquilea pyrifolia",
        densidad: 0.72, // Valor medio del rango 0.65-0.80 g/cm³
        usarChave: true // Usar ecuación de Chave por ser bosque de galería/sabana
    },
    "jambolan": {
        nombre: "Jambolán",
        cientifico: "Syzygium cumini",
        densidad: 0.56, // USDA Forest Service, 2021
        usarChave: false
    },
    "palocruz": {
        nombre: "Palo Cruz",
        cientifico: "Brownea ariza",
        densidad: 0.70, // Estimado para madera dura (dato por verificar)
        usarChave: false
    },
    "almendro": {
        nombre: "Almendro",
        cientifico: "Terminalia catappa",
        densidad: 0.59, // USDA / Brown & Lugo, 1992
        usarChave: false
    },
    "pomarrosa": {
        nombre: "Pomarrosa",
        cientifico: "Syzygium jambos",
        densidad: 0.68, // Valor medio del rango 0.60-0.75 g/cm³
        usarChave: false
    },
    "caracaro": {
        nombre: "Caracaro",
        cientifico: "Enterolobium cyclocarpum",
        densidad: 0.47, // Francis, 1988
        usarChave: false
    },
    "maiz_tostado": {
        nombre: "Maíz Tostado",
        cientifico: "Coccoloba acuminata",
        densidad: 0.70, // Madera semidura a dura
        usarChave: false
    },
    "guayaba": {
        nombre: "Guayaba",
        cientifico: "Psidium guajava",
        densidad: 0.65, // Valor recomendado (rango 0.27-0.92)
        usarChave: false
    },
    "flor_morado": {
        nombre: "Flor Morado",
        cientifico: "Tabebuia rosea",
        densidad: 0.54, // Madera de densidad media
        usarChave: false
    },
    "mamoncillo": {
        nombre: "Mamoncillo",
        cientifico: "Melicoccus bijugatus",
        densidad: 0.52, // Valor estimado para Sapindaceae
        usarChave: false
    },
    "limoncillo": {
        nombre: "Limoncillo",
        cientifico: "Swinglea glutinosa",
        densidad: 0.60, // Valor estimado para Rutaceae
        usarChave: false
    },
    "noni": {
        nombre: "Noni",
        cientifico: "Morinda citrifolia",
        densidad: 0.50, // Valor estimado para Rubiaceae
        usarChave: false
    },
    "oiti": {
        nombre: "Oití",
        cientifico: "Licania tomentosa",
        densidad: 0.65, // Valor estimado para Chrysobalanaceae
        usarChave: true
    },
    "mango": {
        nombre: "Mango",
        cientifico: "Mangifera indica",
        densidad: 0.52, // Valor típico para Anacardiaceae
        usarChave: false
    },
    "palma_areca": {
        nombre: "Palma Areca",
        cientifico: "Dypsis lutescens",
        densidad: 0.35, // Palmera - densidad baja (rango 0.30-0.40)
        usarChave: false,
        esPalma: true
    },
    "palma_coco": {
        nombre: "Palma de Coco",
        cientifico: "Cocos nucifera",
        densidad: 0.45, // Palma - valor especial
        usarChave: false,
        esPalma: true
    },
    "palma_africana": {
        nombre: "Palma Africana",
        cientifico: "Elaeis guineensis",
        densidad: 0.48, // Palma - valor especial
        usarChave: false,
        esPalma: true
    },
    "adelfa_amarilla": {
        nombre: "Adelfa Amarilla",
        cientifico: "Cascabela thevetia",
        densidad: 0.55, // Valor estimado para Apocynaceae
        usarChave: false
    },
    "cica": {
        nombre: "Cica",
        cientifico: "Cycas revoluta",
        densidad: 0.40, // Gimnosperma primitiva - valor estimado
        usarChave: false,
        esPalma: true
    },
    "vanarena": {
        nombre: "Vanarena",
        cientifico: "Bougainvillea spectabilis",
        densidad: 0.58, // Valor estimado para Nyctaginaceae
        usarChave: false
    }
};

/**
 * Calcula la biomasa aérea usando la ecuación de Álvarez et al. (2012)
 * ln(AGB) = −3.652 − 1.697·ln(D) + 1.169·(ln(D))² − 0.122·(ln(D))³ + 1.285·ln(ρ)
 * Nota: Esta ecuación produce AGB en kg/árbol cuando D está en cm y ρ en g/cm³
 * 
 * @param {number} dap - Diámetro a la altura del pecho en cm
 * @param {number} densidad - Densidad básica de la madera en g/cm³
 * @returns {number} Biomasa aérea en kg
 */
function calcularBiomasaAlvarez(dap, densidad) {
    if (dap <= 0 || densidad <= 0) return 0;
    
    const lnD = Math.log(dap);
    const lnRho = Math.log(densidad);
    
    const lnAGB = -3.652 
                - 1.697 * lnD 
                + 1.169 * Math.pow(lnD, 2) 
                - 0.122 * Math.pow(lnD, 3) 
                + 1.285 * lnRho;
    
    // AGB resultante está en kg por árbol
    const AGB = Math.exp(lnAGB);
    
    return AGB; // kg por árbol
}

/**
 * Calcula la biomasa aérea usando la ecuación de Chave et al. (2014)
 * AGB = 0.0673 × (ρ × D² × H)^0.976
 * Esta es la ecuación pantrópica recomendada para árboles individuales en bosques tropicales
 * 
 * @param {number} dap - Diámetro a la altura del pecho en cm
 * @param {number} altura - Altura total del árbol en metros
 * @param {number} densidad - Densidad básica de la madera en g/cm³
 * @returns {number} Biomasa aérea en kg
 */
function calcularBiomasaChave(dap, altura, densidad) {
    if (dap <= 0 || altura <= 0 || densidad <= 0) return 0;
    
    // Ecuación de Chave et al. (2014) para bosques tropicales
    // El resultado está en kg cuando D está en cm, H en m, y ρ en g/cm³
    const AGB = 0.0673 * Math.pow(densidad * Math.pow(dap, 2) * altura, 0.976);
    
    return AGB; // kg por árbol
}

/**
 * Función unificada para calcular biomasa - usa Chave et al. (2014) como estándar
 * para todos los árboles dicotiledóneos (no palmas)
 * 
 * @param {number} dap - DAP en cm
 * @param {number} altura - Altura en metros
 * @param {number} densidad - Densidad en g/cm³
 * @returns {number} Biomasa en kg
 */
function calcularBiomasaArbol(dap, altura, densidad) {
    // Usar siempre Chave et al. (2014) para árboles individuales
    return calcularBiomasaChave(dap, altura, densidad);
}

/**
 * Calcula la biomasa para palmeras (ecuación especial)
 * Para palmas, se usa una aproximación cilíndrica
 * 
 * @param {number} dap - Diámetro del estipe en cm
 * @param {number} altura - Altura total en metros
 * @param {number} densidad - Densidad del estipe en g/cm³
 * @returns {number} Biomasa en kg
 */
function calcularBiomasaPalma(dap, altura, densidad) {
    if (dap <= 0 || altura <= 0 || densidad <= 0) return 0;
    
    // Modelo volumétrico cilíndrico con factor de forma
    const radio = dap / 2 / 100; // convertir a metros
    const volumen = Math.PI * Math.pow(radio, 2) * altura * 0.85; // factor de forma 0.85
    const biomasa = volumen * densidad * 1000; // convertir a kg
    
    return biomasa;
}

/**
 * Función principal para calcular biomasa y carbono
 * 
 * @param {string} especie - Clave de la especie
 * @param {number} dap - DAP en cm
 * @param {number} altura - Altura en metros
 * @returns {Object} Resultados del cálculo
 */
function calcularBiomasaYCarbono(especie, dap, altura) {
    const datosEspecie = ESPECIES_VALIDAS[especie];
    
    if (!datosEspecie) {
        throw new Error("Especie no válida o no disponible en la calculadora");
    }
    
    const { densidad, esPalma } = datosEspecie;
    
    let biomasa;
    
    // Seleccionar ecuación según tipo de planta
    if (esPalma) {
        biomasa = calcularBiomasaPalma(dap, altura, densidad);
    } else {
        // Usar Chave et al. (2014) como estándar para todos los árboles dicotiledóneos
        biomasa = calcularBiomasaArbol(dap, altura, densidad);
    }
    
    // Calcular carbono (fracción de carbono = 0.47 según IPCC)
    const carbono = biomasa * 0.47;
    
    // Calcular CO₂ equivalente (carbono * 3.67)
    const co2Equivalente = carbono * 3.67;
    
    // Calcular equivalencias
    const equivalencias = calcularEquivalencias(carbono, co2Equivalente);
    
    return {
        especie: datosEspecie.nombre,
        cientifico: datosEspecie.cientifico,
        biomasa: biomasa,
        carbono: carbono,
        co2Equivalente: co2Equivalente,
        equivalencias: equivalencias,
        ecuacionUsada: esPalma ? "Modelo volumétrico palmas" : "Chave et al. (2014)"
    };
}

/**
 * Calcula equivalencias ambientales basadas en el carbono almacenado
 * 
 * @param {number} carbono - Carbono almacenado en kg
 * @param {number} co2Equivalente - CO₂ equivalente en kg
 * @returns {Object} Equivalencias
 */
function calcularEquivalencias(carbono, co2Equivalente) {
    // Factor de emisión de vehículo: ~0.12 kg CO₂/km (auto promedio)
    const kmAuto = co2Equivalente / 0.12;
    
    // Producción de oxígeno: 1 kg de biomasa produce ~0.73 kg de O₂
    // Una persona consume ~0.55 kg de O₂ por día
    const oxigenoProducido = carbono * 1.5; // kg de O₂ aproximado
    const personasDia = oxigenoProducido / 0.55;
    
    // Energía: 1 kg de CO₂ compensado ≈ 0.5 kWh de energía limpia
    // Un foco LED de 10W consume 0.24 kWh por día
    const energiaKWh = co2Equivalente * 0.5;
    const diasFocoLED = energiaKWh / 0.24;
    
    // Botellas de plástico: 1 botella PET ≈ 0.04 kg de CO₂ en su producción
    const botellasPlastico = co2Equivalente / 0.04;
    
    // Árboles plantados: un árbol joven captura ~10 kg de CO₂ por año
    const arbolesEquivalentes = co2Equivalente / 10;
    
    return {
        kmAuto: Math.round(kmAuto),
        personasDia: Math.round(personasDia),
        diasFocoLED: Math.round(diasFocoLED),
        botellasPlastico: Math.round(botellasPlastico),
        arbolesEquivalentes: arbolesEquivalentes.toFixed(1)
    };
}

/**
 * Obtiene la lista de especies disponibles para el select
 * 
 * @returns {Array} Array de objetos con clave, nombre y científico
 */
function obtenerListaEspecies() {
    return Object.entries(ESPECIES_VALIDAS).map(([clave, datos]) => ({
        clave: clave,
        nombre: datos.nombre,
        cientifico: datos.cientifico
    })).sort((a, b) => a.nombre.localeCompare(b.nombre));
}

// Exportar funciones para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calcularBiomasaYCarbono,
        obtenerListaEspecies,
        ESPECIES_VALIDAS
    };
}
