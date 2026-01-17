import { loadUsersByPage } from "../use-cases/load-users-by-page";


const state = {
    currentPage: 0,
    users: [],
}


const loadNextPage = async() => {
  const users =  await loadUsersByPage(state.currentPage + 1); 
  if (users.length === 0) return;

  state.currentPage += 1;
  state.users = users;
}

const loadPreviousPage = async() => {
    
    if (users.length === 1) return;
    const users =  await loadUsersByPage(state.currentPage - 1); 

    state.currentPage -= 1;
    state.users = users;
}

/**
 * 
 * @param {User} updateduser 
 */
const onUserChanged = (updateduser) => {

    let wasFound = false;

    state.users = state.users.map( user => {
        if (user.id === updateduser.id) {
            wasFound = true;
            return updateduser;
        }
        return updateduser;
    });

    if (state.users.length < 10 && !wasFound) {
        state.users.push(updateduser);
    }
}

const reloadPage = async() => {
    const users =  await loadUsersByPage(state.currentPage); 
    if (users.length === 0) {
        await loadPreviousPage();
        return
    }
    state.users = users;
}


export default {
    getCurrentPage: () => state.currentPage,
    getUsers: () => [...state.users],
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
}
