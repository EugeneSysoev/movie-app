import type { MovieWatchProviders200ResultsCOBuyItem } from "./movieWatchProviders200ResultsCOBuyItem";
import type { MovieWatchProviders200ResultsCOFlatrateItem } from "./movieWatchProviders200ResultsCOFlatrateItem";
import type { MovieWatchProviders200ResultsCORentItem } from "./movieWatchProviders200ResultsCORentItem";

export type MovieWatchProviders200ResultsCO = {
  link?: string;
  buy?: MovieWatchProviders200ResultsCOBuyItem[];
  flatrate?: MovieWatchProviders200ResultsCOFlatrateItem[];
  rent?: MovieWatchProviders200ResultsCORentItem[];
};
