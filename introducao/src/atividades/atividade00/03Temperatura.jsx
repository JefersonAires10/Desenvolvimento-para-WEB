const Temperatura = () => {

    const celsiusParaFarehnheit = (celsius) => (9 * celsius + 160) / 5

    const fahrenheitParaCelsius = (fahrenheit) => (fahrenheit - 32) * (5 / 9)

    const kelvin = (kelvin) => {
        const celsius = kelvin - 273
        const fahrenheit = (kelvin - 273) * 9 / 5 + 32
        return { celsius, fahrenheit }
    }
    
    const c = 30
    const f = 67
    const k = 0
    return (
        <div>
            <h1>A Temperatura {c} celsius para fahrenheit é: {celsiusParaFarehnheit(c)} </h1>
            <h1>A Temperatura {f} fahrenheit para celsius é: {fahrenheitParaCelsius(f)} </h1>
            <h1>A Temperatura {k} Kelvin em celsius é: {kelvin(k).celsius} </h1>
            <h1>A Temperatura {k} Kelvin em fahrenheit é: {kelvin(k).fahrenheit} </h1>
            
        </div>
    )
}
export default Temperatura