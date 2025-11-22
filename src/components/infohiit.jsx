import React, { forwardRef, useState } from 'react';
import VideoCard from './card-calistenia';
import BannerSmall from './banner-disciplinas.jsx';

const Infohiit = forwardRef((props, ref) => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handleActivate = (id) => {
    setActiveVideoId(id);
  };

  const ejercicios = [
    {
      id: 1,
      videoid: "https://www.youtube.com/embed/X34SBfiT7xo",
      thumbnail: "X34SBfiT7xo",
      title: "Burpees",
      description: "Ejercicio de cuerpo completo que combina una sentadilla, una plancha y un salto explosivo.",
    },
    {
      id: 2,
      videoid: "https://www.youtube.com/embed/toNix_GmYOQ",
      thumbnail: "toNix_GmYOQ",
      title: "Mountain Climbers",
      description: "Ejercicio cardiovascular que trabaja el core, hombros y piernas.",
    },
    {
      id: 3,
      videoid: "https://www.youtube.com/embed/yUx7svy1Ris",
      thumbnail: "yUx7svy1Ris",
      title: "Jump Squats (Sentadillas con salto)",
      description: "Mejora la fuerza de las piernas y la potencia explosiva.",
    },
    {
      id: 4,
      videoid: "https://www.youtube.com/embed/E8hsqqR86HI",
      thumbnail: "E8hsqqR86HI",
      title: "Sprints en el lugar",
      description: "Ejercicio de alta intensidad para mejorar la resistencia cardiovascular.",
    },
    {
      id: 5,
      videoid: "https://www.youtube.com/embed/DbWxZIfyTAg",
      thumbnail: "DbWxZIfyTAg",
      title: "Jumping Jacks",
      description: "Movimientos simples pero efectivos para aumentar la frecuencia cardíaca.",
    },
    {
      id: 6,
      videoid: "https://www.youtube.com/embed/8Mzm52VdXkM",
      thumbnail: "8Mzm52VdXkM",
      title: "High Knees (Rodillas altas)",
      description: "Aumenta la frecuencia cardíaca y mejora la coordinación.",
    },
    {
      id: 7,
      videoid: "https://www.youtube.com/embed/h8brLKSN1AA",
      thumbnail: "h8brLKSN1AA",
      title: "Skaters (Patinadores laterales)",
      description: "Mejora el equilibrio y la estabilidad lateral, además de la resistencia cardiovascular.",
    },
    {
      id: 8,
      videoid: "https://www.youtube.com/embed/WtoX_-KCevs",
      thumbnail: "WtoX_-KCevs",
      title: "Tuck Jumps (Saltos con rodillas al pecho)",
      description: "Desarrolla la potencia de las piernas y el core.",
    },
    {
      id: 9,
      videoid: "https://www.youtube.com/embed/PR9nHQXCZMo",
      thumbnail: "PR9nHQXCZMo",
      title: "Plank Jacks",
      description: "Una combinación de plancha y jumping jacks que trabaja el core y mejora el acondicionamiento cardiovascular.",
    },
    {
      id: 10,
      videoid: "https://www.youtube.com/embed/SSeO5EkHiL8",
      thumbnail: "SSeO5EkHiL8",
      title: "Kettlebell Swings (con alta intensidad)",
      description: "Un ejercicio dinámico que fortalece los glúteos, la espalda y los hombros mientras aumenta la frecuencia cardíaca.",
    },
  ];

  return (
    <div className='main-calistenia' ref={ref}>
      <BannerSmall
        src={'/img-icon/icon-hiit.webp'}
        alt={'Entrenamiento HIIT'}
        h1={'Entrenamiento HIIT'}
        h2={'¿Qué es el HIIT (High-Intensity Interval Training)?'}
        p={"El HIIT es un método de entrenamiento que combina intervalos de ejercicios de alta intensidad con períodos de descanso o baja intensidad, mejorando la capacidad cardiovascular y quemando grasa en poco tiempo."}
      />

      <h2 className='h2-infocalistenia'>Ejercicios de HIIT</h2>

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

export default Infohiit;
