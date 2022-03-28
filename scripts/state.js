let STATE = {
    movie: undefined,
    movieGuess: undefined,

    reset(movie) {
        this.movie = movie;
        this.movieGuess = movie.replaceAll(/[a-zA-z]/g, "*");
    }
};