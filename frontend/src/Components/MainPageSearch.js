import React from "react";
import "bootstrap/dist/css/bootstrap.css";



const MainPageSearch = ({handleSearchValue,value}) => {
    return(
        <div>
            <input type="search" className="search_mainPage" placeholder="search" value={value}
            onChange={(event) => handleSearchValue(event.target.value)}
            />
        </div>
    )
}


export default MainPageSearch;