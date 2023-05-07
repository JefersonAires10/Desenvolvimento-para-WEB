import { useEffect } from "react"

const minhaPromise = new Promise (
    (resolve,reject) => {
        setTimeout(
            ()=>{
                const NUM = Math.floor(Math.random()*10)
                if (NUM === 1) {
                    reject({numero:NUM,msg:"ERRO DE CONEXAO!"})
                }
                if (NUM === 2) {
                    reject({numero:NUM,msg:"ERRO DE DADOS INVALIDOS!"})
                }
                else {
                    resolve({numero:NUM,msg: 
                        [
                            {id:1,nome:'Jeferson',ira:8.0},
                            {id:2,nome:'Deivid',ira:8.0},
                            {id:3,nome:'Kaynan',ira:8.0}
                        ]
                    })
                }
            }
        )
    }
)

function meuGet(url) {
    return minhaPromise
}

const Questao01 = () => {
    useEffect (
        () => {
            meuGet("http://...")
            .then(
                (response) => console.log(response)
            )
            .catch(
                (error) => console.log(error.msg)
            )
        }
        ,
        []
    )

    return (
        <div>
            <center><h1>Testando promessa!</h1></center>
        </div>
    )

}

export default Questao01
