import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from "axios";

const ModalRdv = ({ showRdv, setShowRdv, meet }) => {
    const {id, type, dateConsultation,patient}=meet;
    
    console.log(patient);
    const history = useNavigate();
    const [messageError, setMessageError] = useState('');
    const baseUrl="https://backend.dbrtransfert.site/";
    

    const handleSubmit = (event) => {
         
        
        event.preventDefault(); 
        const url = baseUrl+'consultations/'+id+'/del';
        const tokken = localStorage.getItem('tokken');
        axios.delete(url,{ headers: { 'Authorization': 'Bearer ' + tokken } })
            .then(res => {
               cancel();
                history(`/dashboard/meets`);
            })
            .catch(err => {
                console.log(err);
                history('/login');

            });
             
    }
    const cancel = () => {
        setShowRdv(!showRdv);
    }

    const Rdv = () => (
        <div className='myModal'>
            <div className='boxModal mb-3'>
                <h2>SUPPRIMER RENDEZ VOUS</h2>
                <h3>PATIENT:{patient.nomPatient} </h3>
                <h3>Fiche: {id} </h3>
                <div>
                    <form onSubmit={handleSubmit} >                     
                        
                        

                        <div className={'boxInput'}>
                            <input type='submit' value='valider' className='btn btn-outline-success' />
                            <input type='button' value='annuler' onClick={cancel} className='btn btn-outline-danger' />

                        </div>
                        <h4>{messageError}</h4>

                    </form>
                </div>
            </div>
        </div>);
    return (
        <>
            {showRdv ? < Rdv /> : null}
        </>
    );
};

export default ModalRdv;