import React from "react";
import {  Col, Table } from 'react-bootstrap';


const AccountHistory = ({ data }) => {
   
    const { history } = data;

    return(
        <Col xs={12} lg={6} className="mt-lg-5 pt-lg-5">
            <h3 className="mt-4">Extrato de Conta Corrente</h3>
                <Table striped hover borderless>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Descrição</th>
                            <th>Valor (R$)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {history.map(({ date, description, value }) => (
                        <tr>
                            <td>{date}</td>
                            <td>{description}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                        
                    </tbody>
                </Table>   
        </Col>
    )
};

export default AccountHistory;