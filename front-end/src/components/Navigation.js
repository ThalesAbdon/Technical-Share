import React from "react";
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Navigation.scss';
import logo from '../resources/logo_mentorange-14.svg'

const Header = () => (
    <Navbar collapseOnSelect expand="lg" className="color-primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Technical Share</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end">
            <Nav.Link><Link to="/buscar">Encontrar mentor</Link></Nav.Link>
            <Nav.Link><Link to="/teste">Sobre</Link></Nav.Link>
            <Nav.Link><Link to="/login">Login</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default Header;
