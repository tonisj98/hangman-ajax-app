let DOM = {
    updateGuessedWord(guessedWord) {
        document.querySelector("#puzzle").innerHTML = "";

        for (nextLetter of guessedWord) {
            // tenemos que crear tantos <span>*</span> como letras hay en el string movieGuess
            // Cuando encontramos un espacio en realidad hay que crear un <span></span>
            // Para todos los span hay que hacer un appendChild en id="puzzle".
            const span = document.createElement("span");
            span.textContent = nextLetter;
            document.querySelector("#puzzle").appendChild(span);
        }
    }
};