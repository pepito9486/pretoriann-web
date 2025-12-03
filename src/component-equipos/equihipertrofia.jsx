import React, { forwardRef, useState } from "react";
import BannerPorEquipo from "../components/bannerPorEquipo";

const Equihipertrofia = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEquipo, setSelectedEquipo] = useState(null);

  const equipos = [
    {
      name: "Mancuernas",
      descripcion: "Press de banca, curl de bíceps, press de hombros, remo inclinado y sentadillas con mancuernas.",
      utilidad: "Desarrolla fuerza y volumen en pecho, brazos, hombros y piernas.",
      imagen: "/img-equipo-hipertrofia/mancuernas.webp",
      amazonlink: "https://amzn.to/3KwkEbi",
      recomendado: true
    },

    {
      name: "Barra Olímpica y Discos",
      descripcion: "Sentadilla, peso muerto, press de banca, press militar y remo con barra.",
      utilidad: "Aumenta fuerza máxima y masa muscular en todo el cuerpo.",
      imagen: "/img-equipo-hipertrofia/barrra-olimpica.webp"
    },

    {
      name: "Máquina de Poleas",
      descripcion: "Jalón de tríceps, curl de bíceps en polea, elevaciones de hombros, cruces de pecho y jalón al pecho.",
      utilidad: "Permite aislar músculos y mejorar definición y control.",
      imagen: "/img-equipo-hipertrofia/maquina-poleas.webp",
      amazonlink: "https://amzn.to/4ollKEF",
      recomendado: true
    },

    {
      name: "Cinturón de Levantamiento de Pesas",
      descripcion: "Soporte lumbar y refuerzo del core.",
      utilidad: "Mejora estabilidad y reduce riesgo de lesiones en levantamientos.",
      imagen: "/img-equipo-hipertrofia/cinturon-peso.webp",
      amazonlink: "https://amzn.to/3MfQGZz",
      recomendado: true,

    },

    {
      name: "Banco de Pesas Ajustable",
      descripcion: "Press de banca plano, inclinado y declinado, remo inclinado y ejercicios de tríceps en banco.",
      utilidad: "Permite trabajar pecho, hombros y tríceps en múltiples ángulos.",
      imagen: "/img-equipo-hipertrofia/banco-ajustable.webp"
    },

    {
      name: "Máquinas de Pecho (Pec Deck)",
      descripcion: "Aperturas y contracciones de pecho en máquina.",
      utilidad: "Aísla el pectoral y mejora la congestión muscular.",
      imagen: "/img-equipo-hipertrofia/maquina-pecho.webp"
    },

    {
      name: "Máquina de Piernas (Leg Press)",
      descripcion: "Prensa de piernas, prensa en una sola pierna para cuádriceps, glúteos y femorales.",
      utilidad: "Desarrolla fuerza y volumen en piernas sin cargar la espalda.",
      imagen: "/img-equipo-hipertrofia/maquina-piernas-abajo.webp"
    },

    {
      name: "Rack de Sentadillas",
      descripcion: "Sentadillas, peso muerto rumano, press militar y levantamientos de barra en rack.",
      utilidad: "Permite levantamientos pesados con seguridad y progresión.",
      imagen: "/img-equipo-hipertrofia/rack-sentadilla.webp"
    },

    {
      name: "Máquina Smith",
      descripcion: "Sentadilla en máquina, press de banca en máquina.",
      utilidad: "Brinda estabilidad y facilita trabajar técnica y aislamiento.",
      imagen: "/img-equipo-hipertrofia/rack-smith.webp"
    },

    {
      name: "Barras Paralelas para Fondos",
      descripcion: "Fondos de pecho y tríceps, ejercicios de hombros y planchas asistidas.",
      utilidad: "Fortalece pecho, tríceps y hombros con peso corporal.",
      imagen: "/img-equipo-hipertrofia/barras-paralelas.webp"
    },

    {
      name: "Máquina de Curl de Piernas",
      descripcion: "Curl de pierna acostado, curl sentado.",
      utilidad: "Aísla femorales y mejora fuerza de la parte posterior del muslo.",
      imagen: "/img-equipo-hipertrofia/maquina-curl-pierna.webp"
    },

    {
      name: "Máquina de Extensión de Piernas",
      descripcion: "Extensiones de pierna en diferentes ángulos.",
      utilidad: "Aísla cuádriceps y mejora definición del muslo.",
      imagen: "/img-equipo-hipertrofia/extension-pierna.webp"
    },

    {
      name: "Cinturón para Carga de Peso",
      descripcion: "Dominadas con peso, fondos en barra paralela con peso.",
      utilidad: "Aumenta intensidad y fuerza en ejercicios de peso corporal.",
      imagen: "/img-equipo-hipertrofia/cinturon-carga-peso.webp"
    },

    {
      name: "Máquina de Abductores y Adductores",
      descripcion: "Abertura de piernas para abductores.",
      utilidad: "Fortalece abductores y aductores, mejora estabilidad pélvica.",
      imagen: "/img-equipo-hipertrofia/maquina-aductores.webp"
    },

    {
      name: "Máquina de Remo Sentado",
      descripcion: "Remo en diferentes agarres.",
      utilidad: "Fortalece espalda media, trapecio y bíceps.",
      imagen: "/img-equipo-hipertrofia/remo-sentado.webp"
    },

    {
      name: "Máquina de Press de Hombros",
      descripcion: "Press de hombros sentado.",
      utilidad: "Desarrolla deltoides y incrementa fuerza del tren superior.",
      imagen: "/img-equipo-hipertrofia/press-hombro.webp"
    },

    {
      name: "Barras para Curl de Bíceps",
      descripcion: "Curl de bíceps con barra EZ.",
      utilidad: "Aísla bíceps y mejora fuerza y volumen del brazo.",
      imagen: "/img-equipo-hipertrofia/barra-EZ.webp"
    },

    {
      name: "Barra Hexagonal (Hex Bar)",
      descripcion: "Peso muerto, encogimientos de trapecio.",
      utilidad: "Reduce carga lumbar y mejora fuerza en trapecio y piernas.",
      imagen: "/img-equipo-hipertrofia/barra-hexagonal.webp"
    },

    {
      name: "Máquina Prensa Inclinada para Piernas",
      descripcion: "Prensa de piernas inclinada.",
      utilidad: "Desarrolla fuerza en cuádriceps y glúteos en un ángulo seguro.",
      imagen: "/img-equipo-hipertrofia/sentadilla-inclinada.webp"
    },

    {
      name: "Máquina para Elevación de Gemelos",
      descripcion: "Elevación de talones.",
      utilidad: "Fortalece gemelos y mejora estabilidad del tobillo.",
      imagen: "/img-equipo-hipertrofia/maquina-gemelos.webp"
    },


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
            {equipo.recomendado && (
              <div className="badge-recomendado">RECOMENDADO</div>
            )}
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

export default Equihipertrofia;

