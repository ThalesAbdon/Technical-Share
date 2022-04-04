import React from "react";
import "./Footer.css"


function Footer() {
    return (
        <React.Fragment>
            <section className="Container">
                <div className="Footer-intro">
                    <h4 className="Footer-frase-one">Technical Share</h4>
                    <h4 className="Footer-frase-two">
                        Transformação cultural,
                    </h4>
                    <h4 className="Footer-frase-three">
                        digital e cognitiva
                    </h4>
                </div>
                <div className="Footer-endereco">
                    <p className="Footer-title">Onde estamos</p>
                    <div className="Footer-onde-estamos">
                        <span className="Footer-onde-estamos-city">São Paulo-</span>
                        <span className="Footer-onde-estamos-matriz">MATRIZ</span>
                        <span className="Footer-endereco">
                            <h4 className="adress">Rua bela cintra, 986 - 2 andar</h4>
                            <h4 className="adress">Consolação, São Paulo - SP</h4>
                        </span>
                        <div className="Footer-onde-estamos">
                            <span className="Footer-onde-estamos-city">Santos-</span>
                            <span className="Footer-onde-estamos-filial">FILIAL</span>
                            <span className="Footer-endereco">
                                <h4 className="adress">Praça dos expedicionários, 19</h4>
                                <h4 className="adress">2 andar</h4>
                                <h4 className="adress">Gonzaga, Santos - SP</h4>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="Footer-social-rights">
                    <div className="Footer-social">
                        <a className=" Footer-social-icon" href="https://www.facebook.com/grupo.fcamara/" aria-label="Facebook" Title="Facebook FCamara">Facebook</a>
                    </div>


                </div>
            </section>
        </React.Fragment>
    )
}
export default Footer