import React,{
    useState} from 'react';
import {useForm} from 'react-hook-form'

const Rcm = () => {
    const {register, handleSubmit,formState:{errors} } = useForm();
    const [genero, setGenero] = useState("");
    const [valor,setvalor] = useState(null)
    
    

// useEffect(()=>{
//   if(isauthenticate) navigate("/profile")
// },[isauthenticate])
    
      
     const onsubmit = handleSubmit(async(values)=>{
          setvalor(values)
         console.log(values)
      }) 

      const handleChange = (event) => {
        setGenero(event.target.value);  // Almacena el valor seleccionado
      };


    return (
      <>
        <div className="formularios">
           <h4>¿Que es el Ritmo Cardiado Maximo (RCM)?</h4>
              <p>
              El ritmo cardíaco máximo (RCM) es el número máximo de latidos que tu corazón puede alcanzar por minuto durante una actividad física intensa.
              </p>
              <h4>¿Para que Sirve?</h4>
               <p>
               Es un indicador importante para planificar entrenamientos cardiovasculares de manera segura y efectiva, ya que permite determinar zonas de frecuencia cardíaca según tus objetivos (quema de grasa, mejora de la resistencia, etc.).
               </p>
           <h4>¿Cómo calcular el Ritmo Cardíaco Máximo (RCM)?</h4>
           <p>
           La fórmula más común y sencilla para calcularlo es: <br />
           RCM = 220 - edad
           </p>
            <h4>Ejemplo</h4>
            <p>
              Suponiendo una edad de 30 años. <br />
              RMC = 220 - 30 = 190 LPM (Latidos por Minuto)
            </p>
        </div>
        </>
      );
};

export default Rcm;