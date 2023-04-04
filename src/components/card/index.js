import React from 'react';
import { Link } from "react-router-dom";




const Card = ({ title, numberTotal, numberValide, icons, card, link }) => {
    return (
        
        <Link className={card} to={link}>
            <div className='cardTitles'>
                <h4>{title}</h4>
                <i className={icons}></i>

            </div>
            <div className='cardSubtitle'>
                <h3>{numberValide} / {numberTotal}</h3>
            </div>
        </Link >
       
    );
};

export default Card;