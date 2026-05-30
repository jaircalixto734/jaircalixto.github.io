/**
 * CALCULADORA DE CARBONO FORESTAL - JBP MANÍ, CASANARE
 * Basada en ecuaciones alométricas específicas por especie (Álvarez et al., 2012)
 * y ecuaciones generales pantrópicas (Chave et al., 2014)
 * 
 * @author Proyecto SILVAIN - Jardín Botánico Piloto de Maní
 * @version 2.0 - Con soporte para múltiples ecuaciones por especie
 */

// ============================================================================
// BASE DE DATOS DE ESPECIES CON ECUACIONES ALÓMETRICAS
// ============================================================================

const especiesCalculadora = {
    // =========================================================================
    // MEREcURE - Moquilea pyrifolia
    // =========================================================================
    "merecure": {
        nombre: "Merecure",
        cientifico: "Moquilea pyrifolia",
        densidad: 0.72,
        tipo: "dicotiledoneo",
        ecuaciones: {
            especifica: {
                nombre: "Álvarez et al. (2012) - Modelo Colombia",
                tipo: "potencial",
                formula: "BA = a × ρ × DAP^b × H^c",
                coeficientes: { a: 0.129, b: 1.913, c: 0.732 },
                calcular: function(dap, altura, densidad) {
                    const { a, b, c } = this.coeficientes;
                    return a * densidad * Math.pow(dap, b) * Math.pow(altura, c);
                }
            },
            general: {
                nombre: "Chave et al. (2014) - Pantrópica",
                tipo: "potencial",
                formula: "AGB = 0.0673 × (ρ × D² × H)^0.976",
                calcular: function(dap, altura, densidad) {
                    return 0.0673 * Math.pow(densidad * Math.pow(dap, 2) * altura, 0.976);
                }
            }
        }
    },

    // =========================================================================
    // JAMBOLÁN - Syzygium cumini
    // =========================================================================
    "jambolan": {
        nombre: "Jambolán",
        cientifico: "Syzygium cumini",
        densidad: 0.56,
        tipo: "dicotiledoneo",
        ecuaciones: {
            especifica: {
                nombre: "Álvarez et al. (2012) - Modelo Colombia",
                tipo: "potencial",
                formula: "BA = a × ρ × DAP^b × H^c",
                coeficientes: { a: 0.129, b: 1.913, c: 0.732 },
                calcular: function(dap, altura, densidad) {
                    const { a, b, c } = this.coeficientes;
                    return a * densidad * Math.pow(dap, b) * Math.pow(altura, c);
                }
            },
            general: {
                nombre: "Chave et al. (2014) - Pantrópica",
                tipo: "potencial",
                formula: "AGB = 0.0673 × (ρ × D² × H)^0.976",
                calcular: function(dap, altura, densidad) {
                    return 0.0673 * Math.pow(densidad * Math.pow(dap, 2) * altura, 0.976);
                }
            }
        }
    },

    // =========================================================================
    // PALO CRUZ - Brownea ariza
    // =========================================================================
    "paloCruz": {
        nombre: "Palo Cruz",
        cientifico: "Brownea ariza",
        densidad: 0.70,
        tipo: "dicotiledoneo",
        ecuaciones: {
            especifica: {
                nombre: "Álvarez et al. (2012) - Modelo Colombia",
                tipo: "potencial",
                formula: "BA = a × ρ × DAP^b × H^c",
                coeficientes: { a: 0.129, b: 1.913, c: 0.732 },
                calcular: function(dap, altura, densidad) {
                    const { a, b, c } = this.coeficientes;
                    return a * densidad * Math.pow(dap, b) * Math.pow(altura, c);
                }
            },
            general: {
                nombre: "Chave et al. (2014) - Pantrópica",
                tipo: "potencial",
                formula: "AGB = 0.0673 × (ρ × D² × H)^0.976",
                calcular: function(dap, altura, densidad) {
                    return 0.0673 * Math.pow(densidad * Math.pow(dap, 2) * altura, 0.976);
                }
            }
        }
    },

    // =========================================================================
    // ALMENDRO - Terminalia catappa
    // =========================================================================
    "almendro": {
        nombre: "Almendro",
        cientifico: "Terminalia catappa",
        densidad: 0.59,
        tipo: "dicotiledoneo",
        ecuaciones: {
            especifica: {
                nombre: "Álvarez et al. (2012) - Logarítmica",
                tipo: "logaritmica",
                formula: "ln(BAS) = a + b · ln(DAP² · H · ρ)",
                coeficientes: { a: -2.187, b: 0.916 },
                calcular: function(dap, altura, densidad) {
                    const { a, b } = this.coeficientes;
                    const valorInterior = Math.pow(dap, 2) * altura * densidad;
                    return Math.exp(a + b * Math.log(valorInterior));
                }
            },
            general: {
                nombre: "Chave et al. (2014) - Pantrópica",
                tipo: "potencial",
                formula: "AGB = 0.0673 × (ρ × D² × H)^0.976",
                calcular: function(dap, altura, densidad) {
                    return 0.0673 * Math.pow(densidad * Math.pow(dap, 2) * altura, 0.976);
                }
            }
        }
    },

    // =========================================================================
    // POMARROSA - Syzygium jambos
    // =========================================================================
    "pomarrosa": {
        nombre: "Pomarrosa",
        cientifico: "Syzygium jambos",
        densidad: 0.675,
        tipo: "dicotiledoneo",
        ecuaciones: {
            especifica: {
                nombre: "Álvarez et al. (2012) - Logarítmica múltiple",
                tipo: "logaritmica",
                formula: "ln(AGB) = a + b · ln(D) + c · ln(ρ)",
                coeficientes: { a: -2.187, b: 2.348, c: 0.916 },
                calcular: function(dap, altura, densidad) {
                    const { a, b, c } = this.coeficientes;
                    return Math.exp(a + b * Math.log(dap) + c * Math.log(densidad));
                }
            },
            general: {
                nombre: "Chave et al. (2014) - Pantrópica",
                tipo: "potencial",
                formula: "AGB = 0.0673 × (ρ × D² × H)^0.976",
                calcular: function(dap, altura, densidad) {
                    return 0.0673 * Math.pow(densidad * Math.pow(dap, 2) * altura, 0.976);
                }
            }
        }
    },

    // =========================================================================
    // PALMA ARECA - Dypsis lutescens
    // =========================================================================
    "palmaAreca": {
        nombre: "Palma Areca",
        cientifico: "Dypsis lutescens",
        densidad: 0.35,
        tipo: "palma",
        ecuaciones: {
            especifica: {
                nombre: "Goodman et al. (2013) / Frangi & Lugo (1985) - Volumétrica",
                tipo: "volumetrica",
                formula: "BAS = ρ · V (V = π · (DAP/2)² · H · 0.75)",
                calcular: function(dap, altura, densidad) {
                    const radio = (dap / 2) / 100;
                    const volumen = Math.PI * Math.pow(radio, 2) * altura * 0.75;
                    return densidad * 1000 * volumen;
                }
            },
            general: {
                nombre: "Modelo alométrico palmas",
                tipo: "potencial",
                formula: "BAS = 10^(a + b·log₁₀(DAP))",
                coeficientes: { a: -1.234, b: 2.156 },
                calcular: function(dap, altura, densidad) {
                    const { a, b } = this.coeficientes;
                    return Math.pow(10, a + b * Math.log10(dap));
                }
            }
        }
    },

    // =========================================================================
    // PALMA DE COCO - Cocos nucifera
    // =========================================================================
    "palmaCoco": {
        nombre: "Palma de Coco",
        cientifico: "Cocos nucifera",
        densidad: 0.47,
        tipo: "palma",
        ecuaciones: {
            especifica: {
                nombre: "Goodman et al. (2013) - Solo altura",
                tipo: "potencial_altura",
                formula: "AGB = 0.1281 · (H)^1.8899",
                coeficientes: { a: 0.1281, b: 1.8899 },
                calcular: function(dap, altura, densidad) {
                    const { a, b } = this.coeficientes;
                    return a * Math.pow(altura, b);
                }
            },
            general: {
                nombre: "Modelo volumétrico palmas",
                tipo: "volumetrica",
                formula: "AGB = ρ · π · (DAP/2)² · H · f",
                calcular: function(dap, altura, densidad) {
                    const radio = (dap / 2) / 100;
                    const factorForma = 0.85;
                    const volumen = Math.PI * Math.pow(radio, 2) * altura * factorForma;
                    return densidad * 1000 * volumen;
                }
            }
        }
    },

    // =========================================================================
    // OITÍ - Licania tomentosa
    // =========================================================================
    "oiti": {
        nombre: "Oití",
        cientifico: "Licania tomentosa",
        densidad: 0.85,
        tipo: "dicotiledoneo",
        ecuaciones: {
            especifica: {
                nombre: "Álvarez et al. (2012) - Logarítmica completa",
                tipo: "logaritmica",
                formula: "ln(Ba) = a + b·ln(D) + c·ln(H) + d·ln(ρ)",
                coeficientes: { a: -2.187, b: 2.348, c: 0.916, d: 1.0 },
                calcular: function(dap, altura, densidad) {
                    const { a, b, c, d } = this.coeficientes;
                    return Math.exp(a + b * Math.log(dap) + c * Math.log(altura) + d * Math.log(densidad));
                }
            },
            general: {
                nombre: "Chave et al. (2014) - Pantrópica",
                tipo: "potencial",
                formula: "AGB = 0.0673 × (ρ × D² × H)^0.976",
                calcular: function(dap, altura, densidad) {
                    return 0.0673 * Math.pow(densidad * Math.pow(dap, 2) * altura, 0.976);
                }
            }
        }
    },

    // =========================================================================
    // NONI - Morinda citrifolia
    // =========================================================================
    "noni": {
        nombre: "Noni",
        cientifico: "Morinda citrifolia",
        densidad: 0.47,
        tipo: "dicotiledoneo",
        ecuaciones: {
            especifica: {
                nombre: "Álvarez et al. (2012) - Polinómica logarítmica",
                tipo: "polinomica_log",
                formula: "ln(AGB) = −3.652 − 1.697·ln(D) + 1.169·[ln(D)]² − 0.122·[ln(D)]³ + 1.285·ln(ρ)",
                coeficientes: { a: -3.652, b1: -1.697, b2: 1.169, b3: -0.122, c: 1.285 },
                calcular: function(dap, altura, densidad) {
                    const { a, b1, b2, b3, c } = this.coeficientes;
                    const lnD = Math.log(dap);
                    const lnRho = Math.log(densidad);
                    const lnAGB = a + b1 * lnD + b2 * Math.pow(lnD, 2) + b3 * Math.pow(lnD, 3) + c * lnRho;
                    return Math.exp(lnAGB);
                }
            },
            general: {
                nombre: "Chave et al. (2014) - Pantrópica",
                tipo: "potencial",
                formula: "AGB = 0.0673 × (ρ × D² × H)^0.976",
                calcular: function(dap, altura, densidad) {
                    return 0.0673 * Math.pow(densidad * Math.pow(dap, 2) * altura, 0.976);
                }
            }
        }
    },

    // =========================================================================
    // CARACARO - Enterolobium cyclocarpum
    // =========================================================================
    "caracaro": {
        nombre: "Caracaro",
        cientifico: "Enterolobium cyclocarpum",
        densidad: 0.47,
        tipo: "dicotiledoneo",
        ecuaciones: {
            especifica: {
                nombre: "Álvarez et al. (2012) - Logarítmica",
                tipo: "logaritmica",
                formula: "ln(BAS) = a + b · ln(DAP² · H · ρ)",
                coeficientes: { a: -2.187, b: 0.916 },
                calcular: function(dap, altura, densidad) {
                    const { a, b } = this.coeficientes;
                    const valorInterior = Math.pow(dap, 2) * altura * densidad;
                    return Math.exp(a + b * Math.log(valorInterior));
                }
            },
            general: {
                nombre: "Chave et al. (2014) - Pantrópica",
                tipo: "potencial",
                formula: "AGB = 0.0673 × (ρ × D² × H)^0.976",
                calcular: function(dap, altura, densidad) {
                    return 0.0673 * Math.pow(densidad * Math.pow(dap, 2) * altura, 0.976);
                }
            }
        }
    },

    // =========================================================================
    // MAÍZ TOSTADO - Coccoloba acuminata
    // =========================================================================
    "maizTostado": {
        nombre: "Maíz Tostado",
        cientifico: "Coccoloba acuminata",
        densidad: 0.70,
        tipo: "dicotiledoneo",
        ecuaciones: {
            especifica: {
                nombre: "Álvarez et al. (2012) - Polinómica logarítmica",
                tipo: "polinomica_log",
                formula: "ln(AGB) = −3.652 − 1.697·ln(D) + 1.169·[ln(D)]² − 0.122·[ln(D)]³ + 1.285·ln(ρ)",
                coeficientes: { a: -3.652, b1: -1.697, b2: 1.169, b3: -0.122, c: 1.285 },
                calcular: function(dap, altura, densidad) {
                    const { a, b1, b2, b3, c } = this.coeficientes;
                    const lnD = Math.log(dap);
                    const lnRho = Math.log(densidad);
                    const lnAGB = a + b1 * lnD + b2 * Math.pow(lnD, 2) + b3 * Math.pow(lnD, 3) + c * lnRho;
                    return Math.exp(lnAGB);
                }
            },
            general: {
                nombre: "Chave et al. (2014) - Pantrópica",
                tipo: "potencial",
                formula: "AGB = 0.0673 × (ρ × D² × H)^0.976",
                calcular: function(dap, altura, densidad) {
                    return 0.0673 * Math.pow(densidad * Math.pow(dap, 2) * altura, 0.976);
                }
            }
        }
    },

    // =========================================================================
    // GUAYABA - Psidium guajava
    // =========================================================================
    "guayaba": {
        nombre: "Guayaba",
        cientifico: "Psidium guajava",
        densidad: 0.65,
        tipo: "dicotiledoneo",
        ecuaciones: {
            especifica: {
                nombre: "Álvarez et al. (2012) - Polinómica logarítmica",
                tipo: "polinomica_log",
                formula: "ln(AGB) = −3.652 − 1.697·ln(D) + 1.169·[ln(D)]² − 0.122·[ln(D)]³ + 1.285·ln(ρ)",
                coeficientes: { a: -3.652, b1: -1.697, b2: 1.169, b3: -0.122, c: 1.285 },
                calcular: function(dap, altura, densidad) {
                    const { a, b1, b2, b3, c } = this.coeficientes;
                    const lnD = Math.log(dap);
                    const lnRho = Math.log(densidad);
                    const lnAGB = a + b1 * lnD + b2 * Math.pow(lnD, 2) + b3 * Math.pow(lnD, 3) + c * lnRho;
                    return Math.exp(lnAGB);
                }
            },
            general: {
                nombre: "Chave et al. (2014) - Pantrópica",
                tipo: "potencial",
                formula: "AGB = 0.0673 × (ρ × D² × H)^0.976",
                calcular: function(dap, altura, densidad) {
                    return 0.0673 * Math.pow(densidad * Math.pow(dap, 2) * altura, 0.976);
                }
            }
        }
    },

    // =========================================================================
    // FLOR MORADO - Tabebuia rosea
    // =========================================================================
    "florMorado": {
        nombre: "Flor Morado",
        cientifico: "Tabebuia rosea",
        densidad: 0.54,
        tipo: "dicotiledoneo",
        ecuaciones: {
            especifica: {
                nombre: "Álvarez et al. (2012) - Polinómica logarítmica",
                tipo: "polinomica_log",
                formula: "ln(AGB) = −3.652 − 1.697·ln(D) + 1.169·[ln(D)]² − 0.122·[ln(D)]³ + 1.285·ln(ρ)",
                coeficientes: { a: -3.652, b1: -1.697, b2: 1.169, b3: -0.122, c: 1.285 },
                calcular: function(dap, altura, densidad) {
                    const { a, b1, b2, b3, c } = this.coeficientes;
                    const lnD = Math.log(dap);
                    const lnRho = Math.log(densidad);
                    const lnAGB = a + b1 * lnD + b2 * Math.pow(lnD, 2) + b3 * Math.pow(lnD, 3) + c * lnRho;
                    return Math.exp(lnAGB);
                }
            },
            general: {
                nombre: "Chave et al. (2014) - Pantrópica",
                tipo: "potencial",
                formula: "AGB = 0.0673 × (ρ × D² × H)^0.976",
                calcular: function(dap, altura, densidad) {
                    return 0.0673 * Math.pow(densidad * Math.pow(dap, 2) * altura, 0.976);
                }
            }
        }
    },

    // =========================================================================
    // MAMONCILLO - Melicoccus bijugatus
    // =========================================================================
    "mamoncillo": {
        nombre: "Mamoncillo",
        cientifico: "Melicoccus bijugatus",
        densidad: 0.70,
        tipo: "dicotiledoneo",
        ecuaciones: {
            especifica: {
                nombre: "Álvarez et al. (2012) - Modelo Tipo II.1",
                tipo: "logaritmica",
                formula: "BA = EXP(α + β₁·Ln(DAP) + β₂·Ln(ρ))",
                coeficientes: { alpha: -2.187, beta1: 2.348, beta2: 0.916 },
                calcular: function(dap, altura, densidad) {
                    const { alpha, beta1, beta2 } = this.coeficientes;
                    return Math.exp(alpha + beta1 * Math.log(dap) + beta2 * Math.log(densidad));
                }
            },
            general: {
                nombre: "Chave et al. (2014) - Pantrópica",
                tipo: "potencial",
                formula: "AGB = 0.0673 × (ρ × D² × H)^0.976",
                calcular: function(dap, altura, densidad) {
                    return 0.0673 * Math.pow(densidad * Math.pow(dap, 2) * altura, 0.976);
                }
            }
        }
    },

    // =========================================================================
    // LIMONCILLO - Swinglea glutinosa
    // =========================================================================
    "limoncillo": {
        nombre: "Limoncillo",
        cientifico: "Swinglea glutinosa",
        densidad: 0.675,
        tipo: "dicotiledoneo",
        ecuaciones: {
            especifica: {
                nombre: "Álvarez et al. (2012) - Modelo Tipo II.1",
                tipo: "logaritmica",
                formula: "BA = EXP(α + β₁·Ln(DAP) + β₂·Ln(ρ)) [DAP ≥ 10 cm]",
                coeficientes: { alpha: -2.187, beta1: 2.348, beta2: 0.916 },
                calcular: function(dap, altura, densidad) {
                    if (dap < 10) {
                        console.warn("Limoncillo: Ecuación válida solo para DAP ≥ 10 cm");
                    }
                    const { alpha, beta1, beta2 } = this.coeficientes;
                    return Math.exp(alpha + beta1 * Math.log(dap) + beta2 * Math.log(densidad));
                }
            },
            general: {
                nombre: "Chave et al. (2014) - Pantrópica",
                tipo: "potencial",
                formula: "AGB = 0.0673 × (ρ × D² × H)^0.976",
                calcular: function(dap, altura, densidad) {
                    return 0.0673 * Math.pow(densidad * Math.pow(dap, 2) * altura, 0.976);
                }
            }
        }
    },

    // =========================================================================
    // PALMA AFRICANA - Elaeis guineensis
    // =========================================================================
    "palmaAfricana": {
        nombre: "Palma Africana",
        cientifico: "Elaeis guineensis",
        densidad: 0.65,
        tipo: "palma",
        ecuaciones: {
            especifica: {
                nombre: "Ramos-Escalante et al. (2018) - Lineal",
                tipo: "lineal_altura",
                formula: "CAP = 55.15 × Altura(m) + 326.96",
                coeficientes: { a: 55.15, b: 326.96 },
                calcular: function(dap, altura, densidad) {
                    const { a, b } = this.coeficientes;
                    return a * altura + b;
                }
            },
            general: {
                nombre: "Modelo volumétrico palmas",
                tipo: "volumetrica",
                formula: "CAP = ρ · π · (DAP/2)² · H · f",
                calcular: function(dap, altura, densidad) {
                    const radio = (dap / 2) / 100;
                    const factorForma = 0.90;
                    const volumen = Math.PI * Math.pow(radio, 2) * altura * factorForma;
                    return densidad * 1000 * volumen;
                }
            }
        }
    },

    // =========================================================================
    // ADELFA AMARILLA - Cascabela thevetia
    // =========================================================================
    "adelfaAmarilla": {
        nombre: "Adelfa Amarilla",
        cientifico: "Cascabela thevetia",
        densidad: 0.46,
        tipo: "dicotiledoneo",
        ecuaciones: {
            especifica: {
                nombre: "Álvarez et al. (2012) - Polinómica logarítmica",
                tipo: "polinomica_log",
                formula: "ln(AGB) = −3.652 − 1.697·ln(D) + 1.169·[ln(D)]² − 0.122·[ln(D)]³ + 1.285·ln(ρ)",
                coeficientes: { a: -3.652, b1: -1.697, b2: 1.169, b3: -0.122, c: 1.285 },
                calcular: function(dap, altura, densidad) {
                    const { a, b1, b2, b3, c } = this.coeficientes;
                    const lnD = Math.log(dap);
                    const lnRho = Math.log(densidad);
                    const lnAGB = a + b1 * lnD + b2 * Math.pow(lnD, 2) + b3 * Math.pow(lnD, 3) + c * lnRho;
                    return Math.exp(lnAGB);
                }
            },
            general: {
                nombre: "Chave et al. (2014) - Pantrópica",
                tipo: "potencial",
                formula: "AGB = 0.0673 × (ρ × D² × H)^0.976",
                calcular: function(dap, altura, densidad) {
                    return 0.0673 * Math.pow(densidad * Math.pow(dap, 2) * altura, 0.976);
                }
            }
        }
    },

    // =========================================================================
    // CICA - Cycas revoluta
    // =========================================================================
    "cica": {
        nombre: "Cica",
        cientifico: "Cycas revoluta",
        densidad: 0.40,
        tipo: "gimnosperma",
        ecuaciones: {
            especifica: {
                nombre: "Niklas & Tiffney (1994) adaptada",
                tipo: "potencial_caudex",
                formula: "AGB ≈ a × (D_caudex² × H_caudex)^b",
                coeficientes: { a: 0.15, b: 0.85 },
                calcular: function(dap, altura, densidad) {
                    const { a, b } = this.coeficientes;
                    return a * Math.pow(Math.pow(dap, 2) * altura, b);
                }
            },
            general: {
                nombre: "Modelo general gimnospermas",
                tipo: "potencial",
                formula: "AGB = 0.0673 × (ρ × D² × H)^0.976",
                calcular: function(dap, altura, densidad) {
                    return 0.0673 * Math.pow(densidad * Math.pow(dap, 2) * altura, 0.976);
                }
            }
        }
    },

    // =========================================================================
    // VANARENA - Bougainvillea spectabilis
    // =========================================================================
    "vanarena": {
        nombre: "Vanarena",
        cientifico: "Bougainvillea spectabilis",
        densidad: 0.61,
        tipo: "liana",
        ecuaciones: {
            especifica: {
                nombre: "Álvarez et al. (2012) - Polinómica logarítmica",
                tipo: "polinomica_log",
                formula: "ln(AGB) = −3.652 − 1.697·ln(D) + 1.169·[ln(D)]² − 0.122·[ln(D)]³ + 1.285·ln(ρ)",
                coeficientes: { a: -3.652, b1: -1.697, b2: 1.169, b3: -0.122, c: 1.285 },
                calcular: function(dap, altura, densidad) {
                    const { a, b1, b2, b3, c } = this.coeficientes;
                    const lnD = Math.log(dap);
                    const lnRho = Math.log(densidad);
                    const lnAGB = a + b1 * lnD + b2 * Math.pow(lnD, 2) + b3 * Math.pow(lnD, 3) + c * lnRho;
                    return Math.exp(lnAGB);
                }
            },
            alternativa: {
                nombre: "Schnitzer et al. (2006) - Para lianas",
                tipo: "potencial",
                formula: "AGB_liana = 0.1208 × DAP^1.98",
                coeficientes: { a: 0.1208, b: 1.98 },
                calcular: function(dap, altura, densidad) {
                    const { a, b } = this.coeficientes;
                    return a * Math.pow(dap, b);
                }
            },
            general: {
                nombre: "Chave et al. (2014) - Pantrópica",
                tipo: "potencial",
                formula: "AGB = 0.0673 × (ρ × D² × H)^0.976",
                calcular: function(dap, altura, densidad) {
                    return 0.0673 * Math.pow(densidad * Math.pow(dap, 2) * altura, 0.976);
                }
            }
        }
    },

    // =========================================================================
    // LEUCAENA - Leucaena leucocephala
    // =========================================================================
    "leucaena": {
        nombre: "Leucaena",
        cientifico: "Leucaena leucocephala",
        densidad: 0.515,
        tipo: "dicotiledoneo",
        ecuaciones: {
            especifica: {
                nombre: "Álvarez et al. (2012) - Silvopastoril",
                tipo: "logaritmica",
                formula: "ln(AGB) = -2.187 + 2.348·ln(DAP) + 0.916·ln(ρ)",
                coeficientes: { a: -2.187, b1: 2.348, b2: 0.916 },
                calcular: function(dap, altura, densidad) {
                    const { a, b1, b2 } = this.coeficientes;
                    return Math.exp(a + b1 * Math.log(dap) + b2 * Math.log(densidad));
                }
            },
            general: {
                nombre: "Chave et al. (2014) - Pantrópica",
                tipo: "potencial",
                formula: "AGB = 0.0673 × (ρ × D² × H)^0.976",
                calcular: function(dap, altura, densidad) {
                    return 0.0673 * Math.pow(densidad * Math.pow(dap, 2) * altura, 0.976);
                }
            }
        }
    }
};

