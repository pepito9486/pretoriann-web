import React, { forwardRef, useState } from "react";
import BannerPorEquipo from "../components/bannerPorEquipo";

const Equipilates = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEquipo, setSelectedEquipo] = useState(null);

  const equipos = [
    {
      name: "Reformer",
      descripcion: "Pierna en la barra, patadas de pierna, 'Footwork', estiramientos de piernas y brazos, ejercicios de coordinación y abdominales.",
      imagen: "/img-equipo-pilates/maquina-reformer.webp"
    },
    {
      name: "Cadillac (Trapecio)",
      descripcion: "Hangings, 'Tower', ejercicios de piernas, abdominales asistidos y movimientos de fortalecimiento del core.",
      imagen: "/img-equipo-pilates/maquina-cadillac.webp"
    },
    {
      name: "Wunda Chair (Silla de Pilates)",
      descripcion: "Step-downs, levantamientos de pierna, trabajo de hombros y brazos, extensiones de cadera y ejercicios de equilibrio.",
      imagen: "/img-equipo-pilates/maquina-wunda.webp"
    },
    {
      name: "Ladder Barrel (Barril de Pilates)",
      descripcion: "Estiramientos de la columna, ejercicios de core, trabajo de espalda y de flexibilidad.",
      imagen: "/img-equipo-pilates/maquina-barril.webp"
    },
    {
      name: "Spine Corrector (Corrector de Columna)",
      descripcion: "Estiramientos de espalda, ejercicios para core y oblicuos, y movimientos para mejorar la postura y el equilibrio.",
      imagen: "/img-equipo-pilates/maquina-correctora.webp"
    },
    {
      name: "Magic Circle (Aro de Pilates)",
      descripcion: "Squeezes de piernas y brazos, abdominales con resistencia, ejercicios de fortalecimiento del core y trabajos de resistencia de glúteos.",
      imagen: "/img-equipo-pilates/aro-pilates.webp"
    },
    {
      name: "Fitball (Pelota de Pilates)",
      descripcion: "Plancha en fitball, estiramientos de espalda, abdominales, trabajo de piernas y posturas de equilibrio.",
      imagen: "/img-equipo-pilates/pelota-pilates.webp"
    },
    {
      name: "Mats o Colchonetas",
      descripcion: "Abdominales, series de piernas, extensiones de espalda, estiramientos de cuerpo completo, y movilidad de la columna.",
      imagen: "/img-equipo-pilates/colchonetas.webp"
    }
  ];

  const informacion = (equipo) => {
    setSelectedEquipo(equipo);
    setIsModalOpen(true);
  };

  return (
    <div className="main-principal-equipo" ref={ref}>
      <BannerPorEquipo titulo={'Pilates'} descripcion={'alñksjf'} img={'/img-icon/icon-pilates.webp'} />
      <div className="main-equipo">
        {equipos.map((equipo, index) => (
          <div className="card" key={index}>
            <img src={equipo.imagen} alt={equipo.name} />
            <h3>{equipo.name}</h3>
            <span onClick={() => informacion(equipo)} className="btn-vermas">¿Para qué sirve?</span>
          </div>
        ))}
      </div>

      {isModalOpen && selectedEquipo && (
        <div className="overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="btn-closed" onClick={() => setIsModalOpen(false)}>x</button>
            <img className="imagen-modal-equipo" src={selectedEquipo.imagen} alt={selectedEquipo.name} />
            <h2>{selectedEquipo.name}</h2>
            <p>{selectedEquipo.descripcion}</p>
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

export default Equipilates;
