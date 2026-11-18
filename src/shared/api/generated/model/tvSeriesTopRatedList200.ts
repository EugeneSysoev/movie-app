import type { TvSeriesTopRatedList200ResultsItem } from "./tvSeriesTopRatedList200ResultsItem";

export type TvSeriesTopRatedList200 = {
  page?: number;
  results?: TvSeriesTopRatedList200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
