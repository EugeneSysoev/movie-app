import type { MoviePopularList200ResultsItem } from "./moviePopularList200ResultsItem";

export type MoviePopularList200 = {
  page?: number;
  results?: MoviePopularList200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
