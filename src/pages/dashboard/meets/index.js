import React, { useState } from 'react';
import '../Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HeaderDash from '../../../components/header/headerDash';
import Options from '../../../components/option';
import axios from "axios";

const Meets = () => {
    const [userName, setUserName] = useState('inconnue');
    return (
        <div className='containerPannel'>
            <Options activePatient='Links' activeMeet='Links active' activeSick='Links' />
            <div className='layout'>
                <HeaderDash userName={userName} />
            </div>
        </div>
    );
};

export default Meets;