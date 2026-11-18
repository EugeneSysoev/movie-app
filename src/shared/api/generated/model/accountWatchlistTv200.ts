import type { AccountWatchlistTv200ResultsItem } from "./accountWatchlistTv200ResultsItem";

export type AccountWatchlistTv200 = {
  page?: number;
  results?: AccountWatchlistTv200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
