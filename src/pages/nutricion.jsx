import { useState } from 'react';
import Baner from '../components/baner';
import Slider from "../components/slider";
import { Helmet } from "react-helmet-async";

const Nutricion = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const coloresNutricion = ['#003366', '#003366', '#003366'];

  const bannersNutricion = [
    // {
    //   img: '/img-banner-principal/alimentos-banner1-nutricion.webp',
    //   title: 'Aumentar Masa Muscular',
    //   link: '/afiliados/nutricion',
    //   boton: 'Ver en Amazon',
    // },
    {
      img: '/img-banner-principal/creatina-banner2-nutricion.webp',
      title: 'Proteínas y Suplementos ',
      link: '/blog/proteinas-vs-suplementos',
      boton: 'Ver en Amazon',
    },
  ];


  function toggleAccordion(index) {

    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }


  return (
    <>
      <Helmet>
        {/* 🔹 SEO General */}
        <title>Nutrición y Alimentación Fitness | Pretoriann</title>
        <meta
          name="description"
          content="Aprende a estructurar tu alimentación según tus objetivos: perder grasa, ganar masa muscular o mantenerte en forma. Guías, consejos y cálculos nutricionales adaptados a ti en Pretoriann."
        />
        <meta
          name="keywords"
          content="nutrición fitness, alimentación saludable, dieta equilibrada, macronutrientes, proteínas, grasas saludables, carbohidratos, recetas fitness, nutrición deportiva, salud y bienestar"
        />
        <meta name="author" content="Pretoriann" />

        {/* 🔹 Open Graph para redes sociales */}
        <meta property="og:title" content="Nutrición y Alimentación Fitness | Pretoriann" />
        <meta
          property="og:description"
          content="Descubre cómo mejorar tu rendimiento y bienestar con una alimentación balanceada en Pretoriann. Calcula tus macros y conoce los alimentos más recomendados."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pretoriann.com/nutricion" />
        <meta
          property="og:image"
          content="https://www.pretoriann.com/img-banner-principal/nutricion-banner.webp"
        />
        <meta property="og:locale" content="es_ES" />

        {/* 🔹 SEO técnico */}
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.pretoriann.com/nutricion" />
      </Helmet>



      <Baner banners={bannersNutricion} colores={coloresNutricion} />
      <Slider clase1={"main-card"} clase2={"info-card"} />
      {/*  */}
      <div className="nutricion-principal">
        <h1 className="title-nutricion">Nutrición para Rendimiento Fisico y Bienestar</h1>
        {/* <span>el 70% del fitness empieza por la boca</span> */}
        <article >
          <p>
            La nutrición es uno de los pilares fundamentales para alcanzar un
            rendimiento óptimo y mantener un estado de bienestar general. Una
            dieta equilibrada no solo proporciona la energía necesaria para
            rendir en actividades físicas, sino que también fortalece el sistema
            inmunológico, mejora la recuperación muscular y contribuye a la
            salud mental. Ya sea que tu objetivo sea mejorar tu rendimiento
            deportivo, alcanzar un peso saludable o simplemente sentirte mejor
            en tu día a día, entender los principios de una alimentación
            adecuada es clave. En esta sección, te ofrecemos información
            práctica y consejos sobre cómo una nutrición balanceada puede
            potenciar tu bienestar físico y mental, ayudándote a vivir una vida
            más activa y saludable.
          </p>

        </article>

        <h2>¿Como se Clasifican los Alimentos?</h2>

        <section className="info-h2">

          <div className="foto-nutrientes">
            <span style={{ fontSize: "2rem" }}>Según sus nutrientes se clasifican</span>
            <div className="wrap-nutrientes">
              <div className="nutriente">
                <img src="../img-banner/macronutrientes.webp" alt="Macronutrientes" />
                <span style={{ fontWeight: 700 }}>Macronutriente</span>
              </div>
              <div className="nutriente">
                <img src="../img-banner/micronutrientes.webp" alt="Micronutrientes" />
                <span style={{ fontWeight: 700 }}>Micronutriente</span>
              </div>
            </div>

          </div>

          <h2>Macronutrientes</h2>
          <p>
            Los macronutrientes son los principales componentes de la dieta que
            proporcionan energía al cuerpo y son necesarios en grandes
            cantidades para mantener funciones vitales. Hay tres tipos
            principales de macronutrientes:
          </p>
          <section className="nutrientes">

            <div className='acordeon' onClick={() => toggleAccordion(1)}>
              <h3>a. Carbohidratos</h3>
              {activeIndex === 1 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div>

            <div className='macros'
              style={{ maxHeight: activeIndex === 1 ? "800px" : "0" }}>
              <p>
                <i style={{ fontWeight: "bold" }}>Definicion:</i> Los
                carbohidratos, también conocidos como glúcidos o azúcares, son uno
                de los tres principales macronutrientes que proporcionan energía
                al cuerpo, junto con las proteínas y las grasas. Están compuestos
                por carbono, hidrógeno y oxígeno en proporciones específicas.{" "}
                <br /> <br />
                <i style={{ fontWeight: "bold" }}>Función:</i> Los carbohidratos
                desempeñan un papel crucial en el suministro de energía para las
                funciones celulares y el mantenimiento de la actividad diaria.{" "}
                <br /> <br />
                <i style={{ fontWeight: "bold" }}>valor nutricional:</i> Debemos
                tener en cuenta esta parte para saber dependiendo de nuestras
                necesidades y condiciones (edad, peso, glucosa en sangre etc) la
                cantidad de carbohidratos que necesitamos y debemos aportar a
                nuestro cuerpo. El valor nutricional de los carbohidratos se suele
                medir según su contenido calórico (kilocalorías (kcal)). <br />{" "}
                <br />
                Los carbohidratos proporcionan una fuente de energía al cuerpo.
                Cada gramo de carbohidrato aporta aproximadamente 4 calorías.
              </p>

            </div>

          </section>

          <section className='principal-nutrientes'>
            <div className='acordeon' onClick={() => toggleAccordion(2)}>
              <h3>b. Proteínas</h3>
              {activeIndex === 2 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}

            </div>

            <div className='macros'
              style={{ maxHeight: activeIndex === 2 ? "800px" : "0" }}>
              <p>
                <i style={{ fontWeight: "bold" }}>Definición:</i> Las proteínas
                son macronutrientes esenciales compuestos por cadenas de
                aminoácidos. Son fundamentales para el crecimiento, la reparación
                y el mantenimiento de los tejidos del cuerpo, así como para la
                producción de enzimas y hormonas. <br /> <br />
                <i style={{ fontWeight: "bold" }}>Función:</i> Las proteínas
                juegan un papel crucial en la construcción y reparación de
                músculos, piel, órganos y otras estructuras corporales. También
                intervienen en la formación de anticuerpos, enzimas y moléculas de
                señalización en el cuerpo. <br /> <br />
                <i style={{ fontWeight: "bold" }}>Valor nutricional:</i> Las
                necesidades proteicas varían según la edad, el peso, el nivel de
                actividad física y las metas personales, como el aumento de masa
                muscular o la pérdida de peso. El valor nutricional de las
                proteínas depende de su perfil de aminoácidos y su digestibilidad.
                Cada gramo de proteína aporta aproximadamente 4 calorías. <br />{" "}
                <br />
                Las proteínas de alta calidad, como las de origen animal (carne,
                pescado, huevos, productos lácteos) y algunas fuentes vegetales
                (soja, quinoa), son consideradas completas porque contienen todos
                los aminoácidos esenciales que el cuerpo no puede producir por sí
                mismo. <br /> <br />
                <i style={{ fontWeight: "bold" }}>
                  como se clasifican segun su origen:
                </i>{" "}
                <br /> <br />
                <i style={{ fontWeight: "bold" }}>1.)</i> Proteínas de Origen
                Animal: Se encuentran en alimentos de origen animal como carne,
                pescado, huevos y productos lácteos. <br /> <br />
                <i style={{ fontWeight: "bold" }}>2.)</i> Proteínas de Origen
                Vegetal: Se encuentran en alimentos de origen vegetal como
                legumbres, nueces, semillas y granos. <br /> <br />
                <i style={{ fontWeight: "bold" }}>
                  Necesidades diarias de Proteina
                </i>
                Las recomendaciones dietéticas suelen oscilar entre 0.8 y 1.2
                gramos de proteína por kilogramo de peso corporal, ahora esto es
                un rango promedio, ya que dependiendo de factores como el peso,
                edad, nivel de actividad fisico o metas dieteticas estos valores
                cambian.
              </p>

            </div>

          </section>

          <section className='grasas'>
            <div className='acordeon' onClick={() => toggleAccordion(3)}>
              <h3>b. Grasas</h3>
              {activeIndex === 2 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}

            </div>

            <div className='macros'
              style={{ maxHeight: activeIndex === 3 ? "800px" : "0" }}>
              <p>
                <i style={{ fontWeight: "bold" }}>Definición:</i> Las grasas,
                también conocidas como lípidos, son macronutrientes esenciales
                para el cuerpo. Son moléculas orgánicas compuestas principalmente
                por carbono e hidrógeno, y su estructura puede ser saturada o
                insaturada.
                <br /> <br />
                <i style={{ fontWeight: "bold" }}>
                  Funciones de las Grasas:
                </i>{" "}
                <br />
                <i style={{ fontWeight: "bold" }}>Fuente de Energía:</i> Las
                grasas son una fuente concentrada de energía, proporcionando más
                del doble de calorías por gramo en comparación con carbohidratos y
                proteínas.
                <br /> <br />
                <i style={{ fontWeight: "bold" }}>
                  Almacenamiento de Energía:
                </i>{" "}
                El exceso de energía consumida se almacena en forma de grasa en el
                cuerpo para su uso posterior. Si se almacena en exceso, puede
                llevar a la obesidad, visible en forma de acumulación de grasa en
                el abdomen.
              </p>

              <h4>Tipos de Grasas</h4>
              <p>
                <i style={{ fontWeight: "bold" }}>Grasas Saturadas:</i> <br />
                Se encuentran principalmente en alimentos de origen animal, como
                productos lácteos, carnes grasas, y algunos aceites como el de
                coco y palma. <br /> <br />
                <i style={{ fontWeight: "bold" }}>Grasas Insaturadas:</i> <br />
                Incluyen ácidos grasos monoinsaturados y poliinsaturados. Se
                encuentran en alimentos como el aceite de oliva, aguacates,
                nueces, semillas, y pescados grasos. <br /> <br />
                <i style={{ fontWeight: "bold" }}>Grasas Trans:</i> <br />
                Formadas a través de un proceso de hidrogenación, las grasas trans
                están presentes en algunos alimentos procesados y fritos. Su
                consumo excesivo está relacionado con riesgos para la salud
                cardiovascular, por lo que se debe limitar.
              </p>

            </div>

          </section>


          <h2>Micronutrientes</h2>
          <p>
            Los micronutrientes son nutrientes esenciales que el cuerpo
            necesita en cantidades relativamente pequeñas para mantener
            funciones vitales y apoyar el crecimiento y desarrollo adecuados.
            Estos nutrientes son diferentes de los macronutrientes, que se
            necesitan en cantidades más grandes y proporcionan la energía
            principal. Los micronutrientes incluyen vitaminas y minerales, y
            son fundamentales para una variedad de procesos biológicos y
            funciones en el cuerpo.
          </p>

          <h3 className='h3-subtitulos'>Funciones de los Micronutrientes</h3>


          <p>
            Catalizadores en Reacciones Químicas: Muchas vitaminas y minerales
            actúan como cofactores o coenzimas que facilitan reacciones químicas
            en el cuerpo. Desarrollo y Mantenimiento Celular: Contribuyen al
            crecimiento, desarrollo y mantenimiento de células y tejidos.
            Sistema Inmunológico: Ayudan en el funcionamiento adecuado del
            sistema inmunológico, contribuyendo a la defensa contra
            enfermedades. Formación de Huesos y Dientes: Algunos
            micronutrientes, como el calcio y la vitamina D, son esenciales para
            la formación y mantenimiento de huesos y dientes.
          </p>


          <div className='acordeon' onClick={() => toggleAccordion(4)}>
            <h3>a. Vitaminas</h3>
            {activeIndex === 4 ? (
              <i className="fa-solid fa-angle-up acordeon-icon"></i>
            ) : (
              <i className="fa-solid fa-angle-down acordeon-icon"></i>
            )}

          </div>
          <div className='macros'
            style={{ maxHeight: activeIndex === 4 ? "800px" : "0" }}>
            <p>
              Las vitaminas son compuestos orgánicos que desempeñan funciones
              clave en diversas reacciones metabólicas. Se dividen en:
            </p>

            <p>
              <i style={{ fontWeight: "bold" }}>Vitaminas hidrosolubles:</i>{" "}
              Como las vitaminas del complejo B (B1, B2, B3, B6, B12) y la
              vitamina C, que el cuerpo no almacena y se deben reponer
              regularmente.
            </p>
            <p>
              <i style={{ fontWeight: "bold" }}>Vitaminas liposolubles:</i> Como
              las vitaminas A, D, E y K, que se almacenan en el tejido graso y
              el hígado.
            </p>
          </div>

          <div className='acordeon' onClick={() => toggleAccordion(5)}>
            <h3>b. Minerales</h3>
            {activeIndex === 5 ? (
              <i className="fa-solid fa-angle-up acordeon-icon"></i>
            ) : (
              <i className="fa-solid fa-angle-down acordeon-icon"></i>
            )}

          </div>

          <div className='macros'
            style={{ maxHeight: activeIndex === 5 ? "800px" : "0" }}>
            <p>
              Los minerales son elementos inorgánicos esenciales para la salud y
              se clasifican en:
            </p>
            <p>
              <i style={{ fontWeight: "bold" }}>Macrominerales:</i> Incluyen el
              calcio, fósforo, magnesio, sodio, potasio y cloro, que el cuerpo
              necesita en mayores cantidades.
            </p>
            <p>
              <i style={{ fontWeight: "bold" }}>
                Oligoelementos o minerales traza:
              </i>{" "}
              Como el hierro, zinc, selenio, cobre y yodo, que se requieren en
              cantidades menores pero son igual de importantes.
            </p>
          </div>


          <section className='aminoacidos'>
            <h2 className='h2-aminoacidos'>Aminoácidos</h2>

            <h3 className='h3-subtitulos'>¿Qué son los aminoácidos?</h3>
            <p>
              Los aminoácidos son los bloques de construcción fundamentales de
              las proteínas. Son moléculas pequeñas que se combinan para formar
              cadenas, y estas cadenas, a su vez, constituyen las proteínas en
              nuestro cuerpo. Los aminoácidos son esenciales para el
              crecimiento, reparación y funcionamiento adecuado de los tejidos,
              así como para diversas funciones biológicas en el organismo. Por
              esta razón, los fisicoculturistas los suelen usar como suplemento
              dietético. Hay 20 aminoácidos comunes que se utilizan para
              construir proteínas, y cada uno tiene una función específica en el
              cuerpo.
            </p>

            <div className='acordeon' onClick={() => toggleAccordion(6)}>
              <h3>Clasificacion</h3>
              {activeIndex === 6 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div>

            <div className='macros'
              style={{ maxHeight: activeIndex === 6 ? "800px" : "0" }}>
              <p>
                <i style={{ fontWeight: "bold" }}>Aminoácidos Esenciales:</i> El
                cuerpo no puede producir estos aminoácidos por sí mismo, por lo
                que deben obtenerse con la dieta. Incluyen histidina, isoleucina,
                leucina, lisina, metionina, fenilalanina, treonina, triptófano y
                valina.
              </p>
              <p>
                <i style={{ fontWeight: "bold" }}>Aminoácidos No Esenciales:</i>{" "}
                Estos aminoácidos se producen en el cuerpo a partir de otras
                moléculas y están involucrados en una variedad de funciones
                importantes, como la síntesis de proteínas, la función celular y
                la regulación del metabolismo. Incluyen alanina, arginina, ácido
                aspártico, cisteína, ácido glutámico, glicina, prolina, serina y
                tirosina.
              </p>
              <p>
                <i style={{ fontWeight: "bold" }}>
                  Aminoácidos Condicionalmente Esenciales:
                </i>{" "}
                Estos aminoácidos a veces se consideran esenciales en ciertas
                condiciones o etapas de la vida. Ejemplos incluyen arginina,
                cisteína, glutamina, tirosina, glicina y ornitina.
              </p>
            </div>

            <div className='acordeon' onClick={() => toggleAccordion(8)}>
              <h3>Suplementacion de Aminoacidos</h3>
              {activeIndex === 8 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div>

            <div className='macros'
              style={{ maxHeight: activeIndex === 8 ? "800px" : "0" }}>
              <p>
                La suplementación de aminoácidos se ha convertido en una herramienta clave para muchos deportistas y entusiastas del fitness que buscan optimizar su rendimiento, recuperación y composición corporal. Aunque es posible obtener aminoácidos de una dieta equilibrada, los suplementos ofrecen una forma rápida y eficiente de cubrir las necesidades específicas, especialmente durante entrenamientos intensos o en contextos donde la dieta no es suficiente.
              </p>

              <section >
                <h2>Tipos de Suplementos de Aminoácidos</h2>
                <ul>
                  <li>
                    <strong>BCAA (Aminoácidos de Cadena Ramificada):</strong>
                    <ul className='ul-nutricion'>
                      <li>Incluyen leucina, isoleucina y valina.</li>
                      <li>Favorecen la síntesis de proteínas musculares, reducen la fatiga durante el entrenamiento y ayudan a prevenir la degradación muscular.</li>
                      <li>Son ideales para quienes realizan entrenamientos de alta intensidad o en ayuno.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>EAA (Aminoácidos Esenciales):</strong>
                    <ul className='ul-nutricion'>
                      <li>Incluyen los 9 aminoácidos esenciales que el cuerpo no puede producir.</li>
                      <li>Promueven una recuperación muscular más completa y mejoran la síntesis proteica general.</li>
                      <li>Se recomiendan para entrenamientos prolongados o en dietas bajas en proteínas.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Glutamina:</strong>
                    <ul className='ul-nutricion'>
                      <li>Es un aminoácido condicionalmente esencial, especialmente útil durante periodos de estrés físico intenso.</li>
                      <li>Ayuda en la recuperación muscular, el refuerzo del sistema inmunológico y la reposición de reservas de glucógeno.</li>
                      <li>Beneficioso para evitar la fatiga muscular y proteger contra el catabolismo.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Arginina:</strong>
                    <ul className='ul-nutricion'>
                      <li>Aumenta la producción de óxido nítrico, mejorando la vasodilatación y el flujo sanguíneo.</li>
                      <li>Útil para mejorar la entrega de nutrientes a los músculos y potenciar el rendimiento en entrenamientos de fuerza.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Citrulina:</strong>
                    <ul className='ul-nutricion'>
                      <li>Mejora la resistencia muscular y reduce la fatiga al eliminar el amoníaco acumulado durante el ejercicio.</li>
                      <li>Popular en entrenamientos de resistencia y ejercicios de alta intensidad.</li>
                    </ul>
                  </li>
                </ul>
              </section>
            </div>

            <div className='acordeon' onClick={() => toggleAccordion(7)}>
              <h3>Beneficios de los Aminoacios en el Fitness?</h3>
              {activeIndex === 7 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div>

            <div className='macros'
              style={{ maxHeight: activeIndex === 7 ? "800px" : "0" }}>
              <p>
                <i style={{ fontWeight: "bold" }}>1. Construcción y Mantenimiento de Masa Muscular:</i>{" "}
                Los aminoácidos esenciales, especialmente los de cadena ramificada (BCAA: leucina, isoleucina y valina), estimulan la síntesis de proteínas, ayudando al crecimiento y reparación muscular después del entrenamiento, admas La leucina, presente en los BCAA, activa la vía mTOR, clave para la síntesis de nuevas fibras musculares.
              </p>


              <p>
                <i style={{ fontWeight: "bold" }}>2. Mejora el Rendimiento deportivo:</i>{" "}
                Los BCAA y la citrulina retrasan la fatiga muscular al proporcionar energía directa y mejorar la resistencia durante entrenamientos largos.</p>


              <p>
                <i style={{ fontWeight: "bold" }}>
                  2. Recuperación muscular:
                </i>{" "}
                <p>Los EAA y la glutamina favorecen la reparación muscular, reduciendo el dolor postentrenamiento (DOMS) y permitiendo un retorno más rápido al ejercicio.</p>

              </p>
              <p>
                <i style={{ fontWeight: "bold" }}>3. Energía durante el ejercicio:</i>{" "}
                En ausencia de carbohidratos suficientes, algunos aminoácidos, como la leucina, pueden ser utilizados por el cuerpo como fuente de energía.
              </p>
              <p>
                <i style={{ fontWeight: "bold" }}>
                  4. Prevención de pérdida muscular o catabolismo muscular:
                </i>{" "}
                Durante entrenamientos en ayuno o dietas restrictivas, los aminoácidos protegen la masa muscular al reducir la degradación proteica.</p>

              <p>
                <i style={{ fontWeight: "bold" }}>5. Apoyo al Sistema Inmunológico:</i>{" "}
                Durante entrenamientos prolongados, la glutamina puede evitar la supresión del sistema inmune, ayudando a mantener la salud general.</p>

            </div>

            <div className='acordeon' onClick={() => toggleAccordion(9)}>
              <h3>¿Cuando Tomar los Aminoacidos?</h3>
              {activeIndex === 9 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div>

            <div className='macros'
              style={{ maxHeight: activeIndex === 9 ? "800px" : "0" }}>
              <ul>
                <li>
                  <strong>Antes del Entrenamiento:</strong>
                  <p>Los BCAA y la citrulina proporcionan energía y mejoran la resistencia.</p>
                  <p><strong>Dosis típica:</strong> 5-10 gramos.</p>
                </li>
                <li>
                  <strong>Durante el Entrenamiento:</strong>
                  <p>Consumir BCAA o EAA durante entrenamientos largos ayuda a mantener el rendimiento y evitar la fatiga.</p>
                  <p><strong>Dosis típica:</strong> 5-15 gramos, dependiendo de la duración.</p>
                </li>
                <li>
                  <strong>Después del Entrenamiento:</strong>
                  <p>Los EAA y la glutamina son ideales para acelerar la recuperación muscular y reponer los aminoácidos perdidos.</p>
                  <p><strong>Dosis típica:</strong> 10-15 gramos.</p>
                </li>
                <li>
                  <strong>En Ayuno o Dietas Hipocalóricas:</strong>
                  <p>Los suplementos ayudan a proteger los músculos del catabolismo y mantener la energía.</p>
                </li>
              </ul>
            </div>
            <div className='acordeon' onClick={() => toggleAccordion(10)}>
              <h3>Hidratacion</h3>
              {activeIndex === 10 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div>


            <div className='macros' style={{ maxHeight: activeIndex === 10 ? "800px" : "0" }}>
              <p>
                <strong>La hidratación </strong>no es solo beber agua; es un pilar esencial para la salud y el rendimiento. En el fitness, influye directamente en la energía, la recuperación muscular y la quema de grasa. Una hidratación óptima mantiene el equilibrio electrolítico, previene lesiones y potencia tus resultados. </p>


              <h3>✅ Salud General:</h3>
              <ul>
                <li>Regula la temperatura corporal.</li>
                <li>Mejora la función cerebral y digestiva.</li>
                <li>Mantiene la piel saludable y reduce la fatiga.</li>
              </ul>



              <h3>🏋️ Rendimiento Fitness:</h3>
              <ul>
                <li>Aumenta la energía y resistencia durante el entrenamiento.</li>
                <li>Reduce calambres y mejora la recuperación muscular.</li>
                <li>Optimiza la quema de grasa y transporte de nutrientes.</li>
              </ul>



              <p>🔥 <strong>Pro Tip:</strong></p>
              <blockquote>
                "Tomar agua antes, durante y después del ejercicio es clave para maximizar tus resultados."
              </blockquote>

              <h3>📌 Recomendaciones Prácticas:</h3>
              <ul>
                <li>
                  <strong>1️⃣ Antes del Entrenamiento</strong>
                  <ul>
                    <li>Bebe 400-500 ml de agua 2 horas antes.</li>
                    <li>Si es ejercicio intenso, añade un poco de electrolitos (sodio/potasio).</li>
                  </ul>
                </li>

                <li>
                  <strong>2️⃣ Durante el Ejercicio</strong>
                  <ul>
                    <li>150-250 ml cada 15-20 min (más si sudas mucho).</li>
                    <li>Para sesiones &gt;1h, usa bebidas con electrolitos o agua de coco.</li>
                  </ul>
                </li>

                <li>
                  <strong>3️⃣ Después del Entrenamiento</strong>
                  <ul>
                    <li>Rehidrátate con 500 ml + electrolitos (o un snack rico en sodio/potasio).</li>
                    <li>Monitorea tu orina: color claro = bien hidratado.</li>
                  </ul>
                </li>

                <li>
                  <strong>4️⃣ Día a Día</strong>
                  <ul>
                    <li>Mínimo 2-3 L diarios (varía por peso y actividad).</li>
                    <li>Incluye agua + alimentos hidratantes (sandía, pepino, sopas).</li>
                  </ul>
                </li>
              </ul>

              <h4>⚠️ Errores Comunes:</h4>
              <ul>
                <li>Esperar a tener sed (ya es señal de deshidratación).</li>
                <li>Excederse con bebidas deportivas (solo necesarias en esfuerzos prolongados).</li>
                <li>No reponer electrolitos en climas calurosos.</li>
              </ul>

              <p><strong>¿Sabías que?</strong> Una pérdida del 2% de agua corporal reduce hasta un 20% tu rendimiento físico y mental.</p>



            </div>


            {/* <div className='acordeon' onClick={() => toggleAccordion(11)}>
              <h3>Los 10 suplementos en la Hipertrofia</h3>
              {activeIndex === 11 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div> */}

          </section>
          <section className='creatina'>
            <h2 className='h2-creatina'>Creatina</h2>

            <h3 className='h3-subtitulos'>¿Qué es la creatina?</h3>
            <p>
              La creatina es un compuesto natural que se encuentra en pequeñas cantidades en alimentos como la carne y el pescado, y también se produce en el cuerpo a partir de los aminoácidos arginina, glicina y metionina. Es almacenada principalmente en los músculos en forma de fosfocreatina, donde desempeña un papel crucial en la producción de energía rápida. La creatina es uno de los suplementos más investigados y utilizados en el ámbito deportivo debido a sus beneficios comprobados en el rendimiento físico y la ganancia muscular.
            </p>

            <div className='acordeon' onClick={() => toggleAccordion(1)}>
              <h3>¿Para qué sirve la creatina?</h3>
              {activeIndex === 1 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div>

            <div className='macros' style={{ maxHeight: activeIndex === 1 ? "800px" : "0" }}>
              <p>
                La creatina tiene múltiples beneficios en el ámbito deportivo y para la salud en general:
              </p>
              <ul>
                <li>
                  <strong>Aumento de la fuerza y potencia:</strong>
                  <p>La creatina mejora la capacidad del cuerpo para producir energía rápidamente, lo que es crucial para ejercicios de alta intensidad como levantamiento de pesas y sprints.</p>
                </li>
                <li>
                  <strong>Ganancia de masa muscular:</strong>
                  <p>Favorece el crecimiento muscular al incrementar la capacidad de entrenamiento, mejorar la síntesis de proteínas y aumentar la retención de agua en las células musculares.</p>
                </li>
                <li>
                  <strong>Mejora del rendimiento deportivo:</strong>
                  <p>Es especialmente útil en deportes que requieren ráfagas cortas de energía intensa, como el fútbol, levantamiento de pesas y el atletismo.</p>
                </li>
                <li>
                  <strong>Recuperación más rápida:</strong>
                  <p>Ayuda a reducir el daño muscular y la inflamación, lo que acelera la recuperación postentrenamiento.</p>
                </li>
                <li>
                  <strong>Beneficios cognitivos:</strong>
                  <p>Algunos estudios sugieren que puede mejorar la función cerebral, especialmente en situaciones de estrés mental o falta de sueño.</p>
                </li>
              </ul>
            </div>

            <div className='acordeon' onClick={() => toggleAccordion(2)}>
              <h3>Suplementación de creatina</h3>
              {activeIndex === 2 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div>

            <div className='macros' style={{ maxHeight: activeIndex === 2 ? "800px" : "0" }}>
              <h4>Tipos de creatina</h4>
              <ul>
                <li>
                  <strong>Creatina monohidratada:</strong>
                  <p>Es la forma más estudiada y efectiva. Tiene una excelente relación costo-beneficio y es altamente absorbible.</p>
                </li>
                <li>
                  <strong>Creatina micronizada:</strong>
                  <p>Es una versión procesada de la creatina monohidratada, con partículas más pequeñas para facilitar la disolución y absorción.</p>
                </li>
                <li>
                  <strong>Creatina HCl:</strong>
                  <p>Más soluble en agua que la monohidratada, lo que puede reducir problemas digestivos en personas sensibles.</p>
                </li>
                <li>
                  <strong>Creatina etil éster:</strong>
                  <p>Se comercializa como una forma mejor absorbida, aunque no tiene ventajas claras sobre la monohidratada según la evidencia.</p>
                </li>
              </ul>

              <h4>¿Cómo tomar creatina?</h4>
              <ul>
                <li>
                  <strong>Fase de carga (opcional):</strong>
                  <p>Consiste en consumir 20 gramos diarios de creatina, divididos en 4 tomas de 5 gramos, durante los primeros 5-7 días. Esto ayuda a saturar rápidamente los músculos con creatina.</p>
                </li>
                <li>
                  <strong>Dosis de mantenimiento:</strong>
                  <p>Después de la fase de carga, la dosis recomendada es de 3-5 gramos diarios para mantener los niveles óptimos de creatina muscular.</p>
                </li>
                <li>
                  <strong>Sin fase de carga:</strong>
                  <p>Si prefieres no hacer una fase de carga, puedes consumir directamente 3-5 gramos diarios. La saturación muscular tardará más tiempo, pero el efecto será el mismo a largo plazo.</p>
                </li>
                <li>
                  <strong>Momento ideal:</strong>
                  <p>La creatina puede tomarse en cualquier momento del día, pero muchas personas la consumen después del entrenamiento para facilitar la recuperación.</p>
                </li>
              </ul>
            </div>

            <div className='acordeon' onClick={() => toggleAccordion(3)}>
              <h3>Efectos secundarios y seguridad</h3>
              {activeIndex === 3 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div>

            <div className='macros' style={{ maxHeight: activeIndex === 3 ? "800px" : "0" }}>
              <p>
                La creatina es un suplemento seguro para la mayoría de las personas. Estudios han demostrado que su uso a largo plazo no presenta riesgos significativos en personas saludables. Sin embargo, algunas personas pueden experimentar efectos secundarios menores, como:
              </p>
              <ul>
                <li>Molestias gastrointestinales (si se toma en dosis altas de una sola vez).</li>
                <li>Retención de agua, que puede aumentar el peso corporal.</li>
                <li>En raros casos, calambres musculares o mareos.</li>
              </ul>
              <p>
                Es importante mantenerse bien hidratado al suplementarse con creatina, ya que esto optimiza su efecto y previene posibles molestias.
              </p>
            </div>
          </section>

          <section className='proteina'>
            <h2 className='h2-proteina'>Proteína en Suplemento</h2>

            <h3 className='h3-subtitulos'>¿Qué es la proteína en suplemento?</h3>
            <p>
              La proteína en suplemento es una fuente concentrada de proteínas derivada de alimentos naturales como el suero de leche, huevo, carne o plantas (soja, guisante, arroz, etc.). Es utilizada principalmente para complementar la dieta de aquellas personas que tienen necesidades proteicas elevadas, como los deportistas, o para quienes buscan una forma cómoda y eficiente de consumir proteínas. Estos suplementos ayudan a satisfacer los requerimientos nutricionales diarios, mejorar la recuperación muscular y favorecer la ganancia o mantenimiento de masa muscular.
            </p>

            <div className='acordeon' onClick={() => toggleAccordion(1)}>
              <h3>¿Para qué sirve la proteína en suplemento?</h3>
              {activeIndex === 1 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div>

            <div className='macros' style={{ maxHeight: activeIndex === 1 ? "800px" : "0" }}>
              <p>
                La proteína en suplemento tiene múltiples usos y beneficios:
              </p>
              <ul>
                <li>
                  <strong>Construcción y mantenimiento muscular:</strong>
                  <p>Aporta los aminoácidos esenciales necesarios para la reparación y crecimiento de los tejidos musculares, especialmente después del ejercicio.</p>
                </li>
                <li>
                  <strong>Recuperación muscular:</strong>
                  <p>Facilita la regeneración de las fibras musculares dañadas durante el entrenamiento, reduciendo el dolor postentrenamiento.</p>
                </li>
                <li>
                  <strong>Mejora de la composición corporal:</strong>
                  <p>Favorece la pérdida de grasa y la ganancia de masa magra al aumentar la saciedad y el gasto calórico asociado al metabolismo de las proteínas.</p>
                </li>
                <li>
                  <strong>Apoyo en dietas hipocalóricas:</strong>
                  <p>Ayuda a preservar la masa muscular mientras se pierde peso, gracias a su aporte de nutrientes esenciales.</p>
                </li>
                <li>
                  <strong>Comodidad y versatilidad:</strong>
                  <p>Es una forma rápida y práctica de consumir proteínas, ideal para personas con poco tiempo o dificultades para alcanzar sus necesidades proteicas solo con alimentos.</p>
                </li>
              </ul>
            </div>

            <div className='acordeon' onClick={() => toggleAccordion(2)}>
              <h3>Tipos de proteína en suplemento</h3>
              {activeIndex === 2 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div>

            <div className='macros' style={{ maxHeight: activeIndex === 2 ? "800px" : "0" }}>
              <ul>
                <li>
                  <strong>Proteína de suero de leche (whey):</strong>
                  <p>Es la más popular por su alta calidad y rápida absorción. Ideal para consumir después del entrenamiento.</p>
                  <p>Se encuentra en tres formas principales:</p>
                  <ul>
                    <li>Concentrado: Contiene un 70-80% de proteínas y pequeñas cantidades de carbohidratos y grasas.</li>
                    <li>Aislado: Más puro, con un 90% o más de proteínas y casi nada de grasas o carbohidratos.</li>
                    <li>Hidrolizado: Predigerido para facilitar la absorción rápida.</li>
                  </ul>
                </li>
                <li>
                  <strong>Proteína de caseína:</strong>
                  <p>Se digiere lentamente, liberando aminoácidos de forma sostenida. Ideal para tomar antes de dormir.</p>
                </li>
                <li>
                  <strong>Proteína vegetal:</strong>
                  <p>Proveniente de fuentes como la soja, guisante, arroz o cáñamo. Es apta para veganos y personas con intolerancias.</p>
                </li>
                <li>
                  <strong>Proteína de huevo:</strong>
                  <p>De alta biodisponibilidad y libre de lactosa, es adecuada para quienes buscan una opción intermedia en velocidad de absorción.</p>
                </li>
                <li>
                  <strong>Proteína de carne:</strong>
                  <p>Obtenida de carne de res, es una alternativa rica en aminoácidos y sin lactosa.</p>
                </li>
              </ul>
            </div>

            <div className='acordeon' onClick={() => toggleAccordion(3)}>
              <h3>¿Cómo tomar la proteína en suplemento?</h3>
              {activeIndex === 3 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div>

            <div className='macros' style={{ maxHeight: activeIndex === 3 ? "800px" : "0" }}>
              <p>
                La forma de consumir proteína en suplemento depende de tus objetivos y estilo de vida. Aquí hay algunas pautas generales:
              </p>
              <ul>
                <li>
                  <strong>Después del entrenamiento:</strong>
                  <p>Es el momento más común para consumir proteína debido a la necesidad de reparar y construir músculo. Una dosis típica es de 20-30 gramos.</p>
                </li>
                <li>
                  <strong>Antes del entrenamiento:</strong>
                  <p>Puede ser útil para garantizar la disponibilidad de aminoácidos durante el ejercicio, especialmente si entrenas en ayunas.</p>
                </li>
                <li>
                  <strong>Entre comidas:</strong>
                  <p>Ideal como snack para complementar tu ingesta diaria de proteínas.</p>
                </li>
                <li>
                  <strong>Antes de dormir:</strong>
                  <p>Tomar caseína o una mezcla de proteínas de digestión lenta puede ser beneficioso para la recuperación nocturna.</p>
                </li>
                <li>
                  <strong>Combinada con alimentos:</strong>
                  <p>Puedes mezclarla en batidos con frutas, avena o yogur para mejorar su sabor y añadir nutrientes.</p>
                </li>
              </ul>
            </div>

            <div className='acordeon' onClick={() => toggleAccordion(4)}>
              <h3>¿Es segura la proteína en suplemento?</h3>
              {activeIndex === 4 ? (
                <i className="fa-solid fa-angle-up acordeon-icon"></i>
              ) : (
                <i className="fa-solid fa-angle-down acordeon-icon"></i>
              )}
            </div>

            <div className='macros' style={{ maxHeight: activeIndex === 4 ? "800px" : "0" }}>
              <p>
                La proteína en suplemento es segura para la mayoría de las personas cuando se consume dentro de los niveles recomendados. Sin embargo, algunas consideraciones incluyen:
              </p>
              <ul>
                <li>Puede causar molestias digestivas en personas sensibles a la lactosa (en el caso del suero de leche).</li>
                <li>El exceso de proteínas no se almacena como músculo, sino que se convierte en energía o grasa, por lo que es importante no excederse.</li>
                <li>Consulta con un profesional de la salud si tienes problemas renales o hepáticos antes de tomar suplementos de proteína.</li>
              </ul>
              <p>
                Mantener una dieta equilibrada y variada es clave para aprovechar al máximo los beneficios de la proteína en suplemento.
              </p>
            </div>
          </section>


        </section>
      </div >
    </>
  );
};

export default Nutricion;
