/* ============================================================================
   REGISTRO DE CAMPO — Base de datos de referencia
   Datos reales del inventario IE Jesús Bernal Pinzón (Maní, Casanare)
   Permite buscar árboles y cargarlos automáticamente en la calculadora.
   ============================================================================ */
(function () {
    'use strict';

    // [nombre, DAP_cm, altura_m]
    var REGISTRO_CAMPO = [
        ['Pomarrosa', 22.60, 4.7],
        ['Palma Real', 39.47, 9.4],
        ['Palma Real', 32.14, 8.5],
        ['Palma Real', 41.69, 8.4],
        ['Palma Real', 36.92, 8.8],
        ['Palma Real', 40.42, 9.2],
        ['Palma Real', 36.92, 9.3],
        ['Palma Real', 40.10, 9.7],
        ['Palma Real', 32.46, 7.0],
        ['Palma Real', 49.01, 6.5],
        ['Palma Real', 41.38, 7.5],
        ['Palma De Coco', 23.23, 6.9],
        ['Palma De Coco', 26.10, 7.0],
        ['Palma De Coco', 19.73, 6.0],
        ['Palma De Coco', 24.50, 7.0],
        ['Palma De Coco', 20.69, 8.0],
        ['Palma Real', 39.15, 9.5],
        ['Palma De Coco', 27.37, 8.5],
        ['Trompillo', 51.24, 6.8],
        ['Palma De Coco', 25.21, 8.7],
        ['Palma De Coco', 23.87, 6.0],
        ['Samán', 77.03, 10.0],
        ['Caracaro', 113.00, 10.5],
        ['Mango', 116.50, 9.4],
        ['Palo Cruz', 16.87, 4.0],
        ['Palo Cruz', 15.91, 3.3],
        ['Gualanday', 41.06, 8.0],
        ['Palo Cruz', 53.15, 5.0],
        ['Pomarrosa', 43.92, 4.8],
        ['Merecure', 26.73, 6.5],
        ['Merecure', 30.23, 6.0],
        ['Merecure', 41.06, 4.5],
        ['Merecure', 34.05, 5.0],
        ['Merecure', 31.83, 4.3],
        ['Merecure', 27.69, 4.4],
        ['Merecure', 50.29, 5.0],
        ['Merecure', 19.73, 4.5],
        ['Merecure', 30.87, 4.7],
        ['Merecure', 28.32, 4.5],
        ['Merecure', 25.14, 4.0],
        ['Merecure', 36.28, 4.5],
        ['Merecure', 31.51, 7.0],
        ['Merecure', 28.64, 6.5],
        ['Merecure', 28.92, 4.2],
        ['Merecure', 17.67, 4.0],
        ['Merecure', 30.55, 4.1],
        ['Merecure', 29.58, 4.0],
        ['Merecure', 32.35, 4.2],
        ['Merecure', 35.65, 4.5],
        ['Merecure', 36.06, 4.9],
        ['Merecure', 27.37, 4.14],
        ['Merecure', 36.26, 4.13],
        ['Merecure', 28.01, 4.1],
        ['Merecure', 40.38, 4.5],
        ['Merecure', 31.57, 6.0],
        ['Merecure', 30.15, 6.1],
        ['Merecure', 39.30, 5.86],
        ['Pomarrosa', 29.60, 7.2],
        ['Pomarrosa', 28.01, 7.5],
        ['Pomarrosa', 33.56, 7.4],
        ['Pomarrosa', 28.64, 5.8],
        ['Pomarrosa', 29.10, 5.8],
        ['Pomarrosa', 28.02, 6.2],
        ['Pomarrosa', 24.17, 6.4],
        ['Pomarrosa', 36.28, 6.6],
        ['Pomarrosa', 35.94, 6.5],
        ['Pomarrosa', 27.31, 5.9],
        ['Pomarrosa', 30.27, 6.1],
        ['Pomarrosa', 22.60, 6.0],
        ['Pomarrosa', 20.77, 6.3],
        ['Pomarrosa', 25.78, 6.13],
        ['Pomarrosa', 29.92, 8.2],
        ['Pomarrosa', 28.31, 7.9],
        ['Pomarrosa', 30.30, 8.0],
        ['Pomarrosa', 27.69, 6.9],
        ['Pomarrosa', 22.91, 4.0],
        ['Pomarrosa', 26.90, 4.0],
        ['Pomarrosa', 32.14, 4.2],
        ['Pomarrosa', 26.09, 4.0],
        ['Palma Africana', 45.20, 10.0],
        ['Merecure', 42.00, 5.9],
        ['Merecure', 30.90, 6.0],
        ['Merecure', 30.75, 6.1],
        ['Merecure', 36.70, 7.0],
        ['Merecure', 24.76, 4.0],
        ['Merecure', 30.90, 5.0],
        ['Merecure', 39.55, 6.5],
        ['Merecure', 41.65, 6.0],
        ['Merecure', 30.69, 4.9],
        ['Merecure', 26.76, 5.9],
        ['Merecure', 37.81, 4.9],
        ['Merecure', 42.65, 5.8],
        ['Merecure', 32.14, 6.3],
        ['Merecure', 35.33, 6.1],
        ['Merecure', 30.42, 5.8],
        ['Noni', 17.37, 3.5],
        ['Limoncillo', 24.19, 5.9],
        ['Limoncillo', 26.25, 5.0],
        ['Limoncillo', 22.83, 5.7],
        ['Limoncillo', 21.05, 5.9],
        ['Limoncillo', 16.31, 5.8],
        ['Limoncillo', 31.09, 3.0],
        ['Limoncillo', 30.16, 3.0],
        ['Limoncillo', 24.61, 3.0],
        ['Limoncillo', 27.10, 3.0],
        ['Limoncillo', 13.68, 3.0],
        ['Limoncillo', 25.52, 3.1],
        ['Limoncillo', 20.31, 3.8],
        ['Limoncillo', 19.27, 3.5],
        ['Limoncillo', 20.05, 3.2],
        ['Limoncillo', 24.38, 3.2],
        ['Limoncillo', 25.80, 3.3],
        ['Limoncillo', 19.09, 3.2],
        ['Limoncillo', 20.05, 3.2],
        ['Limoncillo', 13.36, 2.4],
        ['Limoncillo', 31.51, 3.1],
        ['Limoncillo', 30.97, 3.1],
        ['Limoncillo', 32.46, 3.2],
        ['Limoncillo', 37.21, 5.8],
        ['Limoncillo', 49.55, 5.6],
        ['Palma De Coco', 22.91, 7.5],
        ['Adelfa Amarilla', 21.90, 4.3],
        ['Guayabo', 13.65, 3.2],
        ['Mamoncillo', 56.02, 9.0],
        ['Oití', 24.98, 7.5],
        ['Oití', 30.55, 6.5],
        ['Oití', 26.72, 4.5],
        ['Oití', 41.33, 7.0],
        ['Oití', 31.61, 6.8],
        ['Oití', 31.66, 6.2],
        ['Oití', 33.53, 6.0],
        ['Oití', 32.45, 5.0],
        ['Oití', 18.46, 4.5],
        ['Samán', 60.79, 11.5],
        ['Guácimo', 38.30, 6.4],
        ['Flor Amarillo', 43.35, 7.5],
        ['Flor Amarillo', 23.33, 6.0],
        ['Almendro', 24.19, 3.0],
        ['Guamo', 26.55, 5.0],
        ['Oití', 35.52, 6.5],
        ['Oití', 22.29, 5.9],
        ['Oití', 33.38, 7.0],
        ['Oití', 32.51, 7.5],
        ['Oití', 19.58, 7.0],
        ['Oití', 32.41, 6.8],
        ['Oití', 35.62, 6.7],
        ['Flor Morado', 33.10, 5.5],
        ['Guácimo', 15.56, 4.0],
        ['Guácimo', 13.19, 4.5],
        ['Guayabo', 7.25, 3.0]
    ];

    // Mapeo de nombres del Excel → IDs internos de la calculadora
    var MAPEO_ESPECIES = {
        'pomarrosa': 'pomarrosa',
        'palma real': 'palmaReal',
        'palma de coco': 'palmaCoco',
        'trompillo': 'trompillo',
        'saman': 'saman',
        'caracaro': 'caracaro',
        'mango': 'mango',
        'palo cruz': 'paloCruz',
        'gualanday': 'gualanday',
        'palma africana': 'palmaAfricana',
        'merecure': 'merecure',
        'noni': 'noni',
        'limoncillo': 'limoncillo',
        'adelfa amarilla': 'adelfaAmarilla',
        'guayabo': 'guayaba',
        'mamoncillo': 'mamoncillo',
        'oiti': 'oiti',
        'guacimo': 'guacimo',
        'flor amarillo': 'araguaney',
        'almendro': 'almendro',
        'guamo': 'guamo',
        'flor morado': 'florMorado'
    };

    function normalizar(str) {
        return String(str).toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .trim();
    }

    function obtenerEspecieId(nombre) {
        return MAPEO_ESPECIES[normalizar(nombre)] || null;
    }

    function fmtNum(n) {
        if (Number.isInteger(n)) return n.toString();
        return n.toLocaleString('es-CO', { maximumFractionDigits: 2 });
    }

    function initRegistro() {
        var tbody = document.getElementById('registro-tbody');
        var buscador = document.getElementById('buscar-arbol');
        var contador = document.getElementById('contador-registros');
        var vacio = document.getElementById('registro-vacio');
        var tablaWrap = document.getElementById('registro-tabla-wrap');

        if (!tbody) return;

        function renderizar(filtro) {
            var f = normalizar(filtro || '');
            var filas = '';
            var visibles = 0;

            REGISTRO_CAMPO.forEach(function (item, i) {
                var nombre = item[0], dap = item[1], altura = item[2];
                if (f && normalizar(nombre).indexOf(f) === -1) return;

                visibles++;
                var especieId = obtenerEspecieId(nombre);
                var boton = especieId
                    ? '<button type="button" class="btn-usar-registro" data-especie="' + especieId +
                      '" data-dap="' + dap + '" data-altura="' + altura + '" title="Cargar en la calculadora">' +
                      '<i class="fas fa-calculator"></i> Usar</button>'
                    : '<span class="registro-no-disponible">—</span>';

                filas += '<tr>'
                    + '<td class="col-num">' + (i + 1) + '</td>'
                    + '<td class="col-especie">' + nombre + '</td>'
                    + '<td class="col-dap">' + fmtNum(dap) + ' cm</td>'
                    + '<td class="col-altura">' + fmtNum(altura) + ' m</td>'
                    + '<td class="col-accion">' + boton + '</td>'
                    + '</tr>';
            });

            tbody.innerHTML = filas;

            if (contador) {
                contador.textContent = visibles;
                contador.parentElement.querySelector('span').textContent =
                    visibles === 1 ? 'árbol encontrado' : 'árboles en el registro';
            }
            if (vacio) vacio.hidden = visibles > 0;
            if (tablaWrap) tablaWrap.hidden = visibles === 0;
        }

        // Búsqueda con debounce
        var timer;
        if (buscador) {
            buscador.addEventListener('input', function () {
                clearTimeout(timer);
                timer = setTimeout(function () { renderizar(buscador.value); }, 120);
            });
        }

        // Delegación para botones "Usar"
        tbody.addEventListener('click', function (ev) {
            var btn = ev.target.closest('.btn-usar-registro');
            if (!btn) return;

            var especieId = btn.getAttribute('data-especie');
            var dap = btn.getAttribute('data-dap');
            var altura = btn.getAttribute('data-altura');

            var especieSel = document.getElementById('especie');
            var dapInput = document.getElementById('dap');
            var alturaInput = document.getElementById('altura');
            var form = document.getElementById('form-calculadora');

            if (!especieSel || !dapInput || !alturaInput) return;

            especieSel.value = especieId;
            especieSel.dispatchEvent(new Event('change', { bubbles: true }));
            dapInput.value = dap;
            alturaInput.value = altura;

            // Feedback visual en el botón
            var htmlOriginal = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> ¡Cargado!';
            btn.classList.add('cargado');
            setTimeout(function () {
                btn.innerHTML = htmlOriginal;
                btn.classList.remove('cargado');
            }, 1800);

            // Scroll al formulario + pulso
            if (form) {
                form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                form.classList.add('form-highlight');
                setTimeout(function () { form.classList.remove('form-highlight'); }, 1600);
            }
        });

        renderizar('');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initRegistro);
    } else {
        initRegistro();
    }

    window.RegistroCampo = {
        datos: REGISTRO_CAMPO,
        obtenerEspecieId: obtenerEspecieId
    };
})();