import React, { forwardRef, useState } from 'react';
import VideoCard from './card-calistenia';
import BannerSmall from './banner-disciplinas.jsx';

const Infopowerlifting = forwardRef((props, ref) => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handleActivate = (id) => {
    setActiveVideoId(id);
  };

  const ejercicios = [
    {
      id: 1,
      videoid: "https://www.youtube.com/embed/WTrst0u5OG8",
      thumbnail: "WTrst0u5OG8",
      title: "Sentadilla (Squat):",
      description: "El atleta debe bajar con la barra sobre los hombros hasta que las caderas estén por debajo de las rodillas, y luego volver a subir hasta estar de pie."
    },
    {
      id: 2,
      videoid: "https://www.youtube.com/embed/uF12HCNIZFY",
      thumbnail: "uF12HCNIZFY",
      title: "Press de banca (Bench Press):",
      description: "El atleta se acuesta en un banco horizontal, baja la barra hasta el pecho y la empuja hacia arriba hasta que los brazos estén completamente extendidos."
    },
    {
      id: 3,
      videoid: "https://www.youtube.com/embed/1ZXobu7JvvE",
      thumbnail: "1ZXobu7JvvE",
      title: "Deadlifts (Peso muerto):",
      description: "Un ejercicio básico que involucra levantar una barra desde el suelo hasta la posición de pie. Desarrolla la fuerza en glúdeos, isquiotibiales, espalda baja y core."
    }
  ];

  return (
    <div className="main-calistenia" ref={ref}>
      <BannerSmall
        src={'/img-icon/icon-powerlifting.webp'}
        alt={'Powerlifting'}
        h1={'Powerlifting'}
        h2={'¿Qué es el Powerlifting?'}
        p={"El powerlifting es una disciplina de levantamiento de pesas que se centra en tres movimientos principales: la sentadilla, el press de banca y el peso muerto. A diferencia del levantamiento olímpico, el powerlifting se enfoca en la fuerza bruta y la capacidad de levantar la mayor cantidad de peso posible en estos tres ejercicios."}
      />

      <h2 className='h2-infocalistenia'>Ejercicios del Powerlifting</h2>
      <ul>
        {ejercicios.map(ejercicio => (
          <li key={ejercicio.id}>
            <VideoCard
              videoid={ejercicio.videoid}
              thumbnail={ejercicio.thumbnail}
              title={ejercicio.title}
              description={ejercicio.description}
              isActive={activeVideoId === ejercicio.id}
              onActivate={() => handleActivate(ejercicio.id)}
            />
          </li>
        ))}
      </ul>

      <section className="extra-info">
        <h2>Foco de la fuerza absoluta</h2>
        <p>
          A diferencia de otras modalidades como el levantamiento olímpico o el fitness funcional (CrossFit), el powerlifting no busca la velocidad ni la técnica avanzada, sino levantar el mayor peso posible en un solo intento.
        </p>

        <h2>Entrenamiento Especializado</h2>
        <p>
          Los powerlifters se centran en desarrollar fuerza máxima, por lo que sus rutinas de entrenamiento incluyen bajas repeticiones con pesos elevados. El entrenamiento también incluye mucho trabajo accesorio para fortalecer grupos musculares involucrados en los tres levantamientos.
        </p>


        <h2>Beneficios</h2>
        <p>
          <strong>Fuerza:</strong> Aumenta la fuerza general del cuerpo, especialmente en los grandes grupos musculares.<br />
          <strong>Densidad ósea:</strong> Ayuda a mejorar la densidad ósea, debido a la naturaleza del levantamiento de pesas pesadas.<br />
          <strong>Mejora del metabolismo:</strong> Levantar grandes pesos requiere mucha energía y puede ayudar a aumentar el metabolismo.<br />
          <strong>Resistencia mental:</strong> Desarrolla disciplina y fortaleza mental, dado que el powerlifting requiere paciencia y enfoque.
        </p>

      </section>
    </div>
  );
});

export default Infopowerlifting;

