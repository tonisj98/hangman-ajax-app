/**
 * Fichero encargado de la manipulación del DOM
 * 
 * Necesitamos:
 * 
 * 1. Función para mostrar en el navegador * o la letra en cada una de las posiciones; en función de las letras que hayamos adivinado.
 * 2. Función para actualizar el número de intentos restantes
 * 3. Función para actualizar el DOM para mostrar un mensaje de enhorabuena o en caso de no adivinar la palabra un mensaje de derrota.
 */

/**
 * Actualiza la información del DOM con un mensaje de victoria o derrota
 * 
 * @param {*} game_won Boleano que nos indica si hemos ganado el juego. 
 */
function showEndOfGameMessage(game_won) {
    let guesses = document.querySelector('#guesses')

    guesses.textContent = game_won? "VICTORIA!" : "DERROTA!"
}

function render(sentence, lettersTested) {
    let guessingBox = document.querySelector('#puzzle')
    guessingBox.innerHTML = ""
    let span
    for (letter of sentence) {
        span = document.createElement('span')
        span.textContent = (letter == " ")? " " : updateLetterStatus(letter, lettersTested)
        guessingBox.appendChild(span)
    }
}


/**
 * Comprueba si currentLetter se encuentra en el array de letras lettersTested
 * 
 * @param {*} currentLetter String que representa una letra
 * @param {*} lettersTested Array de strings que contiene las letras ya probadas
 */
function updateLetterStatus(currentLetter, lettersTested) {
    let letterGuessed = lettersTested.includes(currentLetter)
    if (letterGuessed) {
        return currentLetter
    }

    return '*'
}

/**
 * Actualiza el elemeneto del DOM con el número de intentos del parámetro 'numGuessing'
 */
function updateGuessingText(numGuessing) {
    let guesses = document.querySelector('#guesses')

    guesses.textContent = "Intentos: " + numGuessing
}
