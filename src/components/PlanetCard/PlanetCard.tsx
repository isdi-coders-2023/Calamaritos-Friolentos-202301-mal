const PlanetCard = () => {
  return (
    <li className="card-container">
      <div>
        <p className="planet-name">Mercury</p>
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
          src="./assets/mercury.png"
          alt="Planet Mercury"
        ></img>
      </div>

      <div className="planet-eslogan__container">
        <p className="planet__eslogan">
          El más cercano al Sol, ¡lleva un buen protector solar!
        </p>
      </div>

      <ul className="planet-card__info">
        <li> Masa: 0.000174 J </li>
        <li>Radio: 0.0341 J</li>
        <li>Período: 88 días terrestres</li>
        <li>Semieje mayor: 0.387098 AU</li>
        <li>Temperatura: 400 K</li>
        <li>Distancia: 1.1e-05 años luz</li>
      </ul>

      <div className="view-more-button__container ">
        <button className="view-more-button">Ver más</button>
      </div>
    </li>
  );
};

export default PlanetCard;
