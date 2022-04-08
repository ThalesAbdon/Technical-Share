import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo from '../resources/logo_mentorange-14.svg';


const Nav = styled.nav`

  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items:center;
  .logo {
    padding: 18px 0;
    margin-right:20px;
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

        <Nav>
            <div className="logo">
                <a href="/"><img src={Logo} width="260"/></a>
            </div>
            <Burger />
        </Nav>
  )
}

export default Navbar