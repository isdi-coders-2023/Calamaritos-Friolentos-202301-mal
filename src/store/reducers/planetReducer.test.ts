import planetReducer from "./planetReducer";
import { ActionTypes, AppActions } from "../types/Action";
import { AppState } from "../contexts/appInterface.model";

describe("Given a new state for my ActionTypes.ADD_PLANETS", () => {
  test("When change by useReducer, the state is changed in ActionTypes.ADD_PLANETS", () => {
    const state: AppState = {
      page: 0,
      planets: [],
      planetsApiPrivate: [],
    };
    const getPlanetsAction: AppActions = {
      type: ActionTypes.ADD_PLANETS,
      payload: {
        name: "Mercury",
        mass: 0,
        radius: 0,
        period: 0,
        semi_major_axis: 0,
        temperature: 0,
        distance_light_year: 0,
        host_star_mass: 0,
        host_star_temperature: 0,
      },
    };
    const updateState = planetReducer(state, getPlanetsAction);
    expect(updateState.planets[0].name).toEqual("Mercury");
  });
});

describe("Given a new state for my ActionTypes.INITIALIZE_PLANETS", () => {
  test("When change by useReducer, the state is changed in ActionTypes.INITIALIZE_PLANETS", () => {
    const state: AppState = {
      page: 0,
      planets: [],
      planetsApiPrivate: [],
    };
    const getPlanetsAction: AppActions = {
      type: ActionTypes.INITIALIZE_PLANETS,
      payload: [
        {
          name: "Mercury",
          mass: 0,
          radius: 0,
          period: 0,
          semi_major_axis: 0,
          temperature: 0,
          distance_light_year: 0,
          host_star_mass: 0,
          host_star_temperature: 0,
        },
      ],
    };
    const updateState = planetReducer(state, getPlanetsAction);
    expect(updateState.planets.length).toEqual(1);
  });
});

describe("Given a new state for my ActionTypes.ADD_FAVORITE_PLANET", () => {
  test("When change by useReducer, the state is changed in ActionTypes.ADD_FAVORITE_PLANET", () => {
    const state: AppState = {
      page: 0,
      planets: [],
      planetsApiPrivate: [],
    };
    const getPlanetsAction: AppActions = {
      type: ActionTypes.ADD_FAVORITE_PLANET,
      payload: {
        name: "Mercury",
        mass: 0,
        radius: 0,
        period: 0,
        semi_major_axis: 0,
        temperature: 0,
        distance_light_year: 0,
        host_star_mass: 0,
        host_star_temperature: 0,
      },
    };
    const updateState = planetReducer(state, getPlanetsAction);
    expect(updateState.planetsApiPrivate.length).toEqual(0);
  });
});

describe("Given a new state for my ActionTypes.VIEW_FAVORITE_PLANETS", () => {
  test("When change by useReducer, the state is changed in ActionTypes.VIEW_FAVORITE_PLANETS", () => {
    const state: AppState = {
      page: 0,
      planets: [],
      planetsApiPrivate: [],
    };
    const getPlanetsAction: AppActions = {
      type: ActionTypes.VIEW_FAVORITE_PLANETS,
      payload: [
        {
          name: "Mercury",
          mass: 0,
          radius: 0,
          period: 0,
          semi_major_axis: 0,
          temperature: 0,
          distance_light_year: 0,
          host_star_mass: 0,
          host_star_temperature: 0,
        },
      ],
    };
    const updateState = planetReducer(state, getPlanetsAction);
    expect(updateState.planetsApiPrivate.length).toEqual(1);
  });
});

describe("Given a new state for action.type.GO_TO_NEXT_PAGE", () => {
  test("When the page number is less than 6, then it has to return the page plus one", () => {
    const state: AppState = {
      page: 1,
      planets: [],
      planetsApiPrivate: [],
    };
    const updateAction = {
      type: ActionTypes.GO_TO_NEXT_PAGE,
      payload: 1,
    };
    const updateState = planetReducer(state, updateAction as AppActions);
    expect(updateState).toEqual({
      page: 2,
      planets: [],
      planetsApiPrivate: [],
    });
  });
});

describe("Given a new state page for action.type.GO_TO_NEXT_PAGE", () => {
  test("When the page number is greater than 6, then it has to return the same page number", () => {
    const state: AppState = {
      page: 7,
      planets: [],
      planetsApiPrivate: [],
    };
    const updateAction = {
      type: ActionTypes.GO_TO_NEXT_PAGE,
      payload: 1,
    };
    const updateState = planetReducer(state, updateAction as AppActions);
    expect(updateState).toEqual({
      page: 7,
      planets: [],
      planetsApiPrivate: [],
    });
  });
});

describe("Given a new state for action.type.GO_TO_PREVIOUS_PAGE", () => {
  test("When the page number is greater than 1, then it has to return the page minus one", () => {
    const state: AppState = {
      page: 3,
      planets: [],
      planetsApiPrivate: [],
    };
    const updateAction = {
      type: ActionTypes.GO_TO_PREVIOUS_PAGE,
      payload: 1,
    };
    const updateState = planetReducer(state, updateAction as AppActions);
    expect(updateState).toEqual({
      page: 2,
      planets: [],
      planetsApiPrivate: [],
    });
  });
});

describe("Given a new state page for action.type.GO_TO_PREVIOUS_PAGE", () => {
  test("When the page number is less than 1, then it has to return the same page number", () => {
    const state: AppState = {
      page: 0,
      planets: [],
      planetsApiPrivate: [],
    };
    const updateAction = {
      type: ActionTypes.GO_TO_PREVIOUS_PAGE,
      payload: 1,
    };
    const updateState = planetReducer(state, updateAction as AppActions);
    expect(updateState).toEqual({
      page: 0,
      planets: [],
      planetsApiPrivate: [],
    });
  });
});

describe("Given a default case for my switch action.type", () => {
  test("When has not change by function useReducer, the state is not change", () => {
    const state: AppState = {
      page: 0,
      planets: [],
      planetsApiPrivate: [],
    };
    const updateAction = {
      type: "default" as unknown as ActionTypes,
      payload: [],
    };
    const updateState = planetReducer(state, updateAction as AppActions);
    expect(updateState).toEqual({
      page: 0,
      planets: [],
      planetsApiPrivate: [],
    });
  });
});
