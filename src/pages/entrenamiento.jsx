


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
                <title>Entrenamiento y Rutinas | Pretoriann</title>
                <meta
                    name="description"
                    content="Encuentra rutinas de entrenamiento personalizadas, planes para ganar masa muscular o perder grasa, y consejos nutricionales clave para optimizar tus resultados."
                />
                <meta
                    name="keywords"
                    content="rutinas de entrenamiento, planes fitness, ejercicios en casa, musculación, fuerza, definición, volumen, entrenamiento funcional, nutrición deportiva"
                />
                <meta name="author" content="Pretoriann" />

                {/* 🔹 Open Graph (redes sociales) */}
                <meta property="og:title" content="Rutinas y Planes de Entrenamiento | Pretoriann" />
                <meta
                    property="og:description"
                    content="Descubre rutinas de fuerza, resistencia y definición adaptadas a tu nivel en Pretoriann. Incluye guías nutricionales para acompañar tu entrenamiento."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.pretoriann.com/entrenamiento" />
                <meta
                    property="og:image"
                    content="https://www.pretoriann.com/img-banner-principal/entrenamiento-banner.webp"
                />
                <meta property="og:locale" content="es_ES" />

                {/* 🔹 SEO técnico */}
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.pretoriann.com/entrenamiento" />
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

                            <li>
                                <i className="fa-solid fa-dumbbell icon-li"></i>
                                <strong> Entrenamiento de Fuerza:</strong>
                                Aumenta músculo, mejora la postura y fortalece el cuerpo.
                                <br />
                                <em>Disciplinas: pesas, calistenia, máquinas guiadas, crossfit.</em>
                            </li>

                            <li>
                                <i className="fa-solid fa-person-running icon-li"></i>
                                <strong> Entrenamiento Cardiovascular:</strong>
                                Mejora la salud del corazón y quema calorías.
                                <br />
                                <em>Disciplinas: correr, natación, ciclismo, spinning.</em>
                            </li>

                            <li>
                                <i className="fa-solid fa-child-reaching icon-li"></i>
                                <strong> Flexibilidad y Movilidad:</strong>
                                Aumenta el rango de movimiento y previene lesiones.
                                <br />
                                <em>Disciplinas: yoga, pilates, movilidad articular.</em>
                            </li>

                            <li>
                                <i className="fa-solid fa-balance-scale icon-li"></i>
                                <strong> Equilibrio y Estabilidad:</strong>
                                Fortalece el core y mejora el control corporal.
                                <br />
                                <em>Disciplinas: pilates, bosu, core.</em>
                            </li>

                            <li>
                                <i className="fa-solid fa-bolt icon-li"></i>
                                <strong> Velocidad y Agilidad:</strong>
                                Mejora la reacción y la coordinación.
                                <br />
                                <em>Disciplinas: HIIT, funcional, deportes de equipo.</em>
                            </li>

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
                        <ul>

                            <li>
                                <i className="fa-solid fa-bullseye icon-li"></i>
                                <strong> Objetivo claro:</strong>
                                Define qué quieres lograr: ganar músculo, perder grasa, mejorar resistencia o moverte mejor.
                            </li>

                            <li>
                                <i className="fa-solid fa-dumbbell icon-li"></i>
                                <strong> Selección de ejercicios:</strong>
                                Escoge movimientos que trabajen los grupos musculares principales. Evita repetir ejercicios que hacen lo mismo.
                            </li>

                            <li>
                                <i className="fa-solid fa-rotate-right icon-li"></i>
                                <strong> Series, repeticiones y descanso:</strong>
                                Ajusta según tu objetivo:
                                <br />– Fuerza → menos repeticiones, más peso.
                                <br />– Hipertrofia → 8–12 repeticiones.
                                <br />– Resistencia → más repeticiones, menos descanso.
                            </li>

                            <li>
                                <i className="fa-solid fa-chart-line icon-li"></i>
                                <strong> Progresión semanal:</strong>
                                Añade poco a poco peso, repeticiones o tiempo para seguir mejorando.
                            </li>

                            <li>
                                <i className="fa-solid fa-arrows-rotate icon-li"></i>
                                <strong> Variedad controlada:</strong>
                                Cambia ejercicios cada 4–6 semanas para evitar estancarte, sin perder el enfoque.
                            </li>

                            <li>
                                <i className="fa-solid fa-calendar-days icon-li"></i>
                                <strong> Frecuencia:</strong>
                                Entrena cada grupo muscular 2 veces por semana para mejores resultados.
                            </li>

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

                            <li>
                                <i className="fa-solid fa-fire icon-li"></i>
                                <strong> Calentamiento:</strong>
                                Prepara el cuerpo para el esfuerzo, activa músculos y articulaciones, y reduce el riesgo de lesiones.
                                <br />
                                <em>Duración recomendada: 10–15 minutos.</em>
                            </li>

                            <li>
                                <i className="fa-solid fa-dumbbell icon-li"></i>
                                <strong> Entrenamiento principal:</strong>
                                Es la parte fuerte de la sesión. Aquí realizas el trabajo de fuerza, resistencia, movilidad o la disciplina del día.
                                <br />
                                <em>Adaptado a tu objetivo: fuerza, hipertrofia, cardio, funcional, etc.</em>
                            </li>

                            <li>
                                <i className="fa-solid fa-snowflake icon-li"></i>
                                <strong> Enfriamiento y estiramientos:</strong>
                                Reduce la tensión muscular, baja progresivamente tus pulsaciones y mejora la movilidad.
                                <br />
                                <em>Duración recomendada: 10–15 minutos.</em>
                            </li>

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

                    <div className="informacion-ul"
                        style={{ maxHeight: activeIndex === 4 ? "1200px" : "0" }}>
                        <ul>

                            <li>
                                <i className="fa-solid fa-calendar-check icon-li"></i>
                                <strong> Frecuencia:</strong>
                                Cuántos días entrenas por semana.
                                <br />
                                – Principiantes: 3–4 días.
                                – Intermedios: 4–5 días.
                                – Avanzados: 5–6 días (si la recuperación es buena).
                                <br />
                                <em>Más días no significa mejores resultados. Lo importante es dar descanso suficiente a cada grupo muscular.</em>
                            </li>

                            <li>
                                <i className="fa-solid fa-hourglass-half icon-li"></i>
                                <strong> Duración:</strong>
                                La cantidad de tiempo de tu sesión.
                                <br />
                                – Cardio: 20–45 minutos.
                                – Fuerza: 45–90 minutos.
                                – Movilidad/Yoga: 30–60 minutos.
                                <br />
                                <em>La calidad importa más que la cantidad.</em>
                            </li>

                            <li>
                                <i className="fa-solid fa-chart-bar icon-li"></i>
                                <strong> Volumen e intensidad:</strong>
                                Cantidad de trabajo y esfuerzo aplicado.
                                <br />
                                – Fuerza: pocas repeticiones, más peso.
                                – Hipertrofia: 8–12 repeticiones.
                                – Resistencia: más repeticiones, menos descanso.
                                <br />
                                <em>Progresión constante = mejores resultados.</em>
                            </li>

                            <li>
                                <i className="fa-solid fa-bed icon-li"></i>
                                <strong> Descanso y recuperación:</strong>
                                Tus músculos se reparan fuera del gimnasio.
                                <br />
                                – 1–2 días de descanso total por semana.
                                – Dormir 7–9 horas.
                                – Buena hidratación y alimentación.
                                <br />
                                <em>Sin descanso, no hay progreso.</em>
                            </li>

                        </ul>
                    </div>



                    <div className='lista-acordeon' onClick={() => toggleAccordion(5)} >
                        <h2 className='h2-entrenamiento'>Nutricion para el Entrenamiento:</h2>
                        {activeIndex === 5 ? (
                            <i className="fa-solid fa-angle-up acordeon-icon"></i>
                        ) : (
                            <i className="fa-solid fa-angle-down acordeon-icon"></i>
                        )}


                    </div>

                    <div className="informacion-ul"
                        style={{ maxHeight: activeIndex === 5 ? "1000px" : "0" }}>
                        <ul>

                            <li>
                                <i className="fa-solid fa-bolt icon-li"></i>
                                <strong> Antes de entrenar:</strong>
                                Come algo ligero que te dé energía sin pesadez.
                                <br />
                                <em>Opciones:</em> plátano, avena, tostada integral, café, yogur con fruta.
                                <br />
                                <em>Cuándo:</em> 60–90 minutos antes del entrenamiento.
                            </li>

                            <li>
                                <i className="fa-solid fa-water icon-li"></i>
                                <strong> Durante el entrenamiento:</strong>
                                Mantén una buena hidratación para rendir mejor.
                                <br />
                                <em>Opciones:</em> agua, bebida con electrolitos si entrenas más de 1 hora.
                            </li>

                            <li>
                                <i className="fa-solid fa-apple-whole icon-li"></i>
                                <strong> Después de entrenar:</strong>
                                Tu cuerpo necesita recuperar y reparar los músculos.
                                <br />
                                <em>Opciones:</em> batido de proteína, yogur, huevo con tostada, fruta, arroz o patata.
                                <br />
                                <em>Cuándo:</em> dentro de los 30–60 minutos post-entrenamiento.
                            </li>

                        </ul>
                    </div>


                    <div className='h1-concept-entrenamiento2'>
                        <div className='overlay-train'></div>
                        <h1 className='h1-entrenamiento' ref={hipertrofiaRef}>Rutina de Hipertrofia</h1>
                        <p className='p-entrenamiento'>
                            Aquí tienes un ejemplo práctico de cómo estructurar una rutina orientada a ganar músculo.
                        </p>
                    </div>

                    <div className="informacion-ul">
                        <p>
                            La hipertrofia se basa en entrenar cada grupo muscular con el estímulo adecuado y la frecuencia correcta.
                            No es necesario entrenar 6 días para ver resultados: con 4 días bien organizados puedes trabajar todo el cuerpo de forma efectiva.
                        </p>

                        <p>
                            A continuación verás un ejemplo de rutina semanal que puedes adaptar según tu tiempo, nivel y experiencia.
                        </p>
                    </div>

                    <div className="informacion-ul">
                        <ul>
                            <h2>Parámetros de la rutina:</h2>
                            <li>💪 <strong>Frecuencia recomendada:</strong> 4–6 días dependiendo de tu nivel.</li>
                            <li>🔥 <strong>Repeticiones:</strong> 8–12 por ejercicio.</li>
                            <li>📌 <strong>Series:</strong> 3–4 por ejercicio.</li>
                            <li>⏳ <strong>Descanso:</strong> 60–90 segundos entre series.</li>
                        </ul>
                    </div>

                    <Carousel />

                    <div className="informacion-ul">
                        <p>
                            Como ves en la rutina, cada grupo muscular se trabaja al menos dos veces por semana.
                            Esto ayuda a mejorar la recuperación, el crecimiento y el rendimiento general.
                        </p>

                        <p>
                            Si buscas una opción más simple, puedes usar este esquema:
                        </p>

                        <ul>
                            <li><strong>Opción 1 (4 días):</strong> Dos días tren superior + dos días tren inferior.</li>
                            <li><strong>Opción 2 (3 días):</strong> Superior – Inferior – Full body.</li>
                        </ul>

                        <p>
                            Ajusta los ejercicios y el volumen según tu nivel.
                            Recuerda que la clave está en la consistencia y en progresar poco a poco.
                        </p>
                    </div>


                </section>


            </main >
        </>
    );
}

export default Entrenamiento;






