import React, { forwardRef, useState } from 'react';
import VideoCard from './card-calistenia';
import BannerSmall from './banner-disciplinas.jsx';

const Infoyoga = forwardRef((props, ref) => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handleActivate = (id) => {
    setActiveVideoId(id);
  };

  const ejercicios = [
    {
      "id": 1,
      "videoid": "https://www.youtube.com/embed/OPe26Wd-PfM",
      "thumbnail": "OPe26Wd-PfM",
      "title": "Perro hacia abajo (Adho Mukha Svanasana)",
      "description": "Estira todo el cuerpo, mejora la flexibilidad de la columna y los isquiotibiales. Forma una V invertida con el cuerpo."
    },
    {
      "id": 2,
      "videoid": "https://www.youtube.com/embed/KaTv00w1hqk",
      "thumbnail": "KaTv00w1hqk",
      "title": "Guerrero II (Virabhadrasana II)",
      "description": "Fortalece las piernas, abre las caderas y mejora el equilibrio. Mantén los brazos paralelos y mira hacia el frente."
    },
    {
      "id": 3,
      "videoid": "https://www.youtube.com/embed/yVE4XXFFO70",
      "thumbnail": "yVE4XXFFO70",
      "title": "Árbol (Vrksasana)",
      "description": "Mejora el equilibrio y la concentración. Mantén el pie en el muslo opuesto y eleva los brazos al cielo."
    },
    {
      "id": 4,
      "videoid": "https://www.youtube.com/embed/2MJGg-dUKh0",
      "thumbnail": "2MJGg-dUKh0",
      "title": "Postura del niño (Balasana)",
      "description": "Relaja la espalda, caderas y piernas. Ideal para recuperar el aliento y estirar suavemente."
    },
    {
      "id": 5,
      "videoid": "https://www.youtube.com/embed/Ov65nNSWrfw",
      "thumbnail": "Ov65nNSWrfw",
      "title": "Gato y vaca (Marjaryasana/Bitilasana)",
      "description": "Ayuda a movilizar la columna vertebral con movimientos suaves de flexión y extensión."
    },
    {
      "id": 6,
      "videoid": "https://www.youtube.com/embed/JY9TLhKIQdE",
      "thumbnail": "JY9TLhKIQdE",
      "title": "Puente (Setu Bandhasana)",
      "description": "Fortalece la espalda y los glúteos, mientras abre el pecho. Ideal para estirar después de estar sentado."
    },
    {
      "id": 7,
      "videoid": "https://www.youtube.com/embed/MEgYDfwMV_w",
      "thumbnail": "MEgYDfwMV_w",
      "title": "Cobra (Bhujangasana)",
      "description": "Estira el torso y fortalece la espalda baja. Abre el pecho y mejora la postura."
    },
    {
      "id": 8,
      "videoid": "https://www.youtube.com/embed/KaTv00w1hqk",
      "thumbnail": "KaTv00w1hqk",
      "title": "Triángulo (Trikonasana)",
      "description": "Estira el torso, caderas y piernas. Mejora la alineación y la estabilidad general."
    },
    {
      "id": 9,
      "videoid": "https://www.youtube.com/embed/MEgYDfwMV_w",
      "thumbnail": "MEgYDfwMV_w",
      "title": "Pez (Matsyasana)",
      "description": "Abre el pecho y alivia la tensión en el cuello y hombros. Ideal para contrarrestar malas posturas."
    },
    {
      "id": 10,
      "videoid": "https://www.youtube.com/embed/T8sgVyF4Ux4",
      "thumbnail": "T8sgVyF4Ux4",
      "title": "Pinza (Paschimottanasana)",
      "description": "Estiramiento profundo de la espalda y piernas. Calma el sistema nervioso y mejora la concentración."
    },
    {
      "id": 11,
      "videoid": "https://www.youtube.com/embed/1VYlOKUdylM",
      "thumbnail": "1VYlOKUdylM",
      "title": "Savasana (Postura del cadáver)",
      "description": "Promueve una relajación profunda y reduce el estrés. Se realiza acostado boca arriba con el cuerpo completamente relajado."
    },
    {
      "id": 12,
      "videoid": "https://www.youtube.com/embed/L4IJAsgK44c",
      "thumbnail": "L4IJAsgK44c",
      "title": "Utkatasana (Postura de la silla)",
      "description": "Fortalece las piernas y la espalda, y mejora el equilibrio. Simula la acción de sentarse en una silla imaginaria."
    },
    {
      "id": 13,
      "videoid": "https://www.youtube.com/embed/8KsyQvwi85Q",
      "thumbnail": "8KsyQvwi85Q",
      "title": "Navasana (Postura del barco)",
      "description": "Fortalece el núcleo abdominal y mejora el equilibrio. Se realiza sentándose y levantando las piernas formando una 'V' con el cuerpo."
    },
    {
      "id": 14,
      "videoid": "https://www.youtube.com/embed/kQz6dOiRWBs",
      "thumbnail": "kQz6dOiRWBs",
      "title": "Dandasana (Postura del bastón)",
      "description": "Mejora la postura y fortalece los músculos de la espalda. Se realiza sentándose con las piernas extendidas y la espalda recta."
    }
  ]


  return (
    <div className='main-calistenia' ref={ref}>
      <BannerSmall
        src={'/img-icon/icon-yoga.webp'}
        alt={'Yoga'}
        h1={'Yoga'}
        h2={'¿Qué es el Yoga?'}
        p={"El yoga es una disciplina física y mental originada en la India que combina posturas, respiración y meditación para mejorar la flexibilidad, fuerza, concentración y bienestar emocional."}
      />

      <h2 className='h2-infocalistenia'>Posturas Clásicas de Yoga</h2>

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

export default Infoyoga;
