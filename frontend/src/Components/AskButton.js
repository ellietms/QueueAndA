import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "../App";

const Button = () => {
  return (
    <div className="container mt-3">
      <button type="button" className="ask_button">
        <Link to="/ask" style={{ textDecoration: "none",color:"white"}}>
          Ask a question
        </Link>
      </button>
    </div>
  );
};

export default Button;
