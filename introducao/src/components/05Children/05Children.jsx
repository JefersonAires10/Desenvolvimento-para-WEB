import {Children, cloneElement} from "react"

/*const Supermercado = ({children, nome}) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {
                Children.map (
                    children,
                    (filho)=> {
                        return (
                            <div style={{backgroundColor:"red"}}>
                            <h1>Teste</h1>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}*/
//v2
const Supermercado = ({children, nome}) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {
                Children.map (
                    children,
                    (filho)=> {
                        return cloneElement(filho, {supermercado:nome})
                    }
                )
            }
        </div>
    )
}

const Legume = ({nome}) => {
    return (
        <div>
            <h1>Legume {nome}</h1>
        </div>
    )
}

const Bebida = ({nome}) => {
    return (
        <div>
            <h1>Bebida {nome}</h1>
        </div>
    )
}

export default Supermercado