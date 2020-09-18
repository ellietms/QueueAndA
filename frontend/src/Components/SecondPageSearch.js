import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const SecondPageSearch = ({ handleSearchValue, value }) => {
  return (
    <form class="form-inline ml-auto">
      <div className="md-form my-0">
        <input
          className="secondPage_search pl-2"
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
