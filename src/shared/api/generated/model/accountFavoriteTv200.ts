import type { AccountFavoriteTv200ResultsItem } from "./accountFavoriteTv200ResultsItem";

export type AccountFavoriteTv200 = {
  page?: number;
  results?: AccountFavoriteTv200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
