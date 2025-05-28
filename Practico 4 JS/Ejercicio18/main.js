const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const dni = document.getElementById("dni");
const mail = document.getElementById("mail");
const dir = document.getElementById("dir");
const enviar = document.getElementById("enviar");
const limpiar = document.getElementById("limpiar");

enviar.addEventListener("click", (e) => {
    e.preventDefault();

    let errores = [];

    if (nombre.value.length <= 2) {
        errores.push("El nombre debe tener al menos 2 caracteres");
    }
    if (apellido.value.length <= 2) {
        errores.push("El apellido debe tener al menos 2 caracteres");
    }
    if (dni.value.length !== 8 || isNaN(dni.value)) {
        errores.push("El DNI debe tener 8 dígitos numéricos");
    }
    if (!mail.value.includes("@") || !mail.value.includes(".")) {
        errores.push("El correo electrónico debe ser válido");
    }
    if (dir.value.length < 5) {
        errores.push("La dirección debe tener al menos 5 caracteres");
    }
    if (errores.length > 0) {
        alert(errores.join("\n"));
    } else {
        alert("Formulario enviado correctamente");
        // Aquí podrías enviar el formulario o realizar otra acción
    }
});

limpiar.addEventListener("click", (e) => {
    e.preventDefault();
    nombre.value = "";
    apellido.value = "";
    dni.value = "";
    mail.value = "";
    dir.value = "";
    alert("Formulario limpiado");
});