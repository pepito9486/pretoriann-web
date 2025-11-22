import React, { forwardRef } from 'react';
import Accordeon from '../components/accordeon';

const Trainyoga = forwardRef((props, ref) => {
  return (
    <>
      <div className='main-calisteniatrain' ref={ref}>
        <header><h1>Ejercicios de Yoga</h1></header>

        <article>
          <p>
            Estas posturas de yoga están diseñadas para mejorar la flexibilidad, equilibrio y fuerza, además de promover la relajación y la conexión mente-cuerpo.
          </p>
        </article>

        <ul>
          <h2>Rutina 1: Yoga Clásico</h2>
          <Accordeon
            exercise={'Postura del perro hacia abajo (Adho Mukha Svanasana)'}
            rutine={'3 series de 30 segundos a 1 minuto'}
            ref={ref}
            image={'/img-yoga/downward-dog.webp'}
          />
          <Accordeon
            exercise={'Postura del guerrero II (Virabhadrasana II)'}
            rutine={'3 series de 30 segundos por lado'}
            ref={ref}
            image={'/img-yoga/warrior-ii.webp'}
          />
          <Accordeon
            exercise={'Postura del árbol (Vrksasana)'}
            rutine={'3 series de 30 segundos por pierna'}
            ref={ref}
            image={'/img-yoga/tree.webp'}
          />

          <h2>Rutina 2: Relajación y Estiramiento</h2>
          <Accordeon
            exercise={'Postura del niño (Balasana)'}
            rutine={'3 series de 1 a 2 minutos'}
            ref={ref}
            image={'/img-yoga/childs-pose.webp'}
          />
          <Accordeon
            exercise={'Postura del gato y la vaca (Marjaryasana/Bitilasana)'}
            rutine={'3 series de 10 repeticiones'}
            ref={ref}
            image={'/img-yoga/cat-cow.webp'}
          />
          <Accordeon
            exercise={'Postura del puente (Setu Bandhasana)'}
            rutine={'3 series de 10 repeticiones'}
            ref={ref}
            image={'/img-yoga/bridge.webp'}
          />

          <h2>Rutina 3: Fortalecimiento y Flexibilidad</h2>
          <Accordeon
            exercise={'Postura de la cobra (Bhujangasana)'}
            rutine={'3 series de 15 a 20 segundos'}
            ref={ref}
            image={'/img-yoga/cobra.webp'}
          />
          <Accordeon
            exercise={'Postura del triángulo (Trikonasana)'}
            rutine={'3 series de 30 segundos por lado'}
            ref={ref}
            image={'/img-yoga/triangle.webp'}
          />
          <Accordeon
            exercise={'Postura del pescado (Matsyasana)'}
            rutine={'3 series de 30 segundos'}
            ref={ref}
            image={'/img-yoga/fish.webp'}
          />

          <h2>Rutina 4: Estiramiento Profundo</h2>
          <Accordeon
            exercise={'Postura de la pinza (Paschimottanasana)'}
            rutine={'3 series de 30 segundos a 1 minuto'}
            ref={ref}
            image={'/img-yoga/seated-forward-bend.webp'}
          />

          <Accordeon
            exercise={'Postura de la pinza (Paschimottanasana)'}
            rutine={'3 series de 30 segundos a 1 minuto'}
            ref={ref}
            image={'/img-yoga/seated-forward-bend.webp'}
          />
          <Accordeon
            exercise={'Postura del perro hacia arriba (Urdhva Mukha Svanasana)'}
            rutine={'3 series de 30 segundos'}
            ref={ref}
            image={'/img-yoga/upward-dog.webp'}
          />
          <Accordeon
            exercise={'Postura del ángulo sentado (Upavistha Konasana)'}
            rutine={'3 series de 1 minuto'}
            ref={ref}
            image={'/img-yoga/seated-angle.webp'}
          />

        </ul>
      </div>
    </>
  );
});

export default Trainyoga;
