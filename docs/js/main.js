/* ET 3 · Gemini Certified Student
   JavaScript sin dependencias. No guarda datos ni usa cookies. */
(function () {
  "use strict";

  /* ---------- Menú móvil ---------- */
  var boton = document.querySelector(".nav-boton");
  var nav = document.getElementById("menu-principal");
  var escritorio = window.matchMedia("(min-width: 56rem)");

  function setMenu(abierto) {
    if (!boton || !nav) return;
    boton.setAttribute("aria-expanded", String(abierto));
    nav.setAttribute("data-abierta", String(abierto));
  }

  if (boton && nav) {
    // Sin JS el menú queda visible; con JS arranca cerrado en móvil.
    setMenu(escritorio.matches);
    boton.addEventListener("click", function () {
      setMenu(boton.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && boton.getAttribute("aria-expanded") === "true" && !escritorio.matches) {
        setMenu(false);
        boton.focus();
      }
    });
    var alCambiar = function (e) { setMenu(e.matches); };
    if (escritorio.addEventListener) escritorio.addEventListener("change", alCambiar);
    else if (escritorio.addListener) escritorio.addListener(alCambiar);
  }

  /* ---------- Checklists con barra de progreso ---------- */
  document.querySelectorAll("[data-progreso-de]").forEach(function (progreso) {
    var lista = document.getElementById(progreso.getAttribute("data-progreso-de"));
    if (!lista) return;
    var casillas = lista.querySelectorAll('input[type="checkbox"]');
    var texto = progreso.querySelector(".progreso__texto");
    var relleno = progreso.querySelector(".progreso__relleno");

    function actualizar() {
      var hechas = 0;
      casillas.forEach(function (c) { if (c.checked) hechas++; });
      var total = casillas.length;
      var mensaje = hechas + " de " + total + " listos";
      if (hechas === total && total > 0) mensaje += " · ¡Todo listo!";
      texto.textContent = mensaje;
      relleno.style.width = (total ? (hechas / total) * 100 : 0) + "%";
    }
    casillas.forEach(function (c) { c.addEventListener("change", actualizar); });
    actualizar();
  });

  /* ---------- Autoevaluación ---------- */
  var quiz = document.getElementById("quiz");
  if (quiz) {
    var preguntas = quiz.querySelectorAll("fieldset[data-correcta]");
    var resultado = document.getElementById("quiz-resultado");

    document.getElementById("quiz-corregir").addEventListener("click", function () {
      var bien = 0;
      preguntas.forEach(function (p) {
        var elegida = p.querySelector("input:checked");
        var devolucion = p.querySelector(".quiz__devolucion");
        devolucion.className = "quiz__devolucion";
        if (!elegida) {
          devolucion.textContent = "Te faltó responder esta.";
          devolucion.classList.add("quiz__devolucion--mal");
        } else if (elegida.value === p.getAttribute("data-correcta")) {
          bien++;
          devolucion.textContent = "✔ ¡Bien!";
          devolucion.classList.add("quiz__devolucion--bien");
        } else {
          devolucion.textContent = "✘ Revisá esta idea en el curso o con tu grupo.";
          devolucion.classList.add("quiz__devolucion--mal");
        }
      });
      var total = preguntas.length;
      var frase = bien === total ? "¡Impecable! Estás en muy buen camino."
        : bien >= total - 2 ? "¡Muy bien! Repasá las que marcamos."
        : "Todavía hay que repasar. ¡Para eso está el grupo!";
      resultado.textContent = bien + " de " + total + " correctas. " + frase;
    });

    document.getElementById("quiz-reiniciar").addEventListener("click", function () {
      quiz.querySelectorAll("input:checked").forEach(function (i) { i.checked = false; });
      quiz.querySelectorAll(".quiz__devolucion").forEach(function (d) {
        d.textContent = "";
        d.className = "quiz__devolucion";
      });
      resultado.textContent = "";
      var primera = quiz.querySelector("input");
      if (primera) primera.focus();
    });
  }

  /* ---------- Imprimir ---------- */
  document.querySelectorAll("[data-imprimir]").forEach(function (b) {
    b.addEventListener("click", function () { window.print(); });
  });

  /* ---------- Copiar texto ---------- */
  document.querySelectorAll("[data-copiar]").forEach(function (b) {
    var origen = document.getElementById(b.getAttribute("data-copiar"));
    var estado = document.getElementById("estado-copia");
    b.addEventListener("click", function () {
      var texto = origen ? origen.textContent : "";
      var avisar = function (msj) { if (estado) estado.textContent = msj; };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(texto).then(
          function () { avisar("¡Copiada!"); },
          function () { avisar("No se pudo copiar: seleccioná el texto a mano."); }
        );
      } else {
        var rango = document.createRange();
        rango.selectNodeContents(origen);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(rango);
        try { avisar(document.execCommand("copy") ? "¡Copiada!" : "Texto seleccionado: copialo con Ctrl+C."); }
        catch (e) { avisar("Texto seleccionado: copialo con Ctrl+C."); }
      }
    });
  });
})();
