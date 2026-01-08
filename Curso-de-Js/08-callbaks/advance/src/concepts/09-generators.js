

/***
 * Función que recibe un objeto con los elementos HTML y devuelve un objeto con los elementos HTML y las funciones para interactuar con ellos
 * @param {HTMLDivelements} elements
 * @returns {Object}
 */
export const functionGeneratorComponent = (element) => {

    const mygenerator = myFirstGeneratorFunction();
    console.log(mygenerator.next());

    //ejercicio de una funcion generadora

    const gen = idGenerator();
    console.log(gen);

    //ejecicion 2

    const button = document.createElement('button');
    button.innerHTML = 'Click me';
    element.append(button);

    const render = () => {
        const {value} = gen.next();
        button.innerHTML = `Click ${value}`;
    }

    button.addEventListener('click', render);
    //


}


function* idGenerator(){
    let id = 0;
    while(true){
        yield ++id;
    }
}   

function* myFirstGeneratorFunction(){

    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';
    return  'No hay valores';
}