export type GuestSessionRatedMoviesSortBy =
  (typeof GuestSessionRatedMoviesSortBy)[keyof typeof GuestSessionRatedMoviesSortBy];

export const GuestSessionRatedMoviesSortBy = {
  created_atasc: "created_at.asc",
  created_atdesc: "created_at.desc",
} as const;
