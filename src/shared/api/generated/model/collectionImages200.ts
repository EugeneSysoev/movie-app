import type { CollectionImages200BackdropsItem } from "./collectionImages200BackdropsItem";
import type { CollectionImages200PostersItem } from "./collectionImages200PostersItem";

export type CollectionImages200 = {
  id?: number;
  backdrops?: CollectionImages200BackdropsItem[];
  posters?: CollectionImages200PostersItem[];
};
