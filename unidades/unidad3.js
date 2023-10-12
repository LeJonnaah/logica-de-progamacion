// 15. Se le solicita al usuario que ingrese un número. Realice un programa para informar si el número es cero, par o impar.

let numero = prompt("Ingrese un numero");

if (numero == 0) {
    console.log("El numero es cero");
} else if (numero % 2 == 0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}

// 16. Se le solicita al usuario que ingrese un número. Realice un programa para informar si el número es múltiplo de 3.

let numero2 = prompt("Ingrese un numero");

if (numero2 % 3 == 0) {
    console.log("El numero es multiplo de 3");
} else {
    console.log("El numero no es multiplo de 3");
}


// 17. Se le solicita al usuario que ingrese una letra. Realice el algoritmo para informar si el valor ingresado es una vocal.

let letra = prompt("Ingrese una letra");

if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    console.log("La letra es una vocal");
} else {
    console.log("La letra no es una vocal");
}


// 18. Se le solicita al usuario que ingrese los extremos de un rango numérico y un
// número. Realice un programa para informar si el número está dentro del rango.
// Si está en rango, informar si el número es par.
// Si no está dentro del rango, informar si es número es impar.
// Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números
// enteros.

let extremo1 = prompt("Ingrese el primer extremo");
let extremo2 = prompt("Ingrese el segundo extremo");
let numero3 = prompt("Ingrese un numero");

if (numero3 >= extremo1 && numero3 <= extremo2) {
    console.log("El numero esta dentro del rango");
    if (numero3 % 2 == 0) {
        console.log("El numero es par");
    } else {
        console.log("El numero es impar");
    }
}

// // 19. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice
// un programa para calcular e informar la operación solicitada entre ambos números.

let numero4 = prompt("Ingrese el primer numero");
let numero5 = prompt("Ingrese el segundo numero");
let operador = prompt("Ingrese el operador");

if (operador == "+") {
    console.log(numero4 + numero5);
} else if (operador == "-") {
    console.log(numero4 - numero5);
} else if (operador == "*") {
    console.log(numero4 * numero5);
} else if (operador == "/") {
    console.log(numero4 / numero5);
} else {
    console.log("El operador ingresado no es valido");
}

// // 20. Se le solicita al usuario que ingrese los tres lados de un triángulo. Realice el
// algoritmo para informar si el triángulo es equilátero, isósceles o escaleno.

let lado1 = prompt("Ingrese el primer lado");
let lado2 = prompt("Ingrese el segundo lado");
let lado3 = prompt("Ingrese el tercer lado");

if (lado1 == lado2 && lado2 == lado3) {
    console.log("El triangulo es equilatero");
} else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
    console.log("El triangulo es isosceles");
} else {
    console.log("El triangulo es escaleno");
}

// 21. Realizar un sistema para el cálculo de sueldo de una empresa. Se le solicita al
// usuario que ingrese la categoría a la que pertenece que define el sueldo básico
// mensual (categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000) y las
// horas extras. Se sabe que:
// a. Si es de la categoría 1 y trabajó más de 20 horas extra, suma un bono de u$s 500
// más.
// b. Si es de la categoría 3 y trabajó más de 30 horas extra, suma un bono de u$s 1000
// más.
// Realice un programa para calcular e informar el sueldo mensual del empleado,
// indicando si su sueldo supera o no los u$s 4000.

let categoria = prompt("Ingrese la categoria");
let horasExtras = prompt("Ingrese las horas extras");

let sueldoBasico;

if (categoria == 1) {
    sueldoBasico = 2000;
    if (horasExtras > 20) {
        sueldoBasico = sueldoBasico + 500;
    }
} else if (categoria == 2) {
    sueldoBasico = 3000;
} else if (categoria == 3) {
    sueldoBasico = 4000;
    if (horasExtras > 30) {
        sueldoBasico = sueldoBasico + 1000;
    }
} else {
    console.log("La categoria ingresada no es valida");
}

if (sueldoBasico > 4000) {
    console.log("El sueldo supera los 4000");
} else {
    console.log("El sueldo no supera los 4000");
}