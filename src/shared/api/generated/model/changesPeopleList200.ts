import type { ChangesPeopleList200ResultsItem } from "./changesPeopleList200ResultsItem";

export type ChangesPeopleList200 = {
  results?: ChangesPeopleList200ResultsItem[];
  page?: number;
  total_pages?: number;
  total_results?: number;
};
