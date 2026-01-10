
/**
 * @returns {Promise Object}
 */

const fetchQuote = async () => {

    const num = Math.floor(Math.random() * 826) + 1;
    
    // Usamos la variable num para que sea aleatorio cada vez
    const res = await fetch(`https://rickandmortyapi.com/api/character/${num}`);

    const data = await res.json();
    
    // data ya es el personaje, no necesitas entrar a results[0]
    console.log(data); 

    return data;
}


/**
 * 
 * @param {HTMLDivElement} elemt
 * @returns 
 */
export const BreakingbadApp = async(elemt) => {

    document.querySelector('#add-title').innerHTML = 'Rick and Morty';
    elemt.innerHTML = 'Loading...';

    //const quote = await fetchQuote();

    //elemt.innerHTML = 'Tenemos data';

    const quoleLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next character';

    //añadir listener
    nextQuoteButton.addEventListener('click', async() => {
        elemt.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote(quote);
    });
    
    const renderQuote = (quote) => {
        quoleLabel.innerHTML = quote.name;
        authoLabel.innerHTML = quote.status;
        elemt.replaceChildren(quoleLabel, authoLabel, nextQuoteButton);
    }

    fetchQuote()
        .then(renderQuote );
} 

