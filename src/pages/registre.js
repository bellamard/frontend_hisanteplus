import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Header from '../components/header';




const Registre = (props) => {
    const [numberPage, setNumberPage] = useState(0);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState(0);
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [numberOrdre, setNumberOrdre] = useState('');
    const [specialisation, setSpecialisation] = useState('');
    const [title, setTitle] = useState('');

    const Pannel = () => {
        return (


            <div className='formSign'>
                <PackForm />
                <h3>Processus d'enregistrement</h3>
                <p>
                    {title}
                </p>
                <Button>
                    Continuer
                </Button>
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
                            <Input type="text" name="name" id="name" placeholder="Ex.: Celestine Kiala" required />
                        </FormGroup>
                        <FormGroup>
                            <Label>Téléphone:</Label>
                            <Input type="phone" name="phone" id="phone" placeholder="+243 800 000 000 " required />
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
                            <Input type="password" name="password" id="password" placeholder="********* " required />
                        </FormGroup>
                        <FormGroup>
                            <Label>confirme Mot de passe:</Label>
                            <Input type="password" name="confirme" id="confirme" placeholder="********* " required />
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
                            <Input type="number" name="numberOdre" id="numberOdre" placeholder="769816" required />
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
        }
        if (numberPage === 1) {
            setTitle(`bienvenue à la deuxieme etape d'enregistrement`);
        }
        if (numberPage === 2) {
            setTitle(`bienvenue à la troxieme etape d'enregistrement`);
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