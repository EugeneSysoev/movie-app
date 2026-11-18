import type { TrendingPeople200ResultsItem } from "./trendingPeople200ResultsItem";

export type TrendingPeople200 = {
  page?: number;
  results?: TrendingPeople200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
