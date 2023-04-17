import { useContext } from "react"
import Pokemon from "./MeuContexto"

const Neto = () => {
    const numero = useContext (Pokemon)
    return (
        <div>
            <h1>Componente Neto</h1>
            <img 
                src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+2}.png`}
                style={{width: '200px'}}
            />
        </div>
    )
}

export default Neto