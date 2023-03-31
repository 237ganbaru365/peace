export interface TMovie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

export interface TChildrenProps {
  children: React.ReactNode;
}

export interface TMovieListProps {
  movies: TMovie[];
}

export interface TMovieItemProps {
  movie: TMovie;
}
