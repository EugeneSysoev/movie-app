import type { TvSeriesOnTheAirList200ResultsItem } from "./tvSeriesOnTheAirList200ResultsItem";

export type TvSeriesOnTheAirList200 = {
  page?: number;
  results?: TvSeriesOnTheAirList200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
