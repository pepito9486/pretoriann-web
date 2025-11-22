import React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
 import { usingcontext } from '../context/usuariocontext';
 import { useNavigate } from 'react-router-dom';








function Login() {

    const { register, handleSubmit,formState:{errors}} = useForm()
     const{login,user,errorU,isauthenticate} =usingcontext()
    const navigate = useNavigate()
     
    const onsubmit = handleSubmit(async(values)=>{
         login(values)
       console.log(values)
    }) 
       
    useEffect(()=>{
     if(isauthenticate) navigate('/product')
    },[isauthenticate])
     

    return (
        <div>
             {errorU.map((error,i)=>(<p key={i}>{error}</p> ))}
             {/* {errorU.map((error, i)=>(<div key={i}>{error}</div>))} */}
            
            <form onSubmit={onsubmit}>
             <h2>email</h2><input type="text" {...register('email', { required: true })} />
             <h2>password</h2><input type="text" {...register('password', { required: true })}/>
                <button>loguearse</button>
            </form>
        </div>
    );
}

export default Login;