import type { TvEpisodeGroupDetails200GroupsItemEpisodesItem } from "./tvEpisodeGroupDetails200GroupsItemEpisodesItem";

export type TvEpisodeGroupDetails200GroupsItem = {
  id?: string;
  name?: string;
  order?: number;
  episodes?: TvEpisodeGroupDetails200GroupsItemEpisodesItem[];
  locked?: boolean;
};
