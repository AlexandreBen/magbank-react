import React from "react";
import { Row, Col, Button, Image } from 'react-bootstrap';
import logo from '../assets/logo__magic-pay--mobile.png'
import logoDesktop from '../assets/logo__magic-pay.png'
import './Hero.scss'

const Hero = () => (
    <div className="text-center text-light hero">
        <Row className="blocoHero">
            <Col lg className='text-lg-right  my-lg-5 image'>
                <Image className="d-lg-none" src={logo} />
                <Image className="d-none d-lg-inline-block" src={logoDesktop} />
            </Col>
            <Col lg className='text-lg-left my-lg-5 text'>
                <p>Pague suas contas pelo nossa APP</p>
                <Button variant='outline-light'>Abra sua conta</Button>
            </Col>
        </Row>
    </div>
);


export default Hero;