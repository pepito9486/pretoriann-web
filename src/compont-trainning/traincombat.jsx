import React, { forwardRef } from 'react';
import Accordeon from '../components/accordeon';

const Traincombat = forwardRef((props, ref) => {
  return (
    <>
      <div className='main-calisteniatrain' ref={ref}>
        <header><h1>Rutina Semanal de Ejercicios de Body Combat</h1></header>

        <article>
          <p>
            Esta rutina semanal de Body Combat está diseñada para mejorar tu fuerza, agilidad y resistencia. Cada día se enfoca en diferentes técnicas y combinaciones para maximizar tu acondicionamiento físico y habilidades de combate.
          </p>
        </article>

        <ul>
          {/* Día 1: Técnicas de Golpes */}
          <h2>Día 1: Técnicas de Golpes</h2>
          <Accordeon
            exercise={'Jabs y Cruces'}
            rutine={'Combinación de golpes rápidos'}
            description={'Realiza un golpe directo con una mano (jab) seguido de un golpe cruzado con la otra mano. Alterna entre ambos golpes a un ritmo rápido.'}
            ref={ref}
            image={'/img-bodycombat/jabs-crosses.webp'}
          />
          <Accordeon
            exercise={'Golpes de Elbow'}
            rutine={'Técnica de combate con codos'}
            description={'Desde una posición de boxeo, acerca el codo hacia el objetivo en un golpe controlado. Alterna entre ambos codos para trabajar los músculos del torso y los brazos.'}
            ref={ref}
            image={'/img-bodycombat/elbow-strikes.webp'}
          />
          <Accordeon
            exercise={'Boxeo en Movimiento'}
            rutine={'Movimientos de boxeo en desplazamiento'}
            description={'Comienza en posición de boxeo y avanza con pasos cortos mientras lanzas jabs y cruces. Retrocede con movimientos similares, manteniendo la intensidad.'}
            ref={ref}
            image={'/img-bodycombat/boxing-on-the-move.webp'}
          />

          {/* Día 2: Técnicas de Patadas */}
          <h2>Día 2: Técnicas de Patadas</h2>
          <Accordeon
            exercise={'Patadas Frontales'}
            rutine={'Técnica de kickboxing'}
            description={'Colócate en posición de boxeo y eleva la pierna hacia adelante, manteniendo la pierna recta y el pie apuntando hacia arriba. Alterna las piernas y repite.'}
            ref={ref}
            image={'/img-bodycombat/front-kicks.webp'}
          />
          <Accordeon
            exercise={'Patada Lateral'}
            rutine={'Técnica de patada'}
            description={'Levanta la pierna de atrás y extiéndela hacia un lado, asegurándote de mantener el torso erguido. Regresa la pierna a la posición inicial y repite con la otra pierna.'}
            ref={ref}
            image={'/img-bodycombat/side-kick.webp'}
          />
          <Accordeon
            exercise={'Roundhouse Kick'}
            rutine={'Patada circular'}
            description={'En posición de boxeo, gira el pie de apoyo y extiende la pierna en un movimiento de patada circular. Regresa a la posición inicial y repite con la otra pierna.'}
            ref={ref}
            image={'/img-bodycombat/roundhouse-kick.webp'}
          />

          {/* Día 3: Combinaciones de Movimientos */}
          <h2>Día 3: Combinaciones de Movimientos</h2>
          <Accordeon
            exercise={'Combinación de Golpes y Patadas'}
            rutine={'Secuencia de movimientos'}
            description={'Realiza una serie de golpes directos y cruzados seguidos de patadas frontales y laterales. Alterna entre los diferentes movimientos para mantener una alta intensidad.'}
            ref={ref}
            image={'/img-bodycombat/combinations.webp'}
          />
          <Accordeon
            exercise={'Combinación de Gancho y Patada'}
            rutine={'Gancho y patada frontal'}
            description={'Desde una posición de boxeo, realiza un gancho con un brazo y da una patada frontal con la pierna opuesta. Alterna los lados para trabajar ambos brazos y piernas.'}
            ref={ref}
            image={'/img-bodycombat/hook-kick.webp'}
          />
          <Accordeon
            exercise={'Combinación de Rodillazo y Gancho'}
            rutine={'Rodillazo y gancho'}
            description={'Desde una posición de boxeo, da un rodillazo hacia el frente con una pierna y realiza un gancho con el brazo opuesto. Alterna lados y repite.'}
            ref={ref}
            image={'/img-bodycombat/knee-hook.webp'}
          />

          {/* Día 4: Descanso Activo */}
          <h2>Día 4: Descanso Activo</h2>
          <Accordeon
            exercise={'Estiramientos'}
            rutine={'30 minutos de estiramientos suaves'}
            description={'Dedica el día a actividades ligeras como caminar o realizar estiramientos para relajar los músculos y recuperarte de los entrenamientos anteriores.'}
            ref={ref}
            image={'/img-bodycombat/stretch.webp'}
          />

          {/* Día 5: Trabajo Cardiovascular y de Fuerza */}
          <h2>Día 5: Trabajo Cardiovascular y de Fuerza</h2>
          <Accordeon
            exercise={'Rodillas Altas'}
            rutine={'Ejercicio cardiovascular'}
            description={'Corre en el lugar levantando las rodillas lo más alto posible, alternando el movimiento de los brazos en sincronía con las rodillas.'}
            ref={ref}
            image={'/img-bodycombat/high-knees.webp'}
          />
          <Accordeon
            exercise={'Combinación de Golpes y Patadas'}
            rutine={'Secuencia intensa'}
            description={'Ejecuta una combinación de golpes y patadas para mantener la intensidad alta y trabajar tanto el upper body como el lower body.'}
            ref={ref}
            image={'/img-bodycombat/combinations.webp'}
          />

          {/* Día 6: Combinaciones Avanzadas */}
          <h2>Día 6: Combinaciones Avanzadas</h2>
          <Accordeon
            exercise={'Roundhouse Kick'}
            rutine={'Patada circular'}
            description={'Practica la patada circular desde diferentes ángulos para mejorar tu técnica y potencia.'}
            ref={ref}
            image={'/img-bodycombat/roundhouse-kick.webp'}
          />
          <Accordeon
            exercise={'Combinación de Gancho y Patada'}
            rutine={'Gancho y patada frontal'}
            description={'Realiza esta combinación para fortalecer el golpeo y las patadas, mejorando la coordinación entre ambas partes del cuerpo.'}
            ref={ref}
            image={'/img-bodycombat/hook-kick.webp'}
          />

          {/* Día 7: Descanso o Estiramientos */}
          <h2>Día 7: Descanso o Estiramientos</h2>
          <Accordeon
            exercise={'Descanso'}
            rutine={'Día de descanso total o estiramientos suaves'}
            description={'Permite que tu cuerpo se recupere del entrenamiento semanal. Puedes realizar estiramientos o disfrutar de un día de descanso activo.'}
            ref={ref}
            image={'/img-bodycombat/stretch.webp'}
          />
        </ul>
      </div>
    </>
  );
});

export default Traincombat;
