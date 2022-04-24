// Given a temperature in celcius output C (celcius), F (fahenheit), K(kelvin)

function tempConverter(temp){
    const fahrenheit = (temp * 9/5) + 32
    const kelvin = (temp+ 274.15)
    const tempObject = {
        celcius : temp,
        fahrenheit : fahrenheit,
        kelvin : kelvin
    }
    return tempObject
}

console.log(tempConverter(45).fahrenheit)
console.log(tempConverter(12).kelvin)
console.log(tempConverter(10).celcius)
