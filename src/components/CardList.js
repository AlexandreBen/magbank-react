import React from "react";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import './CardList.scss';

const CardList = ({ Posts }) => (
    <Container>
        <Row>
            {Posts.map(({ id, image, title, excerpt, action }) => (
                <Col xs={12} lg={4} key={id}>
                    <Card className="mx-auto my-3">
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{excerpt}</Card.Text>
                            <Button variant='outline-primary'>{action}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
);

export default CardList;