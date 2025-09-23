
let a = 10;

let b = a;

console.log(a, b);

a = 30;

console.log(a, b);

let juan = {
    nombre: 'juan',
};

let ana = juan;

console.log(ana, juan);

ana.nombre = 'Ana';

console.log(ana, juan);

const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});

let anas = {...juan};
console.log(anas);

const cambiaNombres = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peters = { nombre: 'Peter'};
let tonys = cambiaNombre(peters);
console.log({peters, tonys});

//arreglos

const frutas = ['Manzana', 'Pera', 'Uva'];

const otrasFrutas = frutas;

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas});


const otrasFrutass = [...frutas];

otrasFrutass.push('kiwi');

console.table({ frutas, otrasFrutass});


//terceraforma
console.time('slice');
otraFruta = frutas.slice();
console.timeEnd('slice');


console.time('spread');
otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otraFruta.push('melon');
console.table({ frutas, otraFruta});


//
