import  {createTodoHTML} from './';
import { Todo } from "../models/todo.models" ;


let element;
/**
 * 
 * @param {String} elementoId 
 * @param {Todo} todos 
 */
export const renderTodos = (elementoId, todos = [] ) => {

    if (!element)
        element = document.querySelector(elementoId);
    console.log(elementoId, todos);
    // TODO: referencia
    if (!element) throw new Error(`Element ${elementoId} not found`);

    element.innerHTML = '';

    todos.forEach(todo => {
        element.append( createTodoHTML(todo) );
    });
}