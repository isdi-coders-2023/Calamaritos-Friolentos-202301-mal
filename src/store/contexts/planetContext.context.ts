import { createContext, Dispatch } from "react";
import { AppActions } from "../types/Action";
import { AppState } from "./appInterface.model";

interface AppContextProps {
  state: AppState;
  dispatch: Dispatch<AppActions>;
}

const AppContext = createContext<AppContextProps>({
  state: { planets: [], page: 1, planetsApiPrivate: [] },
  dispatch: () => {},
});

export default AppContext;
