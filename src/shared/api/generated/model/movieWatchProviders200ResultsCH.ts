import type { MovieWatchProviders200ResultsCHBuyItem } from "./movieWatchProviders200ResultsCHBuyItem";
import type { MovieWatchProviders200ResultsCHFlatrateItem } from "./movieWatchProviders200ResultsCHFlatrateItem";
import type { MovieWatchProviders200ResultsCHRentItem } from "./movieWatchProviders200ResultsCHRentItem";

export type MovieWatchProviders200ResultsCH = {
  link?: string;
  flatrate?: MovieWatchProviders200ResultsCHFlatrateItem[];
  buy?: MovieWatchProviders200ResultsCHBuyItem[];
  rent?: MovieWatchProviders200ResultsCHRentItem[];
};
