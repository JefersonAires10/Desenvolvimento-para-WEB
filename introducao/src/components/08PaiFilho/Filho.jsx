const Filho = (props) => {
    return (
        <div>
            <h1>Componente Filho</h1>
            <h3>Mesada: {props.mesada} </h3>
            <center>
                <button
                    style={{ backgroundColor: 'green', color: 'white', fontSize: '20px', cursor: 'pointer' }}
                    onClick = {
                        () => {
                            //alert("Obrigado Pai!")
                            props.enviarMensagem("Obrigado Pai!")
                        }
                    }
                > Agradecer Pai!

                </button>
            </center>
        </div>
    )
}

export default Filho