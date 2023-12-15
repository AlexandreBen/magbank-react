import React from "react";
import {  Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import { motion } from 'framer-motion'

import './Login.scss';


const Login = () => (
    <motion.section className="login"
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        exit={{ x: window.innerWidth }}
    >
        
        <Row>
            <Col className="text-center text-light form-input">
            <Image src={logo} className="mb-5"/>
            <Form>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className="lead"><strong>Número da Conta</strong></Form.Label>
                    <Form.Control type="number" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label className="lead"><strong>Senha</strong></Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Link to='/dashboard'>
                    <Button variant="success" type="submit">
                       Criar Conta
                    </Button>
                </Link>
                
            </Form>
            </Col>
        </Row>
    </motion.section>
);

export default Login;