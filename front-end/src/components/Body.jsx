import React from "react";
import "./Body.css"
function Body() {
    return (
        <React.Fragment>
            <section className="body-container">
                <div className="content-container">
                    <div className="titulo">
                        <h1>Supere seus desafios</h1>
                        <h2>rapidamente com <h4 className="destaque">MENTORIAS: </h4></h2>
                        <div className="sub-titulo-container">
                            <h3 className="sub-titulo">Tenha o acompanhamento dos melhores</h3>
                            <h3 className="sub-titulo">mentores de forma individual ou em grupo.</h3>                        </div>
                    </div>
                    <div>
                        <img className="imagem" src="https://gestaodavirada.com/wp-content/uploads/2018/06/entenda-o-que-e-uma-mentoria-financeira-e-quando-e-indicado-faze-la-810x608.jpg" alt="persona" />

                    </div>
                </div>
                <div>
                    <button className="botao">COMEÇAR AGORA</button>
                </div>
            </section>

        </React.Fragment>
    )
}
export default Body;