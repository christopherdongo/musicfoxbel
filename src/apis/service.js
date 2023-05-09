import axios from 'axios'

// const backend ='https://foxbelmusicserver.herokuapp.com/'
const backend ='http://localhost:9000/'

//api de signin
const clienteAxios2 = axios.create({
    baseURL: backend
})

export default clienteAxios2