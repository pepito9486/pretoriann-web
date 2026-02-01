import { useState } from 'react'; //rsc
import Slider from "../components/slider";
import Baner from '../components/baner';
import { Helmet } from "react-helmet-async";

const Dietas = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [subactiveIndex, setsubActiveIndex] = useState(null);

  const bannersDietas = [
    {
      img: '/img-banner-principal/libro-banner1-dietas.webp',
      title: 'Prepara tus Recetas Fitness con Sabor',
      link: '/afiliados/dietas',
      boton: 'Ver en Amazon',
    },
    // {
    //   img: '/img-banner-principal/dieta-banner2-dietas.webp',
    //   title: '¿Qué Dieta es la Mejor para Ti?',
    //   link: '/blog/comparativa-dietas',
    //   boton: 'Leer artículo',
    // },
  ];



  const coloresDietas = ['#003366', '#003366', '#003366'];
  // En el componente donde quieras utilizar el carrusel:



  function toggleAccordion(index) {

    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    setsubActiveIndex((prevIndex) => (prevIndex === index ? null : index)); toggleAccordionsub
  }

  function toggleAccordionsub(index) {


    setsubActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }


  return (
    <>
      <Helmet>
        {/* 🔹 SEO General */}
        <title>Dietas Fitness | Tu Sitio Fitness</title>
        <meta
          name="description"
          content="Explora ejemplos de dietas fitness adaptadas a tus objetivos: definición, volumen o mantenimiento. Aprende a distribuir tus comidas y a combinar los macronutrientes correctamente."
        />
        <meta
          name="keywords"
          content="dietas fitness, plan de alimentación, nutrición deportiva, dieta para definición, dieta para volumen, comidas saludables, balance de macros, menú fitness"
        />
        <meta name="author" content="Tu Sitio Fitness" />

        {/* 🔹 Open Graph para redes sociales */}
        <meta property="og:title" content="Dietas y Planes de Alimentación Fitness" />
        <meta property="og:description" content="Conoce ejemplos de dietas fitness según tu objetivo, aprende cómo estructurar tus comidas y optimiza tus resultados con una buena nutrición." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tusitiofitness.com/dietas" />
        <meta property="og:image" content="https://tusitiofitness.com/img-banner-principal/dietas-banner.webp" />
        <meta property="og:locale" content="es_ES" />

        {/* 🔹 SEO técnico */}
        <link rel="canonical" href="https://tusitiofitness.com/dietas" />
      </Helmet>



      <Baner banners={bannersDietas} colores={coloresDietas} />
      <Slider clase1={"main-card"} clase2={"info-card"} />
      <div className="nutricion-principal">
        <h1 className="title-nutricion">Dietas y Plan Alimenticio</h1>
        <article >
          <p>
            Empecemos por conocer que una dieta es el conjunto de alimentos y
            bebidas que una persona consume habitualmente. No se refiere solo a
            planes restrictivos para bajar de peso, Pero si a un patron de
            consumo alimenticio para lograr un objetivo en nuestro cuerpo, ya
            sea para mantener la salud, mejorar el rendimiento físico o cumplir
            con necesidades específicas. Una dieta equilibrada incluye una
            combinación adecuada de macronutrientes (carbohidratos, proteínas y
            grasas) y micronutrientes (vitaminas y minerales) que proporcionan
            los nutrientes necesarios para el correcto funcionamiento del
            organismo. La dieta varía según las preferencias, el estilo de vida
            y los objetivos de cada individuo, en este apartado hablaremos de
            las dietas en base al gasto calorico, y dietas en base al tipo de
            Alimentos que vamos a consumir.
          </p>

        </article>
        <div className='acordeon' onClick={() => toggleAccordion(1)}>
          <h3>Tipos de Dietas en relacion al gasto calorico</h3>
          {activeIndex === 1 ? (
            <i className="fa-solid fa-angle-up acordeon-icon"></i>
          ) : (
            <i className="fa-solid fa-angle-down acordeon-icon"></i>
          )}
        </div>
        <div className='macros'
          style={{ maxHeight: activeIndex === 1 ? "800px" : "0" }}>
          <p>
            Este tipo de dietas se basan en el consumo de alimentos teniendo en
            cuenta la la cantidad de calorias que cada uno de estos aportan al
            final del dia, existen 3 tipos. la hipocalorica, la hipercalorica y
            la normacalorica,
          </p>
          <h3>Dieta Hipocalorica</h3>
          <p>
            <em style={{ fontWeight: "bold" }}>Definicion:</em> Es aquella dieta
            en la que la ingesta calórica es menor que las necesidades
            energéticas del cuerpo, o lo que es lo mismo llegar a un deficit
            calorico.
          </p>
          <p>
            <i style={{ fontWeight: "bold" }}>Objetivo:</i> Perdida de peso.
          </p>
          <h3>Dieta Hipercalorica</h3>
          <p>
            <i style={{ fontWeight: "bold" }}>Definicion:</i> Es aquella en la
            que la ingesta calórica es mayor que las necesidades energéticas del
            cuerpo.
          </p>
          <p>
            <i style={{ fontWeight: "bold" }}>Objetivo:</i> ganancia de peso.
            nota:se busca ganar mayor masa muscular.
          </p>

          <h3>Dieta Normocalorica</h3>
          <p>
            <i style={{ fontWeight: "bold" }}>Definicion:</i> Es aquella en la
            que la ingesta calórica es relativamente igual a las necesidades
            energéticas del cuerpo.
          </p>
          <p>
            <i style={{ fontWeight: "bold" }}>Objetivo:</i> mantener el peso
            actual.
          </p>
        </div>

        <div className='acordeon' onClick={() => toggleAccordion(2)}>
          <h3>Tipos de Dietas segun los alimentos</h3>
          {activeIndex === 2 ? (
            <i className="fa-solid fa-angle-up acordeon-icon"></i>
          ) : (
            <i className="fa-solid fa-angle-down acordeon-icon"></i>
          )}
        </div>

        <div className='macros' style={{ maxHeight: activeIndex === 2 ? "800px" : "0" }}>
          <h3>Dieta Cetogenica</h3>
          <p>
            Se basa en los patrones alimentarios de las regiones mediterráneas,
            centrada en alimentos frescos, aceite de oliva, pescado, frutas,
            verduras, nueces y legumbres.
          </p>
          <h3>Dieta Paleo:</h3>
          <p>
            Se inspira en la dieta de nuestros antepasados del Paleolítico,
            enfocándose en alimentos no procesados como carne magra, pescado,
            frutas, verduras y frutos secos.
          </p>
          <h3>Dieta Vegetariana:</h3>
          <p>
            Excluye la carne animal, pero puede incluir productos lácteos y
            huevos en diferentes variantes (ovo-vegetariana, lacto-vegetariana,
            ovo lacto-vegetariana).
          </p>
          <h3>Dieta Vegana: </h3>
          <p>
            Excluye todos los productos de origen animal, incluyendo carne,
            lácteos y huevos.Basada en alimentos de origen vegetal. Puede
            requerir suplementos de vitamina B12 y otros nutrientes.
          </p>

        </div>

        <section className=''>
          <h2 className='h2-planalimenticio'>Cómo Crear Plan Alimenticio</h2>

          <p>
            Cuando hablamos de dieta, a menudo pensamos en restricciones, reglas estrictas y algo que difícilmente podremos mantener a largo plazo. Esta percepción convierte las dietas en sinónimo de sacrificio temporal en lugar de un estilo de vida sostenible.
          </p>

          <p>
            En lugar de enfocarnos en regímenes limitantes, ¿por qué no centrarnos en desarrollar hábitos alimenticios saludables y equilibrados? Crear un plan alimenticio personalizado, que incluya alimentos que se ajusten a nuestras necesidades, preferencias y la disponibilidad local, es una manera efectiva de mantenernos en el camino hacia una nutrición adecuada sin sentirnos atrapados en restricciones rígidas.
          </p>


          <p>
            <i style={{ fontWeight: "bold" }}>Un plan alimenticio</i> es una guía personalizada que organiza tus comidas y porciones diarias en función de tus objetivos nutricionales, necesidades energéticas y estilo de vida. No se trata de seguir una dieta estricta, sino de aprender a equilibrar los alimentos para mantener una alimentación saludable y sostenible.
          </p>

          <div className='acordeon' onClick={() => toggleAccordion(3)}>
            <h3>¿Como creamos un Plan Alimenticio?</h3>
            {activeIndex === 3 ? (
              <i className="fa-solid fa-angle-up acordeon-icon"></i>
            ) : (
              <i className="fa-solid fa-angle-down acordeon-icon"></i>
            )}
          </div>

          <div className="macros" style={{ maxHeight: activeIndex === 3 ? "800px" : "0" }}>

            <p>
              Para lograr el éxito es fundamental seguir una estructura que te permita alcanzar tus objetivos de manera efectiva. Esto implica identificar tus metas, evaluar tus necesidades nutricionales y establecer un enfoque práctico y sostenible. Tener en cuenta estos puntos será clave para que tu plan sea funcional y duradero.
            </p>
            <h3>Cual es el Camino..</h3>
            <p>Vamos a explicar los pasos que podemos seguir para hacer nuestro plan alimenticio con un ejemplo practico.</p>
            <h4 style={{ fontWeight: "bold" }}>Introduccion al caso de Juan</h4>
            <p>Juan mide 175 cm, pesa 70 kg, tiene 35 años y lleva una dieta normal, sin excesos ni restricciones. Realiza actividad física moderada dos veces por semana y trabaja en un restaurante, lo que lo mantiene en movimiento. Su meta es subir 6 kg de peso de manera saludable. Para lograrlo, seguiremos una serie de pasos estructurados que garantizarán que los kilos ganados sean proporcionales y estén enfocados en una adecuada distribución de macronutrientes.</p>

            <div className="card-planalimenticio">
              <h4>1. Establecer metas claras</h4>
              <p>
                El primer paso es definir el objetivo de manera específica. En el caso de Juan, quiere ganar 6 kg, pero no cualquier tipo de peso. Es importante que esta ganancia provenga principalmente de masa muscular, manteniendo un balance en los macronutrientes. Esto implica un mayor enfoque en el consumo de proteínas, acompañado de una cantidad adecuada de carbohidratos y grasas saludables.
              </p>
            </div>


            <div className="card-planalimenticio"> <h4>2. Calcular el peso ideal</h4>
              <p>
                Aunque Juan desea subir 6 kg, calcular su peso ideal nos da una referencia para determinar si esta meta es razonable y saludable. Con fórmulas como la de Devine o Hamwi, y considerando su estatura de 175 cm, el peso ideal puede oscilar entre 68-75 kg, dependiendo de su composición corporal. Esto confirma que su meta es viable dentro de un rango saludable.
              </p></div>

            <div className="card-planalimenticio">
              <h4>3. Calcular el gasto calórico diario</h4>
              <p>
                Conocer el gasto calórico diario es fundamental para establecer un superávit calórico adecuado. Usamos la fórmula de Harris-Benedict para calcular su Tasa Metabólica Basal (TMB):
              </p>
              <p>
                <i style={{ fontWeight: "bold" }}>TMB =</i> 66.47 + (13.75 x 70) + (5 x 175) - (6.76 x 35) = 1,611.72calorias
              </p>

              <p>Luego, multiplicamos este resultado por su nivel de actividad física (moderada: 1.55):

              </p>
              <i style={{ fontWeight: "bold" }}>Gasto calorico diario =</i> 1,611.72 x 1.55 = 2,498 caloras aprox.
              <p>Para subir de peso, Juan necesitará un superávit calórico del 10-20%, es decir, consumir entre<i style={{ fontWeight: "bold" }}> 2,750 y 3,000 </i> calorías diarias. </p>
            </div>
            <div className="card-planalimenticio">
              <h4>4. Diseñar la distribución de macronutrientes</h4>
              <p>
                La proporción de macronutrientes debe alinearse con su meta. Para Juan, proponemos:
              </p>

              <p>
                &#8226; <i style={{ fontWeight: "bold" }}>Proteínas:</i> 30% del total calórico. <br />
                &#8226; <i style={{ fontWeight: "bold" }}>Carbohidratos:</i> 50% del total calórico. <br />
                &#8226; <i style={{ fontWeight: "bold" }}>Grasas:</i> 20% del total calórico. <br />
              </p>
              <p>
                Si optamos por un consumo de <i style={{ fontWeight: "bold" }}>2,800</i> calorías diarias:
              </p>

              <p>
                &#8226; <i style={{ fontWeight: "bold" }}>Proteínas:</i> 30% = 840 cal = 210 g (1 g = 4 cal). <br />
                &#8226; <i style={{ fontWeight: "bold" }}>Carbohidratos:</i> 50% = 1,400 cal = 350 g (1 g = 4 cal). <br />
                &#8226; <i style={{ fontWeight: "bold" }}>Grasas:</i> 20% = 560 cal = 62 g (1 g = 9 cal). <br />
              </p>
            </div>
            <div className="card-planalimenticio">
              <h4>5. Seleccionar alimentos adecuados</h4>
              <p>
                Es importante elegir alimentos que cumplan con los requerimientos calóricos y sean ricos en nutrientes, podemos buscar una tabla de alimentos y sus valores nutricionales, ademas en casi todas las etiquetas de los alimentos que compramos en el super viene una tabla con estas descripciones, lo que nos puede orientar mejor a la hora de elegir.
              </p>
              <p>
                &#8226; <i style={{ fontWeight: "bold" }}>Proteínas:</i> Pollo, pescado, huevo, tofu, legumbres. <br />
                &#8226; <i style={{ fontWeight: "bold" }}>Carbohidratos:</i> Arroz integral, avena, batata, frutas. <br />
                &#8226; <i style={{ fontWeight: "bold" }}>Grasas:</i> Aguacate, frutos secos, aceite de oliva. <br />
              </p>
            </div>

            <div className="card-planalimenticio">
              <h4>6. Crear un menú diario </h4>
              <p>
                Vamos a diseñar el menu de un dia para juan:
              </p>

              <p>
                <table>
                  <thead>
                    <tr>
                      <th>Nutriente</th>
                      <th>Cantidad Total</th>
                      <th>Porcentaje del Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Calorías</td>
                      <td>2,802 cal</td>
                      <td>100%</td>
                    </tr>
                    <tr>
                      <td>Proteínas</td>
                      <td>186 g (744 cal)</td>
                      <td>27%</td>
                    </tr>
                    <tr>
                      <td>Carbohidratos</td>
                      <td>196 g (784 cal)</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <td>Grasas</td>
                      <td>97 g (874 cal)</td>
                      <td>23%</td>
                    </tr>
                  </tbody>
                </table>

              </p>
            </div>

            <div className='acordeon' onClick={() => toggleAccordionsub(4)}>
              <h4>Desayuno</h4>
              {subactiveIndex === 4 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div>

            <div className="macros" style={{ maxHeight: subactiveIndex === 4 ? "800px" : "0" }}>
              <p>
                <strong >&#8226;</strong> <i style={{ fontWeight: 'bolder' }}> 4 claras de huevo (136 g):</i> 68 cal, 14 g proteína, 0 g carbohidratos, 0 g grasa. <br />
                <strong >&#8226;</strong><i style={{ fontWeight: "bold" }}>2 huevos enteros (100 g):</i>  143 cal, 12 g proteína, 1 g carbohidratos, 10 g grasa. <br />
                <strong >&#8226;</strong><i style={{ fontWeight: "bold" }}>Avena (80 g):</i>  312 cal, 10 g proteína, 54 g carbohidratos, 6 g grasa. <br />
                <strong >&#8226;</strong><i style={{ fontWeight: "bold" }}>Plátano (120 g):</i>  105 cal, 1 g proteína, 27 g carbohidratos, 0 g grasa. <br />
                <i style={{ fontWeight: "bold" }}>Total desayuno: </i>628 cal, 37 g proteína, 82 g carbohidratos, 16 g grasa. <br />
              </p>
            </div>
            <div className='acordeon' onClick={() => toggleAccordionsub(5)}>
              <h4>Snack de la Mañana</h4>
              {subactiveIndex === 5 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div>

            <div className="macros" style={{ maxHeight: subactiveIndex === 5 ? "800px" : "0" }}>
              <p>
                <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Almendras (30 g):</i> 173 cal, 6 g proteína, 6 g carbohidratos, 15 g grasa. <br />
                <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Manzana (150 g):</i> 78 cal, 0 g proteína, 21 g carbohidratos, 0 g grasa. <br />
                <i style={{ fontWeight: 'bolder' }}>Total snack:</i> 251 cal, 6 g proteína, 27 g carbohidratos, 15 g grasa. <br />
              </p>
            </div>

            <div className='acordeon' onClick={() => toggleAccordionsub(6)}>
              <h4>Almuerzo</h4>
              {subactiveIndex === 6 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div>

            <div className="macros" style={{ maxHeight: subactiveIndex === 6 ? "800px" : "0" }}>
              <p>
                <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Pollo a la plancha (150 g):</i> 330 cal, 50 g proteína, 0 g carbohidratos, 8 g grasa. <br />
                <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Arroz integral (120 g):</i> 144 cal, 4 g proteína, 31 g carbohidratos, 1 g grasa. <br />
                <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Brócoli (100 g):</i> 34 cal, 3 g proteína, 7 g carbohidratos, 0 g grasa. <br />
                <i style={{ fontWeight: 'bolder' }}>Total almuerzo:</i> 508 cal, 57 g proteína, 38 g carbohidratos, 9 g grasa. <br />
              </p>
            </div>

            <div className='acordeon' onClick={() => toggleAccordionsub(7)}>
              <h4>Merienda</h4>
              {subactiveIndex === 7 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div>

            <div className="macros" style={{ maxHeight: subactiveIndex === 7 ? "800px" : "0" }}>
              <p>
                <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Batido de proteínas (1 scoop, 30 g):</i> 120 cal, 24 g proteína, 2 g carbohidratos, 1 g grasa. <br />
                <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Leche entera (200 ml):</i> 124 cal, 6 g proteína, 9 g carbohidratos, 6 g grasa. <br />
                <i style={{ fontWeight: 'bolder' }}>Total merienda:</i> 244 cal, 30 g proteína, 11 g carbohidratos, 7 g grasa. <br />
              </p>
            </div>

            <div className='acordeon' onClick={() => toggleAccordionsub(8)}>
              <h4>Cena</h4>
              {subactiveIndex === 8 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div>

            <div className="macros" style={{ maxHeight: subactiveIndex === 8 ? "800px" : "0" }}>
              <p>
                <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Salmón (200 g):</i> 416 cal, 40 g proteína, 0 g carbohidratos, 28 g grasa. <br />
                <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Patatas al horno (150 g):</i> 116 cal, 2 g proteína, 27 g carbohidratos, 0 g grasa. <br />
                <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Espinacas (50 g):</i> 12 cal, 1 g proteína, 2 g carbohidratos, 0 g grasa. <br />
                <i style={{ fontWeight: 'bolder' }}>Total cena:</i> 544 cal, 43 g proteína, 29 g carbohidratos, 28 g grasa. <br />
              </p>
            </div>

            <div className='acordeon' onClick={() => toggleAccordionsub(9)}>
              <h4>Snack nocturno</h4>
              {subactiveIndex === 9 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div>

            <div className="macros" style={{ maxHeight: subactiveIndex === 9 ? "800px" : "0" }}>
              <p>
                <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Yogur griego natural (1 unidad, 150 g):</i> 96 cal, 10 g proteína, 4 g carbohidratos, 5 g grasa. <br />
                <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Nueces (20 g):</i> 131 cal, 3 g proteína, 3 g carbohidratos, 13 g grasa. <br />
                <i style={{ fontWeight: 'bolder' }}>Total snack nocturno:</i> 227 cal, 13 g proteína, 7 g carbohidratos, 18 g grasa. <br />
              </p>
            </div>

            <h4>Desglose por Macronutriente</h4>
            <p></p>
            <h4>Proteínas (186 g):</h4>
            <p>
              <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Huevos y claras:</i> 26 g. <br />
              <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Pollo:</i> 50 g. <br />
              <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Salmón:</i> 40 g. <br />
              <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Batido y leche:</i> 30 g. <br />
              <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Otros alimentos (avena, frutos secos, etc.):</i> 40 g. <br />
            </p>

            <h4>Carbohidratos (196 g):</h4>
            <p>
              <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Avena:</i> 54 g. <br />
              <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Arroz integral:</i> 31 g. <br />
              <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Frutas (plátano, manzana):</i> 48 g. <br />
              <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Patatas y otros vegetales:</i> 36 g. <br />
              <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Otros (lácteos y frutos secos):</i> 27 g. <br />
            </p>

            <h4>Grasas (97 g):</h4>
            <p>
              <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Salmón y huevos:</i> 38 g. <br />
              <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Frutos secos y almendras:</i> 28 g. <br />
              <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Lácteos:</i> 24 g. <br />
              <strong>&#8226;</strong> <i style={{ fontWeight: 'bolder' }}>Otros alimentos:</i> 7 g. <br />
            </p>
            <div className="card-planalimenticio">
              <h4>7. Evaluar y ajustar</h4>
              <p>
                El progreso de Juan debe evaluarse cada 2-4 semanas. Si no logra ganar peso, podemos incrementar las calorías gradualmente en 100-200 cal por día. Si la ganancia es demasiado rápida, reduciremos ligeramente el superávit.
              </p>
            </div>



            <h3>¿como hacer del Plan Alimenticio un Habito?</h3>
            <h4>¿que es un habito?</h4>
            <p>
              Un hábito es una acción o comportamiento que repetimos de forma regular hasta que se vuelve automático. Surge de la práctica constante y suele estar asociado a patrones de pensamiento y rutina, influyendo significativamente en nuestra vida diaria y bienestar.
            </p>
            <p>
              <strong>&#8226;</strong> la clave de los buenos Habitos estan en la voluntad, la disciplina y la constancia, ser constante cada dia es lo que creara de una accion pequeña un habito duradero.
            </p>
            <p><strong>&#8226;</strong> Establece metas realistas: Comienza con pequeños cambios alcanzables, como incluir más vegetales en tus comidas diarias. </p>
            <p><strong>&#8226;</strong>Planifica con anticipación: Organiza tus comidas semanales para evitar elecciones impulsivas.</p>
            <p><strong>&#8226;</strong>Escucha a tu cuerpo: Aprende a distinguir entre el hambre física y la emocional.</p>
            <p> <strong>&#8226;</strong> Crea una rutina: Come a horarios regulares para entrenar a tu cuerpo a esperar alimentos en momentos específicos.</p>
            <p><strong>&#8226;</strong> Sé paciente: Los hábitos requieren tiempo para consolidarse, por ejemplo cuando eramos niños, nos repetian nuestros padres el deber de cepillarnos los dientes despues de cada comida, despues de levantarnos y antes de dormir, de tanta repeticion se volvio habito, ahora nos sentimos extraños si no lo hacemos; celebra tus avances sin juzgarte por los errores.</p>





          </div>


          {/* <div className="card-planalimenticio">
            <h4>7. Evaluar y ajustar</h4>
            <p>
              El progreso de Juan debe evaluarse cada 2-4 semanas. Si no logra ganar peso, podemos incrementar las calorías gradualmente en 100-200 cal por día. Si la ganancia es demasiado rápida, reduciremos ligeramente el superávit.
            </p>
          </div> */}


          {/* <h3>¿como hacer del Plan Alimenticio un Habito?</h3>
          <h4>¿que es un habito?</h4>
          <p>
            Un hábito es una acción o comportamiento que repetimos de forma regular hasta que se vuelve automático. Surge de la práctica constante y suele estar asociado a patrones de pensamiento y rutina, influyendo significativamente en nuestra vida diaria y bienestar.
          </p>
          <p>
            <strong>&#8226;</strong> la clave de los buenos Habitos estan en la voluntad, la disciplina y la constancia, ser constante cada dia es lo que creara de una accion pequeña un habito duradero.
          </p>
          <p><strong>&#8226;</strong> Establece metas realistas: Comienza con pequeños cambios alcanzables, como incluir más vegetales en tus comidas diarias. </p>
          <p><strong>&#8226;</strong>Planifica con anticipación: Organiza tus comidas semanales para evitar elecciones impulsivas.</p>
          <p><strong>&#8226;</strong>Escucha a tu cuerpo: Aprende a distinguir entre el hambre física y la emocional.</p>
          <p> <strong>&#8226;</strong> Crea una rutina: Come a horarios regulares para entrenar a tu cuerpo a esperar alimentos en momentos específicos.</p>
          <p><strong>&#8226;</strong> Sé paciente: Los hábitos requieren tiempo para consolidarse, por ejemplo cuando eramos niños, nos repetian nuestros padres el deber de cepillarnos los dientes despues de cada comida, despues de levantarnos y antes de dormir, de tanta repeticion se volvio habito, ahora nos sentimos extraños si no lo hacemos; celebra tus avances sin juzgarte por los errores.</p>

 */}

        </section >


      </div >

    </>
  );
}
export default Dietas;
