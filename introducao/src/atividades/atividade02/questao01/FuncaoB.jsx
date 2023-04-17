import MinhaCor from "./MeuContexto"
import { useContext } from "react"

const FuncaoB = () => {
    const cores = useContext(MinhaCor)
    return (
        <div> 
            <h1 style={{backgroundColor: cores.bkgB }}> FuncaoB</h1>
        </div>
    )
}
export default FuncaoB