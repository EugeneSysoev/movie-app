import type { TvSeriesPopularList200ResultsItem } from "./tvSeriesPopularList200ResultsItem";

export type TvSeriesPopularList200 = {
  page?: number;
  results?: TvSeriesPopularList200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
