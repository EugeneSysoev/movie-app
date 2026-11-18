import type { SearchPerson200ResultsItem } from "./searchPerson200ResultsItem";

export type SearchPerson200 = {
  page?: number;
  results?: SearchPerson200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
