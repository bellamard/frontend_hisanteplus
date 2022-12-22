import React from 'react';

const item = ({ title, subtitle, etat, myImage }) => {
    return (
        <div>
            <div>
                <image src={myImage} />
            </div>
            <div>
                <h3>
                    {title}
                </h3>
                <span>
                    {subtitle}
                </span>
            </div>
            <div>
                {etat}
            </div>



        </div>
    );
};

export default item;