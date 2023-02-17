import React from 'react';
import Card from '../card';
import CardAdd from '../card/cardAdd';
import CardDiag from '../card/cardDiag';

const PannelPatient = ({ patientTotal, patientValide }) => {
    return (
        <div>
            <div className='boxCard'>
                <CardAdd title='Ajouter' numberTotal={patientTotal} numberValide={patientValide} icons="bi bi-person-fill-add" card="card cardColor" />
                <CardDiag title='Mes Patients' numberTotal={patientTotal} numberValide={patientValide} icons="bi bi-person-rolodex" card="card cardColorbluesky" />
                <Card title='Patients' numberTotal={patientTotal} numberValide={patientValide} icons="bi bi-people-fill" card="card cardColorgreen" />
            </div>
            <hr />


        </div>
    );
};

export default PannelPatient;