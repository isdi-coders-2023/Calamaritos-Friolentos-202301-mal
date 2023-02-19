import "./MyFavorites.css";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import useGetPlanetsfromApiPrivate from "../../hooks/useGetPlanetsfromApiPrivate";
import { useEffect } from "react";
import PlanetCard from "../../components/PlanetCard/PlanetCard";
import { Planet } from "../../api/planet.model";

const breadcrumbItems = [
  { name: "Home", link: "/Main" },
  { name: "My favorites", link: "/Main/MyFavorites" },
];

export const MyFavorites = () => {
  const { state, getAllPlanet } = useGetPlanetsfromApiPrivate();

  useEffect(() => {
    getAllPlanet();
  }, [getAllPlanet]);

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="favorites__tittle">
        <h1>My favorites</h1>;
      </div>
      <ul className="planets-container">
        {state.planetsApiPrivate.map((planet: Planet, i: number) => (
          <li key={planet.name}>
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
    </>
  );
};
