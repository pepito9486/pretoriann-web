import React, { forwardRef, useState } from 'react';
import VideoCard from './card-calistenia';
import BannerSmall from './banner-disciplinas.jsx';

const Infocombat = forwardRef((props, ref) => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handleActivate = (id) => {
    setActiveVideoId(id);
  };

  const ejercicios = [
    {
      id: 1,
      videoid: 'https://www.youtube.com/embed/3ifoD3tafcM',
      thumbnail: '3ifoD3tafcM',
      title: 'Introducción al Body Combat',
      description: 'Aprende los movimientos básicos y la técnica adecuada para comenzar con Body Combat.',
    },
    {
      id: 2,
      videoid: 'https://www.youtube.com/embed/OWPs0jWvL-o',
      thumbnail: 'OWPs0jWvL-o',
      title: 'Rutina de Body Combat para Principiantes',
      description: 'Sigue esta rutina diseñada para quienes se inician en Body Combat, enfocada en movimientos fundamentales.',
    },
    {
      id: 3,
      videoid: 'https://www.youtube.com/embed/achNzGZqUfM',
      thumbnail: 'achNzGZqUfM',
      title: 'Entrenamiento de Body Combat en Casa',
      description: 'Realiza una sesión completa de Body Combat desde la comodidad de tu hogar con esta guía paso a paso.',
    },
    {
      id: 4,
      videoid: 'https://www.youtube.com/embed/51QnTFlpepY',
      thumbnail: '51QnTFlpepY',
      title: 'Los 10 Mejores Ejercicios de Body Combat',
      description: 'Descubre y practica los diez ejercicios más efectivos para mejorar tu técnica y resistencia en Body Combat.',
    },
    {
      id: 5,
      videoid: 'https://www.youtube.com/embed/7nms_FpBzyM',
      thumbnail: '7nms_FpBzyM',
      title: 'Clase Completa de Body Combat con Dave Cross',
      description: 'Sigue esta clase completa impartida por el instructor Dave Cross para una experiencia auténtica de Body Combat.',
    },
    {
      id: 6,
      videoid: 'https://www.youtube.com/embed/UyyJy9m82po',
      thumbnail: 'UyyJy9m82po',
      title: 'Entrenamiento de 15 Minutos de Body Combat',
      description: 'Un entrenamiento rápido y efectivo de 15 minutos para quemar calorías y mejorar tu resistencia.',
    },
    {
      id: 7,
      videoid: 'https://www.youtube.com/embed/NE7HvK7FUYo',
      thumbnail: 'NE7HvK7FUYo',
      title: 'Body Combat con Kris de CEM Júpiter',
      description: 'Clase completa de Body Combat impartida por la instructora Kris de CEM Júpiter.',
    },
    {
      id: 8,
      videoid: 'https://www.youtube.com/embed/YinzaXorFvY',
      thumbnail: 'YinzaXorFvY',
      title: 'Clase de Body Combat en Casa',
      description: 'Sigue esta clase de Body Combat diseñada para realizar en casa y mejorar tu condición física.',
    },
    {
      id: 9,
      videoid: 'https://www.youtube.com/embed/OspaipViY7o',
      thumbnail: 'OspaipViY7o',
      title: 'Clase de Cardio Body Combat para Quemar Grasa',
      description: 'Una sesión intensa de cardio inspirada en Body Combat para ayudarte a quemar grasa y tonificar el cuerpo.',
    },
    {
      id: 10,
      videoid: 'https://www.youtube.com/embed/6zbRQbjPdoM',
      thumbnail: '6zbRQbjPdoM',
      title: 'Entrenamiento de 20 Minutos de Body Combat',
      description: 'Entrenamiento de 20 minutos de Body Combat para realizar en casa y mejorar tu resistencia cardiovascular.',
    },
  ];

  return (
    <div className='main-calistenia' ref={ref}>
      <BannerSmall
        src={'/img-icon/icon-combat.webp'}
        alt={'Body Combat'}
        h1={'Body Combat'}
        h2={'¿Qué es el Body Combat?'}
        p={'El Body Combat es un programa de entrenamiento cardiovascular inspirado en diversas artes marciales, que combina movimientos de disciplinas como el boxeo, karate, taekwondo y muay thai, realizado al ritmo de música energética para mejorar la resistencia, fuerza y coordinación.'}
      />

      <h2 className='h2-infocalistenia'>Ejercicios de Body Combat</h2>

      <ul>
        {ejercicios.map((ejercicio) => (
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

export default Infocombat;
