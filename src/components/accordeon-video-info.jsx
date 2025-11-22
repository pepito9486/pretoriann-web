import React from 'react';
import { useState } from 'react';

const AccordeonVideoInfo = (props) => {

    const [activeIndex, setActiveIndex] = useState(false);
    // const [bolean, setbolean] = useState(true);

    function toggleAccordion() {
        setActiveIndex(prevState => !prevState);
    }

    return (
        <>
            <div className="footer-acordeon-video">
                <div className="contenedor-videoh3icon">
                    <div className={`acordeon-disciplina-video ${activeIndex ? "active" : ""}`}
                        onClick={toggleAccordion}
                    >

                        {activeIndex == false ? (
                            <img src="/img-icon/logo-youtube.webp" alt="YouTube Logo" loading="lazy" />
                        ) : null}
                        <div className="h3-angle">


                            <h3 className='h3-vervideo'>Ver video</h3>
                            {activeIndex == true ? (
                                <i className="fa-solid fa-angle-up "></i>
                            ) : (
                                <i className="fa-solid fa-angle-down"></i>
                            )}
                        </div>

                    </div>


                </div>

                <div
                    className="macros"
                    style={{ maxHeight: activeIndex == true ? "800px" : "0" }}
                >

                    <iframe
                        width="560"
                        height="315"
                        src={props.src}
                        title="YouTube Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                </div>
            </div>
        </>
    );
};

export default AccordeonVideoInfo;