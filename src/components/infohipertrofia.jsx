
import React, { forwardRef, useState } from 'react';
import AccordeonVideoInfo from './accordeon-video-info';
import Carousel from '../components/carousel-hipertrofia';
import BannerSmall from './banner-disciplinas.jsx';

const Infohipertrofia = forwardRef((props, ref) => {
    const [activeIndex, setActiveIndex] = useState(null);
    function toggleAccordion(index) {
        // setbolean(!bolean);
        // setActiveIndex(bolean);
        // setkey(index)
        // console.log("esta es la key",key)
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    }
    return (
        <>
            {/* principal-entrenamiento */}
            <main className='main-calistenia' ref={ref}>
                <section >
                    {/* <div className='h1-concept-entrenamiento'>
                        <div className='overlay-train'></div>
                        <h1 className='h1-entrenamiento'>Culturismo</h1>
                        <p className='p-entrenamiento'>Aprende como hacer un entrenamiento creando tus propias rutinas.
                        </p>

                    </div> */}
                    <BannerSmall
                        src={'/img-icon/icon-hipertrofia.webp'}
                        alt={'culturismo'}
                        h1={'Culturismo'}
                        h2={'¿Qué es el Culturismo?'}
                        p={
                            'El culturismo es una disciplina enfocada en el desarrollo muscular mediante entrenamientos de resistencia progresiva y controlado, combinando ejercicios de fuerza con una alimentación estructurada, con el objetivo de esculpir el cuerpo, aumentar la masa muscular y reducir el porcentaje de grasa corporal.'
                        }
                    />

                    <div className='lista-acordeon' onClick={() => toggleAccordion(1)} >
                        <h2 className='h2-entrenamiento'>Hipertrofia Muscular </h2>
                        {activeIndex === 1 ? (
                            <i className="fa-solid fa-angle-up acordeon-icon"></i>
                        ) : (
                            <i className="fa-solid fa-angle-down acordeon-icon"></i>
                        )}
                    </div>



                    <div className="informacion-ul"
                        style={{ maxHeight: activeIndex === 1 ? "800px" : "0" }}>
                        <p>
                            La hipertrofia muscular es el proceso mediante el cual nuestros músculos aumentan de tamaño en respuesta a estímulos como el entrenamiento de fuerza. Cuando realizamos ejercicios intensos, especialmente aquellos que implican levantar pesas o resistencia, sometemos a nuestras fibras musculares a un esfuerzo significativo. Este esfuerzo provoca pequeñas rupturas o microlesiones en las fibras musculares. Aunque pueda sonar alarmante, este daño es esencial para el crecimiento muscular.
                        </p>

                        <p>
                            Tras el entrenamiento, el cuerpo activa mecanismos de reparación para sanar estas microlesiones. Durante este proceso, las fibras musculares se reconstruyen y se fortalecen, preparándose para futuros esfuerzos similares. Además de reparar el daño, el cuerpo incrementa la síntesis de proteínas dentro de las células musculares, lo que contribuye al aumento del tamaño y la fuerza del músculo.
                        </p>

                        <p>
                            Otro factor clave en la hipertrofia es la tensión mecánica. Al levantar cargas pesadas, las fibras musculares experimentan una tensión que desencadena señales internas, estimulando la producción de nuevas proteínas contráctiles como la actina y la miosina. Este proceso refuerza la estructura del músculo, permitiéndole manejar cargas mayores en el futuro.
                        </p>

                        <p>
                            El estrés metabólico también juega un papel importante. Durante ejercicios anaeróbicos, como series intensas de levantamiento de pesas, se acumulan metabolitos como el lactato en los músculos. Esta acumulación crea un ambiente que promueve respuestas hormonales y celulares, contribuyendo al crecimiento muscular.

                        </p>


                        <p>
                            Es fundamental entender que la hipertrofia no ocurre durante el entrenamiento en sí, sino en los periodos de descanso posteriores. Por ello, es esencial combinar sesiones de ejercicio con una nutrición adecuada y suficiente tiempo de recuperación. Este enfoque equilibrado garantiza que los músculos se reparen, crezcan y se fortalezcan de manera efectiva.
                        </p>

                        <p>
                            En resumen, la hipertrofia muscular es el resultado de un ciclo de esfuerzo y recuperación. A través de entrenamientos bien estructurados y descansos adecuados, podemos estimular este proceso natural, logrando músculos más grandes y fuertes.
                        </p>

                    </div>

                    <div className='lista-acordeon' onClick={() => toggleAccordion(2)} >
                        <h2 className='h2-entrenamiento'>Acciones musculares </h2>
                        {activeIndex === 2 ? (
                            <i className="fa-solid fa-angle-up acordeon-icon"></i>
                        ) : (
                            <i className="fa-solid fa-angle-down acordeon-icon"></i>
                        )}
                    </div>
                    <div className="informacion-ul"
                        style={{ maxHeight: activeIndex === 2 ? "800px" : "0" }}>
                        <p>las acciones musculares se refieren a los diferentes tipos de movimientos o funciones que los músculos realizan durante el ejercicio. Estas acciones son fundamentales para entender cómo los músculos trabajan durante el entrenamiento de fuerza, resistencia o flexibilidad.</p>

                        <h2>Contracción Concéntrica</h2>
                        <p><strong>Definición:</strong> Es la acción muscular en la que el músculo se acorta mientras genera fuerza. Ocurre cuando el músculo vence una resistencia.                    <strong>Ejemplo:</strong> Durante un curl de bíceps, cuando levantas la mancuerna hacia el hombro, el bíceps se contrae concéntricamente.</p>

                        <h2>Contracción Excéntrica</h2>
                        <strong>Definición:</strong> Es la acción muscular en la que el músculo se alarga mientras genera fuerza. Ocurre cuando el músculo controla un movimiento en contra de la gravedad o una resistencia.

                        <strong>Ejemplo:</strong> En el mismo curl de bíceps, cuando bajas la mancuerna de manera controlada, el bíceps se contrae excéntricamente.

                        <h2>Contracción Isométrica</h2>
                        <strong>Definición:</strong>  Es la acción muscular en la que el músculo genera fuerza sin cambiar su longitud. No hay movimiento articular, pero el músculo está activo.

                        <strong>Ejemplo:</strong> Mantener una plancha (plank) o sostener una pesa en una posición fija.

                    </div>

                    <div className="informacion-ul">
                        <h2 style={{ marginTop: '1.5rem' }}>Ejercicios en el Culturismo</h2>
                        <p>
                            A continuación, presentaremos una selección de ejercicios clave organizados según los principales grupos musculares. Esta clasificación te permitirá diseñar rutinas de entrenamiento más específicas y equilibradas, enfocándote en áreas particulares del cuerpo para alcanzar tus objetivos de forma eficiente.
                        </p>
                    </div>

                    <Carousel />

                </section>
            </main>

        </>
    );
});

export default Infohipertrofia;



