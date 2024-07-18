import React, { useEffect, useState } from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import Logo from '../resources/logo_mentorange-14.svg';
import {NavLink} from 'react-router-dom';
import './Navbar.scss';

const Navigation = () => (
    <Container>
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand href="/"><img src={Logo} width="268"/></Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><NavLink exact className="menu" activeClassName="active" to='/' >Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="menu" activeClassName="active" to='/buscar'>Buscar mentor</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/agendamentos" className="menu" activeClassName="active">Meus agendamentos</NavLink></Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link><NavLink to="/login" className="menu2">Login</NavLink></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
)

export default Navigation;
