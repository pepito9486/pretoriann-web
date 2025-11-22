

const BannerPorEquipo = (props) => {
    return (
        <>
            <div class="banner">
                <div class="banner-content">
                    <div class="banner-image">
                        <img src={props.img} alt="Equipos de Entrenamiento" />
                    </div>
                    <div class="banner-text">
                        <h1>{props.titulo}</h1>
                        {/* <p>{props.descripcion}</p> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerPorEquipo;