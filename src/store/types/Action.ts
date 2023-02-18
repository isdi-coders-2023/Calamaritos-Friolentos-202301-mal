import { Planet } from "../../api/planet.model";

export enum ActionTypes {
  ADD_PLANETS = "addPlanets",
  INITIALIZE_PLANETS = "initializePlanets",
  FRAGMENT_PLANETS_ARRAY = "fragmentPlanetsArray",
  GO_TO_NEXT_PAGE = "goToNextPage",
  GO_TO_PREVIOUS_PAGE = "goToPreviousPage",
}

export type PlanetAction =
  | { type: ActionTypes.ADD_PLANETS; payload: Planet }
  | { type: ActionTypes.INITIALIZE_PLANETS; payload: Planet[] }
  | { type: ActionTypes.FRAGMENT_PLANETS_ARRAY; payload: Planet[] };

export type PaginationAction =
  | { type: ActionTypes.GO_TO_NEXT_PAGE; payload: number }
  | { type: ActionTypes.GO_TO_PREVIOUS_PAGE; payload: number };

export type AppActions = PlanetAction | PaginationAction;
