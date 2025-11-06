

const fer = {
    nombre: 'Jose',
    edad: 32,
    imprimir () {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}



const ire = {
    nombre: 'irene',
    edad: 28,
    imprimir () {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

//fer.imprimir();

function Persona(nombre, edad) {
    console.log('Se ejecuto esta linea');
    
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir =  function () {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const maria = new Persona ('Maria, 18');

console.log(maria);

maria.imprimir();