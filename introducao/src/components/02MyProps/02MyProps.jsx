// V0
/*const MyProps = (props) => {
    return (
        <div>
            <h1>Meu nome é: {props.nome}</h1>
            <h1>Meu curso é: {props.curso}</h1>
        </div>
    )
}*/
//V1
/*const MyProps = (props) => {
    let nome = props.nome;
    let curso = props.curso;
    return (
        <div>
            <h1>Meu nome é: {nome}</h1>
            <h1>Meu curso é: {curso}</h1>
        </div>
    )
}*/
//V2
/*const MyProps = (props) => {
    let {nome, curso} = props;
    return (
        <div>
            <h1>Meu nome é: {nome}</h1>
            <h1>Meu curso é: {curso}</h1>
        </div>
    )
}*/

//V3

const MyProps = ({nome,curso}) => {
    return (
        <div>
            <h1>Meu nome é: {nome}</h1>
            <h1>Meu curso é: {curso}</h1>
        </div>
    )
}

export default MyProps;