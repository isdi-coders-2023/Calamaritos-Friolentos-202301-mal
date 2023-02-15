import { useContext } from "react";
import PlanetContext from "../store/contexts/planetContext.context";
import { ActionTypes } from "../store/types/Action";
import { getSolarSystemPlanets } from "../api/planet.data";

export default function useGetPlanetsList() {
  const { planets, dispatch } = useContext(PlanetContext);

  const getPlanets = async () => {
    const planetsListData = await getSolarSystemPlanets();

    const planetAction = {
      type: ActionTypes.ADD_PLANETS,
      payload: planetsListData,
    };

    dispatch(planetAction);
  };
  return { planets, getPlanets };
}
