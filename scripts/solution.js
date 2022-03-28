// Código principal de la aplicación

// Obtener las películas de
// https://raw.githubusercontent.com/hjorturlarsen/IMDB-top-100/master/data/movies.json

// Alternativa: encuentrame todo lo que NO sea un espacio en blanco, y cámbialo por un *
//let movieGuess = movie.replaceAll(/[^\s]/g, "*");
STATE.reset("matrix reloaded");

// Recorremos el string. nextLetter vale a cada iteración una letra del string
DOM.updateGuessedWord(STATE.movieGuess);

// El FOR anterior es equivalente a:
// for (let i = 0; i < movieGuess.length; i++) {
//     console.log(movieGuess[index]);
// }

/**
 * 1. Capturar el evento keyup
 * 2. Ver si la tecla capturada está en la palabra a adivinar (movie). event.key -> nos dice la tecla que ha pulsado el usuario
 * 3. Si está-->
 *    3.1 Recorrer el string original con for
 *    3.2. Cada vez que encuentro una posición del string que es igual a la letra adivinada, habría algo así como...
 *    movieGuess = movieGuess.slice(0, index) + nextLetter + movie.movieGuess(index+1);
 *   3.2 Actualizar el DOM con movieGuess. Lo más sencillo es 'limpiar' todo el HTML de id="puzzle"; y volver a generar todos los <span>. Alternativamente, podríamos actualizar el <span> que coincida con la posición del string donde iría la letra acertada.
 * 
 * Corregir: 13.10
 * 
 */

document.addEventListener("keyup", function (e) {
    let keyPressed = e.key.toLowerCase();
    if (!/^[a-z]$/i.test(keyPressed)) {
        // esto no es una letra de la a la z

        return;
    }

    for (let i = 0; i < STATE.movie.length; i++) {

        // i = 1
        if (STATE.movie[i] == keyPressed) {
            STATE.movieGuess = STATE.movieGuess.slice(0, i) + keyPressed + STATE.movieGuess.slice(i + 1);
        }

    }

    DOM.updateGuessedWord(STATE.movieGuess);
})

