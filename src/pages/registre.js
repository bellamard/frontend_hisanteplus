
import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Header from '../components/header';




const Registre = (props) => {
    const [numberPage, setNumberPage] = useState(0);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [numberOrdre, setNumberOrdre] = useState('');
    const [specialisation, setSpecialisation] = useState('');
    const [title, setTitle] = useState('');
    const [titleButton, setTitleButton] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const sendIdentificaion = () => {

    }
    const checkidentification = () => {
        if (numberPage === 0) {
            if (name == null || name === '' || name.length <= 0) {
                return setErrorMessage(`les champs Nom n'est pas remplir `)
            }
            if (name == null || name === '' || name.length <= 9) {
                return setErrorMessage(`les champs Phone n'est pas bien remplir `)
            }
            return nextstep();

        }
        if (numberPage === 1) {
            if (password == null || password === '' || password.length <= 8) {
                return setErrorMessage(`les champs mot de passe n'est pas bien remplir `)
            }
            if (confirm == null || confirm === '' || confirm.length <= 8) {
                return setErrorMessage(`les champs confirmate n'est pas bien remplir `)
            }
            if (confirm !== password) {
                return setErrorMessage(`les champs des mots de passes ne sont pas identique bien remplir `)
            }
            return nextstep();
        }
        if (numberPage === 2) {
            if (numberOrdre == null || numberOrdre === '' || numberOrdre.length <= 0) {
                return setErrorMessage(`les champs Nom n'est pas remplir `)
            }

            return nextstep();

        }
        return sendIdentificaion();
    }
    const nextstep = () => {
        if (numberPage < 2) {
            setNumberPage(numberPage + 1);
        }
    }
    const prevstep = () => {
        if (numberPage >= 1) {
            setNumberPage(numberPage - 1);
        }
    }
    const ButtonBack = () => {
        if (numberPage > 0) {
            return (
                <Button onClick={() => prevstep()}>
                    retour
                </Button>
            )
        }
        return null;
    }
    const Pannel = () => {
        return (


            <div className='formSign'>
                <PackForm />
                <h3>Processus d'enregistrement</h3>
                <p>
                    {title}
                </p>
                <div>
                    <p>
                        {errorMessage}
                    </p>
                </div>

                <Button onClick={() => checkidentification()}>
                    {titleButton}
                </Button>

                <ButtonBack />


            </div>
        )

    };
    const FormIdent = () => {
        if (numberPage === 0) {

            return (
                <div>
                    <Form className='formSignin'>
                        <FormGroup>
                            <Label>Nom & PostNom:</Label>
                            <Input type="text" name="name" id="name" placeholder="Ex.: Celestine Kiala" value={name} onChange={setName} required />
                        </FormGroup>
                        <FormGroup>
                            <Label>Téléphone:</Label>
                            <Input type="phone" name="phone" id="phone" placeholder="+243 800 000 000 " value={phone} onChange={setPhone} required />
                        </FormGroup>
                    </Form>
                </div>
            )
        }
        if (numberPage === 1) {
            return (
                <div>
                    <Form className='formSignin'>
                        <FormGroup>
                            <Label>Mot de passe:</Label>
                            <Input type="password" name="password" id="password" placeholder="********* " value={password} onChange={setPassword(password)} required />
                        </FormGroup>
                        <FormGroup>
                            <Label>confirme Mot de passe:</Label>
                            <Input type="password" name="confirme" id="confirme" placeholder="********* " value={confirm} onChange={setConfirm(confirm)} required />
                        </FormGroup>
                    </Form>
                </div>
            )
        }
        if (numberPage === 2) {
            return (
                <div>
                    <Form className='formSignin'>
                        <FormGroup>
                            <Label>numero d'ordre:</Label>
                            <Input type="number" name="numberOdre" id="numberOdre" placeholder="769816" value={numberOrdre} onchange={setNumberOrdre} required />
                        </FormGroup>
                        <FormGroup>
                            <Label>specialisation:</Label>
                            <Input type="Text" name="specialisation" id="specialisation" placeholder="Ex. Nerologue" required />
                        </FormGroup>
                    </Form>
                </div>
            )
        }



    }
    const PackForm = () => {
        if (numberPage === 0) {
            setTitle(`bienvenue à la premiere etape d'enregistrement`);
            setTitleButton('Continuer');
        }
        if (numberPage === 1) {
            setTitle(`bienvenue à la deuxieme etape d'enregistrement`);
            setTitleButton('Continuer')
        }
        if (numberPage === 2) {
            setTitle(`bienvenue à la troxieme etape d'enregistrement`);
            setTitleButton('Valider');
        }
    }
    return (
        <div className='panelBody'>
            <Header />
            <div className='panelLogin'>
                <div className='panelmessage '>
                    <h3 className='title2'>Hi sante</h3>
                    <FormIdent />
                </div>
                <Pannel />
            </div>


        </div>
    );
}

export default Registre;