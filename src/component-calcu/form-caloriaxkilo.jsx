import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Caloriaxkilo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [genero, setGenero] = useState("");
  const [valor, setvalor] = useState(null);

  // useEffect(()=>{
  //   if(isauthenticate) navigate("/profile")
  // },[isauthenticate])

  const onsubmit = handleSubmit(async (values) => {
    setvalor(values);
    console.log(values);
  });

  const handleChange = (event) => {
    setGenero(event.target.value); // Almacena el valor seleccionado
  };

  return (
    <div className="formularios">
     
      <form onSubmit={onsubmit}>
        <label htmlFor="estatura">Gasto Calorico Diario</label>
        <input type="number" />

        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Caloriaxkilo;
