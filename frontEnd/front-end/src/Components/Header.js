import React from "react";
import Button from './AskButton';
import "bootstrap/dist/css/bootstrap.css";


const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <span className="navbar-brand mb-0 title_font">QueueAndA</span>
        <Button />
      </nav>
    </div>
  );
};

export default Header;
