import React, { forwardRef, useState } from 'react';
import VideoCard from './card-calistenia';
import BannerSmall from './banner-disciplinas.jsx';

const InfoCrossfit = forwardRef((props, ref) => {
    const [activeVideoId, setActiveVideoId] = useState(null);

    const handleActivate = (id) => {
        setActiveVideoId(id);
    };

    const ejercicios = [
        {
            id: 1,
            videoid: "https://www.youtube.com/embed/5yWaNOvgFCM",
            thumbnail: "5yWaNOvgFCM",
            title: "Shoulder Press:",
            description: "Ejercicio fundamental para fuerza de hombros y brazos. Sin impulso de piernas, solo trabajo de la parte superior del cuerpo."
        },
        {
            id: 2,
            videoid: "https://www.youtube.com/embed/ley5jomnATA",
            thumbnail: "ley5jomnATA",
            title: "Thrusters:",
            description: "Combinación de sentadilla frontal + press por encima de la cabeza. Mejora fuerza y resistencia cardiovascular."
        },
        {
            id: 3,
            videoid: "https://www.youtube.com/embed/JbSiXKYepIY",
            thumbnail: "JbSiXKYepIY",
            title: "Push Press:",
            description: "Press con ligero impulso de piernas. Movimiento explosivo desde los hombros hacia arriba."
        },
        {
            id: 4,
            videoid: "https://www.youtube.com/embed/TaUoeOXuimM",
            thumbnail: "TaUoeOXuimM",
            title: "Burpees:",
            description: "Flexión + salto explosivo. Trabaja resistencia y fuerza general."
        },
        {
            id: 5,
            videoid: "https://www.youtube.com/embed/1ZXobu7JvvE",
            thumbnail: "1ZXobu7JvvE",
            title: "Deadlifts (Peso muerto):",
            description: "Levantamiento desde el suelo. Trabaja glúteos, isquiotibiales, espalda baja y core."
        },
        {
            id: 6,
            videoid: "https://www.youtube.com/embed/CNQOAz_Miv4",
            thumbnail: "CNQOAz_Miv4",
            title: "Battle Ropes:",
            description: "Ejercicio explosivo con cuerdas. Mejora resistencia, potencia y coordinación."
        },
        {
            id: 7,
            videoid: "https://www.youtube.com/embed/WPD8sU93bbo",
            thumbnail: "WPD8sU93bbo",
            title: "Front Squats:",
            description: "Sentadilla con barra al frente. Fortalece piernas, glúteos y core."
        },
        {
            id: 8,
            videoid: "https://www.youtube.com/embed/SEdzWP82C6c",
            thumbnail: "SEdzWP82C6c",
            title: "Muscle-Up:",
            description: "Dominada + fondo en barra fija. Movimiento avanzado de fuerza y técnica."
        },
        {
            id: 9,
            videoid: "https://www.youtube.com/embed/Blrj4PSY6GQ",
            thumbnail: "Blrj4PSY6GQ",
            title: "Clean:",
            description: "Llevar la barra del suelo a los hombros en un solo movimiento. Fuerza y técnica."
        },
        {
            id: 10,
            videoid: "https://www.youtube.com/embed/NYLOoumdJ1Y",
            thumbnail: "NYLOoumdJ1Y",
            title: "Box Jumps (Saltos en caja):",
            description: "Saltos sobre caja. Mejora explosividad y potencia de piernas."
        },
        {
            id: 11,
            videoid: "https://www.youtube.com/embed/mKDIuUbH94Q",
            thumbnail: "mKDIuUbH94Q",
            title: "Kettlebell Swings:",
            description: "Balanceo de pesa rusa. Trabaja glúteos, espalda y core."
        },
        {
            id: 12,
            videoid: "https://www.youtube.com/embed/CKtBasC1aDo",
            thumbnail: "CKtBasC1aDo",
            title: "Wall Balls:",
            description: "Lanzamiento de balón medicinal desde sentadilla. Cardio + fuerza de piernas y hombros."
        },
        {
            id: 13,
            videoid: "https://www.youtube.com/embed/jnNYAuS5KGU",
            thumbnail: "jnNYAuS5KGU",
            title: "Snatch (Arrancada):",
            description: "Levantar barra desde el suelo hasta sobre la cabeza en un solo movimiento. Fuerza explosiva y coordinación."
        },
        {
            id: 14,
            videoid: "https://www.youtube.com/embed/q6yacGJWMNg",
            thumbnail: "q6yacGJWMNg",
            title: "Clean and Jerk:",
            description: "Combina clean (a los hombros) + jerk (por encima de la cabeza). Levantamiento olímpico completo."
        },
        {
            id: 15,
            videoid: "https://www.youtube.com/embed/82jNjDS19lg",
            thumbnail: "82jNjDS19lg",
            title: "Double Unders:",
            description: "Salto de cuerda doble. Trabaja agilidad, velocidad y resistencia cardiovascular."
        }
    ];

    return (
        <div className='main-calistenia' ref={ref}>
            <BannerSmall
                src={'/img-icon/icon-calistenia.webp'}
                alt={'Calistenia'}
                h1={'Crossfit'}
                h2={'¿Que es el Crossfit?'}
                p={' El CrossFit es un programa de acondicionamiento físico que combina ejercicios de levantamiento de pesas, gimnasia, y cardio de alta intensidad. Se enfoca en movimientos funcionales y variados, realizados a alta intensidad para mejorar la fuerza, resistencia, velocidad, agilidad, y equilibrio.'}
            />


            <h2 className='h2-infocalistenia'>Ejercicios clásicos en el CrossFit</h2>

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

export default InfoCrossfit;
