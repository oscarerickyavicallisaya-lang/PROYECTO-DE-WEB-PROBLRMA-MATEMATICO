/* ═══════════════════════════════════════════════════════════════
   DESAFÍO WEB — FIBONACCI & PRIMOS
   Archivo: script.js
   Descripción:
     - Genera la serie de Fibonacci sin usar arrays (variables simples)
     - Verifica si cada término es primo usando document.getElementById()
     - Muestra los resultados en pantalla (NO en consola)
   ═══════════════════════════════════════════════════════════════ */


/* ──────────────────────────────────────────────────────────────
   FUNCIÓN PRINCIPAL — calcular()
   Se ejecuta al hacer clic en el botón "Calcular"
   Usa document.getElementById() para leer los inputs y
   escribir los resultados, según los requisitos del desafío.
   ────────────────────────────────────────────────────────────── */
function calcular() {

  // ── 1. Leer datos del formulario con getElementById() ──────────
  var inputTerminos  = document.getElementById("terminos");
  var inputAhorro    = document.getElementById("ahorro-base");

  var n           = parseInt(inputTerminos.value);
  var ahorroBase  = parseInt(inputAhorro.value) || 1;

  // ── 2. Validar entrada ─────────────────────────────────────────
  if (isNaN(n) || n < 1 || n > 50) {
    document.getElementById("terminos").focus();
    document.getElementById("terminos").style.borderColor = "#ff6b35";
    setTimeout(function () {
      document.getElementById("terminos").style.borderColor = "";
    }, 1500);
    return;
  }

  // ── 3. Generar Fibonacci sin arrays (solo variables simples) ───
  //       Algoritmo con a, b, c según el documento del desafío
  var a = 0;   // término actual
  var b = 1;   // término siguiente
  var c;       // auxiliar

  // Guardar resultados en strings/acumuladores (no en arrays)
  var htmlChips       = "";     // chips de la secuencia
  var htmlFilas       = "";     // filas de la tabla de ahorro
  var htmlPrimos      = "";     // badges de primos
  var totalAhorro     = 0;
  var cantidadPrimos  = 0;
  var posicion        = 1;

  for (var i = 0; i < n; i++) {

    var valorFib    = a;
    var ahorro      = valorFib * ahorroBase;
    totalAhorro     += ahorro;
    var primo       = esPrimo(valorFib);

    // Chip de la secuencia
    if (primo) {
      htmlChips += '<span class="num-chip es-primo" title="¡Es primo!">' + valorFib + '</span>';
    } else {
      htmlChips += '<span class="num-chip">' + valorFib + '</span>';
    }

    // Fila de la tabla de ahorro
    var tagPrimo = primo ? '<span class="tag-primo">PRIMO</span>' : "";
    var claseF   = primo ? ' class="fila-primo"' : "";
    htmlFilas +=
      "<tr" + claseF + ">" +
        "<td>" + posicion + "</td>" +
        "<td>" + valorFib + "</td>" +
        "<td>Bs. " + (ahorro).toLocaleString("es-BO") + "</td>" +
        "<td>Bs. " + totalAhorro.toLocaleString("es-BO") + "</td>" +
        "<td>" + tagPrimo + "</td>" +
      "</tr>";

    // Badge de primo
    if (primo) {
      htmlPrimos +=
        '<div class="primo-badge">' +
          '<span class="pos">F(' + posicion + ')</span>' +
          '<strong>' + valorFib + '</strong>' +
        '</div>';
      cantidadPrimos++;
    }

    // Avanzar la secuencia (sin arrays)
    c = a + b;
    a = b;
    b = c;
    posicion++;
  }

  // Caso especial: si no hay primos entre los términos generados
  if (htmlPrimos === "") {
    htmlPrimos = '<p style="color: var(--muted); font-size:.9rem;">Ninguno de los ' + n + ' términos generados es primo.</p>';
  }

  // Tabla completa con encabezado
  var htmlTabla =
    "<table>" +
      "<thead><tr>" +
        "<th>Mes</th><th>Fibonacci</th><th>Ahorro</th><th>Acumulado</th><th>Tipo</th>" +
      "</tr></thead>" +
      "<tbody>" + htmlFilas + "</tbody>" +
    "</table>";

  // Stats
  var htmlStats =
    '<div class="stat-card stat-total">' +
      '<div class="stat-num">' + n + '</div>' +
      '<div class="stat-label">Términos</div>' +
    '</div>' +
    '<div class="stat-card stat-fib">' +
      '<div class="stat-num">Bs. ' + totalAhorro.toLocaleString("es-BO") + '</div>' +
      '<div class="stat-label">Ahorro total</div>' +
    '</div>' +
    '<div class="stat-card stat-prime">' +
      '<div class="stat-num">' + cantidadPrimos + '</div>' +
      '<div class="stat-label">Primos hallados</div>' +
    '</div>';

  // ── 4. Escribir resultados en la página con getElementById() ──
  document.getElementById("resultado-stats").innerHTML   = htmlStats;
  document.getElementById("resultado").innerHTML         = htmlChips;
  document.getElementById("resultado-tabla").innerHTML   = htmlTabla;
  document.getElementById("resultado-primos").innerHTML  = htmlPrimos;

  // Mostrar panel de resultados, ocultar placeholder vacío
  document.getElementById("resultado-wrapper").classList.remove("oculto");
  document.getElementById("resultado-vacio").classList.add("oculto");
}


/* ──────────────────────────────────────────────────────────────
   FUNCIÓN: esPrimo(numero)
   Verifica si un número es primo contando sus divisores.
   Si el contador es exactamente 2 (1 y sí mismo) → primo.
   Algoritmo base del documento del desafío.
   ────────────────────────────────────────────────────────────── */
function esPrimo(numero) {
  // 0 y 1 no son primos por definición
  if (numero < 2) return false;

  var contador = 0;

  for (var i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      contador++;
    }
  }

  // Si tiene exactamente 2 divisores → es primo
  return (contador == 2);
}


/* ──────────────────────────────────────────────────────────────
   FUNCIÓN: limpiar()
   Restablece el formulario y oculta los resultados.
   ────────────────────────────────────────────────────────────── */
function limpiar() {
  // Limpiar campos del formulario con getElementById()
  document.getElementById("terminos").value    = "";
  document.getElementById("ahorro-base").value = "";

  // Limpiar contenido de resultados con getElementById()
  document.getElementById("resultado-stats").innerHTML  = "";
  document.getElementById("resultado").innerHTML        = "";
  document.getElementById("resultado-tabla").innerHTML  = "";
  document.getElementById("resultado-primos").innerHTML = "";

  // Ocultar panel de resultados, mostrar placeholder vacío
  document.getElementById("resultado-wrapper").classList.add("oculto");
  document.getElementById("resultado-vacio").classList.remove("oculto");

  // Enfocar primer campo
  document.getElementById("terminos").focus();
}


/* ──────────────────────────────────────────────────────────────
   EVENTO: Enter en el formulario ejecuta calcular()
   ────────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("terminos").addEventListener("keydown", function (e) {
    if (e.key === "Enter") calcular();
  });
  document.getElementById("ahorro-base").addEventListener("keydown", function (e) {
    if (e.key === "Enter") calcular();
  });
});