import type { AccountWatchlistMoviesSortBy } from "./accountWatchlistMoviesSortBy";

export type AccountWatchlistMoviesParams = {
  language?: string;
  page?: number;
  session_id?: string;
  sort_by?: AccountWatchlistMoviesSortBy;
};
