import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../api/movies";
import { TMovie } from "../../type";

const MovieDetail = () => {
  const movieId = useParams();
  const [movie, setMovie] = useState<TMovie>();

  const fetchMovie = async () => {
    const response = await getMovie(movieId.movieId);
    setMovie(response);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <section>
      <div>
        <img src={`https://image.tmdb.org/t/p/w185/${movie?.poster_path}`} />
      </div>
      <div>
        <h1>{movie?.title}</h1>
        <h2>STORY</h2>
        <p>{movie?.overview}</p>
        <p>{movie?.release_date}</p>
        <p>{movie?.vote_average}</p>
      </div>
    </section>
  );
};

export default MovieDetail;
