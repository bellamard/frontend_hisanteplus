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
    const [search, setSearch]= useState('');
    const history = useNavigate();
    const [patients, setPatients] = useState([]);
    const [meets, setMeets]= useState([]);
    const baseUrl="http://localhost:5000/";
     
     
    
    useEffect(() => {
        
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
                const dataPatients=res.data;
                setPatients(dataPatients);
                setPatientTotal(dataPatients.length);
                
            })
            .catch(err => {
                console.log(err);
                history('/login');
            });
        };

        const getAllMeet = () => {
        const url = baseUrl+'consultations';
        const tokken = localStorage.getItem('tokken');
        axios.get(url, { headers: { 'Authorization': 'Bearer ' + tokken } })
            .then(res => {
                const myMeets=res.data;               
                setMeets(myMeets);
                checkPatientId(myMeets);                
                
                
            })
            .catch(err => {
                console.log(err);
                history('/login');

            });
        };          

        getMyProfil(); 
        getAllPatient();
        getAllMeet();
                
    },[history]);

    const checkPatientId=(Patients)=>{
        const patientId= Patients.map((patient)=>patient.patientId);
        const newSet= new Set(patientId);
        console.log(newSet);
        setPatientValide(newSet.size);
    };    
      
    
    const GetPatients = () => {return patients.filter((patient) => {
      if (search === "") {
        return patient;
      } else if (patient.nomPatient.toLowerCase().includes(search.toLowerCase())) {
        return patient;
      }
      return null;
    }).map((patient, id) => (<Link className='LinkItem' key={id} to={`${patient.id}`}><Item  title={patient.nomPatient} subtitle={patient.phonePatient} etat={patient.adressPatient} /></Link>));
    };
   

    return (
        <div className='containerPannel'>
            <Options activePatient='Links active' activeMeet='Links' activeSick='Links' />
            <div className='layout'>
                <HeaderDash userName={userName} search={search} mySearch={setSearch} />
                <PannelPatient patientTotal={patientTotal} patientValide={patientValide} />
                <GetPatients />
            </div>
        </div>
    );
};

export default Patients;