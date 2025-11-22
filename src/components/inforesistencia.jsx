import React, { forwardRef, useState } from 'react';
import VideoCard from './card-calistenia';
import BannerSmall from './banner-disciplinas.jsx';

const Inforesistencia = forwardRef((props, ref) => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handleActivate = (id) => {
    setActiveVideoId(id);
  };

  const ejercicios = [
    {
      id: 1,
      videoid: "https://www.youtube.com/embed/QMFhW-ZVRSY",
      thumbnail: "QMFhW-ZVRSY",
      title: "Entrenamiento para mejorar la resistencia física",
      description: "Rutina enfocada en mejorar la resistencia física general mediante ejercicios cardiovasculares y de fuerza combinados."
    },
    {
      id: 2,
      videoid: "https://www.youtube.com/embed/8YhyqGJZyKs",
      thumbnail: "8YhyqGJZyKs",
      title: "Entrenamiento de resistencia de 20 minutos para todo el cuerpo",
      description: "Sesión de 20 minutos que incorpora ejercicios compuestos para un entrenamiento de resistencia muscular completo."
    },
    {
      id: 3,
      videoid: "https://www.youtube.com/embed/JPjUmLNQkxI",
      thumbnail: "JPjUmLNQkxI",
      title: "Gana fuerza y resistencia con ejercicios de cardio con carga",
      description: "Rutina que combina ejercicios cardiovasculares con pesas para mejorar la resistencia y la fuerza simultáneamente."
    },
    {
      id: 4,
      videoid: "https://www.youtube.com/embed/NeQ61BhNO60",
      thumbnail: "NeQ61BhNO60",
      title: "Rutina en casa para ganar resistencia",
      description: "Entrenamiento diseñado para realizar en casa, enfocado en aumentar la resistencia cardiovascular y muscular sin necesidad de equipo."
    },
    {
      id: 5,
      videoid: "https://www.youtube.com/embed/t3kL5gswXAc",
      thumbnail: "t3kL5gswXAc",
      title: "Entrenamiento de resistencia de 30 minutos con mancuernas",
      description: "Sesión de 30 minutos utilizando mancuernas para fortalecer todo el cuerpo y mejorar la resistencia muscular."
    },
    {
      id: 6,
      videoid: "https://www.youtube.com/embed/7zwaMAvhhqA",
      thumbnail: "7zwaMAvhhqA",
      title: "Rutina de entrenamiento de fuerza resistencia",
      description: "Serie de ejercicios enfocados en desarrollar fuerza y resistencia muscular mediante repeticiones controladas."
    },
    {
      id: 7,
      videoid: "https://www.youtube.com/embed/2eSlP_3y2po",
      thumbnail: "2eSlP_3y2po",
      title: "Entrenamiento para todo el cuerpo con ejercicios de fuerza",
      description: "Rutina completa que trabaja todos los grupos musculares principales para mejorar la resistencia y la fuerza general."
    },
    {
      id: 8,
      videoid: "https://www.youtube.com/embed/jLTE4nZ1ocU",
      thumbnail: "jLTE4nZ1ocU",
      title: "Entrenamiento de 15 minutos con bandas de resistencia",
      description: "Rutina rápida utilizando bandas de resistencia para fortalecer y tonificar todo el cuerpo de manera efectiva."
    },
    {
      id: 9,
      videoid: "https://www.youtube.com/embed/9h4nN6rOi6o",
      thumbnail: "9h4nN6rOi6o",
      title: "Ejercicios para ganar resistencia y aguantar 90 minutos de partido",
      description: "Entrenamiento específico para mejorar la resistencia en deportes que requieren esfuerzos prolongados, como el fútbol."
    },
    {
      id: 10,
      videoid: "https://www.youtube.com/embed/2fR-OmyMXLY",
      thumbnail: "2fR-OmyMXLY",
      title: "Cómo realizar entrenamiento de resistencia",
      description: "Guía práctica sobre la correcta ejecución de ejercicios de resistencia para maximizar resultados y prevenir lesiones."
    }
  ];

  return (
    <div className='main-calistenia' ref={ref}>
      <BannerSmall
        src={'/img-icon/icon-resistencia.webp'}
        alt={'Entrenamiento de Resistencia'}
        h1={'Entrenamiento de Resistencia'}
        h2={'¿Qué es el Entrenamiento de Resistencia?'}
        p={"El entrenamiento de resistencia mejora la capacidad del cuerpo para realizar actividades físicas durante períodos prolongados, enfocándose en la resistencia cardiovascular y muscular."}
      />

      <h2 className='h2-infocalistenia'>Ejercicios de Entrenamiento de Resistencia</h2>

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
    </div>
  );
});

export default Inforesistencia;
