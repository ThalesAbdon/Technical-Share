import React, { useEffect, useState }  from 'react';
import './Agendamentos.scss';
import {Container, Row, Col} from 'react-bootstrap';
import api from '../services/api';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import swal from '@sweetalert/with-react';
import './Alert.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import './Buttons.scss';


export default function MeusAgendamentos () {

    function delay(n){
        return new Promise(function(resolve){
            setTimeout(resolve,n*1000);
        });
    }

    async function cancelarHorario(id){
        if (window.swal({title: 'Cancelando agendamento...'})) {
            const response = await api.delete(`/api/cancelarHorario/${id}`,{headers:{'x-access-token': token}})
            await delay(2)
            swal({title: response.data.message, icon: 'success'})
            await delay(2)
            window.location.reload()
        } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
        }
    }

    async function mentorCancelar(id){
        if (window.swal({title: 'Cancelando agendamento...'})) {
            const response = await api.delete(`/api/cancelarHorario/${id}`,{headers:{'x-access-token': token}})
            await delay(3)
            swal({title: response.data.message, icon: 'success'})
            await delay(3)
            window.location.reload()
            } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
        }
    }

    function goChat(id){
       localStorage.setItem("room",id)
        return history("/chat")    
    }

    // ir para o chat
    const history = useNavigate('');
    //perfis que são exibidos quando abre a tela
    const [perfis, setPerfis] = useState([]);
    const [alunos, setAlunos] = useState([]);
    //token do user
    const token = localStorage.getItem('token');
    useEffect(() => {
        api
        .get("/api/listarAgendaUser/",{headers:{'x-access-token': token}})
        .then((response) => {
            setPerfis(response.data.user)
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro : " + err);
        });

        api
        .get("/api/getId/",{headers:{'x-access-token': token}})        
        .then((response) => {
            console.log(response.data.user)
            setAlunos(response.data.user)
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro : " + err);
        });
    }, []);

    const agendamento = perfis.map(mentor => (  
        <div className="mentoria align-items-center">
            <Row className="align-items-center">
                <Col sm={12} md={8}>
                    Mentoria de {mentor.user.work} dia {mentor.horario} <br/>Mentor(a): {mentor.user.name} <br/> 
                </Col>
                <Col sm={12} md={4}>
                    <button className="cancel" onClick={() => cancelarHorario(mentor._id)}>Cancelar mentoria</button>
                    <button className="chat" onClick={() => goChat(mentor._id)}><FontAwesomeIcon icon={faComments} /></button>
                </Col>
            </Row>
        </div>
    ));

    const agendamentoMentor = alunos.map(mentor => (
        <div className="mentoria justify-content-center">
            <Row className="justify-content-center">
                <Col sm={12} md={8}>
                    Aula para {mentor.idAluno.work} dia {mentor.horario} <br/>Aluno:{mentor.idAluno.name} <br/> 
                </Col>
                <Col sm={12} md={4}>
                    <button className="cancel" onClick={() => mentorCancelar(mentor._id)}>Cancelar mentoria</button>
                    <button className="chat" onClick={() => goChat(mentor._id)}><FontAwesomeIcon icon={faComments} /></button>
                </Col>
            </Row>
        </div>
    ));

    return (
        <section className="d-flex">
            <Container>
                <Row className="justify-content-center">
                    <div class="bar text-center my-3">Meus agendamentos</div>
                    <div class="box-mentorias my-3">
                        <h5>Próximas mentorias como mentorado</h5>
                        <hr className="line"/>
                        {agendamento.length === 0 ? <h6>Nenhuma mentoria encontrada</h6> : agendamento}
                    </div>
                    
                    <div class="box-mentorias my-3">
                        <h5>Próximas mentorias como mentor</h5>
                        <hr className="line"/>
                        {agendamentoMentor.length === 0 ? <h6>Nenhuma mentoria encontrada</h6> : agendamentoMentor}
                    </div>
                </Row>
            </Container>
        </section>
    )
} 
