const getMovieByTitle = (movies, title) => {
  const movie = movies.find((movie) => movie.title === title);

  return movie ?? "Movie not found.";
};

const changeTitleOfAMovie = (movie, newTitle) => {
  console.log("old movie title:", movie.title);
  console.log("new movie title:", newTitle);
  return {
    ...movie,
    title: newTitle,
  };
};

module.exports = {
  changeTitleOfAMovie,
  getMovieByTitle,
};
