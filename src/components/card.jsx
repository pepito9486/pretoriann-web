// card.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {

    return (
        <Link to={props.link} draggable='false' style={{ textDecoration: 'none' }}>
            <div className={props.class1} onClick={props.onClick} style={{ backgroundColor: props.fondo }}>
                <img src={props.src} alt={props.title || ''} draggable='false' />
                <div className={props.class2}>
                    <h3 style={{ textDecoration: 'none' }}>{props.title}</h3>

                </div>
            </div>
        </Link >
    );
}

export default Card;