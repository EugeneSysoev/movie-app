import type { MovieWatchProviders200ResultsRSBuyItem } from "./movieWatchProviders200ResultsRSBuyItem";
import type { MovieWatchProviders200ResultsRSFlatrateItem } from "./movieWatchProviders200ResultsRSFlatrateItem";

export type MovieWatchProviders200ResultsRS = {
  link?: string;
  flatrate?: MovieWatchProviders200ResultsRSFlatrateItem[];
  buy?: MovieWatchProviders200ResultsRSBuyItem[];
};
