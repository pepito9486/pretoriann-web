import React, { useState, useEffect } from 'react';


const routines = [
    {
        day: 1,
        title: "🔴 Día 1 - Pecho, Hombros y Tríceps (Push)",
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
            }
        ]
    },
    {
        day: 2,
        title: "🔵 Día 2 - Espalda y Bíceps (Pull)",
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
                name: "Face pulls",
                series: "3",
                repetitions: "12-15",
                muscles: "Deltoides posterior",
                image: "img-gif/dia2-face-pull.gif"
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
                name: "Encogimientos con mancuernas",
                series: "3",
                repetitions: "12-15",
                muscles: "Trapecio",
                image: "img-gif/dia2-encogimiento-mancuerna.gif"
            }
        ]
    },
    {
        day: 3,
        title: "🟢 Día 3 - Piernas (Cuádriceps, Isquios y Glúteos)",
        exercises: [
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
        day: 4,
        title: "🔴 Día 4 - Pecho, Hombros y Tríceps (Push 2)",
        exercises: [
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
            }
        ]
    },
    {
        day: 5,
        title: "🔵 Día 5 - Espalda y Bíceps (Pull 2)",
        exercises: [
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
                name: "Pull-over con mancuerna",
                series: "3",
                repetitions: "12-15",
                muscles: "Espalda",
                image: "img-gif/dia5-pull-over-mancuerna-espalda.webp"
            },
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
                image: "img-gif/dia5-curlEz-predicador.webp"
            },
            {
                name: "Encogimientos de trapecio con barra",
                series: "3",
                repetitions: "12-15",
                muscles: "Trapecio",
                image: "img-gif/dia5-encogimiento-trapecio.gif"
            }
        ]
    },
    {
        day: 6,
        title: "🟢 Día 6 - Piernas (Glúteos, Isquios y Detalles)",
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
            }
        ]
    }
];

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
    // useEffect(() => {
    //     const handleContextMenu = (event) => {
    //         event.preventDefault();
    //     };
    //     document.addEventListener('contextmenu', handleContextMenu);
    //     return () => {
    //         document.removeEventListener('contextmenu', handleContextMenu);
    //     };
    // }, []);

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
        // eestilos en index.css linea(2400) y index-diseño-secciones-pc.css 
        <div className="container-main-card">

            <h2 className="titulo" style={{ color: 'white' }}>{currentRoutine.title}</h2>

            <div className="container2-carrusel">
                <div className="hijo-carrusel">
                    <div className="descripcion-ejercicio">
                        <h3>{currentExercise.name}</h3>
                        <dl className="definicion">
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
                    <div className="img-ejercicio">
                        <img src={currentExercise.image} alt={currentExercise.name} />
                    </div>
                </div>
                <div className="carousel-nav">
                    <button onClick={prevExercise} className="nav-button">Anterior</button>
                    <button onClick={nextExercise} className="nav-button">Siguiente</button>
                </div>
            </div>

            <div className="container3-dias">
                <h2 style={{ color: 'white' }}>Selecciona el día de entrenamiento</h2>
                <div className="btn-dias">
                    <ul>
                        {routines.map((routine, index) => (
                            <li
                                key={index}
                                className={selectedDay === index ? 'active' : ''}
                                onClick={() => handleDayClick(index)}
                            >
                                {routine.day}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
