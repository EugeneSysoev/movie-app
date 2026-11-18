import type { ListsCopy200ResultsItem } from "./listsCopy200ResultsItem";

export type ListsCopy200 = {
  id?: number;
  page?: number;
  results?: ListsCopy200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
