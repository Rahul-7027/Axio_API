import axios from "axios";

const api=axios.create({
    baseURL:`https://www.omdbapi.com/`
})

export const getServies=()=>{
    return api.get(`?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`)
}