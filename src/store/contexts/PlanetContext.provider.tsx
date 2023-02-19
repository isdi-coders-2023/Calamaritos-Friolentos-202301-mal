import { FC, Reducer, useMemo, useReducer } from "react";

import planetReducer from "../reducers/planetReducer";
import { AppState } from "./appInterface.model";
import { AppActions } from "../types/Action";
import AppContext from "./planetContext.context";

interface AppContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<AppState, AppActions>>(
    planetReducer,
    { planets: [], page: 1, planetsApiPrivate: [] }
  );
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export default AppContextProvider;
