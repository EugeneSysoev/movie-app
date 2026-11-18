import type { AccountRatedMoviesSortBy } from "./accountRatedMoviesSortBy";

export type AccountRatedMoviesParams = {
  language?: string;
  page?: number;
  session_id?: string;
  sort_by?: AccountRatedMoviesSortBy;
};
