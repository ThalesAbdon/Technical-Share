import React, { useEffect, useState } from "react";
import swal from '@sweetalert/with-react';
import api from '../services/api';
import moment from 'moment';
import { Container, Row, Col, Card, Modal, InputGroup, FormControl } from "react-bootstrap";
import Auth from "../Auth/Auth";
import Calendar from 'react-calendar';
import './Buttons.scss';
import './Search.scss';
import './Calendar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import orange from '../resources/laranja_mentorange-vetor.svg'

export default function Search() {

  document.body.style = "background: transparent";
  
  //cards que aparecem quando abre a tela
  const [profile, setProfile] = React.useState(false);
  //captura a busca pelas skills
  const [search, setSearch] = React.useState("");
  //altera o estado de invisibel -> visivel
  const [visible, setVisible] = useState(false);


  //coisas do calendario
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  var year = new Date().getFullYear()
  //variavel que guarda o mês atual 
  var month = new Date().getMonth()
  //variavel que guarda o dia atual e soma + 7 dias para assim sempre ser disponivel marcar mentoria no periodo de 1 semana 
  var day = Number( String(new Date().getDate()).padStart(2,'0')) + 30

  //pega o valor da hora
  const [hour, setHour] = React.useState(false);
  function hourClick(h){
    setHour(h)
  }

  //filtra os mentores pela skill
  const [filteredProfiles, setFilteredProfiles] = React.useState([]);
  async function filter(){
    var tratamento = search.replace("#","%23")
    const data = await api.get(`/api/search?skills=${tratamento}`)
    console.log(tratamento)
    setFilteredProfiles(data.data)
    setVisible(true)
  }

  //realiza o agendamento
  const token = localStorage.getItem('token');
  const [id,setId] = useState('');
  const data = moment(dateState).format('DD/MM/YYYY');
  let completedata = data + " " + hour;

  async function handleSubmit(){
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
      title: "Agendamento realizado com sucesso!",
      button: "Meus agendamentos",
    });
    setModalShow(false)
  }

  //faz abrir o modal com o perfil e a agenda
  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered >
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
                                      <div className="skills-card" > {index} </div> 
                                    </Col>
                                    <Col sm={6}>
                                      <img src={orange} className="space" width="30"/>
                                      <img src={orange} className="space" width="30"/>
                                      <img src={orange} className="space" width="30"/>
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
                          minDate = {new Date()}
                          maxDate = {new Date(year, month, day)}
                        />
                        <div class="box-label">Escolha um horário</div>
                        <div className="available-times">
                          <div>
                            {profile ? profile.horariosDisponiveis.map((index) => {
                              let hrs = <button className="time-modal"  onClick={() => hourClick(index)} > {index} </button>
                                return (hrs);}) : <button></button>
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
          <button onClick= {() => handleSubmit()} onChange={setId(profile._id)} className="schedule-modal">Agendar</button>
        </Row>
      </Modal>
    );
  }
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
  //cards não filtrados
  const unfilteredMentors =  perfis.map(mentor => (
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
                    <div className="skills-card" >{index}</div>
                  );
                })}
              </ul>
            </div>
            <div className="availableTimes mt-4 mb-5">
              <h6 className="mb-3">Horários disponíveis hoje:</h6>
              <ul>
                {mentor.horariosDisponiveis.map((index) => {
                  return (
                    <div className="time-card">{index}</div>   
                  );
                })}
              </ul> 
            </div>
          </Card.Body>
        </Card>
      <Row className="justify-content-end">
        <button className="schedule-card" variant="" onClick={() => modalProfile(mentor)}>Ver agenda</button>
      </Row>
      {/* necessário para abrir o modal */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
    </Col>
  ));

  //cards filtrados
  const filteredMentors =  filteredProfiles.map(mentor => (
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
                    <div className="skills-card" >{index}</div>
                  );
                })}
              </ul>
            </div>
            <div className="availableTimes mt-4 mb-5">
              <h6 className="mb-3">Horários disponíveis hoje:</h6>
              <ul>
                {mentor.horariosDisponiveis.map((index) => {
                  return (
                    <div className="hour">{index}</div>   
                  );
                })}
              </ul> 
            </div>
          </Card.Body>
        </Card>
      <Row className="justify-content-end">
        <button className="schedule-card" variant="" onClick={() => modalProfile(mentor)}>Ver agenda</button>
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
    <section className="cards">
      <Container className="px-5 py-3 mb-5">
        <Row className="justify-content-center">
          <h1>Encontre um <b>mentor</b></h1>
          <InputGroup className="input py-3 mb-5" size="sm">
            <FormControl type = "text" aria-label="Large" aria-describedby="inputGroup-sizing-md" placeholder="Digite aqui uma skill que você quer aprender"
              onChange={e => setSearch(e.target.value)}
              value = {search}   
            />      
            <button className="search" onClick={filter}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>   
          </InputGroup>
          {visible && <h2>Estes são os mentores com a <b>skill escolhida</b></h2>}
        </Row>
        <Row className="d-flex align-items-center justify-content-center pt-3">
          {filteredMentors.length === 0 ? unfilteredMentors : filteredMentors}
        </Row>
      </Container>
    </section>
  )
}
