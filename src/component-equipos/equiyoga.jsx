import React, { forwardRef, useState } from "react";
import BannerPorEquipo from "../components/bannerPorEquipo";

const Equiyoga = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEquipo, setSelectedEquipo] = useState(null);

  const equipos = [
    {
      name: "Esterilla de Yoga (Yoga Mat)",
      descripcion: "Posturas de pie, postura del niño (Balasana), savasana, entre otras.",
      utilidad: "Brinda estabilidad, comodidad y mejor agarre durante la práctica.",
      imagen: "/img-equipo-yoga/esterilla.webp",
      amazonlink: "https://amzn.to/3KuRfyg",
      recomendado: true
    },
    {
      name: "Bloques de Yoga",
      descripcion: "Postura del triángulo, media luna, cuervo, flexiones hacia adelante.",
      utilidad: "Mejora la alineación y permite adaptar posturas a diferentes niveles.",
      imagen: "/img-equipo-yoga/bloques.webp"
    },
    {
      name: "Correas o Cinturones de Yoga",
      descripcion: "Pinza, mariposa, apertura de caderas, flexibilidad en hombros.",
      utilidad: "Facilita estiramientos profundos y mejora la flexibilidad progresiva.",
      imagen: "/img-equipo-yoga/correas.webp",
      amazonlink: "https://amzn.to/4pgP80i",
      recomendado: true,
    },
    {
      name: "Bolster (Cojín de Yoga)",
      descripcion: "Savasana, postura del niño, torsiones suaves, extensiones de espalda.",
      utilidad: "Proporciona soporte y ayuda a relajar profundamente el cuerpo.",
      imagen: "/img-equipo-yoga/cojines.webp"
    },
    {
      name: "Manta de Yoga",
      descripcion: "Soporte para rodillas, posturas de meditación, savasana.",
      utilidad: "Aumenta comodidad y soporte en posturas de suelo y meditación.",
      imagen: "/img-equipo-yoga/mantas.webp"
    },
    {
      name: "Rueda de Yoga",
      descripcion: "Aperturas de espalda, extensiones de pecho, postura de la rueda.",
      utilidad: "Mejora apertura de pecho y movilidad de la columna.",
      imagen: "/img-equipo-yoga/rueda.webp"
    },
    {
      name: "Almohadillas para Rodillas",
      descripcion: "Gato, vaca, camello.",
      utilidad: "Protege las articulaciones y reduce el impacto en posturas de apoyo.",
      imagen: "/img-equipo-yoga/almohadilla.webp"
    },
    {
      name: "Silla de Yoga",
      descripcion: "Ángulo lateral extendido, torsiones sentadas, invertidas asistidas.",
      utilidad: "Aporta estabilidad y permite realizar posturas asistidas con seguridad.",
      imagen: "/img-equipo-yoga/banco-yoga.webp"
    },
    {
      name: "Saco de Arena (Sandbag)",
      descripcion: "Postura del niño, relajación final, peso en espalda.",
      utilidad: "Mejora relajación profunda y ayuda a liberar tensión corporal.",
      imagen: "/img-equipo-yoga/bolsa-arena.webp"
    },
    {
      name: "Pelotas de Yoga",
      descripcion: "Liberación miofascial en glúteos, espalda y hombros.",
      utilidad: "Alivian tensión muscular y mejoran la movilidad y recuperación.",
      imagen: "/img-equipo-yoga/bolas.webp",
      amazonlink: "https://amzn.to/4rntw3z",
      recomendado: true
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

export default Equiyoga;


