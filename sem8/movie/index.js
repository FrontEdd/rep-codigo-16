const containerMovies = document.querySelector("#container-movies");

function renderCards(movies) {
  containerMovies.innerHTML = "";
  movies.forEach((movie) => {

    containerMovies.innerHTML += `
        <div class="col">
          <div class="card my-3" >
            <div class="into-photo">
              <span class="badge text-bg-${
                movie.programType === "series" ? "success" : "warning"
                  }">${movie.programType}</span>
              <img
                src="${movie.images["Poster Art"].url}"
                class="card-img-top"
                onerror="this.onerror=null;this.src='https://i.quotev.com/img/q/u/15/12/25/78a31e5f80-imag.jpg';"
                alt=""
              />
            </div>
            <div class="card-body">
              <div class="card-title">${movie.title}</div>
              <p class="card-text">
               ${movie.description}
              </p>
            </div>
          </div>
        </div>
    `;
  });    
}


const url = "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json";

fetch(url)
    .then((response) => response.json())
    .then((data) => renderCards(data.entries));

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


