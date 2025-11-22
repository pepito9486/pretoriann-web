import React, { useRef, useState, forwardRef } from 'react';
import Accordeon from '../components/accordeon';

const Traincrossfit = forwardRef((props, ref) => {
    // const [activeIndex, setActiveIndex] = useState(null)

    return (
        <>
            <div className='main-calisteniatrain' ref={ref}>
                <h2>Rutinas Generales</h2>
                <article>
                    <p>
                        En esta seccion solo mostraremos el tipo de ejercicio y un video para que se vea la forma
                        correcta de hacerlo
                    </p>
                </article>

                <ul >
                    <strong>Rutina 1: Full Body (Fuerza y Cardio)</strong>
                    <Accordeon exercise={'Thrusters'} rutine={'4 series de 12 repeticiones'} ref={ref} image={'/img-calistenia/flexiones.webp'} />
                    <Accordeon exercise={'Push Press'} rutine={'4 series de 10 repeticiones'} ref={ref} image={'/img-calistenia/flexiones.webp'} />
                    <Accordeon exercise={'Burpees'} rutine={'3 series de 15 repeticiones'} ref={ref} image={'/img-calistenia/flexiones.webp'} />
                    <Accordeon exercise={'Deadlifts'} rutine={'4 series de 8 repeticiones'} ref={ref} image={'/img-calistenia/flexiones.webp'} />
                    <Accordeon exercise={'Battle Ropes'} rutine={'3 series de 30 repeticiones'} ref={ref} image={'/img-calistenia/flexiones.webp'} />

                    <strong>Rutina 2: Piernas y Core </strong>
                    <Accordeon exercise={'Front Squats'} rutine={'4 series de 10 repeticiones'} ref={ref} image={'/img-calistenia/flexiones.webp'} />
                    <Accordeon exercise={'Box Jumps'} rutine={'3 series de 12 repeticiones'} ref={ref} image={'/img-calistenia/flexiones.webp'} />
                    <Accordeon exercise={'Wall Balls'} rutine={'4 series de 15 repeticiones'} ref={ref} image={'/img-calistenia/flexiones.webp'} />
                    <Accordeon exercise={'Kettlebell Swings'} rutine={'3 series de 20 repeticiones'} ref={ref} image={'/img-calistenia/flexiones.webp'} />
                    <Accordeon exercise={'Toes-to-Bar'} rutine={'3 series de 12 repeticiones'} ref={ref} image={'/img-calistenia/flexiones.webp'} />

                    <strong>Rutina 3: Potencia y Técnica </strong>
                    <Accordeon exercise={'Snatch'} rutine={'5 series de 5 repeticiones'} ref={ref} image={'/img-calistenia/flexiones.webp'} />
                    <Accordeon exercise={'Clean and Jerk'} rutine={'5 series de 3 repeticiones'} ref={ref} image={'/img-calistenia/flexiones.webp'} />
                    <Accordeon exercise={'Double Unders'} rutine={'3 series de 50 saltos'} ref={ref} image={'/img-calistenia/flexiones.webp'} />
                    <Accordeon exercise={'Handstand Push-Ups'} rutine={'4 series de 10 repeticiones'} ref={ref} image={'/img-calistenia/flexiones.webp'} />

                    <strong>Rutina 4: Cardio HIIT </strong>
                    <Accordeon exercise={'Burpees'} rutine={'3 series de 15 repeticiones'} ref={ref} image={'/img-calistenia/flexiones.webp'} />
                    <Accordeon exercise={'Battle Ropes'} rutine={'3 series de 40 segundos de trabajo'} ref={ref} image={'/img-calistenia/flexiones.webp'} />
                    <Accordeon exercise={'Kettlebell Swings'} rutine={'4 series de 20 repeticiones'} ref={ref} image={'/img-calistenia/flexiones.webp'} />
                    <Accordeon exercise={'Double Unders'} rutine={'3 series de 40 saltos'} ref={ref} image={'/img-calistenia/flexiones.webp'} />
                    <Accordeon exercise={'Wall Balls'} rutine={'4 series de 20 lanzamientos'} ref={ref} image={'/img-calistenia/flexiones.webp'} />

                    <strong>Rutina 5: Tren Superior </strong>
                    <Accordeon exercise={'Shoulder Press'} rutine={'4 series de 10 repeticiones'} ref={ref} image={'/img-calistenia/flexiones.webp'} />
                    <Accordeon exercise={'Push Press'} rutine={'4 series de 12 repeticiones'} ref={ref} image={'/img-calistenia/flexiones.webp'} />
                    <Accordeon exercise={'Handstand Push-Ups'} rutine={'3 series de 10 repeticiones'} ref={ref} image={'/img-calistenia/flexiones.webp'} />
                    <Accordeon exercise={'Muscle-Up'} rutine={'4 series de 5 repeticiones'} ref={ref} image={'/img-calistenia/flexiones.webp'} />







                </ul>
            </div>



        </>
    );
})

export default Traincrossfit;