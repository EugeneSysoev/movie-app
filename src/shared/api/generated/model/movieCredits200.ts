import type { MovieCredits200CastItem } from "./movieCredits200CastItem";
import type { MovieCredits200CrewItem } from "./movieCredits200CrewItem";

export type MovieCredits200 = {
  id?: number;
  cast?: MovieCredits200CastItem[];
  crew?: MovieCredits200CrewItem[];
};
