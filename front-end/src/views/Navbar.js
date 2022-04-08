import React from 'react';
import styled from 'styled-components';
import Burger from '../components/Burger';
import Logo from '../resources/logo_mentorange-14.svg';
import {Container} from 'react-bootstrap';


const Nav = styled.nav`

  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items:center;
  .logo {
    padding: 18px 0;
  }
  ul{
      margin-top: 22px;
  }
  
  @media (max-width: 768px) {
    .logo {
        padding: 15px 0;
        margin:0 auto;
    }
`

const Navbar = () => {
  return (
    <Container>
      <Nav>
          <div className="logo">
              <a href="/"><img src={Logo} width="260"/></a>
          </div>
          <Burger />
      </Nav>
    </Container>
  )
}

export default Navbar;
