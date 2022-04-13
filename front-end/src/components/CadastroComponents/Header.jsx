import React from "react";
import "./Header.css"
import logo from "../../assets/mentorangelog.png"

function Header() {
    return (
        <>
            <header className="cabecalho-cadastro">
                <div className="logo-container-cadastro">
                    <img src={logo} alt="logo" />
                </div>
                <nav className="navbar-container-cadastro">
                    <a href="#">HOME</a>
                    <a href="#"><p>SOBRE A </p>MENTORAGE</a>
                    <a href="#">CADASTRO</a>
                </nav>
                <button className="button-login-cadastro">Login</button>
            </header>
        </>
    )
}
export default Header;