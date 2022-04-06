import React from "react";
import "./Body.css"

function Body() {
    return (
        <React.Fragment>
            <div>
                <h1 className="titulo">Olá, #sanguelaranja</h1>
                <h2 className="sub-titulo">Cadastre-se para entrar nessa vitamina de conhecimento e ajuda mútua.</h2>
            </div>
            <div>
                <p className="email">Email corporativo:</p>
                <div className="inputs">
                    <input className="input"></input>
                </div>
                <p className="id">ID ou matrícula:</p>
                <div className="inputs">
                    <input className="input"></input>
                </div>
                <div className="paragrafo">
                    <p className="paragrafo-one">Não sabe ou não possui ID/matrícula?</p>
                </div>
                <p className="senha">Senha:</p>
                <div className="inputs">
                    <input className="input"></input>
                </div>
                <div className="conta">
                    <h2 className="criar">CRIAR CONTA</h2>
                </div>

            </div>
        </React.Fragment>
    )
}
export default Body;