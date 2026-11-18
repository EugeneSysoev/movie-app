import type { SearchKeyword200ResultsItem } from "./searchKeyword200ResultsItem";

export type SearchKeyword200 = {
  page?: number;
  results?: SearchKeyword200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
