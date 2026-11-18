import type { SearchTv200ResultsItem } from "./searchTv200ResultsItem";

export type SearchTv200 = {
  page?: number;
  results?: SearchTv200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
