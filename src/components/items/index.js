import React from 'react';

const Item = ({ title, subtitle, etat, myImage }) => {
    return (
        <div className='boxItem'>
            <div className='Iteminfos'>
                <img src="https://www.kindpng.com/picc/m/376-3768467_transparent-healthcare-icon-png-patient-info-icon-png.png" className="imgUser" alt={title} />
                <div className='ItemTitle'>
                    <h3>
                        {title}
                    </h3>
                    <span>
                        {subtitle}
                    </span>
                </div>
            </div>

            <div className='itemPa'>                
                    {etat}              
            </div>



        </div>
    );
};

export default Item;
