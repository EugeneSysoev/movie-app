import type { AccountRatedTv200ResultsItem } from "./accountRatedTv200ResultsItem";

export type AccountRatedTv200 = {
  page?: number;
  results?: AccountRatedTv200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
