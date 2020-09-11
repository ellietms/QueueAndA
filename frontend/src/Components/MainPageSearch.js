import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const MainPageSearch = ({ handleSearchValue, value }) => {
  return (
    <form class="form-inline mr-auto">
      <div className="md-form my-0">
        <input
          class="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          value={value}
          onChange={(event) => handleSearchValue(event.target.value)}
        />
        <i class="fas fa-search fa-1x text-white ml-2 mt-2"></i>
      </div>
    </form>
  );
};

export default MainPageSearch;
