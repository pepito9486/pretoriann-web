import React, { useEffect, useState } from 'react';

// colores
function Baner({ banners, colores }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [banners.length]);

    return (
        // estilos en index-diseño-secciones-pc y index.csscolores[index]
        <div className="baner">
            {banners.map((banner, index) => (
                <div
                    key={index}
                    className={`banner-item ${index === current ? 'active' : ''}`}
                    style={{ backgroundColor: 'none' }}
                >
                    <img src={banner.img} alt={banner.title} className='no-lazy' />
                    <div className="banner-content">
                        <h2>{banner.title}</h2>
                        {/* <p>{banner.description}</p> */}
                        <a href={banner.link} className="btn-banner">{banner.boton}</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Baner;
