// 25. Se le solicita al usuario que ingrese las notas del parcial de los alumnos de una
// comisión. Se desconoce la cantidad de alumnos. Realice el algoritmo para informar:
//  El porcentaje de alumnos aprobados (nota igual o superior a 4).
//  El porcentaje de alumnos desaprobados (nota inferior a 4).
//  El promedio de las notas.
// Tenga en cuenta que solamente las notas pueden ir del 1 al 10.

let nota = parseInt(prompt("Ingrese la nota del alumno (1-10)"));
let aprobados = 0;
let desaprobados = 0;
let suma = 0;
let promedio;
let porcentajeAprobados;
let porcentajeDesaprobados;

while (nota >= 1 && nota <= 10) {
    if (nota >= 4) {
        aprobados++;
    } else {
        desaprobados++;
    }
    suma += nota;
    nota = parseInt(prompt("Ingrese la nota del alumno (1-10)"));
}

if (aprobados > 0) {
    porcentajeAprobados = aprobados * 100 / (aprobados + desaprobados);
} else {
    porcentajeAprobados = 0;
}

if (desaprobados > 0) {
    porcentajeDesaprobados = desaprobados * 100 / (aprobados + desaprobados);
} else {
    porcentajeDesaprobados = 0;
}

promedio = suma / (aprobados + desaprobados);

alert("El porcentaje de alumnos aprobados es: " + porcentajeAprobados + "%");

alert("El porcentaje de alumnos desaprobados es: " + porcentajeDesaprobados + "%");

alert("El promedio de las notas es: " + promedio);