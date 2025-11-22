import React from 'react';
import Baner from '../components/baner';
import { Link } from 'react-router-dom';

const blogPosts = [
    {
        title: '5 mitos sobre proteínas que debes conocer',
        summary: '¿Las proteínas dañan los riñones? ¿Cuánta necesitas realmente? Te explicamos todo.',
        slug: 'blogmitos',
        date: 'Mayo 2025',
        category: 'Nutrición',
        image: '/img-blog/mitos-proteinas.webp',
    },
    {
        title: 'Entrena sin gimnasio: guía con lo mínimo',
        summary: 'Descubre cómo usar bandas, mancuernas y tu cuerpo para progresar desde casa.',
        slug: 'blogentrenarencasa',
        date: 'Mayo 2025',
        category: 'Equipamiento',
        image: '/img-blog/entrenar-casa.webp',
    },
    {
        title: 'Errores comunes al entrenar',
        summary: 'Te enseñamos a evitar los típicos errores que distorsionan tus resultados.',
        slug: 'blogerrores',
        date: 'Abril 2025',
        category: 'Calculadora / Dietas',
        image: '/img-blog/errores-entrenar.webp',
    },
];



const BlogPage = () => {
    const coloresGym = ['#FFB74D', '#C62828'];
    const bannersGym = [
        {
            img: '/img-banner-principal/termo-banner1-disciplinas.webp',
            title: 'Accesorios para Entrenar Mejor',
            link: '/afiliados/gimnasio',
            boton: 'Ver en Amazon',
        },
        {
            img: '/img-banner-principal/remo-banner2-disciplinas.webp',
            title: 'Hipertrofia para Principiantes',
            link: '/blog/guia-hipertrofia',
            boton: 'Saber mas',
        },
    ];
    return (
        <>
            <Baner banners={bannersGym} colores={coloresGym} />
            <div className="blog-container">
                <div className="blog-banner">
                    <h1>Blog de Fitness y Salud</h1>
                    <p className="blog-intro">
                        Aprende más, entrena mejor. Aquí compartimos guías, consejos y análisis para llevar tu bienestar al siguiente nivel.
                    </p>
                </div>


                <div className="blog-grid">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="blog-card"
                            style={{ backgroundImage: `url(${post.image})` }}
                        >
                            <div className="blog-overlay">
                                <h2>{post.title}</h2>
                                <p className="blog-date">{post.date} • {post.category}</p>
                                <p className="blog-summary">{post.summary}</p>
                                <Link to={`/${post.slug}`} className="btn-blog">Leer más</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BlogPage;


