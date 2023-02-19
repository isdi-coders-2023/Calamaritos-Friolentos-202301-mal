import "./Details.css";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import DetailsPlanet from "../../components/DetailsPlanet/DetailsPlanet";
import { useContext, useEffect } from "react";
import AppContext from "../../store/contexts/planetContext.context";
import useAppHook from "../../hooks/useAppHook";
import { useParams } from "react-router-dom";

const breadcrumbItems = [
  { name: "Home", link: "/" },
  { name: "Details", link: "details/:name" },
];

export const Details = () => {
  const { getPlanetDetail } = useAppHook();
  const { name } = useParams();
  const { state } = useContext(AppContext);
  const { planet } = state;

  useEffect(() => {
    if (name !== undefined) {
      getPlanetDetail(name);
    }
  }, [getPlanetDetail, name]);

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="details__tittle">
        <h1>Planet information</h1>
        <DetailsPlanet planet={planet} />
      </div>
    </>
  );
};
