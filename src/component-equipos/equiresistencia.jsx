import React, { forwardRef, useState } from "react";
import BannerPorEquipo from "../components/bannerPorEquipo";

const Equiresistencia = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEquipo, setSelectedEquipo] = useState(null);

  const equipos = [
    { name: "Bandas de Resistencia", uso: "Elevación lateral, sentadillas con banda, press de hombros, extensiones de tríceps y activación de glúteos.", imagen: "/img-equipo-resistencia/bandas-resistencia.webp" },
    { name: "Cuerda para Saltar", uso: "Saltos simples, dobles (double-unders), saltos cruzados y entrenamiento de intervalos.", imagen: "/img-equipo-resistencia/soga-saltar.webp" },
    { name: "Pesas de Muñeca y Tobillo", uso: "Levantamiento de piernas, flexión de bíceps, elevación de rodillas y trabajo de glúteos.", imagen: "/img-equipo-resistencia/pesas-tobillos.webp" },
    { name: "Bicicleta Estacionaria", uso: "Entrenamientos de intervalos (HIIT), pedaleo en colina y sesiones de resistencia continua.", imagen: "/img-equipo-resistencia/bicicleta.webp" },
    { name: "Rueda de Abdominales (Ab Wheel)", uso: "Roll-outs, variaciones laterales para oblicuos y rodadas asistidas con banda.", imagen: "/img-equipo-resistencia/rodillo-abdominal.webp" },
    { name: "Mancuernas Ligeras", uso: "Elevaciones frontales y laterales, press de hombros, curls de bíceps y extensiones de tríceps.", imagen: "/img-equipo-resistencia/mancuernas.webp" },
    { name: "Kettlebells (Pesas Rusas)", uso: "Swings, cleans, sentadillas con kettlebell y levantamientos turcos.", imagen: "/img-equipo-resistencia/pesas-rusas.webp" },
    { name: "Bosu Ball", uso: "Sentadillas sobre el Bosu, planchas, flexiones y lunges en una sola pierna.", imagen: "/img-equipo-resistencia/pelota-bosu.webp" },
    { name: "Med Ball (Pelota Medicinal)", uso: "Giros rusos, slams, lanzamientos en pared y abdominales con giro.", imagen: "/img-equipo-resistencia/balon-medicinal.webp" },
    { name: "Battle Ropes (Cuerdas de Batalla)", uso: "Ondas, látigos laterales, círculos y ejercicios de arrastre.", imagen: "/img-equipo-resistencia/cuerda-batidas.webp" },
    { name: "Saco de Arena (Sandbag)", uso: "Sentadillas con carga, cargadas de peso, press sobre cabeza y lunges.", imagen: "/img-equipo-resistencia/sacos-arena.webp" }
  ];

  const informacion = (equipo) => {
    setIsModalOpen(true);
    setSelectedEquipo(equipo);
  };

  return (
    <div className="main-principal-equipo" ref={ref}>
      <BannerPorEquipo titulo={'Resistencia'} descripcion={'adkslhfkl'} img={'/img-icon/icon-resistencia.webp'} />
      <div className="main-equipo">
        {equipos.map((equipo, index) => (
          <div className="card" key={index}>
            <img src={equipo.imagen} alt={equipo.name} />
            <h3>{equipo.name}</h3>
            <span onClick={() => informacion(equipo)} className="btn-vermas">Más info</span>
          </div>
        ))}
      </div>

      {isModalOpen && selectedEquipo && (
        <div className="overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="btn-closed" onClick={() => setIsModalOpen(false)}>x</button>
            <img className="imagen-modal-equipo" src={selectedEquipo.imagen} alt={selectedEquipo.name} />
            <h2>{selectedEquipo.name}</h2>
            <p>{selectedEquipo.uso}</p>
            <div className="contenedor-btn-amazon">
              <a href="https://www.amazon.com" target="_blank" className="btn-amazon">
                <img src="../img-icon/logo-amazon.webp" alt="Amazon Logo" className="amazon-icon" />
                Adquirir en Amazon
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default Equiresistencia;
