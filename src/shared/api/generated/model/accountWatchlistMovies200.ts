import type { AccountWatchlistMovies200ResultsItem } from "./accountWatchlistMovies200ResultsItem";

export type AccountWatchlistMovies200 = {
  page?: number;
  results?: AccountWatchlistMovies200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
