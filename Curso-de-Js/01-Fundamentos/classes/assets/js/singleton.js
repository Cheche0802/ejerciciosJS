

class Singleton {

    static instancia;
    nombre = '';

    constructor(nombre = '') {
        
        console.log(Singleton.instancia);

        if (!!Singleton.instancia) {
            return Singleton.instancia; 
        }
        Singleton.instancia = this;

        this.nombre = nombre

    }
}

const instancia1 =  new Singleton('Ironman');
const instancia2 =  new Singleton('Spiderman');

const instancia2 =  new Singleton('BlackPanter');

console.log(`Nombre de la instancia es:  ${instancia1.nombre}`);

console.log(`Nombre de la instancia es:  ${instancia2.nombre}`);

console.log(`Nombre de la instancia es:  ${instancia3.nombre}`);