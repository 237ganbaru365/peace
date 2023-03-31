import { TMovie, TMovieListProps } from "../../type";
import MovieItem from "./MovieItem";

export default function MovieList({ movies }: TMovieListProps) {
  return (
    <>
      {movies.length >= 0 ? (
        movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)
      ) : (
        <p>No movies...</p>
      )}
    </>
  );
}
