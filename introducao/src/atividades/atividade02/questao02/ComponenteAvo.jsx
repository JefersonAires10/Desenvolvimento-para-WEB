import Filho from "./ComponenteFilho"
import Pokemon from "./MeuContexto"

const Avo = () => {
    const numero = 1
    return (
        <div>
            <Pokemon.Provider value={numero}>
                <h1>Componente Avô </h1>
                <img 
                    src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                    style={{width: '200px'}}
                />
                <Filho />
            </Pokemon.Provider>
        </div>
    )
}

export default Avo