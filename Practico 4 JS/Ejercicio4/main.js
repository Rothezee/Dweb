let opciones = document.querySelectorAll("button");

opciones.forEach(function(opcion) {
    opcion.addEventListener("mouseover", function() {
        opcion.style.backgroundColor = "#caa045";
    });
});

opciones.forEach(function(opcion) {
    opcion.addEventListener("mouseout", function() {
        opcion.style.backgroundColor = "#997c3d";
    });
});
