import React, { useState, forwardRef, } from "react";
import BannerPorEquipo from "../components/bannerPorEquipo";

const equiposCalistenia = [
  { name: "Anillas de Gimnasia", descripcion: "Uso: Muscle-ups, fondos, dominadas, trabajo de core y estabilidad.", imagen: "/img-equipo-calistenia/anillas-gimnasia.webp" },
  { name: "Bandas de Resistencia", descripcion: "Uso: Dominadas asistidas, estiramientos, progresiones, ejercicios de resistencia muscular.", imagen: "/img-equipo-calistenia/bandas-resistencia.webp" },
  { name: "Barra Paralelas Altas", descripcion: "Uso: Fondos (dips), planchas y ejercicios de empuje y tracción.", imagen: "/img-equipo-calistenia/barra-alta.webp" },
  { name: "Barra paralelas Baja", descripcion: "Uso: L-sits, planchas, fondos y flexiones, etc.", imagen: "/img-equipo-calistenia/barra-baja.webp" },
  { name: "Barra de Dominadas", descripcion: "Uso: Trabaja principalmente espalda, bíceps y core.", imagen: "/img-equipo-calistenia/barra-dominadas.webp" },
  { name: "Cajón Pliometrico", descripcion: "Entrenamiento explosivo de piernas y core.", imagen: "/img-equipo-calistenia/cajon-polimetrico.webp" },
  { name: "Chaleco de Peso", descripcion: "Uso: Progresión de ejercicios como dominadas, flexiones y sentadillas.", imagen: "/img-equipo-calistenia/chalecos-peso.webp" },
  { name: "Cinturón de Lastre", descripcion: "Uso: Aumenta la resistencia en ejercicios de peso corporal.", imagen: "/img-equipo-calistenia/cinturon-lastre.webp" },
  { name: "Pesas Rusas", descripcion: "Uso: Movimientos explosivos como swings, squats y trabajo de hombros.", imagen: "/img-equipo-calistenia/pesas-rusas.webp" },
  { name: "Rodillo Abdominal", descripcion: "Uso: Desplazamientos hacia adelante para fortalecer el abdomen y la estabilidad.", imagen: "/img-equipo-calistenia/rodillo-abdominal.webp" },
  { name: "Soga de Saltar", descripcion: "Uso: Mejora el cardio y la coordinación.", imagen: "/img-equipo-calistenia/soga-saltar.webp" },
  { name: "Soporte para Flexiones", descripcion: "Uso: Aumenta la intensidad de las flexiones.", imagen: "/img-equipo-calistenia/soporte-flexiones.webp" },
  { name: "Suspension TRX", descripcion: "Uso: Ejercicios de tracción, empuje y trabajo de core.", imagen: "/img-equipo-calistenia/suspension-trx.webp" },
  { name: "Discos Deslizantes", descripcion: "Uso: Movimientos de core, flexiones y trabajo de estabilidad.", imagen: "/img-equipo-calistenia/discos-deslizantes.webp" },
  { name: "Colchonetas de Yoga", descripcion: "Uso: Ideal para ejercicios de flexibilidad, estiramientos y movimientos en el suelo.", imagen: "/img-equipo-calistenia/esterilla.webp" },
  { name: "Lastres para Tobillos y Muñecas", descripcion: "Uso: Ideal para ejercicios de piernas, brazos, movimientos de core.", imagen: "/img-equipo-calistenia/pesas-tobillos.webp" }
];

const Equicalistenia = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEquipo, setSelectedEquipo] = useState(null);

  const openModal = (equipo) => { setSelectedEquipo(equipo); setIsModalOpen(true); };

  return (<>
    <BannerPorEquipo titulo={'Calistenia'} descripcion={'Descubre cómo aprovechar las herramientas adecuadas para potenciar tu entrenamiento.'} img={'/img-icon/icon-calistenia.webp'} />

    <div className="main-principal-equipo" ref={ref} >
      <div className="main-equipo">
        {equiposCalistenia.map((equipo, index) => (
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
            <button className="btn-closed" onClick={() => setIsModalOpen(false)}>X</button>
            <img className="imagen-modal-equipo" src={selectedEquipo.imagen} alt={selectedEquipo.name} />
            <h2>{selectedEquipo.name}</h2>
            <p>{selectedEquipo.descripcion}</p>
            <div className="contenedor-btn-amazon">
              <a href="https://www.amazon.com" target="_blank" className="btn-amazon">
                <img src="../img-icon/logo-amazon.webp" alt="Amazon Logo" className="amazon-icon" />
                Comprar en Amazon
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  </>);
});

export default Equicalistenia;
