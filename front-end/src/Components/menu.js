import React from 'react';
import {Link} from 'react-router-dom';

const Menus = () => (
    <>
    <li><Link to="/buscar" className="menu">Buscar mentoria</Link></li>
    <li><Link to="/oferecer" className="menu">Oferecer mentoria</Link></li>
    <li><Link to="/login" className="menu">Meus agendamentos</Link></li>
    <li><Link to="/buscar" className="menu2">Meu perfil</Link></li>
</>
)

export default Menus;