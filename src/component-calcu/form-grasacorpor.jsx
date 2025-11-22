import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Gcorporal = () => {
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
      <h4>Porcentaje de Grasa Corporal(BFP)</h4>
      <p>
        El porcentaje de grasa corporal es la proporción del peso total del cuerpo que está compuesta por grasa. Este valor es un indicador clave de la composición corporal y refleja el nivel de grasa acumulada en relación con otros componentes como músculos, huesos y agua.
      </p>
      <h4> ¿Para qué sirve?</h4>
      <p>
        1.-Ideal para monitorear el progreso en programas de pérdida de peso, ganancia muscular o mantenimiento. <br />
        2.-Ayuda a evaluar el riesgo de enfermedades como diabetes, enfermedades cardiovasculares y obesidad. <br />
        3.-Es relevante para atletas y personas activas que buscan mejorar su rendimiento o composición corporal.
      </p>
      {/*  style={{ fontSize: '13px' }}*/}
      <h4>¿Como se calcula?</h4>
      <p>
        BFP (Body Fat Percentage por sus siglas en inglés), existen varios metodos, pero aqui utilizaremos la formula de la marina de los EE.UU, Esta utiliza medidas específicas del cuerpo para estimar el porcentaje de grasa corporal. . <br />
        <strong>Hombres:</strong> <br />
        <span > BFP = 86.010 x log<sub>10</sub>(Cintura - Cuello) - 70.041 x log<sub>10</sub>(Altura) + 36.76  <br />
        </span>
        <strong>Mujeres:</strong> <br />
        <span >BFP = 163.205 x log<sub>10</sub>(Cintura + Cadera - Cuello) - 97.684 x log<sub>10</sub>(Altura) - 78 <br />
        </span>
      </p>

      <h4>Mediciones necesarias</h4>
      <p>

        <i style={{ fontWeight: "bold" }}>Cintura:</i> Perímetro del abdomen a nivel del ombligo, en centimetros. <br />
        <i style={{ fontWeight: "bold" }}>Cuello:</i> Perímetro justo debajo de la nuez de Adán, en centimetros. <br />
        <i style={{ fontWeight: "bold" }}>Cadera (solo para mujeres):</i> Perímetro en la parte más ancha de las caderas, en centimetros. <br />
        <i style={{ fontWeight: "bold" }}>Altura: </i>En centímetros, en centimetros. <br />
      </p>

      <h4>Ejemplos:</h4>
      <p>
        <strong>Hombre:</strong> <br />

        Cintura: 85 cm
        Cuello: 38 cm
        Altura: 175 cm

        Fórmula:

        <strong>BFP</strong>   = 86.010 x log <sub>10</sub> (85 - 38) - 70.041 x log <sub>10</sub>(175) + 36.76 <br />

        <strong>BFP</strong> = 86.010 x log <sub>10</sub> (47) - 70.041 x log <sub>10</sub>(175) + 36.76
        log <sub>10</sub> (47)= 1.672 aproximadamente.<br />
        log <sub>10</sub>(175) = 2.243 aproximadamente.<br />
        <strong>BFP</strong> = 86.010 x 1.672 - 70.041 x 2.243 + 36.76<br />
        <strong>BFP</strong> = 143.83 - 157.12 + 36.76 = 23.47%<br />

        <strong>Mujer:</strong> <br />
        Cintura: 70 cm
        Caderas: 95 cm
        Cuello: 34 cm
        Altura: 165 cm <br />

        <strong>BFP</strong> = 163.205 x log<sub>10</sub>(70 + 95 - 34) - 97.684 x log <sub>10</sub>(165) - 78.387



      </p>

      <h4>Rangos recomendados del porcentaje de grasa corporal</h4>
      <p>
        <strong>Hombres:</strong><br />
        <span class="descripcion">Atletas:</span> 6%-13%<br />
        <span class="descripcion">Fitness:</span> 14%-17%<br />
        <span class="descripcion">Saludable:</span> 18%-24%<br />
        <span class="descripcion">Sobrepeso:</span> &gt;25%
      </p>
      <p>
        <strong>Mujeres:</strong><br />
        <span class="descripcion">Atletas:</span> 14%-20%<br />
        <span class="descripcion">Fitness:</span> 21%-24%<br />
        <span class="descripcion">Saludable:</span> 25%-31%<br />
        <span class="descripcion">Sobrepeso:</span> &gt;32%
      </p>

    </div>
  );
};

export default Gcorporal;
