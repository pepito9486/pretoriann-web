import React, { forwardRef, useState } from "react";
import BannerPorEquipo from "../components/bannerPorEquipo";

const equipos = [
  {
    name: "Kettlebells (Pesas Rusas)",
    descripcion: "Kettlebell swings, press de hombro, goblet squat, levantamientos tipo clean.",
    utilidad: "Mejora fuerza total, potencia, estabilidad y resistencia.",
    imagen: "/img-equipo-funcional/pesas-rusas.webp",
    amazonlink: "https://amzn.to/4pcGSye",
    recomendado: true
  },

  {
    name: "Bandas de Resistencia",
    descripcion: "Asistencia para dominadas, press de hombro, pull-aparts, activación de glúteos.",
    utilidad: "Aumenta fuerza, movilidad y activación muscular.",
    imagen: "/img-equipo-funcional/bandas-resistencia.webp",
    amazonlink: "https://amzn.to/48rh0Ya",
    recomendado: true
  },

  {
    name: "Mancuernas (Dumbbells)",
    descripcion: "Sentadillas con press, filas de remo, lunges, curl de bíceps.",
    utilidad: "Desarrolla fuerza general y permite entrenar todo el cuerpo.",
    imagen: "/img-equipo-funcional/mancuernas.webp",
    amazonlink: "https://amzn.to/43XdhQM",
    recomendado: true
  },

  {
    name: "Cuerda de Batida (Battle Rope)",
    descripcion: "Entrenamiento de fuerza y resistencia cardiovascular.",
    utilidad: "Mejora resistencia, coordinación y potencia del tren superior.",
    imagen: "/img-equipo-funcional/cuerda-batidas.webp"
  },

  {
    name: "Cajón de Salto (Plyo Box)",
    descripcion: "Se usa para trabajar la potencia y velocidad en saltos.",
    utilidad: "Desarrolla potencia en piernas y mejora coordinación.",
    imagen: "/img-equipo-funcional/cajon-polimetrico.webp"
  },

  {
    name: "Balón Medicinal (Medicine Ball)",
    descripcion: "Wall balls, lanzamientos de balón, abdominales con balón.",
    utilidad: "Mejora potencia, estabilidad y fuerza del core.",
    imagen: "/img-equipo-funcional/balon-medicinal.webp"
  },

  {
    name: "Suspencion TRX",
    descripcion: "Ejercicios de tracción, empuje y trabajo de core.",
    utilidad: "Fortalece todo el cuerpo con énfasis en core y estabilidad.",
    imagen: "/img-equipo-funcional/suspension-trx.webp"
  },

  {
    name: "Sandbags (Sacos de Arena)",
    descripcion: "Cargas de peso, clean and press, carry, fuerza y estabilidad.",
    utilidad: "Desarrolla fuerza funcional y estabilidad en movimientos reales.",
    imagen: "/img-equipo-funcional/sacos-arena.webp"
  },

  {
    name: "Pesas Rusas de Trineo (Sled)",
    descripcion: "Empuje de trineo, arrastre, velocidad y arrastre lateral.",
    utilidad: "Mejora fuerza de piernas, potencia, aceleración y resistencia.",
    imagen: "/img-equipo-funcional/pesas-trineo.webp"
  },

  {
    name: "Rodillo de Espuma (Foam Roller)",
    descripcion: "Ayuda en la recuperación y movilidad al aliviar la tensión muscular.",
    utilidad: "Reduce tensión muscular y mejora movilidad.",
    imagen: "/img-equipo-funcional/rodillos-masaje.webp"
  },

  {
    name: "Fitball (Pelota Suiza)",
    descripcion: "Abdominales con pelota, estiramientos, planchas.",
    utilidad: "Mejora estabilidad, postura y fuerza del core.",
    imagen: "/img-equipo-funcional/pelota-estabilidad.webp"
  },

  {
    name: "Soga de Salto (Jump Rope)",
    descripcion: "Double-unders, single-unders, agilidad, quema calorías.",
    utilidad: "Mejora cardio, agilidad y coordinación.",
    imagen: "/img-equipo-funcional/soga-saltar.webp"
  },

  {
    name: "Escalera de Agilidad",
    descripcion: "Zancadas, saltos, coordinación lateral, mejora la agilidad.",
    utilidad: "Mejora velocidad, coordinación y reacción.",
    imagen: "/img-equipo-funcional/escalera-agilidad.webp"
  },

  {
    name: "Conos de Entrenamiento",
    descripcion: "Cambios de dirección, slaloms y ejercicios de reacción.",
    utilidad: "Mejora agilidad, velocidad y precisión de movimiento.",
    imagen: "/img-equipo-funcional/conos.webp"
  },

  {
    name: "Lastres para Tobillos y Muñecas",
    descripcion: "Ideal para ejercicios de piernas, brazos, movimientos de core.",
    utilidad: "Aumenta resistencia y tonifica piernas y brazos.",
    imagen: "/img-equipo-funcional/pesas-tobillos.webp"
  }
];

const Equifuncional = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEquipo, setSelectedEquipo] = useState(null);

  const abrirModal = (equipo) => {
    setSelectedEquipo(equipo);
    setIsModalOpen(true);
  };

  return (
    <div className="main-principal-equipo" ref={ref}>
      <BannerPorEquipo titulo={'Funcional'} descripcion={'asdjfh'} img={'/img-icon/icon-funcional.webp'} />
      <div className="main-equipo">
        {equipos.map((equipo, index) => (
          <div className="card" key={index}>
            {equipo.recomendado && (
              <div className="badge-recomendado">RECOMENDADO</div>
            )}
            <img src={equipo.imagen} alt={equipo.name} />
            <h3>{equipo.name}</h3>
            <span onClick={() => abrirModal(equipo)} className="btn-vermas">¿Para qué sirve?</span>
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

export default Equifuncional;


