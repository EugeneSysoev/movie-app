import type { DiscoverTv200ResultsItem } from "./discoverTv200ResultsItem";

export type DiscoverTv200 = {
  page?: number;
  results?: DiscoverTv200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
