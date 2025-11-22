import React, { forwardRef, useState } from 'react';
import VideoCard from './card-calistenia';
import BannerSmall from './banner-disciplinas.jsx';

const Infospinning = forwardRef((props, ref) => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handleActivate = (id) => {
    setActiveVideoId(id);
  };

  const ejercicios = [
    {
      id: 1,
      videoid: "https://www.youtube.com/embed/jlHOotjWK_w",
      thumbnail: "jlHOotjWK_w",
      title: "Spinning para Principiantes",
      description: "Clase de 30 minutos ideal para quienes se inician en el spinning. Mejora la resistencia cardiovascular y tonifica las piernas."
    },
    {
      id: 2,
      videoid: "https://www.youtube.com/embed/Zj_XNkNw7Ow",
      thumbnail: "Zj_XNkNw7Ow",
      title: "Ciclo Indoor Intenso",
      description: "Sesión corta pero intensa de 25 minutos enfocada en quemar calorías y fortalecer el tren inferior."
    },
    {
      id: 3,
      videoid: "https://www.youtube.com/embed/ofN2RNPWn54",
      thumbnail: "ofN2RNPWn54",
      title: "Clase de Cycling de 30 Minutos",
      description: "Entrenamiento de 30 minutos que combina intervalos de alta y baja intensidad para mejorar la resistencia."
    },
    {
      id: 4,
      videoid: "https://www.youtube.com/embed/8sUJgDEfaR0",
      thumbnail: "8sUJgDEfaR0",
      title: "Ciclo Indoor Quemagrasas",
      description: "Clase completa de 40 minutos diseñada para maximizar la quema de grasa y mejorar la capacidad cardiovascular."
    },
    {
      id: 5,
      videoid: "https://www.youtube.com/embed/gHgnRZyFC1g",
      thumbnail: "gHgnRZyFC1g",
      title: "Spinning Tabata de 30 Minutos",
      description: "Sesión basada en el método Tabata para quemar grasa y aumentar la resistencia en poco tiempo."
    },
    {
      id: 6,
      videoid: "https://www.youtube.com/embed/DPbwDqWUQwA",
      thumbnail: "DPbwDqWUQwA",
      title: "Clase Completa de Spinning de 45 Minutos",
      description: "Entrenamiento completo que incluye calentamiento, fase principal y enfriamiento, ideal para una experiencia completa de spinning."
    },
    {
      id: 7,
      videoid: "https://www.youtube.com/embed/nkjBMQuEgkk",
      thumbnail: "nkjBMQuEgkk",
      title: "Reto de 45 Minutos de Ciclo Indoor",
      description: "Desafío de 45 minutos que combina diferentes técnicas y ritmos para mejorar la resistencia y fuerza."
    },
    {
      id: 8,
      videoid: "https://www.youtube.com/embed/Myv_74O4RfA",
      thumbnail: "Myv_74O4RfA",
      title: "Entrenamiento Completo de Spinning",
      description: "Clase completa que te permite entrenar y disfrutar al mismo tiempo, enfocada en mejorar la resistencia y tonificar el cuerpo."
    },
    {
      id: 9,
      videoid: "https://www.youtube.com/embed/LKP-eo8pmzM",
      thumbnail: "LKP-eo8pmzM",
      title: "Spinning HIIT 2025",
      description: "La mejor clase de spinning del 2025 con entrenamiento HIIT para maximizar la quema de calorías y mejorar la resistencia."
    },
    {
      id: 10,
      videoid: "https://www.youtube.com/embed/z74jRmdfBOo",
      thumbnail: "z74jRmdfBOo",
      title: "Quema de Grasa en Spinning",
      description: "Rutinas enfocadas en maximizar la quema de grasa mediante sesiones de ciclismo indoor de intensidad moderada a alta."
    }
  ];

  return (
    <div className='main-calistenia' ref={ref}>
      <BannerSmall
        src={'/img-icon/icon-spinning.webp'}
        alt={'Spinning'}
        h1={'Spinning'}
        h2={'¿Qué es el Spinning?'}
        p={"El Spinning es una modalidad de ejercicio cardiovascular que se realiza en bicicletas estáticas, diseñada para simular el ciclismo en diferentes terrenos y con variaciones de intensidad. Este entrenamiento grupal se centra en mejorar la resistencia cardiovascular y tonificar los músculos de las piernas."}
      />

      <h2 className='h2-infocalistenia'>Ejercicios de Spinning</h2>

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

export default Infospinning;
