import React from 'react';
import './Profile.scss';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import imgEx from '../resources/picture-example.png';

const Profile = () => (

    <Container className="px-5 py-3">
        <Row>
        <Col xs={12} md={6}>
        <Card>
        <Card.Body>
            <h2>Arthur Andradee</h2>
            <Card.Img variant="top" src={imgEx} className="py-2"/>
            <Card.Text>
                <h5>UX Research</h5>
                <h5>SCRUM</h5>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <center><Button className="color-primary">Consultar horários</Button></center>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card>
        <Card.Body>
            <h2>Arthur Andrade</h2>
            <Card.Img variant="top" src={imgEx} className="py-2"/>
            <Card.Text>
                <h5>UX Research</h5>
                <h5>SCRUM</h5>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <center><Button className="color-primary">Consultar horários</Button></center>
        </Card.Body>
        </Card>
        </Col>
        </Row>
    </Container>

);

export default Profile;