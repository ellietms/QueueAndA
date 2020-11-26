import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const MainPageSearch = ({ handleSearchValue, value }) => {
  return (
    <form class="form-inline mr-auto">
      <div className="md-form my-0">
        <input
          className="search_mainPage"
          type="text"
          placeholder="Search"
          aria-label="Search"
          value={value}
          onChange={(event) => handleSearchValue(event)}
        />
      </div>
    </form>
  );
};

export default MainPageSearch;
