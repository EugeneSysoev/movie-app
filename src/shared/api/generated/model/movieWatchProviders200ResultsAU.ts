import type { MovieWatchProviders200ResultsAUBuyItem } from "./movieWatchProviders200ResultsAUBuyItem";
import type { MovieWatchProviders200ResultsAUFlatrateItem } from "./movieWatchProviders200ResultsAUFlatrateItem";

export type MovieWatchProviders200ResultsAU = {
  link?: string;
  flatrate?: MovieWatchProviders200ResultsAUFlatrateItem[];
  buy?: MovieWatchProviders200ResultsAUBuyItem[];
};
