import type { TvSeasonAggregateCredits200CastItem } from "./tvSeasonAggregateCredits200CastItem";
import type { TvSeasonAggregateCredits200CrewItem } from "./tvSeasonAggregateCredits200CrewItem";

export type TvSeasonAggregateCredits200 = {
  cast?: TvSeasonAggregateCredits200CastItem[];
  crew?: TvSeasonAggregateCredits200CrewItem[];
  id?: number;
};
