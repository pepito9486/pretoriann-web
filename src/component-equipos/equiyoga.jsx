import React, { forwardRef, useState } from "react";
import BannerPorEquipo from "../components/bannerPorEquipo";

const Equiyoga = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEquipo, setSelectedEquipo] = useState(null);

  const equipos = [
    {
      name: "Esterilla de Yoga (Yoga Mat)",
      descripcion: "Posturas de pie, postura del niño (Balasana), savasana, entre otras.",
      imagen: "/img-equipo-yoga/esterilla.webp"
    },
    {
      name: "Bloques de Yoga",
      descripcion: "Postura del triángulo, media luna, cuervo, flexiones hacia adelante.",
      imagen: "/img-equipo-yoga/bloques.webp"
    },
    {
      name: "Correas o Cinturones de Yoga",
      descripcion: "Pinza, mariposa, apertura de caderas, flexibilidad en hombros.",
      imagen: "/img-equipo-yoga/correas.webp"
    },
    {
      name: "Bolster (Cojín de Yoga)",
      descripcion: "Savasana, postura del niño, torsiones suaves, extensiones de espalda.",
      imagen: "/img-equipo-yoga/cojines.webp"
    },
    {
      name: "Manta de Yoga",
      descripcion: "Soporte para rodillas, posturas de meditación, savasana.",
      imagen: "/img-equipo-yoga/mantas.webp"
    },
    {
      name: "Rueda de Yoga",
      descripcion: "Aperturas de espalda, extensiones de pecho, postura de la rueda.",
      imagen: "/img-equipo-yoga/rueda.webp"
    },
    {
      name: "Almohadillas para Rodillas",
      descripcion: "Gato, vaca, camello.",
      imagen: "/img-equipo-yoga/almohadilla.webp"
    },
    {
      name: "Silla de Yoga",
      descripcion: "Ángulo lateral extendido, torsiones sentadas, invertidas asistidas.",
      imagen: "/img-equipo-yoga/banco-yoga.webp"
    },
    {
      name: "Saco de Arena (Sandbag)",
      descripcion: "Postura del niño, relajación final, peso en espalda.",
      imagen: "/img-equipo-yoga/bolsa-arena.webp"
    },
    {
      name: "Pelotas de Yoga",
      descripcion: "Liberación miofascial en glúteos, espalda y hombros.",
      imagen: "/img-equipo-yoga/bolas.webp"
    }
  ];

  const informacion = (equipo) => {
    setIsModalOpen(true);
    setSelectedEquipo(equipo);
  };

  return (
    <div className="main-principal-equipo" ref={ref}>
      <BannerPorEquipo titulo={'Yoga'} descripcion={'klsadhf'} img={'/img-icon/icon-pilates.webp'} />
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

export default Equiyoga;

