import React, { useEffect, useState } from "react";
import axios from 'axios';
import swal from '@sweetalert/with-react';
import {NavLink} from 'react-router-dom';
import './MentorsGrid.scss';
import './Calendar.scss';
import './Alert.scss';
import {Card, Button, Container, Row, Col, Modal} from 'react-bootstrap';
import api from '../services/api';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import Auth from "../Auth/Auth";

export default function MentorsGrid() {

  document.body.style = "background: transparent";

  //abre o modal
  const [profile, setProfile] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  console.log(modalShow);

  //coisas do calendario
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  
  //pega o valor da hora
  const [hour, setHour] = React.useState(false);
  function hourClick(h){
    setHour(h)
  }

// agendamento /////////
const token = localStorage.getItem('token');
const [id,setId] = useState('');

  async function handleSubmit(){
   // e.preventDefault();
    const userData = {
      horario: completedata
    };
    try{
      const data = await api.put(`/api/agendar/${id}`,{horario: userData.horario},{headers:{'x-access-token': token}})
      console.log(userData)   
  }catch(error){
      console.log(error.response)
  }




    swal({
      button: "X",
      title: "Agendamento realizado com sucesso!",
      button: "Meus agendamentos",
    });
    setModalShow(false)
  };
///////////////////////

  const data = moment(dateState).format('DD/MM/YYYY');
  
  var year = new Date().getFullYear()
  //variavel que guarda o mês atual 
  var month = new Date().getMonth()
  //variavel que guarda o dia atual e soma + 7 dias para assim sempre ser disponivel marcar mentoria no periodo de 1 semana 
  var day = Number( String(new Date(). getDate()). padStart(2,'0')) + 30

  //modal com o perfil e agenda do mentor
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container className="d-flex align-items-center justify-content-center center">
            <Row className="d-flex justify-content-center center">
              <Col xs={8} md={9} lg={5} className="pb-3">
                <div className="mb-3">
                  <Card>
                    <Card.Body>
                      <img className="avatar" alt=" " src={profile.avatar}/>
                      <h6>{profile.name}</h6>
                      <h6>{profile.work} {profile.seniority}</h6>
                      <div className="d-flex justify-content-end">
                      </div>
                      <Card.Text className="mt-5 pt-3">{profile.bio}</Card.Text>
                      <div className="skills">
                        <h6><b>Hard Skills</b></h6>
                          <ul>
                              {Auth()}
                              {profile ? profile.skills.map((index) => {
                                return (
                                  <Row className="align-items-center">
                                    <Col sm={6}>
                                    
                                  <div className="skills-item-modal" key={profile._id}> {index} </div> 
                                    </Col>
                                    <Col>
                                    xxx
                                    </Col>
                                    </Row>
                                  );}) : <li> </li>
                              }
                          </ul>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col xs={9} md={9} lg={7} className="pb-3 justify-content-center">
                <div className="mb-3">
                  <Card>
                    <Card.Body>
                      <center>
                      <div class="box-label">Escolha um dia</div>
                    
                        <Calendar 
                          value={dateState}
                          onChange={changeDate}
                          //minDate para não marcar mentorias nos dias anteriores ao dia atual.
                          minDate = {new Date()}
                          maxDate = {new Date(year, month, day)}
                          />
                    
                          <div class="box-label">Escolha um horário</div>
                            <div className="available-times">
                              <div>
                                {profile ? profile.horariosDisponiveis.map((index) => {
                                  let hrs = <Button className="hour"  onClick={() => hourClick(index)} > {index} </Button>
                                  return ( 
                                    hrs
                                    );}) : <Button>  </Button>
                                }
                              </div>
                            </div>
                          
                          </center>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Row className="justify-content-end">
          
          <Button onClick= {() => handleSubmit()} onChange={setId(profile._id)} className="hour btn-agendar">Agendar</Button>
       
        </Row>
      </Modal>
    );
  }

  let completedata = data + " " + hour;

  function modalProfile(obj){
    setProfile(obj)
    setModalShow(true)
  }

  //perfis que são exibidos quando abre a tela
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


  //cards que aparecem quando abre a tela
  const mentors = perfis.map(mentor => (
    <Col xs={12} md={9} lg={5} className="pb-3 mx-4">


      <div className="mb-3">
        <Card>
          <Card.Body>
            <img className="avatar" alt= " " src={mentor.avatar}/>
            <h6>{mentor.name}</h6>
            <h6>{mentor.work} {mentor.seniority}</h6>
            <div className="py-2"/>
            <Card.Text className="mt-4 pt-3">{mentor.bio}</Card.Text>
            <div className="skills">
              <ul>
              {mentor.skills.map((index) => {
                  return (
                    <div className="skills-item" key={mentor._id}>
                      {index}
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="availableTimes mt-4 mb-5">
              <h6 className="mb-3">Horários disponíveis hoje:</h6>
              <ul>
              {mentor.horariosDisponiveis.map((index) => {
                return (
                  <div className="hour" key={mentor._id}>{index}</div>   
                );
              })}
              </ul> 
            </div>
          </Card.Body>
        </Card>
      <Row className="justify-content-end">
        <Button variant="" onClick={() => modalProfile(mentor)}>
          Ver agenda
        </Button>
      </Row>
  
      {/* necessário para abrir o modal */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
    </Col>
));


  return (
    <section>
      <Container className="px-5 py-3 mb-5">
          <Row className="d-flex align-items-center justify-content-center pt-3">
              {mentors}
          </Row>
      </Container>
    </section>
  )


}
