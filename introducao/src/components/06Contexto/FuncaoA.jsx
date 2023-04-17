import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import MinhaCor from "./MeuContexto"

const FuncaoA = () => {
    const cor = {cor: "black", }
    return (
        <MinhaCor.Provider value = {cor}>
            <div> 
                <h1 style = {{ backgroundColor : cor.cor , color: "white"}}> Função A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </MinhaCor.Provider>   
    )
}

export default FuncaoA