import React, { useState } from 'react';
import logo from '../../logo.png';
import Rdv from '../../components/modal/modalRdv';

const PannelIdent = ({ patient }) => {
    const [showRdv, setShowRdv] = useState(false);
    const { id, nomPatient, phonePatient, sexePatient, helecto, blood} = patient;
    const viewModal = () => {
        setShowRdv(!showRdv);
    };
    const CheckBlood=()=>{
        if(blood===''|| blood=== null){
            return(<div className='boxBlood'>
            <button type="button" className="btn btn-outline-info" onClick={viewModal}>
                        <i className='bi bi-calendar-date-fill'>Configurer Groupe Sanguin</i>
            </button></div>)
        }
        if(helecto===''|| helecto=== null){
            return(
            <div className='boxBlood'>                
            <button type="button" className="btn btn-outline-info" onClick={viewModal}>
                        <i className='bi bi-calendar-date-fill'>Configurer helectophore</i>
            </button></div>)
        }
        return ( <div className='boxBlood'>
                    <h4>Groupe Sanguin: {blood}</h4>
                    <h4>helectophore: {helecto}</h4>
                </div>)
    };
    return (
        <div>
            <Rdv showRdv={showRdv} setShowRdv={setShowRdv} code={id} />
            <div className='boxCard'>
                <div className='boxPatientImage'>
                    <img src="https://www.kindpng.com/picc/m/376-3768467_transparent-healthcare-icon-png-patient-info-icon-png.png" className="imgUser" alt={nomPatient} />
                    <div>
                        <h3>Nom: {nomPatient} </h3>
                        <div className='viewInfos'>
                            <h4>Genre:{sexePatient} | Phone:{phonePatient}</h4>
                        </div>
                    </div>
                </div>
                <CheckBlood/>
                <div className='boxPatientprofil'>

                    <h3>Créer</h3>

                    <button type="button" className="btn btn-outline-info" onClick={viewModal}>
                        <i className='bi bi-calendar-date-fill'>Rendez-Vous</i>
                    </button>
                    

                </div>
            </div>
            <hr />

        </div>
    );
};

export default PannelIdent;
