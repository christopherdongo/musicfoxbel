import axios from 'axios'

//api de signin
const clienteAxios2 = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
})

export default clienteAxios2;