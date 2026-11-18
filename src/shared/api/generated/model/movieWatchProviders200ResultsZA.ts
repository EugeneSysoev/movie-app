import type { MovieWatchProviders200ResultsZABuyItem } from "./movieWatchProviders200ResultsZABuyItem";
import type { MovieWatchProviders200ResultsZAFlatrateItem } from "./movieWatchProviders200ResultsZAFlatrateItem";
import type { MovieWatchProviders200ResultsZARentItem } from "./movieWatchProviders200ResultsZARentItem";

export type MovieWatchProviders200ResultsZA = {
  link?: string;
  flatrate?: MovieWatchProviders200ResultsZAFlatrateItem[];
  rent?: MovieWatchProviders200ResultsZARentItem[];
  buy?: MovieWatchProviders200ResultsZABuyItem[];
};
