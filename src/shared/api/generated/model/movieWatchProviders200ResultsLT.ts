import type { MovieWatchProviders200ResultsLTBuyItem } from "./movieWatchProviders200ResultsLTBuyItem";
import type { MovieWatchProviders200ResultsLTFlatrateItem } from "./movieWatchProviders200ResultsLTFlatrateItem";
import type { MovieWatchProviders200ResultsLTRentItem } from "./movieWatchProviders200ResultsLTRentItem";

export type MovieWatchProviders200ResultsLT = {
  link?: string;
  rent?: MovieWatchProviders200ResultsLTRentItem[];
  buy?: MovieWatchProviders200ResultsLTBuyItem[];
  flatrate?: MovieWatchProviders200ResultsLTFlatrateItem[];
};
