import React, { forwardRef, useState } from 'react';
import VideoCard from './card-calistenia';
import BannerSmall from './banner-disciplinas.jsx';

const Infoaerobics = forwardRef((props, ref) => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handleActivate = (id) => {
    setActiveVideoId(id);
  };

  const ejercicios = [
    {
      id: 1,
      videoid: "https://www.youtube.com/embed/OKHArq3Ppe8",
      thumbnail: "OKHArq3Ppe8",
      title: "Marcha en el sitio (Marching in Place)",
      description: "Es un ejercicio básico que simula caminar en el lugar mientras se levantan las rodillas y se mueven los brazos."
    },
    {
      id: 2,
      videoid: "https://www.youtube.com/embed/nZEWbDbmuHQ",
      thumbnail: "nZEWbDbmuHQ",
      title: "Step Touch",
      description: "Este ejercicio implica moverse lateralmente mientras se tocan los pies en cada paso."
    },
    {
      id: 3,
      videoid: "https://www.youtube.com/embed/ZiT33JKydL4",
      thumbnail: "ZiT33JKydL4",
      title: "Grapevine",
      description: "Un movimiento más dinámico que involucra un patrón lateral de pasos cruzados."
    },
    {
      id: 4,
      videoid: "https://www.youtube.com/embed/8heqbm8UA1s",
      thumbnail: "8heqbm8UA1s",
      title: "Jumping Jacks",
      description: "Un ejercicio clásico que combina saltos con movimientos de brazos y piernas para elevar la frecuencia cardíaca."
    },
    {
      id: 5,
      videoid: "https://www.youtube.com/embed/13f7QuD7E1U",
      thumbnail: "13f7QuD7E1U",
      title: "Rodillas altas (High Knees)",
      description: "Involucra levantar las rodillas de manera explosiva mientras se corre en el lugar."
    },
    {
      id: 6,
      videoid: "https://www.youtube.com/embed/tZTqpnRyCyY",
      thumbnail: "tZTqpnRyCyY",
      title: "Tijeras (Scissor Jumps)",
      description: "Un ejercicio de cardio que trabaja los glúteos y los cuádriceps al cambiar de pierna rápidamente."
    },
    {
      id: 7,
      videoid: "https://www.youtube.com/embed/DaXf9_gbOpU",
      thumbnail: "DaXf9_gbOpU",
      title: "Salto de cuerda (Jump Rope)",
      description: "Un ejercicio cardiovascular excelente que trabaja piernas, brazos y mejora la coordinación."
    },
    {
      id: 8,
      videoid: "https://www.youtube.com/embed/OKHArq3Ppe8",
      thumbnail: "OKHArq3Ppe8",
      title: "Toques al suelo (Floor Touches)",
      description: "Un ejercicio que mejora la movilidad y fortalece los músculos de las piernas."
    },
    {
      id: 9,
      videoid: "https://www.youtube.com/embed/nZEWbDbmuHQ",
      thumbnail: "nZEWbDbmuHQ",
      title: "Golpes de puño (Punches)",
      description: "Este ejercicio mejora la coordinación, fortalece el core y aumenta el ritmo cardíaco."
    },
    {
      id: 10,
      videoid: "https://www.youtube.com/embed/ZiT33JKydL4",
      thumbnail: "ZiT33JKydL4",
      title: "Rodillas al pecho en el suelo (Mountain Climbers)",
      description: "Un ejercicio de cuerpo completo que mejora la resistencia cardiovascular y fortalece el core."
    }
  ];

  return (
    <div className='main-calistenia' ref={ref}>
      <BannerSmall
        src={'/img-icon/icon-aerobics.webp'}
        alt={'Aeróbics'}
        h1={'Aeróbics'}
        h2={'¿Qué es el Aeróbics?'}
        p={"El aeróbics es una forma de ejercicio cardiovascular que se realiza generalmente en grupo y al ritmo de música animada. Su objetivo principal es mejorar la resistencia cardiovascular, aumentar la quema de calorías y fortalecer los músculos a través de movimientos repetitivos que involucran grandes grupos musculares."}
      />

      <h2 className='h2-infoaerobics'>Ejercicios clásicos en el Aeróbics</h2>

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

export default Infoaerobics;
