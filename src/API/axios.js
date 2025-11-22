import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials:true,
    // headers: {
    //       'Content-Type': 'multipart/form-data', // Especifica el tipo de contenido como multipart/form-data
    //     }
})

export default instance











