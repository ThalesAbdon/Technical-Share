import React from 'react';
import {Container,Form, Button, Row, Col} from 'react-bootstrap';
import './Login.scss';

document.body.style = "background: transparent";

const Login = () => (
    <section className="d-flex mb-5 pb-5">

        <Container>
            <Row className="justify-content-center center mt-5 pt-5">
                <h1>Olá, <span>#sanguelaranja</span></h1>
                <h5 className="mt-4">Cadastre-se para entrar nessa vitamina de conhecimento e ajuda mútua</h5>
                <center className="box mt-5">
                    <Form>
                        <Form.Group className="mb-5" controlId="formBasicEmail">
                            <Form.Label>E-mail corporativo</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-5" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="" className="btn-login mt-2" type="submit">
                            Entrar
                        </Button>
                    </Form>
                </center>
            </Row>
        </Container>
    </section>
)

export default Login;
