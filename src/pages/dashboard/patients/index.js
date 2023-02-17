import React, { useState } from 'react';
import '../Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HeaderDash from '../../../components/header/headerDash';
import Options from '../../../components/option';
import PannelPatient from '../../../components/pannel/pannelPatient';
import Item from '../../../components/items';
import { Link, NavLink, useHistory } from "react-router-dom";
import axios from "axios";

const Patients = () => {
    const [userName, setUserName] = useState('inconnue');
    const [patientTotal, setPatientTotal] = useState(0);
    const [patientValide, setPatientValide] = useState(0);
    const [patients, setPatients] = useState([{ names: 'kris', code: 895, date: '08/02/2021' }, { names: 'krist', code: 896, date: '02/02/2021' }]);

    const GetPatients = () => patients.map((patient, id) => (<Link className='LinkItem' to={`${patient.code}`}><Item key={id} title={patient.names} subtitle={patient.code} etat={patient.date} /></Link>));
    return (
        <div className='containerPannel'>
            <Options activePatient='Links active' activeMeet='Links' activeSick='Links' />
            <div className='layout'>
                <HeaderDash userName={userName} />
                <PannelPatient patientTotal={patientTotal} patientValide={patientValide} />
                <GetPatients />
            </div>
        </div>
    );
};

export default Patients;