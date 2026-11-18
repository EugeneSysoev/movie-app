import type { TvSeriesEpisodeGroups200ResultsItemNetwork } from "./tvSeriesEpisodeGroups200ResultsItemNetwork";

export type TvSeriesEpisodeGroups200ResultsItem = {
  description?: string;
  episode_count?: number;
  group_count?: number;
  id?: string;
  name?: string;
  network?: TvSeriesEpisodeGroups200ResultsItemNetwork;
  type?: number;
};
