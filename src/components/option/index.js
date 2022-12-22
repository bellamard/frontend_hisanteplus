import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, NavLink, useHistory } from "react-router-dom";
import logo from '../../logo.svg'

const Options = () => {
    return (
        <div className='menu'>
            <div className='boxLogo'>
                <img src={logo} className="logo" alt='hi-sante' />
                <span>Hi Sante</span>
            </div>
            <div className='boxLinks'>
                <ul>
                    <li>
                        <Link to="/" className='Links'>
                            <i className='bi bi-person-fill'></i>
                            Patients
                        </Link>

                    </li>
                    <li>
                        <Link to="/" className='Links'>
                            <i className='bi bi-calendar-date-fill'></i>
                            Rendez-Vous
                        </Link>

                    </li>
                    <li>
                        <Link to="/" className='Links'>
                            <i className='bi bi-virus'></i>
                            Malades
                        </Link>

                    </li>
                </ul>

            </div>

        </div>
    );
};

export default Options;