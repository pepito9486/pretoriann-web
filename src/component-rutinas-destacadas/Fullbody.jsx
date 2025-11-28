import React from 'react';
// el css esta en index-blo

const RutinaFullBody = () => {
    return (
        <div className="blog-post-container">
            <h1>Rutina Full Body en Casa (Sin Equipamiento)</h1>
            <img
                src="/img-rutinas/fullbody-casa.webp"
                alt="Rutina Full Body en casa"
                style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
            />

            <p>
                Entrenar todo el cuerpo desde casa es posible y efectivo. Esta rutina está diseñada para trabajar los principales grupos musculares con movimientos funcionales y sin necesidad de equipo. Ideal para quienes buscan mantenerse activos sin salir de casa.
            </p>

            <div className="blog-section">
                <h2>1. Sentadillas – 3x15</h2>
                <p>Trabaja piernas y glúteos. Mantén el pecho erguido y la espalda recta.</p>
            </div>

            <div className="blog-section">
                <h2>2. Flexiones – 3x10</h2>
                <p>Ejercicio básico para pecho, hombros y tríceps. Puedes hacerlas con rodillas apoyadas si eres principiante.</p>
            </div>

            <div className="blog-section">
                <h2>3. Puente de glúteos – 3x15</h2>
                <p>Fortalece glúteos y zona lumbar. Apretar fuerte en la parte alta del movimiento.</p>
            </div>

            <div className="blog-section">
                <h2>4. Plancha – 3x30 seg</h2>
                <p>Activa el core y mejora la estabilidad general. Mantén el cuerpo recto como tabla.</p>
            </div>

            <div className="blog-section">
                <h2>5. Zancadas – 3x10 por pierna</h2>
                <p>Trabaja piernas, glúteos y equilibrio. Da un paso amplio hacia adelante y vuelve.</p>
            </div>

            <div className="blog-section">
                <h2>6. Elevaciones laterales con botellas – 3x12</h2>
                <p>Fortalece hombros. Usa botellas de agua o garrafas pequeñas como resistencia.</p>
            </div>

            <div className="blog-section conclusion">
                <h2>Conclusión</h2>
                <p>
                    Esta rutina es ideal para quienes quieren entrenar de forma completa sin salir de casa. Lo importante es la constancia y la técnica.
                </p>
                <p>
                    Se puede realizar 3 a 4 veces por semana, dejando al menos un día de descanso entre sesiones. ¡No se necesita más que voluntad y algo de espacio!
                </p>
            </div>
        </div>
    );
};

export default RutinaFullBody;
