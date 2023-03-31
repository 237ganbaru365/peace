import { useLoaderData } from "react-router-dom";
import { getAllMovie } from "../api/movies";
import MovieList from "../components/movies/MovieList";
import { TMovie } from "../type";

import classes from "./Discover.module.scss";

const Discover = () => {
  const movies = useLoaderData();

  return (
    <section className={classes.content}>
      {(movies as TMovie[]).length ? (
        <MovieList movies={movies as TMovie[]} />
      ) : (
        <p>No movies yet...</p>
      )}
    </section>
  );
};

export default Discover;

export const loader = async () => {
  const response = await getAllMovie();
  return response.results;
};
