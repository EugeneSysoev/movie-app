import type { TvSeriesWatchProviders200ResultsUSBuyItem } from "./tvSeriesWatchProviders200ResultsUSBuyItem";
import type { TvSeriesWatchProviders200ResultsUSFlatrateItem } from "./tvSeriesWatchProviders200ResultsUSFlatrateItem";
import type { TvSeriesWatchProviders200ResultsUSFreeItem } from "./tvSeriesWatchProviders200ResultsUSFreeItem";

export type TvSeriesWatchProviders200ResultsUS = {
  link?: string;
  free?: TvSeriesWatchProviders200ResultsUSFreeItem[];
  buy?: TvSeriesWatchProviders200ResultsUSBuyItem[];
  flatrate?: TvSeriesWatchProviders200ResultsUSFlatrateItem[];
};
