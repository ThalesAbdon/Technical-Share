import React from 'react';
import {Container,Form, Button, Row, Col} from 'react-bootstrap';
import './Login.scss';

const Login = () => (
    <section className="d-flex">

        <Container>
            <Row className="justify-content-center center mt-4 pt-4">
                <h1>Faça login</h1>
                <div className="box mt-4">
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail corporativo</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Matrícula ou ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter ID" />
                        <Form.Text className="text-muted">
                            Não sabe ou não possui ID/ Matrícula?
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="" className="color-primary" type="submit">
                        Entrar
                    </Button>
                    </Form>
                </div>
            </Row>
        </Container>
    </section>
)

export default Login;
