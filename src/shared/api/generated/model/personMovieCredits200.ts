import type { PersonMovieCredits200CastItem } from "./personMovieCredits200CastItem";
import type { PersonMovieCredits200CrewItem } from "./personMovieCredits200CrewItem";

export type PersonMovieCredits200 = {
  cast?: PersonMovieCredits200CastItem[];
  crew?: PersonMovieCredits200CrewItem[];
  id?: number;
};
