import React, {useEffect , useState} from 'react';

const FormAdd = () => {
    const [dataPatient,setDataPatient]=useState({
        name:"",
        phone:"",
        password:"",
        confirm:"",
        address:"",
        sexe:"",
        mail:""
    });

    const handleSubmit=()=>{
        

    };
    return (
        <div>
            <form>
                <div>
                    <label>Noms:</label>
                    <input type='text' placeholder='ex: jean marie kassamba' name='name' value={dataPatient.name} onChange={(event)=>setDataPatient({...dataPatient, name: event.target.value})} required/>
                </div>
                <div>
                    <label>Phone:</label>
                    <input type='tel' placeholder='ex: 089 512 72 36' name='phone' value={dataPatient.phone} onChange={(event)=>setDataPatient({...dataPatient, phone: event.target.value})} required/>
                </div>
                <div>
                    <label>E-mail:</label>
                    <input type='tel' placeholder='ex: 089 512 72 36' name='phone' value={dataPatient.mail} onChange={(event)=>setDataPatient({...dataPatient, mail: event.target.value})}/>
                </div>
                <div>
                    <label>Mot de passe :</label>
                    <input type='password' placeholder='**********' name='password' value={dataPatient.password} onChange={(event)=>setDataPatient({...dataPatient, password: event.target.value})} required/>
                </div>
                <div>
                    <label>confirmer mot de passe :</label>
                    <input type='password' placeholder='**********' name='password' value={dataPatient.confirm} onChange={(event)=>setDataPatient({...dataPatient, confirm: event.target.value})} required/>
                </div>
                <div>
                    <p>sexe:</p>                    
                    <input type='radio'  name='sexe' value="masculin" onChange={(event)=>setDataPatient({...dataPatient, sexe: event.target.value})} required/>
                    <label for='masculin'></label>
                    <input type='radio'  name='sexe' value="feminin" onChange={(event)=>setDataPatient({...dataPatient, sexe: event.target.value})}/>
                    <label for='feminin'></label>
                </div>
                <div>
                    <label htmlFor='address'>Adresse:</label>
                    <textarea name='address' value={dataPatient.address} onChange={(event)=>setDataPatient({...dataPatient, address: event.target.value})} required/>    
                </div>
                
            </form>
            
        </div>
    );
};

export default FormAdd;