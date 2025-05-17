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
    return personas.filter(p => p.dni === dni);
}

function FiltrarApellido(personas, apellido) {
    return personas.filter(p => p.apellido === apellido);
}

function FiltrarPeso(personas, peso) {
    return personas.filter(p => p.peso === peso);
}

function FiltrarAltura(personas, altura) {
    return personas.filter(p => p.altura === altura);
}

const fdni = document.getElementById("fdni");
const botondni = document.getElementById("filtrardni");

botondni.addEventListener("click", function () {
    console.log("tu vieja");
    filtrar = fdni.value;
    let resultado = FiltrarDNI(personas, filtrar);
    console.log("Filtrar por DNI:", filtrar);
    console.log("Filtrar por DNI:", resultado);
});

const apellido = document.getElementById("apellido");
const botonapellido = document.getElementById("filtrarapellido");

botonapellido.addEventListener("click", function () {
    filtrar = apellido.value;
    let resultado = FiltrarApellido(personas, filtrar);
    console.log("Filtrar por Apellido:", filtrar);
    console.log("Filtrar por Apellido:", resultado);
});

const peso = document.getElementById("peso");
const botonpeso = document.getElementById("filtrarpeso");
botonpeso.addEventListener("click", function () {
    filtrar = peso.value;
    let resultado = FiltrarPeso(personas, filtrar);
    console.log("Filtrar por Peso:", filtrar);
    console.log("Filtrar por Peso:", resultado);
});

const altura = document.getElementById("altura");
const botonaltura = document.getElementById("filtraraltura");
botonaltura.addEventListener("click", function () {
    filtrar = altura.value;
    let resultado = FiltrarAltura(personas, filtrar);
    console.log("Filtrar por Altura:", filtrar);
    console.log("Filtrar por Altura:", resultado);
});
