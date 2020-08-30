import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar ml-5">
        <span className="navbar-brand" href="#">
          <img
            // src="data:image/png;base64,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"
           src="https://www.newsshopper.co.uk/resources/images/2669419.jpg"
            width="50"
            height="40"
            className="d-inline-block align-top mt-1"
            alt=""
          />
          <span className="navbar-brand mb-0 logo ml-1 mt-1">QueueAndA</span>
        </span>
        <Search/>
      </nav>
    </div>
  );
};

export default Header;
