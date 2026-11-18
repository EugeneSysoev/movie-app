import type { MovieWatchProviders200ResultsNZBuyItem } from "./movieWatchProviders200ResultsNZBuyItem";
import type { MovieWatchProviders200ResultsNZFlatrateItem } from "./movieWatchProviders200ResultsNZFlatrateItem";

export type MovieWatchProviders200ResultsNZ = {
  link?: string;
  flatrate?: MovieWatchProviders200ResultsNZFlatrateItem[];
  buy?: MovieWatchProviders200ResultsNZBuyItem[];
};
