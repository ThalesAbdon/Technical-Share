import React from 'react';
import './Footer.scss';
import {Container, Row, Col} from 'react-bootstrap';
import Logo from '../resources/logo_mentorange-white.svg';
import LogoFC from '../resources/logo_fcamara.svg'

const Footer = () => (
    <footer className="d-flex footer fixed-bottom mt-5">
        <Container>
            <Row className="align-items-center">
                <Col sm={12} md={4} className="copyright">
                    Mentorange &copy; Todos os direitos reservados
                </Col>
                <Col sm={12} md={5} className="logos d-flex justify-content-between">

                    <img src={LogoFC}
                    width="109"/>
                    <img src={Logo}
                    width="235"/>
                </Col>
                <Col sm={12} md={3} className="help text-end">
                    Ajuda
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer;
