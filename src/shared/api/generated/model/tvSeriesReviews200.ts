import type { TvSeriesReviews200ResultsItem } from "./tvSeriesReviews200ResultsItem";

export type TvSeriesReviews200 = {
  id?: number;
  page?: number;
  results?: TvSeriesReviews200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
