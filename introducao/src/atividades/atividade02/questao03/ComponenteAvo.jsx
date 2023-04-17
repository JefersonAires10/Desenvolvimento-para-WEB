import { useState } from "react"
import Filho from "./ComponenteFilho"
import Pokemon from "./MeuContexto"

const Avo = () => {
    
    //let numero = 1
    const [numero, setNumero] = useState(1)

    const evoluirPokemon = () => {
        setNumero(numero + 1)
        alert("Evoluiu Novamente!")
    }

    return (
        <div>
            <Pokemon.Provider value={numero}>
                <h1>Componente Avô </h1>
                <img 
                    src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                    style={{width: '200px'}}
                />
                <Filho />
                <center><button
                    style={{backgroundColor: 'green', color: 'white', fontSize: '20px'}}
                    onClick={() => evoluirPokemon()}
                >Evoluir Pokemons
                </button> </center>
            </Pokemon.Provider>
        </div>
    )
}

export default Avo