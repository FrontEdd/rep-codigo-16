// ? En este archivo estan los métodos para poder:

/* *
 * Obtener => GET
 * Crear => POST
 * Actualizar => PUT
 * Eliminar => DELETE
 */

import { urlMovies, mockAPIUrl } from "./config.js";

/* *
*Función que retorna las 100 peliculas
*/

export const getMovies = async () => {
    try {
        const response = await fetch(urlMovies); //Retorna un promesa
        /* * 'data' tiene 2 keys
            * total: 100
            * entries: []
        */
        //Destructuramos 'data', donde 'data = await response.json()'
        const { entries } = await response.json();
        return entries;
    } catch (error) {
        return error;
    }
};

/* *
 * Esta función va a crear una pelicula en mockApi
 * recordemos que como es para crear usaremos POST
 */

export const storeMovieMockApi = async (movie) => {
    try {
        const object = {
            title: movie.title,
            programType: movie.programType,
            releaseYear: movie.releaseYear,
            imageUrl: movie.images["Poster Art"].url,
        };
        const response = await fetch(mockAPIUrl, {
            method: "POST",
            body: JSON.stringify(object),
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response
    } catch (error) {
        return error
    }
}

