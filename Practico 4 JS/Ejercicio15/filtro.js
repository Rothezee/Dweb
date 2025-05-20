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

class Estudiante extends Persona {
    constructor(nombre, apellido, dni, fechaNacimiento, altura, peso, facultad, carrera, anocurso) {
        super(nombre, apellido, dni, fechaNacimiento, altura, peso);
        this.facultad = facultad;
        this.carrera = carrera;
        this.anocurso = anocurso;
    }
    verFacultad() {
        return this.facultad;
    }
    verCarrera() {
        return this.carrera;
    }
    verAnodecurso() {
        return this.anocurso;
    }
}

let estudiantes = [];
const fdni = document.getElementById("fdni");
const botondni = document.getElementById("filtrardni");

let datosGuardados = localStorage.getItem("estudiantes");
if (datosGuardados) {
    estudiantes = JSON.parse(datosGuardados).map(p => 
        new Estudiante(p.nombre, p.apellido, p.dni, p.fechaNacimiento, p.altura, p.peso, p.facultad, p.carrera, p.anocurso)
    );
    console.log("estudiantes cargadas desde localStorage:", estudiantes);
}

addEventListener("DOMContentLoaded", () => {
    mostrarEnTabla(estudiantes);/*llamo a la funcion con la lista completa de estudiantes*/
});

function FiltrarDNI(estudiantes, dni) {
    return estudiantes.filter(p => p.dni === dni);
}

/*Funcion para crear una tabla en base a la lista que se le pase como parametro*/
function mostrarEnTabla(lista) {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    lista.forEach(p => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${p.verNombre()}</td>
            <td>${p.verApellido()}</td>
            <td>${p.verDni()}</td>
            <td>${p.verFechaNacimiento()}</td>
            <td>${p.verAltura()}</td>
            <td>${p.verPeso()}</td>
            <td>${p.verFacultad()}</td>
            <td>${p.verCarrera()}</td>
            <td>${p.verAnodecurso()}</td>
        `;
        tbody.appendChild(tr);
    });
}

botondni.addEventListener("click", function () {
    console.log("tu vieja");
    filtrar = fdni.value;
    let resultado = FiltrarDNI(estudiantes, filtrar);
    console.log("Filtrar por DNI:", filtrar);
    console.log("Filtrar por DNI:", resultado);

    mostrarEnTabla(resultado);//llamo a la funcion con la lista filtrada por el dni
});
