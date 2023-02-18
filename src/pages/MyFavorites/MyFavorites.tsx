import "./MyFavorites.css";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";

const breadcrumbItems = [
  { name: "Home", link: "/Main/Home" },
  { name: "My favorites", link: "/Main/MyFavorites" },
];

export const MyFavorites = () => {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="favorites__tittle">
        <h1>My favorites</h1>;
      </div>
    </>
  );
};
