import type { MovieWatchProviders200ResultsISBuyItem } from "./movieWatchProviders200ResultsISBuyItem";
import type { MovieWatchProviders200ResultsISFlatrateItem } from "./movieWatchProviders200ResultsISFlatrateItem";

export type MovieWatchProviders200ResultsIS = {
  link?: string;
  buy?: MovieWatchProviders200ResultsISBuyItem[];
  flatrate?: MovieWatchProviders200ResultsISFlatrateItem[];
};
