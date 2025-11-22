

import { useState, useRef, useEffect } from "react";
import Slider from "../components/slider";
import Infocrossfit from "../components/infocrossfit";
import Infocalistenia from "../components/infocalistenia";
import Infocombat from "../components/infocombat";
import Infofuncional from "../components/infofuncional";
import Infohiit from "../components/infohiit";
import Infohipertrofia from "../components/infohipertrofia";
import Infopowerlifting from "../components/infopowerlifting";
import Inforesistencia from "../components/inforesistencia";
import Infospinning from "../components/infospinning";
import Infaerobics from "../components/infoaerobics";
import Infopilates from "../components/infopilates";
import Infoyoga from "../components/infoyoga";
import Baner from '../components/baner';
import { Helmet } from "react-helmet-async";

function Disciplinas() {
  const [selectedDiscipline, setSelectedDiscipline] = useState("");

  const targetref = useRef(null);

  const coloresGym = ['#003366', '#003366', '#003366'];


  const bannersGym = [
    {
      img: '/img-banner-principal/termo-banner1-disciplinas.webp',
      title: 'Accesorios para Entrenar Mejor',
      link: '/afiliados/gimnasio',
      boton: 'Ver en Amazon',
    },
    // {
    //   img: '/img-banner-principal/remo-banner2-didsciplinas.webp',
    //   title: 'Hipertrofia para Principiantes',
    //   link: '/blog/guia-hipertrofia',
    //   boton: 'Saber mas',
    // },
  ];



  const componentMap = {
    Calistenia: <Infocalistenia ref={targetref} />,
    Crossfit: <Infocrossfit ref={targetref} />,
    Culturismo: <Infohipertrofia ref={targetref} />,
    Powerlifting: <Infopowerlifting ref={targetref} />,
    Funcional: <Infofuncional ref={targetref} />,
    HIIT: <Infohiit ref={targetref} />,
    Pilates: <Infopilates ref={targetref} />,
    Yoga: <Infoyoga ref={targetref} />,
    Aerobics: <Infaerobics ref={targetref} />,
    Spinning: <Infospinning ref={targetref} />,
    Resistencia: <Inforesistencia ref={targetref} />,
    Bodycombat: <Infocombat ref={targetref} />,

    // Agrega los otros componentes aquí
  };

  const componentMapimg = {
    Calistenia: "../img-icon/icon-calistenia.webp",
    Crossfit: "../img-icon/icon-crossfit.webp",
    Funcional: "../img-icon/icon-funcional.webp",
    Culturismo: "../img-icon/icon-mancuernas.webp",
    Pilates: "../img-icon/icon-pilates.webp",
    Resistencia: "../img-icon/icon-resistencia.webp",
    Yoga: "../img-icon/icon-yoga.webp",
    Powerlifting: "../img-icon/icon-hipertrofia.webp",
    Spinning: "../img-icon/icon-spinning.webp",
    Bodycombat: "../img-icon/icon-combat.webp",
    Aerobics: "../img-icon/icon-aerobics.webp",
    HIIT: "../img-icon/icon-hiit.webp",
  };

  const handleItemClick = (discipline) => {
    setSelectedDiscipline(componentMap[discipline]);
  };
  useEffect(() => {
    if (targetref.current)
      targetref.current.scrollIntoView({ behavior: "smooth" });
  }, [selectedDiscipline]);

  return (
    <>
      <Helmet>
        {/* 🔹 SEO General */}
        <title>Disciplinas Fitness | Tu Sitio Fitness</title>
        <meta
          name="description"
          content="Explora distintas disciplinas fitness como Calistenia, Yoga, Pilates, HIIT, CrossFit y Entrenamiento Funcional. Aprende sus beneficios, técnicas y rutinas recomendadas."
        />
        <meta
          name="keywords"
          content="disciplinas fitness, yoga, pilates, calistenia, crossfit, hiit, entrenamiento funcional, ejercicios, fuerza, flexibilidad, resistencia"
        />
        <meta name="author" content="Tu Sitio Fitness" />

        {/* 🔹 Open Graph para redes sociales */}
        <meta property="og:title" content="Disciplinas Fitness | Yoga, Calistenia, HIIT y más" />
        <meta property="og:description" content="Descubre las principales disciplinas fitness y encuentra videos explicativos y rutinas para mejorar tu fuerza, flexibilidad y resistencia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tusitiofitness.com/disciplinas" />
        <meta property="og:image" content="https://tusitiofitness.com/img-banner-principal/disciplinas-banner.webp" />
        <meta property="og:locale" content="es_ES" />

        {/* 🔹 SEO técnico */}
        <link rel="canonical" href="https://tusitiofitness.com/disciplinas" />
      </Helmet>
      <Baner banners={bannersGym} colores={coloresGym} />
      <Slider clase1={"main-card"} clase2={"info-card"} />

      <div className="principal">
        <div className="h1-concept">
          <div className="overlay-1"></div>
          <h1 className="h1-disciplinas" >¿Que es el Fitness?</h1>

          <h2 className="h2-disciplinas">
            Empezemos por los conceptos....
          </h2>
          <p>
            El Fitness se refiere al estado general de
            la buena salud fisica, resistencia y bienestar que se alcanza a
            traves de la actividad fisica regular , una nutricion adecuada y
            otros habitos saludables. <br /> En el contexto del entrenamiento y el
            acondicionamiento fisico hablaremos de la calistenia, crossfit, hipertrofia
            y otras actividades deportivas como
            disciplinas Fitness ya que cada una de ellas ofrece un enfoque estructurado
            y organizado para mejorar la condición física, la salud y el
            bienestar general a través de técnicas específicas de entrenamiento
            y desarrollo físico.
          </p>
        </div>

        <span style={{
          display: 'block',
          height: '1px',
          backgroundColor: 'rgba(60, 60, 60, 0.6)', // Línea blanca sutil
          margin: '50px 0 50px 0', // Espaciado arriba y abajo
        }}></span>

        <div className="main-menudisciplinas">
          <section class="bloque-disciplina">
            <h3 class="titulo-disciplina"> Descubre las disciplinas más populares del fitness</h3>
            <p class="subtitulo-disciplina">
              Desde calistenia hasta yoga, ¿cuál de estas prácticas va contigo?
            </p>
          </section>


          <aside className='main-menudisciplinas-acordeon'>

            <nav className='menu-disciplinas-equipo'>
              <ul>
                {Object.keys(componentMap).map((discipline) => (
                  <li key={discipline} onClick={() => handleItemClick(discipline)}>
                    {/* <span>{discipline}</span> */}
                    <div className="equipo-icon">
                      <img src={componentMapimg[discipline]} />

                      <span>{discipline}</span>

                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
        <div className="description-disciplinas">{selectedDiscipline}</div>
      </div>
    </>
  );
}

export default Disciplinas;
