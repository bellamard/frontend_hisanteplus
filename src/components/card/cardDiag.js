import React from 'react';


const CardDiag = ({ title, numberTotal, numberValide, icons, card }) => {
    return (
        <div className={card}>
            <div className='cardTitles'>
                <h4>{title}</h4>
                <i className={icons}>{numberTotal}</i>
            </div>
            <div className='cardSubtitle'>
                <h3>{numberValide}/ {numberTotal}</h3>
                <div></div>
            </div>
        </div >
    );
};

export default CardDiag;