

let a = 10;
    b = 20;
    c = 30;
    d = 40;
    x = a + b;

console.log(x);
console.warn(x);
console.error(x);
// otra forma de imprimir las variable seria la siguiente

console.log('a', a);
console.log('b', b);
console.log('c', c);


//una tercera opcion seria la siguiente

console.log({a});
console.log({b});
console.log({c});

let z = 'Hola ';
    y = 'Spiderman';
    
//mostrar los datos como una tabla
console.table({a, b, c, d, y, z});

// las constantes ocupan menos espacio en memoria y son variables fijas

const saludo  = z + y;
console.log(saludo);
