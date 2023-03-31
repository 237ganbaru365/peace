import { Link } from "react-router-dom";
import { TMovie } from "../../type";

type MovieItemProps = {
  movie: TMovie;
  isPickup: boolean | undefined;
};

const MovieItem = ({ movie, isPickup }: MovieItemProps) => {
  return (
    <Link to={`${movie.id}`}>
      <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />
    </Link>
  );
};

export default MovieItem;
