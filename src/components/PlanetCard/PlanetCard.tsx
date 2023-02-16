import "./PlanetCard.css";
import { Planet } from "../../api/planet.model";
import { FC } from "react";

const PlanetCard: FC<Planet> = (planet) => {
  return (
    <article className="card-container">
      <div className="planet-title">
        <p className="planet-name">{planet.name}</p>
        <button className="favorites-icon on off">
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

      <div className="planet-eslogan__container">
        <p className="planet__eslogan">
          El más cercano al Sol, ¡lleva un buen protector solar!
        </p>
      </div>

      <ul className="planet-card__info">
        <li> Masa: {planet.mass} J </li>
        <li>Radio: {planet.radius} J</li>
        <li>Período: {planet.period} días terrestres</li>
        <li>Semieje mayor: {planet.semi_major_axis} AU</li>
        <li>Temperatura: {planet.temperature} K</li>
        <li>Distancia: {planet.distance_light_year} años luz</li>
      </ul>

      <div className="view-more-button__container ">
        <button className="view-more-button">Ver más</button>
      </div>
    </article>
  );
};

export default PlanetCard;
