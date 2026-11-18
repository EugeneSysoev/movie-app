export type GuestSessionRatedTvEpisodesSortBy =
  (typeof GuestSessionRatedTvEpisodesSortBy)[keyof typeof GuestSessionRatedTvEpisodesSortBy];

export const GuestSessionRatedTvEpisodesSortBy = {
  created_atasc: "created_at.asc",
  created_atdesc: "created_at.desc",
} as const;
