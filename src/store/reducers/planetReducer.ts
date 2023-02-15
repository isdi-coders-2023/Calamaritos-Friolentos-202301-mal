import { Planet } from "../../api/planet.model";
import PlanetAction, { ActionTypes } from "../types/Action";

const planetReducer = (
  previousPlanets: Planet[],
  action: PlanetAction
): Planet[] => {
  switch (action.type) {
    case ActionTypes.ADD_PLANETS:
      return [...previousPlanets, ...action.payload];
    default:
      return [...previousPlanets];
  }
};
export default planetReducer;
