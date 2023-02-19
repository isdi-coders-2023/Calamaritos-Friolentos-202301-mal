import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page__container">
      <h1 className="landing-page__title">Space Safari</h1>
      <h3 className="landing-page__subtitle">
        <span>Your</span> <span>interplanetary</span> <span>travel</span>{" "}
        <span>agency</span>
      </h3>
      <div className="landing-page__button--desktop">
        <Link className="button" to={"/Main"}>
          <img
            className="landing-page__button"
            alt="Next page button desktop"
            src="./assets/icons/arrow-right-icon-desktop.svg"
          ></img>
        </Link>
      </div>
      <div className="landing-page__button--mobile">
        <Link className="button" to={"/Main"}>
          <img
            className="landing-page__button"
            alt="Next page button"
            src="./assets/icons/arrow-down-mobile.svg"
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
