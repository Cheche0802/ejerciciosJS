console.log( `Objeto literal`);

const personajes = {
    nombre: 'Tonny',
    codName: 'Ironman',
    vivo: false,
    edad: 40,
    cords:{
        lat:34.034,
        lng: -118.70,
    },
    trajes: [`Mark I`, `Hulk boster`, `Mark V`],
    direccion: {
        zipcode: '10880, 90265',
        ubicacion: `Malibu California`,
    },
    ultima_pelicula: 'Infinity war',
};

console.log(personajes);

console.log(`Nombre `, personajes.nombre);

console.log(`Nombre `, personajes['nombre']);

console.log(`Edad `, personajes.edad);

console.log(`Cordenadas `, personajes.cords);
console.log(`Cordenadas `, personajes.cords.lat);
console.log(`Cordenadas `, personajes.cords.lng);

console.log(`N° de trajes `, personajes.trajes.length);

console.log(`ultimo Traje `, personajes.trajes[personajes.trajes.length - 1]);

const x = `vivo`;

console.log('Vivo', personajes[x]);


//mas detalles

delete personajes.edad

console.log(personajes);
personajes.casado = true;
const entriesPares = Object.entries(personajes);

console.log(entriesPares);

Object.freeze(personajes);

personajes.dinero = 10000000000000000000;

console.log(personajes);


//el object.freze congela todas las propiedasdes del objeto

const propiedades = Object.getOwnPropertyNames(personajes);
console.log({propiedades});

const valores = Object.values(personajes);
console.log({valores});
