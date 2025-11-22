import React, { forwardRef, useState } from "react";
import BannerPorEquipo from "../components/bannerPorEquipo";

const equipos = [
  { nombre: "Kettlebells (Pesas Rusas)", uso: "Kettlebell swings, press de hombro, goblet squat, levantamientos tipo clean.", imagen: "/img-equipo-funcional/pesas-rusas.webp" },
  { nombre: "Bandas de Resistencia", uso: "Asistencia para dominadas, press de hombro, pull-aparts, activación de glúteos.", imagen: "/img-equipo-funcional/bandas-resistencia.jpg" },
  { nombre: "Mancuernas (Dumbbells)", uso: "Sentadillas con press, filas de remo, lunges, curl de bíceps.", imagen: "/img-equipo-funcional/mancuernas.webp" },
  { nombre: "Cuerda de Batida (Battle Rope)", uso: "Entrenamiento de fuerza y resistencia cardiovascular.", imagen: "/img-equipo-funcional/cuerda-batidas.webp" },
  { nombre: "Cajón de Salto (Plyo Box)", uso: "Se usa para trabajar la potencia y velocidad en saltos.", imagen: "/img-equipo-funcional/cajon-polimetrico.webp" },
  { nombre: "Balón Medicinal (Medicine Ball)", uso: "Wall balls, lanzamientos de balón, abdominales con balón.", imagen: "/img-equipo-funcional/balon-medicinal.webp" },
  { nombre: "Suspencion TRX", uso: "Ejercicios de tracción, empuje y trabajo de core.", imagen: "/img-equipo-funcional/suspension-trx.jpg" },
  { nombre: "Sandbags (Sacos de Arena)", uso: "Cargas de peso, clean and press, carry, fuerza y estabilidad.", imagen: "/img-equipo-funcional/sacos-arena.jpg" },
  { nombre: "Pesas Rusas de Trineo (Sled)", uso: "Empuje de trineo, arrastre, velocidad y arrastre lateral.", imagen: "/img-equipo-funcional/pesas-trineo.jpg" },
  { nombre: "Rodillo de Espuma (Foam Roller)", uso: "Ayuda en la recuperación y movilidad al aliviar la tensión muscular.", imagen: "/img-equipo-funcional/rodillos-masaje.jpg" },
  { nombre: "Fitball (Pelota Suiza)", uso: "Abdominales con pelota, estiramientos, planchas.", imagen: "/img-equipo-funcional/pelota-estabilidad.webp" },
  { nombre: "Soga de Salto (Jump Rope)", uso: "Double-unders, single-unders, agilidad, quema calorías.", imagen: "/img-equipo-funcional/soga-saltar.webp" },
  { nombre: "Escalera de Agilidad", uso: "Zancadas, saltos, coordinación lateral, mejora la agilidad.", imagen: "/img-equipo-funcional/escalera-agilidad.jpg" },
  { nombre: "Conos de Entrenamiento", uso: "Cambios de dirección, slaloms y ejercicios de reacción.", imagen: "/img-equipo-funcional/conos.webp" },
  { nombre: "Lastres para Tobillos y Muñecas", uso: "Ideal para ejercicios de piernas, brazos, movimientos de core.", imagen: "/img-equipo-funcional/pesas-tobillos.jpg" }
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
            <img src={equipo.imagen} alt={equipo.nombre} />
            <h3>{equipo.nombre}</h3>
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

export default Equifuncional;

