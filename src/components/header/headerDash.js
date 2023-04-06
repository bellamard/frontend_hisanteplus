import { Link, useNavigate } from "react-router-dom";

const HeaderDash = ({ userName, mySearch,  search}) => {
    const history = useNavigate();
    const logOut = () => {
        localStorage.clear();
        return history('/login');       
    };
    
    return (
        <div className="containerHeader">
            <div className="containerLogin">
                <div className='boxSearch'>
                    <i class="bi bi-search"></i>
                    <input type="text" value={search} onChange={(e)=>mySearch(e.target.value)} placeholder='Recherche...' />
                </div>
                <div className='boxControl'>

                    <div className='boxManager'>
                        <Link to='inbox'>
                            <i class="bi bi-inbox-fill"></i>
                        </Link>
                        
                        <i onClick={logOut} class="bi bi-door-open-fill"></i>
                        
                    </div>
                    <div className='logoUser'>
                        <Link>
                            <i class="bi bi-person-fill"></i>
                        </Link>
                    </div>



                </div>

            </div>
            <div className='containerWelcome'>
                <h3>
                    Salut {userName}
                </h3>
                <span>
                    Bienvenu dans la plate-forme médical Hi-sante
                </span>
                <hr />
            </div>
        </div>
    );
};

export default HeaderDash;