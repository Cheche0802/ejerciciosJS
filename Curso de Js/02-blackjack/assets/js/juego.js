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
const divCartasJugador = document.querySelector('#jugador-cartas')

const puntosHTML = document.querySelectorAll('small')


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
        console.warn('Lio siento perdiste ');
        btnPedir.disabled =true;
    }else if (puntosJugador === 21){
        console.warn('Ganastes!!! ');
        btnPedir.disabled =true;
    }
});
