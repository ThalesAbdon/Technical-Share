import React, { useEffect, useState } from "react";
import './Profile.scss';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import api from '../services/api';


export default function Profile() {
  const [perfis, setPerfis] = useState([]);
  useEffect(() => {
    api.get("/api/get/")
       .then((response) => {
         console.log(response.data.user[0]);
         setPerfis(response.data.user);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  const mentores = perfis.map(mentor => (
    <Col xs={12} md={6} className="pb-3">
    <div className="mb-3">
    <Card>
    <Card.Body>
    <img src={mentor.avatar}/>
    <h6>{mentor.name}</h6>
    <h6>{mentor.work} | {mentor.seniority}</h6>
    <div className="d-flex justify-content-end">
    <button className="btn-perfil">Ver perfil</button>
    </div>
    <Card.Text className="mt-4">{mentor.bio}</Card.Text>
    <div className="skills">
        <ul>
            <li className="skills-item">UX Designer</li>
            <li className="skills-item">Back-end Java</li>
            <li className="skills-item">Front-end Angular</li>
        </ul>
    </div>
    </Card.Body>
    </Card>
    
    <div className="available">Estou disponível!</div>
    <div className="schedule">
        <Row className="d-flex align-items-center">
        <ul>
            <li className="schedule-item">10:00</li>
            <li className="schedule-item">11:00</li>
            <li className="schedule-item">12:00</li>
            <li className="schedule-item">13:00</li>
            <li className="schedule-item agenda">Agendar</li>
        </ul>
        </Row>
    </div>
    </div>
    </Col>
    
));

  return (
    <Container className="px-5 py-3">
        <Row className="d-flex align-items-center justify-content-center pt-3">
            {mentores}
        </Row>
    </Container>
  )}
