import React from 'react';
import Card from '../card';

const Pannel = ({ patientTotal, patientValide, meetTotal, meetValider, sickTotal, sickValider }) => {
    return (
        <div>
            <div className='boxCard'>
                <Card title='Patients' numberTotal={patientTotal} numberValide={patientValide} icons="bi bi-person-fill" card="card cardColor" />
                <Card title='Rendez-vous' numberTotal={meetTotal} numberValide={meetValider} icons="bi bi-calendar-date-fill" card="card cardColorWhite" />
                <Card title='Malades' numberTotal={sickTotal} numberValide={sickValider} icons="bi bi-virus" card="card cardColorPurple" />
            </div>
            <hr />


        </div>
    );
};

export default Pannel;