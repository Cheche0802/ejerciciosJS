
(() => {
    'use strict'


    let deck         = [];
    const tipos      = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];
    //Referencias del HTML

    const   btnPedir = document.querySelector('#btnpedir'),
            btndetener = document.querySelector('#btndetener'),
            btnnuevo = document.querySelector('#btnnuevo'),
            divCartasJugador = document.querySelector('#jugador-cartas'),
            divCartasComputadora = document.querySelector('#computadora-cartas'),
            puntosHTML = document.querySelectorAll('small');


    //esta funcion inicializa el juego
    const inicializarJuego = (numJugadores = 1) => {
        deck = crearDeck();
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
            
        }
    }

    /*
    *Crea un nuevo mazo de cartas
    */
    const crearDeck = () => {
        
        deck = [];
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

        return _.shuffle(deck);

    }

    // Esta funcion me permite tomar una carta
    const pedirCarta = () => {

        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }

        return deck.pop();
    }

    //valor de la carta
    const valorCarta = ( carta) => {
        const valor = carta.substring(0, carta.length -1);
        return (isNaN(valor) ) ?
                (valor === 'A') ? 11: 10
                : valor * 1 ;

    }

    const acumularPuntos = (puntosMinimos) => {

    }

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


})();