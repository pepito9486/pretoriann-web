import React, { forwardRef } from 'react';
import Accordeon from '../components/accordeon';

const Trainaerobics = forwardRef((props, ref) => {
  return (
    <>
      <div className='main-calisteniatrain' ref={ref}>
        <header><h1>Ejercicios Aeróbicos</h1></header>

        <article>
          <p>
            Estos ejercicios aeróbicos están diseñados para mejorar la resistencia cardiovascular, la coordinación y la agilidad, mientras quemas calorías y fortaleces tu cuerpo.
          </p>
        </article>

        <ul>
          <h2>Rutina 1: Movimientos Básicos</h2>
          <Accordeon
            exercise={'Marcha en el sitio (Marching in Place)'}
            rutine={'3 series de 1 minuto'}
            ref={ref}
            image={'/img-aerobics/march.webp'}
          />
          <Accordeon
            exercise={'Step Touch'}
            rutine={'3 series de 1 minuto'}
            ref={ref}
            image={'/img-aerobics/step-touch.webp'}
          />
          <Accordeon
            exercise={'Grapevine'}
            rutine={'3 series de 1 minuto'}
            ref={ref}
            image={'/img-aerobics/grapevine.webp'}
          />

          <h2>Rutina 2: Ejercicios de Cardio</h2>
          <Accordeon
            exercise={'Jumping Jacks'}
            rutine={'3 series de 30 repeticiones'}
            ref={ref}
            image={'/img-aerobics/jumping-jacks.webp'}
          />
          <Accordeon
            exercise={'Rodillas altas (High Knees)'}
            rutine={'3 series de 1 minuto'}
            ref={ref}
            image={'/img-aerobics/high-knees.webp'}
          />
          <Accordeon
            exercise={'Tijeras (Scissor Jumps)'}
            rutine={'3 series de 20 repeticiones'}
            ref={ref}
            image={'/img-aerobics/scissorjumps.webp'}
          />

          <h2>Rutina 3: Ejercicios de Coordinación</h2>
          <Accordeon
            exercise={'Salto de cuerda (Jump Rope)'}
            rutine={'3 series de 1 minuto'}
            ref={ref}
            image={'/img-aerobics/jumprope.webp'}
          />
          <Accordeon
            exercise={'Toques al suelo (Floor Touches)'}
            rutine={'3 series de 15 repeticiones por lado'}
            ref={ref}
            image={'/img-aerobics/floortouches.webp'}
          />
          <Accordeon
            exercise={'Golpes de puño (Punches)'}
            rutine={'3 series de 1 minuto'}
            ref={ref}
            image={'/img-aerobics/punches.webp'}
          />

          <h2>Rutina 4: Desafíos de Resistencia</h2>
          <Accordeon
            exercise={'Rodillas al pecho en el suelo (Mountain Climbers)'}
            rutine={'3 series de 30 segundos'}
            ref={ref}
            image={'/img-aerobics/mountainclimbers.webp'}
          />
        </ul>
      </div>
    </>
  );
});

export default Trainaerobics;