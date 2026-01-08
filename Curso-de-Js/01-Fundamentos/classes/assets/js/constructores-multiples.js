

class Persona {

    static porObjeto({nombre, apellido, pais}) {
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
        
    }

    getInfo() {
        console.log(`info: ${this.nombre} , ${this.apellido}, ${this.pais}`);
    }
}

const fher  = {
    nombre: 'jose',
    apellido: 'Monterrey',
    pais: 'venezuela'
}

const   nombre1 = 'Melisa',
        apellido1 = 'Flores',
        pais1      = 'Honduras';


const persona1 = new Persona(nombre1, apellido1, pais1);
//const persona2 = new Persona(fher);

const persona2 = Persona.porObjeto(fher);

persona1.getInfo();