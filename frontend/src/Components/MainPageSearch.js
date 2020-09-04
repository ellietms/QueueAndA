import React from "react";
import "bootstrap/dist/css/bootstrap.css";



const MainPageSearch = ({handleSearchValue,value}) => {
    return(
        <div className="ml-auto pr-2">
            <input type="search" className="search_mainPage my-3 ml-auto" placeholder="search" value={value}
            onChange={(event) => handleSearchValue(event.target.value)}
            />
        </div>
    )
}


export default MainPageSearch;