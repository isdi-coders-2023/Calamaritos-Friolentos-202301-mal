import { Planet } from "./planet.model";

export const getSolarSystemPlanets = async () => {
  let planetsListData: Planet[] = [];
  const response = await fetch(
    `https://api.api-ninjas.com/v1/planets?max_distance_light_year=0.000479`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": "X/eFoH5y1gzGiAgQPef9Gw==QUeLPZoIOIQ9j1u1",
      },
    }
  );
  planetsListData = await response.json();

  return planetsListData;
};
