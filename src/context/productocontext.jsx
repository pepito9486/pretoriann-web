import React, { Children } from 'react';
import { useContext, createContext,useState } from 'react';
import { createproduct } from '../API/peticionesproduct';
import { getproductreq,getoneproductreq, editproductreq} from '../API/peticionesproduct';
import { usingcontext } from './usuariocontext';

const thecontexto = createContext()

export const usecontext = ()=>{
     const context = useContext(thecontexto) 
     if(!context){
         throw new Error('no hay contexto')
     }
       return context
       
    }

export const Providerproduct = ({children})=>{
     const{user}= usingcontext()
     console.log('este es el user',user)
    // const[userin,setuserin]=useState(user)
      
    

    const [product,setproduct] = useState([])
    const [productone,setproductone] = useState([])

    const productnew = async (file)=>{
        try {
            const res = await createproduct(file)
            console.log(res)
        } catch (error) {
            console.log(error.response)
        }
        
    }


    const mostrarproducto = async ()=>{
   
        try {
               const producto = await  getproductreq()
          if(producto) {
              setproduct(producto.data)
              console.log('datos de producto',producto.data)
              console.log('estados',product)
          }
     
        } catch (error) {
    
            console.error(error.response)
        }
      }

       const productuser = async (usuario)=>{
        
        try {
           
            // const usuario = 'jsdhfjksjf'
            console.log('usuario en contexto',usuario)
          const oneproducto = await getoneproductreq(usuario)
            setproductone(oneproducto.data)
            console.log('un producto',oneproducto.data)

        } catch (error) {
            console.log(error)
        }
             
      }

      const editarproducto = async(producto)=>{

         try {
            const editar = editproductreq(producto)
         } catch (error) {
            console.log(error)
         }


      }

    return(
        <thecontexto.Provider value={{
          productnew,
          product,
          mostrarproducto,
          productuser,
          productone,
          editarproducto,
        //   user



        }}>
            {children}
        </thecontexto.Provider>
    )

}







