// import React from 'react';
// import { useState } from 'react';




// const Navbar = () => {

//   const  nav = document.getElementById("navs");
//     const [nav1,setnav1]=useState(null)

//     function mostrar(){

//          const pepe = nav.classList.toggle('nav1');
//          setnav1(pepe)
//         // const pepe2 = nav.classList.toggle('nav2');
//     console.log('hola',nav1)
//         // nav.style.left = "0px";
//         // nav.style.backgroundColor = "red";

//     }


//     return (
//         <>

//             <header>
//                 <div className="icon" onClick={mostrar}>
//                     <i className="fa-solid fa-bars" id='btn-menu'></i>
//                 </div>

//                 <nav className='nav1' id='navs'> 
//                     <ul >
//                         <li><a href="">home</a></li>
//                         <li><a href="">blog</a></li>
//                         <li><a href="">secciones</a></li>
//                         <li><a href="">login</a></li>
//                         <li><a href="">register</a></li>

//                     </ul>


//                 </nav>
//             </header>


//         </>
//     );
// };

// export default Navbar;





import React, { useState, useRef } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
    const navRef = useRef(null);
    const btnref = useRef(null)


    useEffect(() => {
        const header = document.querySelector('header');

        const onScroll = () => {
            if (window.scrollY > 60) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    const mostrar = () => {


        if (navRef.current) {


            // navRef.current.classList.toggle('nav1');
            navRef.current.classList.toggle('nav2')

        }
    };
    const ocultar = () => {
        if (navRef.current) {

            navRef.current.classList.toggle('nav2')

        }
    };


    return (
        <>
            {/* logo esta en el archivo de img y estilos en logo.css* y el navbar pc en logo.css*/}
            <header>
                <div className="header-container">

                    {/* LOGO PRETORIANN */}
                    <div className="logo-container">
                        <a href="/" className="logo-link">
                            <img
                                src="/img/icon_casco.png"
                                alt="Icono de Casco Pretoriano"
                                className="logo-image"
                            />
                            <h3 className="logo-text">PRETORIANN</h3>
                        </a>
                    </div>

                    {/* BOTÓN MENÚ HAMBURGUESA */}
                    <div className="menu-icon">
                        <i
                            className="fa-solid fa-bars"
                            id="btn-menu"
                            ref={btnref}
                            onClick={mostrar}
                        ></i>
                    </div>

                    {/* MENÚ DESPLEGABLE */}
                    <nav className="nav1" id="navs" ref={navRef}>
                        <i
                            className="fa-solid fa-circle-xmark"
                            id="btn-close"
                            onClick={ocultar}
                        ></i>
                        <ul>
                            <li><a href="/"><i className="fa-solid fa-house"></i><span>Inicio</span> </a></li>
                            <li><a href="../disciplinas"><i className="fa-solid fa-dumbbell"></i> Disciplinas</a></li>
                            <li><a href="../entrenamiento"><i className="fa-solid fa-calendar-days"></i> Rutinas</a></li>
                            <li><a href="../nutricion"><i className="fa-solid fa-apple-whole"></i> Nutrición</a></li>
                            <li><a href="../blogpage"><i className="fa-solid fa-book-open"></i> Blog</a></li>
                            <li><a href="../calculadora"><i className="fa-solid fa-calculator"></i> Calculadora</a></li>
                            <li><a href="../contacto"><i className="fa-solid fa-envelope"></i> Contacto</a></li>
                        </ul>

                    </nav>

                </div >
            </header >

        </>
    );
};

export default Navbar;