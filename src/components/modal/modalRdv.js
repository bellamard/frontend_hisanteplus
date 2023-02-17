import React, { useState } from 'react';

const ModalRdv = ({ showRdv, setShowRdv }) => {
    const [names, setNames] = useState('');
    const [date, setDate] = useState('');
    const [motif, setMotif] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const cancel = () => {
        setShowRdv(!showRdv);
    }
    const Rdv = () => (
        <>
            <div>
                <h2>
                    Prendre Rendez vous
                </h2>
                <div>
                    <form action="submit" onSubmit={handleSubmit}>
                        <input type='text' placeholder='nom du patient' value={names} onChange={() => setNames(names)} />
                        <input type='date' value={date} handleChange={() => setDate(date)} />
                        <textarea type='text' value={motif} handleChange={() => setMotif(motif)} />
                        <div>
                            <input type='button' onClick={cancel} />
                            <input type='submit'>envoyer</input>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
    return (
        <>
            {showRdv ? < Rdv /> : null}
        </>
    );
};

export default ModalRdv;