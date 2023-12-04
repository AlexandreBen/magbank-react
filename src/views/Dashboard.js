import React from "react";
import {  Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{ faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import './Dashboard.scss';


const Dashboard  = () => (
    <Container className="dashboard py-5"> 
        <Row className="d-flex align-content-center">
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
            </Col>
            <Col xs={12} lg={3}></Col>
            <Col xs={12} lg={6}></Col>
        </Row>
    </Container>
);

export default Dashboard ;