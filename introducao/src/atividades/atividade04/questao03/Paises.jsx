import { useEffect,  useContext , useState } from "react";
import  MeuContexto from "./MeuContexto";

const Paises = () => {

    const [populacao, setPopulacao] = useState("")
    const [nome,setNome] = useState("");
    const pais = useContext(MeuContexto)
    
    useEffect (
        () => {
            fetch (`https://restcountries.com/v3.1/name/${pais}`)
            .then (
                (response) => response.json()
            )
            .then (
                (json) => {
                    setPopulacao(json[0].population)
                    setNome(json[0].name.common)
                }
            )
        }
        , 
        [pais]
    )    


    return (
        <div>
            <center>
                <h1>Nome: {nome}</h1>
                <h1>População: {populacao}</h1>
            </center>
        </div>
    )
}

export default Paises