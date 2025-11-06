

class Persona {
 
    nombre = '';
    codigo = '';
    frase  = '';

    constructor(nombre= 'no existe', codigo= 'no existe', frase= 'no existe'){
        //console.log('Hola!');

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
    }

    quienSoy (){
        console.log(`Soy ${this.nombre} y  mi identidad es ${this.codigo}`);
    }

    miFrase(){
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}


const spiderman =  new Persona('perter', 'spiderman', 'yo soy tu amigo y vecino el hombre araña');
const ironman =  new Persona('tony', 'ironman', 'yo soy ironman');
console.log(spiderman);
console.log(ironman)

spiderman.quienSoy();
ironman.quienSoy();

spiderman.miFrase();
ironman.miFrase();