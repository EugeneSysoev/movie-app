import type { MovieAccountStates200Rated } from "./movieAccountStates200Rated";

export type MovieAccountStates200 = {
  id?: number;
  favorite?: boolean;
  rated?: MovieAccountStates200Rated;
  watchlist?: boolean;
};
