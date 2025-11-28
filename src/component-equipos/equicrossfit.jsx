import React, { forwardRef, useState } from "react";
import BannerPorEquipo from "../components/bannerPorEquipo";

const Equicrossfit = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEquipo, setSelectedEquipo] = useState(null);

  const equipos = [
    { name: "Barra Olímpica", descripcion: "Se utiliza para levantamientos de peso como sentadillas, peso muerto, clean and jerk, y snatch.", imagen: "/img-equipo-crossfit/barra-olimpica.webp" },
    { name: "Discos de Pesas", descripcion: "Añaden peso a la barra y están diseñados para soportar caídas desde altura.", imagen: "/img-equipo-crossfit/discos-peso.webp" },
    { name: "Kettlebells (Pesas Rusas)", descripcion: "Fortalece la estabilidad del núcleo y se usa en ejercicios balísticos y de fuerza.", imagen: "/img-equipo-crossfit/pesas-rusas.webp" },
    { name: "Cuerda de Batida (Battle Rope)", descripcion: "Entrenamiento de fuerza y resistencia cardiovascular.", imagen: "/img-equipo-crossfit/cuerda-batidas.webp" },
    { name: "Cajón de Salto (Plyo Box)", descripcion: "Se usa para trabajar la potencia y velocidad en saltos y ejercicios de fuerza funcional.", imagen: "/img-equipo-crossfit/cajon-salto.webp" },
    { name: "Máquina de Remo", descripcion: "Entrenamiento cardiovascular de bajo impacto que involucra la mayoría de los músculos principales.", imagen: "/img-equipo-crossfit/maquina-remo.webp" }
  ];

  const informacion = (equipo) => {
    setSelectedEquipo(equipo);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="main-principal-equipo" ref={ref}>
        <BannerPorEquipo titulo={'Crossfit'} descripcion={'asdlkf'} img={'/img-icon/icon-crossfit.webp'} />
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
    </>
  );
});

export default Equicrossfit;
