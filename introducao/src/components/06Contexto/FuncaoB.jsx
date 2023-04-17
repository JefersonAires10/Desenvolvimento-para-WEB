import MinhaCor from "./MeuContexto"

const FuncaoB = () => {
    return (
        <div> 
            <MinhaCor.Consumer>
                {
                        ({cor}) => {
                        return (
                            <h1 style={{backgroundColor:cor , color: "white"}}> Função B</h1>
                        )
                    }
                }
            </MinhaCor.Consumer>
        </div>
    )
}

export default FuncaoB