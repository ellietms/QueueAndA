import React from "react";
import AskButton from './AskButton';
import MainPageSearch from "./MainPageSearch";
import "bootstrap/dist/css/bootstrap.css";

const MainPageHeader = ({handleSearchValue,value}) => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <img
            src="https://www.newsshopper.co.uk/resources/images/2669419.jpg"
            className="d-inline-block align-top mt-1 rounded"
            alt="Q&A logo"
          />
          <span className="navbar-brand mb-0 logo ml-1 mt-1">QueueAndA</span>
        </div>
        <div className="d-flex my-2">
        <MainPageSearch value={value} handleSearchValue={handleSearchValue}/>  
        <AskButton/>
        </div>
      </nav>
    </div>
  );
};

export default MainPageHeader;
