import {useState} from 'react';

const Cidades = () => {

    const [cidades, setCidades] = useState(
        
        [
            {nome: "Fortaleza", votos: 0},
            {nome: "Quixada", votos: 0},
            {nome: "Sobral", votos: 0},
            {nome: "Mombaca", votos: 0}
        ]

    )
    
    //const [flag, setFlag] = useState(false)
    
    //const votarNaCidade = (nome) => {
        // MANEIRA 1
        /*for (let i = 0; i < cidades.length; i++) {
            if (cidades[i].nome === nome) {
                cidades[i].votos = cidades[i].votos + 1;
            }
        }*/
        // MANEIRA 2
        /*const index = cidades.findIndex (
            (item) => item.nome === nome
        )
        cidades[index].votos = cidades[index].votos + 1;
        
        setFlag((prev)=> !prev)  
    }
    */
   // MANEIRA 3
    const votarNaCidadeV2 = (nome) => {
        const newCidades = cidades.map (
            (item) => {
                if (item.nome === nome) 
                    item.votos += 1;
         
                return item
            }
        )
        setCidades(newCidades)
    }

    return (
        <div  >
            <h1>Votação de Cidade</h1>
            <h2>{cidades[0].nome}: {cidades[0].votos} </h2>
            <h2> {cidades[1].nome}: {cidades[1].votos} </h2>
            <h2> {cidades[2].nome}: {cidades[2].votos} </h2>
            <h2> {cidades[3].nome}: {cidades[3].votos} </h2>
            

            <table>
                <tbody>
                    <tr> 
                        <td> 
                            <button onClick={ () => votarNaCidadeV2("Fortaleza")}> Votar em Fortaleza </button>
                        </td>
                        <td>
                            <button onClick={ () => votarNaCidadeV2("Quixada")}> Votar em Quixadá </button>
                        </td>
                        <td>
                            <button onClick={ () => votarNaCidadeV2("Sobral")}> Votar em Sobral </button>
                        </td>
                        <td>
                            <button onClick={ () => votarNaCidadeV2("Mombaca")}> Votar em Mombaça </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Cidades