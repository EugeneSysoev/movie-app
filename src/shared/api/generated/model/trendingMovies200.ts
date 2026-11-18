import type { TrendingMovies200ResultsItem } from "./trendingMovies200ResultsItem";

export type TrendingMovies200 = {
  page?: number;
  results?: TrendingMovies200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
