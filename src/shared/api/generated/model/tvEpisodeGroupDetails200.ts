import type { TvEpisodeGroupDetails200GroupsItem } from "./tvEpisodeGroupDetails200GroupsItem";
import type { TvEpisodeGroupDetails200Network } from "./tvEpisodeGroupDetails200Network";

export type TvEpisodeGroupDetails200 = {
  description?: string;
  episode_count?: number;
  group_count?: number;
  groups?: TvEpisodeGroupDetails200GroupsItem[];
  id?: string;
  name?: string;
  network?: TvEpisodeGroupDetails200Network;
  type?: number;
};
