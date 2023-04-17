const Filho = ({altura, peso}) => {
    
    const calcularIMC = (altura, peso) => peso / (altura * altura)
    
    const renderizarMensagem = (imc) => {
        if (imc > 25) {
            return <h3>Acima do Peso</h3>
        }
        else if (imc < 18) {
            return <h3>Peso Ideal</h3>
        }
        else {
            return <h3>Peso Ideal</h3>
        }
    }

    return (
        <div>
            <h1> o IMC é: {calcularIMC(altura, peso)} </h1>
            <h1>{renderizarMensagem(calcularIMC(altura, peso))}</h1>
        </div> 
    )

}

export default Filho