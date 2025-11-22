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
            description: "Las flexiones son un ejercicio de peso corporal que se centra en el desarrollo de la fuerza del tren superior, especialmente el pecho, los tríceps y los hombros. Se realizan apoyando las manos en el suelo a la altura del pecho y extendiendo las piernas hacia atrás, manteniendo el cuerpo en una línea recta. Desde esta posición, se flexionan los codos para bajar el pecho hacia el suelo y luego se extienden los brazos para volver a la posición inicial."
        },
        {
            id: 2,
            videoid: "https://www.youtube.com/embed/514akP5ueQk",
            thumbnail: "514akP5ueQk",
            title: "Dominadas (Pull-Ups):",
            description: "Las dominadas son un ejercicio que se realiza colgándose de una barra fija con las palmas de las manos mirando hacia adelante (agarre prono) o hacia atrás (agarre supino). Desde esta posición, se tira del cuerpo hacia arriba hasta que la barbilla pase por encima de la barra, trabajando principalmente la espalda, los bíceps y los músculos del core."
        },
        {
            id: 3,
            videoid: "https://www.youtube.com/embed/BjixzWEw4EY?start=200",
            thumbnail: "BjixzWEw4EY",
            title: "Sentadillas (Squats):",
            description: "Las sentadillas son un ejercicio fundamental para fortalecer las piernas, incluyendo los cuádriceps, los isquiotibiales y los glúteos. Se realizan con los pies separados a la altura de los hombros y las manos extendidas al frente o detrás de la cabeza. Desde esta posición, se flexionan las rodillas y las caderas, bajando los glúteos hacia el suelo como si se fuera a sentar, y luego se vuelve a la posición de pie."
        },
        {
            id: 4,
            videoid: "https://www.youtube.com/embed/fmHg90mpviA",
            thumbnail: "fmHg90mpviA",
            title: "Fondos en Paralelas (Dips):",
            description: "Los fondos en paralelas son un ejercicio que se realiza utilizando barras paralelas, y se enfoca en fortalecer los músculos del pecho, los tríceps y los hombros."
        },
        {
            id: 5,
            videoid: "https://www.youtube.com/embed/Yec1nAMGRqU",
            thumbnail: "Yec1nAMGRqU",
            title: "Abdominales (Crunches):",
            description: "Los crunches son un ejercicio abdominal diseñado para fortalecer los músculos del recto abdominal. Se realizan acostado sobre la espalda con las rodillas flexionadas y los pies apoyados en el suelo. Desde esta posición, se levantan los hombros y la parte superior de la espalda hacia las rodillas, utilizando los músculos abdominales."
        },
        {
            id: 6,
            videoid: "https://www.youtube.com/embed/SEdzWP82C6c",
            thumbnail: "SEdzWP82C6c",
            title: "Muscle-Up:",
            description: "Una combinación de dominada y fondo en barra fija, donde se pasa de la posición de colgado a una posición de empuje sobre la barra."
        },
        {
            id: 7,
            videoid: "https://www.youtube.com/embed/bDUq1YfdsBU",
            thumbnail: "bDUq1YfdsBU",
            title: "Planche:",
            description: "Un ejercicio en el que se sostiene el cuerpo paralelo al suelo solo con las manos, sin que los pies toquen el suelo. Requiere mucha fuerza en los hombros, brazos y core."
        },
        {
            id: 8,
            videoid: "https://www.youtube.com/embed/i0W5ASFDbkI",
            thumbnail: "i0W5ASFDbkI",
            title: "Front Lever:",
            description: "El cuerpo se sostiene horizontalmente con la espalda hacia el suelo, colgado de una barra fija. Es un gran desafío para la fuerza del core y la espalda."
        },
        {
            id: 9,
            videoid: "https://www.youtube.com/embed/_COSTGc-qf8",
            thumbnail: "_COSTGc-qf8",
            title: "Back Lever:",
            description: "Similar al front lever, pero el cuerpo se mantiene horizontal con el pecho hacia el suelo. Es un ejercicio avanzado para la espalda, los hombros y el core."
        },
        {
            id: 10,
            videoid: "https://www.youtube.com/embed/Qw_pffgAeW4",
            thumbnail: "Qw_pffgAeW4",
            title: "Human Flag:",
            description: "Un ejercicio en el que el cuerpo se sostiene en posición horizontal agarrando un poste o una barra vertical con las manos. Requiere una combinación de fuerza, estabilidad y control."
        },
        {
            id: 11,
            videoid: "https://www.youtube.com/embed/hdx8-jKMOZ8",
            thumbnail: "hdx8-jKMOZ8",
            title: "Pistol Squat (Sentadilla a una pierna):",
            description: "Una sentadilla profunda realizada con una sola pierna, manteniendo la otra pierna extendida hacia adelante. Desarrolla fuerza en las piernas y mejora el equilibrio."
        },
        {
            id: 12,
            videoid: "https://www.youtube.com/embed/yTUDQKmJOKw",
            thumbnail: "yTUDQKmJOKw",
            title: "One-Arm Pull-Up:",
            description: "Una dominada realizada con un solo brazo. Es un ejercicio muy avanzado que requiere una gran fuerza en el brazo y el core."
        },
        {
            id: 13,
            videoid: "https://www.youtube.com/embed/i0D9XCh_BiA",
            thumbnail: "i0D9XCh_BiA",
            title: "One-Arm Push-Up:",
            description: "Una flexión de brazos realizada con un solo brazo. Fortalece el pecho, el tríceps y los músculos estabilizadores del core."
        },
        {
            id: 14,
            videoid: "https://www.youtube.com/embed/9iMXZA92Ud0",
            thumbnail: "9iMXZA92Ud0",
            title: "Handstand Push-Up (Flexión en pino):",
            description: "Una flexión realizada mientras se sostiene un pino (handstand). Desarrolla fuerza en los hombros y los brazos, así como equilibrio."
        },
        {
            id: 15,
            videoid: "https://www.youtube.com/embed/_9TtEekVvDI",
            thumbnail: "_9TtEekVvDI",
            title: "L-Sit:",
            description: "Sentado en el aire, con las piernas extendidas hacia adelante formando una 'L', sosteniéndose solo con las manos sobre el suelo o barras paralelas. Fortalece el core y los flexores de la cadera."
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
