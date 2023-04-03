
import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Header from '../components/header';
import axios from 'axios';
import { useNavigate } from "react-router-dom";




const Registre = (props) => {
    const [numberPage, setNumberPage] = useState(0);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [numberOrdre, setNumberOrdre] = useState('');
    const [specialisation, setSpecialisation] = useState('');
    const [mail, setMail] = useState('');
    const [title, setTitle] = useState('');
    const [titleButton, setTitleButton] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [load, setLoad] = useState(false);

    const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;
    const history = useNavigate();
    
    const sendIdentificaion = () => {
        setLoad(!load);
        const url = "https://backend.dbrtransfert.site/medecins/registre";

        axios.post(url, { nom_medecin: name, phone_medecin: phone, password_medecin: password, num_ordre_medecin: numberOrdre, specialisation_medecin: specialisation, mail_medecin: mail })
            .then(res => {
                history('/');
            }).catch(err => {
                const { error } = err;
                return setErrorMessage(error);
            });

    };

    const Loading = () => {
        return (
            <div className='boxLoad'>
                <>
                    <div className="loader"></div>
                    <h3>Chargement...</h3>
                </>
            </div>
        );
    }

    const checkidentification = () => {
        if (numberPage === 0) {
            if (name == null || name === '' || name.length <= 0) {
                return setErrorMessage(`les champs Nom n'est pas remplir `)
            }
            if (phone == null || phone === '' || phone.length < 9) {
                return setErrorMessage(`les champs Phone n'est pas bien remplir `)
            }
            return nextstep();

        }
        if (numberPage === 1) {
            if (password == null || password === '' || password.length <= 8 || !PASSWORD_REGEX.test(password)) {
                return setErrorMessage(`les champs mot de passe n'est pas bien remplir `)
            }
            if (confirm == null || confirm === '' || confirm.length <= 8|| !PASSWORD_REGEX.test(confirm)) {
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
            if (specialisation == null || specialisation === '' || specialisation.length <= 0) {
                return setErrorMessage(`les champs Specialisation n'est pas remplir `)
            }
            if (mail == null || mail === '' || mail.length <= 0) {
                return setErrorMessage(`les champs E-mail n'est pas remplir `)
            }

            return nextstep();

        }


    };
    const nextstep = () => {
        setErrorMessage('');
        if (numberPage < 2) {
            return setNumberPage(numberPage + 1);
        }
        return sendIdentificaion();
    }
    const prevstep = () => {
        setErrorMessage('');
        if (numberPage >= 1) {
            setNumberPage(numberPage - 1);
        }
    }
    const ButtonBack = () => {
        if (numberPage > 0) {
            return (
                <div className='btnBack'>
                    <Button onClick={() => prevstep()} >
                        retour
                    </Button>
                </div>

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
                            <Input type="text" placeholder="Ex.: Celestine Kiala" value={name} onChange={(e) => setName(e.target.value)} required />
                        </FormGroup>
                        <FormGroup>
                            <Label>Téléphone:</Label>
                            <Input type="Tel" placeholder="+243 800 000 000 " value={phone} onChange={(e) => setPhone(e.target.value)} required />
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
                            <Input type="password" name="password" id="password" placeholder="********* " value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </FormGroup>
                        <FormGroup>
                            <Label>confirme Mot de passe:</Label>
                            <Input type="password" name="confirme" id="confirme" placeholder="********* " value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
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
                            <Label>E-mail:</Label>
                            <Input type="email" placeholder="contact@hisante.com" value={mail} onChange={(e) => setMail(e.target.value)} required />
                        </FormGroup>
                        <FormGroup>
                            <Label>numero d'ordre:</Label>
                            <Input type="number" placeholder="769816" value={numberOrdre} onChange={(e) => setNumberOrdre(e.target.value)} required />
                        </FormGroup>
                        <FormGroup>
                            <Label>specialisation:</Label>
                            <Input type="Text" placeholder="Ex.: Nerologue" value={specialisation} onChange={(e) => setSpecialisation(e.target.value)} required />
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
            setTitle(`bienvenue à la troisieme etape d'enregistrement`);
            setTitleButton('Valider');
        }
    }
    return (
        <div className='panelBody'>
            <Header />
            <div className='panelLogin'>
                <div className='panelmessage '>
                    <h2 className='title2'>Hi sante</h2>
                    <FormIdent />
                </div>
                {load?(<Loading/>):(<Pannel />)}
                
            </div>


        </div>
    );
}

export default Registre;