/**
 * Punto de entrada de la aplicación.
 */

/**
 * 1. Llamar a la API y obtener una película
 * 2. Setear todas las variables de estado (intentos, palabra a adivinar, etc)
 * 3. Hacer un primer "pintado" del DOM
 * 4. Añadir listener para que cada vez que el usuario pulse una tecla, se genere un evento y se actualice el estado de toda nuestra aplicación
 */

startGame() 

document.querySelector('#reset').addEventListener('click', startGame)

function startGame(){
    getMovieFromJSON(MOVIE_NUM_WORDS)
}

function checkNewLetter(event) {
    // Actualizar estado...
    // Repintar el DOM...
    newLetterTested(event.key)
}

function setupGame() {
    // Tenemos que setear nuestra aplicación con el estado inicial
    // 1. Setear el número de intentos a 5 (estado y en el DOM)
    // 2. "Vaciar" el array de letras probadas
    // 3. Render inicial
    setNumGuessins(INITIAL_GUESSINGS)
    resetLettersTested()
    render(getMovieToGuess().title, getLettersTested())
    resetDOM()
    document.addEventListener('keydown', checkNewLetter);

}
