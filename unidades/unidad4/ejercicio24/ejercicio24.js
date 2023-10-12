// 24. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice
// un programa para calcular e informar cada operación deseada entre los dos números.
// Ese proceso se puede repetir mientras lo desee el usuario. Todos los valores deben ser
// validados.

let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese otro número"));
let operador = prompt("Ingrese un operador (+, -, *, /)");
let resultado;

while (operador != "+" && operador != "-" && operador != "*" && operador != "/") {
    operador = prompt("Ingrese un operador válido (+, -, *, /)");
}

switch (operador) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    default:
        resultado = num1 / num2;
        break;
}

alert("El resultado es: " + resultado);