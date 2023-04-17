import { Children } from "react"
import Flash from "./flash.png"

const Hero = ({name}) => {
    return (
        <div>
            <h1>O nome é: {name}</h1>
            <img 
            src = {Flash} 
            alt = "react logo" style = {{ width: '400px'}} />
        </div>
    )
}

const Enemy = ({name}) => {
    return (
        <div>
            <h1>Inimigo: {name}</h1>
            <img src = "https://static.wikia.nocookie.net/dccomics/images/a/af/Reverse-Flash_Arrow_0003.png/revision/latest?cb=20170329154605&path-prefix=pt" 
            alt = "react logo" style = {{ width: '400px'}} />
        </div>
    )
}

const Arena = () => {
    return (
        <div>
            <Hero name = "Flash" />
            <Enemy name = "Flash reverso" />
        </div>
    )
}

const Arena2 = ({name, children}) => {
    return (
        <div>
            <h1>Arena {name}</h1>
            {
                
            }
        </div>
    )
}

const Word = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}
export {Hero, Enemy, Arena, Word}