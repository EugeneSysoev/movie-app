import type { TvSeasonCredits200CastItem } from "./tvSeasonCredits200CastItem";
import type { TvSeasonCredits200CrewItem } from "./tvSeasonCredits200CrewItem";

export type TvSeasonCredits200 = {
  cast?: TvSeasonCredits200CastItem[];
  crew?: TvSeasonCredits200CrewItem[];
  id?: number;
};
