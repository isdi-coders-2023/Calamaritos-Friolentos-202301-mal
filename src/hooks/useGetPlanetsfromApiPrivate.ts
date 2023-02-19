import { PlanetFavorite } from "./../api/api-private/planet-fav.model";
import { AppActions, ActionTypes } from "./../store/types/Action";
import { useCallback, useContext } from "react";
import AppContext from "../store/contexts/planetContext.context";
import { Planet } from "../api/planet.model";

export default function useGetPlanetsfromApiPrivate() {
  const { state, dispatch } = useContext(AppContext);

  const getAllPlanet = useCallback(async () => {
    let planetListDataApiPrivate: PlanetFavorite[] = [];
    const response = await fetch(
      "https://api-private-luis-ropero.onrender.com/api-private"
    );
    planetListDataApiPrivate = await response.json();

    const allPlanetApiPrivate: AppActions = {
      type: ActionTypes.VIEW_FAVORITE_PLANETS,
      payload: planetListDataApiPrivate,
    };

    dispatch(allPlanetApiPrivate);
  }, [dispatch]);

  const addFavPlanet = useCallback(
    async (favPlanet: Planet) => {
      const response = await fetch(
        "https://api-private-luis-ropero.onrender.com/api-private",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(favPlanet),
        }
      );
      const planetListDataApiPrivate = await response.json();

      const allPlanetApiPrivate: AppActions = {
        type: ActionTypes.ADD_FAVORITE_PLANET,
        payload: planetListDataApiPrivate,
      };
      dispatch(allPlanetApiPrivate);
    },
    [dispatch]
  );
  return { state, addFavPlanet, getAllPlanet };
}
