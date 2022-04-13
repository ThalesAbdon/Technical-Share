import React from "react";
import "./Header.css"



function Header() {
    return (
        <>
            <header className="cabecalho">
                <h2 className="titulo-cabecalho">Technical Share</h2>
                <nav className="nav-bar">
                    <a href="a">Menu</a>
                    <a href="a">Buscar Mentoria</a>
                    <a href="a">Oferecer Mentoria</a>
                    <a href="a">Meus agendamentos</a>
                    <a href="perfil">Meu perfil</a>
                </nav>
            </header>
        </>)
}
export default Header 