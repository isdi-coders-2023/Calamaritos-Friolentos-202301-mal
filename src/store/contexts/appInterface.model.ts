import { PlanetFavorite } from "./../../api/api-private/planet-fav.model";
import { Planet } from "../../api/planet.model";

export interface AppState {
  planets: Planet[];
  page: number;
  planetsApiPrivate: PlanetFavorite[];
}
