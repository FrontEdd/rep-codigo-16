// EVENTOS

// Un evento es una acción que el usuario o el navegador pueden activar
// 'onClick' => Se activa cuando el usuario pulsa con el mouse y clickea un elemento
// para activar los eventos podemos hacer desde JS o desde el HTML

//  onChange
//  onKeyup
//  onKeydown
//  onSubmit
//  onMouseHover
//  onFocus
//  onBlur
//  onMouseOut
//  others

const btnTest = document.querySelector("#btn-test");
// evento onclick con arrow function
btnTest.onclick = () => {
    console.log("Es un click");
  };
  
// evento onclick con function
// btnTest.onclick = function () {
//   console.log("Es un click");
// };

const variableH1 = document.querySelector("#h1-test");
variableH1.onclick = () => {
    console.log("Click desde el h1");
    variableH1.innerText = "Cambiando el texto";
};

// Creando OBJETOS desde formulario
// Vamos a captura los datos de nuestro formulario y guardarlo
// en un array de objetos
  const users = [];
  const form = document.querySelector("#form-store-user");

// vamos agregar el evento onsubmit

//! NOTA el evento onsubmit tiene una prepiedad
//! la cual nos da un parametro que esta implicito
//! este parametro contiene la informacion del evento
//! y se suele event o e

  form.onsubmit = (e) => {
    // * NOTA Un formulario al tener el evento submit va a recargar la pagina
    //? Para evitar que el evento onsubmit recargue la pagina podemos usar el
    //? evento.preventDefault() esta funcion bloquea esa accion de recargar la pagina

    e.preventDefault();
    //!Nota La informacion de los inputs siempre estara en el target

    console.log(e.target);

    // * Existe la clase FormData
    const formData = new FormData(e.target);

    // vamos a crar un objeto user
    const user = {};

    for (const [key, value] of formData.entries()) {
        // en el for vamos a agregar los campos a user
        user[key] = value;
        console.log(user[key])
    }
    users.push(user);
    console.log(users)
  }