import { useEffect, useState } from "react";

const YouTubeEmbed = ({ videoId, title }) => {
    const [consent, setConsent] = useState(false);

    // 🔹 Revisa si el usuario ya aceptó las cookies al cargar el componente
    useEffect(() => {
        const storedConsent = localStorage.getItem("cookiesConsent");
        if (storedConsent === "accepted") setConsent(true);
    }, []);

    // 🔹 Guarda la aceptación en localStorage y actualiza el estado
    const handleAcceptCookies = () => {
        localStorage.setItem("cookiesConsent", "accepted");
        setConsent(true);
    };

    // 🔹 Extrae solo el ID del video, aunque venga en formato URL completa lo que ha pasado
    // es que hemos recibido toda la url desde el componente padre www.youtube.com/emb/ghsjxg , pues queremos solo ghsjxg , entonces lo extraemos mediante la siguiente funcion, o podemos cambiar uno por uno el array que esta en el padre y solo enviar,ghsjxg

    //const regex = /(?:v=|\/embed\/|\/shorts\/|youtu\.be\/)([^?&"'>]+)/; en conclusion es una expresion , chpt resuelve las dudas

    const extractVideoId = (input) => {
        // Expresión regular que detecta distintos formatos de YouTube
        const regex = /(?:v=|\/embed\/|\/shorts\/|youtu\.be\/)([^?&"'>]+)/;
        const match = input.match(regex);
        return match ? match[1] : input; // Si no hay coincidencia, devuelve el valor original
    };

    const finalId = extractVideoId(videoId); // Resultado limpio del ID del video

    // 🔹 Si el usuario no aceptó cookies, muestra aviso + botón
    if (!consent) {
        return (
            <div
                style={{
                    position: "absolute",
                    inset: 0, // Ocupa todo el espacio del contenedor padre
                    zIndex: 999,
                    backgroundColor: "#000",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "300px",
                    borderRadius: "8px",
                    textAlign: "center",
                    padding: "1rem",
                    gap: "1rem",
                }}
            >
                <p>
                    Este contenido de YouTube está bloqueado porque no has aceptado las
                    cookies.
                    <br />
                    <strong>Acepta las cookies</strong> para ver el video.
                </p>
                <button
                    onClick={handleAcceptCookies}
                    style={{
                        backgroundColor: "#ffd700",
                        color: "#000",
                        border: "none",
                        borderRadius: "6px",
                        fontWeight: "600",
                        padding: "0.6rem 1.2rem",
                        cursor: "pointer",
                    }}
                >
                    Aceptar cookies
                </button>
            </div>
        );
    }

    // 🔹 Si el usuario ya aceptó, muestra el video embebido
    return (
        <iframe
            width="100%"
            height="300"
            src={`https://www.youtube.com/embed/${finalId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ borderRadius: "8px" }}
        ></iframe>
    );
};

export default YouTubeEmbed;
