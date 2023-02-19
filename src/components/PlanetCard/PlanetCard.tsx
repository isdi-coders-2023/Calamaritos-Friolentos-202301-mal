import "./PlanetCard.css";

import { FC, useState } from "react";
import { Link } from "react-router-dom";
import useGetPlanetsfromApiPrivate from "../../hooks/useGetPlanetsfromApiPrivate";
import { Planet } from "../../api/planet.model";

const PlanetCard: FC<Planet> = (planet) => {
  const { addFavPlanet } = useGetPlanetsfromApiPrivate();
  const [clicked, setClicked] = useState(false);
  const showClicked = () => {
    setClicked(!clicked);
  };
  return (
    <article className="card-container">
      <div className="planet-title">
        <p className="planet-name">{planet.name}</p>
        <button
          className="favorites-icon on off"
          onClick={() => {
            showClicked();
            addFavPlanet(planet);
          }}
        >
          <img
            alt="Start button"
            src="./assets/icons/star-icon-active-mobile.svg"
          ></img>
        </button>
      </div>

      <div className="img-container">
        <img
          className="planet-img"
          src={`./assets/${planet.name}.png`}
          alt={`Planet ${planet.name}`}
        ></img>
      </div>

      <ul className="planet-card__info">
        <li>
          <div className="list__item"> Radius:&nbsp; </div> {planet.radius} J
        </li>
        <li>
          <div className="list__item"> Mass:&nbsp; </div> {planet.mass} J
        </li>
        <li>
          <div className="list__item"> Temperature:&nbsp; </div>
          {planet.temperature}K
        </li>
        <li>
          <div className="list__item"> Period:&nbsp; </div> {planet.period}{" "}
          Earth days
        </li>

        <li>
          <div className="list__item"> Distance:&nbsp;</div>
          {planet.distance_light_year} light years
        </li>
        <li>
          <div className="list__item"> Semimajor axis:&nbsp; </div>
          {planet.semi_major_axis} AU
        </li>
      </ul>

      <div className="view-more-button__container ">
        <Link to={`MyFavorites`} className="view-more-button">
          &nbsp;See more&nbsp;
        </Link>
      </div>
    </article>
  );
};

export default PlanetCard;
