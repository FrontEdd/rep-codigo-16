
// ?    En JQuery para poder obtener un elemento se usa $('element')
// ?    Ej.: h1 => $('h1') | div => $('div') | id='container' => $('#container')

//* Esta funcion con '$("function")' se ejecuta cuando la pag inicia
// $(function () {
//     // Al acceder de esta forma a los elementos nos da acceso a las funciones de
//     $("h1").css("color", "red");
//     $("h1").css({
//         "background-color": "#ddd",
//         "font-size": "100px",
//         "font-family": "Helvetica",
//     })
// });

const inputTask = $("#input-task");
const btnTask = $("#btn-task");
const sectionTask = $("#section-task");

btnTask.click(function () {
    const text = inputTask.val();
    inputTask.val("");
    inputTask.focus();

    // inputTask.fadeOut(2000);

    
    // sectionTask.append(`<h1>${text}</h1>`);
    // Tambien se puede crear un elemento <div>
    $("<div>", {
        html:
        `
        <input type='checkbox'><span>${text}</span>
        <button>✏️</button>
        <button>👁</button>
        <button>❌</button>
        `
    })
    .appendTo(sectionTask)
    .hide()
    .fadeIn(1000);

    $("div").hover(
        function () {
            $(this).css("background-color", "#cdcdcd");
    },
        function () {
            $(this).css("background-color","#fff")
        }
    )
})