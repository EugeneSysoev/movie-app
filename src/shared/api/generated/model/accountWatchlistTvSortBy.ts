export type AccountWatchlistTvSortBy =
  (typeof AccountWatchlistTvSortBy)[keyof typeof AccountWatchlistTvSortBy];

export const AccountWatchlistTvSortBy = {
  created_atasc: "created_at.asc",
  created_atdesc: "created_at.desc",
} as const;
