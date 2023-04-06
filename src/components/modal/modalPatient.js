import React, { useState } from 'react';

const ModalPatient = ({ showRdv, setShowRdv }) => {
    const [names, setNames] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [adress, setAdress] = useState('');
    const [sexe, setSexe] = useState('');
    const [mail, setMail]= useState('');
    const [messageError, setMessageError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(names);
        setNames('');
        setPhone('');
        setPassword('');
        setConfirm('');
        setAdress('');
        setMail('');
        setSexe('');
    }
    const cancel = () => {
        setShowRdv(!showRdv);
        console.log(showRdv);
    }

    const Rdv = () => (
        <div className='myModal'>
            <div className='boxModal'>
                <h3>PRENDRE RENDEZ VOUS</h3>
                <div>
                    <form onSubmit={handleSubmit} action=''>
                        <div className='boxInput'>
                            <label>Nom patient: </label>
                            <input type='text' placeholder='entrer le nom du patient' onChange={(e) => setNames(e.target.value)} value={names} name='names' required />
                        </div>
                        <div className='boxInput'>
                            <label>Phone: </label>
                            <input type='tel' placeholder='entrer numéro du patient' value={phone} onChange={(e) => setPhone(e.target.value)} name='phone' required />
                        </div>
                        <div className='boxInput'>
                            <label>Mot de passe : </label>
                            <input type='password' placeholder='entrer mot de passe' value={password} onChange={(e) => setPassword(e.target.value)} name='password' required />
                        </div>
                        <div className='boxInput'>
                            <label>confirmer mot de passe : </label>
                            <input type='password' placeholder='entrer confirmer' value={confirm} onChange={(e) => setConfirm(e.target.value)} name='confirm' required />
                        </div>
                        <div className='boxInput'>
                            <label>E-mail: </label>
                            <input type='email' placeholder='entrer Email' value={mail} onChange={(e) => setMail(e.target.value)} name='mail' />
                        </div>
                        <div className='boxInput'>
                            <label htmlFor='address'>Adresse:</label>
                            <textarea name='address' value={adress} onChange={(e) => { setAdress(e.target.value) }} />
                        </div>

                        <div className='boxInput'>
                            <input type='submit' value='valider' className='btn btn-outline-info' />
                            <input type='button' value='annuler' onClick={cancel} className='btn btn-outline-info' />

                        </div>
                        <h4>{messageError}</h4>

                    </form>
                </div>
            </div>
        </div>);
    return (
        <>
            {showRdv ? < Rdv /> : null}
        </>
    );
};

export default ModalPatient;