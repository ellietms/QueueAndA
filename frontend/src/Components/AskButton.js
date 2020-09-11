import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import "../App";

const Button = () => {
  const Link = styled(NavLink)`     
  textDecoration: "none";
  color:black

   &:hover {
   color: red;
   textDecoration: "none";
   display:block
   }`
  return (
    <Link to="/ask">
    <button type="button" className="btn header_button askbtn">
        Ask question
    </button>
     </Link>
  );
};

export default Button;
