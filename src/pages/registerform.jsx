import {useForm} from 'react-hook-form'
import { useEffect } from 'react'
import { usingcontext } from '../context/usuariocontext';
 import{useNavigate}  from 'react-router-dom'
 

function Registerpage() {
    const {register, handleSubmit,formState:{errors} } = useForm();
    const{signup,user,isauthenticate,errorU}= usingcontext()
      const navigate = useNavigate()
      console.log(user)
       console.log(isauthenticate)

useEffect(()=>{
  if(isauthenticate) navigate("/profile")
},[isauthenticate])
    
      
     const onsubmit = handleSubmit(async(values)=>{
          signup(values)
         console.log(values)
      }) 



    return (
        <div className='register'>
          {errorU.map((error, i)=>(<div key={i}>{error}</div>))}
            <form onSubmit={onsubmit}>
              {errorU.map((error, i)=>{<p>{error}</p>})}
              Nombre <input type="text" {...register("username", {required:true})}/>{errors.username && (<p>username is required</p>)}
              Email <input type="text" {...register("email", {required:true})}/>{errors.email && (<p>email is required</p>)}
              Password <input type="text" {...register("password",{required:true})}/>{errors.password && (<p>password is required</p>)}
            <button type='submit'>Register</button>



            </form>
        </div>
    );
}


export default Registerpage;
