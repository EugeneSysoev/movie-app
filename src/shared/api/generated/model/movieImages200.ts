import type { MovieImages200BackdropsItem } from "./movieImages200BackdropsItem";
import type { MovieImages200LogosItem } from "./movieImages200LogosItem";
import type { MovieImages200PostersItem } from "./movieImages200PostersItem";

export type MovieImages200 = {
  backdrops?: MovieImages200BackdropsItem[];
  id?: number;
  logos?: MovieImages200LogosItem[];
  posters?: MovieImages200PostersItem[];
};
