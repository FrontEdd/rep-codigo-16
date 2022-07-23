// Recordar colocar en 'package.json' debajo de "main" el objeto "type": "module",
// Vamos a crear una ruta
// Ruta: es el lugar donde vamos a visualizar nuestro resultado
// *
// *

import express from "express";

const app = express();


// Esto crea la ruta en la raiz y luego vamos a recibir 2
// * request => Es la info que vamos a recibir de quien haga la petición
// * response => Es lo que se responde al usuario
app.get("/", (request, response) => {
    // Vamos a responder cuando el usuario entre a la raiz esta respuesta sea un JSON
    response.json({
        message: "Hola mundo",
    })
});

// Para poder visualizar desde el navegador vamos a habilitar un puerto
// 
app.listen(6001, () =>
  console.log("El servidor inicio en el puerto http://localhost:6001")
);