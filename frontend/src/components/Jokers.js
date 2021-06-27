import React from "react";

//ter a quantidade de jokers guardados num array que se vai buscar ao ficheiro, e no return
// for (let i = 0; i < numeroDeJokers; i++) {
//      adiciona-se um botao à div
//}

//

class Jokers extends React.Component {

    constructor(props) {
        super(props)


        this.state = {
            quantosJokers: [true, true, true, true, true, true, true]
        }
    }

    usouJoker() {

        
        this.setState((state) => ({
            quantosJokers: state.quantosJokers.slice(0, -1)
        }))
    }

    render() {
        return (
            <div>
                {
                    this.state.quantosJokers.map(() => (
                        <button><img className="mickey" src="mickey.png" alt=""
                            onMouseOver={(e) => (e.currentTarget.src = "mickeypiscante.png")}
                            onMouseOut={(e) => (e.currentTarget.src = "mickey.png")}
                            onClick={() => this.usouJoker()}/>
                        </button>)
                    )
                        
                }
            </div>
        )
    }
}


<button><img className="mickey" src="mickey.png" alt=""
    onMouseOver={(e) => (e.currentTarget.src = "mickeypiscante.png")}
    onMouseOut={(e) => (e.currentTarget.src = "mickey.png")} />
</button>



// const handleMouseOver = ((e) => (e.currentTarget.src = "mickeypiscante.png"))

export default Jokers