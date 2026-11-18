export type GuestSessionRatedTvSortBy =
  (typeof GuestSessionRatedTvSortBy)[keyof typeof GuestSessionRatedTvSortBy];

export const GuestSessionRatedTvSortBy = {
  created_atasc: "created_at.asc",
  created_atdesc: "created_at.desc",
} as const;
