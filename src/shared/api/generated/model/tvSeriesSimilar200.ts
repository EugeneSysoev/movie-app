import type { TvSeriesSimilar200ResultsItem } from "./tvSeriesSimilar200ResultsItem";

export type TvSeriesSimilar200 = {
  page?: number;
  results?: TvSeriesSimilar200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
