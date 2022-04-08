import React, { useEffect, useState } from "react";
import "./MentorsGrid.scss";
import { Card, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../services/api";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

export default function MentorsGrid() {
  const [profile, setProfile] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
 // const [mentorId, setMentorId] = React.useState(Object);

  const [perfis, setPerfis] = useState([]);
  useEffect(() => {
    api
      .get("/api/get/")
      .then((response) => {
        setPerfis(response.data.user);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };

  const [hour, setHour] = React.useState(false);

  function hourClick(h) {
    setHour(h);
  }

  const data = moment(dateState).format("DD/MM/YYYY");

  var year = new Date().getFullYear();
  //variavel que guarda o mês atual
  var month = new Date().getMonth();
  //variavel que guarda o dia atual e soma + 7 dias para assim sempre ser disponivel marcar mentoria no periodo de 1 semana
  var day = Number(String(new Date().getDate()).padStart(2, "0")) + 30;

  const mentors = perfis.map((mentor) => (
    <Col xs={12} md={6} className="pb-3">
      <div className="mb-3">
        <Card>
          <Card.Body>
            <img src={mentor.avatar} />
            <h6>{mentor.name}</h6>
            <h6>
              {mentor.work} {mentor.seniority}
            </h6>
            <div className="d-flex justify-content-end"></div>
            <Card.Text className="mt-5 pt-3">{mentor.bio}</Card.Text>
            <div className="skills">
              <ul>
                {mentor.skills.map((index) => {
                  return (
                    <li className="skills-item" key={mentor._id}>
                      {index}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Card.Body>
        </Card>

        <div className="schedule">
          <Row className="d-flex align-items-center">
            <ul>
              {mentor.horariosDisponiveis.map((index) => {
                return (
                  <li className="schedule-item" key={mentor._id}>{index}</li>   
                );
              })}
            </ul>
          </Row>
        </div>
        <Button
          variant=""
          className="btn-agendamento"
          onClick={() => modalProfile(mentor)}
        >
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
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container className="d-flex align-items-center justify-content-center center">
            <Row className="d-flex justify-content-center center">
              <Col xs={12} md={6} className="pb-3">
                <div className="mb-3">
                  <Card>
                    <Card.Body>
                      <img src={profile.avatar} />
                      <h6>{profile.name}</h6>
                      <h6>
                        {profile.work} {profile.seniority}
                      </h6>
                      <div className="d-flex justify-content-end"></div>
                      <Card.Text className="mt-5 pt-3">{profile.bio}</Card.Text>
                      <div className="skills">
                        <h6>
                          <b>Hard Skills</b>
                        </h6>
                        <ul>
            
                        {profile ?   profile.skills.map((index) => {
                                              return (<li className="skills-item" key={profile._id}> {index} </li>);}): <li> OI</li>}
                      
                        </ul>
                        <h6>
                          <b>Soft Skills</b>
                        </h6>
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
                        <Calendar
                          value={dateState}
                          onChange={changeDate}
                          //minDate para não marcar mentorias nos dias anteriores ao dia atual.
                          minDate={new Date()}
                          maxDate={new Date(year, month, day)}
                        />

                        <div>
                        
                          
                          { /*
                          {profile ?  
                          <Button> OI </Button> :  
                          profile.horariosDisponiveis.map((index) => {return (<Button className="btn-horas"  onClick={() => hourClick(index)} > {index} </Button>);})} */}
                         
                         
                          {profile ?
                           profile.horariosDisponiveis.map((index) => {return (<Button className="btn-horas"  onClick={() => hourClick(index)} > {index} </Button>);}) :
                           <Button> OI </Button>
                            
                          }
                    



                          <Button className="agendar mt-2">
                            Agendar dia {data} às {hour}
                          </Button>
                        </div>
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

  function modalProfile(obj) {
    setProfile(obj);
    setModalShow(true);
  }

  return (
    <Container className="px-5 py-3">
      <Row className="d-flex align-items-center justify-content-center pt-3">
        {mentors}
      </Row>
    </Container>
  );
}
