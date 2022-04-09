import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import Logo from '../resources/logo_mentorange-14.svg';
import {NavLink} from 'react-router-dom';
import './Navbar.scss';


function home () {

}
const Navigation = () => (
    <Container>
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand href="#home"><img src={Logo} width="268"/></Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><NavLink exact className="menu" activeClassName="active" to='/buscar' >Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="menu" activeClassName="active" to='/teste'>Sobre a mentorange</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/" className="menu" activeClassName="active">Cadastro</NavLink></Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link><NavLink to="/login" className="menu2">Login</NavLink></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
)

export default Navigation;
