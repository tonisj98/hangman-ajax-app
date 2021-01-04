/**
 * Punto de entrada de la aplicación.
 */

/**
 * 1. Llamar a la API y obtener una película
 * 2. Setear todas las variables de estado (intentos, palabra a adivinar, etc)
 * 3. Hacer un primer "pintado" del DOM
 * 4. Añadir listener para que cada vez que el usuario pulse una tecla, se genere un evento y se actualice el estado de toda nuestra aplicación
 */

getMovieFromJSON() 

document.addEventListener('keydown', checkNewLetter);

function checkNewLetter(event) {
    // Actualizar estado...
    // Repintar el DOM...
    console.log(event.key)
    newLetterTested(event.key)
}

function startGame() {
    // Tenemos que setear nuestra aplicación con el estado inicial
    // 1. Setear el número de intentos a 5 (estado y en el DOM)
    // 2. "Vaciar" el array de letras probadas
    // 3. Render inicial
    setNumGuessins(5)
    resetLettersTested()
    render(getMovieToGuess().title, getLettersTested())
}
