import React, { forwardRef } from "react";
import Accordeon from "../components/accordeon";

const Trainpilates = forwardRef((props, ref) => {
  return (
    <>
      <div className="main-calisteniatrain" ref={ref}>
        <header>
          <h1>Rutinas de Pilates</h1>
        </header>

        <article>
          <p>
            Estas rutinas de Pilates están diseñadas para mejorar la
            flexibilidad, fuerza y control del cuerpo, enfocándose en el core y
            movimientos controlados. Cada rutina tiene una selección de
            ejercicios clave que te ayudarán a mejorar tu postura y equilibrio.
          </p>
        </article>

        <ul>
          <h2>Rutina 1: Fortalecimiento del Core</h2>
          <Accordeon
            exercise={"Hundred (Cien)"}
            rutine={"10 ciclos de respiración (100 movimientos de brazos)"}
            ref={ref}
            image={"/img-crossfit/boxjumps.webp"}
          />
          <Accordeon
            exercise={"Roll-Up (Enrollamiento)"}
            rutine={"3 series de 10 repeticiones"}
            ref={ref}
            image={"/img-crossfit/boxjumps.webp"}
          />
          <Accordeon
            exercise={"Criss-Cross"}
            rutine={"3 series de 15 repeticiones por lado"}
            ref={ref}
            image={"/img-crossfit/boxjumps.webp"}
          />

          <h2>Rutina 2: Flexibilidad y Control</h2>
          <Accordeon
            exercise={"Leg Circles (Círculos de pierna)"}
            rutine={"3 series de 5 círculos por pierna en cada dirección"}
            ref={ref}
            image={"/img-crossfit/boxjumps.webp"}
          />
          <Accordeon
            exercise={"Pelvic Curl (Puente de pelvis)"}
            rutine={"3 series de 12 repeticiones"}
            ref={ref}
            image={"/img-crossfit/boxjumps.webp"}
          />
          <Accordeon
            exercise={"Side Leg Lifts (Levantamiento lateral de piernas)"}
            rutine={"3 series de 12 repeticiones por pierna"}
            ref={ref}
            image={"/img-crossfit/boxjumps.webp"}
          />

          <h2>Rutina 3: Fortalecimiento Total del Cuerpo</h2>
          <Accordeon
            exercise={"Single-Leg Stretch (Estiramiento de pierna simple)"}
            rutine={"3 series de 10 repeticiones por pierna"}
            ref={ref}
            image={"/img-crossfit/boxjumps.webp"}
          />
          <Accordeon
            exercise={"Double-Leg Stretch (Estiramiento de pierna doble)"}
            rutine={"3 series de 10 repeticiones"}
            ref={ref}
            image={"/img-crossfit/boxjumps.webp"}
          />
          <Accordeon
            exercise={"Plank (Plancha)"}
            rutine={"3 series de 30 a 60 segundos"}
            ref={ref}
            image={"/img-crossfit/boxjumps.webp"}
          />

          <h2>Rutina 4: Flexión de Espalda y Control</h2>
          <Accordeon
            exercise={"Swan Dive (Clavado de cisne)"}
            rutine={"3 series de 8 repeticiones"}
            ref={ref}
            image={"/img-crossfit/boxjumps.webp"}
          />


          <Accordeon
            exercise={"Swimming"}
            rutine={"3 series de 20 segundos"}
            ref={ref}
            image={"/img-pilates/swimming.webp"}
          />
          <Accordeon
            exercise={"Shoulder Bridge"}
            rutine={"3 series de 12 repeticiones"}
            ref={ref}
            image={"/img-pilates/shoulder-bridge.webp"}
          />
          <Accordeon
            exercise={"Spine Stretch Forward"}
            rutine={"3 series de 10 repeticiones"}
            ref={ref}
            image={"/img-pilates/spine-stretch.webp"}
          />
        </ul>
      </div>
    </>
  );
});

export default Trainpilates;
