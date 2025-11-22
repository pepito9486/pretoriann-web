import React, { forwardRef, useState } from "react";
import VideoCard from './card-calistenia';
import BannerSmall from './banner-disciplinas.jsx';

const Infopilates = forwardRef((props, ref) => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handleActivate = (id) => {
    setActiveVideoId(id);
  };

  const ejercicios = [
    {
      "id": 1,
      "videoid": "https://www.youtube.com/embed/9mlone4NObI",
      "thumbnail": "9mlone4NObI",
      "title": "Hundred (Cien)",
      "description": "Ejercicio clásico de Pilates diseñado para activar el core y mejorar la capacidad cardiovascular."
    },
    {
      "id": 2,
      "videoid": "https://www.youtube.com/embed/PGnibcCcAUE",
      "thumbnail": "PGnibcCcAUE",
      "title": "Roll-Up (Enrollamiento)",
      "description": "Estira la columna vertebral y fortalece los abdominales."
    },
    {
      "id": 3,
      "videoid": "https://www.youtube.com/embed/RZqtVL6K8DM",
      "thumbnail": "RZqtVL6K8DM",
      "title": "Leg Circles (Círculos de pierna)",
      "description": "Trabaja el control del core y mejora la movilidad de las caderas."
    },
    {
      "id": 4,
      "videoid": "https://www.youtube.com/embed/Ad4lgW4ieAM",
      "thumbnail": "Ad4lgW4ieAM",
      "title": "Single-Leg Stretch",
      "description": "Fortalece los abdominales y mejora el control del core."
    },
    {
      "id": 5,
      "videoid": "https://www.youtube.com/embed/1Od8KrR6LQo",
      "thumbnail": "1Od8KrR6LQo",
      "title": "Plank (Plancha)",
      "description": "Fortalece el core, los hombros y los glúteos."
    },
    {
      "id": 6,
      "videoid": "https://www.youtube.com/embed/fuwzt4d7FuY",
      "thumbnail": "fuwzt4d7FuY",
      "title": "Double-Leg Stretch",
      "description": "Desafía la estabilidad del core y fortalece los abdominales."
    },
    {
      "id": 7,
      "videoid": "https://www.youtube.com/embed/H46PeYhAuA4",
      "thumbnail": "H46PeYhAuA4",
      "title": "Swan Dive",
      "description": "Fortalece la espalda y mejora la movilidad de la columna."
    },
    {
      "id": 8,
      "videoid": "https://www.youtube.com/embed/RC6qOEZdRU8",
      "thumbnail": "RC6qOEZdRU8",
      "title": "Pelvic Curl",
      "description": "Activa glúteos, core y músculos de la espalda baja."
    },
    {
      "id": 9,
      "videoid": "https://www.youtube.com/embed/fQiCxMwfjX0",
      "thumbnail": "fQiCxMwfjX0",
      "title": "Criss-Cross",
      "description": "Fortalece los oblicuos y mejora la estabilidad del core."
    },
    {
      "id": 10,
      "videoid": "https://www.youtube.com/embed/VKTvU4vQNTs",
      "thumbnail": "VKTvU4vQNTs",
      "title": "Side Leg Lifts",
      "description": "Trabaja abductores y estabilidad de las caderas."
    },
    {
      "id": 11,
      "videoid": "https://www.youtube.com/embed/9WFOlfrqWo8",
      "thumbnail": "9WFOlfrqWo8",
      "title": "Teaser",
      "description": "Ejercicio avanzado que fortalece el core y mejora el equilibrio."
    },
    {
      "id": 12,
      "videoid": "https://www.youtube.com/embed/XZGuNaEV-nM",
      "thumbnail": "XZGuNaEV-nM",
      "title": "Spine Stretch Forward",
      "description": "Estira la columna y mejora la flexibilidad de la espalda y los isquiotibiales."
    },
    {
      "id": 13,
      "videoid": "https://www.youtube.com/embed/Sb0SG1cXgEY",
      "thumbnail": "Sb0SG1cXgEY",
      "title": "Saw",
      "description": "Fortalece los oblicuos y mejora la flexibilidad de la columna."
    },
    {
      "id": 14,
      "videoid": "https://www.youtube.com/embed/QFv_Fex3Mko",
      "thumbnail": "QFv_Fex3Mko",
      "title": "Shoulder Bridge",
      "description": "Fortalece glúteos y músculos de la espalda baja, mejorando la estabilidad pélvica."
    }
  ]


  return (
    <div className="main-calistenia" ref={ref}>
      <BannerSmall
        src={'/img-icon/icon-pilates.webp'}
        alt={'Pilates'}
        h1={'Pilates'}
        h2={'¿Qué es el Pilates?'}
        p={"El Pilates es un método de entrenamiento físico que se centra en el fortalecimiento del core, mejora la flexibilidad, coordinación y equilibrio. Es ideal para todas las edades gracias a su bajo impacto."}
      />

      <h2 className='h2-infocalistenia'>Ejercicios Clásicos de Pilates</h2>

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

export default Infopilates;
