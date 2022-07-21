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
}

