/*Ejercicio 10: Defina una función que permita cargar un arreglo de objetos Persona y luego mostrar
los datos de una persona según:
a) por dni
b) por apellido
c) por rango de peso
d) por rango de altura
*/

// Definición de la clase Persona

let filtrar;
class Persona {
    constructor(nombre, apellido, dni, fechaNacimiento, altura, peso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        this.altura = altura;
        this.peso = peso;
    }

    verNombre() {
        return this.nombre;
    }
    verApellido() {
        return this.apellido;
    }
    verDni() {
        return this.dni;
    }
    verFechaNacimiento() {
        return this.fechaNacimiento;
    }
    verAltura() {
        return this.altura;
    }
    verPeso() {
        return this.peso;
    }
    verDatos() {
        return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, DNI: ${this.dni}, Fecha de Nacimiento: ${this.fechaNacimiento}, Altura: ${this.altura}, Peso: ${this.peso}`;
    }
}

let personas = [];

let datosGuardados = localStorage.getItem("personas");
if (datosGuardados) {
    personas = JSON.parse(datosGuardados).map(p => 
        new Persona(p.nombre, p.apellido, p.dni, p.fechaNacimiento, p.altura, p.peso)
    );
    console.log("Personas cargadas desde localStorage:", personas);
}


function FiltrarDNI(personas, dni) {
    return personas.filter(persona => persona.dni === dni);
}

function FiltrarApellido(personas, apellido) {
    return personas.filter(p => p.apellido === apellido);
}

function FiltrarPeso(personas, min, max) {
    return personas.filter(p => p.peso >= min && p.peso <= max);
}

function FiltrarAltura(personas, min, max) {
    return personas.filter(p => p.altura >= min && p.altura <= max);
}


document.querySelector("#contactoForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar el envío del formulario
    alert("Formulario enviado"); // Mostrar alerta al enviar el formulario
    // Obtener los valores de los campos del formulario
    let nuevapersona = new Persona(
        document.getElementById("nombre").value,
        document.getElementById("apellido").value,
        document.getElementById("dni").value,
        document.getElementById("fechaNacimiento").value,
        document.getElementById("altura").value,
        document.getElementById("peso").value
    );
    personas.push(nuevapersona); // Agregar la nueva persona al array
    localStorage.setItem("personas", JSON.stringify(personas));
    personas.forEach(persona => {
        JSON.stringify(persona);
    }); // Convertir cada objeto persona a JSON

    console.log("Personas en el arreglo:", personas); // Mostrar el arreglo de personas en la consola
    console.log("Persona agregada:", nuevapersona.verDatos()); // Mostrar la nueva persona en la consola
    document.getElementById("nombre").value = ""; // Limpiar el campo de nombre
    document.getElementById("apellido").value = ""; // Limpiar el campo de apellido
    document.getElementById("dni").value = ""; // Limpiar el campo de dni
    document.getElementById("fechaNacimiento").value = ""; // Limpiar el campo de fecha de nacimiento
    document.getElementById("altura").value = ""; // Limpiar el campo de altura
    document.getElementById("peso").value = ""; // Limpiar el campo de peso

});

const fdni = getElementById("fdni");
const botondni = getElementById("filtrardni");

botondni.addEventListener("click", function () {
    console.log("tu vieja");
    filtrar = fdni.value;
    FiltrarDNI(personas, filtrar);
    console.log("Filtrar por DNI:", filtrar);
});




