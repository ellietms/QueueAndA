import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import "../../../App";

const Button = () => {
  const Link = styled(NavLink)`     
  textDecoration: "none";
  color:black;

   &:hover {
   color: #a52a04;
   textDecoration: "none";
   display:block
   }`
  return (
    <Link to="/ask" style={{textDecoration: "none"}}>
    <button type="button" className="header_button askbtn ask_hover">
        Ask question
    </button>
     </Link>
  );
};

export default Button;
