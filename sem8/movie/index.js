const url = "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json";
let movies = null;

fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
console.log("movies: ", movies);
// console.log(peticion);

// Recordar que fetch retorna una promesa, esta tiene 2 escenarios:
//  ?resolve (resolver) => ocurre cuando la peticiónn esta ok
//  !reejct (rechazar) => es cuando algo fallo

// *"then()" es un callback, es una función que se ejecuta cuando algo termina

// Ejemplo con el A""PI de pokemon
const urlPokemon = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

fetch(urlPokemon)
  .then((response) => response.json())
  .then((data) => console.log(data));


