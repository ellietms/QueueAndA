import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar ml-5">
        <span className="navbar-brand" href="#">
          <img
           src="https://www.newsshopper.co.uk/resources/images/2669419.jpg"
            width="50"
            height="40"
            className="d-inline-block align-top mt-1 rounded"
            alt=""
          />
          <span className="navbar-brand mb-0 logo ml-1 mt-1">QueueAndA</span>
        </span>
      </nav>
    </div>
  );
};

export default Header;
