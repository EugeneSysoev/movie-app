import type { SearchCollection200ResultsItem } from "./searchCollection200ResultsItem";

export type SearchCollection200 = {
  page?: number;
  results?: SearchCollection200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
