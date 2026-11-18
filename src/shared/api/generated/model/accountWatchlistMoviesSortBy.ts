export type AccountWatchlistMoviesSortBy =
  (typeof AccountWatchlistMoviesSortBy)[keyof typeof AccountWatchlistMoviesSortBy];

export const AccountWatchlistMoviesSortBy = {
  created_atasc: "created_at.asc",
  created_atdesc: "created_at.desc",
} as const;
