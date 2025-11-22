import axios from "./axios";

export const createproduct  = (producto)=> axios.post('/createproduct', producto )

export const getproductreq = () => axios.get('/getproducts')

export const getoneproductreq = (ids) => axios.get(`/getproduct/${ids}`)

export const editproductreq = (producto,id)=> axios.put(`/updateproduct/:${id}`,producto)





