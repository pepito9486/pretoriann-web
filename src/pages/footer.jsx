import React from 'react';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-logo">Pretoriann</p>

                <ul className="footer-links">
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/productos">Productos</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>

                <ul className="footer-links legales">
                    <li><a href="/avisolegal">Aviso Legal</a></li>
                    <li><a href="/privacidad">Política de privacidad</a></li>
                    <li><a href="/cookies">Política de cookies</a></li>
                    <li><a href="/terminos">Términos de uso</a></li>
                </ul>

                <p className="footer-copy">
                    &copy; {new Date().getFullYear()} Pretoriann. Todos los derechos reservados.
                </p>
            </div>
        </footer>

    );
};

export default Footer;
