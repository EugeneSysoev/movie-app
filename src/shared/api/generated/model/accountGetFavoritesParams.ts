import type { AccountGetFavoritesSortBy } from "./accountGetFavoritesSortBy";

export type AccountGetFavoritesParams = {
  language?: string;
  page?: number;
  session_id?: string;
  sort_by?: AccountGetFavoritesSortBy;
};
