import type { MovieWatchProviders200ResultsSABuyItem } from "./movieWatchProviders200ResultsSABuyItem";
import type { MovieWatchProviders200ResultsSAFlatrateItem } from "./movieWatchProviders200ResultsSAFlatrateItem";
import type { MovieWatchProviders200ResultsSARentItem } from "./movieWatchProviders200ResultsSARentItem";

export type MovieWatchProviders200ResultsSA = {
  link?: string;
  flatrate?: MovieWatchProviders200ResultsSAFlatrateItem[];
  rent?: MovieWatchProviders200ResultsSARentItem[];
  buy?: MovieWatchProviders200ResultsSABuyItem[];
};
