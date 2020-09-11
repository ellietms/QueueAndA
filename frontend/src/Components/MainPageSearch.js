import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const MainPageSearch = ({ handleSearchValue, value }) => {
  return (
    <form class="ml-auto">
      <div className="pt-1">
        <input
          className="secondPage_search"
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
