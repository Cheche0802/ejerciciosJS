let a= 10;


if (a > 10 ){
    console.log('A es mayor que 10 ');
} else if (a < 10 ){
    console.log('A es menor que 10 ');
}else if (a >= 10) {
    console.log('A es mayor o igual que 10 ');
}

console.log('fin del programa');


const hoy = new Date();

let dia = hoy.getDay();

console.log(hoy);
console.log(dia);


if (dia === 0) {
    console.log('Hoy es domingo');
}else{
    if ( dia === 1) {
        console.log('Hoy es lunes');
    }else
    {
    console.log('Hoy no es domingo ni lunes')
    }
}


dia = 1;
//arreglo

const semana= ['Domigo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado' ];

console.log('Con arreglo',semana[dia] || 'Dia no definido');

//objetos

const semanas = {
    0: 'Domigo', 
    1: 'Lunes',
    2: 'Martes', 
    3: 'Miercoles', 
    4: 'Jueves', 
    5: 'Viernes', 
    6: 'Sabado' 
};

console.log('Con objetos', semanas[dia] || 'Dia no definido');
