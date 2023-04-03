import React, { useState, useEffect } from 'react';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HeaderDash from '../../components/header/headerDash';
import Pannel from '../../components/pannel';
import PannelCharts from '../../components/pannel/pannelCharts';
import Options from '../../components/option';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
    const [patientTotal, setPatientTotal] = useState(0);
    const [patientValide, setPatientValide] = useState(0);
    const [meetTotal, setMeetTotal] = useState(0);
    const [meetValider, setMeetValider] = useState(0);
    const [sickTotal, setSickTotal] = useState(0);
    const [sickValider, setSickValider] = useState(0);
    const [userName, setUserName] = useState('inconnue');
    const [sickTitle, setSickTitle] = useState('');
    const [meetTitle, setMeetTitle] = useState('');
    const [patientTitle, setPatientTitle] = useState('');
    const [indSickTitle, setIndSickTitle] = useState('');
    const [indMeetTitle, setIndMeetTitle] = useState('');
    const [indPatientTitle, setIndPatientTitle] = useState('');
    const [sickStat, setSickStat] = useState([]);
    const [meetStat, setMeetStat] = useState([]);
    const [patientStat, setPatientStat] = useState([1, 2, 3, 6, 7, 8, 10, 11, 4, 9, 5, 12]);
    const [indSickStat, setIndSickStat] = useState([12, 2, 4, 6, 7, 8, 10, 11, 4, 9, 3, 1]);
    const [indMeetStat, setIndMeetStat] = useState([]);
    const [indPatientStat, setIndPatientStat] = useState([]);
    const history = useNavigate();
    useEffect(() => { }, []);
    const getMyProfil = () => {
        const url = '';
        const tokken = localStorage.getItem('tokken');
        axios.get(url, { headers: { 'Authorization': 'Bearer' + tokken } })
            .then(res => {
                const { id, nomMedecin, phoneMedecin } = res;
                setUserName(nomMedecin);
            })
            .catch(err => {
                console.log(err);
                history.push('/');

            })
    };
    const getAllPatient = () => {
        const url = '';
        const tokken = localStorage.getItem('tokken');
        axios.get(url, { headers: { 'Authorization': 'Bearer' + tokken } })
            .then(res => {

                setPatientTotal(res.length);
            })
            .catch(err => {
                console.log(err);
                history.push('/');

            })
    };
    const getAllMeet = () => {
        const url = '';
        const tokken = localStorage.getItem('tokken');
        axios.get(url, { headers: { 'Authorization': 'Bearer' + tokken } })
            .then(res => {

                setMeetTotal(res.length);
            })
            .catch(err => {
                console.log(err);
                history.push('/');

            });
    };
    return (
        <div className='containerPannel'>
            <Options activePatient='Links' activeMeet='Links' activeSick='Links' />
            <div className='layout'>
                <HeaderDash userName={userName} />
                <Pannel patientTotal={patientTotal} patientValide={patientValide} meetTotal={meetTotal} meetValider={meetValider} sickTotal={sickTotal} sickValider={sickValider} />
                <PannelCharts sickTitle={sickTitle} meetTitle={meetTitle} patientTitle={patientTitle} sickStat={sickStat} meetStat={meetStat} patientStat={patientStat} indSickTitle={indSickTitle} indMeetTitle={indMeetTitle} indPatientTitle={indPatientTitle} indSickStat={indSickStat} indMeetStat={indMeetStat} indPatientStat={indPatientStat} />
            </div>
        </div>
    );
};

export default Dashboard;