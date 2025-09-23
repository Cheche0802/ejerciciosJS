

/**
 * Dias de semana abrimos a las 11
 * pero los fines de semana abrimos a las 9
 */

//Entra a un sitio web, para consultar si esta abierto hoy

const dia = 2; // 0: domingo

const horaActual = 10;

let horaApertura;
let mensaje; //Esta abierto, y hoy abrimos a las xx:XX

if( dia === 0 || dia === 6){
    console.log('Fin de semana')
    horaApertura= 9;
}else{
    console.log ('Dia de semana');
    horaApertura=11;
}

if (horaActual >= horaApertura){
    mensaje = 'Esta Abierto';
}else{
    mensaje = `Esta cerrado, hot abrimos a las: ${horaApertura}`  ;
}
console.log({horaApertura, mensaje});
console.warn('===== segunda forma ====');
if ([0,6].includes(dia)) {
    console.log('Fin de semana')
    horaApertura= 9;
}else{
    console.log ('Dia de semana');
    horaApertura=11;
}

console.log({horaApertura, mensaje});

console.warn('===== Con el operador ternario ====');

horaApertura = ([0,6].includes(dia)) ? 9 : 11;



mensaje = ( horaActual >= horaApertura ?'Esta Abierto' : `Esta cerrado, hot abrimos a las: ${horaApertura}`)

console.log({horaApertura, mensaje});