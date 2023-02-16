import PlanetsList from "../../components/PlanetsList/PlanetsList";
import "./Home.css";
export const Home = () => {
  return (
    <>
      <div className="home__tittle">
        <h1>Find your next destination</h1>
      </div>
      <PlanetsList />
    </>
  );
};
