import type { MovieWatchProviders200ResultsDKBuyItem } from "./movieWatchProviders200ResultsDKBuyItem";
import type { MovieWatchProviders200ResultsDKFlatrateItem } from "./movieWatchProviders200ResultsDKFlatrateItem";
import type { MovieWatchProviders200ResultsDKRentItem } from "./movieWatchProviders200ResultsDKRentItem";

export type MovieWatchProviders200ResultsDK = {
  link?: string;
  rent?: MovieWatchProviders200ResultsDKRentItem[];
  flatrate?: MovieWatchProviders200ResultsDKFlatrateItem[];
  buy?: MovieWatchProviders200ResultsDKBuyItem[];
};
