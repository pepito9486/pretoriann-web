import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Calorias = () => {
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
      <h4>Que es el gasto calorico diario</h4>
      <p>
        es la estimación de la cantidad total de calorías que tu cuerpo quema en
        un día, considerando todas las actividades y funciones corporales. Este
        cálculo es importante para ajustar la dieta y los hábitos de ejercicio,
        ya que permite saber cuántas calorías necesitas consumir para mantener
        tu peso actual, ganar músculo o perder grasa.
      </p>
      <h4>¿Para que Sirve?</h4>
      <p>El cálculo del gasto calórico diario es una herramienta fundamental para comprender cuántas calorías necesita tu cuerpo para mantener su funcionamiento y apoyar tus actividades diarias. Esto es útil para: <br />
      </p>
      <h4>Control de Peso:</h4> <br />
      <p>
        <span style={{ fontStyle: "oblique", fontWeight: "bold" }}>Pérdida de peso:</span> Consumir menos calorías de las que gastas crea un déficit calórico. <br />
        <span style={{ fontStyle: "oblique", fontWeight: "bold" }}>Ganancia de peso:</span> Consumir más calorías de las que gastas genera un superávit calórico. <br />
        <span style={{ fontStyle: "oblique", fontWeight: "bold" }}>Mantenimiento:</span> Consumir calorías equivalentes al gasto diario mantiene tu peso. <br />

      </p>

      <h4>¿Como se calcula el Gasto Calorico Diario?</h4>
      <p>
        El gasto calórico diario (también llamado <i style={{ fontWeight: "bold" }}>TDEE</i>, Total Daily Energy Expenditure) combina las calorías quemadas por el metabolismo basal y las actividades diarias.
      </p>
      <p><strong>1.- Tasa Metabólica Basal (TMB o BMR):</strong> Es la cantidad de energía que tu cuerpo necesita en reposo para realizar funciones básicas (respirar, bombear sangre, etc.).
        Se calcula con fórmulas como la de Harris-Benedict:</p>
      <p>
        <strong>Hombres:</strong> <br />
        <i style={{ fontWeight: "bold" }}>TMB</i>=10 x peso(kg) + 6.25 x altura(cm) - 5 x edad(años) + 5
      </p>

      <p>
        <strong>Mujeres:</strong> <br />
        <i style={{ fontWeight: "bold" }}>TMB</i>=10 x peso(kg) + 6.25 x altura(cm) - 5 x edad(años) - 161
      </p>



      <p>
        <strong>2.- Factor de Actividad Fisica</strong> <br />
        <i style={{ fontWeight: "bold" }}>Sedentario:</i>(poco o ningún ejercicio) x <i style={{ fontWeight: "bold" }}>1.2</i> <br />
        <i style={{ fontWeight: "bold" }}>Ligero:</i> (ejercicios de 1-3 días a la semana) x <i style={{ fontWeight: "bold" }}>1.2375 </i><br />
        <i style={{ fontWeight: "bold" }}>Moderado:</i>  (ejercicios de 3-5 días a la semana) x <i style={{ fontWeight: "bold" }}>1.55</i> <br />
        <i style={{ fontWeight: "bold" }}>Activo:</i> (ejercicios de  6-7 días a la semana) x <i style={{ fontWeight: "bold" }}>1.725</i> <br />
        <i style={{ fontWeight: "bold" }}>Muy activo:</i>  (ejercicio muy intenso y trabajo físico diario) x <i style={{ fontWeight: "bold" }}>1.9</i>

      </p>

      <p>
        <strong>3.- Calculo Final</strong> <br />
        TDEE = TMB x Factor de Actividad
      </p>

      <h4>Ejemplo</h4>
      <p>
        Hombre de 30 años, 70 kg, 175 cm, actividad moderada. <br />
        TMB = 10 x 70 + 6.25 x 175 - 5 x 30 + 5 = 1667.5 <br />
        TDEE = 1667.5 x 1.55 = 2584.63 calorias/dia <br /> <br />
        Este hombre necesita 2584 calorías diarias para mantener su peso con su nivel de actividad. Para perder peso podría reducir su ingesta calórica, mientras que para ganar peso aumentaría su consumo.









      </p>

    </div>
  );
};

export default Calorias;
