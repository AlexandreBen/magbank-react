import React from "react";
import { Navbar, Nav, Button, ButtonGroup, Form, Row, NavDropdown } from "react-bootstrap";
import "./Navbar.scss";

const Navigation = () => (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">MAGBANK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#cartao">Cartão</Nav.Link>
            <Nav.Link href="#quem somos">Quem Somos</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
          </Nav>
          <Form inline>
        <Row>
        <ButtonGroup aria-label="Basic example">
            <Button variant="primary">
            <NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item></NavDropdown>
            </Button>
            <Button variant="primary">Abra sua conta</Button>
        </ButtonGroup>
        </Row>
      </Form>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;


