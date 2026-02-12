import React from 'react';
import { useEffect } from "react";
import Slider from '../components/slider';
import Bannertitulos from '../components/Bannertitulos';
import AOS from "aos";
import "aos/dist/aos.css";
import Baner from '../components/baner';
import { Helmet } from "react-helmet-async";




function Sistemamuscular(props) {

    const coloresEquipo = ['#003366', '#003366', '#003366'];


    const bannersEquipo = [
        {
            img: '/img-banner-principal/hombre_atletico2.png',
            title: 'Sistema Muscular',
            description: 'Conoce la estructura del sistema muscular orientado al fitness',
            link: '/equipamiento',
            boton: 'Comprar en Amazon',
        },
        // {
        //     img: '/img-banner-principal/cuerpo-banner2-sm.webp',
        //     title: 'Entrena Mejor Conociendo tus Músculos',
        //     description: 'Echa un vistazo general .',
        //     link: '/equipamiento',
        //     boton: 'Ver más',
        // },
        // {
        //     img: '/img-banner-principal/curl-banner3-sm.webp',
        //     title: 'Hipertrofia y Movimiento Muscular',

        //      description: 'Movimientos musculares y su impacto en la hipertrofia.',
        //     link: '/equipamiento',
        //     boton: 'Ver más'
        // },
    ];


    useEffect(() => {
        AOS.init({
            duration: 1000, // duración de las animaciones en ms
            once: true, // que se anime solo una vez al hacer scroll
        });
    }, []);


    return (
        <>
            <Helmet>
                {/* 🔹 SEO General */}
                <title>Sistema Muscular | Pretoriann</title>
                <meta
                    name="description"
                    content="Conoce el sistema muscular y cómo trabaja cada grupo muscular durante el entrenamiento. Aprende qué ejercicios estimulan cada zona y mejora tu rendimiento físico."
                />
                <meta
                    name="keywords"
                    content="sistema muscular, músculos del cuerpo, anatomía, grupos musculares, ejercicios, fuerza, hipertrofia, entrenamiento por músculo, anatomía fitness, fisiología deportiva"
                />
                <meta name="author" content="Pretoriann" />

                {/* 🔹 Open Graph (para redes sociales) */}
                <meta property="og:title" content="Sistema Muscular y Anatomía Fitness | Pretoriann" />
                <meta
                    property="og:description"
                    content="Explora el sistema muscular humano en Pretoriann y descubre cómo activar cada grupo en tus rutinas. Guía visual y explicativa para entrenar mejor."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.pretoriann.com/sistema-muscular" />
                <meta
                    property="og:image"
                    content="https://www.pretoriann.com/img-banner-principal/sistemamuscular-banner.webp"
                />
                <meta property="og:locale" content="es_ES" />

                {/* 🔹 SEO técnico */}
                <meta name="robots" content="index, follow" />

                <link rel="canonical" href="https://www.pretoriann.com/sistema-muscular" />
            </Helmet>



            <Baner banners={bannersEquipo} colores={coloresEquipo} />
            <Slider clase1={'main-card'}
                clase2={'info-card'} />
            <div className="principal-entrenamiento" style={{ width: '96%', margin: 'auto' }}>


            </div>


            <div className='sistemamuscular'>



                <p className='p-sistema-muscular'>Entender los principales grupos musculares es clave para entrenar de forma efectiva. Esta sección no busca profundizar en toda la anatomía humana, sino mostrar de forma visual y sencilla los músculos más relevantes que suelen trabajarse por estética y rendimiento. Conoce qué zonas estás activando en tus rutinas y aprende a identificar los músculos protagonistas de cada movimiento.
                </p>
                <div className="bloque-disciplina">

                    <h2 className="titulo-disciplina">Grupos musculares </h2>
                </div>


                {/* <p className='p-sistema-muscular'>
                    No nos caigamos a rodeos esto no es una guia medica, queremos ver que grupos musculares trabajar en el Gym (porque visualmente impactan y suelen formar parte de los objetivos físicos más comunes), pues a continuacion te lo enseñamos de manera sencilla y son los siguientes:
                </p> */}

                <div class="trenes">
                    <h3>Tren superior</h3>
                    <ul>
                        <li>Pectorales → pecho</li>
                        <li>Dorsales → espalda alta (dan amplitud en forma de "V")</li>
                        <li>Trapecios → parte superior de la espalda y cuello</li>
                        <li>Deltoides → hombros (anterior, lateral y posterior)</li>
                        <li>Bíceps → parte frontal del brazo</li>
                        <li>Tríceps → parte posterior del brazo</li>
                        <li>Abdomen / Core → abdominales superiores, inferiores y oblicuos</li>
                    </ul>

                    <h3>Tren inferior</h3>
                    <ul>
                        <li>Glúteos → mayor, medio y menor (muy enfocados en entrenamientos femeninos)</li>
                        <li>Cuádriceps → parte frontal del muslo</li>
                        <li>Isquiotibiales → parte trasera del muslo</li>
                        <li>Pantorrillas → gemelos y sóleo</li>
                    </ul>
                </div>

                <p class="p-sistema-muscular">
                    Antes de entrar en materia, vamos a ver —de forma simple y visual— las zonas musculares más importantes del cuerpo. No son ilustraciones anatómicas de libro, pero sí te van a servir para ubicar rápido cada grupo muscular que solemos trabajar en el gym.
                    La idea es que identifiques mejor cada zona y tengas una base clara para entrenar con sentido y no solo “por hacer”.
                    <strong>Así que vamos al grano, que esto es lo mínimo que todos deberíamos saber antes de entrenar.</strong>
                </p>


                <div class="galeria-muscular">
                    <img src="/img-anatomia/frontal-partes.webp" alt="Grupo muscular: Pectorales" className='imagen-muscular' data-aos="zoom-in" />
                    <img src="/img-anatomia/lateral-partes.webp" alt="Grupo muscular: Dorsales" className='imagen-muscular' data-aos="zoom-in" />
                    <img src="/img-anatomia/posterior-partes.webp" alt="Grupo muscular: Bíceps" className='imagen-muscular' data-aos="zoom-in" />


                </div>

            </div>

        </>
    );
}

export default Sistemamuscular;