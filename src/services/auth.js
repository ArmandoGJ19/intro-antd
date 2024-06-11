import axios from 'axios';
import {ENV} from "../utils/constants";
const register = async (name, password, email, lastname) => {
    return await axios.post(`${ENV.API_URL}/${ENV.ENDPOINTS.REGISTER}`, {
        name,
        password,
        email,
        lastname,
        roles: ['servicios_escolares']
    })
};
const loginF = async (email, password) => {
    return await axios.post(`${ENV.API_URL}/${ENV.ENDPOINTS.LOGIN}`, {
        email,
        password
    })
};
export default {register, loginF};

