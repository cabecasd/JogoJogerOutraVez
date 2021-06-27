import React from "react"
import PaginaInicial from "./PaginaInicial"
import PaginaPerguntas from "./PaginaPerguntas"
import PaginaFinal from "./PaginaFinal"

class AppJoker extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pagina: 0,
            questionNr: 1

        }

        this.questionIncrement = this.questionIncrement.bind(this)
    }

    //a segunda parte do ternario nao funciona
    //incrementa 2 em vez de 1

    questionIncrement() {
        console.log(this.state.questionNr)
        this.setState((state) => ({
            questionNr: state.questionNr + 1
        }))
    }
    render() {
        return (
            <div>
                {
                    this.state.pagina === 0 ? <PaginaInicial onStart={() => this.setState({ pagina: 1 })} /> :
                    this.state.questionNr <= 25 ? <PaginaPerguntas apresentaNr = {this.state.questionNr} handler={this.questionIncrement}/> : <PaginaFinal /> 
                }

            </div>
        )
    }
}

export default AppJoker