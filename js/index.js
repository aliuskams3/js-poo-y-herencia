

class Ciudadano {
    constructor(nombre,apellido,dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

    mostrar(){
        return(`El ciudadano ${this.nombre} ${this.apellido}, tiene el siguiente numero de dni: ${this.dni} `);
    }
}

class AltaBajaCiudadano extends Ciudadano{
    constructor(nombre,apellido,dni,activo){
        super(nombre,apellido,dni)
        this.activo = activo; 
    }

    MostrarEstado(){
        return `El ciudadano ${this.nombre} ${this.apellido} con dni: ${this.dni} ${this.activo} se encuentra activo`
    }
}

const ciudadano1 = new Ciudadano('juana','marrueco','6.459.632');
const ciudadano2 = new Ciudadano('oto','marin','5.789.62');
const ciudadano3 = new Ciudadano('ylli','jallal','28.749.452');

const ciudadano4 = new AltaBajaCiudadano('marco','perez','28.789.632','SI');
const ciudadano5 = new AltaBajaCiudadano('kraim','muurro','25.634.963','NO');

console.log(ciudadano1.mostrar());
console.log(ciudadano2.mostrar());
console.log(ciudadano3.mostrar());

console.log(ciudadano4.MostrarEstado());
console.log(ciudadano5.MostrarEstado());
