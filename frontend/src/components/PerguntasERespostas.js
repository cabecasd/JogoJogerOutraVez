import React from "react";

class PerguntaERespostas extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            pergunta: "",
            options: [],
            rightOption: "",
        }

    } // fim do constructor




    componentDidMount() {
        this.generateQuestion()
    }



    checkIfRight(valor) {

        if (this.state.rightOption === valor) {
            return true
        }

    }


    handleClick(valor) {

        const certoouerrado = this.checkIfRight(valor)
        console.log(certoouerrado)
        this.generateQuestion()
        this.props.handler2()
    }

    generateQuestion() {
        const perguntas = [
            {
                pergunta: "p1 resposta certa a", options: [
                    { "key": "a", "text": "Jack" },
                    { "key": "b", "text": "Mushu" },
                    { "key": "c", "text": "Liu" },
                    { "key": "d", "text": "Lee" }
                ], rightOne: "a"
            },
            {
                pergunta: "p2 resposta certa c", options: [
                    { "key": "a", "text": "Boing" },
                    { "key": "b", "text": "Foing" },
                    { "key": "c", "text": "Loing" },
                    { "key": "d", "text": "Doing" }
                ], rightOne: "c"
            },
            {
                pergunta: "p3 - resposta certa d", options: [
                    { "key": "a", "text": "Teresa" },
                    { "key": "b", "text": "Sheila" },
                    { "key": "c", "text": "Veronica" },
                    { "key": "d", "text": "Rute" }
                ], rightOne: "d"
            },
            
        ]

        const pAleatoria = Math.floor(Math.random() * 3)

        let pergunta = perguntas[pAleatoria].pergunta
        let respostas = perguntas[pAleatoria].options
        let certa = perguntas[pAleatoria].rightOne

        this.setState((state) => {
            return { pergunta: pergunta, options: respostas, rightOption: certa }
        })
    }
    

    render() {
        return (
            <div>

                <section>
                    <p>{this.state.pergunta}</p>
                    {
                        this.state.options.map(o => (
                            <button key={o.key} onClick={() => (this.handleClick(o.key))}>{o.text}</button>
                        ))
                    }
                    <p>{this.props.apresentaNr2} / 25</p>
                </section>

            </div>
        )
    }
}

export default PerguntaERespostas