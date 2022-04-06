import React from "react";
import { useNavigate } from "react-router-dom"
import "./Body.css"
function Body() {

    const navigate = useNavigate();

    function redirecionarCadastro() {
        navigate("/cadastro");
    }

    return (
        <React.Fragment>
            <section className="body-container">
                <div className="content-container">
                    <div className="titulo">
                        <h1 className="title-h1">Olá, #sanguelaranja</h1>
                        <h2>Bem-vindo a sua plataforma exclusiva de <h4 className="destaque">mentorias. </h4></h2>
                        <div className="sub-titulo-container">
                            <h3 className="sub-titulo">Aqui você pode ensinar, aprender, ajudar a tirar dúvidas, trocar experiências, </h3>
                            <h3 className="sub-titulo">conhecer seus colegas #sanguelaranja,</h3>
                            <h3 className="sub-titulo">pedir orientação e fazer agendamentos de mentorias.</h3>
                            <h3 className="sub-titulo">Tudo simples, rápido e on-line.</h3>

                        </div>
                    </div>
                </div>
                <div>
                    <button className="botao" onClick={() => { redirecionarCadastro() }}>COMEÇAR</button>
                </div>
            </section>

        </React.Fragment>
    )
}
export default Body;