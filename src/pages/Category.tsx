import { useLoaderData } from "react-router-dom";
import { getMoviesByGenre } from "../api/movies";
import { TMovie } from "../type";

import MovieList from "../components/movies/MovieList";

const Category = () => {
  const movies = useLoaderData();
  return (
    <section>
      <MovieList movies={movies as TMovie[]} />
    </section>
  );
};

export default Category;

export const loader = async ({ params }: any) => {
  const response = await getMoviesByGenre(params.genreId);
  return response.results;
};
