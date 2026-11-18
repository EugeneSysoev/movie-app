export type AccountFavoriteTvSortBy =
  (typeof AccountFavoriteTvSortBy)[keyof typeof AccountFavoriteTvSortBy];

export const AccountFavoriteTvSortBy = {
  created_atasc: "created_at.asc",
  created_atdesc: "created_at.desc",
} as const;
