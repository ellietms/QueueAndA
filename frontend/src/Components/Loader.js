import React from "react";
import './Loader.css';
import "bootstrap/dist/css/bootstrap.css";

const Loader = () => {
  return (
    <React.Fragment>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </React.Fragment>
  );
};

export default Loader;
