import React from "react";
import {  Col, Button, Tabs, Tab, Table } from 'react-bootstrap';

const AccountBalance = ({ data }) => {

    const { latestBalance, futureBalance } = data;
    
    return (
    <>
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
                                {latestBalance.map(({ date, description, value }) => (
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
                                {futureBalance.map(({ date, description, value }) => (
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
    </>
)};

export default AccountBalance;