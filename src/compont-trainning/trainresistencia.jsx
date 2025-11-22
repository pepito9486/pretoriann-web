import React, { forwardRef } from 'react';

const Trainresistencia = forwardRef((props, ref) => {
  return (
    <>
      <div className='main-calisteniatrain' ref={ref}>
        <header><h1>Rutina Semanal de Ejercicios de Resistencia</h1></header>

        <article>
          <p>
            Esta rutina semanal está diseñada para mejorar tu resistencia cardiovascular, muscular y general. Se enfoca en diferentes áreas del cuerpo para promover un acondicionamiento físico completo.
          </p>
        </article>

        {/* Día 1: Resistencia Cardiovascular */}
        <h2>Día 1: Resistencia Cardiovascular</h2>
        <p><strong>Objetivo:</strong> Mejorar la capacidad cardiovascular y respiratoria.</p>
        <ul>
          <li><strong>Correr (30-40 minutos):</strong>
            <p>Mantén un ritmo constante. Puedes correr en exteriores o en una cinta de correr.</p>
          </li>
          <li><strong>Ciclismo (30 minutos):</strong>
            <p>Monta una bicicleta al aire libre o utiliza una bicicleta estática. Mantén una intensidad moderada.</p>
          </li>
          <li><strong>Natación (20-30 minutos):</strong>
            <p>Realiza diferentes estilos como crol, espalda o mariposa, si tienes acceso a una piscina.</p>
          </li>
        </ul>

        {/* Día 2: Resistencia Muscular */}
        <h2>Día 2: Resistencia Muscular</h2>
        <p><strong>Objetivo:</strong> Aumentar la capacidad de los músculos para resistir la fatiga.</p>
        <ul>
          <li><strong>Entrenamiento con pesas (3-4 series de 12-15 repeticiones):</strong>
            <p>Selecciona ejercicios como sentadillas, press de banca y peso muerto. Usa un peso moderado y enfócate en la técnica.</p>
          </li>
          <li><strong>Bandas de resistencia (3-4 series de 15 repeticiones):</strong>
            <p>Haz ejercicios como press de hombros, remo con bandas y extensiones de tríceps.</p>
          </li>
          <li><strong>Circuito de fuerza (20 minutos):</strong>
            <p>Realiza un circuito de 5 ejercicios (flexiones, abdominales, zancadas, burpees, saltos en caja) con 30 segundos de descanso entre cada ejercicio. Repite el circuito 3 veces.</p>
          </li>
        </ul>

        {/* Día 3: Descanso Activo o Estiramientos */}
        <h2>Día 3: Descanso Activo o Estiramientos</h2>
        <p>Puedes hacer una sesión de estiramientos o practicar una actividad suave como caminar durante 30 minutos.</p>

        {/* Día 4: Resistencia General (HIIT) */}
        <h2>Día 4: Resistencia General (HIIT)</h2>
        <p><strong>Objetivo:</strong> Combinación de resistencia cardiovascular y muscular con alta intensidad.</p>
        <ul>
          <li><strong>Burpees:</strong> 30 segundos de trabajo, 30 segundos de descanso.</li>
          <li><strong>Saltos con rodillas altas:</strong> 30 segundos de trabajo, 30 segundos de descanso.</li>
          <li><strong>Mountain Climbers (Escaladores):</strong> 30 segundos de trabajo, 30 segundos de descanso.</li>
          <li><strong>Sprints en bicicleta estática:</strong> 30 segundos de alta intensidad, 30 segundos de recuperación.</li>
        </ul>
        <p>Repite el ciclo 4-5 veces.</p>

        {/* Día 5: Resistencia Muscular */}
        <h2>Día 5: Resistencia Muscular</h2>
        <p><strong>Objetivo:</strong> Continuar el enfoque en la resistencia muscular.</p>
        <ul>
          <li><strong>Sentadillas con salto (4 series de 15 repeticiones):</strong></li>
          <li><strong>Fondos de tríceps (4 series de 12-15 repeticiones):</strong></li>
          <li><strong>Plancha:</strong> Mantén la posición durante 1 minuto.</li>
          <li><strong>Entrenamiento con pesas:</strong> Repite el entrenamiento del Día 2, enfocándote en grupos musculares diferentes.</li>
        </ul>

        {/* Día 6: Resistencia General - Actividades de Larga Duración */}
        <h2>Día 6: Resistencia General - Actividades de Larga Duración</h2>
        <p><strong>Objetivo:</strong> Mejorar la resistencia general y la capacidad de sostener esfuerzo a largo plazo.</p>
        <ul>
          <li><strong>Senderismo (60-90 minutos):</strong>
            <p>Si es posible, realiza una caminata en colinas o montañas para trabajar la resistencia cardiovascular y la fuerza en las piernas.</p>
          </li>
          <li><strong>Remo (30 minutos):</strong>
            <p>Si tienes acceso a una máquina de remo, realiza una sesión moderada de remo, combinando trabajo cardiovascular y de fuerza.</p>
          </li>
        </ul>

        {/* Día 7: Descanso o Estiramientos */}
        <h2>Día 7: Descanso o Estiramientos</h2>
        <p>Dedica este día a estiramientos suaves o al descanso total para permitir que tu cuerpo se recupere.</p>

      </div>
    </>
  );
});

export default Trainresistencia;
