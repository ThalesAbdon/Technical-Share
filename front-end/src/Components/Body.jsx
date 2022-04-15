import React from "react";
import { useNavigate } from "react-router-dom"
import { Container, Row, Col } from 'react-bootstrap';
import foguete from "../resources/foguete.png"

import "./Body.css"
function Body() {

    const navigate = useNavigate();

    function redirecionarCadastro() {
        navigate("/cadastro");
    }

    return (
        <React.Fragment>
            <section>
            <Container className="my-5 py-5">
                <Row>
                    <Col>
                <div className="home-imagem-foguete-container">
                    <img src={foguete} alt="Foguete" />
                </div>
                </Col>
                <Col>
                    {/* <div className="home-titulos-container"> */}
                        <h1>Olá, <b>#sanguelaranja</b></h1>
                    {/* </div>
                    <div className="home-sub-titulos-container"> */}
                        <h3>Bem-vindo à sua plataforma exclusiva de mentorias.</h3>
                    {/* </div>
                    <div className="home-mensagens-container"> */}
                        <p>Aqui você pode ensinar, aprender, ajudar a tirar dúvidas, trocar experiências,</p>
                        <p>conhecer seus colegas #sanguelaranja,</p>
                        <p>pedir orientação e fazer agendamentos de mentorias.</p>
                        <p>Tudo simples, rápido e on-line.</p>
                    {/* </div> */}
                    <div className="home-button-comecar-container">
                        <button className="botao" onClick={() => { redirecionarCadastro() }}>COMEÇAR</button>
                    </div>
                </Col>
                </Row>
            </Container>
            </section>
        </React.Fragment>
    )
}
export default Body;
