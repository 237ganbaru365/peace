import React, { useEffect, useState } from "react";
import { getAllMovie } from "../api/movies";
import MovieList from "../components/movies/MovieList";
import { TMovie } from "../type";

const Discover = () => {
  const [movies, setMovies] = useState([]);

  const fetchAllMovies = async () => {
    const response = await getAllMovie();
    setMovies(response.results);
  };

  useEffect(() => {
    fetchAllMovies();
  }, []);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};

export default Discover;
