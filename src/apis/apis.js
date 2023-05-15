
import axios from 'axios'


//api de deezer
const clienteAxios = axios.create({
    baseURL: `${process.env.REACT_APP_URL_API_DEZER}`,
    method: "GET",
    headers: {
        "x-rapidapi-key": `${process.env.REACT_APP_API_RAPIDAPI_KEY}`,
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "useQueryString": true
    }, 
})


export default clienteAxios