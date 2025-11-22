import React from 'react';

const Bannertitulos = (props) => {
    return (
        <>
            <div className='h1-concept-entrenamiento' style={{ backgroundImage: `url("${props.style}` }}>
                <div className='overlay-train'></div>
                <h1 className='h1-entrenamiento' >{props.title}</h1>
                <p className='p-entrenamiento'>{props.p}
                </p>
                {/* style={{ backgroundImage: 'url("../img-banner/banner-entrenamiento.webp")' }} */}
            </div>
        </>
    );
};

export default Bannertitulos;