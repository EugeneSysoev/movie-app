import type { ChangesMovieList200ResultsItem } from "./changesMovieList200ResultsItem";

export type ChangesMovieList200 = {
  results?: ChangesMovieList200ResultsItem[];
  page?: number;
  total_pages?: number;
  total_results?: number;
};
