console.log('Arreglos2');


let juegos = ['FF8', 'LOL', 'FIFA', 'SUPER SMASH BRO'];
console.log('Largo: ', juegos.length);
//recorretr un arreglo
let primero = juegos[0];
let ultimo = juegos[juegos.length-1];

console.log(primero, ultimo);


juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr})
});

//añadir un campo al arreglo 

let nuevaLongitud = juegos.push('Dragon Ball');

console.log( {nuevaLongitud, juegos});


//si lo deseo agregar al principio

let primera = juegos.unshift('megaman');

console.log( {primera, juegos});

//eliminar uno del arreglo

let juegoBorrado = juegos.pop();

console.log({juegoBorrado, juegos});


let posicion = 1

let juegosBorrados = juegos.splice(posicion, 2);

console.log({juegosBorrados, juegos})


//saber en que posicion esta un objeto dentro del arreglo

let variableJuego = juegos.indexOf('SUPER SMASH BRO');

console.log({variableJuego});
