const PlacaMae = ({nome, preco}) => {
    return (
        <div>
            <h1>Nome da placa mãe é: {nome}</h1>
            <h1>Preco da placa mãe é: {preco}</h1>
        </div>
    )
}

const Memoria = ({nome, preco}) => {
    return (
        <div>
            <h1>Nome da memória é: {nome}</h1>
            <h1>Preco da memória: {preco}</h1>
        </div>
    )
}

const PlacaDeVideo = ({nome, preco}) => {
    return (
        <div>
            <h1>Nome da placa de vídeo é: {nome}</h1>
            <h1>Preco da placa de vídeo é: {preco}</h1>
        </div>
    )
}

export {PlacaMae, Memoria, PlacaDeVideo}