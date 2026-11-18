import type { AccountLists200ResultsItem } from "./accountLists200ResultsItem";

export type AccountLists200 = {
  page?: number;
  results?: AccountLists200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
