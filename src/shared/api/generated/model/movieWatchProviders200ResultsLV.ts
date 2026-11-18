import type { MovieWatchProviders200ResultsLVBuyItem } from "./movieWatchProviders200ResultsLVBuyItem";
import type { MovieWatchProviders200ResultsLVFlatrateItem } from "./movieWatchProviders200ResultsLVFlatrateItem";

export type MovieWatchProviders200ResultsLV = {
  link?: string;
  flatrate?: MovieWatchProviders200ResultsLVFlatrateItem[];
  buy?: MovieWatchProviders200ResultsLVBuyItem[];
};
