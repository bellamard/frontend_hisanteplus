import React from 'react';


function Header(props) {
    return (
        <div>
            <div>
                <img src={logo} className="logo" alt='hi-sante' />
                <span>Pour une meilleur prise en charge</span>
            </div>
            <div>
                <ul>
                    <li>Register</li>
                    <li>AIDER / FAQ</li>
                </ul>
            </div>

        </div>
    );
}

export default Header;