export type AccountGetFavoritesSortBy =
  (typeof AccountGetFavoritesSortBy)[keyof typeof AccountGetFavoritesSortBy];

export const AccountGetFavoritesSortBy = {
  created_atasc: "created_at.asc",
  created_atdesc: "created_at.desc",
} as const;
