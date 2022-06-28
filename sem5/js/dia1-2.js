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