// ? "forEach"
// ? Recordar que el return no existe en el 'forEach'
// ? La alternativa que tendremos al 'forEach' se llama map

const products = [
    {
    name: "Laptop HP",
    price: 1300,
    brand: "HP",
    },
    {
    name: "Laptop Gamer",
    price: 2100,
    brand: "Lenovo",
    },
    {
    name: "Laptop Super Poderosa",
    price: 5300,
    brand: "Alien Ware",
    },
    {
    name: "Laptop/Tablet",
    price: 2400,
    brand: "ASUS",
    },
];

const prodIterforEach = products.forEach((product) => {
// !Recordar: product es cada elemento de nuestro [array]
// console.log(product.name);
});

// ? "map"
// queremos agregar un nuevo campo al array de objetos
// ese campo se llamara descuente que sera el precio - 100 soles

// En este caso estamos calculado el campo discount y lo estamos
// guardando en productsIterMap

// ? Los valores que esta capturando nuestro map los esta guardando en
// ? la varable productsIterMap y esto sera un arreglo de los
// ? resultados

const productsIterMap = products.map((product) => {
  // 1200
  // 2000
  // 5200
  // 2300
    return product.price - 100;
})
// ? Resument: Siempre el map retorna un array de elementos

console.log('forEach: ', prodIterforEach)
console.log('map: ', productsIterMap)

// !Cuando decimos que forEach no retorna nada quiere decir que no se
// !puede guardar dentro de una variable


const edades = [23, 21, 34, 45, 28, 30];

// * Esta es un arrow function 'inline'
const edadesAlCuadrado = edades.map((edad) => Math.pow(edad, 2));
console.log('cuadrados map: ', edadesAlCuadrado);

let e = [];
for (const edad of edades) {
    e.push(Math.pow(edad, 2))
}
console.log('cuadrados for-of: ',e);

// ? "filter"
// ? Es el hermano de 'map', porque 'filter' también retorna un array de 
// ? elementos, sin embargo 'filter' sirve para poder crear filtro en base a una condición

// * Queremos sólo los productos que tengan precio > 100
// * Si el elemento es >100 entonces guardarlo en la variable

const clothes = [
    {
      brand: "Mango",
      type: "Shirt",
      price: 200,
      store: "Falabella",
      rating: 4.3,
      features: {
        color: "green",
        size: "small",
      },
    },
    {
      brand: "Zara",
      type: "Pants",
      price: 300,
      store: "Zara",
      rating: 3.9,
      features: {
        color: "black",
        size: 32,
      },
    },
    {
      brand: "Tommy",
      type: "T-shirt",
      price: 120,
      store: "Tommy",
      rating: 4.3,
      features: {
        color: "blue",
        size: "M",
      },
    },
  ];

// Filtro de precio
const filtro = clothes.filter((clothe) => clothe.price > 150);
console.log('filtro1: ',filtro);

// Filtro de 2 condiciones
// Pedimos que el precio sea >150 y rating >4
const filtro2 = clothes.filter(
    (clothe) => clothe.price > 150 && clothe.rating > 4
);
console.log('filtro2: ', filtro2);

// Buscar en el array de objetos las prendas que contengan la palabra 'shirt'
// En la condicion clothe.type.includes("shirt")
// quiero que en el string clothe.type busques si "shirt" existe
// un truco para evitarnos el tema del las mayusculas o minusculas
// es convertir el texo a mayusulas o minusculas
// T-shirt => t-shirt
// pants => pants
// Shirt => shirt

// includes basicamente sirve para buscar algo en un texto
// ejempo
const frase = "HolameLlamocarlos";
// Basicamente include recibe un paramtro string y lo busca en el texto
// si lo encuentro retorna true si no lo hace retorana false
// => HolameLlamocarlos => holamellamocarlos
console.log(frase.toLowerCase().includes("llamo"));

const filtroShirt = clothes.filter((clothe) =>
    clothe.type.toLocaleLowerCase().includes("shirt")
);

console.log('filtroShirt: ', filtroShirt);
