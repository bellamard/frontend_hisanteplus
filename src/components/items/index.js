import React from 'react';
import logo from '../../logo.png';

const Item = ({ title, subtitle, etat, myImage }) => {
    return (
        <div className='boxItem'>
            <div className='Iteminfos'>
                <img src={logo} className="imgUser" alt={title} />
                <div className='ItemTitle'>
                    <h3>
                        {title}
                    </h3>
                    <span>
                        {subtitle}
                    </span>
                </div>
            </div>

            <div>
                {etat}
            </div>



        </div>
    );
};

export default Item;
