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

const Navbar = () => {
    const navRef = useRef(null);
    const btnref = useRef(null)

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

            <header>
                <div className='header-container'>
                    <div className="icon" >
                        <a href="/" style={{ textDecoration: 'none' }}><i className="fa-solid fa-bars" id='btn-menu'></i></a>
                    </div>

                    {/* <div className='search-bar'>
                    <input type="text" placeholder='Estoy buscando...' />
                 </div> */}

                    <div className="icon" >
                        <i className="fa-solid fa-bars" id='btn-menu' ref={btnref} onClick={mostrar} ></i>
                    </div>

                    <nav className='nav1' id='navs' ref={navRef}>
                        <i className="fa-solid fa-circle-xmark" id='btn-close' onClick={ocultar}></i>
                        <ul>
                            <li><a href="/">home</a></li>
                            <li><a href="/blogpage">blog</a></li>
                            <li><a href="/disciplinas">secciones</a></li>
                            {/* <li><a href="">login</a></li>
                            <li><a href="">register</a></li> */}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;