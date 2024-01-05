import React, { useState } from "react";
import {useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';

const AccountModal = ({ show, handleClose, auth }) => { 
    
    const navigate = useNavigate();
    const [name, setName] = useState();

    const handleSubmit = () => {
        auth.login(name, '12345', navigate("/dashboard"));
        handleClose();
    }

    return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Abra sua Conta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Seu Nome</Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome:" value={name} onChange={(e) => setName(e.currentTarget.value )}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Seu e-mail</Form.Label>
                <Form.Control type="email" placeholder="Digite seu e-mail:" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCidade">
                <Form.Label>Sua Cidade</Form.Label>
                <Form.Control as='select'>
                    <option value="SP">São Paulo</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </Form.Control>
            </Form.Group>
            <Form.Check // prettier-ignore
                type='checkbox'
                id='custom-checkbox'
                label='Eu li e concordo com os termos de uso.'
          />
        </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
            Criar Conta
        </Button>
        </Modal.Footer>
    </Modal>
  );
};

export default AccountModal;