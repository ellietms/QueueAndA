import React from "react";

const DataTime = ({ datatime }) => {
  return (
    <div className="d-flex flex-column dataTime_container">
      <i class="far fa-clock date">{datatime.split("T")[1].split(".")[0]}</i>
      <i class="far fa-calendar-alt date"> {datatime.split("T")[0]}</i>
    </div>
  );
};
export default DataTime;
