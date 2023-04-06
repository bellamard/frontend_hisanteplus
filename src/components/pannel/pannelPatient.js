import React, { useState } from 'react';
import Card from '../card';
import CardAdd from '../card/cardAdd';
import CardDiag from '../card/cardDiag';
import { Link,useNavigate } from "react-router-dom";
const PannelPatient = ({ patientTotal, patientValide, ajouter }) => {
    const history = useNavigate();
    const LinkAdd=()=>history('add');
    return (
        <div>
            
            <div className='boxCard'>
                <Link to='add' className='card cardColor'>             
                    <CardAdd title='Ajouter' numberTotal={patientTotal} numberValide={patientValide} icons="bi bi-person-fill-add"/>
                </Link> 
                <CardDiag title='Mes Patients' numberTotal={patientTotal} numberValide={patientValide} icons="bi bi-person-rolodex" card="card cardColorbluesky" />
                <Card title='Patients' numberTotal={patientTotal} numberValide={patientValide} icons="bi bi-people-fill" card="card cardColorgreen" />
            </div>
            <hr />


        </div>
    );
};

export default PannelPatient;