import type { CollectionDetails200PartsItem } from "./collectionDetails200PartsItem";

export type CollectionDetails200 = {
  id?: number;
  name?: string;
  original_language?: string;
  original_name?: string;
  overview?: string;
  poster_path?: string;
  backdrop_path?: string;
  parts?: CollectionDetails200PartsItem[];
};
