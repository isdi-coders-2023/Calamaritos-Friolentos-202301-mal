import { Planet } from "../../api/planet.model";

export enum ActionTypes {
  ADD_PLANETS = "addPlanets",
  INITIALIZE_PLANETS = "initializePlanets",
}

type PlanetAction =
  | { type: ActionTypes.ADD_PLANETS; payload: Planet[] }
  | { type: ActionTypes.INITIALIZE_PLANETS; payload: Planet[] };

export default PlanetAction;
