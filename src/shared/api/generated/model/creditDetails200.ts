import type { CreditDetails200Media } from "./creditDetails200Media";
import type { CreditDetails200Person } from "./creditDetails200Person";

export type CreditDetails200 = {
  credit_type?: string;
  department?: string;
  job?: string;
  media?: CreditDetails200Media;
  media_type?: string;
  id?: string;
  person?: CreditDetails200Person;
};
