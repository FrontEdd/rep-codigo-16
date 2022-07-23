// Recordar colocar en 'package.json' debajo de "main" el objeto "type": "module",
// Vamos a crear una ruta
// Ruta: es el lugar donde vamos a visualizar nuestro resultado
// *
// *

import express, { request, response } from "express";

const app = express();

// Vamos a agregar lo siguiente para que Node pueda entender lo que el cliente envía
app.use(express.json());

// Vamos a crear un arreglo que contenga las tareas
const todoListArray = [];

// Esto crea la ruta en la raiz y luego vamos a recibir 2
// * request => Es la info que vamos a recibir de quien haga la petición
// * response => Es lo que se responde al usuario
app.get("/", (request, response) => {
    // Vamos a responder cuando el usuario entre a la raiz esta respuesta sea un JSON
    /* * 
     * total: 100 
     * tasks: []
    */
    response.json({
        total: todoListArray.length,
        tasks: todoListArray,
    })
});

app.post("/create-task", (request, response) => {
    // 'request.body' es la data que el cliente envíe
    const task = request.body;
    task.created_at = new Date();
    task.id = todoListArray.length + 1;

    todoListArray.push(task)

    response.json({
        tarea: task,
    });
});

app.put("/update-task/:id", (request, response) => {
// Viene en el params
// ! Todo lo que viene de params es un 'string'
    const id = request.params.id
    // Lo que el cliente envie estara en el body
    const data = request.body
    // ? 1- Buscar la tarea:
    const taskIndex = todoListArray.findIndex(
        (todoTask) => todoTask.id === Number(id)
    )

    todoListArray[taskIndex] = { 
        ...todoListArray[taskIndex],
        ...data 
    }

    return response.json({
        tarea: todoListArray[taskIndex],
    })
});

// Para poder visualizar desde el navegador vamos a habilitar un puerto
app.listen(6001, () =>
  console.log("El servidor inicio en el puerto http://localhost:6001")
);