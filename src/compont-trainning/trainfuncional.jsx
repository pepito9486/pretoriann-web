import React, { forwardRef } from 'react';
import Accordeon from '../components/accordeon';

const Trainfuncional = forwardRef((props, ref) => {
    return (
        <>
            <div className='main-calisteniatrain' ref={ref}>
                <header><h1>Rutinas de Entrenamiento Funcional</h1></header>

                <article>
                    <p>
                        Estas rutinas de entrenamiento funcional están diseñadas para mejorar tu fuerza, coordinación, estabilidad y rendimiento diario. Cada ejercicio trabaja múltiples grupos musculares para imitar movimientos naturales.
                    </p>
                </article>

                <ul>
                    <h2>Rutina 1: Fortalecimiento de la Cadena Posterior</h2>
                    <Accordeon exercise={'Deadlift con Kettlebell (Peso Muerto)'} rutine={'4 series de 8 repeticiones'} ref={ref} image={'/img-crossfit/deadlifts.webp'} />
                    <Accordeon exercise={'Step-Ups con Mancuernas'} rutine={'3 series de 12 repeticiones por pierna'} ref={ref} image={'/img-crossfit/boxjumps.webp'} />
                    <Accordeon exercise={'Farmer’s Walk (Paseo del Granjero)'} rutine={'3 series de caminatas de 30 metros'} ref={ref} image={'/img-crossfit/boxjumps.webp'} />
                    <Accordeon exercise={'Kettlebell Swings'} rutine={'4 series de 15 repeticiones'} ref={ref} image={'/img-crossfit/kettlebell-swings.webp'} />

                    <h2>Rutina 2: Entrenamiento de Core y Estabilidad</h2>
                    <Accordeon exercise={'Russian Twists (Giros Rusos)'} rutine={'3 series de 20 repeticiones'} ref={ref} image={'/img-crossfit/boxjumps.webp'} />
                    <Accordeon exercise={'Mountain Climbers (Escaladores)'} rutine={'4 series de 30 segundos'} ref={ref} image={'/img-crossfit/boxjumps.webp'} />
                    <Accordeon exercise={'Plank con TRX'} rutine={'3 series de 1 minuto'} ref={ref} image={'/img-crossfit/toes-to-bar.webp'} />

                    <h2>Rutina 3: Fuerza Explosiva y Resistencia</h2>
                    <Accordeon exercise={'Burpees'} rutine={'4 series de 10 repeticiones'} ref={ref} image={'/img-crossfit/handstand-pushups.webp'} />
                    <Accordeon exercise={'Wall Balls'} rutine={'4 series de 20 repeticiones'} ref={ref} image={'/img-crossfit/wall-balls.webp'} />
                    <Accordeon exercise={'Battle Ropes'} rutine={'4 series de 30 segundos'} ref={ref} image={'/img-crossfit/boxjumps.webp'} />

                    <h2>Rutina 4: Movilidad y Coordinación</h2>
                    <Accordeon exercise={'Sentadillas (Squats)'} rutine={'4 series de 12 repeticiones'} ref={ref} image={'/img-crossfit/snatch.webp'} />
                    <Accordeon exercise={'Estocadas (Lunges)'} rutine={'4 series de 10 repeticiones por pierna'} ref={ref} image={'/img-crossfit/cleanandjerk.webp'} />
                    <Accordeon exercise={'Caminata del Oso (Bear Crawl)'} rutine={'3 series de 20 metros'} ref={ref} image={'/img-crossfit/toes-to-bar.webp'} />

                    <h2>Rutina 5: Día de Descanso Activo</h2>
                    <Accordeon exercise={'Foam Rolling'} rutine={'10-15 minutos de liberación miofascial'} ref={ref} image={'/img-crossfit/foam-rolling.webp'} />
                    <Accordeon exercise={'Dynamic Stretching (Estiramientos Dinámicos)'} rutine={'10-15 minutos de estiramientos dinámicos'} ref={ref} image={'/img-crossfit/dynamic-stretching.webp'} />
                </ul>
            </div>
        </>
    );
});

export default Trainfuncional;