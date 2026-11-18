import type { MovieSimilar200ResultsItem } from "./movieSimilar200ResultsItem";

export type MovieSimilar200 = {
  page?: number;
  results?: MovieSimilar200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
