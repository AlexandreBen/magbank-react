import React, { useState } from "react";
import { Row, Col, Form, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

import "./Login.scss";



const Login = ({ auth }) => {
  const [name, setName] = useState();
  const [account, setAccount] = useState();

  const navigate = useNavigate();

  const handleSubmit = () => {
    auth.login(name, '12345', navigate("/dashboard"));
}

  const handleClose = () => {
    auth.login( navigate("/"));
  }

  
  return (
   
    <motion.section
      className="login"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ x: window.innerWidth }}
    >
      
      <section className="login">
        <div className="login__container">
          <Row>
            <Col className="text-center text-light form-input">
              <Image src={logo} className="mb-5" />
              <Form>
                <Form.Group className="mb-4" controlId="formBasicName">
                  <Form.Label className="lead">
                    <strong>Nome e sobrenome</strong>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Digite seu nome:" value={name} onChange={(e) => setName(e.currentTarget.value )}/>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label className="lead">
                    <strong>Número da Conta</strong>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    value={account}
                    onChange={(e) => setAccount(e.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label className="lead">
                    <strong>Senha</strong>
                  </Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <div className="button-login">
                  <Button variant="success" type="submit" onClick={ handleSubmit }>
                    Acessar Conta
                  </Button>
                  <Button variant="danger" type="submit" onClick={ handleClose }>
                    Cancelar
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </section>
    </motion.section>
  );
};

export default Login;
