// 22. Se le solicita al usuario que ingrese 3 números. Realice un programa para informar
// si el número es múltiplo de 3, múltiplo 5, múltiplo de ambos o múltiplo de ninguno.

let numero = prompt("Ingrese el primer numero");
let numero2 = prompt("Ingrese el segundo numero");
let numero3 = prompt("Ingrese el tercer numero");

if (numero % 3 == 0 && numero % 5 == 0) {
    console.log("El numero es multiplo de 3 y 5");
} else if (numero % 3 == 0) {
    console.log("El numero es multiplo de 3");
} else if (numero % 5 == 0) {
    console.log("El numero es multiplo de 5");
} else {
    console.log("El numero no es multiplo de 3 ni de 5");
}