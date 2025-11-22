import React from 'react';

const RutinaGluteos = () => {
    return (
        <div className="blog-post-container">
            <h1>Rutina de Glúteos en Casa</h1>
            <p>
                Esta rutina está pensada para trabajar los glúteos de forma efectiva desde casa, sin necesidad de máquinas. Lo ideal es realizarla 3 veces por semana, dejando al menos un día de descanso entre sesiones.
            </p>

            <div className="blog-section">
                <h2>1. Puente de glúteos</h2>
                <img src="/img-blog/puente-gluteos.jpg" alt="Puente de glúteos" />
                <p>Uno de los ejercicios más efectivos para activar y fortalecer los glúteos. Puedes aumentar la intensidad elevando una pierna.</p>
                <ul>
                    <li>3 series de 15-20 repeticiones.</li>
                    <li>Pausa de 2 segundos arriba en cada repetición.</li>
                </ul>
            </div>

            <div className="blog-section">
                <h2>2. Sentadillas profundas</h2>
                <img src="/img-blog/sentadillas.jpg" alt="Sentadillas profundas" />
                <p>Al bajar más allá de los 90°, se activa con mayor intensidad la parte baja del glúteo.</p>
                <ul>
                    <li>3 series de 12-15 repeticiones.</li>
                    <li>Puedes usar peso (garrafas, mochila) si deseas más carga.</li>
                </ul>
            </div>

            <div className="blog-section">
                <h2>3. Zancadas alternas</h2>
                <img src="/img-blog/zancadas.jpg" alt="Zancadas alternas" />
                <p>Un básico para trabajar los glúteos y también mejorar el equilibrio y control corporal.</p>
                <ul>
                    <li>3 series de 10-12 repeticiones por pierna.</li>
                    <li>Hazlas hacia atrás si tienes poco espacio.</li>
                </ul>
            </div>

            <div className="blog-section">
                <h2>4. Patada de glúteo</h2>
                <img src="/img-blog/patada-gluteo.jpg" alt="Patada de glúteo" />
                <p>Excelente para trabajar el glúteo mayor de forma aislada. Puedes añadir banda elástica para mayor resistencia.</p>
                <ul>
                    <li>3 series de 12-15 repeticiones por pierna.</li>
                    <li>Controla el movimiento al subir y bajar.</li>
                </ul>
            </div>

            <div className="blog-section">
                <h2>5. Abducciones laterales</h2>
                <img src="/img-blog/abducciones.jpg" alt="Abducciones" />
                <p>Este ejercicio fortalece el glúteo medio, importante para la estabilidad de la cadera y la forma lateral del glúteo.</p>
                <ul>
                    <li>3 series de 15 repeticiones por lado.</li>
                    <li>Puedes hacerlas de pie o acostado de lado.</li>
                </ul>
            </div>

            <div className="blog-section conclusion">
                <h2>Conclusión</h2>
                <p>
                    Esta rutina es ideal para quienes buscan tonificar y fortalecer los glúteos desde casa, con ejercicios funcionales y simples. Lo importante es la constancia, la buena técnica y sentir la activación en cada movimiento.
                </p>
                <p>
                    Puedes progresar aumentando repeticiones, añadiendo peso o reduciendo los descansos. ¡Lo importante es no rendirse!
                </p>
            </div>
        </div>
    );
};

export default RutinaGluteos;
