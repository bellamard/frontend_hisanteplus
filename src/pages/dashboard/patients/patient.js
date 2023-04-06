import React, { useState, useEffect } from 'react';
import '../Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HeaderDash from '../../../components/header/headerDash';
import Options from '../../../components/option';
import PannelIdent from '../../../components/pannel/pannelIdent';
import Item from '../../../components/items';
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Patients = () => {
    const [userName, setUserName] = useState('inconnue');
    const [patients, setPatients] = useState({ names: 'kris', phone: 895 ,sex: 'M', date: '08/02/2021' });
    const baseUrl="http://localhost:5000/";
    const history = useNavigate();
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
        getMyProfil();
    },[]);

    return (
        <div className='containerPannel'>
            <Options activePatient='Links active' activeMeet='Links' activeSick='Links' />
            <div className='layout'>
                <HeaderDash userName={userName} />
                <PannelIdent patient={patients} />
            </div>
        </div>
    );
};

export default Patients;