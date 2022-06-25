// ** Una FUNCTION es un bloque de código que realiza una acción

// La sintáxis de una <function> se divide en 3:

function nombreDeLaFuncion() {
    const alumnos = [
        'Pepe',
        'Juan',
        'Maria',
        'Luisa',
        'Lex',
        'Lucas',
        'Klark'
    ]
    for (const a of alumnos) {
        console.log(a)
    }
}
// Llamamos a la función:
nombreDeLaFuncion()

// Una función que retorne un valor
// ** Existen 2 clases de funciones
// ** Funciones IMPURAS => que no retorna un valor
// ** Funciones PURAS => que retorna un valor

function cuboDeUnNumero() {
    return Math.pow(10, 3);
}

const result = cuboDeUnNumero();
console.log('Resultado: ', result)

// Una funcionalidad es poder enviar valores a las funciones
// Tambien se pueden enviar 'parametros' y podemos enviar n params

function potenciaDeUnNumero(numero, potencia) {
    return Math.pow(numero, potencia);
}

const ejem1 = potenciaDeUnNumero(4, 3);
const ejem2 = potenciaDeUnNumero(6, 2);

console.log('Ejemplo1: ', ejem1)
console.log('Ejemplo2: ', ejem2)

// Ejercicio: 
// Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla.

function suma(x, y) {
    return x + y;
}

const sumatoria = suma(8, 9)
console.log(sumatoria)
document.write('La sumatoria de 8 y 9 es: ' + sumatoria)