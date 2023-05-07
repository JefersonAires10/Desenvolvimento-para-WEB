import {  useState } from "react";
import MeuContexto from "./MeuContexto";
import Paises from "./Paises";

const TelaPrincipal = () => {

    const [pais,setPais] = useState("brazil")

    return (
        <div>
            <center>
                <h1>Informações sobre o País</h1>
                <MeuContexto.Provider value = {pais}>
                    <Paises />
                </MeuContexto.Provider>
                <input
                    style={{width: "200px", backgroundColor: "lightblue", fontFamily: "Courier New"}}
                    type = "text"
                    value = {pais} 
                    onChange = {(e) => setPais(e.target.value)} 
                />
            </center>
        </div>
    )
}

export default TelaPrincipal