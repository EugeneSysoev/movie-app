import type { MovieLists200ResultsItem } from "./movieLists200ResultsItem";

export type MovieLists200 = {
  id?: number;
  page?: number;
  results?: MovieLists200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
