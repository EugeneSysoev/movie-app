import type { TvEpisodeAccountStates200Rated } from "./tvEpisodeAccountStates200Rated";

export type TvEpisodeAccountStates200 = {
  id?: number;
  favorite?: boolean;
  rated?: TvEpisodeAccountStates200Rated;
  watchlist?: boolean;
};
