import type { GuestSessionRatedMovies200ResultsItem } from "./guestSessionRatedMovies200ResultsItem";

export type GuestSessionRatedMovies200 = {
  page?: number;
  results?: GuestSessionRatedMovies200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
