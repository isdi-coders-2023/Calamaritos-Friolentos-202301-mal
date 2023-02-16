import PlanetCard from "../PlanetCard/PlanetCard";
import { Planet } from "../../api/planet.model";
import { useEffect } from "react";
import useGetPlanetsList from "../../hooks/useGetPlanetsList";
import "../PlanetCard/PlanetCard.css";
import "./PlanetList.css";

const PlanetsList = () => {
  const { planets, getPlanets } = useGetPlanetsList();

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  return (
    <ul className="planets-container">
      {planets.map((planet: Planet, i) => (
        <li key={i + "-planet"}>
          <PlanetCard
            name={planet.name}
            mass={planet.mass}
            radius={planet.radius}
            semi_major_axis={planet.semi_major_axis}
            distance_light_year={planet.semi_major_axis}
            period={planet.period}
            temperature={planet.temperature}
            host_star_mass={planet.host_star_temperature}
            host_star_temperature={planet.host_star_temperature}
          />
        </li>
      ))}
    </ul>
  );
};

export default PlanetsList;
