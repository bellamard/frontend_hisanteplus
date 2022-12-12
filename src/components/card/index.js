import React from 'react';


const Card = ({ numberTotal, numberValide, icons }) => {
    return (
        <div>
            <div>
                <i className={icons}>{numberTotal}</i>
            </div>
            <div>
                <h3>{numberValide}/ {numberTotal}</h3>
            </div>
        </div >
    );
};

export default Card;