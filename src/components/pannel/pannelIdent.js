import React, { useState } from 'react';
import logo from '../../logo.png';
import Rdv from '../../components/modal/modalRdv';

const PannelIdent = ({ patient }) => {
    const [showRdv, setShowRdv] = useState(false);
    const { names, age, sex, blood, helecto } = patient;
    const viewModal = () => {
        setShowRdv(!showRdv);
    }
    return (
        <div>
            <Rdv showRdv={showRdv} setShowRdv={setShowRdv} />
            <div className='boxCard'>
                <div className='boxPatientImage'>
                    <img src={logo} className="imgUser" alt={names} />
                    <div>
                        <h3>Nom: {names} </h3>
                        <div className='viewInfos'>
                            <h4>Age:{age} | Sexe:{sex}</h4>
                        </div>
                    </div>
                </div>
                <div className='boxBlood'>
                    <h4>Groupe Sanguin: {blood}</h4>
                    <h4>helectophore: {helecto}</h4>
                </div>
                <div className='boxPatientprofil'>

                    <h3>Créer</h3>

                    <button type="button" className="btn btn-outline-info" onClick={viewModal}>
                        <i className='bi bi-calendar-date-fill'>Rendez-Vous</i>
                    </button>
                    <button type="button" className="btn btn-outline-info">
                        <i className='bi bi-virus'>Consultation</i>
                    </button>

                </div>
            </div>
            <hr />

        </div>
    );
};

export default PannelIdent;
