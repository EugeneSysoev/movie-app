import type { KeywordMovies200ResultsItem } from "./keywordMovies200ResultsItem";

export type KeywordMovies200 = {
  id?: number;
  page?: number;
  results?: KeywordMovies200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
