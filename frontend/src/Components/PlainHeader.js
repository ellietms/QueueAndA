import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


const PlainHeader = () => {
  return (
    <Link to="/" style={{textDecoration: "none", color: "black" , cursor:"pointer"}}>
    <div className="plain_header">
          <img
           src="https://www.newsshopper.co.uk/resources/images/2669419.jpg"
            width="50"
            height="40"
            className="d-inline-block align-top my-2 ml-4 rounded-circle"
            alt=""
          />
          <span className="navbar-brand mb-0 logo ml-1 my-2 mr-2 ">QueueAndA</span>
        </div>
      </Link>
  );
};

export default PlainHeader;
