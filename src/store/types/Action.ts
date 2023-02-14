import { Planet } from "../../api/planet.model";

export enum ActionTypes {
  GET_PLANETS = "listPlanets",
}

type PlanetAction = {
  type: ActionTypes.GET_PLANETS;
  payload: Planet[];
};

export default PlanetAction;
