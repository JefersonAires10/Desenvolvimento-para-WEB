import {useState, useEffect} from 'react';

const Cidades = () => {

    const [contadorFortaleza, setContadorFortaleza] = useState(0);
    const [contadorQuixada, setContadorQuixada] = useState(0);
    const [contadorSobral, setContadorSobral] = useState(0);
    const [contadorMombaca, setContadorMombaca] = useState(0);

    const [cidadeMaisVotada, setCidadeMaisVotada] = useState("");
    const [cidadeMenosVotada, setCidadeMenosVotada] = useState("");



    useEffect (
        () => {
            let cidades = [contadorFortaleza, contadorQuixada, contadorSobral, contadorMombaca];
            let nomes = ["Fortaleza", "Quixadá", "Sobral", "Mombaça"];
            let maior = cidades[0]
            let menor = cidades[0]

            for (let i = 0; i < cidades.length; i++) {
                if (cidades[i] > maior) {
                    maior = cidades[i];
                }
                if (cidades[i] < menor) {
                    menor = cidades[i];
                }
            }
            setCidadeMaisVotada("");
            setCidadeMenosVotada(""); 
            for (let i = 0; i < cidades.length; i++) {
                if (cidades[i] === maior) {
                    setCidadeMaisVotada((anterior) => anterior + " " + nomes[i]);
                }
                if (cidades[i] === menor) {
                    setCidadeMenosVotada((anterior) => anterior + " " + nomes[i]);
                }
            }
        }
        , [contadorFortaleza, contadorQuixada, contadorSobral, contadorMombaca]
    )

    const incrementarFortaleza = () => {
        setContadorFortaleza(contadorFortaleza + 1);
    }
    const incrementarQuixada = () => {
        setContadorQuixada(contadorQuixada + 1);
    }
    const incrementarSobral = () => {
        setContadorSobral(contadorSobral + 1);
    }
    const incrementarMombaca = () => {
        setContadorMombaca(contadorMombaca + 1);
    }

    return (
        <div>
            <h1>Votação de Cidade</h1>
            <h2>Fortaleza: {contadorFortaleza} </h2>
            <h2>Quixadá: {contadorQuixada} </h2>
            <h2>Sobral: {contadorSobral} </h2>
            <h2>Mombaça: {contadorMombaca} </h2>
            <button
                style={{ backgroundColor: 'green', color: 'white', fontSize: '20px', cursor: 'pointer' }}
                onClick={incrementarFortaleza}
            > Votar Fortaleza
            </button>

            <button
                style={{ backgroundColor: 'green', color: 'white', fontSize: '20px', cursor: 'pointer' }}
                onClick={incrementarQuixada}
            > Votar Quixadá
            </button>

            <button
                style={{ backgroundColor: 'green', color: 'white', fontSize: '20px', cursor: 'pointer' }}
                onClick={incrementarSobral}
            > Votar Iguatu
            </button>

            <button
                style={{ backgroundColor: 'green', color: 'white', fontSize: '20px', cursor: 'pointer' }}
                onClick={incrementarMombaca}
            > Votar Mombaça
            </button>
            <h2>A cidade mais votada é: {cidadeMaisVotada + ""} </h2>
            <h2>A cidade menos votada é: {cidadeMenosVotada + ""} </h2>

        </div>
    )
}

export default Cidades