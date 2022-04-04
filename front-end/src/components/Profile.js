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
            <h6>Analu</h6>
            <h6>Front-end developer</h6>
            <div className="d-flex justify-content-end">
            <button className="btn-perfil">Ver perfil</button>
            </div>
            <Card.Text className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Etiam erat velit scelerisque in dictum.  Laoreet id donec ultrices tincidunt arcu non sodales neque.
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
            <h6>Analu</h6>
            <h6>Front-end developer</h6>
            <div className="d-flex justify-content-end">
            <button className="btn-perfil">Ver perfil</button>
            </div>
            <Card.Text className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Etiam erat velit scelerisque in dictum.  Laoreet id donec ultrices tincidunt arcu non sodales neque.
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
