import React, { useState, forwardRef, } from "react";
import BannerPorEquipo from "../components/bannerPorEquipo";

const equiposCalistenia = [
  { name: "Anillas de Gimnasia", descripcion: "Uso: Muscle-ups, fondos, dominadas, trabajo de core y estabilidad.", utilidad: "Desarrolla fuerza en espalda, pecho, hombros y core.", imagen: "/img-equipo-calistenia/anillas-gimnasia.webp", amazonlink: "" },

  { name: "Bandas de Resistencia", descripcion: "Uso: Dominadas asistidas, estiramientos, progresiones, ejercicios de resistencia muscular.", utilidad: "Mejora fuerza, movilidad y progresiones de empuje y tracción.", imagen: "/img-equipo-calistenia/bandas-resistencia.webp", amazonlink: "https://amzn.to/3Mtnhew", recomendado: true },

  { name: "Barra Paralelas Altas", descripcion: "Uso: Fondos (dips), planchas y ejercicios de empuje y tracción.", utilidad: "Fortalece pecho, tríceps, hombros y estabilidad del core.", imagen: "/img-equipo-calistenia/barra-alta.webp", amazonlink: "https://amzn.to/44vNHm5", recomendado: true },

  { name: "Barra paralelas Baja", descripcion: "Uso: L-sits, planchas, fondos y flexiones, etc.", utilidad: "Fortalece pecho bajo, tríceps, hombros y zona media.", imagen: "/img-equipo-calistenia/barra-baja.webp", amazonlink: "https://amzn.to/3M9TbN5", recomendado: true },

  { name: "Barra de Dominadas", descripcion: "Uso: Trabaja principalmente espalda, bíceps y core.", utilidad: "Desarrolla dorsales, trapecio, bíceps y fuerza de agarre.", imagen: "/img-equipo-calistenia/barra-dominadas.webp", amazonlink: "https://amzn.to/4pDxbsl", recomendado: true },

  { name: "Cajón Pliometrico", descripcion: "Entrenamiento explosivo de piernas y core.", utilidad: "Mejora potencia, salto, agilidad y fuerza de piernas.", imagen: "/img-equipo-calistenia/cajon-polimetrico.webp", amazonlink: "" },

  { name: "Chaleco de Peso", descripcion: "Uso: Progresión de ejercicios como dominadas, flexiones y sentadillas.", utilidad: "Aumenta la intensidad y desarrolla fuerza general.", imagen: "/img-equipo-calistenia/chalecos-peso.webp" },

  { name: "Cinturón de Lastre", descripcion: "Uso: Aumenta la resistencia en ejercicios de peso corporal.", utilidad: "Incrementa fuerza en dominadas, dips y tren superior.", imagen: "/img-equipo-calistenia/cinturon-lastre.webp" },

  { name: "Pesas Rusas", descripcion: "Uso: Movimientos explosivos como swings, squats y trabajo de hombros.", utilidad: "Fortalece glúteos, piernas, core y hombros.", imagen: "/img-equipo-calistenia/pesas-rusas.webp", amazonlink: "" },

  { name: "Rodillo Abdominal", descripcion: "Uso: Desplazamientos hacia adelante para fortalecer el abdomen y la estabilidad.", utilidad: "Enfoca el core, estabilizadores y zona lumbar.", imagen: "/img-equipo-calistenia/rodillo-abdominal.webp", amazonlink: "" },

  { name: "Soga de Saltar", descripcion: "Uso: Mejora el cardio y la coordinación.", utilidad: "Mejora resistencia, coordinación y agilidad.", imagen: "/img-equipo-calistenia/soga-saltar.webp", amazonlink: "" },

  { name: "Soporte para Flexiones", descripcion: "Uso: Aumenta la intensidad de las flexiones.", utilidad: "Trabaja pecho, tríceps, hombros y estabilidad del core.", imagen: "/img-equipo-calistenia/soporte-flexiones.webp", amazonlink: "https://amzn.to/4p5JD49" },

  { name: "Suspension TRX", descripcion: "Uso: Ejercicios de tracción, empuje y trabajo de core.", utilidad: "Fortalece todo el cuerpo con énfasis en core y estabilidad.", imagen: "/img-equipo-calistenia/suspension-trx.webp" },

  { name: "Discos Deslizantes", descripcion: "Uso: Movimientos de core, flexiones y trabajo de estabilidad.", utilidad: "Activa abdomen, glúteos y músculos estabilizadores.", imagen: "/img-equipo-calistenia/discos-deslizantes.webp", amazonlink: "" },

  { name: "Colchonetas de Yoga", descripcion: "Uso: Ideal para ejercicios de flexibilidad, estiramientos y movimientos en el suelo.", utilidad: "Mejora comodidad, estabilidad y seguridad en el suelo.", imagen: "/img-equipo-calistenia/esterilla.webp", amazonlink: "" },

  { name: "Lastres para Tobillos y Muñecas", descripcion: "Uso: Ideal para ejercicios de piernas, brazos, movimientos de core.", utilidad: "Aumenta resistencia y tonifica piernas, glúteos y brazos.", imagen: "/img-equipo-calistenia/pesas-tobillos.webp", amazonlink: "" }
];

const Equicalistenia = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEquipo, setSelectedEquipo] = useState(null);

  const openModal = (equipo) => { setSelectedEquipo(equipo); setIsModalOpen(true); };

  return (

    <>
      <BannerPorEquipo titulo={'Calistenia'} descripcion={'Descubre cómo aprovechar las herramientas adecuadas para potenciar tu entrenamiento.'} img={'/img-icon/icon-calistenia.webp'} />

      <div className="main-principal-equipo" ref={ref} >
        <div className="main-equipo">
          {equiposCalistenia.map((equipo, index) => (
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
    </>

  );
});

export default Equicalistenia;
