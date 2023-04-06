import React, { useState, useEffect} from 'react';
import '../Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HeaderDash from '../../../components/header/headerDash';
import Options from '../../../components/option';
import { Link, NavLink, useNavigate } from "react-router-dom";
import FormAdd from '../../../components/form';
import axios from "axios";

const AddPatients = () => {
    const [userName, setUserName] = useState('inconnue');
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
                
                <div>
                    <FormAdd/>
                </div>
            </div>
        </div>
    );
};

export default AddPatients;