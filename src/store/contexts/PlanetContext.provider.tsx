import { FC, Reducer, useReducer } from "react";

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
    {
      planets: [],
      page: 1,
      planet: {
        name: "",
        mass: 0,
        radius: 0,
        period: 0,
        semi_major_axis: 0,
        temperature: 0,
        distance_light_year: 0,
        host_star_mass: 0,
        host_star_temperature: 0,
      },
    }
  );

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
