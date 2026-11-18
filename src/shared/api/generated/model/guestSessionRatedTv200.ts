import type { GuestSessionRatedTv200ResultsItem } from "./guestSessionRatedTv200ResultsItem";

export type GuestSessionRatedTv200 = {
  page?: number;
  results?: GuestSessionRatedTv200ResultsItem[];
  total_pages?: number;
  total_results?: number;
};
