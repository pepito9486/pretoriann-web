

import React, { forwardRef, useState } from 'react';


const Accordeon = forwardRef((props, ref) => {
    const [activeIndex, setActiveIndex] = useState(null)
    const [bolean, setbolean] = useState(false)

    function toggleAccordion() {
        setbolean(!bolean)
        setActiveIndex(bolean)
    }


    return (
        <>



            <strong>{props.title}</strong>
            {/* fa-minus fa-plus */}

            <li onClick={() => toggleAccordion()
            }>
                <strong>{props.exercise}</strong>
                {activeIndex == true ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}

            </li>
            <div className='videos' style={{ maxHeight: activeIndex == true ? '500px' : '0' }}>
                <img src={props.image} alt="" />{props.rutine}
            </div>





        </>
    );
});

export default Accordeon;