// ============================================================================
// FUNCIONES PRINCIPALES DE CÁLCULO
// ============================================================================

/**
 * Calcula la biomasa aérea de un árbol usando la ecuación seleccionada
 */
function calcularBiomasa(especieId, dap, altura, tipoEcuacion = 'especifica') {
    if (!especiesCalculadora[especieId]) {
        throw new Error(`Especie "${especieId}" no encontrada`);
    }
    
    if (dap <= 0 || altura <= 0) {
        throw new Error("DAP y altura deben ser positivos");
    }

    const especie = especiesCalculadora[especieId];
    const densidad = especie.densidad;
    
    let ecuacion;
    if (tipoEcuacion === 'especifica') {
        ecuacion = especie.ecuaciones.especifica;
    } else if (tipoEcuacion === 'alternativa' && especie.ecuaciones.alternativa) {
        ecuacion = especie.ecuaciones.alternativa;
    } else {
        ecuacion = especie.ecuaciones.general;
    }

    const biomasa = ecuacion.calcular(dap, altura, densidad);

    return {
        biomasa: biomasa,
        carbono: biomasa * 0.47,
        co2Equivalente: biomasa * 0.47 * 3.67,
        especie: especie.nombre,
        cientifico: especie.cientifico,
        densidad: densidad,
        ecuacionUsada: ecuacion.nombre,
        formula: ecuacion.formula,
        tipoEcuacion: tipoEcuacion,
        dap: dap,
        altura: altura
    };
}

