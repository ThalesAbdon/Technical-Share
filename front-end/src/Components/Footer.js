import React from 'react';
import './Footer.scss';
import {Container, Row, Col} from 'react-bootstrap';
import Logo from '../resources/Novo Projeto.svg';

const Footer = () => (
    <footer className="d-flex footer fixed-bottom mt-5">
        <Container>
            <Row className="align-items-center">
                <Col sm={12} md={4} className="copyright">
                    Mentorange &copy; Todos os direitos reservados
                </Col>
                <Col sm={12} md={4} className="logos text-center">
                    <img src={Logo}
                    width="235"/>
                </Col>
                <Col sm={12} md={4} className="help text-end">
                    Ajuda
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer;
