

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

            <div className="nota-recomendado">
                <p className="nota-equipos">
                    <strong>Nota importante:</strong> Queremos destacar que los equipos marcados como <em>Recomendados</em> no solo han sido seleccionados por su precio, sino también porque son los más eficientes y prácticos para quienes prefieren entrenar desde la comodidad de su casa.
                </p>


            </div>
        </>
    );
};

export default BannerPorEquipo;