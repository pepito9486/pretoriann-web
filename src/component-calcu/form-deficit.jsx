import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Deficit = () => {
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
      <h4>Que es el Balance Calorico</h4>
      <p>
        El balance calórico es la relación entre las calorías que consumes (a través de alimentos y bebidas) y las calorías que gastas (a través de tu metabolismo basal, actividad física y el efecto térmico de los alimentos).
        Es un factor crucial para el control del peso corporal y la composición física.

      </p>


      <h4>Que es un gasto calorico de mantenimiento</h4>
      <p>
        Consumes la misma cantidad de calorías que gastas, el objetivo es  Mantiener tu peso actual.  <br />
      </p>


      <h4>Que es el Deficit Calorico</h4>
      <p>
        Un déficit calórico ocurre cuando consumes menos calorías de las que tu
        cuerpo necesita para mantener tu peso actual.  <br />

        <i style={{ fontWeight: "bold" }}>¿Para que sirve?:</i> El déficit calórico es esencial para quienes buscan perder peso.
      </p>

      <h4>Que es el Superavit Calorico </h4>
      <p>
        Un superávit calórico, por otro lado, se produce cuando consumes más
        calorías de las que tu cuerpo necesita para mantener su peso. <br />
        <i style={{ fontWeight: "bold" }}>¿Para que sirve?:</i> Un superávit calórico es fundamental para ganar peso o aumentar masa muscular.
      </p>

      <h4>¿Como hacemos un balance calorico?</h4>
      <p>
        Primero y principal debemos calcular nuestra TASA METABOLICA BASAL, la cual la explicamos en el apartado anterior
        del Gasto Calorico Diario, en funcion de esto calcularemos nuestro deficit calorico si queremos perder peso, superavit calorico
        si queremos ganer peso, o seguir consumiendo las mismas calorias para mantenernos en nuestro peso actual.
      </p>

      <h4>Hagamos un ejemplo practico</h4>
      <p>
        <i style={{ fontWeight: "bold" }}>Persona buscando perder peso: </i><br />

        <i style={{ fontWeight: "bold" }}>TMB:</i> 2,000 calorías. <br />
        Déficit recomendado: 1,500-1,700 calorías por día. <br />

        <i style={{ fontWeight: "bold" }}>Persona buscando ganar músculo:</i> <br />

        <i style={{ fontWeight: "bold" }}>TMB:</i> 2,500 calorías. <br />
        Superávit recomendado: 2,750-3,000 calorías por día. <br />

      </p>
      <h4>Consideraciones Importantes</h4>
      <p>
        Debemos tener en cuenta que, si nuestro objetivo es ganar peso, lo ideal no es simplemente aumentar kilos de manera indiscriminada, sino enfocarnos en una ganancia de peso saludable centrada en el desarrollo muscular. Para ello, es fundamental realizar ajustes estratégicos en la distribución de los macronutrientes de nuestra dieta, priorizando un adecuado aporte de proteínas, carbohidratos y grasas saludables que respalden este objetivo.
      </p>



    </div>
  );
};

export default Deficit;
