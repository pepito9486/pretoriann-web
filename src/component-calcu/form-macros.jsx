import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Macros = () => {
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
    <>
    
    <div className="formularios">
    <h4>Macronutrientes y su Distribución Ideal</h4>
<p>
Los <strong>macronutrientes</strong> son los nutrientes que nuestro cuerpo necesita en grandes cantidades para obtener energía y llevar a cabo funciones vitales. Los principales macronutrientes son: <br />
&#8226; <strong>Carbohidratos</strong> <br />
&#8226; <strong>Proteínas</strong> <br />
&#8226; <strong>Grasas</strong> <br />
Cada uno cumple un rol específico en el organismo, y su distribución depende de factores como la edad, el género, los objetivos (pérdida de peso, mantenimiento, ganancia muscular) y el nivel de actividad física.
</p>

<h4>Funciones de los Macronutrientes</h4>
<p>
&#8226; <strong>Carbohidratos (4 kcal/g):</strong> <br />
Rol principal: Fuente principal de energía. <br />
Fuentes saludables: Frutas, verduras, cereales integrales, legumbres. <br />
Recomendación general: Representan la mayor parte de la ingesta calórica. Alimentan el cerebro y los músculos durante el ejercicio. <br /><br />

&#8226; <strong>Proteínas (4 kcal/g):</strong> <br />
Rol principal: Reparación y crecimiento de tejidos, especialmente músculos. <br />
Fuentes saludables: Carnes magras, pescado, huevos, lácteos, legumbres, tofu. <br />
Recomendación general: Indispensables para mantener la masa muscular y otras funciones corporales. <br /><br />

&#8226; <strong>Grasas (9 kcal/g):</strong> <br />
Rol principal: Fuente concentrada de energía, necesaria para la absorción de vitaminas liposolubles (A, D, E, K) y la salud hormonal. <br />
Fuentes saludables: Frutos secos, aguacate, aceite de oliva, pescados grasos (omega-3). <br />
Recomendación general: Priorizar grasas saludables sobre saturadas o trans. <br />
</p>

<h4>Distribución Ideal de Macronutrientes</h4>
<p>
La proporción ideal de macronutrientes varía según metas y estilo de vida. Algunas recomendaciones generales son: <br /><br />

<strong>Mantenimiento del Peso:</strong> <br />
&#8226; Carbohidratos: 45%-65% <br />
&#8226; Proteínas: 10%-35% <br />
&#8226; Grasas: 20%-35% <br /><br />

<strong>Pérdida de Peso:</strong> <br />
&#8226; Carbohidratos: 40%-50% <br />
&#8226; Proteínas: 25%-35% <br />
&#8226; Grasas: 20%-30% <br /><br />

<strong>Ganancia de Masa Muscular:</strong> <br />
&#8226; Carbohidratos: 45%-55% <br />
&#8226; Proteínas: 20%-35% <br />
&#8226; Grasas: 20%-30% <br /><br />

<strong>Deportistas de Resistencia:</strong> <br />
&#8226; Carbohidratos: 55%-70% <br />
&#8226; Proteínas: 15%-25% <br />
&#8226; Grasas: 20%-30% <br />
</p>

<h4>Personalización de la Distribución</h4>
<p>
<strong>1. Calcular las Calorías Diarias:</strong> <br />
Primero necesitas conocer tu gasto calórico total (TDEE). A partir de este número, asigna las proporciones de macronutrientes.<br /><br />

<strong>2. Ajustar a Tu Objetivo:</strong> <br />
&#8226; Para <strong>pérdida de grasa</strong>, reduce carbohidratos y aumenta proteínas. <br />
&#8226; Para <strong>ganar músculo</strong>, aumenta carbohidratos y proteínas, manteniendo un superávit calórico. <br />
&#8226; Para <strong>mejorar el rendimiento deportivo</strong>, prioriza carbohidratos para entrenamientos intensos. <br /><br />

<strong>3. Fórmula de Repartición (gramos):</strong> <br />
&#8226; Proteínas: 1.2-2.2 g por kg de peso corporal. <br />
&#8226; Grasas: 0.8-1 g por kg de peso corporal. <br />
&#8226; Carbohidratos: Lo que reste de las calorías totales. <br />
</p>

<h4>Ejemplo Práctico</h4>
<p>
<strong>Persona de 70 kg:</strong> <br />
TDEE: 2,500 kcal <br />
&#8226; Proteínas: 2 g/kg = 140 g = 560 kcal <br />
&#8226; Grasas: 0.8 g/kg = 56 g = 504 kcal <br />
&#8226; Carbohidratos: Lo que sobra = 1,436 kcal / 4 = 359 g <br />
</p>


     
    </div>
    </>
  );
};

export default Macros;
