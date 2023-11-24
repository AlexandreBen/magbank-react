import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from '../assets/logo-magbank.png';
import appstore from '../assets/app-store.png';
import google from '../assets/google-play.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';
import instagram from '../assets/instagram.png';
import './Footer.scss';




const Footer = () => (
    <footer>
       <Container>
            <Row>
                <Col>
                    <Image src={logo} />
                </Col>
                <Col>
                    <Image src={appstore} />
                    <Image src={google} />
                </Col>
                    
                <Col>
                    <Image className="face" src={facebook} size='1x' color='#7c7c7c' />
                    <Image className="face" src={twitter} size='1x' color='#7c7c7c' />
                    <Image className="face" src={youtube} size='1x' color='#7c7c7c' />
                    <Image className="face" src={instagram} size='1x' color='#7c7c7c' />
                </Col>
            </Row>
       </Container>
    </footer>
)

export default Footer;