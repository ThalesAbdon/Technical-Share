import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

document.body.style = "background: #2A2962";

const Ul = styled.ul`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-weight: 600;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  li {
        padding: 18px 10px;
    }
  .menu {
        background-color: transparent;
        color: #FFF;
        width:208px;
        text-transform: uppercase;
        text-align:center;
        height:48px;
        border-bottom:2px solid transparent;
        display:flex;
        align-items:center;
        justify-content:center;
        margin: 0px 10px;
    } 

    .menu:hover, .a:active{
        background-color: #FE5517;
        transition: .5s;
        border-bottom:2px solid #fff;
    }

    a {
        text-decoration: none;
    }

    .menu2 {
        background-color: #FE5517;
        color: #FFF;
        width:168px;
        text-transform: uppercase;
        border-radius:24px;
        text-align:center;
        margin-left:7rem;
        height:48px;
        display:flex;
        align-items:center;
        justify-content:center;
    }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 500px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
    console.log('someone happens here?')
  return (
    <Ul open={open}>
        
      <li><a href="/buscar" className="menu">Buscar mentoria</a></li>
      <li><a href="/" className="menu">Oferecer mentoria</a></li>
      <li><a href="/" className="menu">Meus agendamentos</a></li>
      <li><a href="/" className="menu2">Meu perfil</a></li>

      
    </Ul>
  )
}
export default RightNav;