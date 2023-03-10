import Pagination from "../../components/Pagination/Pagination";
import PlanetsList from "../../components/PlanetsList/PlanetsList";
import "./Home.css";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";

const breadcrumbItems = [{ name: "Home", link: "/Main" }];

export const Home = () => {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="home__tittle">
        <h1>Find your next destination</h1>
      </div>
      <PlanetsList />
      <Pagination />
    </>
  );
};
