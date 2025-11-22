import axios from './axios'

// const Api = 'http://localhost:5000/api'

export const requestregister = (user)=> axios.post('/register', user)
export const requestlogin = (user)=> axios.post('/login', user)
export const requestverifytoken = () => axios.get('/verify')//para obtener datos del backend del token en cuestion



