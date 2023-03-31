import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesByGenre } from "../api/movies";
import MovieList from "../components/movies/MovieList";

const Category = () => {
  const [movies, setMovies] = useState([]);
  const genreId = useParams();

  const fetchMoviesByCategory = async () => {
    const response = await getMoviesByGenre(genreId.genreId);
    setMovies(response.results);
  };

  useEffect(() => {
    fetchMoviesByCategory();
  }, [genreId]);

  return (
    <section>
      <MovieList movies={movies} />
    </section>
  );
};

export default Category;
