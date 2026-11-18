import type { TrendingTv200ResultsItem } from "./trendingTv200ResultsItem";

export type TrendingTv200 = {
  page?: number;
  results?: TrendingTv200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
