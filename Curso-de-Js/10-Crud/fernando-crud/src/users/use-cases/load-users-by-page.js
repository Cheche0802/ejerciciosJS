
import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";


/***
 *  @param {Number} page
 *  @returns {Promise<User[]>}
 */
export const loadUsersByPage = async(page = 1) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    console.log(url);

    const res = await fetch(url);
    const data = await res.json();

    console.log('Tipo de data:', typeof data, 'Es arreglo:', Array.isArray(data));

    const rawUsers = Array.isArray(data) ? data : data.data;

    console.log('Tipo de data:', typeof rawUsers, 'Es arreglo:', Array.isArray(rawUsers));

    // 2. Ahora el .map() no fallará porque rawUsers es un Array
    const users = rawUsers.map(userLike => localhostUserToModel(userLike));

    console.log(users);
    
    return users


}