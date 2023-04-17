import Filho from "./Filho"

const Pai = () => {

    const receberMesada = (mensagem ) => {
        alert ("Mesada recebida: " + mensagem)
    }

    return (
        <div>
            <h1>Componente Pai</h1>
            <Filho mesada = {600.00} enviarMensagem = {receberMesada} />
        </div>
    )
}

export default Pai