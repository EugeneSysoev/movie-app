import type { AccountRatedMovies200ResultsItem } from "./accountRatedMovies200ResultsItem";

export type AccountRatedMovies200 = {
  page?: number;
  results?: AccountRatedMovies200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
