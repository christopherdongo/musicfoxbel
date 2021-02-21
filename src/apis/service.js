import axios from 'axios'

//const backend ='https://foxbelmusicserver.herokuapp.com/'

//api de signin
const clienteAxios2 = axios.create({
    baseURL: 'http://localhost:5000'
})

export default clienteAxios2