import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Header from '../components/header';


const FormLogin = () => {
    return (


        <Form className='formLogin'>
            <h3 className='title'> se connecter</h3>
            <FormGroup>
                <Label>utilisateur</Label>
                <Input type="text" name="user" id="user" placeholder="Ex. A09000" required />
            </FormGroup>
            <FormGroup>
                <Label>Mot de passe</Label>
                <Input type="password" name="password" id="" placeholder="********" required />
            </FormGroup>
            <FormGroup className='checkboxForm'>
                <Input type="checkbox" name="connection" id="connexion" />
                <Label>Reste connecter</Label>
            </FormGroup>
            <Button>
                Valider
            </Button>

        </Form>
    )

};

const login = (props) => {
    return (
        <div className='panelBody'>
            <Header />
            <div className='panelLogin'>
                <div className='panelmessage'>
                    <h3 className='title2'>Hi sante</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                </div>
                <FormLogin />
            </div>


        </div>
    );
}

export default login;