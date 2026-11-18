import type { TvSeriesRecommendations200ResultsItem } from "./tvSeriesRecommendations200ResultsItem";

export type TvSeriesRecommendations200 = {
  page?: number;
  results?: TvSeriesRecommendations200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
