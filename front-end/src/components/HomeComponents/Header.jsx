import React from "react";
import "./Header.css"
import logo from "../../assets/mentorangelog.png"

function Header() {
    return (
        <>
            <header className="cabecalho-home">
                <div className="logo-container-home">
                    <img src={logo} alt="logo" />
                </div>
                <nav className="navbar-container-home">
                    <a href="#">HOME</a>
                    <a href="#"><p>SOBRE A </p>MENTORAGE</a>
                </nav>
                <button className="button-login-home">Login</button>
            </header>
        </>
    )
}
export default Header;