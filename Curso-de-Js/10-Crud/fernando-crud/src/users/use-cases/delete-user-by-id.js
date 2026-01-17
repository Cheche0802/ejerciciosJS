

/***
 * @param {String│number} id
 */
export const deleteUserbyid = async(id) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const res = await fetch(url, {
        method: 'DELETE',
    });

    const deleteUser = await res.json();
    console.log({deleteUser});

    return true;
}