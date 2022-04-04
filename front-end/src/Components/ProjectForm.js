import React from "react"
import '../Pages/CSSPages/cadastro.css'
function ProjectForm(){
    return<form>
        <p className="cadastro-title"> CADASTRO</p>
        <p className="select-senioridade"> Digite seu nome</p>
        <input type="text" placeholder="Insira o seu nome"/>
        <br/>
        <p className="select-senioridade"> Escolha a sua senioridade</p>
        <select className="color-option">
            <option className="color-option">
                estagiário
            </option>
            <option className="color-option">
                Trainee
            </option>
            <option className="color-option">
                Jr
            </option>
            <option className="color-option">
                Pleno
            </option>
            <option className="color-option">
                Senior
            </option>
        </select>
        <br/>
        <p className="select-senioridade"> Escolha sua Função</p>
        <select className="color-option">
            <option className="color-option">
                Desenvolvedor Back-end
            </option>
            <option className="color-option">
            Desenvolvedor Front-end
            </option>
            <option className="color-option">
            Desenvolvedor Fullstack
            </option>
            <option className="color-option">
                UX Designer
            </option>
        </select>
        <br/>

        <button className="enviar-form">Enviar</button>
        <button className="enviar-form">Voltar</button>

    </form>
}

export default ProjectForm