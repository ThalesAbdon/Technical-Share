import React from "react";
import './Header.scss';
import {Container} from 'react-bootstrap';


const Header = () => (
    <section className="header d-flex align-items-center px-3">
        <Container>
            <h1>Encontre seu mentor</h1>
        </Container>
    </section>
);

export default Header;