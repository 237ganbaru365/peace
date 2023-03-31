// get all war movies from api
export const getAllMovie = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=cdbcd1ef72fcc38fada5fc62ab05750a"
  );
  return response.json();
};

// get specific movie
export const getMovie = async (movieId: string) => {
  const FETCH_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=cdbcd1ef72fcc38fada5fc62ab05750a`;

  const response = await fetch(FETCH_URL);
  return response.json();
};

//get genre name list
export const getGenreList = async () => {
  const FETCH_URL =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=cdbcd1ef72fcc38fada5fc62ab05750a";

  const response = await fetch(FETCH_URL);
  return response.json();
};

//get movie list by genre
export const getMoviesByGenre = async (genreId: string) => {
  const FETCH_URL = `https://api.themoviedb.org/3/discover/movie?api_key=cdbcd1ef72fcc38fada5fc62ab05750a&with_genres=${genreId}`;

  const response = await fetch(FETCH_URL);
  return response.json();
};
