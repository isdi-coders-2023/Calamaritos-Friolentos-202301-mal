import { useCallback, useContext } from "react";

import { getPlanetByName, getSolarSystemPlanets } from "../api/planet.data";
import { Planet } from "../api/planet.model";

import AppContext from "../store/contexts/planetContext.context";
import { ActionTypes, AppActions } from "../store/types/Action";

const useAppHook = () => {
  const { state, dispatch } = useContext(AppContext);

  const getPlanets = useCallback(async () => {
    const planetsListData = await getSolarSystemPlanets();
    const planetAction: AppActions = {
      type: ActionTypes.INITIALIZE_PLANETS,
      payload: planetsListData,
    };
    dispatch(planetAction);
  }, [dispatch]);

  const fragmentPlanets = useCallback(async () => {
    const planetsListData = await getSolarSystemPlanets();
    const planetsArray = planetsListData.slice(state.page - 1, state.page + 2);

    const fragmentationAction: AppActions = {
      type: ActionTypes.FRAGMENT_PLANETS_ARRAY,
      payload: planetsArray,
    };

    dispatch(fragmentationAction);
  }, [dispatch, state.page]);

  const goToLeftPage = useCallback(
    async (nextPage: number) => {
      const paginationAction: AppActions = {
        type: ActionTypes.GO_TO_PREVIOUS_PAGE,
        payload: nextPage,
      };

      dispatch(paginationAction);
    },
    [dispatch]
  );

  const goToNextPage = useCallback(
    async (nextPage: number) => {
      const paginationAction: AppActions = {
        type: ActionTypes.GO_TO_NEXT_PAGE,
        payload: nextPage,
      };

      dispatch(paginationAction);
    },
    [dispatch]
  );

  const getPlanetDetail = useCallback(
    async (planet: string) => {
      const planetDetailData = await getPlanetByName(planet);
      const PlanetDetailAction: AppActions = {
        type: ActionTypes.GET_PLANET_DETAIL,
        payload: planetDetailData,
      };
      dispatch(PlanetDetailAction);
    },
    [dispatch]
  );

  return {
    state,
    getPlanetDetail,
    goToLeftPage,
    goToNextPage,
    fragmentPlanets,
    getPlanets,
  };
};

export default useAppHook;
