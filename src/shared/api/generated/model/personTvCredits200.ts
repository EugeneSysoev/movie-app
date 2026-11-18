import type { PersonTvCredits200CastItem } from "./personTvCredits200CastItem";
import type { PersonTvCredits200CrewItem } from "./personTvCredits200CrewItem";

export type PersonTvCredits200 = {
  cast?: PersonTvCredits200CastItem[];
  crew?: PersonTvCredits200CrewItem[];
  id?: number;
};
