import type { MovieWatchProviders200ResultsUGBuyItem } from "./movieWatchProviders200ResultsUGBuyItem";
import type { MovieWatchProviders200ResultsUGRentItem } from "./movieWatchProviders200ResultsUGRentItem";

export type MovieWatchProviders200ResultsUG = {
  link?: string;
  rent?: MovieWatchProviders200ResultsUGRentItem[];
  buy?: MovieWatchProviders200ResultsUGBuyItem[];
};
