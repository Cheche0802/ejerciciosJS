/**
 * 2C = two of Clubs   (Treboles)
 * 2D = two of Diamons (Diamantes)
 * 2H = two of Hearts  (Corazon)
 * 2S = two of Spades  (Espadas)
 */

let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora = 0;

//Referencias del HTML

const btnPedir = document.querySelector('#btnpedir');
const btndetener = document.querySelector('#btndetener');
const btnnuevo = document.querySelector('#btnnuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');


/*
 *Crea un nuevo mazo de cartas
 */
const crearDeck = () => {
    
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push( i + tipo);
        }
    }

    for (const tipo of tipos) {
        for (const esp of especiales) {
            deck.push( esp + tipo);
        }
        
    }


    console.log(deck);

    deck = _.shuffle(deck);
    console.log(deck);

    return deck;
}

crearDeck();

// Esta funcion me permite tomar una carta
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    //console.log('Carta pedida:', deck.pop());
    //console.log(deck);

    return deck.pop();
}

pedirCarta();

//valor de la carta

const valorCarta = ( carta) => {

    //extrar el valor de la carta
    const valor = carta.substring(0, carta.length -1);
    
    //console.log({valor});
    return (isNaN(valor) ) ?
            (valor === 'A') ? 11: 10
            : valor * 1 ;

    /*if (isNaN(valor)) {
        puntos = ( valor === 'A') ? 11 : 10;
    }else{
        console.log('Es un número');
        //se multiplica el valor por 1 para convertir valor de string a number
        puntos = valor * 1;
            console.log(puntos);
    }*/

}

//const valor = valorCarta(pedirCarta());
//console.log(valor);

//turno de la computadora
const turnoComputadora = (puntosMinimos) => {
    
    do {
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora +  valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        // <img class="carta" src="assets/cartas/2C.png" alt="" srcset="">-->

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }
    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));


    setTimeout(() => {
    
        if (puntosComputadora === puntosMinimos ) {
            alert('Nadie Ganó!!');
        }else if(puntosMinimos > puntosComputadora) { 
            alert('La computadora ganó');
        }else if (puntosComputadora > 21) {
            alert('Felicidades Ganaste');
        }else{
            alert('Felicidades Ganaste');
        }
    }, 10);
}

//Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();

    puntosJugador = puntosJugador +  valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    // <img class="carta" src="assets/cartas/2C.png" alt="" srcset="">-->

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21 ) {
        console.warn('Lo siento perdiste ');
        btnPedir.disabled =true;
        btndetener.disabled =true;
        turnoComputadora(puntosJugador);

    }else if (puntosJugador === 21){
        console.warn('Ganastes!!! ');
        btnPedir.disabled =true;
        btndetener.disabled =true;
    }

});

btndetener.addEventListener('click', () => {

        btnPedir.disabled =true;
        btndetener.disabled =true;
        turnoComputadora(puntosJugador);
});

btnnuevo.addEventListener('click', () => {

        btnPedir.disabled =false;
        btndetener.disabled =false;
        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;
        puntosJugador = 0;
        puntosComputadora = 0;

        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML = '';
        deck = [];
        deck= crearDeck();
});


