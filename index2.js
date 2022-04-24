// Given a temperature in celcius output C (celcius), F (fahenheit), K(kelvin)

const convertCelciusTo = (tempCel) => {
    const kelvin = (tempCel + 274.15)
    const fahrenheit = (tempCel - 32 * 5/9)

    const objectTemperature = {
        myCelcius: tempCel,
        myFahrenheit: fahrenheit,
        myKelkin: kelvin,
    }

    return objectTemperature
}
console.log(convertCelciusTo(1).myCelcius,'Degre celcius is equal to', convertCelciusTo(1).myFahrenheit.toFixed(2), 'degre fahrenheit', 'and equal to', convertCelciusTo(1).myKelkin, 'degre kelvin')


