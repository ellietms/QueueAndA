import React, { useContext } from "react";
import { UserContext } from "./UserContext";


function Search() {

      const {searchValue, setSearchValue} = useContext(UserContext);

      return(
            <div>
                  <input type="text" value={searchValue} placeholder="search..." onChange={(e) => setSearchValue(e.target.value)}></input>
            </div>
      )

} 

export default Search