import React from 'react';

function BannerSmall(props) {
    return (
        <>
            <section className="hero-calistenia">
                <div className="circle-img">
                    <img src={props.src} alt={props.alt} />
                </div>
                <h1>{props.h1}</h1>
            </section>

            <section className="descripcion-calistenia">
                <h2>{props.h2}</h2>
                <p>
                    {props.p}
                </p>
            </section>



        </>
    );
}

export default BannerSmall;