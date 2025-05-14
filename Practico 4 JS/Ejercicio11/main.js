/*Ejercicio 11. Defina la  clase estudiante, que es hija de la clase persona con los datos adicionales de
facultad, carrera, año que cursa.*/

// Definición de la clase Persona
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

}