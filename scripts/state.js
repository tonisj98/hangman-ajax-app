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
const WIN_SOUND = '/sounds/win.wav'
const LOST_SOUND = '/sounds/lost.wav'
const INITIAL_GUESSINGS = 5
const MOVIE_NUM_WORDS = 2

let intentos;
let lettersTested = []
let movieToGuess; //objeto/string de la película adivinar

function setMovieToGuess(movie) {
    movieToGuess = movie
    movieToGuess.title = movieToGuess.title.toLowerCase()
}

function getMovieToGuess() {
    return movieToGuess
}

function getLettersTested() {
    return lettersTested
}

function resetLettersTested() {
    lettersTested = []
    //TODO: borrar del DOM la lista de letras probadas
}

function checkIfGameWin() {
    // Comprueba si ya hemos adivinado todas las letras
    // Recorrer 'movieToGuess' y comprobar si cada una de sus carácteres se encuentra ya adivinado en 'lettersTested'
    let splittedTitle = movieToGuess.title.split('')
    let allGuessed = splittedTitle.every(element=> {
        return lettersTested.includes(element) || element == ' '
    })

    if (allGuessed) {
        document.removeEventListener('keydown', checkNewLetter)
        showEndOfGameMessage(true)
        let audio = new Audio(WIN_SOUND);
        audio.play();
        getMovieFromIMDB(movieToGuess.title, setBackgroundImage)
    }
}

function checkIfGameLost() {
    
    if (intentos==0) {
        // Eliminamos el listener para que no se deje de capturar el evento 'keydown'
        document.removeEventListener('keydown', checkNewLetter)
        showEndOfGameMessage(false)
        let audio = new Audio(LOST_SOUND);
        audio.play();
    }
}

function setNumGuessins(num) {
   intentos = num
   updateGuessingText(num)
}

/**
 * Devuelve true si la letra esta en título de la película o false en caso contrario
 * @param {*} letter 
 */
function tryLetter(letter) {
    return movieToGuess.title.includes(letter)
}

function checkIfLetterHasBeenAlreadyTested(letter){
    return lettersTested.includes(letter)
}

function addCheckedLetter(letter) {
    lettersTested.push(letter)
    addTestedLetter(letter) 
}

function decrementGuessings() {
    let newIntentos = intentos
    newIntentos--
    setNumGuessins(newIntentos)
}

function newLetterTested(letter) {
    // 1. Comrpobar si la 'letter' está en el array de letras probadas. En caso afirmativo, salir y no hace nada más

    // 2. Si la letra NO está en nuestro título de película: decrementar el número de intentos y añadir la letra al conjunto de letras probadas
    //    Si la letra SÍ está en nuestro título de película: actualizar el DOM donde aparecen los ***; y también añadir la letra al conjunto de letras probadas

    if (checkIfLetterHasBeenAlreadyTested(letter)) {
        return
    }

    addCheckedLetter(letter)
    
    if (tryLetter(letter)) {
        // hemos adivinado una letra!
        render(movieToGuess.title, lettersTested)
        checkIfGameWin()
    }
    else {
        decrementGuessings()
        checkIfGameLost()
    }
   
}   
