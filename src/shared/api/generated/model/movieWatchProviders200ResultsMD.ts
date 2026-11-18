import type { MovieWatchProviders200ResultsMDBuyItem } from "./movieWatchProviders200ResultsMDBuyItem";
import type { MovieWatchProviders200ResultsMDFlatrateItem } from "./movieWatchProviders200ResultsMDFlatrateItem";

export type MovieWatchProviders200ResultsMD = {
  link?: string;
  buy?: MovieWatchProviders200ResultsMDBuyItem[];
  flatrate?: MovieWatchProviders200ResultsMDFlatrateItem[];
};
