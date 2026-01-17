
import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";


/***
 *  @param {String│Number} id
 *  @returns {Promise<User>}
 */
export const getUserById = async(id) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    console.log(url);

    const res = await fetch(url);
    const data = await res.json();

    console.log('Tipo de data:', typeof data, 'Es arreglo:', Array.isArray(data));

    const rawUsers = Array.isArray(data) ? data : data.data;

    // 2. Ahora el .map() no fallará porque rawUsers es un Array
    const user =  localhostUserToModel(data); 
    console.log(user);
    
    return user


}