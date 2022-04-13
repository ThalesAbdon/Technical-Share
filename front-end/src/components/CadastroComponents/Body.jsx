import React from "react";
import "./Body.css";

function Body() {
    return (
        <React.Fragment>
            <section className="section-cadastro-container">
                <div className="section-cadastro-titulo-container">
                    <h1>Olá,&nbsp;</h1><h1>#sanguelaranja</h1>
                </div>
                <div className="section-cadastro-subtitulo-container">
                    <h5>Cadastre-se para entrar nessa vitamina de conhecimento e ajuda mútua</h5>
                </div>
                <div className="section-cadastro-input-container">
                    <div>
                        <p>Email corporativo</p>
                        <input className="section-cadastro-input" />
                    </div>
                    <div>
                        <p>ID ou Matrícula</p>
                        <input className="section-cadastro-input" />
                        <br />
                        <span>Não sabe ou não possui ID/ Matrícula?</span>
                    </div>
                    <div>
                        <p>Senha</p>
                        <input className="section-cadastro-input" />
                    </div>
                </div>
                <button className="section-cadastro-button">Criar conta</button>
            </section>
        </React.Fragment>
    )
}
export default Body;