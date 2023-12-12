import React from 'react';
import {  Row, Col, Container, Button } from 'react-bootstrap';
import { Routes, Route} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{ faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import AccountBalance from "../components/AccountBalance";

import './Dashboard.scss';


const Dashboard  = ({ className = false }) => {
    const data = {
        latestBalance: [
        {date: '14/08', description: 'SAQUE 24h 012925', value: '1.000,00' },
        {date: '19/08', description: 'FARMACIA 012345', value: '300,00' },
        {date: '21/08', description: 'SUPERMERCADO 024854', value: '275,00' },
        {date: '22/08', description: 'PETSHOP 012185', value: '30,00' },
    ],

    futureBalance: [
        {date: '01/09', description: 'SALÁRIO', value: '3.300,00' },
        {date: '19/09', description: 'CARTÃO', value: '1.300,00' },
        {date: '21/09', description: 'GLOBOPLAY', value: '26,00' },
    ],
};

    return (
        <Container className={`dashboard py-5 ${className ? className : ''}`}> 
            <Row>
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
                    <Button className="dashboard__button dashboard__button-active" variant='link'>
                            Minha Conta
                        </Button>
                        <Button className="dashboard__button " variant='link'>
                            Pagamentos
                        </Button>
                        <Button className="dashboard__button " variant='link'>
                            Extratos
                        </Button>
                    </row>     
                </Col>
                
                <Routes>
                    <Route path="/Dashboard" >
                        <AccountBalance data={data} />
                    </Route>    
                </Routes>
                  
                 
            </Row>
        </Container>
    );
};

export default Dashboard ;