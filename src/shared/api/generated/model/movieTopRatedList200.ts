import type { MovieTopRatedList200ResultsItem } from "./movieTopRatedList200ResultsItem";

export type MovieTopRatedList200 = {
  page?: number;
  results?: MovieTopRatedList200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
