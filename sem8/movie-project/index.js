// ? Este archivo contiene la lógica del DOM

import { getMovies } from "./service/index.js";

const btnGetMovies = document.querySelector("#btn-get-movies");
const containerMovies = document.querySelector("#container-movies")

btnGetMovies.onclick = async function () {
  const movies = await getMovies();
  containerMovies.innerHTML = ""; //Se actualiza la pagina desde cero
  
  movies.sort(() => 0.5 - Math.random()).forEach(async (movie) => {
    // Dentro del forEach no se hereda el async por ender hay que hacer que el forEach se async
    const imageUrl = movie.images["Poster Art"].url;

    const response = await fetch(imageUrl)
    // Sepamos que si una petición falla el 'response.ok' sera 'false'
    // si no sera 'response.ok' sera 'true'
    if (response.ok) {
        // Si la petición de la img esta 'ok' renderizamos la pelicula
        renderMovie(movie);
    }
    console.log(response);
  })
};

function renderMovie(movie) {
    containerMovies.innerHTML += `
    <div class="col">
      <div class="card my-3">
        <div class="into-photo">
          <span class="badge text-bg-${
            movie.programType === "series" ? "success" : "warning"
          }">${movie.programType}</span>
          <img
            src="${movie.images["Poster Art"].url}"
            class="card-img-top"
            alt=""
          />
        </div>
        <div class="card-body">
          <div class="card-title">${movie.title}</div>
        </div>
      </div>
    </div>
    `;
};