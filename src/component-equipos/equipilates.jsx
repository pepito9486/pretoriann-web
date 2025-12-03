import React, { forwardRef, useState } from "react";
import BannerPorEquipo from "../components/bannerPorEquipo";

const Equipilates = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEquipo, setSelectedEquipo] = useState(null);

  const equipos = [
    {
      name: "Reformer",
      descripcion: "Pierna en la barra, patadas de pierna, 'Footwork', estiramientos de piernas y brazos, ejercicios de coordinación y abdominales.",
      utilidad: "Mejora control corporal, postura, flexibilidad y fuerza del core.",
      imagen: "/img-equipo-pilates/maquina-reformer.webp",
      amazonlink: "https://amzn.to/3M6ixLU",
      recomendado: true
    },
    {
      name: "Cadillac (Trapecio)",
      descripcion: "Hangings, 'Tower', ejercicios de piernas, abdominales asistidos y movimientos de fortalecimiento del core.",
      utilidad: "Aumenta estabilidad, elongación y movilidad global de la columna.",
      imagen: "/img-equipo-pilates/maquina-cadillac.webp"
    },
    {
      name: "Wunda Chair (Silla de Pilates)",
      descripcion: "Step-downs, levantamientos de pierna, trabajo de hombros y brazos, extensiones de cadera y ejercicios de equilibrio.",
      utilidad: "Fortalece core, glúteos y hombros; mejora equilibrio y control.",
      imagen: "/img-equipo-pilates/maquina-wunda.webp"
    },
    {
      name: "Ladder Barrel (Barril de Pilates)",
      descripcion: "Estiramientos de la columna, ejercicios de core, trabajo de espalda y de flexibilidad.",
      utilidad: "Mejora flexibilidad, alineación de la columna y movilidad torácica.",
      imagen: "/img-equipo-pilates/maquina-barril.webp"
    },
    {
      name: "Spine Corrector (Corrector de Columna)",
      descripcion: "Estiramientos de espalda, ejercicios para core y oblicuos, y movimientos para mejorar la postura y el equilibrio.",
      utilidad: "Corrige postura, refuerza el core y libera tensión en la espalda.",
      imagen: "/img-equipo-pilates/maquina-correctora.webp"
    },
    {
      name: "Magic Circle (Aro de Pilates)",
      descripcion: "Squeezes de piernas y brazos, abdominales con resistencia, ejercicios de fortalecimiento del core y trabajos de resistencia de glúteos.",
      utilidad: "Aumenta activación muscular y mejora control y resistencia.",
      imagen: "/img-equipo-pilates/aro-pilates.webp"
    },
    {
      name: "Fitball (Pelota de Pilates)",
      descripcion: "Plancha en fitball, estiramientos de espalda, abdominales, trabajo de piernas y posturas de equilibrio.",
      utilidad: "Mejora estabilidad, fuerza del core y equilibrio general.",
      imagen: "/img-equipo-pilates/pelota-pilates.webp",
      amazonlink: "https://amzn.to/4pDEcJE",
      recomendado: true
    },
    {
      name: "Mats o Colchonetas",
      descripcion: "Abdominales, series de piernas, extensiones de espalda, estiramientos de cuerpo completo, y movilidad de la columna.",
      utilidad: "Brinda comodidad, estabilidad y soporte para movimientos en suelo.",
      imagen: "/img-equipo-pilates/colchonetas.webp",
      amazonlink: "https://amzn.to/4pDEcJE",
      recomendado: true
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
            {equipo.recomendado && (
              <div className="badge-recomendado">RECOMENDADO</div>
            )}
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

            <p><strong>Ejercicios:</strong> {selectedEquipo.descripcion}</p>
            <p className="utilidad"><strong>Beneficios:</strong> {selectedEquipo.utilidad}</p>

            {selectedEquipo.amazonlink && (
              <div className="contenedor-btn-amazon">
                <a
                  href={selectedEquipo.amazonlink}
                  target="_blank"
                  className="btn-amazon"
                >
                  <img src="../img-icon/logo-amazon.webp" alt="Amazon Logo" className="amazon-icon" />
                  Ver en Amazon
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
});

export default Equipilates;

