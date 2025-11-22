

import React, { forwardRef, useEffect, useRef, useState } from 'react';

const Traincalistenia = forwardRef((props, ref) => {
    const listRef = useRef(null);
    const refvideo = useRef(null)
    const [activeIndex, setActiveIndex] = useState(null); // Estado para controlar qué acordeón está activo

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));

        // if (refvideo.current) {
        //     refvideo.current.classList.toggle('clasevideo')
        //     console.log('', refvideo.current)

        // }

    };

    return (
        <div className='main-calisteniatrain' ref={ref}>
            <h2>Rutinas Principiantes</h2>
            <article>
                <p>
                    Para aquellas personas que desean iniciarse en el mundo de la calistenia, aquí les enseñamos unas rutinas desde el nivel principiante hasta rutinas
                    de nivel avanzado, todo depende de tus objetivos y enfoque de a donde quieres llegar en esta disciplina
                </p>
            </article>

            <ul ref={listRef}>
                <strong>Lunes - Tren Superior</strong>
                {/* fa-minus fa-plus */}

                <li onClick={() => toggleAccordion(0)}>
                    <strong>Flexiones</strong>
                    {activeIndex === 0 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}

                </li>
                <div className='videos' style={{ maxHeight: activeIndex === 0 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />3 series de 8-10 repeticiones
                </div>


                <li onClick={() => toggleAccordion(1)}>
                    <strong>Dominadas asistidas</strong>
                    {activeIndex === 1 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}

                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 1 ? '500px' : '0' }}>
                    <img src="/img-calistenia/muscleup.webp" alt="" />3 series de 5-8 repeticiones
                </div>


                <li onClick={() => toggleAccordion(2)}>
                    <strong>Fondos en paralelas asistidos</strong>
                    {activeIndex === 2 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}

                </li>
                <div className='videos' style={{ maxHeight: activeIndex === 2 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />3 series de 8-10 repeticiones
                </div>


                <li onClick={() => toggleAccordion(3)}>
                    <strong>Plancha alta (Plank)</strong>
                    {activeIndex === 3 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}

                </li>
                <div className='videos' style={{ maxHeight: activeIndex === 3 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />3 series de 20-30 repeticiones
                </div>


                {/* miercoles+++++++++++++++++++++++++++++++++++++ */}

                <strong>Miercoles - Tren Inferior</strong>

                <li onClick={() => toggleAccordion(4)}>
                    <strong>Sentadillas:</strong>
                    {activeIndex === 4 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}

                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 4 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />3 series de 12-15 repeticiones
                </div>

                <li onClick={() => toggleAccordion(5)}>
                    <strong>Zancadas:</strong>
                    {activeIndex === 5 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}

                </li>
                <div className='videos' style={{ maxHeight: activeIndex === 5 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />3 series de 3-8 repeticiones por cada pierna
                </div>


                <li onClick={() => toggleAccordion(6)}>
                    <strong>Puente de glúteos:</strong>
                    {activeIndex === 6 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}

                </li>
                <div className='videos' style={{ maxHeight: activeIndex === 6 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />3 series de 10-12 repeticiones
                </div>


                <li onClick={() => toggleAccordion(7)}>
                    <strong>Abdominales bicicletas:</strong>
                    {activeIndex === 7 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}

                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 7 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />3 series de 15-20 repeticiones
                </div>



                {/* viernes********************NIVEL PRINCIPIANTE************************************** */}



                <strong>Viernes - Cuerpo completo y core</strong>

                <li onClick={() => toggleAccordion(8)}><strong>Mountain Climbers:</strong>
                    {activeIndex === 8 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}

                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 8 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />3 series de 15-20 repeticiones por pierna
                </div>

                <li onClick={() => toggleAccordion(9)}><strong>Burpees (modificados si es necesario):</strong>
                    {activeIndex === 9 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}

                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 9 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />3 series de 8-10 repeticiones
                </div>

                <li onClick={() => toggleAccordion(10)}><strong>Planchas laterales:</strong>
                    {activeIndex === 9 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}

                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 10 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />3 series de 20 segundos por lado
                </div>

                <li onClick={() => toggleAccordion(11)}><strong>Superman:</strong>
                    {activeIndex === 11 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}

                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 11 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />3 series de 10 repeticiones
                </div>






                {/* ************* 
                


                Repite el mismo patrón para las rutinas intermedias y avanzadas*********************** */}
                <h2>Rutinas nivel Intermedio</h2>


                <h3>Lunes - Cuerpo Superior</h3>

                <li onClick={() => toggleAccordion(12)}><strong>Flexiones en declive:</strong>
                    {activeIndex === 12 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}


                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 12 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" /> 4 series de 12-15 repeticiones
                </div>

                <li onClick={() => toggleAccordion(13)}><strong>Dominadas:</strong>
                    {activeIndex === 13 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 13 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />4 series de 8-10 repeticiones
                </div>


                <li onClick={() => toggleAccordion(14)}><strong>Fondos en paralelas:</strong>
                    {activeIndex === 14 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 14 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />4 series de 10-12 repeticiones
                </div>


                <li onClick={() => toggleAccordion(15)}><strong>Plancha alta (Plank):</strong>
                    {activeIndex === 15 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 15 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />4 series de 45-60 segundos
                </div>




                <h3>Martes - Cuerpo Inferior</h3>

                <li onClick={() => toggleAccordion(16)}><strong>Sentadillas a una pierna (Pistol Squat) asistidas:</strong>
                    {activeIndex === 16 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>


                <div className='videos' style={{ maxHeight: activeIndex === 16 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />4 series de 6-8 repeticiones por pierna
                </div>

                <li onClick={() => toggleAccordion(17)}><strong>Saltos de caja (Box Jumps):</strong>
                    {activeIndex === 17 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 17 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />4 series de 8-10 repeticiones
                </div>


                <li onClick={() => toggleAccordion(18)}><strong>Zancadas caminando:</strong>
                    {activeIndex === 18 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 18 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" /> 4 series de 12-15 repeticiones por pierna
                </div>


                <li onClick={() => toggleAccordion(19)}><strong>Abdominales V-up:</strong>
                    {activeIndex === 19 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 19 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />4 series de 15-20 repeticiones
                </div>




                <h3>Jueves - Cuerpo Superior</h3>

                <li onClick={() => toggleAccordion(20)}><strong>Flexiones a una mano asistidas:</strong>
                    {activeIndex === 20 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 20 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />4 series de 6-8 repeticiones por brazo
                </div>


                <li onClick={() => toggleAccordion(21)}><strong>Dominadas con agarre amplio:</strong>
                    {activeIndex === 21 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 21 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />4 series de 8-10 repeticiones
                </div>


                <li onClick={() => toggleAccordion(22)}><strong>Fondos en anillas:</strong>
                    {activeIndex === 22 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 22 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />4 series de 8-10 repeticiones
                </div>


                <li onClick={() => toggleAccordion(23)}><strong>Plancha con elevación de pierna:</strong>
                    {activeIndex === 23 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 23 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />4 series de 30-45 segundos por pierna
                </div>




                <h3>Viernes - Cuerpo Inferior y Core</h3>

                <li onClick={() => toggleAccordion(24)}><strong>Sentadillas explosivas:</strong>
                    {activeIndex === 24 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 24 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />4 series de 10-12 repeticiones
                </div>


                <li onClick={() => toggleAccordion(25)}><strong>Zancadas búlgaras:</strong>
                    {activeIndex === 25 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 25 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" /> 4 series de 8-10 repeticiones por pierna
                </div>


                <li onClick={() => toggleAccordion(26)}><strong>Elevaciones de piernas colgado:</strong>
                    {activeIndex === 26 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 26 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />4 series de 10-12 repeticiones
                </div>


                <li onClick={() => toggleAccordion(27)}><strong>Planchas laterales con elevación de cadera:</strong>
                    {activeIndex === 27 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 27 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />4 series de 20-30 segundos por lado
                </div>

                {/* NIVEL AVANZADO ************************************************************* */}

                <h2>Rutina de Calistenia para Nivel Avanzado</h2>
                <strong>Objetivo:</strong> Desarrollar fuerza máxima y habilidades avanzadas en calistenia.

                <h3>Lunes - Cuerpo Superior</h3>

                <li onClick={() => toggleAccordion(45)}><strong>Flexiones a una mano:</strong>
                    {activeIndex === 45 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 45 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />5 series de 6-8 repeticiones por brazo
                </div>


                <li onClick={() => toggleAccordion(28)}><strong>Dominadas con peso adicional:</strong>
                    {activeIndex === 28 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 28 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" /> 5 series de 6-8 repeticiones
                </div>


                <li onClick={() => toggleAccordion(29)}><strong>Fondos en anillas con peso:</strong>
                    {activeIndex === 29 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 29 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />5 series de 8-10 repeticiones
                </div>


                <li onClick={() => toggleAccordion(30)}><strong>Plancha completa (Plank):</strong>
                    {activeIndex === 30 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 30 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />5 series de 60-90 segundos
                </div>




                <h3>Martes - Cuerpo Inferior</h3>



                <li onClick={() => toggleAccordion(31)}><strong>Sentadillas a una pierna (Pistol Squat):</strong>
                    {activeIndex === 31 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 31 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />5 series de 8-10 repeticiones por pierna
                </div>


                <li onClick={() => toggleAccordion(32)}><strong>Saltos pliométricos:</strong>
                    {activeIndex === 32 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 32 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />5 series de 10-12 repeticiones
                </div>


                <li onClick={() => toggleAccordion(33)}><strong>Zancadas explosivas:</strong>
                    {activeIndex === 33 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 33 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />5 series de 10 repeticiones por pierna
                </div>


                <li onClick={() => toggleAccordion(34)}><strong>Abdominales en L-sit:</strong>
                    {activeIndex === 34 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 34 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />5 series de 15-20 repeticiones
                </div>




                <h3>Jueves - Cuerpo Superior y Habilidades</h3>

                <li onClick={() => toggleAccordion(35)}><strong>Muscle-ups:</strong>
                    {activeIndex === 35 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 35 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />5 series de 4-6 repeticiones
                </div>


                <li onClick={() => toggleAccordion(36)}><strong>Flexiones en pino (Handstand Push-ups):</strong>
                    {activeIndex === 36 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 36 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />5 series de 6-8 repeticiones
                </div>


                <li onClick={() => toggleAccordion(37)}><strong>Planche lean:</strong>
                    {activeIndex === 37 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 37 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />5 series de 10-15 segundos
                </div>


                <li onClick={() => toggleAccordion(38)}><strong>L-sit en paralelas:</strong>
                    {activeIndex === 38 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 38 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" /> 5 series de 20-30 segundos
                </div>




                <h3>Viernes - Cuerpo Inferior y Core</h3>

                <li onClick={() => toggleAccordion(39)}><strong>Saltos a una pierna (One-Leg Box Jumps):</strong>
                    {activeIndex === 39 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 39 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" /> 5 series de 8 repeticiones por pierna
                </div>


                <li onClick={() => toggleAccordion(40)}><strong>Sentadillas a pistola con salto:</strong>
                    {activeIndex === 40 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 40 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />5 series de 6-8 repeticiones por pierna
                </div>


                <li onClick={() => toggleAccordion(41)}><strong>Elevaciones de piernas a barra:</strong>
                    {activeIndex === 41 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 41 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />5 series de 10-12 repeticiones
                </div>


                <li onClick={() => toggleAccordion(42)}><strong>Planchas laterales con peso:</strong>
                    {activeIndex === 42 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                </li>

                <div className='videos' style={{ maxHeight: activeIndex === 42 ? '500px' : '0' }}>
                    <img src="/img-calistenia/flexiones.webp" alt="" />5 series de 30-45 segundos por lado
                </div>






            </ul>
        </div>
    );
});

export default Traincalistenia;