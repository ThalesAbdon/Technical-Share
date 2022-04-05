import React from "react";
import './Header.scss';
import {Container, InputGroup, FormControl, Row} from 'react-bootstrap';


const Header = () => (
    <section className="header d-flex align-items-center px-3">
        <Container>
            <Row className="justify-content-center">
                <h1>Encontre seu mentor</h1>
                <InputGroup className="input py-3" size="lg">
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Nome, Skill, Assunto"/>
                </InputGroup>
            </Row>
        </Container>
    </section>
);

export default Header;
