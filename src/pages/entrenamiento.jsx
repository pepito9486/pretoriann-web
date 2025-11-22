


import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Rutina from '../components/card-rutina';
import Carousel from '../components/card-rutina';
import Slider from '../components/slider';
import Bannertitulos from '../components/Bannertitulos';
import Baner from '../components/baner';


import Traincrossfit from '../compont-trainning/traincrossfit';
import Traincalistenia from '../compont-trainning/traincalistenia';
import Traincombat from '../compont-trainning/traincombat';
import Trainfuncional from '../compont-trainning/trainfuncional';
import Trainhiit from '../compont-trainning/trainhiit'
import Trainhipertrofia from '../compont-trainning/trainhipertrofia';
import Trainpowerlifting from '../compont-trainning/trainpowerlifting';
import Trainresistencia from '../compont-trainning/trainresistencia';
import Trainspinning from '../compont-trainning/trainspinning';
import Trainaerobics from '../compont-trainning/trainaerobics';
import Trainpilates from '../compont-trainning/trainpilates';
import Trainyoga from '../compont-trainning/trainyoga';
import { Helmet } from "react-helmet-async";

const paletaRutinas = ['#003366', '#003366', '#003366'];


function Entrenamiento(props) {

    const location = useLocation();
    const hipertrofiaRef = useRef(null);


    const [selectedDiscipline, setSelectedDiscipline] = useState('');
    const targetRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [bolean, setbolean] = useState(true);
    const [key, setkey] = useState(null)

    const bannersRutinas = [
        {
            img: '/img-banner-principal/calendar-banner1-rutinas.webp',
            title: 'Organiza tus Rutinas como un Pro',
            link: '/afiliados/rutinas',
            boton: 'Ver en Amazon',
        },
        // {
        //     img: '/img-banner-principal/fullbody-banner2-rutinas.webp',
        //     title: 'Fullbody vs Metodo Weider',
        //     link: '/blog/rutinas-entrenamiento',
        //     boton: 'Ver guía',
        // },
    ];

    const coloresRutinas = ['#003366', '#003366', '#003366'];




    const componentMap = {
        Calistenia: <Traincalistenia ref={targetRef} />,
        Crossfit: <Traincrossfit ref={targetRef} />,
        Hipertrofia: <Trainhipertrofia ref={targetRef} />,
        Powerlifting: <Trainpowerlifting ref={targetRef} />,
        Funcional: <Trainfuncional ref={targetRef} />,
        HIIT: <Trainhiit ref={targetRef} />,
        Pilates: <Trainpilates ref={targetRef} />,
        Yoga: <Trainyoga ref={targetRef} />,
        Aerobics: <Trainaerobics ref={targetRef} />,
        Spinning: <Trainspinning ref={targetRef} />,
        Resistencia: <Trainresistencia ref={targetRef} />,
        Bodycombat: <Traincombat ref={targetRef} />,
    };

    const handleItemClick = (discipline) => {
        setSelectedDiscipline(componentMap[discipline]);
    };

    useEffect(() => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selectedDiscipline]);

    useEffect(() => {
        if (location.state?.scrollTo === 'entrenamiento-hipertrofia') {
            hipertrofiaRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    function toggleAccordion(index) {
        // setbolean(!bolean);
        // setActiveIndex(bolean);
        // setkey(index)
        // console.log("esta es la key",key)
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    }


    return (
        <>
            <Helmet>
                {/* 🔹 SEO General */}
                <title>Entrenamiento y Rutinas | Tu Sitio Fitness</title>
                <meta
                    name="description"
                    content="Encuentra rutinas de entrenamiento personalizadas, planes para ganar masa muscular o perder grasa, y considera los aspectos nutricionales clave para optimizar tus resultados."
                />
                <meta
                    name="keywords"
                    content="rutinas de entrenamiento, planes fitness, ejercicios en casa, musculación, fuerza, definición, volumen, entrenamiento funcional, nutrición deportiva"
                />
                <meta name="author" content="Tu Sitio Fitness" />

                {/* 🔹 Open Graph (redes sociales) */}
                <meta property="og:title" content="Rutinas y Planes de Entrenamiento | Tu Sitio Fitness" />
                <meta property="og:description" content="Descubre rutinas de fuerza, resistencia y definición adaptadas a tu nivel. Incluye guías nutricionales para acompañar tu entrenamiento." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tusitiofitness.com/entrenamiento" />
                <meta property="og:image" content="https://tusitiofitness.com/img-banner-principal/entrenamiento-banner.webp" />
                <meta property="og:locale" content="es_ES" />

                {/* 🔹 SEO técnico */}
                <link rel="canonical" href="https://tusitiofitness.com/entrenamiento" />
            </Helmet>
            <Baner banners={bannersRutinas} colores={coloresRutinas} />
            <Slider clase1={'main-card'} clase2={'info-card'} />

            <main className='principal-entrenamiento'>
                <section >
                    <Bannertitulos
                        title='Rutina y Entrenamiento'
                        p='Aprende como hacer un entrenamiento creando tus propias rutinas.'
                        style='../img-banner/banner-entrenamiento.webp'
                    />

                    <div className='lista-acordeon' onClick={() => toggleAccordion(1)} >
                        <h2 className='h2-entrenamiento'>Tipos de entrenamientos </h2>
                        {activeIndex === 1 ? (
                            <i className="fa-solid fa-angle-up acordeon-icon"></i>
                        ) : (
                            <i className="fa-solid fa-angle-down acordeon-icon"></i>
                        )}
                    </div>



                    <div className="informacion-ul"
                        style={{ maxHeight: activeIndex === 1 ? "800px" : "0" }}>
                        <ul>
                            <li><strong>Entrenamiento de Fuerza:</strong> Aumenta la masa muscular, mejora la densidad ósea y potencia la capacidad física para levantar, empujar o cargar peso.</li>
                            <li><strong>Entrenamiento Cardiovascular:</strong>  Optimiza la salud del corazón y los pulmones, aumentando la resistencia física y quemando calorías.</li>
                            <li><strong>Entrenamiento de Flexibilidad y Movilidad:</strong> Promueve la amplitud de movimiento, previene lesiones y mejora la postura corporal.</li>
                            <li><strong>Entrenamiento de Equilibrio y Estabilidad:</strong> Fortalece el core y mejora el control del cuerpo, esencial para prevenir caídas y aumentar el rendimiento deportivo.</li>
                            <li><strong>Entrenamiento de Velocidad y Agilidad:</strong> Desarrolla reflejos rápidos, mayor capacidad de reacción y movimientos fluidos en cambios de dirección.</li>
                        </ul>
                    </div>


                    <div className='lista-acordeon' onClick={() => toggleAccordion(2)} >
                        <h2 className='h2-entrenamiento'>Estructura de una rutina </h2>
                        {activeIndex === 2 ? (
                            <i className="fa-solid fa-angle-up acordeon-icon"></i>
                        ) : (
                            <i className="fa-solid fa-angle-down acordeon-icon"></i>
                        )}
                    </div>

                    <div className="informacion-ul"
                        style={{ maxHeight: activeIndex === 2 ? "800px" : "0" }}>

                        <ul >
                            <li><strong>Estructura y Planificación:</strong> Una rutina está organizada y planificada de antemano, incluyendo qué ejercicios se realizarán, en qué orden, con cuántas repeticiones y series, y en qué días de la semana.</li>
                            <li><strong>Objetivo Específico:</strong>Cada rutina se diseña en función de un objetivo particular, como aumentar la masa muscular, perder peso, mejorar la resistencia cardiovascular, o aumentar la flexibilidad.</li>
                            <li><strong>Progresión:</strong>Las rutinas suelen estar diseñadas para progresar con el tiempo, aumentando gradualmente la intensidad, el volumen o la dificultad de los ejercicios a medida que se mejora la condición física.</li>
                            <li><strong>Variedad:</strong>Para evitar el estancamiento y mantener la motivación, las rutinas pueden incluir una variedad de ejercicios que se enfocan en diferentes grupos musculares y capacidades físicas.</li>
                            <li><strong>Personalización:</strong>Una rutina de fitness puede ser adaptada a las necesidades individuales de una persona, considerando su nivel de condición física, sus limitaciones físicas, y sus metas personales.</li>
                            <li><strong>Duración y Frecuencia:</strong>Las rutinas especifican cuánto tiempo se dedica a cada sesión de entrenamiento y con qué frecuencia se realizan, como tres veces por semana durante 60 minutos cada vez.</li>

                        </ul>
                    </div>

                    <div className='lista-acordeon' onClick={() => toggleAccordion(3)} >
                        <h2 className='h2-entrenamiento'> Entrenamiento Efectivo:</h2>
                        {(activeIndex === 3) ? (
                            <i className="fa-solid fa-angle-up acordeon-icon"></i>
                        ) : (
                            <i className="fa-solid fa-angle-down acordeon-icon"></i>
                        )}

                    </div>

                    <div className="informacion-ul"
                        style={{ maxHeight: activeIndex === 3 ? "800px" : "0" }}>
                        <ul>
                            <li><strong>Calentamiento y estiramiento:</strong> consiste en hacer algunos ejercicios especificos preparando asi el cuerpo para el esfuerzo mayor, en este proceso incrementamos el flujo sanguineo llevando mas oxigeno y nutientes a los musculos, lubricamos las articulaciones y mejoramos la elasticidad al aumentar la temperatura corporal,la duracion suele oscilar entre los 10 y 15 minutos</li>
                            <li><strong>Entrenamiento Principal:</strong>Va depender de la disciplina que entrenemos, si es fuerza, resistencia o flexibilidad debemos tener nuestro plan de entrenamiento del dia.  </li>
                            <li><strong>Enfriamiento y Estiramientos:</strong> al finalizar cada rutina debemos enfriar el cuerpo, con esto conseguimos relajacion muscular reduciendo asi la tension muscular durante el entrenamiento, hacer estiramientos mejora la flexibilidad y la circulacion,la duracion de este proceso esta entre los 10 y 15 minutos. </li>
                        </ul>

                    </div>



                    <div className='lista-acordeon' onClick={() => toggleAccordion(4)} >
                        <h2 className='h2-entrenamiento'>Los 4 pilares del Entrenamiento</h2>
                        {activeIndex === 4 ? (
                            <i className="fa-solid fa-angle-up acordeon-icon"></i>
                        ) : (
                            <i className="fa-solid fa-angle-down acordeon-icon"></i>
                        )}


                    </div>

                    <div className="informacion-ul" style={{
                        maxHeight: activeIndex === 4 ? "3000px" : "0",
                        //overflow: "hidden",  Para asegurar que el contenido no se desborde

                    }}>
                        <p>
                            Cuando se trata de alcanzar tus objetivos de fitness, no existe un enfoque único para todos. La clave está en personalizar tu rutina de entrenamiento según tus metas, nivel de experiencia y necesidades individuales. En este blog, te explicamos los cuatro pilares fundamentales para diseñar un plan efectivo: frecuencia, duración, volumen e intensidad, y descanso y recuperación.
                        </p>
                        <ul>
                            <li><strong>1. Frecuencia: ¿Cuántos Días a la Semana Debes Entrenar?</strong> La frecuencia de entrenamiento se refiere a la cantidad de días que dedicas a ejercitarte cada semana. Este factor depende en gran medida de tu objetivo y nivel de experiencia:
                                <p><strong>Principiantes:</strong> Si estás empezando, 3-4 días a la semana son suficientes para construir una base sólida sin sobrecargar tu cuerpo.</p>

                                <p><strong>Intermedios y Avanzados:</strong> Para quienes buscan mejorar su rendimiento o ganar masa muscular, 4-6 días de entrenamiento semanal pueden ser ideales.</p>

                                <p> <strong>Objetivos Específicos:</strong> Si tu meta es perder grasa, combinar entrenamientos de fuerza con cardio 5-6 días a la semana puede ser efectivo. Para mantenimiento, 3-4 días pueden ser suficientes.</p>

                            </li>

                            <li>
                                <strong>2. Duración: ¿Cuánto Debe Durar Cada Sesión de Entrenamiento?</strong>
                                <p>La duración de tu entrenamiento varía según el tipo de ejercicio que realices</p>
                                <p>
                                    Cardio: Las sesiones de cardio pueden durar entre 20 y 60 minutos, dependiendo de la intensidad. Por ejemplo, un HIIT (entrenamiento de intervalos de alta intensidad) puede ser más corto pero muy efectivo.
                                </p>
                                <p>
                                    Entrenamiento de Fuerza: Una sesión típica de pesas puede durar entre 45 y 90 minutos, dependiendo del volumen de ejercicios y grupos musculares que trabajes.
                                </p>
                                <p>
                                    Yoga o Estiramientos: Estas sesiones pueden durar entre 30 y 60 minutos, enfocándose en la flexibilidad y la recuperación.
                                </p>

                                <p>
                                    La clave es priorizar la calidad sobre la cantidad. Un entrenamiento bien planificado de 45 minutos puede ser más efectivo que uno de 2 horas sin estructura.
                                </p>

                            </li>

                            <li>
                                <strong>3. Volumen e Intensidad: El Equilibrio Perfecto</strong>
                                <p>
                                    El volumen (cantidad de trabajo) y la intensidad (qué tan duro trabajas) son dos factores que deben ajustarse cuidadosamente para alcanzar tus objetivos:
                                </p>
                                <p>
                                    Volumen: Se refiere al número de series, repeticiones y ejercicios que realizas. Un volumen alto es ideal para hipertrofia (ganancia muscular), mientras que un volumen moderado puede ser mejor para fuerza y resistencia.
                                </p>
                                <p>
                                    Intensidad: Es el nivel de esfuerzo que aplicas durante el entrenamiento. Para mejorar la fuerza, es recomendable trabajar con pesos más pesados y menos repeticiones. Para resistencia, pesos más ligeros y más repeticiones.
                                </p>
                                <p>
                                    Asegúrate de progresar gradualmente para evitar lesiones y maximizar los resultados. ¡No intentes hacer demasiado en poco tiempo!
                                </p>

                            </li>
                            <li>
                                <strong>4. Descanso y Recuperación:</strong>
                                <p>
                                    Muchas personas subestiman la importancia del descanso, pero es tan crucial como el entrenamiento mismo. Los músculos necesitan tiempo para repararse y crecer después del esfuerzo físico. Aquí algunos consejos:
                                </p>
                                <p>
                                    Días de Descanso: Incluye al menos 1-2 días de descanso completo o activo (como caminar o hacer yoga) en tu rutina semanal.
                                </p>
                                <p>
                                    Sueño: Dormir 7-9 horas por noche es esencial para la recuperación muscular y el rendimiento general.
                                </p>
                                <p>
                                    Alimentación: Una dieta rica en proteínas, carbohidratos complejos y grasas saludables ayudará a tu cuerpo a recuperarse más rápido.
                                </p>
                            </li>
                        </ul>

                    </div>


                    <div className='lista-acordeon' onClick={() => toggleAccordion(5)} >
                        <h2 className='h2-entrenamiento'>Consideraciones Nutricionales:</h2>
                        {activeIndex === 5 ? (
                            <i className="fa-solid fa-angle-up acordeon-icon"></i>
                        ) : (
                            <i className="fa-solid fa-angle-down acordeon-icon"></i>
                        )}


                    </div>

                    <div className="informacion-ul"
                        style={{ maxHeight: activeIndex === 5 ? "8000px" : "0" }}>
                        <div>
                            <h2>Nutrición Pre-Entrenamiento: Qué Comer Antes del Ejercicio</h2>
                            <p>La nutrición pre-entrenamiento es fundamental para optimizar el rendimiento, retrasar la fatiga y maximizar los resultados del ejercicio. Lo que comes antes de entrenar depende del tipo, intensidad y duración de la actividad física, así como de tus objetivos personales.</p>

                            <p><strong>1. Objetivos de la Nutrición Pre-Entrenamiento</strong></p>
                            <ul>
                                <li><strong>Proveer energía:</strong> Los carbohidratos son la principal fuente de energía para ejercicios de alta intensidad.</li>
                                <li><strong>Preservar la masa muscular:</strong> Las proteínas ayudan a reducir el catabolismo muscular (descomposición de proteínas).</li>
                                <li><strong>Mantener la hidratación:</strong> Beber líquidos antes del ejercicio es crucial para evitar la deshidratación.</li>
                            </ul>

                            <p><strong>2. ¿Qué Comer Antes del Entrenamiento?</strong></p>
                            <ul>
                                <li><strong>Carbohidratos:</strong> Son la fuente de energía más eficiente. Opta por carbohidratos complejos y de bajo índice glucémico para una liberación sostenida de energía.
                                    <ul>
                                        <li>Ejemplos: Avena, arroz integral, pan integral, frutas (plátano, manzana), batata.</li>
                                    </ul>
                                </li>
                                <li><strong>Proteínas:</strong> Ayudan a mantener la masa muscular y a reparar tejidos.
                                    <ul>
                                        <li>Ejemplos: Yogur griego, huevos, pollo, pescado, proteína en polvo.</li>
                                    </ul>
                                </li>
                                <li><strong>Grasas Saludables:</strong> En cantidades moderadas, proporcionan energía para ejercicios de baja intensidad o larga duración.
                                    <ul>
                                        <li>Ejemplos: Aguacate, nueces, semillas, mantequilla de almendras.</li>
                                    </ul>
                                </li>
                                <li><strong>Hidratación:</strong> Bebe agua o bebidas con electrolitos 1-2 horas antes del entrenamiento.</li>
                            </ul>

                            <p><strong>3. Timing (Cuándo Comer)</strong></p>
                            <ul>
                                <li><strong>2-3 horas antes:</strong> Una comida completa con carbohidratos, proteínas y grasas.
                                    <ul>
                                        <li>Ejemplo: Pechuga de pollo con arroz integral y verduras.</li>
                                    </ul>
                                </li>
                                <li><strong>30-60 minutos antes:</strong> Un snack ligero rico en carbohidratos y bajo en grasas.
                                    <ul>
                                        <li>Ejemplo: Un plátano con una cucharada de mantequilla de maní o un batido de proteínas.</li>
                                    </ul>
                                </li>
                            </ul>

                            <p><strong>4. Ejemplos de Snacks Pre-Entrenamiento</strong></p>
                            <ul>
                                <li>Tostadas integrales con aguacate.</li>
                                <li>Yogur griego con frutas.</li>
                                <li>Barritas de proteína bajas en azúcar.</li>
                                <li>Batido de proteínas con avena.</li>
                            </ul>

                            <h2>Nutrición Post-Entrenamiento: La Importancia de una Buena Alimentación Después del Ejercicio</h2>
                            <p>La nutrición post-entrenamiento es crucial para la recuperación muscular, la reposición de energía y la adaptación al ejercicio. Después de entrenar, el cuerpo necesita nutrientes específicos para reparar tejidos y reponer glucógeno.</p>

                            <p><strong>1. Objetivos de la Nutrición Post-Entrenamiento</strong></p>
                            <ul>
                                <li><strong>Reparar músculos:</strong> Las proteínas ayudan a reconstruir las fibras musculares dañadas.</li>
                                <li><strong>Reponer glucógeno:</strong> Los carbohidratos restauran las reservas de energía agotadas durante el ejercicio.</li>
                                <li><strong>Rehidratar:</strong> Reponer los líquidos y electrolitos perdidos a través del sudor.</li>
                            </ul>

                            <p><strong>2. ¿Qué Comer Después del Entrenamiento?</strong></p>
                            <ul>
                                <li><strong>Proteínas:</strong> Esenciales para la síntesis de proteínas musculares.
                                    <ul>
                                        <li>Ejemplos: Huevos, pollo, pescado, tofu, proteína en polvo, lácteos.</li>
                                    </ul>
                                </li>
                                <li><strong>Carbohidratos:</strong> Ayudan a reponer las reservas de glucógeno.
                                    <ul>
                                        <li>Ejemplos: Arroz, pasta integral, patata, frutas, quinoa.</li>
                                    </ul>
                                </li>
                                <li><strong>Grasas Saludables:</strong> En menor cantidad, ya que pueden retardar la digestión.
                                    <ul>
                                        <li>Ejemplos: Aguacate, aceite de oliva, nueces.</li>
                                    </ul>
                                </li>
                                <li><strong>Hidratación:</strong> Agua o bebidas con electrolitos para rehidratar.</li>
                            </ul>

                            <p><strong>3. Timing (Cuándo Comer)</strong></p>
                            <ul>
                                <li><strong>30-60 minutos después:</strong> Es el momento ideal para consumir una comida o snack post-entrenamiento, ya que el cuerpo está más receptivo a absorber nutrientes.
                                    <ul>
                                        <li>Ejemplo: Batido de proteínas con frutas y avena.</li>
                                    </ul>
                                </li>
                                <li><strong>2 horas después:</strong> Una comida completa que incluya proteínas, carbohidratos y verduras.
                                    <ul>
                                        <li>Ejemplo: Salmón con quinoa y brócoli.</li>
                                    </ul>
                                </li>
                            </ul>

                            <p><strong>4. Ejemplos de Snacks Post-Entrenamiento</strong></p>
                            <ul>
                                <li>Batido de proteínas con leche y plátano.</li>
                                <li>Yogur griego con granola y frutas.</li>
                                <li>Sándwich de pavo en pan integral.</li>
                                <li>Huevos revueltos con tostadas integrales.</li>
                            </ul>

                            <h2>Hidratación: La Importancia de Mantenerse Hidratado</h2>
                            <p>La hidratación es un pilar fundamental para el rendimiento deportivo y la salud en general. Durante el ejercicio, el cuerpo pierde líquidos y electrolitos a través del sudor, lo que puede afectar el rendimiento y la recuperación.</p>

                            <p><strong>1. Importancia de la Hidratación</strong></p>
                            <ul>
                                <li><strong>Regula la temperatura corporal:</strong> El sudor ayuda a enfriar el cuerpo durante el ejercicio.</li>
                                <li><strong>Mejora el rendimiento:</strong> La deshidratación reduce la fuerza, resistencia y concentración.</li>
                                <li><strong>Facilita la recuperación:</strong> Ayuda a transportar nutrientes a las células musculares.</li>
                            </ul>

                            <p><strong>2. ¿Cuánto Beber?</strong></p>
                            <ul>
                                <li><strong>Antes del ejercicio:</strong> 500 ml de agua 2-3 horas antes y 250 ml 20-30 minutos antes.</li>
                                <li><strong>Durante el ejercicio:</strong> 150-350 ml cada 15-20 minutos, dependiendo de la intensidad y el clima.</li>
                                <li><strong>Después del ejercicio:</strong> Reponer el 150% del peso perdido durante el ejercicio (por ejemplo, si perdiste 1 kg, bebe 1.5 litros de agua).</li>
                            </ul>

                            <p><strong>3. Bebidas Recomendadas</strong></p>
                            <ul>
                                <li><strong>Agua:</strong> Ideal para ejercicios de baja intensidad y corta duración.</li>
                                <li><strong>Bebidas con electrolitos:</strong> Recomendadas para ejercicios de alta intensidad o larga duración (más de 1 hora).
                                    <ul>
                                        <li>Ejemplos: Bebidas deportivas, agua de coco.</li>
                                    </ul>
                                </li>
                                <li><strong>Batidos de recuperación:</strong> Combinan líquidos, carbohidratos y proteínas.</li>
                            </ul>

                            <p><strong>4. Señales de Deshidratación</strong></p>
                            <ul>
                                <li>Sed excesiva.</li>
                                <li>Fatiga o mareos.</li>
                                <li>Orina oscura o escasa.</li>
                                <li>Calambres musculares.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='h1-concept-entrenamiento2'>
                        <div className='overlay-train'></div>
                        <h1 className='h1-entrenamiento' ref={hipertrofiaRef}>Rutina de Hipertrofia</h1>
                        <p className='p-entrenamiento'>Veamos algunas referencias con ejercicios de Hipertrofia
                        </p>

                    </div>
                    <div className="informacion-ul" >
                        <p><strong>El gym nunca pasa de moda</strong> como una de las mejores opciones para mejorar la condición física y la salud. En esta sección de <strong>entrenamiento</strong>, tomaremos como referencia la disciplina de <strong>hipertrofia</strong> para entender cómo estructurar una rutina efectiva.</p>

                        <p>Sabemos que entrenar <strong>6 días a la semana</strong> es lo ideal para maximizar el crecimiento muscular, pero en la vida real, no todos tienen el tiempo o la recuperación suficiente para mantener ese ritmo. <strong>Afortunadamente, con 4 días bien estructurados también se pueden trabajar todos los grupos musculares de manera efectiva.</strong></p>

                        <p>A continuación, veremos un ejemplo de <strong>rutina semanal</strong>, que puede adaptarse a distintas frecuencias de entrenamiento según tu disponibilidad y nivel de experiencia. 💪🔥</p>

                    </div>

                    <div className="informacion-ul">
                        {/* style={{ maxHeight: activeIndex === 4 ? "800px" : "0" }} */}
                        <ul>
                            <h2>Rutina:</h2>
                            <li>💪<strong>Frecuencia:</strong> 6 dias a la semana</li>
                            <li>🔥<strong>Repeticiones:</strong> 8-12 </li>
                            <li>📌<strong>series</strong> 3-4 por ejercicios</li>
                            <li>⏳<strong>Descanso entre series:</strong> 60-90 segundos</li>
                        </ul>
                    </div>

                    <Carousel />
                    {/*  style={{ maxHeight: '1000px' }}*/}

                    <div className="informacion-ul" style={{ maxHeight: '2000px' }} >
                        <p>En la ficha anterior, si nos damos cuenta los diferentes grupos musculares los trabajamos al menos dos veces por semana para lograr un equilibrio óptimo entre recuperación y estímulo muscular. Este enfoque, conocido como frecuencia 2, es ampliamente recomendado, especialmente para personas con niveles intermedios y avanzados de entrenamiento, ya que maximiza el proceso de supercompensación al acercar los estímulos entre sesiones.</p>

                        <p>Algunos optan por entrenar un grupo muscular una vez por semana, concentrando todo el volumen de entrenamiento en una sola sesión. Por ejemplo, si realizas 8 series para el pecho en una semana, podrías distribuirlas en dos sesiones de 4 series cada una o en una única sesión de 8 series. Aunque ambos métodos pueden ser efectivos, la evidencia sugiere que distribuir el volumen en múltiples sesiones semanales puede ser más beneficioso para la hipertrofia muscular.</p>

                        <p>Para estructurar una rutina equilibrada, se recomienda:</p>

                        <ul>
                            <li><strong>Opción 1:</strong> Entrenar el tren superior dos días y el tren inferior otros dos días, sumando un total de cuatro días de entrenamiento a la semana.</li>
                            <li><strong>Opción 2:</strong> Para aquellos con más experiencia o limitaciones de tiempo, entrenar tres días a la semana de la siguiente manera:
                                <ul>
                                    <li><strong>Día 1:</strong> Tren superior</li>
                                    <li><strong>Día 2:</strong> Tren inferior</li>
                                    <li><strong>Día 3:</strong> Cuerpo completo (full-body)</li>
                                </ul>
                            </li>
                        </ul>

                        <p>Este esquema permite una alta frecuencia de estímulo muscular en menos días de entrenamiento, lo que puede ser beneficioso para quienes tienen limitaciones de tiempo.</p>

                        <p>Es fundamental tener objetivos claros y un conocimiento básico de los diferentes ejercicios para cada grupo muscular. Con esta base, es posible estructurar una rutina de ejercicios personalizada y eficiente que se adapte a tus necesidades y metas específicas. Recuerda que la consistencia y la progresión son clave en cualquier programa de entrenamiento.</p>

                    </div>


                </section>

                {/* <aside className='main-menudisciplinas'>
                    <h3>Ejercicios y Rutinas</h3>
                    <nav className='menu-disciplinas'>
                        <ul>
                            {Object.keys(componentMap).map((discipline) => (
                                <li key={discipline} onClick={() => handleItemClick(discipline)}>
                                    <span>{discipline}</span>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                <section className='description-disciplinas'>
                    {selectedDiscipline}
                </section> */}
            </main >
        </>
    );
}

export default Entrenamiento;






