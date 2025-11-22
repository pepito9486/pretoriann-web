import React, { useState, useEffect } from 'react';


const routines = [
    {
        day: 1,
        title: " Pectorales",
        exercises: [
            {
                name: "Press de banca con barra",
                series: "4",
                repetitions: "8-12",
                muscles: "Pectorales",
                image: "img-gif/dia1-press-barra.gif"
            },
            {
                name: "Press inclinado con mancuernas",
                series: "4",
                repetitions: "8-12",
                muscles: "Pectorales",
                image: "img-gif/dia1-press-inclinado-mancuernas.gif"
            },
            {
                name: "Aperturas en máquina o mancuernas",
                series: "3",
                repetitions: "12",
                muscles: "Pectorales",
                image: "img-gif/dia1-apertura-mancuernas.gif"
            },
            {
                name: "Press inclinado con barra",
                series: "4",
                repetitions: "8-12",
                muscles: "Pecho",
                image: "img-gif/dia4-press-inclinado-barra.gif"
            },
            {
                name: "Press de banca con mancuernas",
                series: "4",
                repetitions: "8-12",
                muscles: "Pecho",
                image: "img-gif/dia4-press-mancuernas.gif"
            },
            {
                name: "Aperturas inclinadas en polea",
                series: "3",
                repetitions: "12-15",
                muscles: "Pecho",
                image: "img-gif/dia4-press-inclinado-polea.gif"
            },

            {
                name: "Pull-over con mancuerna",
                series: "3",
                repetitions: "12-15",
                muscles: "Pecho",
                image: "img-gif/dia5-pull-over-mancuerna-espalda.gif"
            },

        ]
    },
    {
        day: 2,
        title: "Espalda",
        exercises: [
            {
                name: "Dominadas (libres o asistidas)",
                series: "4",
                repetitions: "8-12",
                muscles: "Espalda/Bíceps",
                image: "img-gif/dia2-dominadas.gif"
            },
            {
                name: "Remo con barra",
                series: "4",
                repetitions: "8-12",
                muscles: "Espalda",
                image: "img-gif/dia2-remo-barra.gif"
            },
            {
                name: "Jalón al pecho en polea",
                series: "3",
                repetitions: "10-12",
                muscles: "Espalda",
                image: "img-gif/dia2-jalon-polea-espalda.gif"
            },

            {
                name: "Peso muerto convencional",
                series: "4",
                repetitions: "8-12",
                muscles: "Espalda",
                image: "img-gif/dia5-peso-muerto-espalda.gif"
            },
            {
                name: "Dominadas supinas",
                series: "3",
                repetitions: "8-12",
                muscles: "Espalda/Bíceps",
                image: "img-gif/dia5-dominada-supino.gif"
            },
            {
                name: "Remo con mancuernas",
                series: "3",
                repetitions: "10-12",
                muscles: "Espalda",
                image: "img-gif/dia5-remo-mancuernas.gif"
            },

            {
                name: "Extension de espalda",
                series: "3",
                repetitions: "12-15",
                muscles: "Espalda",
                image: "../img-hipertrofia/espalda/extension-espalda.gif"
            },

            {
                name: "Remo con mancuerna a un brazo",
                series: "3",
                repetitions: "12-15",
                muscles: "Espalda",
                image: "../img-hipertrofia/espalda/remo-mancuerna-1brazo.gif"
            },

            {
                name: "Jalon al pecho a un brazo",
                series: "3",
                repetitions: "12-15",
                muscles: "Espalda",
                image: "../img-hipertrofia/espalda/jalon-pecho-1brazo.gif"
            },

        ]
    },
    {
        day: 3,
        title: "Hombros",
        exercises: [
            {
                name: "Press Arnold",
                series: "4",
                repetitions: "8-12",
                muscles: "Hombros",
                image: "img-gif/dia4-press-arnold.gif"
            },
            {
                name: "Elevaciones laterales con polea",
                series: "3",
                repetitions: "12-15",
                muscles: "Hombros",
                image: "img-gif/dia4-elevacion-lateral-polea.gif"
            },

            {
                name: "Press militar con barra",
                series: "4",
                repetitions: "8-12",
                muscles: "Hombros",
                image: "img-gif/dia1-press-militar-barra.gif"
            },


            {
                name: "Elevaciones laterales",
                series: "3",
                repetitions: "12-15",
                muscles: "Hombros",
                image: "img-gif/dia1-elevacion-lateral.gif"
            },

            {
                name: "Face pulls",
                series: "3",
                repetitions: "12-15",
                muscles: "Deltoides posterior",
                image: "img-gif/dia2-face-pull.gif"
            },

            {
                name: "elevacion frontal con barra",
                series: "3",
                repetitions: "12-15",
                muscles: "deltoides anteriores",
                image: "../img-hipertrofia/hombros/elevacion-frontal-barra.gif"
            },

            {
                name: "Frontal lateral inverso",
                series: "3",
                repetitions: "12-15",
                muscles: "Todo el hombro",
                image: "../img-hipertrofia/hombros/frontal-lateral-inverso.gif"
            },

            {
                name: "Press de hombro con mancuernas",
                series: "3",
                repetitions: "12-15",
                muscles: "deltoides anteriores",
                image: "../img-hipertrofia/hombros/press-hombro-mancuerna.gif"
            },
        ]
    },
    {
        day: 4,
        title: "Biceps",
        exercises: [

            {
                name: "Curl con barra Z",
                series: "3",
                repetitions: "10-12",
                muscles: "Bíceps",
                image: "img-gif/dia5-curlEZ-barra.gif"
            },
            {
                name: "Curl spider o predicador",
                series: "3",
                repetitions: "12-15",
                muscles: "Bíceps",
                image: "img-gif/dia5-curlEz-predicador.jpg"
            },

            {
                name: "Curl con barra o mancuernas",
                series: "3",
                repetitions: "10-12",
                muscles: "Bíceps",
                image: "img-gif/dia2-curl-barra.gif"
            },
            {
                name: "Curl martillo",
                series: "3",
                repetitions: "12-15",
                muscles: "Bíceps",
                image: "img-gif/dia2-curl-martillo.gif"
            },

            {
                name: "Curl Zottman",
                series: "3",
                repetitions: "12-15",
                muscles: "Bíceps",
                image: "../img-hipertrofia/biceps/curl-zottman.gif"
            },

            {
                name: "Curl biceps con mancuerna",
                series: "3",
                repetitions: "12-15",
                muscles: "Bíceps",
                image: "../img-hipertrofia/biceps/curl-biceps-mancuerna.gif"
            },

            {
                name: "Curl bicesp barra recta agarre abierto",
                series: "3",
                repetitions: "12-15",
                muscles: "Bíceps",
                image: "../img-hipertrofia/biceps/curl-biceps-barra-recta-abierta.gif"
            },

            {
                name: "Curl de biceps con polea alta",
                series: "3",
                repetitions: "12-15",
                muscles: "Bíceps",
                image: "../img-hipertrofia/biceps/curl-biceps-polea-alta.gif"
            },
        ]
    },
    {
        day: 5,
        title: "Triceps",
        exercises: [
            {
                name: "Extension triceps supino",
                series: "3",
                repetitions: "10-12",
                muscles: "Tríceps",
                image: "img-gif/dia4-triceps-supinado-polea.gif"
            },
            {
                name: "Curl triceps de espalda",
                series: "3",
                repetitions: "12-15",
                muscles: "Tríceps",
                image: "img-gif/dia4-triceps-cuerda-cabeza.gif"
            },

            {
                name: "Fondos en paralelas o tríceps en polea",
                series: "3",
                repetitions: "10-12",
                muscles: "Tríceps",
                image: "img-gif/dia1-Paralelas.gif"
            },
            {
                name: "Extensión de tríceps con cuerda",
                series: "3",
                repetitions: "12",
                muscles: "Tríceps",
                image: "img-gif/dia1-triceps-cuerda.gif"
            },

            {
                name: "Extensión de tríceps con mancuerna",
                series: "3",
                repetitions: "12",
                muscles: "Tríceps",
                image: "../img-hipertrofia/triceps/extension-triceps-mancuerna.gif"
            },

            {
                name: "Extensión de tríceps sobre la cabeza",
                series: "3",
                repetitions: "12",
                muscles: "Tríceps",
                image: "../img-hipertrofia/triceps/extension-triceps-sobre-cabeza.gif"
            },

            {
                name: "Press de banca con agarre cerrado",
                series: "3",
                repetitions: "12",
                muscles: "Tríceps",
                image: "../img-hipertrofia/triceps/press-banca-agarre-cerrado.gif"
            },

        ]
    },
    {
        day: 6,
        title: "Piernas",
        exercises: [
            {
                name: "Peso muerto a una pierna",
                series: "4",
                repetitions: "8-12",
                muscles: "Isquios/Glúteos",
                image: "img-gif/dia6-pesomuerto-unapierna.gif"
            },
            {
                name: "Sentadilla búlgara",
                series: "3",
                repetitions: "10-12",
                muscles: "Piernas",
                image: "img-gif/dia6-sentadilla-bulgara.gif"
            },
            {
                name: "Hip thrust con barra",
                series: "4",
                repetitions: "8-12",
                muscles: "Glúteos",
                image: "img-gif/dia6-hip-thrust-barra.gif"
            },
            {
                name: "Prensa con los pies altos",
                series: "3",
                repetitions: "10-12",
                muscles: "Isquios/Glúteos",
                image: "img-gif/dia6-prensa-pies-altos.gif"
            },
            {
                name: "Curl femoral sentado",
                series: "3",
                repetitions: "12-15",
                muscles: "Isquios",
                image: "img-gif/dia6-curl-femoral-sentado.gif"
            },
            {
                name: "Elevaciones de gemelos en prensa",
                series: "4",
                repetitions: "15-20",
                muscles: "Gemelos",
                image: "img-gif/dia6-elevacion-gemelos-prensa.gif"
            },

            {
                name: "Sentadilla con barra Smith",
                series: "4",
                repetitions: "8-12",
                muscles: "Piernas",
                image: "img-gif/dia3-sentadilla-smith.gif"
            },
            {
                name: "Prensa de piernas",
                series: "4",
                repetitions: "10-12",
                muscles: "Piernas",
                image: "img-gif/dia3-press-pierna-horizontal.gif"
            },
            {
                name: "Extensiones de cuádriceps",
                series: "3",
                repetitions: "12-15",
                muscles: "Cuádriceps",
                image: "img-gif/dia3-extensioimg-gif"
            },
            {
                name: "Peso muerto rumano",
                series: "4",
                repetitions: "8-12",
                muscles: "Isquios/Glúteos",
                image: "img-gif/dia3-pesomuerto-rumano.gif"
            },
            {
                name: "Curl femoral acostado",
                series: "3",
                repetitions: "12-15",
                muscles: "Isquios",
                image: "img-gif/dia3-curlfemoral-acostado.gif"
            },
            {
                name: "Elevaciones de gemelos sentado",
                series: "4",
                repetitions: "15-20",
                muscles: "Gemelos",
                image: "img-gif/dia3-elevacion-gemelos.gif"
            }
        ]
    },
    {
        day: 7,
        title: "Core",
        exercises: [
            {
                name: "Abdominal bicicleta",
                series: "4",
                repetitions: "8-12",
                muscles: "todo el core",
                image: "../img-hipertrofia/core/Abdominal-bicicleta.gif"
            },
            {
                name: "ABS con rodillo",
                series: "3",
                repetitions: "10-12",
                muscles: "todo el core",
                image: "../img-hipertrofia/core/abs-rodillo.gif"
            },
            {
                name: "ABS en Banco",
                series: "4",
                repetitions: "8-12",
                muscles: "todo el core",
                image: "../img-hipertrofia/core/abs-banco.gif"
            },
            {
                name: "ABS borboleta",
                series: "3",
                repetitions: "10-12",
                muscles: "todo el core",
                image: "../img-hipertrofia/core/abs-borboleta.gif"
            },
            {
                name: "ABS con piernas elevadas",
                series: "3",
                repetitions: "12-15",
                muscles: "frontal del core",
                image: "../img-hipertrofia/core/abs-piernas-elevadas.gif"
            },
            {
                name: "ABS con Maquina",
                series: "4",
                repetitions: "15-20",
                muscles: "todo el core",
                image: "../img-hipertrofia/core/abs-maquina.gif"
            },

            {
                name: "ABS alternando piernas",
                series: "4",
                repetitions: "15-20",
                muscles: "todo el core",
                image: "../img-hipertrofia/core/abs-alternando-piernas.gif"
            },

            {
                name: "Levantamiento de piernas colgado",
                series: "4",
                repetitions: "15-20",
                muscles: "todo el core",
                image: "../img-hipertrofia/core/levantamiento-pierna-colgado.gif"
            },

            {
                name: "Plancha lateral con flexion",
                series: "4",
                repetitions: "15-20",
                muscles: "todo el core",
                image: "../img-hipertrofia/core/plancha-lateral-flexion.gif"
            },

            {
                name: "Plancha",
                series: "4",
                repetitions: "15-20",
                muscles: "todo el core",
                image: "../img-hipertrofia/core/plancha.gif"
            },

            {
                name: "V-Sit-Ups",
                series: "4",
                repetitions: "15-20",
                muscles: "todo el core",
                image: "../img-hipertrofia/core/v-sit-ups.gif"
            },


        ]
    },

    {
        day: 8,
        title: "Pantorrillas",
        exercises: [
            {
                name: "Elevacion Pantorrillas 45 grados",
                series: "4",
                repetitions: "8-12",
                muscles: "Pantorrillas",
                image: "img-hipertrofia/pantorrillas/elevacion-pantorrillas-45-grados.gif"
            },
            {
                name: "Elevacion-gemelos-sentado",
                series: "3",
                repetitions: "10-12",
                muscles: "Piernas",
                image: "img-hipertrofia/pantorrillas/elevacion-gemelos-sentado.gif"
            },
            {
                name: "Elevacion pantorrillas con macuernas",
                series: "4",
                repetitions: "8-12",
                muscles: "Glúteos",
                image: "img-hipertrofia/pantorrillas/elevacion-pantorrilla-mancuerna.gif"
            },
            {
                name: "Elevacion-talones-prensa",
                series: "3",
                repetitions: "10-12",
                muscles: "Isquios/Glúteos",
                image: "img-hipertrofia/pantorrillas/elevacion-talones-prensa.gif"
            },
            {
                name: "Hack elevacion pantorrilla",
                series: "3",
                repetitions: "12-15",
                muscles: "Isquios",
                image: "img-hipertrofia/pantorrillas/hack-elevacion-pantorrilla.gif"
            },
            {
                name: "Sentadillas con Pantorrillas",
                series: "4",
                repetitions: "15-20",
                muscles: "Gemelos",
                image: "img-hipertrofia/pantorrillas/sentadillas-con-pantorrilla.gif"
            },

            {
                name: "Soleo con mancuerna sentado",
                series: "4",
                repetitions: "15-20",
                muscles: "Gemelos",
                image: "img-hipertrofia/pantorrillas/soleo.gif"
            }
        ]
    },

    {
        day: 9,
        title: "Antebrazos",
        exercises: [
            {
                name: "Curl de antebrazo inverso",
                series: "4",
                repetitions: "8-12",
                muscles: "Antebrazos",
                image: "../img-hipertrofia/antebrazos/curl-antebrazo-inverso.gif"
            },
            {
                name: "Flexion de muñeca con disco",
                series: "3",
                repetitions: "12-15",
                muscles: "Antebrazos",
                image: "../img-hipertrofia/antebrazos/curl-muñeca-barra.gif"
            },

            {
                name: "Curl de antebrazo en banco",
                series: "4",
                repetitions: "8-12",
                muscles: "Antebrazos",
                image: "../img-hipertrofia/antebrazos/curl-antebrazo-banco.gif"
            },

            {
                name: "Curl de muñeca con barra",
                series: "4",
                repetitions: "8-12",
                muscles: "Antebrazos",
                image: "../img-hipertrofia/antebrazos/curl-muñeca-barra.gif"
            },

        ]
    },

    {
        day: 10,
        title: "Trapecios",
        exercises: [
            {
                name: "Encogimientos con mancuernas",
                series: "3",
                repetitions: "12-15",
                muscles: "Trapecio",
                image: "img-gif/dia2-encogimiento-mancuerna.gif"
            },

            {
                name: "Encogimientos de trapecio con barra",
                series: "3",
                repetitions: "12-15",
                muscles: "Trapecio",
                image: "img-gif/dia5-encogimiento-trapecio.gif"
            },

        ]
    },
];
// los estilos esta en index2.css


