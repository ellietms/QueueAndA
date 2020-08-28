import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "../App";

const Button = () => {
  return (
    <div className="container">
      <div className="ask_button">
      <div className="text">
        All Questions
      </div>
      <button type="button" className="button mt-3">
        <Link to="/ask" style={{ textDecoration: "none",color:"white"}}>
          Ask a question
        </Link>
      </button>
      </div>
    </div>
  );
};

export default Button;
