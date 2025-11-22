import React, { forwardRef, useState } from "react";
import BannerPorEquipo from "../components/bannerPorEquipo";

const Equihipertrofia = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEquipo, setSelectedEquipo] = useState(null);

  const equipos = [
    { name: "Mancuernas", descripcion: "Press de banca, curl de bíceps, press de hombros, remo inclinado y sentadillas con mancuernas.", imagen: "/img-equipo-hipertrofia/mancuernas.jpg" },
    { name: "Barra Olímpica y Discos", descripcion: "Sentadilla, peso muerto, press de banca, press militar y remo con barra.", imagen: "/img-equipo-hipertrofia/barrra-olimpica.jpg" },
    { name: "Máquina de Poleas", descripcion: "Jalón de tríceps, curl de bíceps en polea, elevaciones de hombros, cruces de pecho y jalón al pecho.", imagen: "/img-equipo-hipertrofia/maquina-poleas.jpg" },
    { name: "Banco de Pesas Ajustable", descripcion: "Press de banca plano, inclinado y declinado, remo inclinado y ejercicios de tríceps en banco.", imagen: "/img-equipo-hipertrofia/banco-ajustable.webp" },
    { name: "Máquinas de Pecho (Pec Deck)", descripcion: "Aperturas y contracciones de pecho en máquina.", imagen: "/img-equipo-hipertrofia/maquina-pecho.jpg" },
    { name: "Máquina de Piernas (Leg Press)", descripcion: "Prensa de piernas, prensa en una sola pierna para cuádriceps, glúteos y femorales.", imagen: "/img-equipo-hipertrofia/maquina-piernas-abajo.jpg" },
    { name: "Rack de Sentadillas", descripcion: "Sentadillas, peso muerto rumano, press militar y levantamientos de barra en rack.", imagen: "/img-equipo-hipertrofia/rack-sentadilla.webp" },
    { name: "Máquina Smith", descripcion: "Sentadilla en máquina, press de banca en máquina.", imagen: "/img-equipo-hipertrofia/rack-smith.jpg" },
    { name: "Barras Paralelas para Fondos", descripcion: "Fondos de pecho y tríceps, ejercicios de hombros y planchas asistidas.", imagen: "/img-equipo-hipertrofia/barras-paralelas.jpg" },
    { name: "Máquina de Curl de Piernas", descripcion: "Curl de pierna acostado, curl sentado.", imagen: "/img-equipo-hipertrofia/maquina-curl-pierna.webp" },
    { name: "Máquina de Extensión de Piernas", descripcion: "Extensiones de pierna en diferentes ángulos.", imagen: "/img-equipo-hipertrofia/extension-pierna.jpg" },
    { name: "Cinturón para Carga de Peso", descripcion: "Dominadas con peso, fondos en barra paralela con peso.", imagen: "/img-equipo-hipertrofia/cinturon-carga-peso.webp" },
    { name: "Máquina de Abductores y Adductores", descripcion: "Abertura de piernas para abductores.", imagen: "/img-equipo-hipertrofia/maquina-aductores.webp" },
    { name: "Máquina de Remo Sentado", descripcion: "Remo en diferentes agarres.", imagen: "/img-equipo-hipertrofia/remo-sentado.jpg" },
    { name: "Máquina de Press de Hombros", descripcion: "Press de hombros sentado.", imagen: "/img-equipo-hipertrofia/press-hombro.jpg" },
    { name: "Barras para Curl de Bíceps", descripcion: "Curl de bíceps con barra EZ.", imagen: "/img-equipo-hipertrofia/barra-EZ.jpg" },
    { name: "Barra Hexagonal (Hex Bar)", descripcion: "Peso muerto, encogimientos de trapecio.", imagen: "/img-equipo-hipertrofia/barra-hexagonal.jpg" },
    { name: "Máquina Prensa Inclinada para Piernas", descripcion: "Prensa de piernas inclinada.", imagen: "/img-equipo-hipertrofia/sentadilla-inclinada.jpg" },
    { name: "Máquina para Elevación de Gemelos", descripcion: "Elevación de talones.", imagen: "/img-equipo-hipertrofia/maquina-gemelos.webp" },
    { name: "Cinturón de Levantamiento de Pesas", descripcion: "Soporte lumbar y refuerzo del core.", imagen: "/img-equipo-hipertrofia/cinturon-peso.jpg" }
  ];

  const openModal = (equipo) => {
    setSelectedEquipo(equipo);
    setIsModalOpen(true);
  };

  return (
    <div className="main-principal-equipo" ref={ref}>
      <BannerPorEquipo titulo={'Hipertrofia'} descripcion={'askdf'} img={'/img-icon/icon-hipertrofia.webp'} />
      <div className="main-equipo">
        {equipos.map((equipo, index) => (
          <div className="card" key={index}>
            <img src={equipo.imagen} alt={equipo.name} />
            <h3>{equipo.name}</h3>
            <span onClick={() => openModal(equipo)} className="btn-vermas">¿Para qué sirve?</span>
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

export default Equihipertrofia;
