let opciones = document.querySelectorAll("img");

opciones.forEach(function(opcion) {
    opcion.addEventListener("mouseover", function() {
        opcion.style.transform = "scale(1.5)";
    });
});

opciones.forEach(function(opcion) {
    opcion.addEventListener("mouseout", function() {
        opcion.style.transform = "scale(1)";
    });
});