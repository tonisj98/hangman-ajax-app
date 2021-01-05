const CONFIG = {
    WIN_SOUND: '/sounds/win.wav',
    LOST_SOUND: '/sounds/lost.wav',
    INITIAL_GUESSINGS: 5,
    MOVIE_NUM_WORDS: 2
}

const Status = {
    chances: CONFIG.INITIAL_GUESSINGS,
    lettersTested: [],
    movieToGuess: undefined, 
    gameState: 0, // -1, lost, 0 playing, 1 win

    setupGame(movieToGuess) {
        console.log("Movie to guess:", movieToGuess)
        this.chances = CONFIG.INITIAL_GUESSINGS,
        this.lettersTested = []
        this.movieToGuess = movieToGuess
        this.movieToGuess.title = movieToGuess.title.toLowerCase()
        this.gameState = 0
    },

    tryLetter(letter) {
        return this.movieToGuess.title.includes(letter)
    },

    checkIfGameWin() {
        // Comprueba si ya hemos adivinado todas las letras
        // Recorrer 'movieToGuess' y comprobar si cada una de sus carácteres se encuentra ya adivinado en 'lettersTested'
        let splittedTitle = this.movieToGuess.title.split('')
        let allGuessed = splittedTitle.every(element => {
            return this.lettersTested.includes(element) || element == ' '
        })

        if (allGuessed) {
            this.gameState = 1
        }   
    },

    checkIfGameLost() {

        if (this.chances == 0) {
            this.gameState = -1
        }
    },

    newLetterTested(letter) {
        // 1. Comrpobar si la 'letter' está en el array de letras probadas. En caso afirmativo, salir y no hace nada más

        // 2. Si la letra NO está en nuestro título de película: decrementar el número de intentos y añadir la letra al conjunto de letras probadas
        //    Si la letra SÍ está en nuestro título de película: actualizar el DOM donde aparecen los ***; y también añadir la letra al conjunto de letras probadas

        if (this.lettersTested.includes(letter)) {
            return
        }

        this.lettersTested.push(letter)

        if (this.tryLetter(letter)) {
            // hemos adivinado una letra!
            Dom.render(this.movieToGuess.title, this.lettersTested)
            this.checkIfGameWin()
        }
        else {
            this.chances--
            this.checkIfGameLost()
        }

    }

}