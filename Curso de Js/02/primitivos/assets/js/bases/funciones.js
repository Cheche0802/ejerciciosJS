console.log('Funciones');


function saludar() {
    console.log('Hola mundo');
}

saludar();

const saludar2 = function () {
    console.log('Hola mundo');
}

saludar2();

//con argumentos


function saludos(nombre) {
    console.log('Hola ' + nombre);
}

saludos();
saludos('Daniel');


const saludos2 = function (nombre) {
    console.log('Hola ' + nombre);
}

saludos2('Jose');

//landa function
const saludarFlecha = () => { 
    console.log('Saludos Flecha');
};

saludarFlecha();

const saludarFlecha2 = (nombre) => { 
    console.log('Saludos Flecha' +  nombre);
};

saludarFlecha2('Melisa');

//retorno de las funciones
function retunSaludar( nombre){
    console.log(arguments);
    console.log('Hola mundo', nombre);
    return 1;
};

const retornoSaludar = retunSaludar('pedro', 30, true, 'trabajo');
console.log(retornoSaludar);


function sumar(a, b) {

    return a + b;
    
};

console.log( sumar(1,2));

const sumar2 = (a,b) => {
    return a + b;
}

console.log(sumar2(4,5));

const sumar3 = (a,b) => a + b;

console.log(sumar3(7,58));


function getAleatorio() {
    return Math.random();
}

console.log( getAleatorio());


const getAleatorio2 = () => Math.random(); 

console.log(getAleatorio2());