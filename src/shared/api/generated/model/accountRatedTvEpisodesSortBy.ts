export type AccountRatedTvEpisodesSortBy =
  (typeof AccountRatedTvEpisodesSortBy)[keyof typeof AccountRatedTvEpisodesSortBy];

export const AccountRatedTvEpisodesSortBy = {
  created_atasc: "created_at.asc",
  created_atdesc: "created_at.desc",
} as const;
