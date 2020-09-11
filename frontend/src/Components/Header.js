import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import MainPageSearch from "./MainPageSearch";
import { Link } from "react-router-dom";

const Header = ({ handleSearchValue, value }) => {
  return (
    <div className="secondPage_header d-flex">
      <Link
        to="/"
        style={{ textDecoration: "none", color: "black", cursor: "pointer",display:"flex" }}
      >
        <img
          src="https://www.newsshopper.co.uk/resources/images/2669419.jpg"
          className="rounded-circle"
          alt="Q&A logo"
        />
        <span className="logo">QueueAndA</span>
      </Link>
      <MainPageSearch value={value} handleSearchValue={handleSearchValue} />
    </div>
  );
};

export default Header;
