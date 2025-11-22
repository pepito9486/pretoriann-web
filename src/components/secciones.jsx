import React from 'react';
import Card from './card';

function Section(props) {
  return (
    <>
      <h1>Lo que debemos saber del mundo Fitness</h1>


      <section className='main-content'>

        <Card
          src={'/img/sistemamuscular.webp'}
          class1={'feature-box'}
          class2={'info'}
          title={'Sistema Muscular'}
          parrafo={'Entendamos Nuestra estructura muscular...'}
          boton={'Ver mas'}
        />

        <Card
          src={'/img/entrenamiento.webp'}
          class1={'feature-box'}
          class2={'info'}
          title={'Entrenamiento y Rutinas'}
          parrafo={'Disciplinas y sus enfoques,Tecnicas etc..'}
          boton={'Ver mas'}
        />

        <Card
          src={'/img/nutricion.webp'}
          class1={'feature-box'}
          class2={'info'}
          title={'nutricion'}
          parrafo={'valor nutricional alimentos de REACT'}
          boton={'Ver mas'}
        />

        <Card
          src={'/img/calculadorapeso.webp'}
          class1={'feature-box'}
          class2={'info'}
          title={'Calculadora'}
          parrafo={'calculo de indice masa corporal, indice basal, etc..'}
          boton={'Ver mas'}
        />


        <Card
          src={'/img/dietas.webp'}
          class1={'feature-box'}
          class2={'info'}
          title={'Recetas'}
          parrafo={'Recetas faciles, como crear tu propio menu..'}
          boton={'Ver mas'}
        />



        <Card
          src={'/img/equipos.webp'}
          class1={'feature-box'}
          class2={'info'}
          title={'Equipos de Entrenamiento'}
          parrafo={'conoce la jerga del Gym empezando por sus aparatos'}
          boton={'Ver mas'}
        />


        <Card
          src={'/img/tienda.webp'}
          class1={'feature-box'}
          class2={'info'}
          title={'Tienda'}
          parrafo={'Echa un vistazo a nuestros productos Afiliados'}
          boton={'Ver mas'}
        />

        <Card
          src={'/img/videos.webp'}
          class1={'feature-box'}
          class2={'info'}
          title={'Videos'}
          parrafo={'Echa un vistazo a videos de entrenamientos'}
          boton={'Ver mas'}
        />

      </section>


    </>

  );
}

export default Section;