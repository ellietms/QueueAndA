import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const TitleOfQuestion = ({ title }) => {
  return (
    <div>
      <label className="px-2 title_font">{title}</label>
    </div>
  );
};

export default TitleOfQuestion;
