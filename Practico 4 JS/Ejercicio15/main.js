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

let datosGuardados = localStorage.getItem("estudiantes");
if (datosGuardados) {
    estudiantes = JSON.parse(datosGuardados).map(p => 
        new Estudiante(p.nombre, p.apellido, p.dni, p.fechaNacimiento, p.altura, p.peso, p.facultad, p.carrera, p.anocurso)
    );
    console.log("estudiantes cargadas desde localStorage:", estudiantes);
}

document.querySelector("#contactoForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar el envío del formulario
    // Obtener los valores de los campos del formulario
    let nuevoestudiante = new Estudiante(
        document.getElementById("nombre").value,
        document.getElementById("apellido").value,
        document.getElementById("dni").value,
        document.getElementById("fechaNacimiento").value,
        document.getElementById("altura").value,
        document.getElementById("peso").value,
        document.getElementById("facultad").value,
        document.getElementById("carrera").value,
        document.getElementById("ano").value
    );

    estudiantes.push(nuevoestudiante); // Agregar la nuevo estudiadnte al array
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
    estudiantes.forEach(estudiantes => {
        JSON.stringify(estudiantes);
    }); // Convertir cada objeto estudiante a JSON

    console.log("estudiantes en el arreglo:", estudiantes);
    console.log("Persona agregada:", nuevoestudiante.verDatos()); 
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = ""; 
    document.getElementById("dni").value = ""; 
    document.getElementById("fechaNacimiento").value = ""; 
    document.getElementById("altura").value = ""; 
    document.getElementById("peso").value = ""; 
    document.getElementById("facultad").value = "";
    document.getElementById("carrera").value = "";
    document.getElementById("ano").value = "";
});
