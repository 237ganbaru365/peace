import { NavLink } from "react-router-dom";
import { TMovie, TMovieItemProps } from "../../type";

const MovieItem = ({ movie }: TMovieItemProps) => {
  return (
    <NavLink to={`/movie/${movie.id}`}>
      <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />
    </NavLink>
  );
};

export default MovieItem;
