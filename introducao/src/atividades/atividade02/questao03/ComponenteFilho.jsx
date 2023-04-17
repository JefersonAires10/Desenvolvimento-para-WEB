import Neto from "./ComponenteNeto"
import { useContext } from "react"
import Pokemon from "./MeuContexto"

const Filho = () => {
    const numero = useContext (Pokemon)
    return (
        <div>
            <h1>Componente Filho</h1>
            <img 
                src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+1}.png`}
                style={{width: '200px'}}
            />
            <Neto />
        </div>
    )
}

export default Filho