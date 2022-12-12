import React, { useState } from 'react';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HeaderDash from '../../components/header/headerDash';
import Pannel from '../../components/pannel';
import axios from "axios";

const Dashboard = () => {
    const [patientTotal, setPatientTotal] = useState(0);
    const [patientValide, setPatientValide] = useState(0);
    const [meetTotal, setMeetTotal] = useState(0);
    const [meetValider, setMeetValider] = useState(0);
    const [sickTotal, setSickTotal] = useState(0);
    const [sickValider, setSickValider] = useState(0);
    return (
        <div>
            <HeaderDash />
            <Pannel patientTotal={patientTotal} patientValide={patientValide} meetTotal={meetTotal} meetValider={meetValider} sickTotal={sickTotal} sickValider={sickValider} />
            <h3>test dashboard</h3>
        </div>
    );
};

export default Dashboard;