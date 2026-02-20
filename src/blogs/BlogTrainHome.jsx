import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const BlogTrainHome = () => {
    return (
        <>

            <Helmet>
                {/* 🔹 SEO General */}
                <title>Entrenar en casa sin gimnasio: rutina completa con ejercicios | Pretoriann</title>

                <meta
                    name="description"
                    content="Guía completa para entrenar en casa sin gimnasio: rutina efectiva con ejercicios para todo el cuerpo, técnica correcta y consejos para progresar sin material."
                />

                <meta
                    name="keywords"
                    content="entrenar en casa, ejercicios sin gimnasio, calistenia, peso corporal, rutinas en casa, entrenamiento funcional, ejercicios sin equipo, fitness en casa"
                />
                <meta name="author" content="Pretoriann" />

                {/* 🔹 Open Graph (para redes sociales) */}
                <meta property="og:title" content="Entrenar sin gimnasio: ejercicios para casa | Pretoriann" />
                <meta
                    property="og:description"
                    content="Descubre los mejores ejercicios para entrenar desde casa sin necesidad de gimnasio ni equipamiento. Guía práctica de Pretoriann para mantenerte en forma."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.pretoriann.com/blogentrenarencasa" />
                <meta
                    property="og:image"
                    content="https://www.pretoriann.com/img-banner-principal/pesas-blog.webp"
                />
                <meta property="og:locale" content="es_ES" />

                {/* 🔹 SEO técnico */}
                <meta name="robots" content="index, follow" />

                <link rel="canonical" href="https://www.pretoriann.com/blogentrenarencasa" />
            </Helmet>



            <div className="blog-post-container">
                <h1>Entrenar en casa sin gimnasio: rutina completa con ejercicios efectivos</h1>

                <p>
                    Muchas veces se tiene la idea de que sin un gimnasio no se puede avanzar en el entrenamiento. Sin embargo, con una buena selección de ejercicios y una técnica correcta, se puede lograr un progreso real desde casa. Esta guía recoge opciones prácticas para entrenar sin necesidad de máquinas ni cuotas, solo con el propio peso corporal y algunos objetos cotidianos.
                </p>

                <div className="blog-section">
                    <h2>1. Sentadillas (Piernas y glúteos)</h2>
                    <img src="/img-blog/sentadillas.webp"
                        alt="Sentadillas para entrenar piernas y glúteos en casa sin gimnasio"
                        loading="lazy" />
                    <p>Las sentadillas destacan por su capacidad para trabajar todo el tren inferior. Se pueden realizar con el propio peso o agregar resistencia con mochilas, garrafas o bandas elásticas.</p>
                    <ul>
                        <li>Colocar los pies a la anchura de los hombros.</li>
                        <li>Descender flexionando las rodillas y llevando la cadera hacia atrás.</li>
                        <li>Mantener el pecho erguido y la espalda recta.</li>
                        <li>Subir apretando los glúteos.</li>
                    </ul>
                    <p><strong>Errores comunes:</strong> Juntar las rodillas o dejarlas pasar la punta de los pies. Encorvar la espalda.</p>
                    <p><strong>Recomendación:</strong> 3 series de 12-15 repeticiones.</p>
                </div>

                <div className="blog-section">
                    <h2>2. Flexiones (Pecho, hombros y tríceps)</h2>
                    <img src="/img-blog/flexiones.webp"
                        alt="Flexiones para entrenar pecho, hombros y tríceps en casa sin gimnasio"
                        loading="lazy" />
                    <p>Un clásico que no falla. Ajustar la posición de las manos o apoyarse en las rodillas permite adaptarlas a cualquier nivel.</p>
                    <ul>
                        <li>Manos ligeramente más separadas que los hombros.</li>
                        <li>Descender con el cuerpo alineado.</li>
                        <li>El pecho debe tocar el suelo o acercarse mucho.</li>
                        <li>Empujar con fuerza hasta extender los brazos.</li>
                    </ul>
                    <p><strong>Errores comunes:</strong> Hundir la cadera o levantar la cabeza.</p>
                    <p><strong>Recomendación:</strong> 3 series de 10-12 repeticiones.</p>
                </div>

                <div className="blog-section">
                    <h2>3. Puente de glúteos (Glúteos y zona lumbar)</h2>
                    <img src="/img-blog/elevacion-gluteos.webp"
                        alt="Puente de glúteos para fortalecer glúteos y zona lumbar en casa sin gimnasio"
                        loading="lazy" />
                    <p>Ejercicio ideal para la parte posterior del cuerpo. Elevar una pierna es una buena forma de añadir dificultad.</p>
                    <ul>
                        <li>Acostarse boca arriba, con rodillas flexionadas.</li>
                        <li>Elevar la pelvis contrayendo los glúteos.</li>
                        <li>Buscar una línea recta entre rodillas y hombros.</li>
                        <li>Bajar controladamente.</li>
                    </ul>
                    <p><strong>Errores comunes:</strong> No elevar lo suficiente o arquear la espalda.</p>
                    <p><strong>Recomendación:</strong> 3 series de 15 repeticiones.</p>
                </div>

                <div className="blog-section">
                    <h2>4. Plancha (Core y estabilidad general)</h2>
                    <img src="/img-blog/plancha.webp"
                        alt="Plancha abdominal para fortalecer el core y la estabilidad en casa sin gimnasio"
                        loading="lazy" />
                    <p>Ejercicio isométrico que fortalece el centro del cuerpo. Aparentemente simple, pero muy exigente.</p>
                    <ul>
                        <li>Apoyar los antebrazos y extender las piernas.</li>
                        <li>Mantener una línea recta sin arquear la espalda.</li>
                        <li>Activar el abdomen y glúteos.</li>
                    </ul>
                    <p><strong>Errores comunes:</strong> Elevar demasiado los glúteos o hundir la pelvis.</p>
                    <p><strong>Recomendación:</strong> 3 rondas de 30 a 45 segundos.</p>
                </div>

                <div className="blog-section">
                    <h2>5. Remo con garrafas (Espalda y bíceps)</h2>
                    <img src="/img-blog/remo-casa.webp"
                        alt="Remo con garrafas para entrenar la espalda y los bíceps en casa sin gimnasio"
                        loading="lazy" />
                    <p>Con objetos caseros como garrafas o mochilas, es posible simular un remo inclinado efectivo.</p>
                    <ul>
                        <li>Inclinar el torso con la espalda recta.</li>
                        <li>Extender los brazos hacia abajo.</li>
                        <li>Elevar los codos hacia atrás contrayendo la espalda.</li>
                        <li>Descender controladamente.</li>
                    </ul>
                    <p><strong>Errores comunes:</strong> Encorvarse o balancear el cuerpo.</p>
                    <p><strong>Recomendación:</strong> 3 series de 10-12 repeticiones.</p>
                </div>

                <div className="blog-section">
                    <h2>6. Elevaciones laterales (Hombros)</h2>
                    <img src="/img-blog/elevacion-hombros.webp"
                        alt="Elevaciones laterales para trabajar los hombros en casa con peso ligero"
                        loading="lazy" />
                    <p>Un movimiento simple y eficaz con cargas ligeras que mejora la forma del hombro.</p>
                    <ul>
                        <li>Sujetar una carga ligera en cada mano.</li>
                        <li>Elevar los brazos lateralmente hasta la altura de los hombros.</li>
                        <li>Descender con control.</li>
                    </ul>
                    <p><strong>Errores comunes:</strong> Impulsarse o levantar por encima del hombro.</p>
                    <p><strong>Recomendación:</strong> 3 series de 12 repeticiones.</p>
                </div>

                <div className="blog-section">
                    <h2>7. Zancadas (Piernas, glúteos y estabilidad)</h2>
                    <img src="/img-blog/zancadas.webp"
                        alt="Zancadas para trabajar piernas y glúteos en casa sin gimnasio"
                        loading="lazy" />
                    <p>Se pueden realizar en diferentes direcciones. Exigen equilibrio y coordinación.</p>
                    <ul>
                        <li>Dar un paso largo hacia adelante.</li>
                        <li>Flexionar ambas rodillas formando ángulos de 90°.</li>
                        <li>Volver a la posición inicial con fuerza.</li>
                    </ul>
                    <p><strong>Errores comunes:</strong> Apoyar mal la rodilla delantera o perder la estabilidad.</p>
                    <p><strong>Recomendación:</strong> 3 series de 10-12 repeticiones por pierna.</p>
                </div>

                <div className="blog-section conclusion">
                    <h2>Conclusión</h2>
                    <p>
                        Entrenar desde casa ha demostrado ser una opción totalmente válida. Con enfoque, técnica y constancia, es posible lograr resultados reales sin depender de instalaciones externas.
                    </p>
                    <p>
                        Lo importante es conocer bien los movimientos, adaptar la dificultad y mantener la regularidad. El progreso está más cerca de lo que parece.
                    </p>
                </div>

                <p>
                    Si quieres profundizar en rutinas más estructuradas, visita nuestra sección de
                    <Link to="/entrenamiento"><em>entrenamiento y rutinas</em></Link>.
                    También puedes ver ejercicios por disciplina en
                    <Link to="/disciplinas"><em>disciplinas fitness</em></Link> o el equipamiento básico recomendado en
                    <Link to="/equipamiento"><em>equipamiento para entrenar en casa</em></Link>.
                </p>

                <p>
                    👉 Puedes ver más artículos como este en nuestro{" "}
                    <Link to="/blogpage"><strong>blog de fitness</strong></Link>.
                </p>


            </div>
        </>
    );
};

export default BlogTrainHome;


