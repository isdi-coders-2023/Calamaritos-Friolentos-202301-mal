import { AppState } from "../contexts/appInterface.model";
import { ActionTypes, AppActions } from "../types/Action";

const planetReducer = (state: AppState, action: AppActions): AppState => {
  const { page, planets, planetsApiPrivate } = state;
  switch (action.type) {
    case ActionTypes.ADD_PLANETS:
      return { ...state, planets: [...planets, action.payload] };
    case ActionTypes.INITIALIZE_PLANETS:
      return { ...state, planets: action.payload };
    case ActionTypes.GO_TO_NEXT_PAGE:
      return page < 6 ? { ...state, page: page + 1 } : { ...state, page: page };
    case ActionTypes.GO_TO_PREVIOUS_PAGE:
      return page > 1 ? { ...state, page: page - 1 } : { ...state, page: page };
    case ActionTypes.FRAGMENT_PLANETS_ARRAY:
      return { ...state, planets: action.payload };
    case ActionTypes.VIEW_FAVORITE_PLANETS:
      return { ...state, planetsApiPrivate: action.payload };
    case ActionTypes.ADD_FAVORITE_PLANET:
      return {
        ...state,
        planetsApiPrivate: [...planetsApiPrivate],
      };
    default:
      return state;
  }
};
export default planetReducer;
