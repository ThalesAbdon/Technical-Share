import React, { useEffect, useState }  from 'react';
import './Agendamentos.scss';
import {Container, Row, Col} from 'react-bootstrap';
import api from '../services/api';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import Auth from "../Auth/Auth";
import swal from '@sweetalert/with-react';
import './Alert.scss';


export default function Testando () {


    async function cancelarHorario(id){
        if (window.confirm('Tem certeza que deseja cancelar seu agendamento?')) {
          const response = await api.delete(`/api/cancelarHorario/${id}`,{headers:{'x-access-token': token}})
           swal({title: response.data.message})
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

        const agendamento = perfis.map(mentor => (
          
            <div className="mentoria justify-content-center">
            <Row className="justify-content-center">
                <Col sm={12} md={6}>
                    Mentoria de {mentor.user.work} dia {mentor.horario}
                    
                </Col>
                <Col sm={12} md={6}>
                    <span className="label-confirmar">Confirmar mentoria?</span>
                    <button className="sim">Sim</button>
                    <button className="nao" onClick={() => cancelarHorario(mentor._id)}>Não</button>
                    <button className="alterar">Alterar horário</button>
                </Col>
                
            </Row>
            </div>
        ));

        const [visible, setVisible] = React.useState(false);

        


    return (

    <section className="d-flex">

        <Container>
            <Row className="justify-content-center">
                
                <div class="bar text-center my-3">Meus agendamentos</div>

                
                <div class="box-mentorias my-3">
                    <h5>Próximas mentorias como mentorado</h5>
                    <hr className="line"/>
                    
                        {agendamento}
                    
                </div>
                
                <div class="box-mentorias my-3">
                    <h5>Próximas mentorias como mentor</h5>
                    <hr className="line"/>
                        
                        <h6>Nenhum agendamento encontrado</h6>
                        
                </div>
                
            </Row>
        </Container>
    </section>
    )
} 
