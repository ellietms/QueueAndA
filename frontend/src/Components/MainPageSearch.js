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
      </div>
    </form>
  );
};

export default MainPageSearch;
