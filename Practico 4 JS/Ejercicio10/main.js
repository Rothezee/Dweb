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

function FiltrarDNI(personas, dni) {
    return personas.filter(persona => persona.dni === dni);
}

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar el envío del formulario
    // Obtener los valores de los campos del formulario
    let nuevapersona = new Persona(
        document.getElementById("nombre").value,
        document.getElementById("apellido").value,
        document.getElementById("dni").value,
        document.getElementById("fechaNacimiento").value,
        document.getElementById("altura").value,
        document.getElementById("peso").value
    );
});


