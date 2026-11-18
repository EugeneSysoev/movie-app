import type { MovieReviews200ResultsItem } from "./movieReviews200ResultsItem";

export type MovieReviews200 = {
  id?: number;
  page?: number;
  results?: MovieReviews200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
