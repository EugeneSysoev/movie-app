import type { DiscoverMovie200ResultsItem } from "./discoverMovie200ResultsItem";

export type DiscoverMovie200 = {
  page?: number;
  results?: DiscoverMovie200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
