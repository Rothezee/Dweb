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

addEventListener("DOMContentLoaded", () => {
    cargarPersonas();
});

function cargarPersonas() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = ""; // Limpiar tabla existente

    personas.forEach(p => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${p.verNombre()}</td>
            <td>${p.verApellido()}</td>
            <td>${p.verDni()}</td>
            <td>${p.verFechaNacimiento()}</td>
            <td>${p.verAltura()}</td>
            <td>${p.verPeso()}</td>
        `;
        tbody.appendChild(tr);
    });
}
