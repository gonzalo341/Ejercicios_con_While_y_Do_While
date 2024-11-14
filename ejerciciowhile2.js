//suma de numeros usando while
const prompt = require("prompt-sync")()

let numerosi = parseInt(prompt("¿Cuantos numeros va a ingresar? "))
let suma = 0;

while (numerosi > 0) {
    const numeros = parseInt(prompt("ingrese un numero "))
    suma = numeros + suma
    numerosi--
}

console.log("la suma de todos los numeros es " + suma)