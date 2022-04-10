import React, { useEffect, useState } from "react";
import './Agendamentos.scss';
import {Card, Button, Container, Row, Col, Modal} from 'react-bootstrap';
import api from '../services/api';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import Auth from "../Auth/Auth";

export default function Agendamentos() {

  document.body.style = "background: transparent";


   async function cancelarHorario(id){
    if (window.confirm('Tem certeza que deseja cancelar seu agendamento?')) {
      const response = await api.delete(`/api/cancelarHorario/${id}`,{headers:{'x-access-token': token}})
       alert(response.data.message)
       window.location.reload()
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }

   }

  //perfis que são exibidos quando abre a tela
  const [perfis, setPerfis] = useState([]);
  //token do user
  const token = localStorage.getItem('token');
  useEffect(() => {
    api
      .get("/api/listarAgendaUser/",{headers:{'x-access-token': token}})
      .then((response) => {
        setPerfis(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);



  const mentors = perfis.map(mentor => (
    <Col xs={12} md={5} className="pb-3 mx-4">
      <div className="mb-3">
        <Card>
          <Card.Body>
            <img className="avatar" alt= " " src={mentor.user.avatar}/>
            <h6>{mentor.user.name}</h6>
            <h6>{mentor.user.work} {mentor.user.seniority}</h6>
            <div className="py-2"/>
            <Card.Text className="mt-4 pt-3">{mentor.user.bio}</Card.Text>
            <div className="skills">
              <ul>
              {mentor.user.skills.map((index) => {
                  return (
                    <li className="skills-item" key={mentor.user._id}>
                      {index}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="availableTimes mt-4 mb-5">
              <h6 className="mb-3">Horários Marcados:</h6>
              <ul>
                {/* NECESSITA ESTILIZAR NO AGENDAMENTOS.SCSS O BOTÃO PARA CANCELAR*/}
                
               
           
              </ul> 
              
            </div>
            
          </Card.Body>
        </Card>
        <Button variant="" onClick={() => cancelarHorario(mentor._id)}  > {mentor.horario}  </Button>
      </div>
    </Col>
));






























/*
  const mentors = perfis.map(mentor => (
    <Col xs={12} md={5} className="pb-3 mx-4">
      <Card>
          <Card.Body>
       <img className="avatar" alt= " " src={mentor.user.avatar}/>
      <h6>{mentor.user.name}</h6>
      <h6>{mentor.user.work} {mentor.user.seniority}</h6>
      <div className="py-2"/>
            <Card.Text className="mt-4 pt-3">{mentor.user.bio}</Card.Text>
            <div className="skills"></div>
            <ul>
              {mentor.user.skills.map((index) => {
                  return (
                    <li className="skills-item" key={mentor.user._id}>
                      {index}
                    </li>
                  );
                })}
              </ul>
      </Card.Body>
      </Card>
    </Col>
));
*/


  

  return (
    <section>
      <Container className="px-5 py-3">
          <Row className="d-flex align-items-center justify-content-center pt-3">
              {mentors}
          </Row>
      </Container>
    </section>
  )
  

}
