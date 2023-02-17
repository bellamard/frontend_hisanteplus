import React from 'react';


const CardAdd = ({ title, icons, card }) => {
    return (
        <div className={card}>
            <div className='cardTitles'>
                <h4>{title}</h4>
                <i className={icons}></i>
            </div>

        </div >
    );
};

export default CardAdd;