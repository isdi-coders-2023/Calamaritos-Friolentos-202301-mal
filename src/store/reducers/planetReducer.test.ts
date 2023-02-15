import planetReducer from "./planetReducer";
import { ActionTypes } from "../types/Action";
import { Planet } from "../../api/planet.model";

describe("Given a new state for my ActionTypes.GET_PLANETS", () => {
  test("When change by useReducer, the state is change in ActionTypes.GET_PLANETS", () => {
    const previousPlanets: Planet[] = [];
    const updateAction = { type: ActionTypes.GET_PLANETS, payload: [] };
    const updateState = planetReducer(previousPlanets, updateAction);
    expect(updateState).toEqual([]);
  });
});

describe("Given a default case for my switch action.type", () => {
  test("When has not change by function useReducer, the state is not change", () => {
    const previousPlanets: Planet[] = [];
    const updateAction = {
      type: "default" as unknown as ActionTypes,
      payload: [],
    };
    const updateState = planetReducer(previousPlanets, updateAction);
    expect(updateState).toEqual([]);
  });
});
