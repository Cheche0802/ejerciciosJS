console.log('Pro tips');


function crearPersona(nombre, apellido) {
    return {
        nombre : nombre,
        apellido: apellido
    }

};


const persona = crearPersona('Jose', 'Monterrey');


console.log(persona);

//optimizando funcion

function crearPersona2(nombre, apellido) {
    return {nombre, apellido }

};

const persona2 = crearPersona2('Jose', 'Monterrey');

console.log(persona2);

//creado como funcion de flecha

const crearPersonaFlecha = (nombre, apellido) => {
    return {nombre, apellido }
};

console.log(crearPersonaFlecha('Daniel', 'Monterrey'));


const crearPersonaFlecha2 = (nombre, apellido) => ({nombre, apellido })


console.log(crearPersonaFlecha2('Daniel', 'Hidalgo'));


function imprimeArgumentos() {
    console.log(arguments);
};

imprimeArgumentos(10, true, 'jose', 'monterrey', 50, false);

const imprimeArgumentos2 = (...args) => {
    //console.log(args);
    return args
};

const [edad , casado, vivo, nombre, apellido] = imprimeArgumentos2(10, true, 'jose', 'monterrey', 50, false);

console.log({edad, casado, vivo, nombre, apellido});

const {apellido: nuevoApellido} = crearPersona('caracas', 'miranda');

console.log({nuevoApellido});


const tony = {
    nombre: 'Tonny',
    codName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: [`Mark I`, `Hulk boster`, `Mark V`],
    ultima_pelicula: 'Infinity war',
}

const imprimePropiedades = (personajes)=> {
    console.log('nombre',personajes.nombre);''
    console.log('codName',personajes.codName);''
    console.log('vivo',personajes.vivo);''
    console.log('edad',personajes.edad);''
    console.log('trajes',personajes.trajes);''
    console.log('ultima_pelicula',personajes.ultima_pelicula);
};

imprimePropiedades(tony);

//mejorando el proceso

const imprimePropiedades2 = ({nombre,codName,vivo,edad, trajes,ultima_pelicula })=> {
    console.log({nombre});
    console.log({codName});
    console.log ({vivo});
    console.log({edad});
    console.log({trajes});
    console.log({ultima_pelicula});
};

imprimePropiedades2(tony);