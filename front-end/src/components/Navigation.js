import React from "react";
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './Navigation.scss';
import logo from '../resources/logo.svg'

const Header = () => (
    <Navbar collapseOnSelect expand="lg" className="color-primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Technical Share</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto align-menu">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Sobre a TechShare</Nav.Link>
            <NavDropdown title="Login" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sou aluno</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Sou mentor</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default Header;
