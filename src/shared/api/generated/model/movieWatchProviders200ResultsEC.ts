import type { MovieWatchProviders200ResultsECBuyItem } from "./movieWatchProviders200ResultsECBuyItem";
import type { MovieWatchProviders200ResultsECFlatrateItem } from "./movieWatchProviders200ResultsECFlatrateItem";
import type { MovieWatchProviders200ResultsECRentItem } from "./movieWatchProviders200ResultsECRentItem";

export type MovieWatchProviders200ResultsEC = {
  link?: string;
  buy?: MovieWatchProviders200ResultsECBuyItem[];
  flatrate?: MovieWatchProviders200ResultsECFlatrateItem[];
  rent?: MovieWatchProviders200ResultsECRentItem[];
};
