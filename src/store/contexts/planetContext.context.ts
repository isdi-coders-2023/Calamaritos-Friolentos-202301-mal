import { createContext, Dispatch } from "react";
import { Planet } from "../../api/planet.model";
import PlanetAction from "../types/Action";

interface PlanetContextProps {
  planets: Planet[];
  dispatch: Dispatch<PlanetAction>;
}

const PlanetContext = createContext<PlanetContextProps>({
  planets: [],
  dispatch: () => {},
});

export default PlanetContext;
