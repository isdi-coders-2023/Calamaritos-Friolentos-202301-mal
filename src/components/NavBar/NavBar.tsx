import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-logo">
        <Link to="/Main">
          <img
            src="./assets/icons/logo-icon-desktop.svg"
            alt="Space Safari icon"
          />
        </Link>
      </div>
      <div>
        <Link className="favorites-button" to={`/Main/MyFavorites`}>
          My favorites
        </Link>
      </div>
    </nav>
  );
};
