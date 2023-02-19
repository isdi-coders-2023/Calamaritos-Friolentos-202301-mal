import { Planet } from "./planet.model";

export const getSolarSystemPlanets = async () => {
  let planetsListData: Planet[] = [];

  const response = await fetch(
    `https://api.api-ninjas.com/v1/planets?max_distance_light_year=0.000479`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": "FWllBPgSqhCrZIf/rrVwww==n3aubDQQ3v5Se8We",
      },
    }
  );

  planetsListData = await response.json();

  return planetsListData;
};

export const getPlanetByName = async (name: string) => {
  const response = await fetch(
    `https://api.api-ninjas.com/v1/planets?name=${name}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": "FWllBPgSqhCrZIf/rrVwww==n3aubDQQ3v5Se8We",
      },
    }
  );
  const planet: Planet = await response.json();
  return planet;
};
