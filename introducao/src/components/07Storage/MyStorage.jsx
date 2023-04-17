const SaveData = () => {
    
    const saveData = () => {
        const aluno = {nome: "Jeff", curso: "CC", matricula: "540428"}
        sessionStorage.setItem(aluno.matricula, JSON.stringify(aluno))
    }

    return (
        <div>
            <h1>Salvando os dados...</h1>
            <center><button
                style={{ backgroundColor: 'green', color: 'white', fontSize: '20px' }}
                onClick = { saveData }
            > Salvar Dados
            </button> </center>
        </div>
    )
}

const LoadData = () => {

    const loadData = () => {
        const aluno = JSON.parse(localStorage.getItem("540428"))
        return (
            <>
                <h3>Nome: {aluno.nome}</h3>
                <h3>Curso: {aluno.curso}</h3>             
            </>
        )
    }

    return (
        <div>
            <h1>Carregando os dados...</h1>
            <center><button
                style={{backgroundColor: 'green', color: 'white', fontSize: '20px', cursor: 'pointer'}}
                onClick = { loadData }
            > Carregar Dados
            </button> </center>
        </div>
    )
}

export { SaveData , LoadData }