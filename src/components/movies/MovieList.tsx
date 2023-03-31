import { TMovie } from "../../type";
import MovieItem from "./MovieItem";

type MovieListProps = {
  movies: TMovie[];
  isPickup?: boolean;
};

export default function MovieList({ movies, isPickup }: MovieListProps) {
  return (
    <>
      {movies.length >= 0 ? (
        movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} isPickup={isPickup} />
        ))
      ) : (
        <p>No movies...</p>
      )}
    </>
  );
}
