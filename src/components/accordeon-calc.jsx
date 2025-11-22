import { forwardRef, useEffect, useState } from "react";
import Calorias from "../component-calcu/form-calorias";
import Imc from "../component-calcu/form-imc";
import Macros from "../component-calcu/form-macros";
import Rcm from "../component-calcu/form-rcm";
import Deficit from "../component-calcu/form-deficit";
import Gcorporal from "../component-calcu/form-grasacorpor";
import Caloriaxkilo from "../component-calcu/form-caloriaxkilo";
import OtrasEstimaciones from "../component-calcu/otrasestimaciones";


const AccordeonCalculadora = forwardRef((props, ref) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [bolean, setbolean] = useState(true);
  const [calculo, setcalculo] = useState(null)

  const mapcomponent = {
    calorias: <Calorias />,
    imc: <Imc />,
    rcm: <Rcm />,
    macros: <Macros />,
    deficit: <Deficit />,
    pgc: <Gcorporal />,
    kilocal: <Caloriaxkilo />,
    otros: <OtrasEstimaciones />



  }

  useEffect(() => {
    const componenteSeleccionado = mapcomponent[props.calc]
    setcalculo(componenteSeleccionado)

  }, [props.calc])


  function toggleAccordion() {
    setbolean(!bolean);
    setActiveIndex(bolean);
  }

  return (
    // acordeon 
    <>
      <div className="acordeon-calculadora" onClick={() => toggleAccordion()}>

        <img src={props.image} alt="" />
        <h3>{props.h2}</h3>
        {activeIndex == true ? (
          <i className="fa-solid fa-angle-up "></i>
        ) : (
          <i className="fa-solid fa-angle-down"></i>
        )}

      </div>

      {/* videos */}
      <div
        className="macros"
        style={{ maxHeight: activeIndex == true ? "800px" : "0" }}
      >

        <span>{calculo}</span>



      </div>
    </>
  );
});

export default AccordeonCalculadora;