/**
 * Calcula equivalencias ambientales
 */
function calcularEquivalencias(kgCarbono) {
    const kgCO2 = kgCarbono * 3.67;
    
    return {
        kmAuto: kgCO2 / 0.404,
        kgOxigeno: kgCarbono * 2.67,
        personasDiaOxigeno: (kgCarbono * 2.67) / 0.55,
        diasFocoLED: (kgCarbono * 3.67 * 1000) / (10 * 24 * 0.0004),
        botellasPlastico: kgCO2 / 2.5,
        cargasSmartphone: kgCO2 / 0.015,
        arbolesJovenes10Anios: kgCarbono / 15
    };
}

/**
 * Obtiene lista de especies disponibles
 */
function obtenerListaEspecies() {
    return Object.keys(especiesCalculadora).map(id => ({
        id: id,
        nombre: especiesCalculadora[id].nombre,
        cientifico: especiesCalculadora[id].cientifico,
        densidad: especiesCalculadora[id].densidad,
        tipo: especiesCalculadora[id].tipo,
        tieneEcuacionAlternativa: !!especiesCalculadora[id].ecuaciones.alternativa
    }));
}

/**
 * Obtiene ecuaciones disponibles para una especie
 */
function obtenerEcuacionesEspecie(especieId) {
    if (!especiesCalculadora[especieId]) {
        return null;
    }
    
    const especie = especiesCalculadora[especieId];
    const ecuaciones = {};
    
    if (especie.ecuaciones.especifica) {
        ecuaciones.especifica = {
            nombre: especie.ecuaciones.especifica.nombre,
            formula: especie.ecuaciones.especifica.formula,
            fuente: "Álvarez et al. (2012) u otros específicos"
        };
    }
    
    if (especie.ecuaciones.alternativa) {
        ecuaciones.alternativa = {
            nombre: especie.ecuaciones.alternativa.nombre,
            formula: especie.ecuaciones.alternativa.formula,
            fuente: "Específica para grupo funcional"
        };
    }
    
    ecuaciones.general = {
        nombre: especie.ecuaciones.general.nombre,
        formula: especie.ecuaciones.general.formula,
        fuente: "Chave et al. (2014) - Pantrópica"
    };
    
    return ecuaciones;
}

// Exportar funciones globalmente
window.CalculadoraCarbono = {
    calcularBiomasa: calcularBiomasa,
    calcularEquivalencias: calcularEquivalencias,
    obtenerListaEspecies: obtenerListaEspecies,
    obtenerEcuacionesEspecie: obtenerEcuacionesEspecie,
    especies: especiesCalculadora
};

console.log("✅ Calculadora de Carbono Forestal v2.0 cargada");
console.log(`📊 ${Object.keys(especiesCalculadora).length} especies disponibles`);
console.log("🔬 Ecuaciones: Específicas (Álvarez et al., 2012) + General (Chave et al., 2014)");
