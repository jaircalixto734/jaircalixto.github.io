/* =============================================
   TOKENS SEGUROS PARA CÓDIGOS QR
   Mapeo de tokens únicos a identificadores de árboles
   Estos tokens se usan en las URLs de los códigos QR
   ============================================= */

const TREE_TOKENS = {
    // Árboles del inventario - Token único generado aleatoriamente
    'a7f3b2e9d4c1': 'merecure',
    'b8g4c3f0e5d2': 'jambolan',
    'c9h5d4g1f6e3': 'palo-cruz',
    'd0i6e5h2g7f4': 'almendro',
    'e1j7f6i3h8g5': 'pomarrosa',
    'f2k8g7j4i9h6': 'palma_areca',
    'g3l9h8k5j0i7': 'caracaro',
    'h4m0i9l6k1j8': 'mango',
    'i5n1j0m7l2k9': 'maiz_tostado',
    'j6o2k1n8m3l0': 'palma-de-coco',
    'k7p3l2o9n4m1': 'trompillo',
    'l8q4m3p0o5n2': 'guacimo',
    'm9r5n4q1p6o3': 'gualanday',
    'n0s6o5r2q7p4': 'oiti',
    'o1t7p6s3r8q5': 'noni',
    'p2u8q7t4s9r6': 'palma-real',
    'q3v9r8u5t0s7': 'saman',
    'r4w0s9v6u1t8': 'flor-morado',
    's5x1t0w7v2u9': 'mamoncillo',
    't6y2u1x8w3v0': 'guayaba',
    'u7z3v2y9x4w1': 'limoncillo',
    'v8a4w3z0y5x2': 'palma africana',
    'w9b5x4a1z6y3': 'adelfa amarilla',
    'x0c6y5b2a7z4': 'cica',
    'y1d7z6c3b8a5': 'vanarena',
    'z2e8a7d4c9b6': 'leucaena',
    'a3f9b8e5d0c7': 'guama',
    'b4g0c9f6e1d8': 'araguaney'
};

// Función para obtener el token de un árbol
function getTokenForTree(treeId) {
    for (const [token, id] of Object.entries(TREE_TOKENS)) {
        if (id === treeId) {
            return token;
        }
    }
    return null;
}

// Función para obtener el árbol desde un token
function getTreeFromToken(token) {
    return TREE_TOKENS[token] || null;
}

// Exportar para uso global
window.TREE_TOKENS = TREE_TOKENS;
window.getTokenForTree = getTokenForTree;
window.getTreeFromToken = getTreeFromToken;
