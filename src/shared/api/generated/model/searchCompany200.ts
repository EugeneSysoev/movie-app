import type { SearchCompany200ResultsItem } from "./searchCompany200ResultsItem";

export type SearchCompany200 = {
  page?: number;
  results?: SearchCompany200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
