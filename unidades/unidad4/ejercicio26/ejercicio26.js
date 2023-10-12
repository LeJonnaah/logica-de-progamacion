// 26. Se le solicita al usuario que ingrese una cantidad desconocida de números. Realice
// un programa para calcular e informar:
// a. La sumatoria de los valores ingresados.
// b. El menor valor ingresado.
// c. El mayor valor ingresado.

let num = parseInt(prompt("Ingrese un número"));

let sumatoria = 0;
let menor = num;
let mayor = num;

while (num != 0) {
    sumatoria += num;

    if (num < menor) {
        menor = num;
    }

    if (num > mayor) {
        mayor = num;
    }

    num = parseInt(prompt("Ingrese un número"));
}

alert("La sumatoria de los valores ingresados es: " + sumatoria);

alert("El menor valor ingresado es: " + menor);

alert("El mayor valor ingresado es: " + mayor);