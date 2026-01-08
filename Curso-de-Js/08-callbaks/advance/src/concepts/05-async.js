
import { heroes } from "../data/heroes";

/***
 * Función que recibe un objeto con los elementos HTML y devuelve un objeto con los elementos HTML y las funciones para interactuar con ellos
 * @param {HTMLDivelements} elements
 * @returns {Object}
 */
export const asyncComponent = (element) => {

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f25a058e5b1c8a65e';

    console.log(findHero(id1));
    findHero(id1)
        .then(name => element.innerHTML = name)
        .catch(error => element.innerHTML = error)

        console.log('inicio de componente')
    /*    findHero(id1)
        .then(console.log)
        .catch(error => element.innerHTML = error)*/
        console.log('fin del componente');

}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async(id) => {

    const hero  =  heroes.find(hero => hero.id === id);

    if(!hero)
        throw `Hero with id ${id} not found`;

    return hero?.name;

} 