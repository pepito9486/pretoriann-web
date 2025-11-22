import React, { forwardRef } from 'react';
import Accordeon from '../components/accordeon';

const Trainspinning = forwardRef((props, ref) => {
  return (
    <>
      <div className='main-calisteniatrain' ref={ref}>
        <header><h1>Entrenamiento Semanal de Spinning</h1></header>

        <article>
          <p>
            Este plan de entrenamiento de spinning está diseñado para mejorar tu resistencia cardiovascular, fuerza en las piernas y potencia.
            Cada sesión se enfoca en diferentes aspectos como subidas, intervalos, sprints y ritmo.
          </p>
        </article>

        <ul>
          <h2>Día 1: Resistencia y Subidas</h2>
          <Accordeon
            exercise={'Subidas (Climbing)'}
            rutine={'10 minutos de subidas con aumento progresivo de resistencia'}
            ref={ref}
            image={'/img-spinning/climbing.webp'}
          />
          <Accordeon
            exercise={'Ritmo (Cadence)'}
            rutine={'10 minutos de cadencia rápida con resistencia baja'}
            ref={ref}
            image={'/img-spinning/cadence.webp'}
          />
          <Accordeon
            exercise={'Intervalos (Intervals)'}
            rutine={'10 minutos alternando alta intensidad y recuperación'}
            ref={ref}
            image={'/img-spinning/intervals.webp'}
          />

          <h2>Día 2: Intervalos y Sprints</h2>
          <Accordeon
            exercise={'Intervalos (Intervals)'}
            rutine={'20 minutos alternando alta intensidad (2 minutos) y recuperación (1 minuto)'}
            ref={ref}
            image={'/img-spinning/intervals.webp'}
          />
          <Accordeon
            exercise={'Sprints (Sprints)'}
            rutine={'10 minutos de sprints (30 segundos a máxima velocidad, 1 minuto de recuperación)'}
            ref={ref}
            image={'/img-spinning/sprints.webp'}
          />

          <h2>Día 4: Subidas y Posiciones de Pie</h2>
          <Accordeon
            exercise={'Subidas (Climbing)'}
            rutine={'15 minutos de subidas con resistencia progresiva'}
            ref={ref}
            image={'/img-spinning/climbing.webp'}
          />
          <Accordeon
            exercise={'Entrenamiento en Posiciones de Pie (Standing)'}
            rutine={'10 minutos alternando 1 minuto de pie y 1 minuto sentado'}
            ref={ref}
            image={'/img-spinning/standing.webp'}
          />

          <h2>Día 5: Ritmo y Sprints</h2>
          <Accordeon
            exercise={'Ritmo (Cadence)'}
            rutine={'15 minutos de cadencia rápida y constante con resistencia baja'}
            ref={ref}
            image={'/img-spinning/cadence.webp'}
          />
          <Accordeon
            exercise={'Sprints (Sprints)'}
            rutine={'10 minutos de sprints (30 segundos a máxima velocidad, 1 minuto de recuperación)'}
            ref={ref}
            image={'/img-spinning/sprints.webp'}
          />

          <h2>Día 6: Resistencia y Recuperación</h2>
          <Accordeon
            exercise={'Subidas (Climbing)'}
            rutine={'15 minutos con aumento gradual de resistencia'}
            ref={ref}
            image={'/img-spinning/climbing.webp'}
          />
          <Accordeon
            exercise={'Ritmo (Cadence)'}
            rutine={'10 minutos de cadencia rápida y constante con baja resistencia'}
            ref={ref}
            image={'/img-spinning/cadence.webp'}
          />
        </ul>
      </div>
    </>
  );
});

export default Trainspinning;
