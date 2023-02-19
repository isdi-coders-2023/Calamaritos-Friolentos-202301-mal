import { Planet } from "../../api/planet.model";

export interface AppState {
  planets: Planet[];
  page: number;
  planet: Planet;
}
