import { useState, useEffect } from 'react';

const Contador = () => {
    
    //let contador = 0;
    const [contador, setContador] = useState(0);
    const [par, setPar] = useState(true);

    useEffect (
        () => {
            if (contador % 2 === 0) {
                setPar(true);
            }
            else {
                setPar(false);
            }
        }
        ,
        [contador]
    )

    const incrementar = () => {
        setContador(contador + 1);
        //console.log(contador);
    }
    
    return (
        <>
            <h1>Contador: {contador} </h1>
            <h1>É Par: {par + "" } </h1>
            <button
                style={{ backgroundColor: 'green', color: 'white', fontSize: '20px', cursor: 'pointer' }}
                onClick = {incrementar}
            >Incrementar
            </button>
        </>
    )
}

export default Contador