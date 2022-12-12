import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

const HeaderDash = () => {
    const [search, setSearch] = useState('');
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const logOut = () => {
        alert('bye');
    }
    return (
        <div>
            <div>
                <input type="text" value={search} onChange={handleChange} />
            </div>
            <div>
                <Link>
                    <i class="bi bi-person-fill"></i>
                </Link>

                <Link to='inbox'>
                    <i class="bi bi-inbox-fill"></i>
                </Link>
                <button onClick={logOut}>
                    <i class="bi bi-door-open-fill"></i>
                </button>

            </div>
        </div>
    );
};

export default HeaderDash;