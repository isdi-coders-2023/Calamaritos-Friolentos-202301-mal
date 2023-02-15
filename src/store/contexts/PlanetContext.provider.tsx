import { FC, useReducer } from "react";
import PlanetContext from "./planetContext.context";
import planetReducer from "../reducers/planetReducer";

interface PlanetContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PlanetContextProvider: FC<PlanetContextProviderProps> = ({
  children,
}) => {
  const [planets, dispatch] = useReducer(planetReducer, []);

  return (
    <PlanetContext.Provider value={{ planets, dispatch }}>
      {children}
    </PlanetContext.Provider>
  );
};
export default PlanetContextProvider;
