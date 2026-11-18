import type { MovieNowPlayingList200Dates } from "./movieNowPlayingList200Dates";
import type { MovieNowPlayingList200ResultsItem } from "./movieNowPlayingList200ResultsItem";

export type MovieNowPlayingList200 = {
  dates?: MovieNowPlayingList200Dates;
  page?: number;
  results?: MovieNowPlayingList200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
