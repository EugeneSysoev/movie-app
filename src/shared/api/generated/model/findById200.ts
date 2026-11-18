import type { FindById200MovieResultsItem } from "./findById200MovieResultsItem";

export type FindById200 = {
  movie_results?: FindById200MovieResultsItem[];
  person_results?: unknown[];
  tv_results?: unknown[];
  tv_episode_results?: unknown[];
  tv_season_results?: unknown[];
};
