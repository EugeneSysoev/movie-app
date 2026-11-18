import type { MovieWatchProviders200ResultsEEBuyItem } from "./movieWatchProviders200ResultsEEBuyItem";
import type { MovieWatchProviders200ResultsEEFlatrateItem } from "./movieWatchProviders200ResultsEEFlatrateItem";
import type { MovieWatchProviders200ResultsEERentItem } from "./movieWatchProviders200ResultsEERentItem";

export type MovieWatchProviders200ResultsEE = {
  link?: string;
  buy?: MovieWatchProviders200ResultsEEBuyItem[];
  flatrate?: MovieWatchProviders200ResultsEEFlatrateItem[];
  rent?: MovieWatchProviders200ResultsEERentItem[];
};
