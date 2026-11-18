import type { MovieWatchProviders200ResultsEGBuyItem } from "./movieWatchProviders200ResultsEGBuyItem";
import type { MovieWatchProviders200ResultsEGRentItem } from "./movieWatchProviders200ResultsEGRentItem";

export type MovieWatchProviders200ResultsEG = {
  link?: string;
  rent?: MovieWatchProviders200ResultsEGRentItem[];
  buy?: MovieWatchProviders200ResultsEGBuyItem[];
};
