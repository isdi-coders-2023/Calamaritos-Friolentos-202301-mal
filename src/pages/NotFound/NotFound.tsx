import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-container">
      <img alt="astronaut" src="./assets/astronaut.svg"></img>
      <div className="error-container__text__button">
        <h1>ERROR 404</h1>
        <h3>
          Sorry, what you are looking for is beyond the limits of our galaxy.
        </h3>
        <div className="home-button-container">
          <Link className="home-button" to={"/Home"}>
            Back to home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
