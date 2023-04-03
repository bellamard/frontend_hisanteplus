import React from 'react';
import logo from '../../logo.png';
import { Link, useHistory } from "react-router-dom";


function Header(props) {
    return (
        <div className='header'>
            <div className='title'>
                <Link to='/'>
                    <img src={logo} className="logo" alt='hi-sante' />
                </Link>
            </div>
            <div className='navbar'>
                <ul className='list'>
                    <li><Link to='/' className='link'>LOGIN</Link></li>
                    <li><Link to='/signin' className='link'>S'INSCRIRE</Link></li>
                </ul>
            </div>

        </div >
    );
}

export default Header;