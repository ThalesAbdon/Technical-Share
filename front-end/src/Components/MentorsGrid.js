import React, { useEffect, useState } from "react";
import './MentorsGrid.scss';
import {Card, Button, Container, Row, Col, Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import api from '../services/api';

export default function MentorsGrid() {

  const [profile, setProfile] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {profile.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>{profile._id}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);

  const [perfis, setPerfis] = useState([]);
  useEffect(() => {
    api.get("/api/get/")
       .then((response) => {
         setPerfis(response.data.user);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  function modalProfile(obj){
    setProfile(obj)
    setModalShow(true)
  }

  const mentores = 
    perfis.map(mentor => (
    <Col xs={12} md={6} className="pb-3">
    <div className="mb-3">
    <Card>
    <Card.Body>
    <img src={mentor.avatar}/>
    <h6>{mentor.name}</h6>
    <h6>{mentor.work} | {mentor.seniority}</h6>
    <div className="d-flex justify-content-end">
    </div>
    <Card.Text className="mt-5 pt-3">{mentor.bio}</Card.Text>
    <div className="skills">
        <ul>
            <li className="skills-item">UX Designer</li>
            <li className="skills-item">Back-end Java</li>
            <li className="skills-item">Front-end Angular</li>
        </ul>
    </div>
    </Card.Body>
    </Card>
    
    <div className="schedule">
        <Row className="d-flex align-items-center">
          <ul>
              <li className="schedule-item">10:00</li>
              <li className="schedule-item">11:00</li>
              <li className="schedule-item">12:00</li>
              <li className="schedule-item">13:00</li>
          </ul>
        </Row>
    </div>
    <Button variant="" className="btn-agendamento" onClick={() => modalProfile(mentor)}>
      Saiba mais
    </Button>
  
    <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
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
