import React from "react"
import "./Header.css"

function Header() {
    return (
        <React.Fragment>
            <header className="cabecalho">
                <h2 className="titulo-cabecalho">Technical Share</h2>
                <nav className="nav-bar">
                    <a href="a">Home</a>
                    <a href="a">Sobre a TechShare</a>
                    <a href="a">Login</a>
                </nav>
            </header>

        </React.Fragment>
    )
}
export default Header;