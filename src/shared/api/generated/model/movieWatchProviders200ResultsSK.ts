import type { MovieWatchProviders200ResultsSKBuyItem } from "./movieWatchProviders200ResultsSKBuyItem";
import type { MovieWatchProviders200ResultsSKFlatrateItem } from "./movieWatchProviders200ResultsSKFlatrateItem";
import type { MovieWatchProviders200ResultsSKRentItem } from "./movieWatchProviders200ResultsSKRentItem";

export type MovieWatchProviders200ResultsSK = {
  link?: string;
  buy?: MovieWatchProviders200ResultsSKBuyItem[];
  flatrate?: MovieWatchProviders200ResultsSKFlatrateItem[];
  rent?: MovieWatchProviders200ResultsSKRentItem[];
};
