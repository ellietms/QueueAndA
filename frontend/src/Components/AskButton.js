import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "../App";

const Button = () => {
  return (
      <button type="button" className="btn header_button py-2">
        <Link to="/ask" style={{ textDecoration: "none",color:"black"}}>
          Ask a question
        </Link>
      </button>
  );
};

export default Button;
