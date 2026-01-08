import { heroes } from "../data/heroes";

/***
 * Función que recibe un objeto con los elementos HTML y devuelve un objeto con los elementos HTML y las funciones para interactuar con ellos
 * @param {HTMLDivelements} elements
 * @returns {Object}
 */
export const asyncawaitComponent = async(element) => {

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f25a058e5b1c8a65e';

    console.time('Start');

        try {
            
            const hero1 = await findHero(id1);
            console.log(hero1);
            const hero2 = await findHero(id2);
            console.log(hero2);

            element.innerHTML = `${hero1.name} <br> ${hero2.name}`;

        } catch (error) {
            element.innerHTML = error;
        }

        
    /*    findHero(id1)
            .then(console.log)
            .catch(console.log);

        findHero(id2)
            .then(console.log)
            .catch(console.log);*/

    /*const heroes = await Promise.all([
        findHero(id1),
        findHero(id2),
    ]);

    console.log(heroes);

    console.timeEnd('End');

    element.innerHTML = heroes.join('<br>');*/

}


const findHero = async (id) => {
    const hero = heroes.find((hero) => hero.id === id);
    if (!hero) {
        throw new Error(`Hero with id ${id} not found`);
    }
    return hero;
}