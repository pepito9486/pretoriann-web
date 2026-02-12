import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Slider from "../components/slider";
import AccordeonCalculadora from "../components/accordeon-calc";
import Baner from '../components/baner';
import { Helmet } from "react-helmet-async";

const Calculadora = () => {
  const resultadoRef = useRef(null);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [activeIndex, setActiveIndex] = useState({
    macros: false,
    grasa: false
  });

  const bannersCalculadora = [

    {
      img: '/img-banner-principal/vascula-banner-calculadora1.webp',
      title: 'Herramientas para Seguir tu Progreso',
      link: '/afiliados/basculas',
      boton: 'Ver en Amazon',
    },
    // {
    //   img: '/img-banner-principal/macros-banner2-calculadora.webp',
    //   title: 'Como subir de Peso',
    //   link: '/calculadora',
    //   boton: 'Ver Mas',
    // },

  ];


  // const coloresCalculadora = ['#003366', '#003366', '#003366'];


  const [TMB, setTMb] = useState(null)
  const [pesoideal, setpesoideal] = useState(null)
  const [proteinas, setProteinas] = useState(null);
  const [grasas, setGrasas] = useState(null);
  const [carbohidratos, setCarbohidratos] = useState(null);
  const [caloriasProteina, setcaloriasProteinas] = useState(null)
  const [caloriasgrasas, setcaloriasgrasas] = useState(null)
  const [caloriascarbohidratos, setcaloriascarbohidratos] = useState(null)
  const [RangoGrasaCorporal, setRangoGrasaCorporal] = useState(null)
  const [calorias, setcalorias] = useState(null)
  const [bfp, setBfp] = useState(null); // BFP = Body Fat Percentage
  const [errorBfp, setErrorBfp] = useState(null);
  const [Objetivo, setObjetivo] = useState(null);


  // const[sexo,setsexo] = useState('null')
  const sexo = watch("sexo", "hombre")
  const nivelactividad = {
    sedentario: "1.2",
    ligero: "1.375",
    moderado: "1.55",
    activo: "1.725",
    muyactivo: "1.9"
  }


  const onsubmit = handleSubmit((values) => {
    console.log('nivel actividad en map es', nivelactividad[values.actividad]);

    const naf = nivelactividad[values.actividad];
    const pesoIdeal = 22 * Math.pow(values.estatura / 100, 2);
    setpesoideal(pesoIdeal);

    //obtener rangos saludables como referencias
    const obtenerRangoGrasaSaludable = (sexo, edad) => {
      if (sexo === "hombre") {
        if (edad < 40) return "8% - 19%";
        if (edad < 60) return "11% - 22%";
        return "13% - 25%";
      } else {
        if (edad < 40) return "21% - 33%";
        if (edad < 60) return "23% - 35%";
        return "24% - 36%";
      }
    };

    const rangoGrasa = obtenerRangoGrasaSaludable(values.sexo, values.edad);
    setRangoGrasaCorporal(rangoGrasa); // crea un useState para esto

    // *******************************************************************


    let tmb = 0;
    if (values.sexo === 'hombre') {
      tmb = (10 * values.peso) + (6.25 * values.estatura) - (5 * values.edad) + 5;
    } else {
      tmb = (10 * values.peso) + (6.25 * values.estatura) - (5 * values.edad) - 161;
    }
    const gastoCaloricoSinTEF = tmb * naf;
    const gastoCaloricoTotal = gastoCaloricoSinTEF * 1.1; // añade 10% de termogénesis

    // const gastoKalorico = tmb * naf;
    setTMb(gastoCaloricoTotal);


    const cmToInches = (cm) => cm / 2.54;
    if (
      Number(values.cintura) > 0 &&
      Number(values.cuello) > 0 &&
      Number(values.estatura) > 0
    ) {
      const cintura = cmToInches(Number(values.cintura));
      const cuello = cmToInches(Number(values.cuello));
      const estatura = cmToInches(Number(values.estatura));
      console.log('medidias', cintura)

      if (values.sexo === 'hombre') {
        if (cintura > cuello) {
          const calcBfp = 86.010 * Math.log10(cintura - cuello)
            - 70.041 * Math.log10(estatura)
            + 36.76;
          console.log('porcentaje de grasa corporal es', calcBfp)
          setBfp(calcBfp);
          setErrorBfp(null);
        } else {
          setBfp(null);
          setErrorBfp("Error: la cintura debe ser mayor que el cuello.");
          console.log('error cintura menor que cuello')
        }
      } else {
        if (
          Number(values.cadera) > 0 &&
          cintura + cmToInches(Number(values.cadera)) > cuello
        ) {
          const cadera = cmToInches(Number(values.cadera));
          const calcBfp = 163.205 * Math.log10(cintura + cadera - cuello)
            - 97.684 * Math.log10(estatura)
            - 78.387;
          console.log('porcentaje de grasa corporal es', calcBfp)
          setBfp(calcBfp);
          setErrorBfp(null);
        } else {
          setBfp(null);
          setErrorBfp("Error: asegúrate de que cadera + cintura sea mayor que cuello.");
          console.log('error cintura menor que cuello')
        }
      }
    } else {
      setBfp(null);
      setErrorBfp("Por favor, completa correctamente los campos requeridos.");
    }

    // ***************************************************************

    const pesoKg = values.peso;
    const objetivo = values.objetivo; // "definicion", "mantenimiento", "volumen"
    setObjetivo(objetivo)
    let gramosProteina = 0;
    let gramosGrasa = 0;
    let gastoCaloricoAjustado = gastoCaloricoTotal; // gastoKalorico calculado previamente

    // Ajustar gasto calórico según el objetivo
    if (objetivo === "volumen") {
      gastoCaloricoAjustado += 300; // Superávit calórico
    } else if (objetivo === "definicion") {
      gastoCaloricoAjustado -= 300; // Déficit calórico
    }

    // Estimar proteínas y grasas (fijas por peso corporal)
    if (objetivo === "volumen") {
      gramosProteina = 2 * pesoKg;
      gramosGrasa = 1 * pesoKg;
    } else if (objetivo === "definicion") {
      gramosProteina = 2.2 * pesoKg;
      gramosGrasa = 1 * pesoKg;
    } else {
      // mantenimiento
      gramosProteina = 1.8 * pesoKg;
      gramosGrasa = 1 * pesoKg;
    }

    // Calorías de proteínas y grasas
    const caloriasProteina = gramosProteina * 4;
    setcaloriasProteinas(caloriasProteina)
    const caloriasGrasa = gramosGrasa * 9;
    setcaloriasgrasas(caloriasGrasa)


    // Calorías restantes para carbohidratos
    const caloriasRestantes = gastoCaloricoAjustado - (caloriasProteina + caloriasGrasa);
    const gramosCarbohidrato = caloriasRestantes / 4;
    const caloriasTotalesMacros =
      (gramosProteina * 4) + (gramosGrasa * 9) + (gramosCarbohidrato * 4);
    const caloriashidratos = caloriasTotalesMacros - (caloriasGrasa + caloriasProteina)
    setcaloriascarbohidratos(caloriashidratos)
    setcalorias(caloriasTotalesMacros)
    setProteinas(gramosProteina);
    setGrasas(gramosGrasa);
    setCarbohidratos(gramosCarbohidrato);

    setTimeout(() => {
      resultadoRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // pequeña espera opcional para asegurar render


    // console.log("Valores ingresados:", values);
    // console.log("El peso ideal es:", pesoIdeal);
    // console.log("Tasa metabólica basal:", tmb);
    // console.log("El gasto calórico es:", gastoKalorico);
    // console.log("Nivel de actividad física:", values.actividad);
    // console.log('objetivos', values.objetivo)
  });




  const toggleAccordion = (key) => {
    setActiveIndex((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <>

      <Helmet>
        {/* 🔹 SEO General */}
        <title>Calculadora Fitness | Pretoriann</title>
        <meta
          name="description"
          content="Calcula tu gasto calórico diario, tus macronutrientes y el equilibrio perfecto entre proteínas, grasas y carbohidratos según tu objetivo: volumen, definición o mantenimiento."
        />
        <meta
          name="keywords"
          content="calculadora fitness, gasto calórico, macronutrientes, calorías diarias, proteínas, grasas, carbohidratos, déficit calórico, superávit calórico, mantenimiento"
        />
        <meta name="author" content="Pretoriann" />

        {/* 🔹 Open Graph (para redes sociales) */}
        <meta property="og:title" content="Calculadora de Calorías y Macronutrientes | Pretoriann" />
        <meta
          property="og:description"
          content="Usa la calculadora fitness de Pretoriann para conocer tu gasto calórico diario y ajustar tu alimentación a tu meta: volumen, definición o mantenimiento."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pretoriann.com/calculadora" />
        <meta
          property="og:image"
          content="https://www.pretoriann.com/img-banner-principal/calculadora-banner.webp"
        />
        <meta property="og:locale" content="es_ES" />

        {/* 🔹 SEO técnico */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.pretoriann.com/calculadora" />
      </Helmet>




      {/* colores={coloresCalculadora} */}
      <Baner banners={bannersCalculadora} />
      <Slider clase1={"main-card"} clase2={"info-card"} />

      <main className="principal">
        <div className="main-calisteniatrain">

          <h1 className="title-calculadora" >
            Optimiza tu Nutricion con Nuestra Calculadora Fitness
          </h1>


          <article>
            <p>
              Maximiza tus resultados con nuestra calculadora fitness, la herramienta perfecta para planificar tus entrenamientos y nutrición. Calcula tus calorías diarias, macros ideales, Índice de Masa Corporal (IMC) y más, adaptándose a tus metas: pérdida de peso, ganancia muscular o mantenimiento. ¡Toma el control de tu salud con datos precisos y personalizados!
            </p>
          </article>

          <h2 className="title2-calculadora">Cálculos Fitness... ¿cuáles son y cómo se hacen?</h2>

          <ul>
            <AccordeonCalculadora
              h2={"Cálculo del Peso Ideal"}
              rutine={"3 series de 1 minuto"}
              calc={"imc"}
              image={"/img-icon/icon-peso-ideal.webp"}
            />
            <AccordeonCalculadora
              h2={"Cálculo de Porcentaje Grasa Corporal"}
              rutine={"3 series de 1 minuto"}
              calc={"pgc"}
              image={"/img-icon/indice-grasa-corporal.webp"}
            />
            <AccordeonCalculadora
              h2={"Cálculo de Gasto Calórico Diario"}
              rutine={"3 series de 30 repeticiones"}
              calc={"calorias"}
              image={"/img-icon/img-kcalorias.webp"}
            />
            <AccordeonCalculadora
              h2={"Balance Calórico"}
              calc={"deficit"}
              rutine={"3 series de 30 repeticiones"}
              image={"/img-icon/balance-calorico.webp"}
            />
            <AccordeonCalculadora
              h2={"Otras Estimaciones a Considerar"}
              rutine={"3 series de 1 minuto"}
              calc={"otros"}
              image={"/img-icon/icon-otras-consideraciones.webp"}
            />
            <AccordeonCalculadora
              h2={"Cálculo de RCM (Ritmo Cardíaco Máximo)"}
              calc={"rcm"}
              rutine={"3 series de 30 repeticiones"}
              image={"/img-icon/icon-rcm.webp"}
            />
            <AccordeonCalculadora
              h2={"Distribución de Macronutrientes"}
              calc={"macros"}
              rutine={"3 series de 30 repeticiones"}
              image={"/img-icon/balance-calorico.webp"}
            />
          </ul>

          <h2 className="title2-calculadora">Calculadora de Calorias y otros indices</h2>
        </div>

        <div className="calculo">
          <form onSubmit={onsubmit}>
            <label htmlFor="sexo">Sexo:</label>
            <select id="sexo" {...register("sexo", { required: true })}>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
            </select>
            {errors.sexo && <span>Campo requerido</span>}

            <label htmlFor="actividad">Nivel de actividad física:</label>
            <select
              id="actividad"
              defaultValue="moderado"
              {...register("actividad", { required: true })}
            >
              <option value="sedentario">Sedentario</option>
              <option value="ligero">Ligero</option>
              <option value="moderado">Moderado</option>
              <option value="activo">Activo</option>
              <option value="muyactivo">Muy activo</option>
            </select>
            {errors.actividad && <span>Campo requerido</span>}

            <label htmlFor="edad">Edad:</label>
            <input
              type="number"
              id="edad"
              min="1"
              {...register("edad", {
                required: true,
                min: 1,
              })}
              onKeyDown={(e) => {
                if (e.key === "-" || e.key === "e" || e.key === "+" || e.key === ".") {
                  e.preventDefault(); // Bloquea negativos, exponentes, decimales, y símbolos no deseados
                }
              }}
              onPaste={(e) => {
                const pastedText = e.clipboardData.getData("text");
                const number = Number(pastedText);
                if (isNaN(number) || number < 1) {
                  e.preventDefault(); // bloquea el pegado
                }
              }}
            />
            {errors.edad?.type === "required" && <span>Campo requerido</span>}
            {errors.edad?.type === "min" && <span>Ingrese una edad real</span>}


            <label htmlFor="estatura">Estatura (cm):</label>
            <input
              type="number"
              id="estatura"
              min="1"
              {...register("estatura", {
                required: true,
                min: 1,
              })}
              onKeyDown={(e) => {
                if (e.key === "-" || e.key === "e" || e.key === "+") {
                  e.preventDefault(); // Bloquea negativos, exponentes, decimales, y símbolos no deseados
                }
              }}
              onPaste={(e) => {
                const pastedText = e.clipboardData.getData("text");
                const number = Number(pastedText);
                if (isNaN(number) || number < 1) {
                  e.preventDefault(); // bloquea el pegado
                }
              }}
            />
            {errors.estatura?.type === "required" && <span>Campo requerido</span>}
            {errors.estatura?.type === "min" && <span>Ingrese una estatura real</span>}

            <label htmlFor="peso">Peso (kg):</label>
            <input
              type="number"
              id="peso"
              min="1"
              {...register("peso", {
                required: true,
                min: 1,
              })}
              onKeyDown={(e) => {
                if (e.key === "-" || e.key === "e" || e.key === "+") {
                  e.preventDefault(); // Bloquea negativos, exponentes, decimales, y símbolos no deseados
                }
              }}
              onPaste={(e) => {
                const pastedText = e.clipboardData.getData("text");
                const number = Number(pastedText);
                if (isNaN(number) || number < 1) {
                  e.preventDefault(); // bloquea el pegado
                }
              }}
            />
            {errors.peso?.type === "required" && <span>Campo requerido</span>}
            {errors.peso?.type === "min" && <span>Ingrese un peso real</span>}


            {/* Acordeón Opcional 1*/}
            <div style={{ backgroundColor: 'none' }} className="acordeon-porcentaje" onClick={() => toggleAccordion("macros")}>
              <h3>Calculo de Macronutrientes(Opcional)</h3>
              <i className={`fa-solid ${activeIndex.macros ? "fa-angle-up" : "fa-angle-down"}`}></i>
            </div>
            <div className={`porcentaje-grasa ${activeIndex.macros ? "open" : ""}`}>
              <label htmlFor="objetivo">Objetivo:</label>
              <select id="objetivo" {...register("objetivo", { required: true })}>
                <option value="definicion">Definición</option>
                <option value="mantenimiento">Mantenimiento</option>
                <option value="volumen">Volumen</option>
              </select>
              {errors.objetivo && <span>Campo requerido</span>}


            </div>



            {/* Acordeón Opcional 2*/}
            <div style={{ backgroundColor: 'none' }} className="acordeon-porcentaje" onClick={() => toggleAccordion("grasa")}>
              <h3>Porcentaje de Grasa Corporal (Opcional)</h3>
              <i className={`fa-solid ${activeIndex.grasa ? "fa-angle-up" : "fa-angle-down"}`}></i>
            </div>
            <div className={`porcentaje-grasa ${activeIndex.grasa ? "open" : ""}`}>
              <label htmlFor="cintura">Cintura (cm):</label>
              <input type="number"
                id="cintura"
                min="1"
                {...register("cintura", {

                  min: 1,
                })}
                onKeyDown={(e) => {
                  if (e.key === "-" || e.key === "e" || e.key === "+") {
                    e.preventDefault(); // Bloquea negativos, exponentes, decimales, y símbolos no deseados
                  }
                }} />


              {errors.cintura?.type === "min" && <span>Ingrese un peso real</span>}
              {errorBfp && (
                <div style={{ color: 'red', marginTop: '1em' }}>
                  {errorBfp}
                </div>
              )}


              <label htmlFor="cuello">Cuello (cm):</label>
              <input type="number"
                id="cuello"
                min="1"
                {...register("cuello", {

                  min: 1,
                })}
                onKeyDown={(e) => {
                  if (e.key === "-" || e.key === "e" || e.key === "+") {
                    e.preventDefault(); // Bloquea negativos, exponentes, decimales, y símbolos no deseados
                  }
                }} />


              {errors.cuello?.type === "min" && <span>Ingrese una medida real</span>}
              {errorBfp && (
                <div style={{ color: 'red', marginTop: '1em' }}>
                  {errorBfp}
                </div>
              )}

              {sexo === "mujer" && (
                <>
                  <label htmlFor="cadera">Cadera (cm):</label>
                  <input type="number"
                    id="cadera"
                    min="1"
                    {...register("cadera", {

                      min: 1,
                    })}
                    onKeyDown={(e) => {
                      if (e.key === "-" || e.key === "e" || e.key === "+") {
                        e.preventDefault(); // Bloquea negativos, exponentes, decimales, y símbolos no deseados
                      }
                    }} />

                  {errors.cadera?.type === "min" && <span>Ingrese una medida real</span>}
                  {errorBfp && (
                    <div style={{ color: 'red', marginTop: '1em' }}>
                      {errorBfp}
                    </div>
                  )}
                </>
              )}
            </div>


            <div className="botones-calculadora">
              <button type="submit">Calcular Total</button>
            </div>
          </form>

        </div>
        {TMB && pesoideal && (
          <div className="resultados" ref={resultadoRef}>
            <h3>Resultados</h3>
            <p><strong>Gasto calórico diario:</strong> {TMB.toFixed(2)} kcal/día</p>
            <p><strong>Peso ideal estimado:</strong> {pesoideal.toFixed(2)} kg</p>
            {bfp !== null && (
              <>
                <p><strong>Porcentaje de grasa corporal estimado:</strong> {bfp.toFixed(2)} %</p>
                <p><strong>Rango saludable recomendado:</strong> {RangoGrasaCorporal}</p>
              </>
            )}

            <h3>Distribución de Macronutrientes</h3>

            {Objetivo === "volumen" && (
              <p>
                ⚠️ Para tu objetivo de <strong>{Objetivo}</strong> y ganar entre 0.5 y 1.2 kg de masa muscular por mes, se recomienda aumentar entre
                <strong> 250 a 500 kcal/día</strong> sobre tu gasto de mantenimiento.
              </p>
            )}

            {Objetivo === "definicion" && (
              <p>
                ⚠️ Para tu objetivo de <strong>{Objetivo}</strong> y perder grasa de forma saludable, apunta a un <strong>déficit de 300 a 500 kcal/día</strong> y pérdida de 0.5 kg/semana.
              </p>
            )}
            <p><strong>🥩 Proteínas:</strong> {proteinas.toFixed(2)} g ≈ {caloriasProteina.toFixed(2)} kcal</p>
            <p><strong>🧈 Grasas:</strong> {grasas.toFixed(2)} g ≈ {caloriasgrasas.toFixed(2)} kcal</p>
            <p><strong>🍞 Carbohidratos:</strong> {carbohidratos.toFixed(2)} g ≈ {caloriascarbohidratos.toFixed(2)} kcal</p>
            <p><strong>🔥 para un total de  Calorías totales según macros:</strong> {calorias.toFixed(2)} kcal/día</p>

            <p>
              <strong>Nota:</strong> En esta calculadora usamos un ajuste de <strong>300 calorías diarias</strong> como referencia.
              Esto significa que puedes <strong>sumar 300 kcal/día</strong> si estás en etapa de <strong>volumen</strong>,
              o <strong>restar 300 kcal/día</strong> si tu objetivo es <strong>definición</strong>.
              <br /><br />
              ¿Por qué 300 kcal? Porque es un valor estándar y equilibrado en el mundo del fitness:
              suficiente para notar resultados sin que el proceso se vuelva extremo. Este margen permite avanzar
              de forma constante, sin ralentizar el metabolismo ni acumular grasa innecesaria.
              <br /><br />
              Recuerda que cada cuerpo responde de manera distinta. Usa este valor como punto de partida y ajusta
              según tu entrenamiento, nivel de actividad, masa muscular y objetivos personales. Lo importante es
              mantener un progreso <strong>sostenible y realista</strong> a largo plazo.
            </p>



          </div>
        )}
      </main>
    </>
  );
};

export default Calculadora;
