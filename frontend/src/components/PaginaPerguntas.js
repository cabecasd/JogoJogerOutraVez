import React from "react";
import PerguntaERespostas from "./PerguntasERespostas"
import "../css/pPergunta.css"
import Jokers from "./Jokers";

class PaginaPerguntas extends React.Component {
    render() {
        return (
            <div className="geral" style={{backgroundImage: "url(background.jpg)"}}>
                <section className="jokers">
                    <Jokers handler={this.disableOption} />
                </section>
                <section className="perguntas">
                    <PerguntaERespostas apresentaNr2 = {this.props.apresentaNr} handler2={this.props.handler}/>
                </section>
                <section className="jogadores">
                    <h2>Jogadores:</h2>
                    <h3>Rafinha sempre Alegre</h3>
                    <h3>Ines e os Coelhos</h3>
                </section>
            </div>
        )
    }
}

// export function obtemPergunta() {
//     fetch()
// }

export default PaginaPerguntas

