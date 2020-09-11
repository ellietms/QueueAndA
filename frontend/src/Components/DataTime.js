import React from "react";

const DataTime = ({ datatime }) => {
  return (
    <div className="dataTime">
      <i class="far fa-clock">{datatime.split("T")[1].split(".")[0]}</i>
      <i class="far fa-calendar-alt"> {datatime.split("T")[0]}</i>
    </div>
  );
};
export default DataTime;
