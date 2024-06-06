import {ENV} from "../utils/constants";

const setToken = (token) => {
    localStorage.setItem(ENV.STORAGE.TOKEN, token);
}
const getToken = () => {
    return localStorage.getItem(ENV.STORAGE.TOKEN);
}
const removeToken = () => {
    localStorage.removeItem(ENV.STORAGE.TOKEN);
}
export const storageController = {
    setToken,
    getToken,
    removeToken
}