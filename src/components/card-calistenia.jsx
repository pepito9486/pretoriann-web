import React from "react";
import YouTubeEmbed from "../pages/YouTubeEmbed"; // ajusta la ruta según tu estructura

const VideoCard = ({ videoid, title, description, thumbnail, isActive, onActivate }) => {
    return (
        <>
            {/* ver en index.css aproximandamente 1071*/}
            <div className="wrap-img-iframe">
                {isActive ? (
                    // hemos cambiado iframe por YouTubeEmbed
                    <YouTubeEmbed
                        videoId={videoid}
                        title={title}
                    />
                ) : (
                    <img
                        className="img-card-disciplina"
                        src={`https://img.youtube.com/vi/${thumbnail}/hqdefault.webp`}
                        alt="Previsualización del video"
                        loading="lazy"
                    />
                )}
            </div>

            {!isActive && (
                <div className="vervideo-play" onClick={onActivate}>
                    <i className="fa-solid fa-circle-play"></i>
                    <strong>Ver Video</strong>
                </div>
            )}

            <p className="p-li-ejercicio">{description}</p>

            <div className="footer-acordeon-video">
                <div className="h3-angle">
                    <h3 className="h3-vervideo">{title}</h3>
                </div>
            </div>
        </>
    );
};

export default VideoCard;

