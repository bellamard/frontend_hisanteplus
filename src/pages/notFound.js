import React from 'react';
import Header from '../components/header';

const notFound = () => {
    return (
        <div className='panelBody'>
            <Header />
            <div className='panelnofound'>
                <h3 className='title2'>Hi sante</h3>
                <p className='messageNofound'>La Page n'existe pas </p>
            </div>

        </div>
    );
};

export default notFound;