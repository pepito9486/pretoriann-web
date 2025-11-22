// Slider.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './card';

function Slider(props) {
  const caruselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const cards = [
    { src: '/img-carrusel-icon/icon-sistema-muscular.webp', title: 'Sistema Muscular', link: '/sistema muscular' },
    { src: '/img-carrusel-icon/icon-disciplinas.webp', title: 'Disciplinas Fitness', link: '/disciplinas' },
    { src: '/img-carrusel-icon/icon-entrenamiento.webp', title: 'Rutinas', link: '/entrenamiento' },
    { src: '/img-carrusel-icon/icon-nutricion.webp', title: 'Nutricion', link: '/nutricion' },
    { src: '/img-carrusel-icon/icon-calculadora.webp', title: 'Calculadora', link: '/calculadora' },
    { src: '/img-carrusel-icon/icon-dietas.webp', title: 'Dietas', link: '/dietas' },
    { src: '/img-carrusel-icon/icon-equipos.webp', title: 'Equipos de Entrenamiento', link: '/equipamiento' }
  ];

  useEffect(() => {
    const carusel = caruselRef.current;

    const savedIndex = parseInt(localStorage.getItem('slider-index'));
    if (!isNaN(savedIndex)) {
      const cardsInDOM = carusel.querySelectorAll('.' + props.clase1);
      const card = cardsInDOM[savedIndex];
      if (card) {
        setActiveIndex(savedIndex);
        setTimeout(() => {
          scrollToCard(card, carusel);
        }, 0);
        localStorage.removeItem('slider-index');
      }
    }

    let isDragging = false, startX, startScrollleft;

    const dragStart = (e) => {
      isDragging = true;
      carusel.classList.add('dragging');
      startX = e.pageX;
      startScrollleft = carusel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      carusel.scrollLeft = startScrollleft - (e.pageX - startX);
    };

    const dragStop = () => {
      isDragging = false;
      carusel.classList.remove('dragging');
    };

    carusel.addEventListener('mousedown', dragStart);
    carusel.addEventListener('mousemove', dragging);
    document.addEventListener('mouseup', dragStop);

    return () => {
      carusel.removeEventListener('mousedown', dragStart);
      carusel.removeEventListener('mousemove', dragging);
      document.removeEventListener('mouseup', dragStop);
    };
  }, [props.clase1]);

  const scrollToCard = (card, container) => {
    const cardRect = card.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const cardFullyVisible = cardRect.left >= containerRect.left && cardRect.right <= containerRect.right;

    if (!cardFullyVisible) {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const scrollTo = cardCenter - container.clientWidth / 2;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const clampedScroll = Math.min(Math.max(scrollTo, 0), maxScroll);

      if (Math.abs(container.scrollLeft - clampedScroll) > 5) {
        container.scrollTo({
          left: clampedScroll,
          behavior: 'auto'
        });
      }
    }
  };

  const handleCardClick = (index, link) => {
    const carusel = caruselRef.current;
    const cardsInDOM = carusel.querySelectorAll('.' + props.clase1);
    const card = cardsInDOM[index];

    if (card) {
      scrollToCard(card, carusel);
      setActiveIndex(index);
      localStorage.setItem('slider-index', index);

      setTimeout(() => {
        navigate(link);
      }, 100);
    }
  };

  return (
    <>
      <div className='main-dad'>
        <div className='main-fitness2' ref={caruselRef}>
          {cards.map((card, index) => (
            <Card
              key={index}
              src={card.src}
              class1={props.clase1}
              class2={props.clase2}
              title={card.title}
              link={card.link}
              onClick={() => handleCardClick(index, card.link)}
              fondo={props.fondocard}
            />
          ))}
        </div>

        <div className="indicadores">
          {activeIndex !== null &&
            cards.map((_, index) => (
              <span
                key={index}
                className={`indicador ${activeIndex === index ? 'activo' : ''}`}
              ></span>
            ))}
        </div>
      </div>
    </>
  );
}

export default Slider;
























