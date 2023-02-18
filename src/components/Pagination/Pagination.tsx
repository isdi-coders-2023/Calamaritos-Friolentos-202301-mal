import useAppHook from "../../hooks/useAppHook";
import "./Pagination.css";

const Pagination = () => {
  const { goToLeftPage, goToNextPage, state } = useAppHook();
  return (
    <div className="pagination-container">
      <button
        onClick={() => goToLeftPage(state.page)}
        className="pagination__button-left"
      >
        <img
          alt="Left page button"
          src="./assets/icons/arrow-left-icon-desktop.svg"
        ></img>
      </button>

      <button
        className="pagination__button-right"
        onClick={() => goToNextPage(state.page)}
      >
        <img
          alt="Right page button"
          src="./assets/icons/arrow-right-icon-desktop.svg"
        ></img>
      </button>
    </div>
  );
};

export default Pagination;
