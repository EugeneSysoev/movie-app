import type { ChangesTvList200ResultsItem } from "./changesTvList200ResultsItem";

export type ChangesTvList200 = {
  results?: ChangesTvList200ResultsItem[];
  page?: number;
  total_pages?: number;
  total_results?: number;
};
