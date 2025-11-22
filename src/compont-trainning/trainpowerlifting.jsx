import React, { forwardRef } from 'react';
import Accordeon from '../components/accordeon';

const Trainpowerlifting = forwardRef((props, ref) => {
    return (
        <>
            <div className='main-calisteniatrain' ref={ref}>
                <header><h1>Rutinas Generales de Powerlifting</h1></header>

                <article>
                    <p>
                        En esta sección mostraremos una rutina semanal para Powerlifting, enfocada en los tres grandes levantamientos:
                        sentadillas, press de banca y peso muerto.
                    </p>
                </article>

                <ul>
                    <h2>Rutina 1: Sentadilla (Día de Piernas)</h2>
                    <Accordeon exercise={'Back Squat (Sentadilla Trasera)'} rutine={'5 series de 5 repeticiones'} ref={ref} image={'/img-powerlifting/back-squat.webp'} />
                    <Accordeon exercise={'Front Squat (Sentadilla Frontal)'} rutine={'4 series de 6 repeticiones'} ref={ref} image={'/img-powerlifting/front-squat.webp'} />
                    <Accordeon exercise={'Lunges (Zancadas)'} rutine={'3 series de 12 repeticiones por pierna'} ref={ref} image={'/img-powerlifting/lunges.webp'} />
                    <Accordeon exercise={'Leg Press'} rutine={'4 series de 10 repeticiones'} ref={ref} image={'/img-powerlifting/leg-press.webp'} />
                    <Accordeon exercise={'Calf Raises'} rutine={'4 series de 15 repeticiones'} ref={ref} image={'/img-powerlifting/calf-raises.webp'} />

                    <h2>Rutina 2: Press de Banca (Día de Empuje)</h2>
                    <Accordeon exercise={'Bench Press (Press de Banca)'} rutine={'5 series de 5 repeticiones'} ref={ref} image={'/img-powerlifting/bench-press.webp'} />
                    <Accordeon exercise={'Incline Bench Press (Press Inclinado)'} rutine={'4 series de 6 repeticiones'} ref={ref} image={'/img-powerlifting/incline-bench.webp'} />
                    <Accordeon exercise={'Dumbbell Flyes (Aperturas con Mancuernas)'} rutine={'3 series de 12 repeticiones'} ref={ref} image={'/img-powerlifting/dumbbell-flyes.webp'} />
                    <Accordeon exercise={'Overhead Press (Press Militar)'} rutine={'4 series de 8 repeticiones'} ref={ref} image={'/img-powerlifting/overhead-press.webp'} />
                    <Accordeon exercise={'Triceps Dips'} rutine={'3 series de 10 repeticiones'} ref={ref} image={'/img-powerlifting/triceps-dips.webp'} />

                    <h2>Rutina 3: Peso Muerto (Día de Tirón)</h2>
                    <Accordeon exercise={'Deadlift (Peso Muerto)'} rutine={'5 series de 3 repeticiones'} ref={ref} image={'/img-powerlifting/deadlift.webp'} />
                    <Accordeon exercise={'Romanian Deadlift (Peso Muerto Rumano)'} rutine={'4 series de 6 repeticiones'} ref={ref} image={'/img-powerlifting/romanian-deadlift.webp'} />
                    <Accordeon exercise={'Pull-Ups (Dominadas)'} rutine={'4 series de 8 repeticiones'} ref={ref} image={'/img-powerlifting/pull-ups.webp'} />
                    <Accordeon exercise={'Bent-Over Rows'} rutine={'4 series de 8 repeticiones'} ref={ref} image={'/img-powerlifting/bent-over-rows.webp'} />
                    <Accordeon exercise={'Face Pulls'} rutine={'3 series de 12 repeticiones'} ref={ref} image={'/img-powerlifting/face-pulls.webp'} />

                    <h2>Rutina 4: Día de Accesorios (Fuerza General)</h2>
                    <Accordeon exercise={'Barbell Curls'} rutine={'4 series de 10 repeticiones'} ref={ref} image={'/img-powerlifting/barbell-curls.webp'} />
                    <Accordeon exercise={'Skull Crushers (Rompecráneos)'} rutine={'4 series de 10 repeticiones'} ref={ref} image={'/img-powerlifting/skull-crushers.webp'} />
                    <Accordeon exercise={'Lateral Raises'} rutine={'4 series de 12 repeticiones'} ref={ref} image={'/img-powerlifting/lateral-raises.webp'} />
                    <Accordeon exercise={'Hammer Curls'} rutine={'4 series de 10 repeticiones'} ref={ref} image={'/img-powerlifting/hammer-curls.webp'} />
                    <Accordeon exercise={'Plank'} rutine={'3 series de 1 minuto'} ref={ref} image={'/img-powerlifting/plank.webp'} />

                    <h2>Rutina 5: Día de Descanso Activo (Movilidad y Recuperación)</h2>
                    <Accordeon exercise={'Foam Rolling'} rutine={'10-15 minutos de liberación miofascial'} ref={ref} image={'/img-powerlifting/foam-rolling.webp'} />
                    <Accordeon exercise={'Dynamic Stretching (Estiramiento Dinámico)'} rutine={'10-15 minutos de estiramientos dinámicos'} ref={ref} image={'/img-powerlifting/dynamic-stretching.webp'} />
                    <Accordeon exercise={'Walking or Light Jogging'} rutine={'15-20 minutos a ritmo suave'} ref={ref} image={'/img-powerlifting/light-jogging.webp'} />
                </ul>
            </div>
        </>
    );
})

export default Trainpowerlifting;