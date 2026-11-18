import type { MovieWatchProviders200ResultsCVBuyItem } from "./movieWatchProviders200ResultsCVBuyItem";
import type { MovieWatchProviders200ResultsCVRentItem } from "./movieWatchProviders200ResultsCVRentItem";

export type MovieWatchProviders200ResultsCV = {
  link?: string;
  buy?: MovieWatchProviders200ResultsCVBuyItem[];
  rent?: MovieWatchProviders200ResultsCVRentItem[];
};
