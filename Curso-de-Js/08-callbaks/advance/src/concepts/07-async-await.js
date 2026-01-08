

/***
 * Función que recibe un objeto con los elementos HTML y devuelve un objeto con los elementos HTML y las funciones para interactuar con ellos
 * @param {HTMLDivelements} elements
 * @returns {Object}
 */
export const asyncawait2Component = async(element) => {

    console.time('Start');
    /*const value1 = await slowPromise();
    const value2 = await mediumPromise();
    const value3 = await fastPromise();
    */

    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]);


    element.innerHTML = `
        <h1>Async Await 2</h1>
        <h3>${value1}</h3>
        <h3>${value2}</h3>
        <h3>${value3}</h3>
    `;

    console.timeEnd('Start');
}




const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow Promise')
    }, 2000);
})

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium Promise')
    }, 1500);
})

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast Promise')
    }, 1000);
})