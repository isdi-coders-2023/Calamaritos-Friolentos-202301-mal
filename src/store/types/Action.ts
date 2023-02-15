import { Planet } from "../../api/planet.model";

export enum ActionTypes {
  ADD_PLANETS = "listPlanets",
}

type PlanetAction = {
  type: ActionTypes.ADD_PLANETS;
  payload: Planet[];
};

export default PlanetAction;
