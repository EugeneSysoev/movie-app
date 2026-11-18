import type { SearchMulti200ResultsItem } from "./searchMulti200ResultsItem";

export type SearchMulti200 = {
  page?: number;
  results?: SearchMulti200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
