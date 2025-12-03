import React, { forwardRef, useState } from "react";
import BannerPorEquipo from "../components/bannerPorEquipo";

const Equicrossfit = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEquipo, setSelectedEquipo] = useState(null);

  const equipos = [
    {
      name: "Barra Olímpica",
      descripcion: "Se utiliza para levantamientos de peso como sentadillas, peso muerto, clean and jerk, y snatch.",
      utilidad: "Desarrolla fuerza total en piernas, espalda y tren superior.",
      imagen: "/img-equipo-crossfit/barra-olimpica.webp",
      amazonlink: "https://amzn.to/4rxne1E",
      recomendado: true
    },

    {
      name: "Discos de Pesas",
      descripcion: "Añaden peso a la barra y están diseñados para soportar caídas desde altura.",
      utilidad: "Permiten progresión de fuerza en sentadillas, peso muerto y movimientos olímpicos.",
      imagen: "/img-equipo-crossfit/discos-peso.webp",
      amazonlink: "https://amzn.to/4amxwLz",
      recomendado: true
    },

    {
      name: "Kettlebells (Pesas Rusas)",
      descripcion: "Fortalece la estabilidad del núcleo y se usa en ejercicios balísticos y de fuerza.",
      utilidad: "Mejora fuerza, potencia, estabilidad del core y resistencia cardiovascular.",
      imagen: "/img-equipo-crossfit/pesas-rusas.webp",
      amazonlink: "https://amzn.to/4iycXOE",
      recomendado: true
    },

    {
      name: "Cuerda de Batida (Battle Rope)",
      descripcion: "Entrenamiento de fuerza y resistencia cardiovascular.",
      utilidad: "Mejora resistencia, potencia de brazos y condición física general.",
      imagen: "/img-equipo-crossfit/cuerda-batidas.webp"
    },

    {
      name: "Cajón de Salto (Plyo Box)",
      descripcion: "Se usa para trabajar la potencia y velocidad en saltos y ejercicios de fuerza funcional.",
      utilidad: "Desarrolla potencia de piernas, coordinación y velocidad.",
      imagen: "/img-equipo-crossfit/cajon-salto.webp"
    },

    {
      name: "Máquina de Remo",
      descripcion: "Entrenamiento cardiovascular de bajo impacto que involucra la mayoría de los músculos principales.",
      utilidad: "Fortalece espalda, brazos, piernas y mejora el cardio de forma segura.",
      imagen: "/img-equipo-crossfit/maquina-remo.webp"
    },

    {
      name: "Barra paralelas Baja",
      descripcion: "Uso: L-sits, planchas, fondos y flexiones, etc.",
      utilidad: "Fortalece pecho, tríceps, hombros y core.",
      imagen: "/img-equipo-calistenia/barra-baja.webp",
      amazonlink: "https://amzn.to/4rqg8vt",
      recomendado: true
    }
  ];

  const informacion = (equipo) => {
    setSelectedEquipo(equipo);
    setIsModalOpen(true);
  };

  return (
    <>
      <BannerPorEquipo titulo={'Crossfit'} descripcion={'asdlkf'} img={'/img-icon/icon-crossfit.webp'} />

      <div className="main-principal-equipo" ref={ref}>
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
    </>
  );
});

export default Equicrossfit;

