import { heroes } from "../data/heroes"


/***
 * Función que recibe un objeto con los elementos HTML y devuelve un objeto con los elementos HTML y las funciones para interactuar con ellos
 * @param {HTMLDivelements} elements
 * @returns {Object}
 */
export const callabaksComponent = (element) => {

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f2343e37870b91ef1';
    findHero( id1, (error, hero1) => {
       // element.innerHTML = hero?.name || `No existe el héroe con el id ${id1}`
       if (error) {
            element.innerHTML = error;
            return;
        }


        findHero( id2, (error, hero2) => {

            if (error) {
                    element.innerHTML = error;
                    return;
                }
            element.innerHTML = `
            <h3>${hero1.name}</h3>
            <h3>${hero2.name}</h3>
            `;

    
        });
    });

}


/**
 * 
 * @param {String} id 
 * @param {(error: String | null, hero: Object)=> void ) } callback 
 */
const findHero = (id, callback) => {

    const hero = heroes.find(hero => hero.id === id);

    if (!hero) {
        callback(`No existe el héroe con el id ${id}`);
        return;
    }

    callback(null, hero);
}