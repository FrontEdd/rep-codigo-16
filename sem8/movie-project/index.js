// ? Este archivo contiene la lógica del DOM

import { getMovies } from "./service/index.js";

const btnGetMovies = document.querySelector("#btn-get-movies");

btnGetMovies.onclick = async function () {
  const movies = await getMovies();
  console.log("movies", movies);
};