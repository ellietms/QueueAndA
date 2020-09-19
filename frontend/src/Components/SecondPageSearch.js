import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const SecondPageSearch = ({ handleSearchValue, value }) => {
  return (
    <form className="form-inline ml-auto">
      <div className="p-1">
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

export default SecondPageSearch;
