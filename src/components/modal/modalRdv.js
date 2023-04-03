import React, { useState } from 'react';

const ModalRdv = ({ showRdv, setShowRdv }) => {
    const [names, setNames] = useState('');
    const [code, setCode] = useState('');
    const [date, setDate] = useState(new Date());
    const [motif, setMotif] = useState('');
    const [messageError, setMessageError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(names);
        setNames('');
        setCode('');
        setDate(new Date());
        setMotif('');
    }
    const cancel = () => {
        setShowRdv(!showRdv);
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
                            <label>code: </label>
                            <input type='number' placeholder='entrer code du patient' value={code} onChange={(e) => setCode(e.target.value)} name='code' required />
                        </div>
                        <div className='boxInput'>
                            <label>date : </label>
                            <input type='date' placeholder='entrer date' value={date} onChange={(e) => setDate(e.target.value)} name='date' required />
                        </div>
                        <div className='boxInput'>
                            <label htmlFor='motif'>Motif:</label>
                            <textarea name='motif' value={motif} onChange={(e) => { setMotif(e.target.value) }} />
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

export default ModalRdv;