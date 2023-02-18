import "./MyFavorites.css";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";

const breadcrumbItems = [
  { name: "Home", link: "/Home" },
  { name: "My favorites", link: "/MyFavorites" },
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
