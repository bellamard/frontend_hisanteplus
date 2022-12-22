import React from 'react';


const Card = ({ title, numberTotal, numberValide, icons, card }) => {
    return (
        <div className={card}>
            <div className='cardTitles'>
                <h4>{title}</h4>
                <i className={icons}>{numberTotal}</i>

            </div>
            <div className='cardSubtitle'>
                <h3>{numberValide}/ {numberTotal}</h3>
            </div>
        </div >
    );
};

export default Card;