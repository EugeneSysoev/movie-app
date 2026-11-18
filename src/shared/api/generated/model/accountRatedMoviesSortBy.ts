export type AccountRatedMoviesSortBy =
  (typeof AccountRatedMoviesSortBy)[keyof typeof AccountRatedMoviesSortBy];

export const AccountRatedMoviesSortBy = {
  created_atasc: "created_at.asc",
  created_atdesc: "created_at.desc",
} as const;
