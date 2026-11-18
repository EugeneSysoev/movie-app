import type { SearchMovie200ResultsItem } from "./searchMovie200ResultsItem";

export type SearchMovie200 = {
  page?: number;
  results?: SearchMovie200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
