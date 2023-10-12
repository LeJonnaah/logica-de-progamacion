// 27. Como resultado de una encuesta se recogen los siguientes datos: sexo (H: Hombre,
//     M: Mujer), edad (en años) y altura (en centímetros). Realice un programa para calcular
//     e informar:
//     a. El porcentaje de mujeres mayores a 25 años.
//      b. El porcentaje de hombres menores de 18 años.
//      c. El promedio de edad de las mujeres.
//      d. El promedio de altura de los hombres.
//      e. La menor edad ingresada.
//      f. La mayor altura ingresada

let sexo = prompt("Ingrese el sexo (H: Hombre, M: Mujer)");
let edad = parseInt(prompt("Ingrese la edad"));
let altura = parseInt(prompt("Ingrese la altura (en centímetros)"));

let porcentajeMujeresMayores = 0;
let porcentajeHombresMenores = 0;
let promedioEdadMujeres = 0;
let promedioAlturaHombres = 0;
let menorEdad = edad;
let mayorAltura = altura;

let contadorMujeres = 0;
let contadorHombres = 0;
let sumatoriaEdadMujeres = 0;
let sumatoriaAlturaHombres = 0;

while (sexo != "H" && sexo != "M") {
    sexo = prompt("Ingrese un sexo válido (H: Hombre, M: Mujer)");
}

while (edad <= 0) {
    edad = parseInt(prompt("Ingrese una edad válida"));
}

while (altura <= 0) {
    altura = parseInt(prompt("Ingrese una altura válida"));
}

while (sexo != "X") {
    if (sexo == "M") {
        contadorMujeres++;
        sumatoriaEdadMujeres += edad;

        if (edad > 25) {
            porcentajeMujeresMayores++;
        }
    } else {
        contadorHombres++;
        sumatoriaAlturaHombres += altura;

        if (edad < 18) {
            porcentajeHombresMenores++;
        }
    }

    if (edad < menorEdad) {
        menorEdad = edad;
    }

    if (altura > mayorAltura) {
        mayorAltura = altura;
    }

    sexo = prompt("Ingrese el sexo (H: Hombre, M: Mujer)");
    edad = parseInt(prompt("Ingrese la edad"));
    altura = parseInt(prompt("Ingrese la altura (en centímetros)"));
}

if (contadorMujeres != 0) {
    promedioEdadMujeres = sumatoriaEdadMujeres / contadorMujeres;
} else {
    promedioEdadMujeres = "No se ingresaron mujeres";
}

if (contadorHombres != 0) {
    promedioAlturaHombres = sumatoriaAlturaHombres / contadorHombres;
} else {
    promedioAlturaHombres = "No se ingresaron hombres";
}

alert("El porcentaje de mujeres mayores a 25 años es: " + (porcentajeMujeresMayores * 100) / contadorMujeres + "%");

alert("El porcentaje de hombres menores de 18 años es: " + (porcentajeHombresMenores * 100) / contadorHombres + "%");

alert("El promedio de edad de las mujeres es: " + promedioEdadMujeres);

alert("El promedio de altura de los hombres es: " + promedioAlturaHombres);

alert("La menor edad ingresada es: " + menorEdad);

alert("La mayor altura ingresada es: " + mayorAltura);