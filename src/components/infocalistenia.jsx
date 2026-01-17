import React, { forwardRef, useState } from 'react';
import VideoCard from './card-calistenia';
import BannerPorEquipo from "../components/bannerPorEquipo";
import BannerSmall from "./banner-disciplinas.jsx";

const Infocalistenia = forwardRef((props, ref) => {
    const [activeVideoId, setActiveVideoId] = useState(null);

    const handleActivate = (id) => {
        setActiveVideoId(id);
    };

    const ejercicios = [
        {
            id: 1,
            videoid: "https://www.youtube.com/embed/wLGn8XmLeEM?start=490",
            thumbnail: "wLGn8XmLeEM",
            title: "Flexiones (Push-Ups):",
            description: "Ejercicio básico para ganar fuerza y control. Trabaja principalmente pectorales, tríceps y deltoides anterior, con una gran activación del core (abdomen y zona lumbar) para mantener el cuerpo alineado. Perfectas para mejorar la estabilidad del hombro y la resistencia muscular sin necesidad de material."
        },
        {
            id: 2,
            videoid: "https://www.youtube.com/embed/514akP5ueQk",
            thumbnail: "514akP5ueQk",
            title: "Dominadas (Pull-Ups):",
            description: "Ejercicio clave para desarrollar una espalda fuerte y ancha. Trabaja dorsales, romboides y trapecio, además de bíceps y antebrazos por el agarre. El core se activa para evitar el balanceo y mantener el cuerpo estable. Ideal para fuerza de tracción y control corporal."
        },
        {
            id: 3,
            videoid: "https://www.youtube.com/embed/BjixzWEw4EY?start=200",
            thumbnail: "BjixzWEw4EY",
            title: "Sentadillas (Squats):",
            description: "Uno de los mejores ejercicios para construir piernas y glúteos. Trabaja cuádriceps, glúteo mayor e isquiotibiales, con apoyo de abdomen y zona lumbar para estabilizar el tronco. Mejora fuerza, movilidad de cadera/rodilla y potencia, siendo base para saltos y rendimiento general."
        },
        {
            id: 4,
            videoid: "https://www.youtube.com/embed/fmHg90mpviA",
            thumbnail: "fmHg90mpviA",
            title: "Fondos en Paralelas (Dips):",
            description: "Ejercicio potente para empuje y masa en el tren superior. Trabaja tríceps como protagonista, junto a pectoral inferior y deltoides anterior. También exige estabilización de escápulas y core para controlar la bajada y la subida. Muy efectivo para fuerza y definición de brazos."
        },
        {
            id: 5,
            videoid: "https://www.youtube.com/embed/Yec1nAMGRqU",
            thumbnail: "Yec1nAMGRqU",
            title: "Abdominales (Crunches):",
            description: "Ejercicio directo para fortalecer el abdomen, sobre todo el recto abdominal. También participa el transverso al estabilizar y mantener tensión. Sirve para mejorar la resistencia del core y el control del tronco, siempre cuidando la técnica: elevar el torso sin tirar del cuello y controlando la bajada."
        },
        {
            id: 6,
            videoid: "https://www.youtube.com/embed/SEdzWP82C6c",
            thumbnail: "SEdzWP82C6c",
            title: "Muscle-Up:",
            description: "Movimiento avanzado que combina tracción y empuje en un solo gesto. Trabaja dorsales, bíceps y antebrazos al subir, y tríceps, pecho y hombros al finalizar arriba. El core es clave para la transición y el control del balanceo. Ideal para potencia, coordinación y dominio corporal."
        },
        {
            id: 7,
            videoid: "https://www.youtube.com/embed/bDUq1YfdsBU",
            thumbnail: "bDUq1YfdsBU",
            title: "Planche:",
            description: "Isométrico avanzado que desarrolla fuerza brutal de empuje y estabilidad. Trabaja hombros (deltoides anterior), pectoral, tríceps y serrato anterior, con una activación intensa de abdomen y glúteos para mantener el cuerpo rígido. Mejora control corporal y fuerza de muñecas y escápulas."
        },
        {
            id: 8,
            videoid: "https://www.youtube.com/embed/i0W5ASFDbkI",
            thumbnail: "i0W5ASFDbkI",
            title: "Front Lever:",
            description: "Isométrico de tracción que fortalece la espalda y el core como pocos. Trabaja dorsales, romboides y trapecio, además de bíceps y antebrazos por el agarre. El abdomen y la zona lumbar mantienen el cuerpo en línea para sostener la palanca. Perfecto para control y fuerza funcional."
        },
        {
            id: 9,
            videoid: "https://www.youtube.com/embed/_COSTGc-qf8",
            thumbnail: "_COSTGc-qf8",
            title: "Back Lever:",
            description: "Isométrico avanzado que exige mucha estabilidad de hombros y core. Trabaja hombros, dorsal ancho y músculos escapulares, además de bíceps y antebrazos por la sujeción. El abdomen y glúteos se activan para mantener la postura horizontal. Muy útil para control corporal y fuerza articular."
        },
        {
            id: 10,
            videoid: "https://www.youtube.com/embed/Qw_pffgAeW4",
            thumbnail: "Qw_pffgAeW4",
            title: "Human Flag:",
            description: "Ejercicio icónico de fuerza lateral y estabilidad total. Trabaja oblicuos y core en máxima tensión, junto a dorsales, hombros y serrato para sostener el cuerpo. Los brazos y antebrazos aportan fuerza de agarre y control. Excelente para estabilidad, coordinación y dominio corporal avanzado."
        },
        {
            id: 11,
            videoid: "https://www.youtube.com/embed/hdx8-jKMOZ8",
            thumbnail: "hdx8-jKMOZ8",
            title: "Pistol Squat (Sentadilla a una pierna):",
            description: "Sentadilla unilateral que mejora fuerza, equilibrio y movilidad. Trabaja cuádriceps y glúteo a alta intensidad, con apoyo de isquiotibiales y pantorrilla para estabilizar. El core mantiene el tronco firme y evita compensaciones. Muy útil para corregir desbalances y ganar control en piernas."
        },
        {
            id: 12,
            videoid: "https://www.youtube.com/embed/yTUDQKmJOKw",
            thumbnail: "yTUDQKmJOKw",
            title: "One-Arm Pull-Up:",
            description: "Dominada a un brazo: máxima fuerza de tracción. Trabaja dorsales y bíceps con una demanda enorme, además de antebrazo y agarre. El core y los oblicuos se activan para evitar rotaciones y mantener el cuerpo estable. Ejercicio avanzado ideal para fuerza pura y control total del cuerpo."
        },
        {
            id: 13,
            videoid: "https://www.youtube.com/embed/i0D9XCh_BiA",
            thumbnail: "i0D9XCh_BiA",
            title: "One-Arm Push-Up:",
            description: "Flexión a un brazo que desarrolla fuerza y estabilidad de empuje. Trabaja pectoral, tríceps y hombro, mientras el core (especialmente oblicuos) evita que el torso gire. Mejora control corporal, coordinación y fuerza unilateral. Recomendable progresar con variantes antes de intentar la completa."
        },
        {
            id: 14,
            videoid: "https://www.youtube.com/embed/9iMXZA92Ud0",
            thumbnail: "9iMXZA92Ud0",
            title: "Handstand Push-Up (Flexión en pino):",
            description: "Ejercicio avanzado para hombros y empuje vertical. Trabaja deltoides, tríceps y parte superior del pecho, con fuerte participación del core para mantener el equilibrio en el pino. También exige estabilidad de muñecas y control escapular. Ideal para ganar fuerza, potencia y control en vertical."
        },
        {
            id: 15,
            videoid: "https://www.youtube.com/embed/_9TtEekVvDI",
            thumbnail: "_9TtEekVvDI",
            title: "L-Sit:",
            description: "Isométrico excelente para core y control corporal. Trabaja recto abdominal, transverso y oblicuos, además de flexores de cadera. También participan tríceps y hombros al sostener el peso del cuerpo. Mejora estabilidad, fuerza de abdomen y resistencia, y es una base útil para movimientos más avanzados."
        }
    ];


    return (
        <div className='main-calistenia' ref={ref}>
            {/* <BannerPorEquipo titulo={'Calistenia'} img={'/img-icon/icon-calistenia.webp'} /> */}
            <BannerSmall
                src={'/img-icon/icon-calistenia.webp'}
                alt={'Calistenia'}
                h1={'Calistenia'}
                h2={'¿Qué es calistenia?'}
                p={" La calistenia es una forma de ejercicio físico que utiliza el peso del propio cuerpo como resistencia para desarrollar fuerza, flexibilidad, agilidad, equilibrio, coordinación y resistencia. Es una disciplina que se centra en movimientos naturales y compuestos, en lugar de usar pesas o equipos de gimnasio. "} />


            <h2 className='h2-infocalistenia'>Ejercicios clásicos en la Calistenia</h2>

            <ul>
                {/* ver index.css linea 1071 */}
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

export default Infocalistenia;
