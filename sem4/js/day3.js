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