import React from "react";
import "./Breadcrumbs.css";

interface BreadcrumbItem {
  name: string;
  link: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li key={item.name} className="breadcrumb-item">
            {index === items.length - 1 ? (
              <span>{item.name}</span>
            ) : (
              <a href={item.link}>{item.name}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
