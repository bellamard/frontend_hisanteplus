
import React, {useEffect , useState} from 'react';
import axios from 'axios';
import ModalPatient from '../modal/modalPatient';
import { useNavigate } from "react-router-dom";

const FormAdd = () => {

    const history = useNavigate();
    const baseUrl="https://backend.dbrtransfert.site/";
    const [dataPatient,setDataPatient]=useState({
        name:"",
        phone:"",
        password:"",
        confirm:"",
        address:"",
        sexe:"",
        mail:""
    });
    const [showRdv, setShowRdv] = useState(false);
   
    const [errorMessage, setErrorMessage] = useState('');
    const PASSWORD_REGEX = /^(?=.*\d).{4,32}$/;
    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handleSubmit=()=>{
            if (dataPatient.name == null || dataPatient.name === '' || dataPatient.name.length <= 0) {
                return setErrorMessage(`Nom n'est pas remplir `)
            }
            if (dataPatient.phone == null || dataPatient.phone === '' || dataPatient.phone.length < 9) {
                return setErrorMessage(`Phone n'est pas bien remplir `)
            }
            if (dataPatient.password == null || dataPatient.password === '' || dataPatient.password.length <6 || !PASSWORD_REGEX.test(dataPatient.password)) {
                return setErrorMessage(`Mot de passe n'est pas bien remplir `);
            }
            if (dataPatient.confirm == null || dataPatient.confirm === '' || dataPatient.confirm.length <6|| !PASSWORD_REGEX.test(dataPatient.confirm)) {
                return setErrorMessage(`Confirmation n'est pas bien remplir `);
            }
            if (dataPatient.confirm !== dataPatient.password) {
                return setErrorMessage(`Les mots de passes ne sont pas identique bien remplir `)
            }
            if (dataPatient.sexe == null || dataPatient.sexe === '') {
                return setErrorMessage(`vous n'avez pas choisir le genre `)
            }
            if (dataPatient.address == null || dataPatient.address === '' || dataPatient.address.length < 3) {
                return setErrorMessage(`l'adresse n'est pas bien remplir `)
            }
            if (dataPatient.mail == null || dataPatient.mail === '' ||  !EMAIL_REGEX.test(dataPatient.mail)) {
                return setErrorMessage(`l'adresse e-mail n'est pas bien remplir `);
            }
            const url=baseUrl+'patients/registre';
            const {name, phone, password, sexe, address,mail}=dataPatient;
            axios.post(url,{nom_patient:name, phone_patient:phone, motpasse_patient:password, adresse_patient:address, sexe_patient:sexe, mail_patient:mail}).then((res)=>history('/dashboard/patients')).catch((error)=>{
                return setErrorMessage(error);
            });
            
            
    };
    const viewModal = () => {
        setShowRdv(!showRdv);
    };

    return (
        <div className='formAdd'>
            <ModalPatient showRdv={showRdv} setShowRdv={setShowRdv} />
            <h2>Enregistrement Patient</h2>
            <hr/>
            <div >
                <div className='duoBox mb-3'>
                    <div className='inputBox'>
                        <label className='form-label'>Noms: </label>
                        <input className='form-control' type='text' placeholder='ex: jean marie kassamba' name='name' value={dataPatient.name} onChange={(event)=>setDataPatient({...dataPatient, name: event.target.value})} required/>*
                    </div>
                    <div className='inputBox'>
                        <label className='form-label'>Phone:</label>
                        <input className='form-control' type='tel' placeholder='ex: 089 512 72 36' name='phone' value={dataPatient.phone} onChange={(event)=>setDataPatient({...dataPatient, phone: event.target.value})} required/>*
                    </div>
                    <div className='inputBox'>
                        <label className='form-label'>E-mail:</label>
                        <input className='form-control' type='email' placeholder='ex: contact@hisante.hosp' name='phone' value={dataPatient.mail} onChange={(event)=>setDataPatient({...dataPatient, mail: event.target.value})}/>
                    </div>
                </div>
                <div className='duoBox'>
                    <div className='inputBox'>
                        <label className='form-label'>Mot de passe :</label>
                        <input className='form-control' aria-labelledby="passwordHelpBlock" type='password' placeholder='**********' name='password' value={dataPatient.password} onChange={(event)=>setDataPatient({...dataPatient, password: event.target.value})} required/>*
                    </div>
                    <div className='inputBox'>
                        <label className='form-label'>confirmer mot de passe :</label>
                        <input className='form-control' aria-labelledby="passwordHelpBlock" type='password' placeholder='**********' name='password' value={dataPatient.confirm} onChange={(event)=>setDataPatient({...dataPatient, confirm: event.target.value})} required/>*
                    </div>
                    <div className='inputBox'>
                        <div>
                            <label className='form-label'>Genre:</label> 
                        </div>
                        <div className='genrebox'>
                            <div className='genre'>
                                <label for='masculin' className='form-label'>Masculin</label>                 
                                <input className='form-check-input' type='radio'  name='sexe' value="masculin" onChange={(event)=>setDataPatient({...dataPatient, sexe: event.target.value})} required/>
                            </div>
                            <div className='genre'>
                                <label for='feminin' className='form-label'>Féminin</label>
                                <input className='form-check-input' type='radio'  name='sexe' value="feminin" onChange={(event)=>setDataPatient({...dataPatient, sexe: event.target.value})}/>
                            </div>
                        </div>
                        
                        * 
                    
                    
                </div>
                </div>                

                
                
                
                
                <div className='inputBox'>
                    <label htmlFor='address' className='form-label'>Adresse:</label>
                    <textarea className='form-control' name='address' value={dataPatient.address} onChange={(event)=>setDataPatient({...dataPatient, address: event.target.value})} required/>*    
                </div>
                <div onClick={viewModal} className='link-primary'>
                    <p>condition d'utilisation</p>
                </div>
                <div>
                    <button className="btn btn-primary mb-3" onClick={handleSubmit}>j'accepte</button>
                </div>
                <div>
                    <p>
                        {errorMessage}
                    </p>
                </div>
                
            </div> 
           
            
        </div>
    );
};

export default FormAdd;
