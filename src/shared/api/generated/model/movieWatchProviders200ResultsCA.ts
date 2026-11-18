import type { MovieWatchProviders200ResultsCABuyItem } from "./movieWatchProviders200ResultsCABuyItem";
import type { MovieWatchProviders200ResultsCAFlatrateItem } from "./movieWatchProviders200ResultsCAFlatrateItem";
import type { MovieWatchProviders200ResultsCARentItem } from "./movieWatchProviders200ResultsCARentItem";

export type MovieWatchProviders200ResultsCA = {
  link?: string;
  rent?: MovieWatchProviders200ResultsCARentItem[];
  buy?: MovieWatchProviders200ResultsCABuyItem[];
  flatrate?: MovieWatchProviders200ResultsCAFlatrateItem[];
};
