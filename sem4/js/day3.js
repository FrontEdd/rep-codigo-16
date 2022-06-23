document.write("<h1>Día 3 Switch</h1>");

// ** SWITCH: es una condición en base a una expresión de caso
// ** y cada 'case' se va a evaluar la condición de la variable
// ** sin embargo no hace falta volver a llamar a la variable

// Todo - problema: en base a la nota escribir un mensaje

// const nota = Number(prompt("Ingrese una nota"));
// let msj = "";

// if (nota <= 13) {
//     msj = "Alumno debe mejorar"
// } else if (nota >= 14) {
//     msj = "Alumno promedio"
// } else if (nota > 18) {
//     msj = "Alumno sobresaliente"
// } else if (nota === 20) {
//     msj = "Alumno genio"
// }

// console.log(alert(msj));

let angulo = 20;
document.write("<p>" + angulo + "</p>");

let mensaje = "<p>INEXS.</p>";

if (angulo === 0) {
  mensaje = "<p>Nulo.</p>";
} else if (angulo < 90) {
  mensaje = "<p>Águdo.</p>";
} else if (angulo === 90) {
  mensaje = "<p>Recto.</p>";
} else if (angulo < 180) {
  mensaje = "<p>Obtuso.</p>";
} else if (angulo === 180) {
  mensaje = "<p>Llano.</p>";
} else if (angulo < 360) {
  mensaje = "<p>Concavo.</p>";
} else if (angulo === 360) {
  mensaje = "<p>Completo.</p>";
}

document.write(mensaje);

// Todo - problema: edades con SWITCH

let edad = 18;
switch (edad) {
    case 0:
        console.log('Recien nacido');
        break;
    case 18:
        console.log('Mayor de edad');
        break;
    case 20:
        console.log('Entro a base 2');
        break;
    case 65:
        console.log('Entro a 3era base');
        break;
    default:
        console.log('No esta dentro del rango');
}

document.write("<h1>Día 3 Arrays</h1>");

const nombres = ["Pepe", "Juan", "María", "Luisa", "Carlos", "Lucas"];
console.log(nombres)
console.log(nombres[3]);

const datos = [1, true, false, -2, "hola mundo"];
console.log("datos", datos.length);

datos.push("Agregando un dato");
console.log("datos con push", datos);
console.log("Agregando un array dentro de un array");
datos.push(["Pepe", "Juan", "Maria"]);
console.log(datos);

const datosPrueba = [
  1,
  true,
  false,
  -2,
  "Hola mundo",
  "Agregando un dato",
  ["Pepe", "Juan", [1, 2, 4, 5, [-1, -2, -4]], "Maria"],
];

console.log(datosPrueba[3]);
console.log(datosPrueba[6][0]);
console.log(datosPrueba[6][2][3]);
console.log(datosPrueba[6][2][4][2]);

console.log(datosPrueba[6][2].length); // 5

console.log(datosPrueba[6][datosPrueba[6].length - 3]);
console.log(
  datosPrueba[6][datosPrueba[6].length - 2][datosPrueba[6][2].length - 1]
);

// '.pop()' es una funcion para poder eliminar el ULTIMO elemento de un array
const laptops = ['hp', 'macbook', 'asus', 'lenovo'];
console.log(laptops);
console.log("elemento eliminado:", laptops.pop())

// Supongamos tener una lista de alumnos
const alumnos = ['Luis', 'Juan', 'Maria', 'Luciana', 'Lucas'];
const alumnoEliminado = alumnos.pop();
console.log("El alumno " + alumnoEliminado + " fue eliminado");
console.log("Nueva lista de alumnos: ", alumnos);

// unshift: Esta funcion agrega un elemento a un array pero en la
// primera posicion
alumnos.unshift("Daniel");
console.log("Unshift", alumnos);
//ojo hemos agregado a Daniel
// shift: Esta funcion elminar al primer elemento de un array
console.log("Shift", alumnos.shift());
