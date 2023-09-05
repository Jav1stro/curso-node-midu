const movies = require('./movies.json')
const {changeTitleOfAMovie, getMovieByTitle} = require('./processMovie.js')

// changeTitleOfAMovie(movies[0], "The Matrix");
// const logAllMovies = (movies) => console.log('logAllMovies',movies);

const movieGladiator = getMovieByTitle(movies, "Gladiator");

console.log('Gladiator', movieGladiator)

console.log(changeTitleOfAMovie(movieGladiator, "pedrito"));