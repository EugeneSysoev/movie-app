import type { MovieWatchProviders200ResultsITBuyItem } from "./movieWatchProviders200ResultsITBuyItem";
import type { MovieWatchProviders200ResultsITFlatrateItem } from "./movieWatchProviders200ResultsITFlatrateItem";
import type { MovieWatchProviders200ResultsITRentItem } from "./movieWatchProviders200ResultsITRentItem";

export type MovieWatchProviders200ResultsIT = {
  link?: string;
  buy?: MovieWatchProviders200ResultsITBuyItem[];
  rent?: MovieWatchProviders200ResultsITRentItem[];
  flatrate?: MovieWatchProviders200ResultsITFlatrateItem[];
};
