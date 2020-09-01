import React from "react";
import './Loader.css';
import "bootstrap/dist/css/bootstrap.css";

const Loader = () => {
  return (
    <div className="text-center">
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
    </div>
  );
};

export default Loader;