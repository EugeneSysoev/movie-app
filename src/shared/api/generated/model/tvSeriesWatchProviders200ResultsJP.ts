import type { TvSeriesWatchProviders200ResultsJPBuyItem } from "./tvSeriesWatchProviders200ResultsJPBuyItem";
import type { TvSeriesWatchProviders200ResultsJPFlatrateItem } from "./tvSeriesWatchProviders200ResultsJPFlatrateItem";
import type { TvSeriesWatchProviders200ResultsJPRentItem } from "./tvSeriesWatchProviders200ResultsJPRentItem";

export type TvSeriesWatchProviders200ResultsJP = {
  link?: string;
  flatrate?: TvSeriesWatchProviders200ResultsJPFlatrateItem[];
  buy?: TvSeriesWatchProviders200ResultsJPBuyItem[];
  rent?: TvSeriesWatchProviders200ResultsJPRentItem[];
};
