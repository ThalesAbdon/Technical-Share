import React, { useEffect, useRef, useState } from "react";
import './components/MentorsGrid.scss';
import {Card, Button, Container, Row, Col, Modal, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import api from './services/api';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import axios from 'axios';
import swal from 'sweetalert';

export default function MentorsGrid() {


  const [profile, setProfile] = React.useState(false);
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


    const handleSubmit = (e) => {
      e.preventDefault();
      const userData = {
        horario: completedata
      };
      api.post("/api/agendar/624e23d1629b48732cbedd2d", userData).then((response) => {
        console.log(response.status);
      });
      swal({
        text: "Agendamento realizado com sucesso!",
        icon: "success",
      })
      setModalShow(false)
    };

  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }

  const [visible, setVisible] = React.useState(false);

  const [hour, setHour] = React.useState(false);

  function hourClick(h){
    setHour(h)
    setVisible(true)
  }

  const data = moment(dateState).format('DD/MM/YYYY');

  

  

  const mentors = perfis.map(mentor => (
    <Col xs={12} md={6} className="pb-3">
    <div className="mb-3">
    <Card>
    <Card.Body>
    <img src={mentor.avatar}/>
    <h6>{mentor.name}</h6>
    <h6>{mentor.work} {mentor.seniority}</h6>
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

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Container className="d-flex align-items-center justify-content-center center">
          <Row className="d-flex justify-content-center center">
          <Col xs={12} md={6} className="pb-3">
            <div className="mb-3">
            <Card>
              <Card.Body>
                <img src={profile.avatar}/>
                <h6>{profile.name}</h6>
                <h6>{profile.work} {profile.seniority}</h6>
                <div className="d-flex justify-content-end">
                </div>
                <Card.Text className="mt-5 pt-3">{profile.bio}</Card.Text>
                <div className="skills">
                  <h6><b>Hard Skills</b></h6>
                    <ul>
                        <li className="skills-item">UX Designer</li>
                        <li className="skills-item">Back-end Java</li>
                        <li className="skills-item">Front-end Angular</li>
                    </ul>
                    <h6><b>Soft Skills</b></h6>
                    <ul>
                        <li className="skills-item">Proativo</li>
                        <li className="skills-item">Gosta de ensinar</li>
                        <li className="skills-item">Comunicativo</li>
                    </ul>
                </div>
              </Card.Body>
            </Card>
            </div>
          </Col>
          <Col xs={12} md={6} className="pb-3 justify-content-center">
            <div className="mb-3">
            <Card>
              <Card.Body>
                <center>
              <Calendar value={dateState} onChange={changeDate}/>

              <div className="mt-2">
                <Button className="btn-horas" onClick={() => hourClick("08:30")}>08:30</Button>
                <Button className="btn-horas" onClick={() => hourClick("09:00")}>09:00</Button>
                <Button className="btn-horas" onClick={() => hourClick("10:00")}>10:00</Button>
                <Button className="btn-horas" onClick={() => hourClick("11:00")}>11:00</Button>
                <Button className="btn-horas" onClick={() => hourClick("14:00")}>14:00</Button>
                <Button className="btn-horas" onClick={() => hourClick("15:00")}>15:00</Button>
                <Button className="btn-horas" onClick={() => hourClick("16:00")}>16:00</Button>
                <Button className="btn-horas" onClick={() => hourClick("17:00")}>17:00</Button>
              </div>
              <div className="mt-3">{visible && <Button onClick={handleSubmit}>Agendar dia {data} às {hour}</Button>}</div>
              </center>
              </Card.Body>
            </Card>
            </div>
          </Col>
          </Row>
          </Container>
        </Modal.Body>
        
      </Modal>
    );
  
  }

  let completedata = data + " " + hour;

  function modalProfile(obj){
    setProfile(obj)
    setModalShow(true)
  }


  return (
    <Container className="px-5 py-3">
        <Row className="d-flex align-items-center justify-content-center pt-3">
            {mentors}
            
        </Row>
    </Container>
  )
  }