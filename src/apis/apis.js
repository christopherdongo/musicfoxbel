
import axios from 'axios'



const clienteAxios = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com',
    method: "GET",
    headers: {
        "x-rapidapi-key": "889d084971mshcbf6c1a399b2097p1ed71ejsn3d5a9d16c2a8",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "useQueryString": true
    }, 
})

export default clienteAxios