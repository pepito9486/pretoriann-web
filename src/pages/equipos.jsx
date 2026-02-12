import React from "react";
import { useState, useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import Equicalistenia from "../component-equipos/equicalistenia";
import Equicrossfit from "../component-equipos/equicrossfit";
import Equifuncional from "../component-equipos/equifuncional";
import Equihipertrofia from "../component-equipos/equihipertrofia";
import Equipilates from "../component-equipos/equipilates";
import Equiresistencia from "../component-equipos/equiresistencia";
import Equiyoga from "../component-equipos/equiyoga";
import Baner from '../components/baner';
import Slider from "../components/slider";
import { Helmet } from "react-helmet-async";

const Equipos = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState("");
  const [selectedicon, setSelectedicon] = useState("");
  const targetRef = useRef(null);

  const location = useLocation();
  const equiposRef = useRef(null);

  const coloresEquipo = ['#003366', '#003366', '#003366'];

  const bannersEquipos = [
    {
      img: '/img-banner-principal/equipos-banner1-equipos.webp',
      title: 'Ve a nuestra tienda de afiliacion',
      link: '/equipos',
      boton: 'Ver Tienda',
    },
    // {
    //   img: '/img-banner-principal/equipoblog-banner2-equipos.webp',
    //   title: 'Equipos que no pueden faltar en casa',
    //   link: '/blog/elegir-equipo-entrenamiento',
    //   boton: 'Leer guía',
    // },
  ];



  const componentMap = {
    Calistenia: <Equicalistenia ref={targetRef} />,
    Crossfit: <Equicrossfit ref={targetRef} />,
    Funcional: <Equifuncional ref={targetRef} />,
    Hipertrofia: <Equihipertrofia ref={targetRef} />,
    Pilates: <Equipilates ref={targetRef} />,
    // Resistencia: <Equiresistencia ref={targetRef} />,
    Yoga: <Equiyoga ref={targetRef} />,
  };

  const componentMapimg = {
    Calistenia: "../img-icon/icon-calistenia.webp",
    Crossfit: "../img-icon/icon-crossfit.webp",
    Funcional: "../img-icon/icon-funcional.webp",
    Hipertrofia: "../img-icon/icon-hipertrofia.webp",
    Pilates: "../img-icon/icon-pilates.webp",
    Resistencia: "../img-icon/icon-resistencia.webp",
    Yoga: "../img-icon/icon-yoga.webp",
  };

  const handleItemClick = (discipline) => {
    setSelectedDiscipline(componentMap[discipline]);
    setSelectedicon(componentMapimg[discipline]);
    console.log("imprimir componente", selectedicon);
  };

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedDiscipline]);

  return (
    <>
      <Helmet>
        {/* 🔹 SEO General */}
        <title>Equipamiento de Entrenamiento | Pretoriann</title>
        <meta
          name="description"
          content="Descubre el equipamiento de entrenamiento más utilizado en cada disciplina fitness: mancuernas, pesas, bandas elásticas, máquinas y más. Aprende su función y cómo integrarlos en tus rutinas."
        />
        <meta
          name="keywords"
          content="equipamiento de entrenamiento, mancuernas, bandas elásticas, pesas, máquinas de gimnasio, equipamiento fitness, accesorios de entrenamiento, material deportivo, calistenia, yoga, pilates"
        />
        <meta name="author" content="Pretoriann" />

        {/* 🔹 Open Graph para redes sociales */}
        <meta property="og:title" content="Equipamiento de Entrenamiento Fitness | Pretoriann" />
        <meta
          property="og:description"
          content="Explora el equipamiento más usado en disciplinas como Calistenia, Yoga, Pilates o CrossFit en Pretoriann. Conoce su utilidad y cómo elegir el mejor para ti."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pretoriann.com/equipamiento" />
        <meta
          property="og:image"
          content="https://www.pretoriann.com/img-banner-principal/equipos-banner.webp"
        />
        <meta property="og:locale" content="es_ES" />

        {/* 🔹 SEO técnico */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.pretoriann.com/equipamiento" />
      </Helmet>




      <Baner banners={bannersEquipos} colores={coloresEquipo} />
      <Slider clase1={"main-card"} clase2={"info-card"} />

      <main className="principal-equipo">
        <section className="h1-concept" ref={equiposRef}></section>

        <aside className="main-menudisciplinas">
          <div class="banner-h1-principal">
            <div class="banner-contenido">
              <div class="banner-text">
                <h1>Equipos de Entrenamiento</h1>
                <p>Optimiza tu entrenamiento con las herramientas correctas.</p>
              </div>
            </div>
          </div>
          <p className="p-principal-equipos">
            Los equipos de entrenamiento se presentan como recursos esenciales para cualquier persona que desee alcanzar sus objetivos de acondicionamiento físico. Desde las bandas de resistencia hasta las barras y pesas, cada herramienta cumple una función específica para fortalecer diferentes grupos musculares y mejorar el rendimiento físico. Que comprendamos sus usos y beneficios nos permitira optimizar las rutinas de ejercicio, adaptándolas a las necesidades y niveles de experiencia de cada usuario.
          </p>

          <h3 className="titulo-galeria-equipos">Equipos que no pueden faltar en tu disciplina</h3>

          <nav className="menu-disciplinas-equipo">
            <ul>
              {Object.keys(componentMap).map((discipline) => (
                <li
                  key={discipline}
                  onClick={() => handleItemClick(discipline)}
                >
                  <div className="equipo-icon">
                    <img src={componentMapimg[discipline]} />

                    <span>{discipline}</span>

                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <section className="description-disciplinas-equipos">
          {selectedDiscipline}
        </section>
      </main>
    </>
  );
};

export default Equipos;
