import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Header from '../components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';




const Login = () => {
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [viewPass, setViewPass] = useState(false);
    const [icons, setIcons] = useState("bi bi-eye");
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setMessage("La tempérance et le travail sont les meilleurs médecins de l'homme.\n\nLa médecine, c'est ingrat. Quand on se fait honorer par les riches, on a l'air d'un larbin, par les pauvres on a tout du voleur.\n \nLes meilleurs médecins du monde sont : Le Docteur Diète, le Docteur Tranquille et le Docteur Joyeux.");
    }, []);
    const history = useNavigate();
    const checkCount = () => {
        setLoad(!load);
        if (password.length < 6) {
            setPassword('');
            return setError('Mots de passe est incorrect!!!');
        }
        if (username.length < 2) {
            setUsername('');
            return setError("Numero d'ordre est incorrect!!!");
        }
        const url = "http://localhost:5000/medecins/login";

        
        
        return axios.post(url, { numberOrdre: username, password }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }


        })
            .then(res => {
                
                const { token, medecinId} = res.data;
                localStorage.setItem('tokken', token);
                localStorage.setItem('id', medecinId);
                history('/dashboard');
                

            }).catch(error => {             
              
                console.log(error) ;         
                setPassword('');
                setUsername('');
                setError("Verifier vos Information!!!");
                setLoad(false);             
            });
    }

    const changeView = () => {
        setViewPass(!viewPass);
        viewPass ? setIcons('bi bi-eye') : setIcons('bi bi-eye-slash');
    }

    const FormLogin = () => {
        return (

            <Form className='formLogin'>
                <h3 className='title'> se connecter</h3>
                <FormGroup>
                    <Label>Numéro d'ordre</Label>
                    <div className='boxPassword'>
                        <Input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Ex. A09000" />
                        <i className='bi bi-person'></i>
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>Mot de passe</Label>
                    <div className='boxPassword'>
                        <Input type={viewPass ? ("text") : ("password")} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="********" />
                        <i onClick={changeView} className={icons}></i>
                    </div>
                </FormGroup>
                <FormGroup className='checkboxForm'>
                    <Input type="checkbox" name="connection" id="connexion" />
                    <Label>Reste connecter</Label>
                </FormGroup>

                <Button onClick={checkCount}>
                    Valider
                </Button>
                <div className='boxMessageError'>
                    {error}
                </div>
            </Form >
        )

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


    return (
        <div className='panelBody'>
            <Header />
            <div className='panelLogin'>
                <div className='panelmessage'>
                    <h3 className='title2'>Hi sante</h3>
                    <p>
                        {message}
                    </p>
                </div>
                {load ? (<Loading />) : (<FormLogin />)}

            </div>


        </div>
    );
}

export default Login;