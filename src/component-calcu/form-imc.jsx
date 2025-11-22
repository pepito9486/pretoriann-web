import React, {
  useState
} from 'react';
import { useForm } from 'react-hook-form'

const Imc = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [genero, setGenero] = useState("");
  const [valor, setvalor] = useState(null)



  // useEffect(()=>{
  //   if(isauthenticate) navigate("/profile")
  // },[isauthenticate])


  const onsubmit = handleSubmit(async (values) => {
    setvalor(values)
    console.log(values)
  })

  const handleChange = (event) => {
    setGenero(event.target.value);  // Almacena el valor seleccionado
  };


  return (
    <div className="formularios">
      <h4>El Peso Ideal</h4>
      <p>
        El peso ideal se utiliza para estimar el peso saludable personalizado de
        una persona en función de su altura y género.
      </p>
      <h4> ¿Para qué sirve?</h4>
      <p>
        El cálculo del peso ideal proporciona un rango
        saludable de peso que puede ayudar a las personas a evitar problemas de
        salud relacionados con el sobrepeso o el bajo peso.
        orienta sobre qué peso sería adecuado para mantener una buena salud
        general.
      </p>
      {/* style={{ fontSize: '14px' }}> */}
      <h4>¿Como se calcula?</h4>
      <p>
        El peso ideal en este caso la calcularemos mediante la formula de Hamwi. <br />
        <strong>Hombres:</strong> <br /> <span >Peso Ideal(kg) = 48 + 1.1 x (altura en centimetros - 152.4)</span>  <br />
        <strong>Mujeres:</strong> <br /> <span >Peso Ideal(kg) = 45.5 + 0.9 (altura en centimetros - 152.4)</span>
      </p>

      <h4>Consideraciones</h4>
      <p>
        Estas foromulas no son absolutamente precisas, solo dan una referencia de lo que deberia ser nuestro peso ideal. <br />

      </p>

    </div>
  );
};

export default Imc;