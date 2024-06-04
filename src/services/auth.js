import axios from 'axios';

const register = async (name, email, password, lastname) => {
return await axios.post('https://evaluacion-2.vercel.app/api/users/', {
    name,
    password,
    email,
    lastname,
    roles: ['servicios_escolares']
},{
    headers: {
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTk3NDMzMWM2MTc0MjcyZDY1NDUwZiIsIm5hbWUiOiJrYXJsYSBlcmlrYSIsImxhc3RuYW1lIjoicm9ibGVzIHZhcmdhcyIsImlhdCI6MTcxNzQ3MDQ4MSwiZXhwIjoxNzE3NTU2ODgxfQ.pc8GWJAzhjSiBTXa8WkUHSXSwkUmvwg7fWZs0Q9FK24'
    }
})
};
const loginF = async (email, password) => {
    return await axios.post('https://evaluacion-2.vercel.app/api/auth/signin', {
        email,
        password
    })
};
export default { register, loginF };

