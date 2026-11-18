import type { AccountGetFavorites200ResultsItem } from "./accountGetFavorites200ResultsItem";

export type AccountGetFavorites200 = {
  page?: number;
  results?: AccountGetFavorites200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
