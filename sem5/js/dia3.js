// ? "every" & "some"
// ? Son funciones que nos permiten iterar sobre una colección de elementos
// ? Estas dos funciones no retornan array, lo que retornan son BOOLEAN

// ! true o false

// Nos sirve para poder validar una condición y que aplique a c/u de sus elementos

// Ejemplo:
const edades = [10, 20, 30, 40, 50];
// Esto va a analizar todo el array y tiene que
// verificar que cada elemento cumpla la condicion
const analizandoEdades = edades.every((edad) => edad > 20);
//! Nota importante para que every retorne true cada element debe
//! cumplir la condiucion
console.log('every-edades', analizandoEdades);

const analizando2 = edades.every((edad) => edad !== "");
console.log('every-edades2', analizando2);

const alumnos = [
  {
    name: "Pepe",
    age: 21,
  },
  {
    name: "Luis",
    age: 18,
  },
  {
    name: "Maria",
    age: 19,
  },
];

// Queremos saber si los alumnos son mayores edad
console.log(
  "every-es-mayor",
  alumnos.every((alumno) => alumno.age >= 18)
);

//? "some"
// Pero el evalua los elementos y si alguno de ellos cumple
// la condicion es true
const precios = [121, 313, 121, 873];

// vamos a evaluar si alguno de ellos es par
console.log(
  "some-precios",
  precios.some((precio) => precio % 2 === 0)
);

//! Nota recuerden que si ni un elemento cumple la condicion 
//! some retorna false