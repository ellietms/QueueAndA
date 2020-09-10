import React from "react";
import AskButton from './AskButton';
import MainPageSearch from "./MainPageSearch";
import DropDownAnswered from "./DropDownAnswered";
import DropDownCategories from './DropDownCategories';
import "bootstrap/dist/css/bootstrap.css";

const MainPageHeader = ({handleSearchValue,value,setSpecificModule,setNoAnswer}) => {
  return (
    <div className="header">
      <div className="d-flex">
          <img
            src="https://www.newsshopper.co.uk/resources/images/2669419.jpg"
            className="d-flex align-top my-3 mx-1 rounded-circle"
            alt="Q&A logo"
          />
          <span className="navbar-brand mb-0 logo my-3 text-danger">QueueAndA</span>
        <MainPageSearch value={value} handleSearchValue={handleSearchValue}/> 
        </div>
        <div className="d-flex ml-auto my-3">
        <AskButton/>
        <DropDownAnswered 
           showQuestionWithNoAnswer={(question) => setNoAnswer(question)}/>
        <DropDownCategories showSpecificModule={(category) => setSpecificModule(category)}/> 
        </div>
        </div>
    //   </nav>
    // </div>
  );
};

export default MainPageHeader;
