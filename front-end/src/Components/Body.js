import React from "react";
import { useNavigate } from "react-router-dom"
import { Container, Row, Col } from 'react-bootstrap';
import foguete from "../resources/foguete.png"
import './Buttons.scss';

import "./Body.scss"
function Body() {

    const navigate = useNavigate();

    function redirecionarCadastro() {
        navigate("/cadastro");
    }

    return (
        <React.Fragment>
            <section className="d-flex body">
            <Container className="my-5 py-5 text-right">
                <Row className="justify-content-end">
                    <Col className="justify-content-end">
                    {/* {/* <Col md={4}> */}
                <div className="home-imagem-foguete-container">
                    <img src={foguete} alt="Foguete" />
                </div>
                {/* </Col>
                <Col md={8}> */} 
                    {/* <div className="home-titulos-container"> */}
                        <h1 className="mb-4">Olá, <b>#sanguelaranja</b></h1>
                    {/* </div>
                    <div className="home-sub-titulos-container"> */}
                        <h2 className="mb-5">Bem-vindo à sua plataforma exclusiva de mentorias.</h2>
                    {/* </div>
                    <div className="home-mensagens-container"> */}
                        <p>Aqui você pode ensinar, aprender, ajudar a tirar dúvidas, trocar experiências,<br/>
                        conhecer seus colegas #sanguelaranja,<br/>
                        pedir orientação e fazer agendamentos de mentorias.<br/>
                        Tudo simples, rápido e on-line.</p>
                    {/* </div> */}
                    <div className="home-button-comecar-container mt-5">
                        <button className="start mt-5" onClick={() => { redirecionarCadastro() }}>Começar</button>
                    </div>
                {/* </Col> */}
                </Col>
                </Row>
            </Container>
            </section>
        </React.Fragment>
    )
}
export default Body;
