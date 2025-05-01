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
        console.log(this.nombre);
    }
    verApellido() {
        console.log(this.apellido);
    }
    verDni() {
        console.log(this.dni);
    }
    verFechaNacimiento() {
        console.log(this.fechaNacimiento);
    }
    verAltura() {
        console.log(this.altura);
    }
    verPeso() {
        console.log(this.peso);
    }
    verDatos() {
        console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, DNI: ${this.dni}, Fecha de Nacimiento: ${this.fechaNacimiento}, Altura: ${this.altura}, Peso: ${this.peso}`);
    }
}