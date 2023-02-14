import { Planet } from "../../api/planet.model";
import PlanetAction from "../types/Action";
import { ActionTypes } from "../types/Action";

const planetReducer = (
  previousPlanets: Planet[],
  action: PlanetAction
): Planet[] => {
  switch (action.type) {
    case ActionTypes.GET_PLANETS:
      return [...previousPlanets, ...action.payload];
    default:
      return [...previousPlanets];
  }
};
export default planetReducer;
