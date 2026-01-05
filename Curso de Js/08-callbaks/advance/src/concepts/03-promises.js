import { heroes } from "../data/heroes";

/***
 * Función que recibe un objeto con los elementos HTML y devuelve un objeto con los elementos HTML y las funciones para interactuar con ellos
 * @param {HTMLDivelements} elements
 * @returns {Object}
 */
export const promisesComponent = (element) => {

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderError = (error) => {
        element.innerHTML = `<h3>${error}</h3>`;
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
        <h3>${hero1.name}</h3>
        <h3>${hero2.name}</h3>
        `;
    }

    const id1 = '5d86371f233c9f2425f16916';
    const id2 = '5d86371fd55e2e2a30fe1ccb';

    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
    .catch(renderError);

    //promesas dentro de promesas

        /*findHero(id1)
            .then(hero => {
                hero1 = hero;
                return findHero(id2);
            })
            .then(hero2 => {
                renderTwoHeroes(hero1, hero2);
            })
            .catch(renderError);*/


    //ejecutando una promesa como callback
        /*findHero(id1)
        .then((hero1) => {
            findHero(id2)
            .then(hero2 => {
                renderTwoHeroes(hero1, hero2);
            })
            .catch(renderError);
        })
         .catch(renderError);*/

        
        
    

}


/**
 * 
 * @param {string} id 
 * @returns {Promise<Object>}
 * @returns 
 */
const findHero = (id) => {

    return  new Promise((resolve, reject) => { 

        const hero = heroes.find(hero => hero.id === id);

        if (hero){ 
            resolve(hero);
            return; 
        }else {
            reject(`No existe el héroe con el id ${id}`); 

        }

    });

    return  promises
    //


}