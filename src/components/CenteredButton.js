import React from "react";
import { Container, Row, Button } from "react-bootstrap";

const CenteredButton = ({ children, handleCreateAcc }) => (
    <Container>
        <Row className='d-flex justify-content-center'>
            <Button 
            className='my-5' 
            variant='outline-success' 
            size='lg' 
            onClick={handleCreateAcc}
            style={{ width: '200px'}}>
                {children}
            </Button>
        </Row>
    </Container>
);

export default CenteredButton;