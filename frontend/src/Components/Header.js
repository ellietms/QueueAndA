import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import MainPageSearch from "./MainPageSearch";
import { Link } from "react-router-dom";

const Header = ({ handleSearchValue, value }) => {
  return (
    <div className="header">
      <Link
        to="/"
        style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
      >
        <img
          src="https://www.newsshopper.co.uk/resources/images/2669419.jpg"
          width="50"
          height="40"
          className="my-3 rounded-circle ml-4"
          alt=""
        />
        <span className="logo my-3 pl-3 pt-1 pr-3 text-danger">QueueAndA</span>
      </Link>
      <MainPageSearch value={value} handleSearchValue={handleSearchValue} />
    </div>
  );
};

export default Header;
