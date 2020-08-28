import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search"


const Header = (props) => {
  
  return ( 
    <div className="header">
      <nav className="navbar">
        <span className="navbar-brand mb-0 logo ml-5">QueueAndA</span>
        <Search searchBox = {props.searchBox} />
      </nav>
    </div>
  );
};

export default Header;
