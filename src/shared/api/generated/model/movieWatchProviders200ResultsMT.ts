import type { MovieWatchProviders200ResultsMTBuyItem } from "./movieWatchProviders200ResultsMTBuyItem";
import type { MovieWatchProviders200ResultsMTFlatrateItem } from "./movieWatchProviders200ResultsMTFlatrateItem";
import type { MovieWatchProviders200ResultsMTRentItem } from "./movieWatchProviders200ResultsMTRentItem";

export type MovieWatchProviders200ResultsMT = {
  link?: string;
  flatrate?: MovieWatchProviders200ResultsMTFlatrateItem[];
  buy?: MovieWatchProviders200ResultsMTBuyItem[];
  rent?: MovieWatchProviders200ResultsMTRentItem[];
};
