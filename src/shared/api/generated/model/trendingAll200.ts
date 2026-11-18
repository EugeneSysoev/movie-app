import type { TrendingAll200ResultsItem } from "./trendingAll200ResultsItem";

export type TrendingAll200 = {
  page?: number;
  results?: TrendingAll200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
