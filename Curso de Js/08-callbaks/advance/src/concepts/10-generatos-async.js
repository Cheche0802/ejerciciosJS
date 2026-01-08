import { heroes } from "../data/heroes";

/***
 * Función que recibe un objeto con los elementos HTML y devuelve un objeto con los elementos HTML y las funciones para interactuar con ellos
 * @param {HTMLDivelements} elements
 * @returns {Object}
 */
export const generatorAsyncComponent = async(element) => {

    const heroGenerator = getHeroGenerator();
    let isFinished = false;


    do {

        const {value, done} = await heroGenerator.next();
        isFinished = done;
        if (isFinished) break; 
        element.innerHTML = value;

    }while (!isFinished);
}

async function* getHeroGenerator() {
    
    for (const hero of heroes){
        await sleep();
        yield hero.name;
    }
}


const sleep =() => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve()
        }, 2000);
    });
}