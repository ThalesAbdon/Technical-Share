import React from 'react';
import './Profile.scss';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import imgEx from '../resources/picture-example.png';

const Profile = () => (

    <Container className="px-5 py-3">
        <Row className="gap-3">
        <Col xs={12} md={6}>
        <Card>
        <Card.Body>
            <img src={imgEx}/>
            <h2>Arthur Andradee</h2>
            <Card.Text>
                <h5>UX Research</h5>
                <h5>SCRUM</h5>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        </Card>
            <div className="available">Estou disponível!</div>
            <div className="schedule d-flex align-items-center">aqui fica a agenda, né</div>
        </Col>

        <Col>
        <Card>
        <Card.Body>
            <img src={imgEx}/>
            <h2>Arthur Andradee</h2>
            <Card.Text>
                <h5>UX Research</h5>
                <h5>SCRUM</h5>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        </Card>
            <div className="available">Estou disponível!</div>
            <div className="schedule d-flex align-items-center">aqui fica a agenda, né</div>
        </Col>
        </Row>
    </Container>

);

export default Profile;
