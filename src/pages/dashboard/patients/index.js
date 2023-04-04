import React, { useState, useEffect } from 'react';
import '../Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HeaderDash from '../../../components/header/headerDash';
import Options from '../../../components/option';
import PannelPatient from '../../../components/pannel/pannelPatient';
import Item from '../../../components/items';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Patients = () => {
    const [userName, setUserName] = useState('');
    const [patientTotal, setPatientTotal] = useState(0);
    const [patientValide, setPatientValide] = useState(0);
    const history = useNavigate();
    const [patients, setPatients] = useState([]);
    const baseUrl="https://backend.dbrtransfert.site/";
    
    
    useEffect(() => {
        setPatientValide('*');
        const getMyProfil = () => {
        const url = baseUrl+'medecins/me';
        const tokken = localStorage.getItem('tokken');
        axios.get(url, { headers: { 'Authorization': 'Bearer ' + tokken } })
            .then(res => {
                const { nomMedecin } = res.data;
                return setUserName(nomMedecin);
            })
            .catch(err => {
                console.log(err);
               return history('/login');

            });
        };

        const getAllPatient = () => {
        const url = baseUrl+'patients/all';
        const tokken = localStorage.getItem('tokken');
        axios.get(url, { headers: { 'Authorization': 'Bearer ' + tokken } })
            .then(res => {
                const patients=res.data;
                console.log(patients);
                setPatients(patients);
                setPatientTotal(patients.length);
            })
            .catch(err => {
                console.log(err);
                history('/login');

            });
        };
        
        getMyProfil(); 
        getAllPatient();
    },[]);
    
    
    const GetPatients = () => patients.map((patient, id) => (<Link className='LinkItem' key={id} to={`${patient.id}`}><Item  title={patient.nomPatient} subtitle={patient.phonePatient} etat={patient.adressPatient} /></Link>));
   

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