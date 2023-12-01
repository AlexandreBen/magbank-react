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
    <footer className="footer">
       <Container>
            <Row className="text-center py-5">
                <Col  xs={12}  lg={5} className="text-lg-left mb-3">
                    <Image src={logo} />
                </Col>

                <Col xs={12}  lg={5} className="espaco">
                    <Image className="app" src={appstore} />
                    <Image className="app" src={google} />
                </Col>
                    
                <Col xs={12}  lg={2} className="d-flex align-items-center justify-content-center" >
                    <Image className="face" src={facebook} size='2x' />
                    <Image className="face" src={twitter} size='2x' />
                    <Image className="face" src={youtube} size='2x' />
                    <Image className="face" src={instagram} size='2x' />
                </Col>
            </Row>
       </Container>
    </footer>
)

export default Footer;