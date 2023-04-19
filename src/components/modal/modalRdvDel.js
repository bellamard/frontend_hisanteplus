import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from "axios";

const ModalDel = ({ showRdv, setShowRdv, meet }) => {
    const {id, type, dateConsultation,patient}=meet;
    
    console.log(patient);
    const history = useNavigate();
    const [dataRdv, setDataRdv]=useState({code:id, date:dateConsultation, motif: type});
    const [messageError, setMessageError] = useState('');
    const baseUrl="https://backend.dbrtransfert.site/";
    

    const handleSubmit = (event) => {
         
        
        if(dataRdv.code==="" || dataRdv.code=== null || dataRdv.code.length<1){
           return setMessageError("vous n'avez pas des patients");
        }
        
        
        event.preventDefault(); 
        const url = baseUrl+'consultations/'+id+'/edit';
        const {code, date, motif}=dataRdv;
        const tokken = localStorage.getItem('tokken');
        axios.put(url,{patientId:code, typeConsultation: motif, dateConsultation:date},{ headers: { 'Authorization': 'Bearer ' + tokken } })
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
                <h2>MODIFIER RENDEZ VOUS</h2>
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

export default ModalDel;