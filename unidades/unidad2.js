// 9. Se le solicita al usuario que ingrese su nombre y luego su apellido. Realice un programa que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido del usuario.

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

console.log("Bienvenido " + nombre + " " + apellido);


// 10. Se le solicita al usuario que ingrese el diámetro de un círculo. Realice un programa
// para calcular e informar el perímetro y el área del círculo. Se considerará para este
// ejercicio que el valor de PI será 3.1416.

let diametro = prompt("Ingrese el diametro del circulo");

let radio = diametro / 2;

let perimetro = 2 * PI * radio;

let area = PI * (radio * radio);

console.log(perimetro);


// 11. Se le solicita al usuario que ingrese 4 números. Realice un programa para calcular e informar la suma y el promedio.

let numero1 = prompt("Ingrese el primer numero");
let numero2 = prompt("Ingrese el segundo numero");
let numero3 = prompt("Ingrese el tercer numero");
let numero4 = prompt("Ingrese el cuarto numero");

let suma = numero1 + numero2 + numero3 + numero4;

let promedio = suma / 4;

console.log(suma);

console.log(promedio);


// 12. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que
// ingrese el valor de la hora y la cantidad de horas trabajadas en el mes. Realice un
// programa para calcular e informar el sueldo mensual del empleado.

let valorHora = prompt("Ingrese el valor de la hora");
let horasTrabajadas = prompt("Ingrese la cantidad de horas trabajadas");

let sueldo = valorHora * horasTrabajadas;

console.log(sueldo);


// 13. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que
// ingrese el valor de la hora, la cantidad de horas trabajadas en el mes y los años de
// antigüedad en la empresa. Realice un programa para calcular e informar el sueldo
// mensual del empleado, teniendo en cuenta que se le asigna un bono mensual igual al
// 15% del sueldo por año de antigüedad.

let valorHora2 = prompt("Ingrese el valor de la hora");
let horasTrabajadas2 = prompt("Ingrese la cantidad de horas trabajadas");
let antiguedad = prompt("Ingrese la cantidad de años de antiguedad");

let sueldo2 = valorHora2 * horasTrabajadas2;

let bono = sueldo2 * (antiguedad * 0.15);

let sueldoTotal = sueldo2 + bono;

console.log(sueldoTotal);


// 14. Realizar un sistema para el cálculo de sueldo de una empresa de seguros. Se le
// solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes, los
// años de antigüedad, la cantidad de seguros vendidos y el valor del seguro más caro
// vendido. Realice un programa para calcular e informar el sueldo mensual del
// empleado, teniendo en cuenta que se le asigna un bono igual al 50% del seguro más
// caro vendido, un bono igual al 25% del sueldo por la cantidad de seguros vendidos y
// otro bono igual al 15% del sueldo por año de antigüedad. Una vez obtenido

let valorHora3 = prompt("Ingrese el valor de la hora");
let horasTrabajadas3 = prompt("Ingrese la cantidad de horas trabajadas");
let antiguedad2 = prompt("Ingrese la cantidad de años de antiguedad");

let sueldo3 = valorHora3 * horasTrabajadas3;

let bono2 = sueldo3 * (antiguedad2 * 0.15);

let sueldoTotal2 = sueldo3 + bono2;

console.log(sueldoTotal2);