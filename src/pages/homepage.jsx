import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Slider from '../components/slider';
import { Helmet } from "react-helmet-async";

function Homepage(props) {
    const navigate = useNavigate();
    const handleIrRutina = (number) => {
        if (number == 1) {
            navigate('/entrenamiento', { state: { scrollTo: 'entrenamiento-hipertrofia' } })
        } else {
            navigate('/equipamiento', { state: { scrollTo: 'equipos' } })
        }
    }

    return (

        <>
            {/* OPTIMIZANDO SEO MEDIANTE HELMET */}
            <Helmet>
                {/* 🔹 SEO General */}
                <title>Inicio | Tu Sitio Fitness</title>
                <meta
                    name="description"
                    content="Entrena, aprende y mejora tu cuerpo y mente con Tu Sitio Fitness. Encuentra rutinas, calculadoras, guías de nutrición y equipos de entrenamiento adaptados a tu nivel."
                />
                <meta
                    name="keywords"
                    content="fitness, entrenamiento, nutrición, rutinas, salud, ejercicios, bienestar, vida saludable, musculación, pérdida de peso"
                />
                <meta name="author" content="Tu Sitio Fitness" />

                {/* 🔹 Open Graph para redes sociales */}
                <meta property="og:title" content="Tu Sitio Fitness - Entrena, Aprende y Mejora" />
                <meta property="og:description" content="Descubre rutinas, consejos, herramientas y guías para alcanzar tus objetivos fitness desde casa o el gimnasio." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tusitiofitness.com" />
                <meta property="og:image" content="https://tusitiofitness.com/img-banner-principal/home-banner.webp" />
                <meta property="og:locale" content="es_ES" />

                {/* 🔹 Responsive y SEO técnico */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://tusitiofitness.com" />
            </Helmet>




            {/* los estilos estan en index2.css */}
            <Navbar />
            <div className="home-glovo">
                {/* <Navbar /> */}
                <section className="hero-glovo">
                    <div className="hero-img-container">
                        <img
                            src="/img-banner-principal/creatina-banner2-nutricion.webp"
                            alt="Fitness 1"
                            className="hero-img img1 no-lazy"
                        />
                        <img
                            src="/img-banner-principal/fullbody-banner2-rutinas.webp"
                            alt="Fitness 2"
                            className="hero-img img2 no-lazy"
                        />
                        <img
                            src="/img-banner-principal/equipos-banner1-equipos.webp"
                            alt="Fitness 3"
                            className="hero-img img3 no-lazy"
                        />
                    </div>
                    {/* <img
                        src="/img-banner-principal/creatina-banner2-nutricion.webp"
                        alt="Inicio fitness"
                        className="hero-img"
                    /> */}
                    <h1 className="hero-title">Empieza tu camino Fitness Hoy</h1>
                    <a href='/disciplinas' className="hero-btn">Empezar ahora</a>

                    <p className="hero-subtext">
                        Descubre rutinas, productos herramientas y mucho mas.
                    </p>
                    {/* #f8f9fa */}
                </section>

                {/* fondocard={'#e5e8eb'} */}
            </div>
            <Slider clase1={"main-card"} clase2={"info-card"} />

            <section className="macro-pro">
                <div className="macro-text">
                    <h2 className='h3-calcu-homepage'>Calcula tus calorías</h2>
                    <p className="macro-desc">
                        Descubre tu distribución ideal de proteínas, carbohidratos y grasas con nuestra calculadora.
                    </p>
                    <a href="/calculadora" className="macro-btn">Ir a calculadora</a>
                </div>
                <div className="macro-img">
                    <img src="img-banner/calculadora-homepage2.webp" alt="Calculadora" />
                </div>
            </section>

            <section className="disciplinas-section">
                <h2>Tipos de disciplinas fitness</h2>
                <p>
                    Conoce más sobre las disciplinas fitness más populares y efectivas para esculpir un cuerpo de envidia.
                </p>

                <div className="disciplinas-carousel">
                    <div className="carousel-track">
                        <div className="disciplina-card">HIIT</div>
                        <div className="disciplina-card">Funcional</div>
                        <div className="disciplina-card">Cross Training</div>
                        <div className="disciplina-card">Calistenia</div>
                        <div className="disciplina-card">Yoga</div>
                        <div className="disciplina-card">Pilates</div>
                        <div className="disciplina-card">Resistencia</div>
                        <div className="disciplina-card">Aeróbicos</div>

                        {/* Se repiten para efecto de carrusel infinito */}
                        <div className="disciplina-card">HIIT</div>
                        <div className="disciplina-card">Funcional</div>
                        <div className="disciplina-card">Cross Training</div>
                        <div className="disciplina-card">Calistenia</div>
                        <div className="disciplina-card">Yoga</div>
                        <div className="disciplina-card">Pilates</div>
                        <div className="disciplina-card">Resistencia</div>
                        <div className="disciplina-card">Aeróbicos</div>

                        <div className="disciplina-card">HIIT</div>
                        <div className="disciplina-card">Funcional</div>
                        <div className="disciplina-card">Cross Training</div>
                        <div className="disciplina-card">Calistenia</div>
                        <div className="disciplina-card">Yoga</div>
                        <div className="disciplina-card">Pilates</div>
                        <div className="disciplina-card">Resistencia</div>
                        <div className="disciplina-card">Aeróbicos</div>


                        <div className="disciplina-card">HIIT</div>
                        <div className="disciplina-card">Funcional</div>
                        <div className="disciplina-card">Cross Training</div>
                        <div className="disciplina-card">Calistenia</div>
                    </div>
                </div>
            </section>

            <section className="bloque-acciones">
                <h2>Explora, entrena, y progresa Aqui</h2>
                <div className="acciones-grid">
                    <div className="accion-card">
                        <img src="/img-banner-principal/agenda-banner3.webp" alt="Rutinas" />
                        <h3>Explorar rutinas</h3>
                        <p className="limitar-lineas">
                            Encuentra entrenamientos para casa o gimnasio, organizados por nivel y objetivo.
                        </p>
                    </div>
                    <div className="accion-card">
                        <img src="/img-banner-principal/mancuerna-banner3.webp" alt="Disciplinas" />
                        <h3>Conocer disciplinas</h3>
                        <p className="limitar-lineas">
                            Aprende sobre HIIT, calistenia, funcional y más, con bloques explicativos claros.
                        </p>
                    </div>
                    <div className="accion-card">
                        <img src="/img-banner-principal/calculadora-banner3.webp" alt="Calculadora" />
                        <h3>Usar calculadoras</h3>
                        <p className="limitar-lineas">
                            Accede a herramientas para calcular calorías, macros o IMC de forma precisa.
                        </p>
                    </div>
                    <div className="accion-card">
                        <img src="/img-banner-principal/bombillo-banner3.webp" alt="Consejos" />
                        <h3>Leer consejos</h3>
                        <p className="limitar-lineas">
                            Lee tips breves sobre entrenamiento, recuperación, nutrición y salud en general.
                        </p>
                    </div>
                </div>
            </section>

            {/* rutinas destacadas*************** */}

            <section className="bloque-rutinas">
                <h2>Rutinas destacadas</h2>
                <div className="rutinas-grid">
                    <div className="rutina-card">
                        <img src="/img-banner-principal/fullbody.webp" alt="Fullbody 20min" />
                        <div className="rutina-info">
                            <h3>Rutinas en el Gym</h3>
                            <p className="limitar-lineas">Entrena todo tu cuerpo en solo 20 minutos. Ideal para nivel principiante o intermedio.</p>
                            <button onClick={() => handleIrRutina(1)} className="btn-ver">Ver Rutinas</button>
                        </div>
                    </div>
                    {/* <div className="rutina-card">
                        <img src="/img-banner-principal/gluteos.webp" alt="Glúteos" />
                        <div className="rutina-info">
                            <h3>Glúteos sin equipo</h3>
                            <p className="limitar-lineas">Rutina intensa de glúteos en casa, sin necesidad de bandas ni pesas.</p>
                            <a href="/rutinas/gluteos" className="btn-ver">Ver rutina</a>
                        </div>
                    </div>
                    <div className="rutina-card">
                        <img src="/img-banner-principal/bandas.webp" alt="Bandas" />
                        <div className="rutina-info">
                            <h3>Entrena con bandas</h3>
                            <p className="limitar-lineas">Aprovecha las bandas elásticas para mejorar fuerza y resistencia muscular.</p>
                            <a href="/rutinas/bandas" className="btn-ver">Ver rutina</a>
                        </div>
                    </div> */}
                </div>
            </section>

            {/* blog  el css esta en index2.css*/}

            <section className="blog-carrusel">
                <h2>Tips y consejos</h2>
                <div className="carrusel-container">
                    <div className="blog-slide">
                        <img src="/img-banner-principal/proteina-blog.webp" alt="Proteínas" />
                        <h3>5 mitos sobre proteinas</h3>
                        <p className="limitar-lineas">Conoce las diferencias.</p>
                    </div>
                    <div className="blog-slide">
                        <img src="/img-banner-principal/pesas-blog.webp" alt="Equipo básico" />
                        <h3>Entrenar sin gimnasio</h3>
                        <p className="limitar-lineas">Todo lo necesario para entrenar en casa.</p>
                    </div>
                    <div className="blog-slide">
                        <img src="/img-banner-principal/errorplancha-blog.webp" alt="Errores comunes" />
                        <h3>Errores comunes al entrenar</h3>
                        <p className="limitar-lineas">Evita estos fallos si estás empezando.</p>
                    </div>
                </div>

                <a href="/blogpage" className="blog-btn">Ver artículos</a>
            </section>

            {/* recomendados */}

            <section className="recomendados-section">
                <div className="card-recomendados">
                    <div className="contenido-recomendados">
                        <div className="textos-recomendados">
                            <h2>Equipo de Entrenamiento</h2>
                            <p>Échale un vistazo a los Equipos y accesorios que pueden complementar tus entrenamientos.</p>
                        </div>
                        {/* <a href="/equipamiento" className="boton-recomendados">Ver Equipo</a> */}
                        <button onClick={() => handleIrRutina(2)} className="btn-ver">Ver Equipos</button>
                    </div>
                </div>
            </section>

            {/* call to action */}

            <section className="cta-dark-section">
                <div className="cta-dark-container">
                    <h2><span>Empieza</span> <strong>HOY</strong></h2>
                    <p>Descubre contenido que te ayudará a mejorar tu salud y entrenar con propósito.</p>
                    <a href="/disciplinas" className="cta-dark-btn">Explorar contenido</a>
                </div>
            </section>


















        </>
    );
};

export default Homepage;
