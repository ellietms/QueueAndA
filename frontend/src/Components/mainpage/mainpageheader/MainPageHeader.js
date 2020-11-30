import React from "react";
import AskButton from '../mainpageheader/AskButton';
import MainPageSearch from "../mainpageheader/MainPageSearch";
import DropDownAnswered from "../mainpageheader/DropDownAnswered";
import DropDownCategories from '../mainpageheader/DropDownCategories';
import "bootstrap/dist/css/bootstrap.css";

const MainPageHeader = ({handleSearchValue,value,setSpecificModule,setNoAnswer}) => {
  return (
    <div className="header">
          <img
            src="https://www.newsshopper.co.uk/resources/images/2669419.jpg"
            className="d-flex align-top my-3 rounded-circle"
            alt="Q&A logo"
          />
          <span className="navbar-brand mb-0 logo my-3">QueueAndA</span>
        <MainPageSearch value={value} handleSearchValue={handleSearchValue}/> 
        <div className="d-flex margin_headerBtn">
        <DropDownAnswered 
           showQuestionWithNoAnswer={(question) => setNoAnswer(question)}/>
        <DropDownCategories showSpecificModule={(category) => setSpecificModule(category)}/> 
        <AskButton/>
      </div>
    </div>
  );
};

export default MainPageHeader;
