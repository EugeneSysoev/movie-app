import type { PersonPopularList200ResultsItem } from "./personPopularList200ResultsItem";

export type PersonPopularList200 = {
  page?: number;
  results?: PersonPopularList200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
