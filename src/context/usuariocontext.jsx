import { createContext, useState, useContext, useEffect } from "react";
import { requestregister, requestlogin, requestverifytoken } from '../API/peticiones';
import cookiess from 'js-cookie'

export const Thecontext = createContext()

export const usingcontext = () => {
    const context = useContext(Thecontext)
    if (!context) {
        throw new Error('no hay context')
    }
    return context;
}



//creamos el proveedor del contexto

export const Theprovider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [isauthenticate, setisauthenticate] = useState(false)
    const [errorU, seterrorU] = useState([])
    const [loading, setloading] = useState(true)

    const signup = async (user) => {

        try {
            const res = await requestregister(user);
            console.log(res.data)
            setuser(res.data)
            setisauthenticate(true)

        } catch (error) {
            console.log("el error", error.response)
            seterrorU(error.response.data)

        }


    }

    const login = async (user) => {
        try {
            const res = await requestlogin(user)
            setisauthenticate(true)
            console.log(res)
            setuser(res.data)
        } catch (error) {
            console.log('este error 2', error)
            console.log("el error", error.response.data)
            seterrorU([error.response.data])
        }

    }

    useEffect(() => {
        async function checklogin() {
            const cookie = cookiess.get()
            console.log('coqui', cookie)
            
            if (!cookie.token) {
                setisauthenticate(false)
                setloading(false)
                setuser(null)
                return 

             }
                try {
                    const res = await requestverifytoken(cookie.token)

                    if (!res.data) {
                    setisauthenticate(false)
                    setloading(false)
                    return setuser(null)
                   }
                   setisauthenticate(true)
                    setuser(res.data)

                    console.log('cookito', cookie.token)
                    console.log('respuesta del verify',res.data)

                } catch (error) {
                    setisauthenticate(false)
                    setuser(null)
                }

           
        }
        checklogin()

    }, [])


    return (
        <Thecontext.Provider value={{
            signup,
            login,
            loading,
            user,
            isauthenticate,
            errorU,

        }}>
            {children}
        </Thecontext.Provider>
    )
}






