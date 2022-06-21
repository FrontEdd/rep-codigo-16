let num1 = 10;
let num2 = 20;


// Operaciones básicas de matemáticas:

console.log('Suma: ' ,num1 + num2)
console.log('Resta: ' ,num2 - num1)
console.log('Multiplicación: ' ,num1 * num2)
console.log('División: ' ,num2 / num1)

let num3 = "23";
console.log(Number(num3))

let num4 = "Luis";
console.log(Number(num4))

// Transformar un string en number:
let num5 = "33.5";

// Form 1
console.log('Forma 1: ', Number(num5))

// Form 2
console.log('Forma 2: ', parseInt(num5))

// Form 3
console.log('Forma 3: ', +num5)

// Form 4
console.log('Forma 4: ', parseFloat(num5))

console.log('Raiz cuadrada de 4')
console.log(Math.sqrt(4))

console.log('La potencia de un número')
console.log(Math.pow(6, 3))
console.log(Math.pow(4, 2))

// const catetoA = prompt('Ingrese el valor de A')
// const catetoB = prompt('Ingrese el valor de B')

// const ope = Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));
// console.log('La hipotenusa es: ', ope)


// Problema 1:
// Hacer un algoritmo que halle el area de un rectángulo a = base x altura

let base = prompt('Ingrese la base del rectángulo a calcular')
let alt = prompt('Ingrese la altura del rectángulo a calcular')
console.log("El área del rectángulo a calcular es: ", base * alt)

// Problema 2:
// Hallar el área de un círculo
// a = Pi x R al cuadrado
// a = Math.PI * Math.pow(R, 2)

const pi = 3.1416
const radio = Number(prompt('Ingrese el valor del radio de un círculo a calcular:'))

let areaCirculo = Math.pow(radio, 2) * pi;
console.log('El área del círculo es: ', areaCirculo)