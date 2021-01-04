/**
 * En este fichero vamos a guardar el estado y la configuración de nuestra app
 * 
 * Necesitamos:
 * 
 * 1. Variable para almacenar la película recuperada
 * 2. Variable para configurar el número de intentos disponibles hasta adivinar la palabra
 * 3. Variable que nos cuente el número de intentos ya efectuados
 * 4. Variable que nos almacene las letras ya probadas.
 * 
 * Definir funciones para actualizar cada una de las variables, o para cambiar el estado
 */

let intentos = 5
let lettersTested = []

function setNumGuessins(num) {
   // intentos = num
}

function tryLetter(letter) {
    // si fallamos la letra y nivel de dificultad es 1, restar 1 al numero de intentos
    // Si fallamos la etra y nivel dificultad >=2; restar 2 intentos
}

function newLetterTested(letter) {
    // comrpobar si ya hemos añadido esta letra
   // lettersTested.push(letter)
}