const Carousel = () => {
    // Estado para el día seleccionado y para el índice de ejercicio activo de la rutina actual
    const [selectedDay, setSelectedDay] = useState(0);
    const [activeExerciseIndex, setActiveExerciseIndex] = useState(0);

    const currentRoutine = routines[selectedDay];
    const totalExercises = currentRoutine.exercises.length;

    // Funciones de navegación en el carrusel de ejercicios
    // % devuelve el residuo de la division este caso (prevIndex+1) / totalExercises, el resultado sera la posicion de los ejercicios
    const nextExercise = () => {
        //prevIndex es el valor de setActivExerciseIndex,en un principio es 0 por el valor de su Estado inicial,
        setActiveExerciseIndex((prevIndex) => (prevIndex + 1) % totalExercises);

    };

    const prevExercise = () => {
        setActiveExerciseIndex((prevIndex) => (prevIndex - 1 + totalExercises) % totalExercises);
    };
    // desactivar el click derecho
    useEffect(() => {
        const handleContextMenu = (event) => {
            event.preventDefault();
        };
        document.addEventListener('contextmenu', handleContextMenu);
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    // Auto-play: Cambia de ejercicio cada 5 segundos
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         nextExercise();
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, [activeExerciseIndex, totalExercises]);

    // Cuando se cambia el día, reiniciamos el índice de ejercicio
    const handleDayClick = (index) => {
        setSelectedDay(index);
        setActiveExerciseIndex(0);
    };

    const currentExercise = currentRoutine.exercises[activeExerciseIndex];

    return (
        // los estilos esta en index2.css

        <div className="container-main-card-hiper">

            <h2 className="titulo-hiper" style={{ color: 'white' }}>{currentRoutine.title}</h2>

            <div className="container2-carrusel-hiper">
                <div className="hijo-carrusel-hiper">
                    <div className="descripcion-ejercicio-hiper">
                        <h3>{currentExercise.name}</h3>
                        <dl className="definicion-hiper">
                            <dt>
                                <img src="img-icon/icon-serie-press.webp" alt="Icono Series" />
                                Series:
                            </dt>
                            <dd>{currentExercise.series}</dd>
                            <dt>
                                <img src="img-icon/icon-repeticiones.webp" alt="Icono Series" />
                                Repeticiones:</dt>
                            <dd>{currentExercise.repetitions}</dd>
                            <dt>
                                <img src="img-icon/icon-musculos.webp" alt="Icono Series" />
                                Músculos trabajados:</dt>
                            <dd>{currentExercise.muscles}</dd>
                        </dl>
                    </div>
                    <div className="img-ejercicio-hiper">
                        <img src={currentExercise.image} alt={currentExercise.name} />
                    </div>
                </div>
                <div className="carousel-nav-hiper">
                    <button onClick={prevExercise} className="nav-button">Anterior</button>
                    <button onClick={nextExercise} className="nav-button">Siguiente</button>
                </div>
            </div>

            <div className="container3-dias-hiper">
                <h2 style={{ color: 'white' }}>Selecciona un grupo muscular</h2>
                <div className="btn-dias-hiper">
                    <ul>
                        {routines.map((routine, index) => (
                            <li
                                key={index}
                                className={selectedDay === index ? 'active-hiper' : ''}
                                onClick={() => handleDayClick(index)}
                            >
                                {routine.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
