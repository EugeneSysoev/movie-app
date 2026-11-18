import type { MovieWatchProviders200ResultsHUBuyItem } from "./movieWatchProviders200ResultsHUBuyItem";
import type { MovieWatchProviders200ResultsHUFlatrateItem } from "./movieWatchProviders200ResultsHUFlatrateItem";
import type { MovieWatchProviders200ResultsHURentItem } from "./movieWatchProviders200ResultsHURentItem";

export type MovieWatchProviders200ResultsHU = {
  link?: string;
  flatrate?: MovieWatchProviders200ResultsHUFlatrateItem[];
  buy?: MovieWatchProviders200ResultsHUBuyItem[];
  rent?: MovieWatchProviders200ResultsHURentItem[];
};
