import type { MovieWatchProviders200ResultsJOBuyItem } from "./movieWatchProviders200ResultsJOBuyItem";
import type { MovieWatchProviders200ResultsJOFlatrateItem } from "./movieWatchProviders200ResultsJOFlatrateItem";

export type MovieWatchProviders200ResultsJO = {
  link?: string;
  flatrate?: MovieWatchProviders200ResultsJOFlatrateItem[];
  buy?: MovieWatchProviders200ResultsJOBuyItem[];
};
