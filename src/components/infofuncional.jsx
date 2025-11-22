

import React, { forwardRef, useState } from 'react';
import VideoCard from './card-calistenia';
import BannerSmall from './banner-disciplinas.jsx';

const Infofuncional = forwardRef((props, ref) => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handleActivate = (id) => {
    setActiveVideoId(id);
  };

  const ejercicios = [
    {
      id: 1,
      videoid: "https://www.youtube.com/embed/LDfnyt0Rmaw",
      thumbnail: "LDfnyt0Rmaw",
      title: "Deadlift con Kettlebell",
      description: "Fortalece la cadena posterior al levantar una kettlebell desde el suelo, utilizando una técnica similar al peso muerto."
    },
    {
      id: 2,
      videoid: "https://www.youtube.com/embed/JyUqwkVpsi8",
      thumbnail: "JyUqwkVpsi8",
      title: "Russian Twists (Giros Rusos)",
      description: "Ejercicio para el core, especialmente los oblicuos, girando el torso de lado a lado mientras estás sentado."
    },
    {
      id: 3,
      videoid: "https://www.youtube.com/embed/QxZzLH4UwvY",
      thumbnail: "QxZzLH4UwvY",
      title: "Step-Ups con Mancuernas",
      description: "Simula subir escaleras con una mancuerna en cada mano, trabajando piernas y glúteos."
    },
    {
      id: 4,
      videoid: "https://www.youtube.com/embed/Fkzk_RqlYig",
      thumbnail: "Fkzk_RqlYig",
      title: "Farmer’s Walk",
      description: "Consiste en caminar una distancia con peso en ambas manos, mejorando fuerza del core y estabilidad."
    },
    {
      id: 5,
      videoid: "https://www.youtube.com/embed/cnyTQDSE884",
      thumbnail: "cnyTQDSE884",
      title: "Mountain Climbers (Escaladores)",
      description: "Ejercicio cardiovascular en plancha que simula escalar montañas, trabajando el core y piernas."
    },
    {
      id: 6,
      videoid: "https://www.youtube.com/embed/YSxHifyI6s8",
      thumbnail: "YSxHifyI6s8",
      title: "Kettlebell Swings",
      description: "Movimiento de balanceo con kettlebell desde entre las piernas hasta los hombros. Trabaja fuerza explosiva y core."
    },
    {
      id: 7,
      videoid: "https://www.youtube.com/embed/fpUD0mcFp_0",
      thumbnail: "fpUD0mcFp_0",
      title: "Wall Balls",
      description: "Lanzamiento de pelota medicinal contra la pared desde sentadilla. Cardio + fuerza en piernas y hombros."
    },
    {
      id: 8,
      videoid: "https://www.youtube.com/embed/BjixzWEw4EY",
      thumbnail: "BjixzWEw4EY",
      title: "Sentadillas (Squats)",
      description: "Movimiento clave para tren inferior, mejora movilidad y fuerza en la vida diaria."
    },
    {
      id: 9,
      videoid: "https://www.youtube.com/embed/3Mvqze-fI2o",
      thumbnail: "3Mvqze-fI2o",
      title: "Estocadas (Lunges)",
      description: "Ejercicio dinámico que fortalece piernas y glúteos, mejora equilibrio y coordinación."
    },
    {
      id: 10,
      videoid: "https://www.youtube.com/embed/qLBImHhCXSw",
      thumbnail: "qLBImHhCXSw",
      title: "Burpees",
      description: "Combina sentadilla, flexión y salto. Mejora resistencia general y fuerza corporal."
    },
    {
      id: 11,
      videoid: "https://www.youtube.com/embed/bFES1j3JNkA",
      thumbnail: "bFES1j3JNkA",
      title: "Bear Crawl (Caminata del Oso)",
      description: "Ejercicio que simula caminar como un oso, trabaja core, hombros y piernas."
    },
    {
      id: 12,
      videoid: "https://www.youtube.com/embed/pQb2xIGioyQ",
      thumbnail: "pQb2xIGioyQ",
      title: "Battle Ropes",
      description: "Ejercicio con cuerdas gruesas que mejora fuerza del tren superior y resistencia cardiovascular."
    },
    {
      id: 13,
      videoid: "https://www.youtube.com/embed/fGlQ6snF7ok",
      thumbnail: "fGlQ6snF7ok",
      title: "Ejercicios con TRX",
      description: "Utiliza correas de suspensión para trabajar fuerza, equilibrio y movilidad."
    }
  ];

  return (
    <div className='main-calistenia' ref={ref}>
      <BannerSmall
        src={'/img-icon/icon-funcional.webp'}
        alt={'Entrenamiento Funcional'}
        h1={'Entrenamiento Funcional'}
        h2={'¿Qué es el Entrenamiento Funcional?'}
        p={"El entrenamiento funcional es un tipo de ejercicio físico que mejora fuerza, coordinación, equilibrio, flexibilidad y resistencia mediante movimientos que imitan actividades diarias y activan múltiples grupos musculares."}
      />

      <h2 className='h2-infocalistenia'>Ejercicios de Entrenamiento Funcional</h2>

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

export default Infofuncional;
