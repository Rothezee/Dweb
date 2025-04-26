let opciones = document.querySelectorAll("button");
let datos = ["Nombre", "Apellido", "Edad", "Ciudad", "Telefono", "Correo"];

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

document.getElementById("datos").addEventListener("click", function() {
    alert(datos.join(":\n"));
});