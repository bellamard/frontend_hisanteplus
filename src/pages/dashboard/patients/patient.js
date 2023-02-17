import React, { useState } from 'react';
import '../Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HeaderDash from '../../../components/header/headerDash';
import Options from '../../../components/option';
import PannelIdent from '../../../components/pannel/pannelIdent';
import Item from '../../../components/items';
import { Link, NavLink, useHistory } from "react-router-dom";
import axios from "axios";

const Patients = () => {
    const [userName, setUserName] = useState('inconnue');
    const [patientTotal, setPatientTotal] = useState(0);
    const [patientValide, setPatientValide] = useState(0);
    const [patients, setPatients] = useState({ names: 'kris', code: 895, date: '08/02/2021' });

    return (
        <div className='containerPannel'>
            <Options activePatient='Links active' activeMeet='Links' activeSick='Links' />
            <div className='layout'>
                <PannelIdent patient={patients} />
            </div>
        </div>
    );
};

export default Patients;