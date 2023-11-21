import React from "react";
import { Jumbotron, Button, Image } from 'react-bootstrap';
import logo from '../assets/logo__magic-pay.png'

const Capa = () => (
    <Jumbotron className=''>
        <Image src={logo} />
        <p>Pague suas contas pelo nossa APP</p>
        <Button variant='outline-light'>Abra sua conta</Button>
    </Jumbotron>
);


export default Capa;