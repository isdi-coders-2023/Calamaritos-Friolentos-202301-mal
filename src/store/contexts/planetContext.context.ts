import { createContext, Dispatch } from "react";
import { AppActions } from "../types/Action";
import { AppState } from "./appInterface.model";

interface AppContextProps {
  state: AppState;
  dispatch: Dispatch<AppActions>;
}

const AppContext = createContext<AppContextProps>({
  state: {
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
  },
  dispatch: () => {},
});

export default AppContext;
