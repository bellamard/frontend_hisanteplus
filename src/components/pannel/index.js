import React from 'react';
import Card from '../card';

const Pannel = ({ patientTotal, patientValide, meetTotal, meetValider, sickTotal, sickValider }) => {
    return (
        <div>
            <div>
                <Card numberTotal={patientTotal} numberValide={patientValide} icons="bi bi-person-fill" />
                <Card numberTotal={meetTotal} numberValide={meetValider} icons="bi bi-calendar-date-fill" />
                <Card numberTotal={sickTotal} numberValide={sickValider} icons="bi bi-virus" />
            </div>
        </div>
    );
};

export default Pannel;