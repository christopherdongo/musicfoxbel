import axios from 'axios'

const backend ='https://foxbelmusicserver.herokuapp.com/'

//api de signin
const clienteAxios2 = axios.create({
    baseURL: backend
})

export default clienteAxios2