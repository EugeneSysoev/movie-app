import type { TvSeasonWatchProviders200ResultsJPBuyItem } from "./tvSeasonWatchProviders200ResultsJPBuyItem";
import type { TvSeasonWatchProviders200ResultsJPFlatrateItem } from "./tvSeasonWatchProviders200ResultsJPFlatrateItem";
import type { TvSeasonWatchProviders200ResultsJPRentItem } from "./tvSeasonWatchProviders200ResultsJPRentItem";

export type TvSeasonWatchProviders200ResultsJP = {
  link?: string;
  flatrate?: TvSeasonWatchProviders200ResultsJPFlatrateItem[];
  buy?: TvSeasonWatchProviders200ResultsJPBuyItem[];
  rent?: TvSeasonWatchProviders200ResultsJPRentItem[];
};
