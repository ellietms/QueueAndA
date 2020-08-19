import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const TitleOfQuestion = () => {
    return(
        <div>
            <label className="px-2 title_font">
            <Link to="/answer">Title Of The Question</Link>
            </label>
        </div>
    )
}

export default TitleOfQuestion;