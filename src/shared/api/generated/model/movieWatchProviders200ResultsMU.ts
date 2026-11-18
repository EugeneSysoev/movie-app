import type { MovieWatchProviders200ResultsMUBuyItem } from "./movieWatchProviders200ResultsMUBuyItem";
import type { MovieWatchProviders200ResultsMURentItem } from "./movieWatchProviders200ResultsMURentItem";

export type MovieWatchProviders200ResultsMU = {
  link?: string;
  buy?: MovieWatchProviders200ResultsMUBuyItem[];
  rent?: MovieWatchProviders200ResultsMURentItem[];
};
