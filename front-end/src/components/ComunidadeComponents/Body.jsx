import React from "react";
import "./Body.css"

function Body() {
    return (
        <React.Fragment>
            <div className="container">
                <div>
                    <p className="sub-titulo">Parabéns, agora você faz </p>
                    <p className="sub-titulo-two">parte da nossa comunidade exclusiva!</p>
                </div>
                <div className="paragrafo">
                    <p>Que tal completar seu perfil agora?</p>
                </div>
                <div className="Skills">
                    <h2 className="edit-skills">Minhas skills são:</h2>
                </div>
                <div className="input">
                    <input></input>
                </div>
                <div className="skills-container">
                    <p>Skill 1</p>
                    <p>Skill 2</p>
                    <p>Skill 3</p>
                    <p>Skill 4</p>
                </div>
                <div className="Skills">
                    <h2 className="edit-skills">Tudo pronto, quero começar!</h2>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Body;