import React, { useState, useEffect } from 'react';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HeaderDash from '../../components/header/headerDash';
import Pannel from '../../components/pannel';
import PannelCharts from '../../components/pannel/pannelCharts';
import Options from '../../components/option';
import Loading from '../../components/load';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
    const [patientTotal, setPatientTotal] = useState(0);
    const [patientValide, setPatientValide] = useState(0);
    const [meetTotal, setMeetTotal] = useState(0);
    const [meetValider, setMeetValider] = useState(0);
    const [sickTotal, setSickTotal] = useState(0);
    const [sickValider, setSickValider] = useState(0);
    const [userName, setUserName] = useState('');
    const [sickTitle, setSickTitle] = useState('');
    const [meetTitle, setMeetTitle] = useState('');
    const [patientTitle, setPatientTitle] = useState('');
    const [indSickTitle, setIndSickTitle] = useState('');
    const [indMeetTitle, setIndMeetTitle] = useState('');
    const [indPatientTitle, setIndPatientTitle] = useState('');
    const [sickStat, setSickStat] = useState([]);
    const [meetStat, setMeetStat] = useState([]);
    const [patientStat, setPatientStat] = useState([]);
    const [indSickStat, setIndSickStat] = useState([]);
    const [indMeetStat, setIndMeetStat] = useState([]);
    const [indPatientStat, setIndPatientStat] = useState([]);
    const [load, setLoad] = useState(true);
    const history = useNavigate();
    const baseUrl="https://backend.dbrtransfert.site/";
    
    

    useEffect(() => { 
        setIndMeetStat([5, 6, 4, 12, 7, 6, 0, 1, 4, 9, 3, 1]);
        setIndSickStat([12, 1, 5, 6, 2, 19, 10, 11, 3, 9, 5, 1]);
        setPatientStat([1, 2, 3, 6, 7, 8, 10, 11, 4, 9, 5, 6]);
        setPatientStat([6, 10, 9, 1, 3, 8, 8, 11, 4, 1, 6, 12]);
        setMeetStat([1, 10, 3, 10, 1, 8, 10, 11, 4, 10, 5, 2]);
        setIndPatientStat([1, 8, 3, 6, 2, 8, 0, 1, 4, 18, 5, 12]);
        setSickStat([7, 1, 4, 1, 3, 7, 8, 8, 4, 1, 6, 7]);
        setPatientValide('*');
        setMeetValider('*');
        setSickValider('*');
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
        setLoad(true);
        const url = baseUrl+'patients/all';
        const tokken = localStorage.getItem('tokken');
        axios.get(url, { headers: { 'Authorization': 'Bearer ' + tokken } })
            .then(res => {
                setLoad(false);
                const patients=res.data;
                setPatientTotal(patients.length);
            })
            .catch(err => {
                console.log(err);
                // history('/login');

            })
    };
    const getAllMeet = () => {
        setLoad(true);
        const url = baseUrl+'consultations';
        const tokken = localStorage.getItem('tokken');
        axios.get(url, { headers: { 'Authorization': 'Bearer ' + tokken } })
            .then(res => {
                setLoad(false);
                const meets=res.data;
                setMeetTotal(meets.length);
            })
            .catch(err => {
                setLoad(false); 
                console.log(err);
                history('/login');

            });
    };
    const getAllSick = () => {
        setLoad(true);
        const tokken = localStorage.getItem('tokken');
        const id= localStorage.getItem('id');
        const url = baseUrl+'interventions/';
        
        axios.get(url, { headers: { 'Authorization': 'Bearer ' + tokken } })
            .then(res => {

                setLoad(false);
                const Sick=res.data;
                setSickTotal(Sick.length);
            })
            .catch(err => {
                setLoad(false); 
                console.log(err);
                history('/login');

            });
    };
        getMyProfil();
        getAllPatient();
        getAllMeet();
        getAllSick();
        setSickTitle("Interventions");
        setMeetTitle('RDV');
        setPatientTitle('Patients');
        setIndSickTitle("Interventions");
        setIndMeetTitle("RDV");
        setIndPatientTitle("Patients");
    }, []);
    
   

    const Layout =()=>(
        <div className='layout'>
                <HeaderDash userName={userName} />
                <Pannel patientTotal={patientTotal} patientValide={patientValide} meetTotal={meetTotal} meetValider={meetValider} sickTotal={sickTotal} sickValider={sickValider} />
                <PannelCharts sickTitle={sickTitle} meetTitle={meetTitle} patientTitle={patientTitle} sickStat={sickStat} meetStat={meetStat} patientStat={patientStat} indSickTitle={indSickTitle} indMeetTitle={indMeetTitle} indPatientTitle={indPatientTitle} indSickStat={indSickStat} indMeetStat={indMeetStat} indPatientStat={indPatientStat} />
            </div>
    );

    return (
        <div className='containerPannel'>
            <Options activePatient='Links' activeMeet='Links' activeSick='Links' />
            
            {load ? (<Loading />) : (<Layout />)}
        </div>
    );
};

export default Dashboard;