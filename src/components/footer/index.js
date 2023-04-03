import React from 'react';
import logo from '../../logo.svg';
import { Input, Button } from 'reactstrap';

const Footer = () => {
    return (
        <footer>
            <div className='footer'>

                <div className='panellogo'>
                    <img src={logo} className="logo" alt='hi-sante' />
                    <h3>HI-SANTE +</h3>
                </div>

                <div className='panelFooter'>
                    <address>
                        <strong className='titleFooter'>Hi-sante</strong><br />
                        N° 23 Av. Monkoto<br />
                        Q/ Kimbangu<br />
                        Commune Kalamu<br />
                        Kinshasa | RDCongo<br />
                    </address>
                    <a href='mailto:Infos@hisante.com'>
                        Infos@hisante.com
                    </a>
                    <a href='tel:+24389'>
                        +243 89 512 72 36
                    </a>
                </div>

                <div className='panelFooter'>
                    <h3>Newletter</h3>
                    <div>
                        <Input type="email" name="email" id="email" placeholder="Ex. exemple@hisante.com" required />
                        <Button className="btnEnvoyer">envoyer</Button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;