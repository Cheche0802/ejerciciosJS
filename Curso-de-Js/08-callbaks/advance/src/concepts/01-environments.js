

/***
 * Función que recibe un objeto con los elementos HTML y devuelve un objeto con los elementos HTML y las funciones para interactuar con ellos
 * @param {HTMLDivelements} elements
 * @returns {Object}
 */
export const enviromentsComponets = (element) => {

    console.log(import.meta.env);

    const html = `
        variables: </br>
        Dev: ${import.meta.env.DEV} </br>
        Prod: ${import.meta.env.PROD} </br>
        API_KEY: ${import.meta.env.VITE_API_KEY} </br>
        URL: ${import.meta.env.VITE_BASE_URL} </br>
    `;

    element.innerHTML = html;

}