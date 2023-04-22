import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
import logo from '../../logo.png'

const Options = ({ activePatient, activeMeet, activeSick }) => {
    return (
        <div className='menu'>
            <div className='boxLogo'>
                <Link to="/dashboard">
                    <img src={logo} className="logo" alt='hi-sante' />
                    {/* <span>Hi Sante</span> */}
                </Link>
            </div>
            <div className='boxLinks'>
                <ul>
                    <li>
                        <Link to="/dashboard/patients" className={activePatient}>
                            <i className='bi bi-person-fill'></i>
                            Patients
                        </Link>

                    </li>
                    <li>
                        <Link to="/dashboard/meets" className={activeMeet}>
                            <i className='bi bi-calendar-date-fill'></i>
                            Rendez-Vous
                        </Link>

                    </li>
                    <li>
                        <Link to="/dashboard/sicks" className={activeSick}>
                            <i className='bi bi-virus'></i>
                            Interventions
                        </Link>

                    </li>
                </ul>

            </div>

        </div >
    );
};

export default Options;
