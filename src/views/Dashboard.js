import React from "react";
import {  Row, Col, Container, Button, Tabs, Tab, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{ faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import './Dashboard.scss';


const Dashboard  = () => {
    const latest = [
        {date: '14/08', description: 'SAQUE 24h 012925', value: '1.000,00' },
        {date: '19/08', description: 'FARMACIA 012345', value: '300,00' },
        {date: '21/08', description: 'SUPERMERCADO 024854', value: '275,00' },
        {date: '22/08', description: 'PETSHOP 012185', value: '30,00' },
    ];

    const future = [
        {date: '01/09', description: 'SALÁRIO', value: '3.300,00' },
        {date: '19/09', description: 'CARTÃO', value: '1.300,00' },
        {date: '21/09', description: 'GLOBOPLAY', value: '26,00' },
    ];

    return (
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
            <Col xs={12} lg={5} className="mt-lg-5 pt-lg-5">
                <Tabs className="mt-3 mt-5 pt-lg5" defaultActiveKey='latest'>
                    <Tab className="dashboard__table" eventKey='latest' title='Ultimos Lançamentos'>
                        <Table striped hover borderless>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {latest.map(({ date, description, value }) => (
                                    <tr>
                                        <td>{date}</td>
                                        <td>{description}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab className="dashboard__table" eventKey='future' title='Lançamentos Futuros' >
                    <Table  striped hover borderless>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {future.map(({ date, description, value }) => (
                                    <tr>
                                        <td>{date}</td>
                                        <td>{description}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        </Table>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    </Container>
)};

export default Dashboard ;