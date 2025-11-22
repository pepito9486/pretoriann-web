import { useState, useEffect } from "react";


const CookiesBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookiesConsent");
        if (!consent) setVisible(true);
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookiesConsent", "accepted");
        setVisible(false);
        // Aquí podrías activar GA4, YouTube o AdSense más adelante si lo necesitas
    };

    const handleReject = () => {
        localStorage.setItem("cookiesConsent", "rejected");
        setVisible(false);
        // Aquí podrías bloquear scripts externos si el usuario los rechaza
    };

    if (!visible) return null;

    return (
        <div className="cookies-banner">
            <p>
                Este sitio utiliza cookies propias y de terceros (como YouTube) para mejorar tu
                experiencia y analizar el tráfico. Puedes{" "}
                <strong>aceptarlas</strong> o <strong>rechazarlas</strong>. Más información en nuestra{" "}
                <a href="/cookies" target="_blank" rel="noopener noreferrer">
                    Política de Cookies
                </a>.
            </p>

            <div className="cookies-buttons">
                <button className="accept" onClick={handleAccept}>
                    Aceptar
                </button>
                <button className="reject" onClick={handleReject}>
                    Rechazar
                </button>
            </div>
        </div>
    );
};

export default CookiesBanner;
