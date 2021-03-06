// ? 'FOR' nos permite iterar (recorrer) un array

for (let i = 0; i < 10; i++) {
    console.log(i);
}

object = ['aaa', 'bbb']

for (const o of object) {
    console.log(o)
}

for (const o in object) {
    console.log(o)
}

// * 'forEach' => es usado para poder iterar elementos sin retornar nada
// * en forEach no existe el return

const alumnos = ['Juan', ' Pepe', 'Luis', ' Maria', 'Carla', 'Ale']
// La forma en la cual usamos forEach es la siguiente
// el forEach es una funcion de los arrays

// Es esta fumcion forEach tenemos 2 cosas,
//1: El value => Es el valor que extraemos en cada interacion
//2: El index => Es la posicion del elemento
alumnos.forEach((value, index) => {
    console.log('index => ', index);
    console.log('value => ', value);
});

// !Nota: esta forma de recorrer un arreglo es moderna
// ! Tener en cuenta que el 'return' no es posible en el forEach

const cars = [
    {
        modelo: "Nissan GTR",
        price: 10000,
    },
    {
        modelo: "Mercedez GLA",
        price: 20000,
    },
    {
        modelo: "BMW M4",
        price: 30000,
    },
];

// array.forEach((value, index) => {
//     console.log(value);
// });

cars.forEach((car, index) => {
    console.log(car);
    console.log(car.modelo)
});
