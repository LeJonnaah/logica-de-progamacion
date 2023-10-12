// 23. Se le solicita al usuario que ingrese los extremos de un rango numérico y una
// cantidad de valores desconocidos.
// Realice un programa para informar si cada número está dentro del rango.
// Si está en rango, informar si el número es par.
// Si no está dentro del rango, informar si es número es impar.
// Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números
// enteros.

let extremo1 = prompt("Ingrese el primer extremo");
let extremo2 = prompt("Ingrese el segundo extremo");
let cantidad = prompt("Ingrese la cantidad de numeros");

for (let i = 0; i < cantidad; i++) {
    let numero = prompt("Ingrese un numero");
    if (numero >= extremo1 && numero <= extremo2) {
        console.log("El numero esta dentro del rango");
        if (numero % 2 == 0) {
            console.log("El numero es par");
        } else {
            console.log("El numero es impar");
        }
    }
}