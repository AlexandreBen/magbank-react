import React from "react";
import {  Row, Col, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{ faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import './Dashboard.scss';


const Dashboard  = () => (
    <Container className="dashboard py-5"> 
        <Row className="d-flex align-content-center mb-5">
            <Col xs={12} lg={4}>
                <Row>
                    <Col xs={3}>
                        <span className="user-avatar">
                            <FontAwesomeIcon icon={ faCircle } size="5x" color='#f8f9fa' />
                            <FontAwesomeIcon 
                            className="user-icon"
                             icon={ faUser } 
                             size="3x" 
                             color='#7c7d7d' 
                             />
                        </span>
                    </Col>
                    <Col xs={9}>
                        <h4>Alexandre Benjamin</h4>
                        <p className="text-muted">ag:1234 c/c: 01905-0</p>
                    </Col>
                </Row>
                <row xs={12} className='button py-5'>
                   <Button className="dashboard__button dashboard__button--active" variant='link'>
                        Minha Conta
                    </Button>
                    <Button className="dashboard__button dashboard__button--active" variant='link'>
                        Pagamentos
                    </Button>
                    <Button className="dashboard__button dashboard__button--active" variant='link'>
                        Extratos
                    </Button>
                </row>     
            </Col>
            <Col xs={12} lg={3} className="mt-lg-5 pt-lg-4 conta__corrente">
                <h3 className="my-5">Conta Corrente</h3>
                <h6>Saldo em conta corrente</h6>
                <h4 className="mb-4">
                    <small>R$</small>3.500<small>,00</small> 
                </h4>
                <h6>Cheque especial</h6>
                <p className="mb-1">Limite disponível</p>
                <p className="mb-4">R$ 5.000,00</p>
                <Button variant="secondary">Ver extrato</Button>
            </Col>
            <Col xs={12} lg={6}></Col>
        </Row>
    </Container>
);

export default Dashboard ;