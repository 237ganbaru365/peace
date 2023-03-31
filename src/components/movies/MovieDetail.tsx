import { useLoaderData } from "react-router-dom";
import { getMovie } from "../../api/movies";
import { TMovie } from "../../type";
import Card from "../common/Card";
import classes from "./MovieDetail.module.scss";

const MovieDetail = () => {
  const movie = useLoaderData();

  return (
    <section className={classes.movie}>
      <Card>
        <div className={classes["movie-wrapper"]}>
          <div className={classes["movie-cover"]}>
            <img
              src={`https://image.tmdb.org/t/p/w185/${
                (movie as TMovie).poster_path
              }`}
            />
          </div>
          <div className={classes["movie-info"]}>
            <h1 className={classes["movie-info__title"]}>
              {(movie as TMovie).title}
            </h1>
            <h2 className={classes["movie-info__heading"]}>STORY</h2>
            <p className={classes["movie-info__story"]}>
              {(movie as TMovie).overview}
            </p>
            <span className={classes.border} />
            <p className={classes["movie-info__date"]}>
              {(movie as TMovie).release_date}
            </p>
            <p className={classes["movie-info__rate"]}>
              {(movie as TMovie).vote_average}
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default MovieDetail;

export const loader = async ({ params }: any) => {
  const response = await getMovie(params.movieId);
  return response;
};
