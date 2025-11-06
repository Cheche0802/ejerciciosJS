

class Persona {
 //segun las reglas es 1 propiedades y metodos estaticos
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    //segundo la clase constructor
    constructor(nombre= 'no existe', codigo= 'no existe', frase= 'no existe'){
        //console.log('Hola!');

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
    }
    //sets y gets
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    // y los metodos
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

spiderman.setComidaFavorita = 'El pie de cereza de tia may';

console.log(spiderman.getComidaFavorita);
console.log(spiderman)

